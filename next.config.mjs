
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;







// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;









// const nextConfig = {
//   experimental: {
//     esmExternals: "loose", // <-- add this
//     serverComponentsExternalPackages: ["mongoose"] // <-- and this
//   },
//   // and the following to enable top-level await support for Webpack
//   webpack: (config) => {
//     config.experiments = {
//       topLevelAwait: true
//     };
//     return config;
//   },
// }








// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
