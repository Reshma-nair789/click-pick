import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en", // Set the default language
    locales: ["en", "fr", "es"], // List of supported languages
  },
};

module.exports = nextConfig;
