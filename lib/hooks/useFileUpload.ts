"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export interface FileUploadOptions {
  category?: string;
  description?: string;
  onProgress?: (progress: number) => void;
  onSuccess?: (fileId: string, url: string) => void;
  onError?: (error: string) => void;
}

export interface UploadedFile {
  fileId: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  url: string;
  category?: string;
  description?: string;
}

export function useFileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const saveFile = useMutation(api.files.saveFile);

  const uploadFile = async (
    file: File,
    options: FileUploadOptions = {}
  ): Promise<UploadedFile> => {
    try {
      setIsUploading(true);
      setUploadProgress(0);
      options.onProgress?.(0);

      // Step 1: Generate upload URL
      const uploadUrl = await generateUploadUrl();
      
      // Step 2: Upload file to Convex storage
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!result.ok) {
        throw new Error(`Upload failed: ${result.statusText}`);
      }

      const { storageId } = await result.json();
      setUploadProgress(50);
      options.onProgress?.(50);

      // Step 3: Save file metadata
      const fileId = await saveFile({
        storageId,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        category: options.category,
        description: options.description,
      });

      setUploadProgress(100);
      options.onProgress?.(100);

      // Step 4: Get the file URL
      const fileUrl = await fetch(`/api/convex/files/url?storageId=${storageId}`);
      const { url } = await fileUrl.json();

      const uploadedFile: UploadedFile = {
        fileId,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        url,
        category: options.category,
        description: options.description,
      };

      options.onSuccess?.(fileId, url);
      return uploadedFile;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Upload failed";
      options.onError?.(errorMessage);
      throw error;
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const uploadMultipleFiles = async (
    files: FileList | File[],
    options: FileUploadOptions = {}
  ): Promise<UploadedFile[]> => {
    const fileArray = Array.from(files);
    const uploadPromises = fileArray.map((file, index) => {
      const fileOptions = {
        ...options,
        onProgress: (progress: number) => {
          const totalProgress = ((index * 100) + progress) / fileArray.length;
          options.onProgress?.(totalProgress);
        },
      };
      return uploadFile(file, fileOptions);
    });

    return Promise.all(uploadPromises);
  };

  return {
    uploadFile,
    uploadMultipleFiles,
    isUploading,
    uploadProgress,
  };
}