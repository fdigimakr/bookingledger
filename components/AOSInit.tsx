"use client"

import { useEffect } from "react"
import AOS from "aos"

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out",
      offset: 60,
      disable: "mobile",
    })
  }, [])

  return null
}
