// app/api/download/route.js
import { NextResponse } from 'next/server';

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  try {
    const fileUrl = decodeURIComponent(url);
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error("File not found");
    }

    const buffer = await response.arrayBuffer();
    return new NextResponse(Buffer.from(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=document.pdf",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Error downloading file" }, { status: 500 });
  }
}
