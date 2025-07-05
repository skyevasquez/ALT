/* eslint-disable */
/**
 * Generated data model types.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import { AnyDataModel } from "convex/server";
import type { GenericId } from "convex/values";

/**
 * No `schema.ts` file found!
 *
 * This generated code has permissive types like `any` because Convex doesn't know
 * your schema. If you're not using a schema, you can ignore this file.
 *
 * If you are using a schema, create a `schema.ts` file in your `convex/` directory
 * and re-run `npx convex dev`. Or, just delete this file and re-run `npx convex dev`.
 */

/**
 * The names of all of your Convex tables.
 */
export type TableNames = "files";

/**
 * The type of a document stored in Convex.
 */
export type Doc<TableName extends TableNames> = TableName extends "files"
  ? {
      _id: GenericId<"files">;
      _creationTime: number;
      storageId: GenericId<"_storage">;
      fileName: string;
      fileType: string;
      fileSize: number;
      description?: string;
      category?: string;
      uploadedAt: number;
    }
  : any;

export type DataModel = {
  files: {
    document: Doc<"files">;
    fieldPaths:
      | "_id"
      | "_creationTime"
      | "storageId"
      | "fileName"
      | "fileType"
      | "fileSize"
      | "description"
      | "category"
      | "uploadedAt";
    indexes: {
      by_category: {
        category?: string;
      };
      by_upload_date: {
        uploadedAt: number;
      };
    };
    searchIndexes: {};
    vectorIndexes: {};
  };
};