'use client'

import PublicHeader from "@/components/public-header"
import PublicFooter from "@/components/public-footer"
import { SettingsProvider, useSettings } from "@/context/settings-context"
import { pilatesCategories } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function ClassesPageContent() {
  const { language } = useSettings();
  
  const translations = {
      title: { id: "Kelas Pilates Kami", en: "Our Pilates Classes" },
      description: { id: "Perkuat inti Anda, tingkatkan fleksibilitas, dan temukan keseimbangan dengan kelas pilates kami yang dipandu oleh ahli.", en: "Strengthen your core, improve flexibility, and find balance with our expert-led pilates classes." },
  }

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
                {pilatesCategories.map((category) => (
                    <div key={category.category[language]}>
                        <h2 className="text-3xl font-bold font-headline mb-2 flex items-center gap-3">
                          <span className="text-4xl">{category.emoji}</span>
                          {category.category[language]}
                        </h2>
                        <p className="text-muted-foreground mb-6">{category.description[language]}</p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {category.types.map((pilatesType) => (
                                <Card key={pilatesType.title[language]} className="flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-xl">{pilatesType.title[language]}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{pilatesType.description[language]}</p>
                                    </CardContent>
                                </Card>
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

export default function ClassesPage() {
    return (
        <SettingsProvider>
            <ClassesPageContent />
        </SettingsProvider>
    )
}
