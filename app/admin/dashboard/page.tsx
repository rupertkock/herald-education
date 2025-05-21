import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ImageIcon, MessageSquare, Calendar } from "lucide-react"

export default function Dashboard() {
  // 這裡的數據在實際應用中應該從API獲取
  const stats = [
    {
      title: "教師總數",
      value: "9",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      description: "活躍教師團隊成員",
      change: "+2 本月",
      changeType: "positive",
    },
    {
      title: "照片總數",
      value: "24",
      icon: <ImageIcon className="h-8 w-8 text-green-600" />,
      description: "網站展示照片",
      change: "+6 本月",
      changeType: "positive",
    },
    {
      title: "聯絡訊息",
      value: "18",
      icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
      description: "待處理聯絡表單",
      change: "+3 本週",
      changeType: "positive",
    },
    {
      title: "近期活動",
      value: "5",
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      description: "即將舉行的活動",
      change: "2 天後",
      changeType: "neutral",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">儀表板</h1>
        <p className="text-gray-500">歡迎回來，管理員！查看網站的最新統計數據。</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <CardDescription className="flex items-center mt-1">
                {stat.description}
                <span
                  className={`ml-2 text-xs font-medium ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : stat.changeType === "negative"
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
                >
                  {stat.change}
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>最近活動</CardTitle>
            <CardDescription>近期舉辦的活動和課程</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "夏令營報名開始", date: "2025-05-01", status: "即將開始" },
                { name: "教師培訓工作坊", date: "2025-04-15", status: "已完成" },
                { name: "春季家長會", date: "2025-04-10", status: "已完成" },
                { name: "復活節特別活動", date: "2025-04-05", status: "已完成" },
                { name: "學生藝術展覽", date: "2025-03-25", status: "已完成" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      activity.status === "即將開始" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                    }`}
                  >
                    {activity.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>最新聯絡訊息</CardTitle>
            <CardDescription>最近收到的聯絡表單訊息</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "張小明", email: "xming@example.com", subject: "夏令營詢問", date: "2025-04-28" },
                { name: "李美華", email: "meihua@example.com", subject: "課後班報名", date: "2025-04-26" },
                { name: "王大偉", email: "dawei@example.com", subject: "教師應聘", date: "2025-04-25" },
                { name: "陳小紅", email: "xiaohong@example.com", subject: "參觀預約", date: "2025-04-23" },
                { name: "林小勇", email: "xiaoyong@example.com", subject: "課程建議", date: "2025-04-20" },
              ].map((message, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{message.name}</p>
                    <p className="text-sm text-gray-500">{message.subject}</p>
                  </div>
                  <p className="text-xs text-gray-500">{message.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
