'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import { useSettings } from '@/context/settings-context'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Languages, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function LanguageSwitcher() {
    const { language, setLanguage } = useSettings();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-5 w-5" />
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => setLanguage('en')} disabled={language === 'en'}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setLanguage('id')} disabled={language === 'id'}>
                    Bahasa Indonesia
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function PublicHeader() {
    const { language } = useSettings();
    const pathname = usePathname();
    const navItems = [
        { href: "/", label: { id: "Beranda", en: "Home" } },
        { href: "/services", label: { id: "Layanan", en: "Services" } },
        { href: "/classes", label: { id: "Kelas", en: "Classes" } },
        { href: "/about", label: { id: "Tentang Kami", en: "About Us" } },
        { href: "/contact", label: { id: "Kontak", en: "Contact" } },
    ]

    const translations = {
        bookNow: { id: "Pesan Sekarang", en: "Book Now" },
        toggleMenu: { id: "Buka menu", en: "Toggle menu" },
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Logo />
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map(item => (
                            <Link key={item.href} href={item.href} className={cn("transition-colors hover:text-primary", pathname === item.href ? "text-primary" : "text-muted-foreground")}>
                                {item.label[language]}
                            </Link>
                        ))}
                    </nav>
                </div>
                
                <div className="flex flex-1 items-center justify-between md:justify-end">
                    <div className="md:hidden">
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">{translations.toggleMenu[language]}</span>
                          </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                          <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                              <Logo />
                          </Link>
                          <nav className="flex flex-col space-y-4">
                              {navItems.map(item => (
                                  <Link key={item.href} href={item.href} className={cn("text-lg transition-colors hover:text-primary", pathname === item.href ? "text-primary font-semibold" : "")}>
                                      {item.label[language]}
                                  </Link>
                              ))}
                          </nav>
                        </SheetContent>
                      </Sheet>
                    </div>

                    <div className="md:hidden">
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo />
                        </Link>
                    </div>
                
                    <div className="flex items-center space-x-2">
                        <LanguageSwitcher />
                        <Button asChild>
                            <Link href="/booking">{translations.bookNow[language]}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
