import { ReactNode } from "react"
import "../styles/index.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const location = useLocation();
  const hideEl = location.pathname === "/notification";

  return (
    <div className="bg-slate-200 !overflow-x-hidden relative">
      {
        hideEl ?
          null
          :
          <div className="max-w-screen-sm mx-auto bg-white">
            <Header />
          </div>
      }
      <main className="max-w-screen-sm mx-auto bg-white">
        {children}
      </main>

      {
        hideEl ?
          null
          :
          <div className="max-w-screen-sm mx-auto">
            <Footer />
          </div>
      }
    </div>
  )
}