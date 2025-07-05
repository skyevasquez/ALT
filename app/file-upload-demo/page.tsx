"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { api } from "../../convex/_generated/api";
import { UploadedFile } from "@/lib/hooks/useFileUpload";
import { Download, Eye, Trash2 } from "lucide-react";

export default function FileUploadDemo() {
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  
  // Query all files from Convex
  const allFiles = useQuery(api.files.listFiles, {
    category: selectedCategory === "all" ? undefined : selectedCategory,
  });

  const categories = [
    { value: "all", label: "All Files" },
    { value: "general", label: "General" },
    { value: "images", label: "Images" },
    { value: "documents", label: "Documents" },
    { value: "quotes", label: "Quotes" },
    { value: "invoices", label: "Invoices" },
  ];

  const handleFilesUploaded = (files: UploadedFile[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Convex File Storage Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upload and manage files using Convex as the storage backend. 
            This replaces traditional solutions like UploadThing with a more integrated approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Files</CardTitle>
              <CardDescription>
                Select a category and upload your files to Convex storage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                >
                  {categories.filter(cat => cat.value !== "all").map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* File Upload Component */}
              <FileUpload
                onFilesUploaded={handleFilesUploaded}
                category={selectedCategory}
                maxFiles={10}
                maxSize={50 * 1024 * 1024} // 50MB
                acceptedFileTypes={[
                  "image/*",
                  "application/pdf",
                  ".doc",
                  ".docx",
                  ".txt",
                  ".csv",
                  ".xlsx",
                ]}
              />
            </CardContent>
          </Card>

          {/* File Management Section */}
          <Card>
            <CardHeader>
              <CardTitle>File Management</CardTitle>
              <CardDescription>
                View and manage uploaded files from Convex storage
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Category Filter */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.value)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Files List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {allFiles?.map((file: any) => (
                  <Card key={file._id} className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {file.fileName}
                          </p>
                          {file.category && (
                            <Badge variant="secondary" className="text-xs">
                              {file.category}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span>{formatFileSize(file.fileSize)}</span>
                          <span>{formatDate(file.uploadedAt)}</span>
                        </div>
                        {file.description && (
                          <p className="text-xs text-gray-600 mt-1 truncate">
                            {file.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(file.url, "_blank")}
                          title="View file"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = file.url;
                            link.download = file.fileName;
                            link.click();
                          }}
                          title="Download file"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                )) || (
                  <div className="text-center py-8 text-gray-500">
                    {allFiles === undefined ? "Loading files..." : "No files found"}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Convex Storage Features</CardTitle>
            <CardDescription>
              Benefits of using Convex for file storage over UploadThing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">🔗</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Integrated Backend</h3>
                <p className="text-sm text-gray-600">
                  Files are stored directly in your Convex backend, eliminating the need for external services
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">💾</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Metadata Storage</h3>
                <p className="text-sm text-gray-600">
                  File metadata is automatically stored in your database with full query capabilities
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 text-xl">🔄</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
                <p className="text-sm text-gray-600">
                  File lists update in real-time across all connected clients using Convex subscriptions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 text-xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Built-in Security</h3>
                <p className="text-sm text-gray-600">
                  Leverage Convex's authentication and authorization for secure file access
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 text-xl">💰</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cost Effective</h3>
                <p className="text-sm text-gray-600">
                  No additional service fees - storage is included with your Convex plan
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Type Safety</h3>
                <p className="text-sm text-gray-600">
                  Full TypeScript support with generated types for all file operations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}