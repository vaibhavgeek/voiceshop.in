import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { website, mobile } = await request.json();

  await resend.emails.send({
    from: "VoiceShop Demo <noreply@voiceshop.in>",
    to: ["ketan@voiceshop.in", "vaibhav@voiceshop.in"],
    subject: `New Demo Request — ${website}`,
    html: `
      <h2>New Demo Request</h2>
      <p><strong>Website:</strong> ${website}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
