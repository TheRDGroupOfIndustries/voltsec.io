'use client'

import 'aos/dist/aos.css'

import AOS from 'aos'
import React, { useEffect } from 'react'

const InitAOS = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return <div className=''></div>
}

export default InitAOS
