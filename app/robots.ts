export async function GET() {
  // Minimal robots.txt placeholder
  return new Response('User-agent: *\nDisallow:')
}
