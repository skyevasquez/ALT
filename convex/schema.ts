import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  files: defineTable({
    storageId: v.id("_storage"),
    fileName: v.string(),
    fileType: v.string(),
    fileSize: v.number(),
    description: v.optional(v.string()),
    category: v.optional(v.string()),
    uploadedAt: v.number(),
  })
    .index("by_category", ["category"])
    .index("by_upload_date", ["uploadedAt"]),
});