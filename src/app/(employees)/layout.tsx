import Footer from "@/components/HeaderAndFooter/Footer"
import NavigationHeader from "@/components/HeaderAndFooter/NavigationHeader"
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Employees",
  description: "The employees dashboard",
}

const navigationData = [
  {
    name: "attendance",
    title: "Attendance",
    path: "/employees/attendance",
  },
  {
    name: "payroll",
    title: "Payroll",
    path: "/employees/payroll",
  },
  {
    name: "leave",
    title: "Leave Management",
    path: "/employees/leave-management",
  },
  {
    name: "performance",
    title: "Performance",
    path: "/employees/performance",
  },
]
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationHeader
          data={navigationData}
          color="text-black"
          bgColor="bg-amber-500"
        />
        <div> {children}</div>
        <Footer />
      </body>
    </html>
  )
}
