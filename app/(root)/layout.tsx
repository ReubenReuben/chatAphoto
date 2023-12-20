import Footer from "@/components/shared/Footer"
import Head from "@/components/shared/Head"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (

    <div className="flex h-screen flex-col">
    
        <Head/>
        <Footer/>
        <main className="flex-1">{children}</main>
        </div>
    )
  }