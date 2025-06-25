'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { serviceCategories } from "@/lib/data"
import { PlusCircle } from "lucide-react"
import { useSettings } from "@/context/settings-context"

export default function ServicesPage() {
  const { language, currency } = useSettings();
  
  const translations = {
      title: { id: "Layanan Spa", en: "Spa Services" },
      description: { id: "Kelola penawaran dan detail layanan.", en: "Manage service offerings and details." },
      newService: { id: "Layanan Baru", en: "New Service" },
  }

  const formatCurrency = (price: number, currency: 'IDR' | 'USD') => {
    if (currency === 'IDR') {
        return `Rp${price.toLocaleString('id-ID')}`;
    }
    return `$${price.toLocaleString('en-US')}`;
  };

  return (
    <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold font-headline">{translations.title[language]}</h1>
            <p className="text-muted-foreground">{translations.description[language]}</p>
          </div>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            {translations.newService[language]}
          </Button>
        </div>
        
        <div className="space-y-8">
            {serviceCategories.map((category) => (
                <div key={category.category[language]}>
                    <h2 className="text-2xl font-bold font-headline mb-1"><span className="mr-2">{category.emoji}</span>{category.category[language]}</h2>
                    <p className="text-muted-foreground mb-4">{category.description[language]}</p>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {category.services.map((service) => (
                            <Card key={service.title[language]}>
                            <CardHeader className="p-0">
                                <div className="relative aspect-video">
                                    <Image 
                                        src={service.image} 
                                        alt={service.title[language]} 
                                        fill 
                                        className="object-cover"
                                        data-ai-hint={service.hint}
                                    />
                                </div>
                                <div className="p-6 pb-2">
                                    <CardTitle className="font-headline text-xl">{service.title[language]}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-muted-foreground h-12">{service.description[language]}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                                <div className="font-semibold text-lg text-primary">{formatCurrency(currency === 'IDR' ? service.price_idr : service.price_usd, currency)}</div>
                                <span className="text-sm text-muted-foreground">{service.duration}</span>
                            </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
