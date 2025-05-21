import type React from "react"
import AdminSidebar from "@/components/admin/sidebar"
import AuthGuard from "@/components/auth-guard"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-gray-100">
        <AdminSidebar />
        <div className="flex-1 p-8">{children}</div>
      </div>
    </AuthGuard>
  )
}
