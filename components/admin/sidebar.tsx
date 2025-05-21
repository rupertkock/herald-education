"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Images, Users, MessageSquare, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "儀表板",
    href: "/admin/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "照片管理",
    href: "/admin/dashboard/photos",
    icon: <Images className="h-5 w-5" />,
  },
  {
    title: "教師管理",
    href: "/admin/dashboard/teachers",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "聯絡訊息",
    href: "/admin/dashboard/messages",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "系統設置",
    href: "/admin/dashboard/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    sessionStorage.removeItem("admin-auth")
    router.push("/admin/login")
  }

  return (
    <>
      <div
        className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 ease-in-out h-screen flex flex-col",
          collapsed ? "w-20" : "w-64",
        )}
      >
        <div className="p-4 border-b flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="角聲教育事工" width={40} height={40} className="rounded-full" />
              <div className="flex flex-col">
                <span className="font-bold text-sm">角聲教育事工</span>
                <span className="text-xs text-gray-500">管理系統</span>
              </div>
            </div>
          )}
          {collapsed && (
            <Image src="/logo.png" alt="角聲教育事工" width={40} height={40} className="rounded-full mx-auto" />
          )}
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8">
            {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex-1 py-6 overflow-y-auto">
          <nav className="px-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors",
                  pathname === item.href ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-100",
                  collapsed ? "justify-center" : "justify-start",
                )}
              >
                {item.icon}
                {!collapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center text-red-600 hover:bg-red-50 hover:text-red-700",
              collapsed ? "justify-center px-2" : "justify-start",
            )}
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-3">登出</span>}
          </Button>
        </div>
      </div>

      {/* 移動設備側邊欄切換按鈕 */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 md:hidden bg-white shadow-lg"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </Button>
    </>
  )
}
