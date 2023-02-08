/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [
    'page.tsx',
    'api.ts',
    'api.tsx'
  ],
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  }
}

module.exports = nextConfig
