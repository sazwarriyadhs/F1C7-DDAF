'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import PublicHeader from '@/components/public-header'
import PublicFooter from '@/components/public-footer'
import { SettingsProvider, useSettings } from '@/context/settings-context'
import { serviceCategories } from '@/lib/data'
import { Star } from 'lucide-react'

function LandingPageContent() {
    const { language } = useSettings();

    const translations = {
        heroTitle: { id: "Temukan Kedamaian Batin Anda", en: "Find Your Inner Peace" },
        heroSubtitle: { id: "Manjakan diri Anda dengan perawatan spa dan pilates kami yang menyegarkan, dirancang untuk menyelaraskan tubuh, pikiran, dan jiwa Anda.", en: "Indulge in our rejuvenating spa and pilates treatments, designed to harmonize your body, mind, and soul." },
        bookAppointment: { id: "Pesan Janji Temu", en: "Book an Appointment" },
        ourServices: { id: "Layanan Unggulan Kami", en: "Our Featured Services" },
        ourServicesDesc: { id: "Jelajahi berbagai perawatan yang dirancang untuk menenangkan dan merevitalisasi.", en: "Explore a variety of treatments designed to relax and revitalize." },
        viewAllServices: { id: "Lihat Semua Layanan", en: "View All Services" },
        discoverPilates: { id: "Temukan Dunia Pilates", en: "Discover the World of Pilates" },
        discoverPilatesDesc: { id: "Perkuat inti Anda, tingkatkan fleksibilitas, dan temukan keseimbangan dengan kelas pilates kami yang dipandu oleh ahli.", en: "Strengthen your core, improve flexibility, and find balance with our expert-led pilates classes." },
        viewAllClasses: { id: "Lihat Semua Kelas", en: "View All Classes" },
        whatClientsSay: { id: "Apa Kata Klien Kami", en: "What Our Clients Say" },
        aboutUs: { id: "Tentang Serenity Spa", en: "About Serenity Spa" },
        aboutUsText: { id: "Di Serenity Spa, kami percaya pada kekuatan penyembuhan dari sentuhan dan gerakan. Misi kami adalah menyediakan surga yang tenang di mana Anda dapat melepaskan diri dari tuntutan kehidupan sehari-hari dan terhubung kembali dengan diri Anda sendiri.", en: "At Serenity Spa, we believe in the healing power of touch and movement. Our mission is to provide a tranquil haven where you can escape the demands of daily life and reconnect with yourself." },
        learnMore: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
        readyToRelax: { id: "Siap untuk Bersantai?", en: "Ready to Relax?" },
        readyToRelaxDesc: { id: "Perjalanan Anda menuju ketenangan hanya dengan sekali klik.", en: "Your journey to tranquility is just a click away." },
    };
    
    const testimonials = [
        {
            name: "Jessica M.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            rating: 5,
            text: {
                id: "Pengalaman paling menenangkan yang pernah saya alami. Pijat batu panasnya luar biasa!",
                en: "The most relaxing experience I've ever had. The hot stone massage was divine!"
            }
        },
        {
            name: "David L.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
            rating: 5,
            text: {
                id: "Kelas pilates telah mengubah postur tubuh saya dan mengurangi sakit punggung saya. Instruktur sangat berpengetahuan.",
                en: "The pilates classes have transformed my posture and reduced my back pain. The instructors are so knowledgeable."
            }
        },
        {
            name: "Sarah K.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
            rating: 5,
            text: {
                id: "Suasananya sangat damai. Sempurna untuk melepaskan diri dari hiruk pikuk kota.",
                en: "Such a peaceful atmosphere. Perfect for escaping the hustle and bustle of the city."
            }
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <PublicHeader />
            <main className="flex-1">
                <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
                    <Image src="https://placehold.co/1920x1080" alt="Spa background" fill className="object-cover -z-10 brightness-50" data-ai-hint="spa background" />
                    <div className="container px-4 md:px-6">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-white">{translations.heroTitle[language]}</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">{translations.heroSubtitle[language]}</p>
                        <Button size="lg" className="mt-8" asChild>
                            <Link href="/booking">{translations.bookAppointment[language]}</Link>
                        </Button>
                    </div>
                </section>

                <section id="services" className="py-12 md:py-20 bg-muted/40">
                    <div className="container px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.ourServices[language]}</h2>
                            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">{translations.ourServicesDesc[language]}</p>
                        </div>
                        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {serviceCategories.slice(0, 3).map(category => (
                                <Card key={category.category[language]}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                                            <span className="text-3xl">{category.emoji}</span>
                                            {category.category[language]}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{category.description[language]}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <Button variant="outline" asChild>
                                <Link href="/services">{translations.viewAllServices[language]}</Link>
                            </Button>
                        </div>
                    </div>
                </section>
                
                <section id="pilates" className="py-12 md:py-20">
                    <div className="container px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.discoverPilates[language]}</h2>
                                <p className="mt-4 text-muted-foreground">{translations.discoverPilatesDesc[language]}</p>
                                <Button className="mt-6" asChild>
                                    <Link href="/classes">{translations.viewAllClasses[language]}</Link>
                                </Button>
                            </div>
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                <Image src="https://placehold.co/600x400" alt="Pilates class" fill className="object-cover" data-ai-hint="pilates class" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="py-12 md:py-20 bg-muted/40">
                    <div className="container px-4 md:px-6">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.whatClientsSay[language]}</h2>
                        </div>
                        <div className="mt-10 grid gap-8 md:grid-cols-3">
                            {testimonials.map(testimonial => (
                                <Card key={testimonial.name}>
                                    <CardContent className="pt-6">
                                        <div className="flex items-center mb-4">
                                            <Avatar>
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="ml-4">
                                                <p className="font-semibold">{testimonial.name}</p>
                                                <div className="flex items-center">
                                                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 text-primary fill-primary" />)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground">"{testimonial.text[language]}"</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="about" className="py-12 md:py-20">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.aboutUs[language]}</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">{translations.aboutUsText[language]}</p>
                        <Button variant="outline" className="mt-6" asChild>
                            <Link href="/about">{translations.learnMore[language]}</Link>
                        </Button>
                    </div>
                </section>

                <section id="cta" className="py-12 md:py-20 bg-primary text-primary-foreground">
                    <div className="container px-4 md:px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">{translations.readyToRelax[language]}</h2>
                        <p className="mt-2 max-w-xl mx-auto">{translations.readyToRelaxDesc[language]}</p>
                        <Button variant="secondary" size="lg" className="mt-8" asChild>
                            <Link href="/booking">{translations.bookAppointment[language]}</Link>
                        </Button>
                    </div>
                </section>
            </main>
            <PublicFooter />
        </div>
    )
}

export default function LandingPage() {
    return (
        <SettingsProvider>
            <LandingPageContent />
        </SettingsProvider>
    )
}
