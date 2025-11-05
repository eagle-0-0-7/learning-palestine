import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY! // server-side only
  );

  // Generate signed URL valid for 1 hour
  const { data, error } = await supabase.storage
    .from("lms-assets")
    .createSignedUrl("P101_final.mp4", 60 * 60);

  if (error || !data?.signedUrl) {
    console.error("Error generating signed URL:", error);
    return NextResponse.json({ error: "Failed to get video URL" }, { status: 500 });
  }
  return NextResponse.json({ url: data.signedUrl });
}