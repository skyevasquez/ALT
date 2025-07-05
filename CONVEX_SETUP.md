# Convex Setup Guide

## Issue: File Upload Failing

The file upload is currently failing because the Convex deployment URL is not configured. Follow these steps to set up Convex and enable file uploads.

## Setup Steps

### 1. Initialize Convex Project

```bash
npx convex dev
```

When prompted:
- Select **"create a new project"**
- Choose a project name (e.g., "alt-file-storage")
- The CLI will create a new Convex project and provide a deployment URL

### 2. Update Environment Variables

Copy the deployment URL from the Convex CLI output and update your `.env.local` file:

```env
NEXT_PUBLIC_CONVEX_URL=https://your-actual-deployment-name.convex.cloud
```

### 3. Restart Development Server

After updating the environment variable:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it
npm run dev
```

### 4. Test File Upload

1. Navigate to `/file-upload-demo`
2. Try uploading a test video
3. The upload should now work successfully

## What This Fixes

- **File Upload Errors**: Without the Convex URL, the app can't connect to the Convex backend
- **Authentication Issues**: The app was trying to use old UploadThing routes which are protected by Clerk
- **Storage Integration**: Enables the new Convex file storage system

## Troubleshooting

### If uploads still fail:

1. **Check Console Errors**: Open browser dev tools and look for error messages
2. **Verify URL**: Ensure the Convex URL in `.env.local` matches exactly what the CLI provided
3. **Restart Server**: Make sure to restart the Next.js dev server after changing environment variables
4. **Check Convex Dashboard**: Visit the Convex dashboard to verify your project is active

### Common Issues:

- **URL Format**: Make sure the URL starts with `https://` and ends with `.convex.cloud`
- **Environment Variables**: Next.js requires a restart to pick up new environment variables
- **Network Issues**: Ensure you have internet connectivity for Convex cloud services

## Next Steps

Once Convex is set up:

1. **File Management**: Use the demo page to test upload, view, and delete functionality
2. **Integration**: The file upload component is ready to use in other parts of your app
3. **Customization**: Modify file types, size limits, and categories in `convex/files.ts`

## Support

If you continue to experience issues:

1. Check the [Convex Documentation](https://docs.convex.dev/)
2. Review the `CONVEX_FILE_STORAGE.md` file for implementation details
3. Ensure all dependencies are installed: `npm install`