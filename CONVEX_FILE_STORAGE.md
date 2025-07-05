# Convex File Storage Implementation

This document outlines the implementation of Convex file storage as a replacement for UploadThing in the Absolute Lawn & Tree application.

## Overview

Convex provides a comprehensive file storage solution that integrates seamlessly with your backend, offering several advantages over external services like UploadThing:

- **Integrated Backend**: Files are stored directly in your Convex deployment
- **Metadata Management**: File information is automatically stored in your database
- **Real-time Updates**: File lists update in real-time across all clients
- **Type Safety**: Full TypeScript support with generated types
- **Cost Effective**: No additional service fees
- **Built-in Security**: Leverage Convex's authentication system

## Setup Instructions

### 1. Install Dependencies

```bash
npm install convex react-dropzone @types/react-dropzone
```

### 2. Environment Variables

Add to your `.env.local` file:

```env
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
```

Get your deployment URL from the Convex dashboard after running `npx convex dev`.

### 3. Initialize Convex Project

```bash
npx convex dev
```

This will:
- Create the `convex/` directory
- Generate API types
- Set up your deployment

## File Structure

```
convex/
├── _generated/
│   ├── api.d.ts
│   ├── dataModel.d.ts
│   └── server.ts
├── convex.config.ts
├── files.ts          # File storage functions
└── schema.ts         # Database schema

lib/
├── convex.tsx        # Convex client setup
└── hooks/
    └── useFileUpload.ts  # File upload hook

components/ui/
└── file-upload.tsx   # File upload component

app/
├── api/convex/files/url/
│   └── route.ts      # API route for file URLs
├── file-upload-demo/
│   └── page.tsx      # Demo page
└── layout.tsx        # Updated with ConvexProvider
```

## Core Components

### 1. Database Schema (`convex/schema.ts`)

Defines the `files` table with the following fields:
- `storageId`: Convex storage identifier
- `fileName`: Original file name
- `fileType`: MIME type
- `fileSize`: File size in bytes
- `description`: Optional file description
- `category`: File category for organization
- `uploadedAt`: Upload timestamp

### 2. File Storage Functions (`convex/files.ts`)

- `generateUploadUrl`: Creates a secure upload URL
- `saveFileMetadata`: Stores file information in the database
- `getFileUrl`: Retrieves the public URL for a file
- `listFiles`: Lists files with optional category filtering
- `deleteFile`: Removes a file and its metadata
- `getFileById`: Retrieves a specific file by ID

### 3. React Hook (`lib/hooks/useFileUpload.ts`)

Provides a convenient interface for:
- Generating upload URLs
- Uploading files with progress tracking
- Saving metadata
- Error handling

### 4. File Upload Component (`components/ui/file-upload.tsx`)

A complete file upload interface featuring:
- Drag and drop functionality
- File type validation
- Size limits
- Progress indicators
- File previews
- Multiple file support

## Usage Examples

### Basic File Upload

```tsx
import { FileUpload } from "@/components/ui/file-upload";

function MyComponent() {
  const handleFilesUploaded = (files) => {
    console.log("Files uploaded:", files);
  };

  return (
    <FileUpload
      onFilesUploaded={handleFilesUploaded}
      category="documents"
      maxFiles={5}
      maxSize={10 * 1024 * 1024} // 10MB
    />
  );
}
```

### Using the Hook Directly

```tsx
import { useFileUpload } from "@/lib/hooks/useFileUpload";

function CustomUpload() {
  const { uploadFile, isUploading, progress } = useFileUpload({
    onSuccess: (file) => console.log("Uploaded:", file),
    onError: (error) => console.error("Error:", error),
  });

  const handleFileSelect = async (file: File) => {
    await uploadFile(file, {
      category: "images",
      description: "Profile picture",
    });
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFileSelect(e.target.files[0])} />
      {isUploading && <div>Progress: {progress}%</div>}
    </div>
  );
}
```

### Querying Files

```tsx
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function FileList() {
  const files = useQuery(api.files.listFiles, {
    category: "documents",
  });

  return (
    <div>
      {files?.map((file) => (
        <div key={file._id}>
          <a href={file.url} target="_blank">
            {file.fileName}
          </a>
        </div>
      ))}
    </div>
  );
}
```

## Migration from UploadThing

### Key Differences

1. **No External Service**: Files are stored in Convex, not a third-party service
2. **Integrated Metadata**: File information is stored in your database automatically
3. **Real-time Updates**: File lists update instantly across all clients
4. **Type Safety**: Full TypeScript support with generated types
5. **Authentication**: Uses your existing Convex auth system

### Migration Steps

1. **Remove UploadThing Dependencies**:
   ```bash
   npm uninstall uploadthing @uploadthing/react
   ```

2. **Replace Upload Components**: Update existing file upload components to use the new Convex-based `FileUpload` component

3. **Update File References**: Change file URL references to use the new Convex storage URLs

4. **Migrate Existing Files** (if needed): Create a migration script to move existing files from UploadThing to Convex

## Demo Page

Visit `/file-upload-demo` to see the file storage system in action. The demo includes:
- File upload with category selection
- Real-time file listing
- File management (view, download)
- Category filtering
- Feature comparison with UploadThing

## Security Considerations

- File uploads are secured through Convex's built-in authentication
- Upload URLs are temporary and expire automatically
- File access can be controlled through Convex's authorization system
- All file operations are logged and auditable

## Performance Benefits

- **Reduced Latency**: Files are served from the same infrastructure as your backend
- **Better Caching**: Leverage Convex's built-in caching mechanisms
- **Fewer Network Requests**: Integrated metadata reduces API calls
- **Real-time Sync**: File lists stay synchronized across all clients

## Cost Comparison

| Feature | UploadThing | Convex |
|---------|-------------|--------|
| Storage | Separate billing | Included in plan |
| Bandwidth | Per GB charges | Included |
| API Calls | Limited/paid | Unlimited |
| Metadata Storage | External database | Built-in |
| Real-time Updates | Additional setup | Native |

## Troubleshooting

### Common Issues

1. **"CONVEX_DEPLOYMENT not set" Error**:
   - Run `npx convex dev` to set up your deployment
   - Ensure `NEXT_PUBLIC_CONVEX_URL` is set in your environment

2. **Upload Failures**:
   - Check file size limits
   - Verify file type restrictions
   - Ensure proper authentication

3. **Files Not Appearing**:
   - Check category filters
   - Verify the file was saved to the database
   - Ensure real-time subscriptions are working

### Debug Mode

Enable debug logging by setting:
```env
DEBUG=convex:*
```

## Next Steps

1. **Add Authentication**: Implement user-specific file access
2. **Image Processing**: Add image resizing and optimization
3. **File Versioning**: Track file versions and changes
4. **Bulk Operations**: Implement bulk upload and delete
5. **Advanced Search**: Add full-text search capabilities
6. **File Sharing**: Implement secure file sharing links

## Support

For issues or questions:
- Check the [Convex Documentation](https://docs.convex.dev/)
- Review the demo implementation at `/file-upload-demo`
- Examine the source code in the `convex/` directory