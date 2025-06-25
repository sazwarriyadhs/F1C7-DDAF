import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/lib/data"
import { PlusCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold font-headline">Spa Services</h1>
            <p className="text-muted-foreground">Manage service offerings and details.</p>
          </div>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            New Service
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service) => (
            <Card key={service.title}>
            <CardHeader className="p-0">
                <div className="relative aspect-video">
                    <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                        data-ai-hint={service.hint}
                    />
                </div>
                <div className="p-6 pb-2">
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="pt-0">
                <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div className="font-semibold text-lg text-primary">${service.price}</div>
                <span className="text-sm text-muted-foreground">{service.duration}</span>
            </CardFooter>
            </Card>
        ))}
        </div>
    </div>
  )
}
