"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Edit, Plus, X, MoveUp, MoveDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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

// 模擬照片數據
const initialPhotos = [
  {
    id: 1,
    src: "/gallery/activity1.jpg",
    alt: "學生們參與團體活動",
    caption: "課後輔導班團體活動",
    category: "課後輔導班",
    featured: true,
  },
  {
    id: 2,
    src: "/gallery/activity2.jpg",
    alt: "學生們與老師合影",
    caption: "新年慶祝活動",
    category: "節日活動",
    featured: true,
  },
  {
    id: 3,
    src: "/gallery/activity3.jpg",
    alt: "老師授課場景",
    caption: "互動式教學",
    category: "教學活動",
    featured: true,
  },
  {
    id: 4,
    src: "/gallery/activity4.jpg",
    alt: "學生們展示新年紅包",
    caption: "農曆新年活動",
    category: "節日活動",
    featured: true,
  },
  {
    id: 5,
    src: "/gallery/activity5.jpg",
    alt: "電腦課程教學",
    caption: "多媒體教學課程",
    category: "教學活動",
    featured: true,
  },
  {
    id: 6,
    src: "/gallery/activity6.jpg",
    alt: "學生們展示手工作品",
    caption: "創意手工課程",
    category: "教學活動",
    featured: true,
  },
]

export default function PhotosManagement() {
  const [photos, setPhotos] = useState(initialPhotos)
  const [editingPhoto, setEditingPhoto] = useState(null)
  const [newPhoto, setNewPhoto] = useState({
    alt: "",
    caption: "",
    category: "",
    featured: false,
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")

  // 處理文件選擇
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // 處理添加照片
  const handleAddPhoto = () => {
    if (!selectedFile) return

    const newId = Math.max(0, ...photos.map((p) => p.id)) + 1
    const newPhotoObj = {
      id: newId,
      src: previewUrl, // 在實際應用中，這裡應該是上傳後的URL
      alt: newPhoto.alt,
      caption: newPhoto.caption,
      category: newPhoto.category,
      featured: newPhoto.featured,
    }

    setPhotos([...photos, newPhotoObj])
    setNewPhoto({ alt: "", caption: "", category: "", featured: false })
    setSelectedFile(null)
    setPreviewUrl("")
  }

  // 處理編輯照片
  const handleEditPhoto = () => {
    if (!editingPhoto) return

    const updatedPhotos = photos.map((photo) => (photo.id === editingPhoto.id ? editingPhoto : photo))
    setPhotos(updatedPhotos)
    setEditingPhoto(null)
  }

  // 處理刪除照片
  const handleDeletePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id))
  }

  // 處理照片順序移動
  const movePhoto = (id, direction) => {
    const index = photos.findIndex((photo) => photo.id === id)
    if ((direction === "up" && index === 0) || (direction === "down" && index === photos.length - 1)) {
      return
    }

    const newPhotos = [...photos]
    const targetIndex = direction === "up" ? index - 1 : index + 1
    const temp = newPhotos[index]
    newPhotos[index] = newPhotos[targetIndex]
    newPhotos[targetIndex] = temp
    setPhotos(newPhotos)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">照片管理</h1>
          <p className="text-gray-500">管理網站首頁和相冊中顯示的照片</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              添加照片
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>添加新照片</DialogTitle>
              <DialogDescription>上傳新照片並添加相關信息。</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="photo">照片</Label>
                <div className="flex items-center gap-4">
                  <Input id="photo" type="file" accept="image/*" onChange={handleFileChange} className="flex-1" />
                  {previewUrl && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        setSelectedFile(null)
                        setPreviewUrl("")
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                {previewUrl && (
                  <div className="relative w-full h-40 mt-2 rounded-md overflow-hidden">
                    <Image src={previewUrl || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                  </div>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="alt">替代文字</Label>
                <Input
                  id="alt"
                  value={newPhoto.alt}
                  onChange={(e) => setNewPhoto({ ...newPhoto, alt: e.target.value })}
                  placeholder="為照片添加描述性文字"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="caption">標題</Label>
                <Input
                  id="caption"
                  value={newPhoto.caption}
                  onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                  placeholder="照片標題或說明"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">分類</Label>
                <Input
                  id="category"
                  value={newPhoto.category}
                  onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                  placeholder="照片分類，如：課後輔導班、夏令營等"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="featured"
                  type="checkbox"
                  checked={newPhoto.featured}
                  onChange={(e) => setNewPhoto({ ...newPhoto, featured: e.target.checked })}
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="featured">在首頁輪播中顯示</Label>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setNewPhoto({ alt: "", caption: "", category: "", featured: false })
                  setSelectedFile(null)
                  setPreviewUrl("")
                }}
              >
                取消
              </Button>
              <Button
                onClick={handleAddPhoto}
                disabled={!selectedFile || !newPhoto.alt || !newPhoto.caption}
                className="bg-green-600 hover:bg-green-700"
              >
                添加
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
              <div className="absolute top-2 right-2 flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  onClick={() => movePhoto(photo.id, "up")}
                >
                  <MoveUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white/90"
                  onClick={() => movePhoto(photo.id, "down")}
                >
                  <MoveDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{photo.caption}</h3>
                    <p className="text-sm text-gray-500">{photo.category}</p>
                  </div>
                  {photo.featured && (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">首頁輪播</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{photo.alt}</p>
                <div className="flex justify-end gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8">
                        <Edit className="h-4 w-4 mr-1" />
                        編輯
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>編輯照片信息</DialogTitle>
                        <DialogDescription>修改照片的相關信息。</DialogDescription>
                      </DialogHeader>
                      {editingPhoto && (
                        <div className="grid gap-4 py-4">
                          <div className="relative w-full h-40 rounded-md overflow-hidden">
                            <Image
                              src={editingPhoto.src || "/placeholder.svg"}
                              alt={editingPhoto.alt}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-alt">替代文字</Label>
                            <Input
                              id="edit-alt"
                              value={editingPhoto.alt}
                              onChange={(e) => setEditingPhoto({ ...editingPhoto, alt: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-caption">標題</Label>
                            <Input
                              id="edit-caption"
                              value={editingPhoto.caption}
                              onChange={(e) => setEditingPhoto({ ...editingPhoto, caption: e.target.value })}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="edit-category">分類</Label>
                            <Input
                              id="edit-category"
                              value={editingPhoto.category}
                              onChange={(e) => setEditingPhoto({ ...editingPhoto, category: e.target.value })}
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              id="edit-featured"
                              type="checkbox"
                              checked={editingPhoto.featured}
                              onChange={(e) => setEditingPhoto({ ...editingPhoto, featured: e.target.checked })}
                              className="h-4 w-4 rounded border-gray-300"
                            />
                            <Label htmlFor="edit-featured">在首頁輪播中顯示</Label>
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setEditingPhoto(null)}>
                          取消
                        </Button>
                        <Button onClick={handleEditPhoto} className="bg-green-600 hover:bg-green-700">
                          保存
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        刪除
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>確定要刪除這張照片嗎？</AlertDialogTitle>
                        <AlertDialogDescription>此操作無法撤銷。照片將從網站中永久刪除。</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>取消</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeletePhoto(photo.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          刪除
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
