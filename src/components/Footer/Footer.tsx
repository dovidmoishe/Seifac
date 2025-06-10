import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <div className="flex flex-col items-center md:flex-row justify-between m-10">
            <Image src="/logo.png" alt="Company Logo" width={60} height={60} className="mb-4" />
            <div className="flex items-center gap-3">
                <FaFacebook className="text-blue-600 hover:text-blue-800 transition-colors  cursor-pointer" size={32} />
                <FaInstagram className="text-pink-600 hover:text-pink-800 transition-colors cursor-pointer" size={32} />
                <FaXTwitter className="text-blue-400 hover:text-blue-600 transition-colors cursor-pointer" size={32} />
            </div>
        </div>
    </div>
  )
}

export default Footer