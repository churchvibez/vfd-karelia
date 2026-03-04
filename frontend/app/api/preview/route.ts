import { NextRequest, NextResponse } from "next/server";
import { draftMode } from "next/headers";

const SECRET = process.env.PREVIEW_SECRET;

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug");
    const path = searchParams.get("path");

    if(!SECRET || secret !== SECRET) {
        return NextResponse.json({ error: "invalid secret"}, { status: 401});
    }

    const dm = await draftMode()
    dm.enable()

    const redirectTo = path || (slug ? `/${slug}` : "/");
    return NextResponse.redirect(new URL(redirectTo, req.url));

}