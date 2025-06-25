'use client'

import Image from "next/image"
import PublicHeader from "@/components/public-header"
import PublicFooter from "@/components/public-footer"
import { SettingsProvider, useSettings } from "@/context/settings-context"
import { serviceCategories } from "@/lib/data"
import { Button } from "@/components/ui/button"

function ServicesPageContent() {
  const { language, currency } = useSettings();
  
  const translations = {
      title: { id: "Layanan Kami", en: "Our Services" },
      description: { id: "Jelajahi berbagai perawatan yang dirancang untuk menenangkan dan merevitalisasi.", en: "Explore a variety of treatments designed to relax and revitalize." },
      bookNow: { id: "Pesan Sekarang", en: "Book Now" },
  }

  const formatCurrency = (price: number, currency: 'IDR' | 'USD') => {
    if (currency === 'IDR') {
        return `Rp${price.toLocaleString('id-ID')}`;
    }
    return `$${price.toLocaleString('en-US')}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PublicHeader />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">{translations.title[language]}</h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">{translations.description[language]}</p>
            </div>
            
            <div className="space-y-12">
                {serviceCategories.map((category) => (
                    <div key={category.category[language]}>
                        <h2 className="text-3xl font-bold font-headline mb-2 flex items-center gap-3">
                          <span className="text-4xl">{category.emoji}</span>
                          {category.category[language]}
                        </h2>
                        <p className="text-muted-foreground mb-6">{category.description[language]}</p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {category.services.map((service) => (
                                <div key={service.title[language]} className="bg-card rounded-lg overflow-hidden shadow-sm flex flex-col border">
                                    <div className="relative aspect-video">
                                        <Image 
                                            src={service.image} 
                                            alt={service.title[language]} 
                                            fill 
                                            className="object-cover"
                                            data-ai-hint={service.hint}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                      <h3 className="font-headline text-xl font-semibold">{service.title[language]}</h3>
                                      <p className="text-muted-foreground mt-2 flex-grow h-12">{service.description[language]}</p>
                                      <div className="flex justify-between items-center mt-4">
                                          <div className="font-bold text-lg text-primary">{formatCurrency(currency === 'IDR' ? service.price_idr : service.price_usd, currency)}</div>
                                          <span className="text-sm text-muted-foreground">{service.duration}</span>
                                      </div>
                                    </div>
                                    <div className="p-6 pt-0">
                                      <Button className="w-full">{translations.bookNow[language]}</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}

export default function ServicesPage() {
    return (
        <SettingsProvider>
            <ServicesPageContent />
        </SettingsProvider>
    )
}
