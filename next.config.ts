import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
    remotePatterns: [new URL('http://localhost:3000/**')],
  },
};

export default nextConfig;

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
