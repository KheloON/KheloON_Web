import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app', 'Khelo_APK.apk');
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename=Khelo_APK.apk',
        'Content-Type': 'application/vnd.android.package-archive',
      },
    });
  } catch (error) {
    return new NextResponse('File not found', { status: 404 });
  }
}
