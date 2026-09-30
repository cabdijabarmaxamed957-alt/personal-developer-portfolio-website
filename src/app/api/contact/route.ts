import { NextRequest, NextResponse } from "next/server";

// In-memory sliding window rate limiter
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // max 5 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const client = rateLimitMap.get(ip);

  if (!client || now > client.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (client.count >= MAX_REQUESTS) {
    return true;
  }

  client.count += 1;
  return false;
}

// Input sanitizer
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[&<>"']/g, (m) => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
      };
      return map[m] || m;
    })
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submission attempts. Please wait 1 minute before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, projectType, budget, message, honeypot } = body;

    // Spam honeypot detection: bots fill hidden honeypot field
    if (honeypot) {
      // Silently return success to avoid bot feedback loop
      return NextResponse.json({ success: true, message: "Message dispatched." });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name (min 2 characters)." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a detailed project message (min 10 characters)." },
        { status: 400 }
      );
    }

    // Sanitized inputs
    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      projectType: projectType ? sanitize(projectType) : "General Inquiry",
      budget: budget ? sanitize(budget) : "Not Specified",
      message: sanitize(message),
      receivedAt: new Date().toISOString(),
    };

    // Log the contact inquiry server-side
    console.log("[CONTACT_INQUIRY_RECEIVED]:", sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been securely received. I will review your requirements and respond promptly.",
        data: {
          name: sanitizedData.name,
          receivedAt: sanitizedData.receivedAt,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[CONTACT_API_ERROR]:", err);
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your message." },
      { status: 500 }
    );
  }
}
