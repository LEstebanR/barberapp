import { Clock, CheckCircle, Gift, LucideRocket } from "lucide-react";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export default function Home() {
  return (
    <main className="flex-1 mt-16">
      {/* Restaurar la imagen de fondo en el hero section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-zinc-900 to-black text-white relative">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div
            className="absolute inset-0 bg-center bg-cover z-0"
            style={{ backgroundImage: "url('/bg-barber.png')" }}
          ></div>
        </div>

        <div className="container relative z-20 px-4 md:px-6 max-w-app ">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-500 mb-2">
                <Clock className="mr-2 h-4 w-4" />
                Acceso anticipado
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Únete a la lista de espera
              </h1>
              <p className="max-w-[600px] text-zinc-300 md:text-xl/relaxed">
                Sé de los primeros en acceder a la plataforma que transformará
                la gestión de tu barbería. Regístrate ahora y obtén beneficios
                exclusivos.
              </p>

              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Acceso prioritario</h3>
                    <p className="text-sm text-zinc-300">
                      Serás de los primeros en probar la plataforma cuando esté
                      lista
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Gift className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">3 meses gratis</h3>
                    <p className="text-sm text-zinc-300">
                      Las primeras 100 barberías recibirán 3 meses de
                      suscripción gratuita
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <LucideRocket className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Onboarding personalizado</h3>
                    <p className="text-sm text-zinc-300">
                      Te ayudaremos a configurar tu perfil y sacar el máximo
                      provecho de la plataforma
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md relative">
                <div className="absolute -inset-1 bg-amber-500/20 rounded-xl blur-xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 to-zinc-900/10 rounded-xl blur"></div>
                <div className="relative">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 md:px-6 max-w-app">
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
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-medium mb-2">
                ¿Cuándo se lanzará BarberApp?
              </h3>
              <p className="text-muted-foreground">
                Estamos trabajando duro para lanzar la versión beta en los
                próximos 2 meses. Los miembros de la lista de espera serán los
                primeros en recibir acceso.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-medium mb-2">
                ¿Cuánto costará la suscripción?
              </h3>
              <p className="text-muted-foreground">
                Tendremos varios planes adaptados a diferentes tamaños de
                barberías. Las primeras 100 barberías en la lista de espera
                recibirán 3 meses gratis.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-medium mb-2">
                ¿Qué información necesito proporcionar?
              </h3>
              <p className="text-muted-foreground">
                Solo necesitamos información básica sobre tu barbería para
                mantenerte informado sobre el lanzamiento y preparar tu acceso
                anticipado.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-medium mb-2">
                ¿Puedo cancelar mi suscripción en cualquier momento?
              </h3>
              <p className="text-muted-foreground">
                Sí, no hay compromisos a largo plazo. Puedes cancelar tu
                suscripción en cualquier momento sin penalizaciones.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-medium mb-2">
                ¿Necesito conocimientos técnicos?
              </h3>
              <p className="text-muted-foreground">
                No, BarberApp está diseñada para ser intuitiva y fácil de usar.
                Además, ofrecemos onboarding personalizado para ayudarte a
                empezar.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-medium mb-2">
                ¿Cómo me notificarán cuando pueda acceder?
              </h3>
              <p className="text-muted-foreground">
                Te enviaremos un email con instrucciones detalladas sobre cómo
                acceder a tu cuenta cuando la plataforma esté lista.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
