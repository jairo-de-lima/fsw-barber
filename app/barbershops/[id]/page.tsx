import { BarbershopService } from "@prisma/client"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { db } from "../../_lib/prisma"
import { Button } from "../../_components/ui/button"
import ServiceItem from "../../_components/service-item"
import PhoneItem from "../../_components/phone-item"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
          alt={barbershop.name}
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>
      <div className="boder-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 469 avaliacaoes</p>
        </div>
      </div>
      {/* descricao */}
      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400">
          sobre nois
        </h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
      {/* servicos */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
          servicos
        </h2>
        <div className="space-y-3">
          {barbershop.services.map((service: BarbershopService) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* contato */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
