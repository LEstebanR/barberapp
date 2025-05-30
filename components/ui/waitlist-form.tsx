"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envío de datos
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="border border-amber-500/30 bg-zinc-950 shadow-xl">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-8">
            <div className="rounded-full bg-amber-500/20 p-3">
              <CheckCircle2 className="h-8 w-8 text-amber-500" />
            </div>
            <CardTitle className="text-xl">¡Gracias por registrarte!</CardTitle>
            <CardDescription className="text-zinc-300">
              Te hemos añadido a nuestra lista de espera. Te notificaremos por
              email cuando la plataforma esté lista.
            </CardDescription>
            <div className="mt-4 text-sm text-zinc-300">
              <p>
                Mientras tanto, síguenos en nuestras redes sociales para estar
                al día de nuestras novedades.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-amber-500/30 bg-zinc-950 shadow-xl">
      <CardHeader>
        <CardTitle className="text-white">
          Regístrate en la lista de espera
        </CardTitle>
        <CardDescription className="text-zinc-300">
          Completa el formulario para ser de los primeros en acceder a BarberApp
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="shop-name" className="text-white">
              Nombre de la barbería
            </Label>
            <Input
              id="shop-name"
              placeholder="Ej: Barbería Moderna"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Nombre completo
            </Label>
            <Input
              id="name"
              placeholder="Tu nombre completo"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email de contacto
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Teléfono (opcional)
            </Label>
            <Input
              id="phone"
              placeholder="+34 123 456 789"
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size" className="text-white">
              Tamaño de la barbería
            </Label>
            <Select>
              <SelectTrigger
                id="size"
                className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white"
              >
                <SelectValue
                  placeholder="Selecciona una opción"
                  className="text-zinc-400"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solo">Solo yo (1 barbero)</SelectItem>
                <SelectItem value="small">Pequeña (2-3 barberos)</SelectItem>
                <SelectItem value="medium">Mediana (4-7 barberos)</SelectItem>
                <SelectItem value="large">Grande (8+ barberos)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              ¿Qué esperas de BarberApp? (opcional)
            </Label>
            <Textarea
              id="message"
              placeholder="Cuéntanos qué funcionalidades te interesan más..."
              className="bg-zinc-800 border-zinc-700 min-h-[80px] focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : "Unirme a la lista de espera"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
