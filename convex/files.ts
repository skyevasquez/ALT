import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import type { MutationCtx, QueryCtx } from "./_generated/server";

// Generate an upload URL for file storage
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx: MutationCtx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

// Store file metadata after upload
export const saveFile = mutation({
  args: {
    storageId: v.id("_storage"),
    fileName: v.string(),
    fileType: v.string(),
    fileSize: v.number(),
    description: v.optional(v.string()),
    category: v.optional(v.string()),
  },
  handler: async (ctx: MutationCtx, args: any) => {
    const fileId = await ctx.db.insert("files", {
      storageId: args.storageId,
      fileName: args.fileName,
      fileType: args.fileType,
      fileSize: args.fileSize,
      description: args.description,
      category: args.category,
      uploadedAt: Date.now(),
    });
    return fileId;
  },
});

// Get file URL for display
export const getFileUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx: QueryCtx, args: any) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});

// List all files
export const listFiles = query({
  args: {
    category: v.optional(v.string()),
  },
  handler: async (ctx: QueryCtx, args: any) => {
    let query = ctx.db.query("files");
    
    if (args.category) {
      query = query.filter((q: any) => q.eq(q.field("category"), args.category));
    }
    
    const files = await query.order("desc").collect();
    
    // Get URLs for each file
    const filesWithUrls = await Promise.all(
      files.map(async (file: any) => ({
        ...file,
        url: await ctx.storage.getUrl(file.storageId),
      }))
    );
    
    return filesWithUrls;
  },
});

// Delete a file
export const deleteFile = mutation({
  args: { fileId: v.id("files") },
  handler: async (ctx: MutationCtx, args: any) => {
    const file = await ctx.db.get(args.fileId);
    if (!file) {
      throw new Error("File not found");
    }
    
    // Delete from storage
    await ctx.storage.delete(file.storageId);
    
    // Delete from database
    await ctx.db.delete(args.fileId);
    
    return { success: true };
  },
});

// Get file by ID
export const getFile = query({
  args: { fileId: v.id("files") },
  handler: async (ctx: QueryCtx, args: any) => {
    const file = await ctx.db.get(args.fileId);
    if (!file) {
      return null;
    }
    
    return {
      ...file,
      url: await ctx.storage.getUrl(file.storageId),
    };
  },
});