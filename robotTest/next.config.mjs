/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.mjs
export default {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/robotz",
                permanent: true, // 이 값을 false로 설정하면 302 임시 리다이렉트가 됩니다.
            },
        ];
    },
    images: {
        domains: ["example.com", "cdn.example.com"],
    },
    reactStrictMode: false, // 이 줄을 추가하여 Strict Mode를 비활성화
};

//export default nextConfig;