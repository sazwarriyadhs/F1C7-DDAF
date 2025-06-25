import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { pilatesCategories } from "@/lib/data"
import { PlusCircle } from "lucide-react"

export default function ClassesPage() {
  return (
    <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold font-headline">Pilates Classes</h1>
            <p className="text-muted-foreground">Explore the different types of Pilates we offer.</p>
          </div>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            Schedule Class
          </Button>
        </div>
        
        <div className="space-y-8">
            {pilatesCategories.map((category) => (
                <div key={category.category}>
                    <h2 className="text-2xl font-bold font-headline mb-1"><span className="mr-2">{category.emoji}</span>{category.category}</h2>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {category.types.map((pilatesType) => (
                            <Card key={pilatesType.title} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="font-headline text-xl">{pilatesType.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{pilatesType.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="secondary" className="w-full">
                                        View Schedule
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
