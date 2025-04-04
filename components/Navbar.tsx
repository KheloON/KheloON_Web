'use client';

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  const handleDownload = () => {
    window.location.href = 'https://www.upload-apk.com/X8bNqFoK6z1F4mJ';
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Khelo-ON-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex items-center gap-4">
        <Link href="/userrole">
          <Button 
            type="button"
            title="Dashboard"
            icon="/dashboard.svg"
            variant="btn_dark_green"
          />
        </Link>
        <Button 
          type="button"
          title="Download App"
          icon="/android.svg"
          variant="btn_green"
          onClick={handleDownload}
        />
        <Link href="/userrole">
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </Link>
      </div>

      <Image 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar