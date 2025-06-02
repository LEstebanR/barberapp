"use client";

import type React from "react";

import { useState, useRef } from "react";
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
import { toast } from "sonner";

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      shopName: formData.get("shop-name") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      size: formData.get("size") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Error al enviar el formulario");
      }

      toast.success("¡Gracias por registrarte!", {
        description:
          "Te hemos añadido a nuestra lista de espera. Te notificaremos por email cuando la plataforma esté lista.",
      });

      // Reset form using the ref
      formRef.current?.reset();
    } catch (err) {
      toast.error("Error al enviar el formulario", {
        description:
          err instanceof Error ? err.message : "Por favor, intenta nuevamente",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border border-amber-500/30 bg-zinc-950 shadow-xl md:w-[400px]">
      <CardHeader>
        <CardTitle className="text-white">
          Regístrate en la lista de espera
        </CardTitle>
        <CardDescription className="text-zinc-300">
          Completa el formulario para ser de los primeros en acceder a BarberApp
        </CardDescription>
      </CardHeader>
      <form ref={formRef} onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="shop-name" className="text-white">
              Nombre de la barbería *
            </Label>
            <Input
              id="shop-name"
              name="shop-name"
              placeholder="Ej: Barbería Moderna"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Nombre completo *
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Tu nombre completo"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email de contacto *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white">
              Teléfono *
            </Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+34 123 456 789"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="size" className="text-white">
              Tamaño de la barbería *
            </Label>
            <Select name="size" required>
              <SelectTrigger
                id="size"
                className="bg-zinc-800 border-zinc-700 focus:border-amber-500/50 focus:ring-amber-500/20 text-white w-full"
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
              name="message"
              placeholder="Cuéntanos qué funcionalidades te interesan más..."
              className="bg-zinc-800 border-zinc-700 min-h-[80px] focus:border-amber-500/50 focus:ring-amber-500/20 text-white placeholder:text-zinc-400"
            />
          </div>
        </CardContent>
        <CardFooter className="mt-4">
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
