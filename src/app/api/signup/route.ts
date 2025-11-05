import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { getFriendlyErrorMessage } from "@/lib/errorMessages";

const SignupSchema = z.object({
  first_name: z.string().min(1).max(100),
  email: z.email(),
  occupation: z.string().nullable().optional(),
  occupation_other: z.string().nullable().optional(),
  referral: z.string().nullable().optional(),
  learn_interest: z.string().nullable().optional(),
  goal: z.string().nullable().optional(),
  organization: z.string().nullable().optional(),
  city: z.string().nullable().optional(),
  learning_style: z.string().nullable().optional(),
  updates_consent: z.boolean().optional(),
  course_id: z.string().default("Palestine101"),
});


export async function POST(req: Request) {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY! 
  );

  try {
    const body = await req.json();
    const validation = SignupSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input", details: validation.error.format() },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("signups")
      .insert([validation.data]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: getFriendlyErrorMessage(error.message) }, { status: 400 });
    }
    console.log(JSON.stringify({
      route: "/api/signup",
      status: 201,
      ip: req.headers.get("CF-Connecting-IP"),
      timestamp: new Date().toISOString()
    }));
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("Unexpected exception:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}