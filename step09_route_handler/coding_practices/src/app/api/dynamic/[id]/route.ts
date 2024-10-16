import { NextRequest, NextResponse } from "next/server";

interface Id {
  id: "string";
}
export function GET(request: NextRequest, { params }: { params: Id }) {
  return NextResponse.json(`Dynamic API Route: ${params.id}`);
}
