import { Logo } from "@/components/ui/logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full  flex items-center justify-center h-16 border-b fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between md:w-8/12 w-full px-4 md:px-0">
        <Logo />
        <div className="flex items-center gap-x-4">
          <Link
            href="#waitlist"
            className="text-sm  hover:text-primary transition-colors hover:underline underline-offset-4"
          >
            Únete a la lista de espera
          </Link>
        </div>
      </div>
    </header>
  );
}
