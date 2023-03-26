/** @type {import('next').NextConfig} */
// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

// Cara Manual :
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, options) => {
//     config.plugins.push(new BundleAnalyzerPlugin())
//     return config
//   },
// }

const nextConfig = {
  reactStrictMode: true,
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
})

module.exports = withBundleAnalyzer(nextConfig);
