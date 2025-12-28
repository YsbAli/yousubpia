import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "../contexts/LanguageContext"
import { Poppins, Crimson_Text, Dancing_Script } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Yousub & Opia - Our Wedding Celebration",
  description: "Join us as we celebrate our love story in traditional Indian style and begin our journey together",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${crimsonText.variable} ${dancingScript.variable} antialiased`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
