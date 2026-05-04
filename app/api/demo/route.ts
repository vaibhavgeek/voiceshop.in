import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { website, mobile } = await request.json();

  const response = await fetch("https://formspree.io/f/xqenpyqv", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "ketankachhadia.3@gmail.com",
      website,
      mobile,
      message: `New Demo Request\nWebsite: ${website}\nMobile: ${mobile}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
