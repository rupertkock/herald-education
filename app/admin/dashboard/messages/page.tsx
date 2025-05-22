"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function MessagesManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">聯絡訊息管理</h1>
        <p className="text-gray-500">管理從網站收到的聯絡表單訊息</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdsootl20o8sb_hP7ao7B7Swqmqr3SXOTYU4tBGj2UYsalaVg/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            className="w-full"
            style={{ minHeight: '800px' }}
          >
            載入中...
          </iframe>
        </CardContent>
      </Card>
    </div>
  )
}
