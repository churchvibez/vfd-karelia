import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";

export async function GET(req: NextRequest) {
    const dm = await draftMode()
    dm.disable()

  const { searchParams } = new URL(req.url);
  const redirectTo = searchParams.get("redirect") || "/";

  return NextResponse.redirect(new URL(redirectTo, req.url));
}