import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// import dns from "dns"

// dns.setDefaultResultOrder("verbatim")

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                secure: false,
            },
        }
    }
})
