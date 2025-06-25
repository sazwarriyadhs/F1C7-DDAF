'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { pilatesCategories } from "@/lib/data"
import { PlusCircle } from "lucide-react"
import { useSettings } from "@/context/settings-context"

export default function ClassesPage() {
  const { language } = useSettings();

  const translations = {
      title: { id: "Kelas Pilates", en: "Pilates Classes" },
      description: { id: "Jelajahi berbagai jenis Pilates yang kami tawarkan.", en: "Explore the different types of Pilates we offer." },
      scheduleClass: { id: "Jadwalkan Kelas", en: "Schedule Class" },
      viewSchedule: { id: "Lihat Jadwal", en: "View Schedule" },
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
            {translations.scheduleClass[language]}
          </Button>
        </div>
        
        <div className="space-y-8">
            {pilatesCategories.map((category) => (
                <div key={category.category[language]}>
                    <h2 className="text-2xl font-bold font-headline mb-1"><span className="mr-2">{category.emoji}</span>{category.category[language]}</h2>
                    <p className="text-muted-foreground mb-4">{category.description[language]}</p>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {category.types.map((pilatesType) => (
                            <Card key={pilatesType.title[language]} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-headline text-xl">{pilatesType.title[language]}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{pilatesType.description[language]}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="secondary" className="w-full">
                                        {translations.viewSchedule[language]}
                                    </Button>
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
