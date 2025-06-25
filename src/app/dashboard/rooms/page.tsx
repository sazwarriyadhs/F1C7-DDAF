'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { rooms } from "@/lib/data"
import { PlusCircle } from "lucide-react"
import { useSettings } from "@/context/settings-context"
import { Badge } from "@/components/ui/badge"

export default function RoomsPage() {
  const { language } = useSettings();

  const translations = {
    title: { id: "Manajemen Kamar", en: "Room Management" },
    description: { id: "Lihat dan kelola status ketersediaan kamar.", en: "View and manage room availability status." },
    addRoom: { id: "Tambah Kamar", en: "Add Room" },
    bookNow: { id: "Pesan Sekarang", en: "Book Now" },
    status: {
        Available: { id: "Tersedia", en: "Available" },
        Occupied: { id: "Terisi", en: "Occupied" },
        Cleaning: { id: "Dibersihkan", en: "Cleaning" },
    }
  }
  
  const getStatusVariant = (status: string): "default" | "destructive" | "secondary" | "outline" => {
    switch (status) {
        case 'Available':
            return 'default'
        case 'Occupied':
            return 'destructive'
        case 'Cleaning':
            return 'secondary'
        default:
            return 'outline'
    }
  }

  return (
    <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold font-headline">{translations.title[language]}</h1>
            <p className="text-muted-foreground">{translations.description[language]}</p>
          </div>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            {translations.addRoom[language]}
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rooms.map((room) => (
                <Card key={room.id} className="flex flex-col">
                    <CardHeader className="p-0">
                        <div className="relative aspect-video">
                            <Image 
                                src={room.image} 
                                alt={room.name[language]} 
                                fill 
                                className="object-cover"
                                data-ai-hint={room.hint}
                            />
                            <Badge 
                                variant={getStatusVariant(room.status)} 
                                className="absolute top-2 right-2"
                            >
                                {translations.status[room.status as keyof typeof translations.status][language]}
                            </Badge>
                        </div>
                        <div className="p-6 pb-2">
                            <CardTitle className="font-headline text-xl">{room.name[language]}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow">
                        <p className="text-muted-foreground h-12">{room.description[language]}</p>
                    </CardContent>
                    <CardFooter>
                         <Button className="w-full" disabled={room.status !== 'Available'}>
                            {translations.bookNow[language]}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}
