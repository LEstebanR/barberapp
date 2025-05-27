import { Clock, CheckCircle, Gift, LucideRocket } from "lucide-react";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { Badge } from "@/components/ui/badge";

const QUESTIONS = [
  {
    question: "¿Cuándo se lanzará BarberApp?",
    answer:
      "Estamos trabajando duro para lanzar la versión beta en los próximos 2 meses. Los miembros de la lista de espera serán los primeros en recibir acceso.",
  },
  {
    question: "¿Cuánto costará la suscripción?",
    answer:
      "Tendremos varios planes adaptados a diferentes tamaños de barberías. Las primeras 100 barberías en la lista de espera recibirán 3 meses gratis.",
  },
  {
    question: "¿Qué información necesito proporcionar?",
    answer:
      "Solo necesitamos información básica sobre tu barbería para mantenerte informado sobre el lanzamiento y preparar tu acceso anticipado.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, no hay compromisos a largo plazo. Puedes cancelar tu suscripción en cualquier momento sin penalizaciones.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No, BarberApp está diseñada para ser intuitiva y fácil de usar. Además, ofrecemos onboarding personalizado para ayudarte a empezar.",
  },
  {
    question: "¿Cómo me notificarán cuando pueda acceder?",
    answer:
      "Te enviaremos un email con instrucciones detalladas sobre cómo acceder a tu cuenta cuando la plataforma esté lista.",
  },
];

const BENEFITS = [
  {
    title: "Acceso prioritario",
    description:
      "Serás de los primeros en probar la plataforma cuando esté lista",
    icon: <CheckCircle className="text-primary" />,
  },
  {
    title: "3 meses gratis",
    description:
      "Las primeras 100 barberías recibirán 3 meses de suscripción gratuita",
    icon: <Gift className="text-primary" />,
  },
  {
    title: "Onboarding personalizado",
    description:
      "Te ayudaremos a configurar tu perfil y sacar el máximo provecho de la plataforma",
    icon: <LucideRocket className="text-primary" />,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col mt-16 items-center w-full ">
      <section className="w-full py-16  bg-[url('/bg-barber.png')]">
        <div className="text-white  gap-8 flex md:flex-row md:justify-between md:w-8/12 mx-auto flex-col px-4 md:px-0 justify-center">
          <div className="flex flex-col justify-center gap-4 md:max-w-xl">
            <Badge className="bg-amber-500/20 text-primary border-primary flex items-center gap-2 rounded-full px-4 py-2">
              <Clock className="w-8 h-8 text-primary" />
              <p className="text-primary text-sm">Acceso anticipado</p>
            </Badge>
            <h2 className="text-6xl font-bold tracking-tighter">
              Únete a la lista de espera
            </h2>
            <p>
              Sé de los primeros en acceder a la plataforma que transformará la
              gestión de tu barbería. Regístrate ahora y obtén beneficios
              exclusivos.
            </p>
            <div className="flex gap-4">
              <ul className="flex flex-col gap-8">
                {BENEFITS.map((benefit) => (
                  <li key={benefit.title} className="flex flex-col  gap-1">
                    <span className="flex items-center gap-2">
                      {benefit.icon}
                      <p className="text-primary font-bold">{benefit.title}</p>
                    </span>
                    <p>{benefit.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className=" mx-auto md:w-8/12 px-4 md:px-0">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
              Preguntas frecuentes
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              Respuestas a las preguntas más comunes sobre nuestra lista de
              espera
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {QUESTIONS.map((question) => (
              <div
                key={question.question}
                className="rounded-lg bg-white p-4 border-1 border-primary"
              >
                <h3 className="text-lg font-medium">{question.question}</h3>
                <p className="text-sm text-zinc-500">{question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
