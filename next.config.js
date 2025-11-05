//next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.{glsl,vs,fs,vert,frag}": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
      },
    },
  },
  /* experimental: {
    turbo: false,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(glsl,vs,fs,vert,frag)$/,
      use: ["raw-loader"],
    });
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        util: false,
      };
    }
    return config;
  }, */
};
module.exports = nextConfig;
