/** @type {import('next').NextConfig} */
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
        },
      },
    };

    // Add bundle analyzer in production build
    if (!dev && !isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze/bundle-report.html',
          openAnalyzer: false,
        })
      );
    }

    return config;
  },
};

export default nextConfig;
