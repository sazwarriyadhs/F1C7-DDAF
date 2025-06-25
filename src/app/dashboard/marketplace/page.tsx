'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useSettings } from "@/context/settings-context"
import { marketplaces } from "@/lib/data"
import Image from "next/image"
import { Plug, ExternalLink, Settings2 } from "lucide-react"

export default function MarketplacePage() {
  const { language } = useSettings();

  const translations = {
    title: { id: "Integrasi Marketplace", en: "Marketplace Integration" },
    description: { id: "Hubungkan dan kelola layanan Anda di berbagai marketplace populer.", en: "Connect and manage your services on popular marketplaces." },
    connect: { id: "Hubungkan", en: "Connect" },
    manage: { id: "Kelola", en: "Manage" },
    visit: { id: "Kunjungi Situs", en: "Visit Site" },
    status: {
      Connected: { id: "Terhubung", en: "Connected" },
      "Not Connected": { id: "Belum Terhubung", en: "Not Connected" },
    }
  }
  
  const getStatusBadgeVariant = (status: string): "default" | "outline" => {
    return status === 'Connected' ? 'default' : 'outline';
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold font-headline">{translations.title[language]}</h1>
          <p className="text-muted-foreground">{translations.description[language]}</p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {marketplaces.map((marketplace) => (
          <Card key={marketplace.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 relative flex-shrink-0">
                       <Image 
                           src={marketplace.logo} 
                           alt={`${marketplace.name} logo`}
                           fill
                           className="object-contain"
                           data-ai-hint={`${marketplace.id} logo`}
                       />
                   </div>
                   <div>
                       <CardTitle className="font-headline text-xl">{marketplace.name}</CardTitle>
                       <CardDescription>{marketplace.type}</CardDescription>
                   </div>
                </div>
                 <Badge variant={getStatusBadgeVariant(marketplace.status)}>
                    {translations.status[marketplace.status as keyof typeof translations.status][language]}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground h-16">{marketplace.description[language]}</p>
            </CardContent>
            <CardFooter className="gap-2">
              {marketplace.status === 'Connected' ? (
                <Button className="w-full">
                  <Settings2 className="mr-2 h-4 w-4" />
                  {translations.manage[language]}
                </Button>
              ) : (
                <Button className="w-full">
                  <Plug className="mr-2 h-4 w-4" />
                  {translations.connect[language]}
                </Button>
              )}
              <Button variant="outline" asChild>
                <a href={marketplace.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {translations.visit[language]}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
