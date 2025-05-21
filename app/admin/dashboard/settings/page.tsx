"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, RefreshCw, Shield, Mail, Globe, AlertTriangle, User } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "角聲教育事工",
    siteDescription: "提供全人發展的教育環境，培養孩子的品格、學術能力和創造力。",
    contactEmail: "education@cchc.org",
    contactPhone: "347-718-8384 / 718-359-2030",
    address: "角聲使命中心 156-03 Horace Harding Expy, Flushing, NY 11367",
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpServer: "smtp.example.com",
    smtpPort: "587",
    smtpUsername: "notifications@heraldedu.org",
    smtpPassword: "••••••••••••",
    senderName: "角聲教育事工",
    senderEmail: "notifications@heraldedu.org",
    enableNotifications: true,
  })

  const [accountSettings, setAccountSettings] = useState({
    username: "admin",
    email: "admin@heraldedu.org",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [saving, setSaving] = useState(false)

  const handleSaveGeneral = async () => {
    setSaving(true)
    // 模擬API請求
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSaving(false)
    alert("設置已保存")
  }

  const handleSaveEmail = async () => {
    setSaving(true)
    // 模擬API請求
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSaving(false)
    alert("郵件設置已保存")
  }

  const handleChangePassword = async () => {
    if (accountSettings.newPassword !== accountSettings.confirmPassword) {
      alert("新密碼和確認密碼不匹配")
      return
    }

    setSaving(true)
    // 模擬API請求
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSaving(false)

    setAccountSettings({
      ...accountSettings,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })

    alert("密碼已更改")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">系統設置</h1>
        <p className="text-gray-500">管理網站的基本設置和配置</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>基本設置</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>郵件設置</span>
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>帳戶設置</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>基本設置</CardTitle>
              <CardDescription>設置網站的基本信息，這些信息將顯示在網站的各個部分。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="siteName">網站名稱</Label>
                <Input
                  id="siteName"
                  value={generalSettings.siteName}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, siteName: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="siteDescription">網站描述</Label>
                <Textarea
                  id="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, siteDescription: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contactEmail">聯絡郵箱</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={generalSettings.contactEmail}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, contactEmail: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contactPhone">聯絡電話</Label>
                <Input
                  id="contactPhone"
                  value={generalSettings.contactPhone}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, contactPhone: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">地址</Label>
                <Textarea
                  id="address"
                  value={generalSettings.address}
                  onChange={(e) => setGeneralSettings({ ...generalSettings, address: e.target.value })}
                  rows={2}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSaveGeneral} disabled={saving} className="bg-green-600 hover:bg-green-700">
                {saving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    保存中...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    保存設置
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>郵件設置</CardTitle>
              <CardDescription>配置郵件服務器設置，用於發送系統通知和用戶郵件。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="smtpServer">SMTP 服務器</Label>
                  <Input
                    id="smtpServer"
                    value={emailSettings.smtpServer}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpServer: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="smtpPort">SMTP 端口</Label>
                  <Input
                    id="smtpPort"
                    value={emailSettings.smtpPort}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpPort: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="smtpUsername">SMTP 用戶名</Label>
                  <Input
                    id="smtpUsername"
                    value={emailSettings.smtpUsername}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpUsername: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="smtpPassword">SMTP 密碼</Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={(e) => setEmailSettings({ ...emailSettings, smtpPassword: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="senderName">發件人名稱</Label>
                  <Input
                    id="senderName"
                    value={emailSettings.senderName}
                    onChange={(e) => setEmailSettings({ ...emailSettings, senderName: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="senderEmail">發件人郵箱</Label>
                  <Input
                    id="senderEmail"
                    type="email"
                    value={emailSettings.senderEmail}
                    onChange={(e) => setEmailSettings({ ...emailSettings, senderEmail: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="enableNotifications"
                  checked={emailSettings.enableNotifications}
                  onCheckedChange={(checked) => setEmailSettings({ ...emailSettings, enableNotifications: checked })}
                />
                <Label htmlFor="enableNotifications">啟用郵件通知</Label>
              </div>
              <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-800 font-medium">注意</p>
                  <p className="text-sm text-yellow-700">
                    請確保SMTP設置正確，否則系統將無法發送郵件通知。您可以使用測試按鈕來驗證設置是否正確。
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">測試連接</Button>
              <Button onClick={handleSaveEmail} disabled={saving} className="bg-green-600 hover:bg-green-700">
                {saving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    保存中...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    保存設置
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>帳戶設置</CardTitle>
              <CardDescription>管理您的管理員帳戶信息和密碼。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">用戶名</Label>
                  <Input
                    id="username"
                    value={accountSettings.username}
                    onChange={(e) => setAccountSettings({ ...accountSettings, username: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">電子郵件</Label>
                  <Input
                    id="email"
                    type="email"
                    value={accountSettings.email}
                    onChange={(e) => setAccountSettings({ ...accountSettings, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">更改密碼</h3>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="currentPassword">當前密碼</Label>
                    <Input
                      id="currentPassword"
                      type="password"
                      value={accountSettings.currentPassword}
                      onChange={(e) => setAccountSettings({ ...accountSettings, currentPassword: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="newPassword">新密碼</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={accountSettings.newPassword}
                        onChange={(e) => setAccountSettings({ ...accountSettings, newPassword: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">確認新密碼</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={accountSettings.confirmPassword}
                        onChange={(e) => setAccountSettings({ ...accountSettings, confirmPassword: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                    重置帳戶
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>確定要重置帳戶嗎？</AlertDialogTitle>
                    <AlertDialogDescription>
                      此操作將重置您的帳戶設置，但不會刪除您的帳戶。您需要重新設置您的帳戶信息。
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>取消</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">重置</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button
                onClick={handleChangePassword}
                disabled={
                  saving ||
                  !accountSettings.currentPassword ||
                  !accountSettings.newPassword ||
                  !accountSettings.confirmPassword
                }
                className="bg-green-600 hover:bg-green-700"
              >
                {saving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    保存中...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-4 w-4" />
                    更改密碼
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
