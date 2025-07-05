import { NextRequest, NextResponse } from "next/server";
import { convex } from "@/lib/convex";
import { api } from "../../../../../convex/_generated/api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const storageId = searchParams.get("storageId");

    if (!storageId) {
      return NextResponse.json(
        { error: "Storage ID is required" },
        { status: 400 }
      );
    }

    const url = await convex.query(api.files.getFileUrl, {
      storageId: storageId as any,
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error getting file URL:", error);
    return NextResponse.json(
      { error: "Failed to get file URL" },
      { status: 500 }
    );
  }
}