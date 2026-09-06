import Footer from './Footer'
import Navbar from './Navbar'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-black0 px-[12.5px] md:px-25 lg:px-gutter">
      <div className="pt-25 md:pt-50 lg:pt-75">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  )
}
