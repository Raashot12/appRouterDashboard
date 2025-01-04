import type {Metadata} from "next"
import {Geist, Geist_Mono} from "next/font/google"
import "../globals.css"
import NavigationHeader from "@/components/HeaderAndFooter/NavigationHeader"
import Footer from "@/components/HeaderAndFooter/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ERP Home",
  description: "This is the home page of the ERP application",
}

const navigationData = [
  {name: "dashboard", title: "Dashboard", path: "/"},
  {name: "employees", title: "Employees", path: "/employees/attendance"},
  {name: "reports", title: "Reports", path: "/reports/overview"},
  {name: "settings", title: "Settings", path: "/settings"},
]
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationHeader data={navigationData} bgColor="bg-black" />
        <div> {children}</div>
        <Footer />
      </body>
    </html>
  )
}
