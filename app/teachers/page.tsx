import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, GraduationCap, BookOpen, Heart, Award } from "lucide-react"

export default function TeachersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="角聲教育事工" width={50} height={50} className="h-12 w-12 rounded-full" />
                <div>
                  <h1 className="text-lg font-bold">角聲教育事工</h1>
                  <p className="text-xs text-muted-foreground">Herald Education</p>
                </div>
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:underline">
              關於我們
            </Link>
            <Link href="/#afterschool" className="text-sm font-medium hover:underline">
              課後輔導班
            </Link>
            <Link href="/#summercamp" className="text-sm font-medium hover:underline">
              夏令營
            </Link>
            <Link href="/#training" className="text-sm font-medium hover:underline">
              培訓課程
            </Link>
            <Link href="/teachers" className="text-sm font-medium text-green-600 font-bold">
              師資團隊
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:underline">
              聯絡我們
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-green-500 hover:bg-green-600">
              立即報名
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link
                href="/"
                className="flex items-center text-sm text-muted-foreground mb-4 hover:text-green-600 transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                返回首頁
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600">優秀師資團隊</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我們擁有一支專業、有愛心、富有經驗的教師團隊，致力於為孩子提供全面的教育和關懷。
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Badge className="bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700">
                  專業資格認證
                </Badge>
                <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700">豐富教學經驗</Badge>
                <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 hover:text-orange-700">
                  愛心與耐心
                </Badge>
                <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 hover:text-purple-700">
                  持續專業發展
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">全部教師</TabsTrigger>
                <TabsTrigger value="afterschool">課後輔導</TabsTrigger>
                <TabsTrigger value="summercamp">夏令營</TabsTrigger>
                <TabsTrigger value="training">專業培訓</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* 教師卡片 */}
                  <TeacherCard
                    name="王美玲"
                    englishName="Mei-Ling Wang"
                    title="教育總監 / 課程設計師"
                    image="/teachers/teacher1.jpg"
                    expertise={["課程設計", "兒童心理學", "品格教育"]}
                    education="哥倫比亞大學教育學碩士"
                    bio="王老師擁有超過15年的教育經驗，專注於兒童早期教育和品格培養。她設計的課程注重孩子的全面發展，深受家長和學生喜愛。"
                  />

                  <TeacherCard
                    name="李大衛"
                    englishName="David Li"
                    title="英語教師 / 夏令營主任"
                    image="/teachers/teacher2.jpg"
                    expertise={["英語教學", "戲劇表演", "團隊建設"]}
                    education="紐約大學英語教育學士"
                    bio="李老師是一位充滿活力的教育者，擅長通過互動和創意活動激發學生的學習興趣。他帶領的夏令營活動總是充滿歡笑和收穫。"
                  />

                  <TeacherCard
                    name="張靜怡"
                    englishName="Jing-Yi Zhang"
                    title="數學教師 / 學術指導"
                    image="/teachers/teacher3.jpg"
                    expertise={["數學教育", "邏輯思維", "學習策略"]}
                    education="麻省理工學院應用數學碩士"
                    bio="張老師以其耐心和清晰的教學方法聞名，能夠將複雜的數學概念轉化為學生容易理解的內容。她注重培養學生的邏輯思維和解決問題的能力。"
                  />

                  <TeacherCard
                    name="陳志強"
                    englishName="Zhi-Qiang Chen"
                    title="科學教師 / 實驗指導"
                    image="/teachers/teacher4.jpg"
                    expertise={["科學實驗", "環境教育", "STEM教育"]}
                    education="加州理工學院物理學博士"
                    bio="陳老師熱愛科學，擅長通過有趣的實驗和互動活動激發學生對科學的興趣。他的課堂總是充滿驚奇和發現，鼓勵學生探索和思考。"
                  />

                  <TeacherCard
                    name="林美華"
                    englishName="Mei-Hua Lin"
                    title="藝術教師 / 創意指導"
                    image="/teachers/teacher5.jpg"
                    expertise={["繪畫", "手工藝", "創意思維"]}
                    education="羅德島設計學院藝術教育碩士"
                    bio="林老師是一位充滿創意的藝術教育者，擅長引導學生發揮想像力和創造力。她的藝術課程不僅教授技巧，更注重培養學生的審美能力和自我表達。"
                  />

                  <TeacherCard
                    name="黃家明"
                    englishName="Jia-Ming Huang"
                    title="音樂教師 / 合唱指導"
                    image="/teachers/teacher6.jpg"
                    expertise={["鋼琴", "合唱", "音樂理論"]}
                    education="茱莉亞音樂學院音樂教育學士"
                    bio="黃老師擁有豐富的音樂教育經驗，能夠激發學生對音樂的熱愛和理解。他的課堂充滿活力和樂趣，幫助學生發現音樂的美妙和表達自我的方式。"
                  />

                  <TeacherCard
                    name="吳雅芳"
                    englishName="Ya-Fang Wu"
                    title="中文教師 / 文化教育"
                    image="/teachers/teacher7.jpg"
                    expertise={["中文教學", "中華文化", "書法"]}
                    education="台灣師範大學中文教育碩士"
                    bio="吳老師致力於中文教育和中華文化的傳承，通過生動有趣的教學方法幫助學生學習中文和了解中華文化。她的課堂融合了語言學習和文化體驗。"
                  />

                  <TeacherCard
                    name="劉建國"
                    englishName="Jian-Guo Liu"
                    title="體育教師 / 健康教育"
                    image="/teachers/teacher8.jpg"
                    expertise={["體育活動", "團隊合作", "健康生活"]}
                    education="北京體育大學體育教育學士"
                    bio="劉老師熱愛體育，擅長通過各種體育活動培養學生的團隊合作精神和健康意識。他的課堂充滿活力和樂趣，幫助學生建立健康的生活方式。"
                  />

                  <TeacherCard
                    name="鄭愛玲"
                    englishName="Ai-Ling Zheng"
                    title="輔導員 / 心理健康顧問"
                    image="/teachers/teacher9.jpg"
                    expertise={["心理輔導", "情緒管理", "人際關係"]}
                    education="波士頓大學心理學碩士"
                    bio="鄭老師關注學生的心理健康和情緒發展，通過專業的輔導和支持幫助學生面對挑戰和困難。她的工作為學生提供了安全和支持的環境。"
                  />
                </div>
              </TabsContent>

              <TabsContent value="afterschool" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <TeacherCard
                    name="王美玲"
                    englishName="Mei-Ling Wang"
                    title="教育總監 / 課程設計師"
                    image="/teachers/teacher1.jpg"
                    expertise={["課程設計", "兒童心理學", "品格教育"]}
                    education="哥倫比亞大學教育學碩士"
                    bio="王老師擁有超過15年的教育經驗，專注於兒童早期教育和品格培養。她設計的課程注重孩子的全面發展，深受家長和學生喜愛。"
                  />

                  <TeacherCard
                    name="張靜怡"
                    englishName="Jing-Yi Zhang"
                    title="數學教師 / 學術指導"
                    image="/teachers/teacher3.jpg"
                    expertise={["數學教育", "邏輯思維", "學習策略"]}
                    education="麻省理工學院應用數學碩士"
                    bio="張老師以其耐心和清晰的教學方法聞名，能夠將複雜的數學概念轉化為學生容易理解的內容。她注重培養學生的邏輯思維和解決問題的能力。"
                  />

                  <TeacherCard
                    name="吳雅芳"
                    englishName="Ya-Fang Wu"
                    title="中文教師 / 文化教育"
                    image="/teachers/teacher7.jpg"
                    expertise={["中文教學", "中華文化", "書法"]}
                    education="台灣師範大學中文教育碩士"
                    bio="吳老師致力於中文教育和中華文化的傳承，通過生動有趣的教學方法幫助學生學習中文和了解中華文化。她的課堂融合了語言學習和文化體驗。"
                  />

                  <TeacherCard
                    name="鄭愛玲"
                    englishName="Ai-Ling Zheng"
                    title="輔導員 / 心理健康顧問"
                    image="/teachers/teacher9.jpg"
                    expertise={["心理輔導", "情緒管理", "人際關係"]}
                    education="波士頓大學心理學碩士"
                    bio="鄭老師關注學生的心理健康和情緒發展，通過專業的輔導和支持幫助學生面對挑戰和困難。她的工作為學生提供了安全和支持的環境。"
                  />
                </div>
              </TabsContent>

              <TabsContent value="summercamp" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <TeacherCard
                    name="李大衛"
                    englishName="David Li"
                    title="英語教師 / 夏令營主任"
                    image="/teachers/teacher2.jpg"
                    expertise={["英語教學", "戲劇表演", "團隊建設"]}
                    education="紐約大學英語教育學士"
                    bio="李老師是一位充滿活力的教育者，擅長通過互動和創意活動激發學生的學習興趣。他帶領的夏令營活動總是充滿歡笑和收穫。"
                  />

                  <TeacherCard
                    name="陳志強"
                    englishName="Zhi-Qiang Chen"
                    title="科學教師 / 實驗指導"
                    image="/teachers/teacher4.jpg"
                    expertise={["科學實驗", "環境教育", "STEM教育"]}
                    education="加州理工學院物理學博士"
                    bio="陳老師熱愛科學，擅長通過有趣的實驗和互動活動激發學生對科學的興趣。他的課堂總是充滿驚奇和發現，鼓勵學生探索和思考。"
                  />

                  <TeacherCard
                    name="林美華"
                    englishName="Mei-Hua Lin"
                    title="藝術教師 / 創意指導"
                    image="/teachers/teacher5.jpg"
                    expertise={["繪畫", "手工藝", "創意思維"]}
                    education="羅德島設計學院藝術教育碩士"
                    bio="林老師是一位充滿創意的藝術教育者，擅長引導學生發揮想像力和創造力。她的藝術課程不僅教授技巧，更注重培養學生的審美能力和自我表達。"
                  />

                  <TeacherCard
                    name="劉建國"
                    englishName="Jian-Guo Liu"
                    title="體育教師 / 健康教育"
                    image="/teachers/teacher8.jpg"
                    expertise={["體育活動", "團隊合作", "健康生活"]}
                    education="北京體育大學體育教育學士"
                    bio="劉老師熱愛體育，擅長通過各種體育活動培養學生的團隊合作精神和健康意識。他的課堂充滿活力和樂趣，幫助學生建立健康的生活方式。"
                  />
                </div>
              </TabsContent>

              <TabsContent value="training" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <TeacherCard
                    name="黃家明"
                    englishName="Jia-Ming Huang"
                    title="音樂教師 / 合唱指導"
                    image="/teachers/teacher6.jpg"
                    expertise={["鋼琴", "合唱", "音樂理論"]}
                    education="茱莉亞音樂學院音樂教育學士"
                    bio="黃老師擁有豐富的音樂教育經驗，能夠激發學生對音樂的熱愛和理解。他的課堂充滿活力和樂趣，幫助學生發現音樂的美妙和表達自我的方式。"
                  />

                  <TeacherCard
                    name="林美華"
                    englishName="Mei-Hua Lin"
                    title="藝術教師 / 創意指導"
                    image="/teachers/teacher5.jpg"
                    expertise={["繪畫", "手工藝", "創意思維"]}
                    education="羅德島設計學院藝術教育碩士"
                    bio="林老師是一位充滿創意的藝術教育者，擅長引導學生發揮想像力和創造力。她的藝術課程不僅教授技巧，更注重培養學生的審美能力和自我表達。"
                  />

                  <TeacherCard
                    name="陳志強"
                    englishName="Zhi-Qiang Chen"
                    title="科學教師 / 實驗指導"
                    image="/teachers/teacher4.jpg"
                    expertise={["科學實驗", "環境教育", "STEM教育"]}
                    education="加州理工學院物理學博士"
                    bio="陳老師熱愛科學，擅長通過有趣的實驗和互動活動激發學生對科學的興趣。他的課堂總是充滿驚奇和發現，鼓勵學生探索和思考。"
                  />

                  <TeacherCard
                    name="吳雅芳"
                    englishName="Ya-Fang Wu"
                    title="中文教師 / 文化教育"
                    image="/teachers/teacher7.jpg"
                    expertise={["中文教學", "中華文化", "書法"]}
                    education="台灣師範大學中文教育碩士"
                    bio="吳老師致力於中文教育和中華文化的傳承，通過生動有趣的教學方法幫助學生學習中文和了解中華文化。她的課堂融合了語言學習和文化體驗。"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-600">我們的教學理念</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我們的教師團隊秉持以下教學理念，為每一位學生提供最優質的教育體驗。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">全人教育</h3>
                  <p className="text-gray-500">注重學生的德、智、體、群、美全面發展，培養健全人格。</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-green-100 p-4">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-600">因材施教</h3>
                  <p className="text-gray-500">尊重每個學生的獨特性，根據不同學生的特點和需求提供個性化教育。</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-orange-100 p-4">
                    <Heart className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-orange-600">愛心教育</h3>
                  <p className="text-gray-500">以愛心和耐心關懷每一位學生，建立積極、溫暖的師生關係。</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-purple-100 p-4">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-600">品格塑造</h3>
                  <p className="text-gray-500">注重學生良好品格的培養，幫助他們成為有責任感、有愛心的人。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-600">加入我們的團隊</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我們歡迎有熱情、有愛心、有專業能力的教育工作者加入我們的團隊，一起為孩子們創造美好的未來。
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button className="bg-green-500 hover:bg-green-600">查看職位空缺</Button>
                <Button variant="outline">聯絡我們</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">角聲教育事工</h3>
              <p className="text-sm text-gray-300">Herald Education</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">快速鏈接</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="/#about" className="hover:text-white">
                    關於我們
                  </a>
                </li>
                <li>
                  <a href="/#afterschool" className="hover:text-white">
                    課後輔導班
                  </a>
                </li>
                <li>
                  <a href="/#summercamp" className="hover:text-white">
                    夏令營
                  </a>
                </li>
                <li>
                  <a href="/#training" className="hover:text-white">
                    培訓課程
                  </a>
                </li>
                <li>
                  <a href="/teachers" className="hover:text-white">
                    師資團隊
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">聯絡資訊</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mt-0.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>角聲使命中心 156-03 Horace Harding Expy, Flushing, NY 11367</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>347-718-8384 / 718-359-2030</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>education@cchc.org</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">訂閱電子報</h3>
              <p className="text-sm text-gray-300">訂閱我們的電子報，獲取最新活動和課程信息。</p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="您的電子郵件"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-orange-500 hover:bg-orange-600">訂閱</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
            <p>© 2025 角聲教育事工 (Herald Education). 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TeacherCard({ name, englishName, title, image, expertise, education, bio }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.svg?height=300&width=300"}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-500">{englishName}</p>
            <p className="text-sm text-gray-500 mt-1">{title}</p>
          </div>

          <div>
            <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
              <GraduationCap className="h-4 w-4 text-green-600" />
              <span>{education}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {expertise.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-green-50">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600">{bio}</p>

          <div className="flex justify-end">
            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0">
              查看詳情
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1 h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
