"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // 在實際應用中，這裡應該使用更安全的認證方式，如OAuth或JWT
    // 這裡僅作為示範，使用簡單的認證邏輯
    try {
      // 模擬API請求延遲
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 簡單的認證邏輯，實際應用中應該使用加密和安全的認證方式
      if (username === "admin" && password === "admin123") {
        // 設置一個簡單的session標記
        sessionStorage.setItem("admin-auth", "true")
        router.push("/admin/dashboard")
      } else {
        setError("用戶名或密碼錯誤")
      }
    } catch (err) {
      setError("登錄過程中發生錯誤，請稍後再試")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-16 h-16 mb-4 relative">
            <Image src="/logo.png" alt="角聲教育事工" fill className="rounded-full object-cover" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">管理員登錄</CardTitle>
          <CardDescription className="text-center">角聲教育事工後台管理系統</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username">用戶名</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="請輸入用戶名"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">密碼</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="請輸入密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                {loading ? "登錄中..." : "登錄"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">提示：用戶名 admin，密碼 admin123</p>
        </CardFooter>
      </Card>
    </div>
  )
}
