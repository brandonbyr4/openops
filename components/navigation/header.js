import Link from "next/link";
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false)

  const router = useRouter()
  useEffect(() => {
      const handleRouteChange = (url) => {
          setMobileMenu(false)
      }

      router.events.on('routeChangeComplete', handleRouteChange)

      return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
      }
  }, [router.events])

  const mobileMenuRef = useRef(null);
  const useOutsideCheck = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMobileMenu(false)
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  useOutsideCheck(mobileMenuRef);

  return (
    <div>
      <div className="h-[72px] w-full" />
      <header className="fixed top-0 w-full px-3 bg-gray-100">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto py-5">
          <Link href="/" className="text-2xl text-gray-900 whitespace-nowrap">
            OpenOps
          </Link>
          <ul className="md:flex hidden gap-10">
            <li>
              <Link
                href="/"
                className="flex gap-2 text-gray-900 hover:text-gray-400 whitespace-nowrap"
              >
                Dashboard
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex gap-2 text-gray-900 hover:text-gray-400 whitespace-nowrap"
              >
                Settings
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="/export"
                className="flex gap-2 text-gray-900 hover:text-gray-400 whitespace-nowrap"
              >
                Export
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </Link>
            </li>
          </ul>
          {mobileMenu ? <svg onClick={() => setMobileMenu(false)} className="md:hidden block w-6 h-6 text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg> : <svg onClick={() => setMobileMenu(true)} className="md:hidden block w-6 h-6 text-gray-900 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>}
        </div>
        {mobileMenu ? <div ref={mobileMenuRef} className="md:hidden absolute top-14 right-3 w-44 py-4 bg-white rounded shadow">
          <Link href="/" className="flex gap-2 justify-center p-3 text-gray-900 hover:bg-gray-100 whitespace-nowrap">
            Dashboard
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </Link>
          <Link href="/settings" className="flex gap-2 justify-center p-3 text-gray-900 hover:bg-gray-100 whitespace-nowrap">
            Settings
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
              />
            </svg>
          </Link>
          <Link href="/export" className="flex gap-2 justify-center p-3 text-gray-900 hover:bg-gray-100 whitespace-nowrap">
            Export
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>
        </div> : <div className="hidden" />}
      </header>
    </div>
  );
}
