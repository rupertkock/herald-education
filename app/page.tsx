import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function Home() {
  const galleryImages = [
    {
      src: "/gallery/activity1.jpg",
      alt: "學生們參與團體活動",
      caption: "課後輔導班團體活動",
    },
    {
      src: "/gallery/activity2.jpg",
      alt: "學生們與老師合影",
      caption: "新年慶祝活動",
    },
    {
      src: "/gallery/activity3.jpg",
      alt: "老師授課場景",
      caption: "互動式教學",
    },
    {
      src: "/gallery/activity4.jpg",
      alt: "學生們展示新年紅包",
      caption: "農曆新年活動",
    },
    {
      src: "/gallery/activity5.jpg",
      alt: "電腦課程教學",
      caption: "多媒體教學課程",
    },
    {
      src: "/gallery/activity6.jpg",
      alt: "學生們展示手工作品",
      caption: "創意手工課程",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="角聲教育事工" width={50} height={50} className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-lg font-bold">角聲教育事工</h1>
              <p className="text-xs text-muted-foreground">Herald Education</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline">
              關於我們
            </Link>
            <Link href="#afterschool" className="text-sm font-medium hover:underline">
              課後輔導班
            </Link>
            <Link href="#summercamp" className="text-sm font-medium hover:underline">
              夏令營
            </Link>
            <Link href="#training" className="text-sm font-medium hover:underline">
              培訓課程
            </Link>
            <Link href="/teachers" className="text-sm font-medium hover:underline">
              師資團隊
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline">
              聯絡我們
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-green-500 hover:bg-green-600">
          <a
                      href="https://forms.gle/eKTRtqfnLqEmKVpSA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
                    >
              立即報名
            </Button>
          </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-600">
                  角聲教育事工
                </h1>
                <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl md:text-4xl text-orange-500">
                  Herald Education
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我們致力於提供全人發展的教育環境，培養孩子的品格、學術能力和創造力。
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 hover:bg-orange-600">了解更多</Button>
                  <Button variant="outline">聯絡我們</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/hero-image.png"
                  alt="兒童教育"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600">活動掠影</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-600">精彩活動回顧</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  透過這些照片，一起回顧我們的學生在角聲教育事工的精彩時刻。
                </p>
              </div>
            </div>
            <ImageCarousel images={galleryImages} />
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">關於我們</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600">全人發展的教育理念</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  角聲教育事工致力於提供優質的課後輔導、夏令營和培訓課程，幫助孩子在學術、品格和創造力方面得到全面發展。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-2 border-green-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-green-100 p-4">
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
                      className="h-6 w-6 text-green-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-600">課後輔導班</h3>
                  <p className="text-gray-500">提供安全、有趣的課後環境，幫助孩子完成作業，參與各種豐富活動。</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-orange-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-orange-100 p-4">
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
                      className="h-6 w-6 text-orange-600"
                    >
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-orange-600">夏令營</h3>
                  <p className="text-gray-500">豐富多彩的夏令營活動，培養孩子的社交能力、團隊合作精神和創造力。</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" />
                      <path d="M8 7h6" />
                      <path d="M8 11h8" />
                      <path d="M8 15h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">培訓課程</h3>
                  <p className="text-gray-500">專業的培訓課程，幫助孩子發展特長，提升學習能力和自信心。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="afterschool" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600">
                  課後輔導班
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-600">角聲課後輔導班</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  為幼稚園至八年級的學生提供安全、有趣的課後環境，幫助孩子完成作業，參與各種豐富活動。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-orange-600">時間安排</h3>
                      <p className="text-gray-500">每週一至週五，下午2:30至晚上6:00，提供靈活的接送時間。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-orange-600">安全環境</h3>
                      <p className="text-gray-500">提供安全、有監督的環境，讓家長安心工作，孩子快樂學習。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-orange-600">全人發展</h3>
                      <p className="text-gray-500">中心模擬社會，建立財務系統，培養學生理財與溝通等能力。</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 hover:bg-orange-600">立即報名</Button>
                  <Button variant="outline">了解更多</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HMC%20Afterschool.jpg-i99IvjRH78CSfLI8EO7g80BbWQvvUc.jpeg"
                  alt="課後輔導班時間表"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="summercamp" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600">夏令營</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600">2025 夏令營</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  豐富多彩的夏令營活動，培養孩子的社交能力、團隊合作精神和創造力。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <Tabs defaultValue="schedule" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="schedule">課程安排</TabsTrigger>
                    <TabsTrigger value="themes">主題週</TabsTrigger>
                  </TabsList>
                  <TabsContent value="schedule" className="p-4 border rounded-lg mt-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4a614deea4b4acce1cb924378f0c0060.PNG-R4wuRw1mzeUCiG1OGyZCmw0DZizW8I.png"
                      alt="夏令營主題週"
                      width={600}
                      height={800}
                      className="rounded-lg shadow-lg"
                    />
                  </TabsContent>
                  <TabsContent value="themes" className="p-4 border rounded-lg mt-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23645f9cce62489a58604804c5e795af.PNG-cCaZ2wsonRJgwJJmO8p2a6IPWKcJ4d.png"
                      alt="夏令營時間表"
                      width={600}
                      height={800}
                      className="rounded-lg shadow-lg"
                    />
                  </TabsContent>
                </Tabs>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-green-600">營期安排</h3>
                      <p className="text-gray-500">
                        第一期：6月30日至7月25日
                        <br />
                        第二期：7月28日至8月22日
                        <br />
                        報名費：$60，單期：$1200，兩期：$2200
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-green-600">特色活動</h3>
                      <p className="text-gray-500">按年齡分層學習，豐富室內外活動，系列品格課程，全面發展孩子潛能。</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-green-600">早鳥優惠</h3>
                      <p className="text-gray-500">
                        5月1日前報名，優惠$200
                        <br />
                        6月1日前報名，優惠$100
                        <br />
                        名額有限，報滿即止！
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-500 hover:bg-green-600">
                    <a
                  href="https://forms.gle/eKTRtqfnLqEmKVpSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
                >
                    立即報名
                </Button>
                    </a>

                  <Button variant="outline">了解更多</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="training" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">培訓課程</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">專業培訓課程</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  專業的培訓課程，幫助孩子發展特長，提升學習能力和自信心。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                      <circle cx="17" cy="7" r="5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">藝術與創意</h3>
                  <p className="text-gray-500">包括繪畫、手工藝、音樂、舞蹈等課程，培養孩子的藝術感知和創造力。</p>
                  <Button variant="outline" className="mt-2">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">學術提升</h3>
                  <p className="text-gray-500">提供英文、數學、科學等學科的輔導課程，幫助孩子提高學業成績。</p>
                  <Button variant="outline" className="mt-2">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                      <line x1="4" x2="4" y1="22" y2="15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">品格培養</h3>
                  <p className="text-gray-500">通過聖經故事、團隊活動等方式，培養孩子良好的品格和價值觀。</p>
                  <Button variant="outline" className="mt-2">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m16 12-4 4-4-4" />
                      <path d="M12 8v8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">體育活動</h3>
                  <p className="text-gray-500">提供各種體育活動，如籃球、足球等，促進孩子的身體健康和團隊合作精神。</p>
                  <Button variant="outline" className="mt-2">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">語言學習</h3>
                  <p className="text-gray-500">提供中文、英文等語言學習課程，幫助孩子掌握多種語言能力。</p>
                  <Button variant="outline" className="mt-2">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-blue-100 p-4">
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
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600">閱讀與寫作</h3>
                  <p className="text-gray-500">培養孩子的閱讀習慣和寫作能力，提高語言表達和思維能力。</p>
                  <Button variant="outline" className="mt-2">
                    了解更多
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">家長評價</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-600">家長們的心聲</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  聽聽家長們對我們課程的評價。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-purple-100">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-purple-100 p-2">
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
                        className="h-4 w-4 text-purple-600"
                      >
                        <path d="M17 6.1H3" />
                        <path d="M21 12.1H3" />
                        <path d="M15.1 18H3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">王媽媽</h3>
                      <p className="text-sm text-gray-500">課後輔導班家長</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "角聲課後輔導班為我的孩子提供了安全、有趣的環境。老師們非常關心孩子，不僅幫助他們完成作業，還教導他們良好的品格和價值觀。"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-purple-100 p-2">
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
                        className="h-4 w-4 text-purple-600"
                      >
                        <path d="M17 6.1H3" />
                        <path d="M21 12.1H3" />
                        <path d="M15.1 18H3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">李爸爸</h3>
                      <p className="text-sm text-gray-500">夏令營家長</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "我的孩子參加了角聲夏令營，回來後變得更加自信和獨立。營中的活動非常豐富多彩，孩子學到了很多知識，也交到了很多朋友。"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-purple-100">
                <CardContent className="p-6 flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-purple-100 p-2">
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
                        className="h-4 w-4 text-purple-600"
                      >
                        <path d="M17 6.1H3" />
                        <path d="M21 12.1H3" />
                        <path d="M15.1 18H3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">張媽媽</h3>
                      <p className="text-sm text-gray-500">培訓課程家長</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "角聲的培訓課程非常專業，老師們都很有耐心和愛心。我的孩子在這裡學習了鋼琴和繪畫，進步非常大，也很喜歡這裡的學習氛圍。"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600">聯絡我們</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-600">與我們聯繫</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  如有任何疑問，請隨時與我們聯繫。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-orange-600">地址</h3>
                      <p className="text-gray-500">角聲使命中心 156-03 Horace Harding Expy, Flushing, NY 11367</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-orange-600">電話</h3>
                      <p className="text-gray-500">347-718-8384 / 718-359-2030</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-orange-600">電子郵件</h3>
                      <p className="text-gray-500">education@cchc.org</p>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 hover:bg-orange-600">立即報名</Button>
                  <Button variant="outline">預約參觀</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardContent className="p-6">
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none">
                          姓名
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="請輸入您的姓名"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none">
                          電子郵件
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="請輸入您的電子郵件"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="phone" className="text-sm font-medium leading-none">
                          電話
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="請輸入您的電話號碼"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none">
                          留言
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="請輸入您的留言"
                        />
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 w-full">提交</Button>
                    </form>
                  </CardContent>
                </Card>
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
                  <a href="#about" className="hover:text-white">
                    關於我們
                  </a>
                </li>
                <li>
                  <a href="#afterschool" className="hover:text-white">
                    課後輔導班
                  </a>
                </li>
                <li>
                  <a href="#summercamp" className="hover:text-white">
                    夏令營
                  </a>
                </li>
                <li>
                  <a href="#training" className="hover:text-white">
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
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>角聲使命中心 156-03 Horace Harding Expy, Flushing, NY 11367</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>347-718-8384 / 718-359-2030</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
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
