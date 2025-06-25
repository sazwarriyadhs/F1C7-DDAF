import Link from 'next/link'
import Logo from './logo'
import { Github, Twitter, Facebook } from 'lucide-react'

const footerNavs = [
    { href: '/', name: 'Home' },
    { href: '/services', name: 'Services' },
    { href: '/classes', name: 'Classes' },
    { href: '/about', name: 'About Us' },
    { href: '/contact', name: 'Contact' },
    { href: '/login', name: 'Admin Login'}
]

export default function PublicFooter() {
    return (
        <footer className="border-t bg-muted/20">
            <div className="container py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <Logo />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">Find your inner peace and serenity.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {footerNavs.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                     <div className="flex justify-center md:justify-start space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Serenity Spa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
