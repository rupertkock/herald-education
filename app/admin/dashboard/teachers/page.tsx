"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Trash2, Edit, Plus, Upload, X, Search } from "lucide-react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// 模擬教師數據
const initialTeachers = [
  {
    id: 1,
    name: "王美玲",
    englishName: "Mei-Ling Wang",
    title: "教育總監 / 課程設計師",
    image: "/teachers/teacher1.jpg",
    expertise: ["課程設計", "兒童心理學", "品格教育"],
    education: "哥倫比亞大學教育學碩士",
    bio: "王老師擁有超過15年的教育經驗，專注於兒童早期教育和品格培養。她設計的課程注重孩子的全面發展，深受家長和學生喜愛。",
    departments: ["課後輔導班", "行政管理"],
    email: "wang@heraldedu.org",
    phone: "347-123-4567",
  },
  {
    id: 2,
    name: "李大衛",
    englishName: "David Li",
    title: "英語教師 / 夏令營主任",
    image: "/teachers/teacher2.jpg",
    expertise: ["英語教學", "戲劇表演", "團隊建設"],
    education: "紐約大學英語教育學士",
    bio: "李老師是一位充滿活力的教育者，擅長通過互動和創意活動激發學生的學習興趣。他帶領的夏令營活動總是充滿歡笑和收穫。",
    departments: ["夏令營", "英語教學"],
    email: "david@heraldedu.org",
    phone: "347-234-5678",
  },
  {
    id: 3,
    name: "張靜怡",
    englishName: "Jing-Yi Zhang",
    title: "數學教師 / 學術指導",
    image: "/teachers/teacher3.jpg",
    expertise: ["數學教育", "邏輯思維", "學習策略"],
    education: "麻省理工學院應用數學碩士",
    bio: "張老師以其耐心和清晰的教學方法聞名，能夠將複雜的數學概念轉化為學生容易理解的內容。她注重培養學生的邏輯思維和解決問題的能力。",
    departments: ["課後輔導班", "數學教學"],
    email: "zhang@heraldedu.org",
    phone: "347-345-6789",
  },
]

// 部門選項
const departmentOptions = ["全部", "課後輔導班", "夏令營", "英語教學", "數學教學", "行政管理"]

export default function TeachersManagement() {
  const [teachers, setTeachers] = useState(initialTeachers)
  const [editingTeacher, setEditingTeacher] = useState(null)
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    englishName: "",
    title: "",
    expertise: [],
    education: "",
    bio: "",
    departments: [],
    email: "",
    phone: "",
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDepartment, setFilterDepartment] = useState("全部")
  const [newExpertise, setNewExpertise] = useState("")

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

  // 處理添加教師
  const handleAddTeacher = () => {
    if (!selectedFile) return

    const newId = Math.max(0, ...teachers.map((t) => t.id)) + 1
    const newTeacherObj = {
      id: newId,
      image: previewUrl, // 在實際應用中，這裡應該是上傳後的URL
      ...newTeacher,
    }

    setTeachers([...teachers, newTeacherObj])
    setNewTeacher({
      name: "",
      englishName: "",
      title: "",
      expertise: [],
      education: "",
      bio: "",
      departments: [],
      email: "",
      phone: "",
    })
    setSelectedFile(null)
    setPreviewUrl("")
  }

  // 處理編輯教師
  const handleEditTeacher = () => {
    if (!editingTeacher) return

    const updatedTeachers = teachers.map((teacher) => (teacher.id === editingTeacher.id ? editingTeacher : teacher))
    setTeachers(updatedTeachers)
    setEditingTeacher(null)
  }

  // 處理刪除教師
  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id))
  }

  // 添加專業技能
  const handleAddExpertise = (isNew = true) => {
    if (!newExpertise.trim()) return

    if (isNew) {
      setNewTeacher({
        ...newTeacher,
        expertise: [...newTeacher.expertise, newExpertise.trim()],
      })
    } else {
      setEditingTeacher({
        ...editingTeacher,
        expertise: [...editingTeacher.expertise, newExpertise.trim()],
      })
    }
    setNewExpertise("")
  }

  // 刪除專業技能
  const handleRemoveExpertise = (index, isNew = true) => {
    if (isNew) {
      const updatedExpertise = [...newTeacher.expertise]
      updatedExpertise.splice(index, 1)
      setNewTeacher({ ...newTeacher, expertise: updatedExpertise })
    } else {
      const updatedExpertise = [...editingTeacher.expertise]
      updatedExpertise.splice(index, 1)
      setEditingTeacher({ ...editingTeacher, expertise: updatedExpertise })
    }
  }

  // 處理部門選擇
  const handleDepartmentChange = (value, isNew = true) => {
    if (isNew) {
      const updatedDepartments = newTeacher.departments.includes(value)
        ? newTeacher.departments.filter((d) => d !== value)
        : [...newTeacher.departments, value]
      setNewTeacher({ ...newTeacher, departments: updatedDepartments })
    } else {
      const updatedDepartments = editingTeacher.departments.includes(value)
        ? editingTeacher.departments.filter((d) => d !== value)
        : [...editingTeacher.departments, value]
      setEditingTeacher({ ...editingTeacher, departments: updatedDepartments })
    }
  }

  // 過濾教師
  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.title.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = filterDepartment === "全部" || teacher.departments.includes(filterDepartment)

    return matchesSearch && matchesDepartment
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">教師管理</h1>
          <p className="text-gray-500">管理教師團隊信息</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              添加教師
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>添加新教師</DialogTitle>
              <DialogDescription>添加新教師信息到網站。</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-2">
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
                  <div className="relative w-32 h-32 mt-2 rounded-md overflow-hidden">
                    <Image src={previewUrl || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input
                    id="name"
                    value={newTeacher.name}
                    onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                    placeholder="教師中文姓名"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="englishName">英文姓名</Label>
                  <Input
                    id="englishName"
                    value={newTeacher.englishName}
                    onChange={(e) => setNewTeacher({ ...newTeacher, englishName: e.target.value })}
                    placeholder="教師英文姓名"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="title">職稱</Label>
                <Input
                  id="title"
                  value={newTeacher.title}
                  onChange={(e) => setNewTeacher({ ...newTeacher, title: e.target.value })}
                  placeholder="教師職稱，如：英語教師 / 夏令營主任"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="education">學歷</Label>
                <Input
                  id="education"
                  value={newTeacher.education}
                  onChange={(e) => setNewTeacher({ ...newTeacher, education: e.target.value })}
                  placeholder="教師學歷，如：哥倫比亞大學教育學碩士"
                />
              </div>

              <div className="grid gap-2">
                <Label>專業技能</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {newTeacher.expertise.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-green-50 flex items-center gap-1">
                      {skill}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0 hover:bg-transparent"
                        onClick={() => handleRemoveExpertise(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    value={newExpertise}
                    onChange={(e) => setNewExpertise(e.target.value)}
                    placeholder="添加專業技能"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handleAddExpertise()
                      }
                    }}
                  />
                  <Button variant="outline" onClick={() => handleAddExpertise()} disabled={!newExpertise.trim()}>
                    添加
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                <Label>部門</Label>
                <div className="flex flex-wrap gap-2">
                  {departmentOptions.slice(1).map((dept) => (
                    <Badge
                      key={dept}
                      variant={newTeacher.departments.includes(dept) ? "default" : "outline"}
                      className={`cursor-pointer ${
                        newTeacher.departments.includes(dept) ? "bg-green-600 hover:bg-green-700" : "hover:bg-green-50"
                      }`}
                      onClick={() => handleDepartmentChange(dept)}
                    >
                      {dept}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="bio">簡介</Label>
                <Textarea
                  id="bio"
                  value={newTeacher.bio}
                  onChange={(e) => setNewTeacher({ ...newTeacher, bio: e.target.value })}
                  placeholder="教師簡介"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">電子郵件</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newTeacher.email}
                    onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                    placeholder="教師電子郵件"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">電話</Label>
                  <Input
                    id="phone"
                    value={newTeacher.phone}
                    onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })}
                    placeholder="教師聯絡電話"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setNewTeacher({
                    name: "",
                    englishName: "",
                    title: "",
                    expertise: [],
                    education: "",
                    bio: "",
                    departments: [],
                    email: "",
                    phone: "",
                  })
                  setSelectedFile(null)
                  setPreviewUrl("")
                }}
              >
                取消
              </Button>
              <Button
                onClick={handleAddTeacher}
                disabled={!selectedFile || !newTeacher.name || !newTeacher.title}
                className="bg-green-600 hover:bg-green-700"
              >
                添加
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="搜索教師..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterDepartment} onValueChange={setFilterDepartment}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="選擇部門" />
          </SelectTrigger>
          <SelectContent>
            {departmentOptions.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <Card key={teacher.id} className="overflow-hidden">
            <div className="flex p-4">
              <div className="relative w-24 h-24 rounded-md overflow-hidden">
                <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-bold">{teacher.name}</h3>
                <p className="text-sm text-gray-500">{teacher.englishName}</p>
                <p className="text-sm text-gray-600 mt-1">{teacher.title}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {teacher.departments.map((dept, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {dept}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <CardContent className="p-4 pt-0">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-1">
                  {teacher.expertise.map((skill, index) => (
                    <Badge key={index} variant="outline" className="bg-green-50 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{teacher.bio}</p>
                <div className="flex justify-end gap-2 pt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8">
                        <Edit className="h-4 w-4 mr-1" />
                        編輯
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>編輯教師信息</DialogTitle>
                        <DialogDescription>修改教師的相關信息。</DialogDescription>
                      </DialogHeader>
                      {editingTeacher && (
                        <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto pr-2">
                          <div className="flex items-center gap-4">
                            <div className="relative w-32 h-32 rounded-md overflow-hidden">
                              <Image
                                src={editingTeacher.image || "/placeholder.svg"}
                                alt={editingTeacher.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <Button variant="outline">
                              <Upload className="h-4 w-4 mr-2" />
                              更換照片
                            </Button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="edit-name">姓名</Label>
                              <Input
                                id="edit-name"
                                value={editingTeacher.name}
                                onChange={(e) => setEditingTeacher({ ...editingTeacher, name: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-englishName">英文姓名</Label>
                              <Input
                                id="edit-englishName"
                                value={editingTeacher.englishName}
                                onChange={(e) => setEditingTeacher({ ...editingTeacher, englishName: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="edit-title">職稱</Label>
                            <Input
                              id="edit-title"
                              value={editingTeacher.title}
                              onChange={(e) => setEditingTeacher({ ...editingTeacher, title: e.target.value })}
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="edit-education">學歷</Label>
                            <Input
                              id="edit-education"
                              value={editingTeacher.education}
                              onChange={(e) => setEditingTeacher({ ...editingTeacher, education: e.target.value })}
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label>專業技能</Label>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {editingTeacher.expertise.map((skill, index) => (
                                <Badge key={index} variant="outline" className="bg-green-50 flex items-center gap-1">
                                  {skill}
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-4 w-4 p-0 hover:bg-transparent"
                                    onClick={() => handleRemoveExpertise(index, false)}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                </Badge>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <Input
                                value={newExpertise}
                                onChange={(e) => setNewExpertise(e.target.value)}
                                placeholder="添加專業技能"
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    e.preventDefault()
                                    handleAddExpertise(false)
                                  }
                                }}
                              />
                              <Button
                                variant="outline"
                                onClick={() => handleAddExpertise(false)}
                                disabled={!newExpertise.trim()}
                              >
                                添加
                              </Button>
                            </div>
                          </div>

                          <div className="grid gap-2">
                            <Label>部門</Label>
                            <div className="flex flex-wrap gap-2">
                              {departmentOptions.slice(1).map((dept) => (
                                <Badge
                                  key={dept}
                                  variant={editingTeacher.departments.includes(dept) ? "default" : "outline"}
                                  className={`cursor-pointer ${
                                    editingTeacher.departments.includes(dept)
                                      ? "bg-green-600 hover:bg-green-700"
                                      : "hover:bg-green-50"
                                  }`}
                                  onClick={() => handleDepartmentChange(dept, false)}
                                >
                                  {dept}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="edit-bio">簡介</Label>
                            <Textarea
                              id="edit-bio"
                              value={editingTeacher.bio}
                              onChange={(e) => setEditingTeacher({ ...editingTeacher, bio: e.target.value })}
                              rows={4}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="edit-email">電子郵件</Label>
                              <Input
                                id="edit-email"
                                type="email"
                                value={editingTeacher.email}
                                onChange={(e) => setEditingTeacher({ ...editingTeacher, email: e.target.value })}
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="edit-phone">電話</Label>
                              <Input
                                id="edit-phone"
                                value={editingTeacher.phone}
                                onChange={(e) => setEditingTeacher({ ...editingTeacher, phone: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setEditingTeacher(null)}>
                          取消
                        </Button>
                        <Button onClick={handleEditTeacher} className="bg-green-600 hover:bg-green-700">
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
                        <AlertDialogTitle>確定要刪除此教師信息嗎？</AlertDialogTitle>
                        <AlertDialogDescription>此操作無法撤銷。教師信息將從網站中永久刪除。</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>取消</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteTeacher(teacher.id)}
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
