"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trash2, Search, Mail, Phone, Calendar, CheckCircle, Download } from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

// 模擬聯絡訊息數據
const initialMessages = [
  {
    id: 1,
    name: "張小明",
    email: "xming@example.com",
    phone: "347-123-4567",
    subject: "夏令營詢問",
    message:
      "您好，我想了解一下今年夏令營的具體時間和費用，以及報名方式。我有兩個孩子，一個8歲，一個10歲，他們都對夏令營很感興趣。謝謝！",
    date: "2025-04-28",
    status: "未處理",
  },
  {
    id: 2,
    name: "李美華",
    email: "meihua@example.com",
    phone: "347-234-5678",
    subject: "課後班報名",
    message: "我想為我的女兒報名課後輔導班，她今年上三年級。請問有哪些時間段可以選擇？需要提前多久報名？謝謝。",
    date: "2025-04-26",
    status: "已處理",
  },
  {
    id: 3,
    name: "王大偉",
    email: "dawei@example.com",
    phone: "347-345-6789",
    subject: "教師應聘",
    message:
      "您好，我是一名有5年教學經驗的數學老師，對貴機構的教育理念非常認同。我想了解一下是否有數學教師的職位空缺？我可以提供我的簡歷和推薦信。期待您的回覆。",
    date: "2025-04-25",
    status: "處理中",
  },
  {
    id: 4,
    name: "陳小紅",
    email: "xiaohong@example.com",
    phone: "347-456-7890",
    subject: "參觀預約",
    message: "您好，我想帶我的孩子來參觀貴機構，了解一下教學環境和課程設置。請問什麼時間方便？需要提前預約嗎？謝謝。",
    date: "2025-04-23",
    status: "未處理",
  },
  {
    id: 5,
    name: "林小勇",
    email: "xiaoyong@example.com",
    phone: "347-567-8901",
    subject: "課程建議",
    message:
      "您好，我是一位家長，我的孩子在貴機構學習已經一年了。我想建議增加一些科學實驗類的課程，因為我發現很多孩子對這方面很感興趣。希望能得到考慮，謝謝！",
    date: "2025-04-20",
    status: "已處理",
  },
]

// 狀態選項
const statusOptions = ["全部", "未處理", "處理中", "已處理"]

export default function MessagesManagement() {
  const [messages, setMessages] = useState(initialMessages)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("全部")
  const [selectedMessage, setSelectedMessage] = useState(null)

  // 處理刪除訊息
  const handleDeleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id))
  }

  // 處理更新訊息狀態
  const handleUpdateStatus = (id, status) => {
    const updatedMessages = messages.map((message) => (message.id === id ? { ...message, status } : message))
    setMessages(updatedMessages)

    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({ ...selectedMessage, status })
    }
  }

  // 過濾訊息
  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.message.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = filterStatus === "全部" || message.status === filterStatus

    return matchesSearch && matchesStatus
  })

  // 導出CSV
  const exportToCSV = () => {
    const headers = ["姓名", "電子郵件", "電話", "主題", "訊息", "日期", "狀態"]
    const csvData = filteredMessages.map((message) => [
      message.name,
      message.email,
      message.phone,
      message.subject,
      message.message
        .replace(/,/g, ";")
        .replace(/\n/g, " "), // 避免CSV格式問題
      message.date,
      message.status,
    ])

    const csvContent = [headers.join(","), ...csvData.map((row) => row.join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `聯絡訊息_${new Date().toISOString().split("T")[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">聯絡訊息管理</h1>
          <p className="text-gray-500">管理從網站收到的聯絡表單訊息</p>
        </div>

        <Button onClick={exportToCSV} variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          導出CSV
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="搜索訊息..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="選擇狀態" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <Card key={message.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{message.name}</h3>
                    <Badge
                      variant={
                        message.status === "未處理" ? "outline" : message.status === "處理中" ? "secondary" : "default"
                      }
                      className={
                        message.status === "未處理"
                          ? "border-red-200 text-red-600"
                          : message.status === "處理中"
                            ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                            : "bg-green-100 text-green-700 hover:bg-green-100"
                      }
                    >
                      {message.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium">{message.subject}</h4>
                  <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex flex-col text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      <span>{message.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      <span>{message.phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{message.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8">
                          查看
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>{message.subject}</DialogTitle>
                          <DialogDescription>來自 {message.name} 的聯絡訊息</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                            <span className="font-medium">姓名:</span>
                            <span>{message.name}</span>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                            <span className="font-medium">電子郵件:</span>
                            <span>{message.email}</span>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                            <span className="font-medium">電話:</span>
                            <span>{message.phone}</span>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                            <span className="font-medium">日期:</span>
                            <span>{message.date}</span>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] items-center gap-2">
                            <span className="font-medium">狀態:</span>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={
                                  message.status === "未處理"
                                    ? "outline"
                                    : message.status === "處理中"
                                      ? "secondary"
                                      : "default"
                                }
                                className={
                                  message.status === "未處理"
                                    ? "border-red-200 text-red-600"
                                    : message.status === "處理中"
                                      ? "bg-blue-100 text-blue-700 hover:bg-blue-100"
                                      : "bg-green-100 text-green-700 hover:bg-green-100"
                                }
                              >
                                {message.status}
                              </Badge>
                              <Select
                                value={message.status}
                                onValueChange={(value) => handleUpdateStatus(message.id, value)}
                              >
                                <SelectTrigger className="h-8 w-[120px]">
                                  <SelectValue placeholder="更改狀態" />
                                </SelectTrigger>
                                <SelectContent>
                                  {statusOptions.slice(1).map((status) => (
                                    <SelectItem key={status} value={status}>
                                      {status}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="font-medium">訊息:</span>
                            <div className="p-4 bg-gray-50 rounded-md whitespace-pre-wrap">{message.message}</div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">關閉</Button>
                          <Button
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleUpdateStatus(message.id, "已處理")}
                          >
                            標記為已處理
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        onClick={() => handleUpdateStatus(message.id, "處理中")}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                        onClick={() => handleUpdateStatus(message.id, "已處理")}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>確定要刪除此訊息嗎？</AlertDialogTitle>
                          <AlertDialogDescription>此操作無法撤銷。訊息將被永久刪除。</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>取消</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteMessage(message.id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            刪除
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredMessages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">沒有找到符合條件的訊息</p>
          </div>
        )}
      </div>
    </div>
  )
}
