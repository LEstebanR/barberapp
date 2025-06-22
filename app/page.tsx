import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Header } from '@/components/ui/header'
import {
  Calendar,
  CalendarIcon,
  MessageCircle,
  Scissors,
  Star,
  TrendingUp,
  User,
} from 'lucide-react'
import { ReactNode } from 'react'

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-primary bg-black p-6 shadow-sm transition-all hover:shadow-md">
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-500/10 transition-all group-hover:scale-150"></div>
      <div className="relative">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

const OpinionCard = ({ opinion }: { opinion: Opinion }) => {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-800/50 p-6">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
        ))}
      </div>
      <p className="mb-6 text-zinc-300">{opinion.opinion}</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={opinion.image} alt={opinion.name} />
          <AvatarFallback>{opinion.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{opinion.name}</p>
          <p className="text-sm text-zinc-400">{opinion.barber}</p>
        </div>
      </div>
    </div>
  )
}

interface Opinion {
  name: string
  image: string
  rating: number
  barber: string
  opinion: string
}

const OPINIONS = [
  {
    name: 'Luis Ramírez',
    image: 'https://github.com/lestebanr.png',
    rating: 5,
    barber: 'Barbería El Corte',
    opinion:
      'La plataforma es muy fácil de usar y me ha ayudado a llenar mi agenda todos los días.',
  },
  {
    name: 'Luis Ramírez',
    image: 'https://github.com/lestebanr.png',
    rating: 5,
    barber: 'Barbería El Corte',
    opinion:
      'La plataforma es muy fácil de usar y me ha ayudado a llenar mi agenda todos los días.',
  },
  {
    name: 'Luis Ramírez',
    image: 'https://github.com/lestebanr.png',
    rating: 5,
    barber: 'Barbería El Corte',
    opinion:
      'La plataforma es muy fácil de usar y me ha ayudado a llenar mi agenda todos los días.',
  },
  {
    name: 'Luis Ramírez',
    image: 'https://github.com/lestebanr.png',
    rating: 5,
    barber: 'Barbería El Corte',
    opinion:
      'La plataforma es muy fácil de usar y me ha ayudado a llenar mi agenda todos los días.',
  },
]

const PricingCard = ({
  pricing,
}: {
  pricing: { name: string; description: string; price: string }
}) => {
  return (
    <Card className="border border-primary rounded-lg p-4 text-center h-full flex flex-col">
      <CardTitle className="text-3xl mb-4">{pricing.name}</CardTitle>
      <CardContent className="flex-1 flex flex-col justify-center">
        <p className="text-xl text-muted-foreground mb-2">
          {pricing.description}
        </p>
        <p className="text-xl font-bold">{pricing.price}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        {pricing.price == 'Gratis' ? (
          <Button>Comenzar gratis</Button>
        ) : (
          <Button className="w-full">Empezar prueba</Button>
        )}
      </CardFooter>
    </Card>
  )
}

const PRICES = [
  {
    name: 'Solo',
    description: 'Barberos independientes',
    price: 'Gratis',
  },
  {
    name: 'Pequeña',
    description: '2-3 Barberos',
    price: '$10.000 / mes',
  },
  {
    name: 'Mediana',
    description: '4-7 Barberos',
    price: '$50.000 / mes',
  },
  {
    name: 'Grande',
    description: '+8 Barberos',
    price: '$100.000 / mes',
  },
]

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full mt-14 ">
      <Header />
      <section className="bg-[url('https://res.cloudinary.com/lesteban/image/upload/e_brightness:-50/v1749532640/barberapp/bg-barber_fwkjib.png')] w-full flex flex-col items-center justify-center text-white px-4 md:px-0 h-[calc(100vh-3.5rem)]">
        <div className="md:w-8/12 md:my-24 my-8 flex flex-col gap-8">
          <Badge className="py-1 text-sm border border-amber-500/30 bg-amber-500/10 text-primary px-4 ">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-ping"></span>
            Plataforma #1 para la gestión de barberías
          </Badge>
          <h2 className="text-6xl font-extrabold">
            Potencia tu <span className="text-primary">barbería</span>,
            multiplica tus <span className="text-primary">clientes</span>
          </h2>
          <p className="text-gray-400 text-2xl">
            La plataforma todo-en-uno que transforma la gestión de tu barbería y
            te ayuda a llenar tu agenda todos los días.
          </p>
          <div className="flex gap-2">
            <Button>Crear cuenta</Button>
            <Button variant="outline" className="bg-transparent">
              Soy cliente
            </Button>
          </div>
          <div className="flex justify-between gap-4 pt-4 mt-14">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center text-amber-500 mb-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Fácil</span>
              </div>
              <p className="text-center sm:text-left text-sm text-zinc-300">
                Gestión de citas
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center text-amber-500 mb-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+30%</span>
              </div>
              <p className="text-center sm:text-left text-sm text-zinc-300">
                Más ingresos
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center text-amber-500 mb-1">
                <Star className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Premium</span>
              </div>
              <p className="text-center sm:text-left text-sm text-zinc-300">
                Experiencia cliente
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black/90 w-full flex flex-col items-center text-white px-4 md:px-0">
        <div className="md:w-8/12 md:my-24 my-8 flex flex-col gap-4 items-center">
          <Badge className="py-1 text-sm border border-amber-500/30 bg-amber-500/10 text-primary px-4 ">
            Características
          </Badge>
          <h2 className="text-4xl font-extrabold text-center">
            Todo lo que necesitas para hacer crecer tu barbería
          </h2>
          <p className="text-gray-400 text-2xl text-center">
            Nuestra plataforma ofrece todas las herramientas necesarias para
            gestionar tu barbería y mejorar la experiencia de tus clientes.
          </p>
          <div className="grid gap-8 md:grid-cols-2 grid-cols-1 w-full">
            <FeatureCard
              title="Perfil profesional"
              description="Crea un perfil atractivo para tu barbería con servicios, precios y fotos de tu trabajo."
              icon={<Scissors className="h-6 w-6" />}
            />
            <FeatureCard
              title="Gestión de citas"
              description="Sistema inteligente de reservas que optimiza tu agenda y reduce los huecos libres."
              icon={<CalendarIcon className="h-6 w-6" />}
            />
            <FeatureCard
              title="Notificaciones"
              description="Recordatorios automáticos por WhatsApp para reducir las cancelaciones de última hora."
              icon={<MessageCircle className="h-6 w-6" />}
            />
            <FeatureCard
              title="Fácil de usar"
              description="Una experiencia de usuario de primer nivel para hacer la gestión de tu barbería más fácil"
              icon={<User className="h-6 w-6" />}
            />
          </div>
          <p className="text-center text-3xl">
            Y muchas características más para impulsar tu negocio
          </p>
        </div>
      </section>
      <section className="bg-black w-full flex flex-col items-center text-white px-4 md:px-0 gap-8">
        <Badge className="bg-amber-900/30 text-amber-300 font-medium text-lg rounded-full mt-14">
          Testimonios
        </Badge>
        <p className="text-4xl ">Lo que dicen nuestros usuarios</p>
        <p className="text-muted-foreground text-2xl text-center">
          Barberías de todo el país confían en nuestra plataforma para hacer
          crecer su negocio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-8/12 mb-14">
          {OPINIONS.map((opinion, index) => (
            <OpinionCard key={index} opinion={opinion} />
          ))}
        </div>
      </section>
      <section className="bg-white w-full flex flex-col items-center px-4 md:px-0 gap-8">
        <Badge className="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm font-medium text-amber-800 dark:text-amber-300 mt-14">
          Precios
        </Badge>
        <p className="text-4xl text-center ">
          Planes diseñados para cada tipo de barbería
        </p>
        <p className="text-muted-foreground text-2xl text-center md:w-8/12">
          Desde barberos independientes hasta cadenas de barberías. Encuentra el
          plan perfecto para tu negocio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full mb-14 md:w-8/12">
          {PRICES.map((price, index) => {
            return <PricingCard key={index} pricing={price} />
          })}
        </div>
      </section>
    </main>
  )
}
