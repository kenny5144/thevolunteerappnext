"use client"
import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <Link href="/home"> Home </Link>
      <Link href="/Userprofile" > Profile </Link>
      <Link href="/Login"> Login  </Link>
      <Link href="/Signup"> SignUp  </Link>
    </div>
  )
}

export default Navbar
