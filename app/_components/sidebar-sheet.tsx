import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"

import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center gap-3 border-b border-solid py-5">
        <Avatar>
          <AvatarImage src="https://yt3.ggpht.com/yti/ANjgQV93NZ8tDFJyfXrfdXKQ8h93nPRkVhRKa6h4of6E4Z7xsKYl=s88-c-k-c0x00ffffff-no-rj" />
        </Avatar>

        <div>
          <p className="font-bold">Jairo de lima</p>
          <p className="text-xs">jairodelima94@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Inicio
            </Link>
          </Button>
        </SheetClose>

        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} /> Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-4 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
