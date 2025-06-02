import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src="https://res.cloudinary.com/lesteban/image/upload/v1748831925/barberapp/logo.png"
        alt="Logo"
        width={50}
        height={50}
      />
    </Link>
  );
}
