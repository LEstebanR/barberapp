import Image from 'next/image'
import Link from 'next/link'

export function Logo({ size = 30 }: { size?: number }) {
  return (
    <Link href="/" className="cursor-pointer p-1">
      <Image
        src="https://res.cloudinary.com/lesteban/image/upload/v1749511059/barberapp/logo-barberapp_qztsoj.png"
        alt="Logo"
        width={size}
        height={size}
      />
    </Link>
  )
}
