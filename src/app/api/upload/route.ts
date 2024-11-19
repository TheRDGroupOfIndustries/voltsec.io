import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDNARY_NAME as string,
  api_key: process.env.NEXT_PUBLIC_CLOUDNARY_API as string,
  api_secret: process.env.NEXT_PUBLIC_CLOUDNARY_KEY as string,
});

export async function POST(req: Request): Promise<Response> {
  try {
    // Get the raw request body as a readable stream
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }

    // Parse the FormData from the request
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert the file to a Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Upload the file to Cloudinary using a buffer
    const uploadResponse = await cloudinary.uploader.upload(`data:${file.type};base64,${buffer.toString('base64')}`, {
      folder: 'nextjs_uploads',
      resource_type: 'raw',
    });

    // Return the uploaded file's URL
    return NextResponse.json({ url: uploadResponse.secure_url }, { status: 200 });
  } catch (error: any) {
    console.error('Cloudinary upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file', details: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
