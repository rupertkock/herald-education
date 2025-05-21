import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "角聲教育事工 | 後台管理系統",
  description: "角聲教育事工後台管理系統",
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
