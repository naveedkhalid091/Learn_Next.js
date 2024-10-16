import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {
    const name = url.searchParams.get("name");
    return new NextResponse("hello, Mr. " + name);
  } else {
    return new NextResponse("Please send your name in search parameter'name'");
  }
};
