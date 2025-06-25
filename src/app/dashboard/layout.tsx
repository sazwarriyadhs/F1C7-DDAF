'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Bell,
  Calendar,
  CircleUser,
  CreditCard,
  Dumbbell,
  Home,
  Languages,
  Menu,
  Search,
  ShoppingBasket,
  Sprout,
  Users,
  Bed,
  UsersRound,
  Globe,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "@/components/logo"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { SettingsProvider, useSettings } from "@/context/settings-context"

type Language = 'id' | 'en';
type UserRole = 'admin' | 'staff';

const getNavItems = (language: Language, role: UserRole) => {
    const translations = {
        dashboard: { id: "Dasbor", en: "Dashboard" },
        appointments: { id: "Janji Temu", en: "Appointments" },
        clients: { id: "Klien", en: "Clients" },
        services: { id: "Layanan", en: "Services" },
        classes: { id: "Kelas", en: "Classes" },
        staff: { id: "Staf", en: "Staff" },
        inventory: { id: "Inventaris", en: "Inventory" },
        financials: { id: "Keuangan", en: "Financials" },
        rooms: { id: "Kamar", en: "Rooms" },
        marketplace: { id: "Marketplace", en: "Marketplace" },
    };

    const allNavItems = [
        { href: "/dashboard", icon: Home, label: translations.dashboard[language], roles: ['admin', 'staff'] },
        { href: "/dashboard/appointments", icon: Calendar, label: translations.appointments[language], badge: "6", roles: ['admin', 'staff'] },
        { href: "/dashboard/clients", icon: Users, label: translations.clients[language], roles: ['admin', 'staff'] },
        { href: "/dashboard/services", icon: Sprout, label: translations.services[language], roles: ['admin', 'staff'] },
        { href: "/dashboard/classes", icon: Dumbbell, label: translations.classes[language], roles: ['admin', 'staff'] },
        { href: "/dashboard/staff", icon: UsersRound, label: translations.staff[language], roles: ['admin'] },
        { href: "/dashboard/inventory", icon: ShoppingBasket, label: translations.inventory[language], roles: ['admin', 'staff'] },
        { href: "/dashboard/financials", icon: CreditCard, label: translations.financials[language], roles: ['admin'] },
        { href: "/dashboard/rooms", icon: Bed, label: translations.rooms[language], roles: ['admin', 'staff'] },
        { href: "/dashboard/marketplace", icon: Globe, label: translations.marketplace[language], roles: ['admin'] },
    ];
    
    return allNavItems.filter(item => item.roles.includes(role));
};

function LanguageSwitcher() {
    const { language, setLanguage } = useSettings();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <Languages className="h-4 w-4" />
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

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language } = useSettings();
  const [userRole, setUserRole] = useState<UserRole>('admin');
  const navItems = getNavItems(language, userRole);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);
  
  const translations = {
      search: { id: "Cari...", en: "Search..." },
      toggleNav: { id: "Alihkan menu navigasi", en: "Toggle navigation menu" },
      toggleUser: { id: "Alihkan menu pengguna", en: "Toggle user menu" },
      myAccount: { id: "Akun Saya", en: "My Account" },
      settings: { id: "Profil", en: "Profile" },
      support: { id: "Dukungan", en: "Support" },
      logout: { id: "Keluar", en: "Logout" },
      toggleNotifications: { id: "Alihkan notifikasi", en: "Toggle notifications" },
      upgradeToPro: { id: "Tingkatkan ke Pro", en: "Upgrade to Pro" },
      upgradeDescription: { id: "Buka semua fitur dan dapatkan akses tak terbatas ke tim dukungan kami.", en: "Unlock all features and get unlimited access to our support team." },
      upgrade: { id: "Tingkatkan", en: "Upgrade" },
      switchRole: { id: "Ganti Peran (Demo)", en: "Switch Role (Demo)" },
      admin: { id: "Admin", en: "Admin" },
      staff: { id: "Staf", en: "Staff" },
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo />
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">{translations.toggleNotifications[language]}</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.href && "bg-muted text-primary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  {item.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">{item.badge}</Badge>}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>{translations.upgradeToPro[language]}</CardTitle>
                <CardDescription>
                  {translations.upgradeDescription[language]}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  {translations.upgrade[language]}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">{translations.toggleNav[language]}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <Logo />
                </Link>
                {navItems.map((item) => (
                    <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                        pathname === item.href && "bg-muted text-foreground"
                    )}
                    >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                    {item.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">{item.badge}</Badge>}
                    </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={translations.search[language]}
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <LanguageSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">{translations.toggleUser[language]}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{translations.myAccount[language]}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">{translations.settings[language]}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>{translations.support[language]}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>{translations.switchRole[language]}</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => setUserRole('admin')} disabled={userRole === 'admin'}>
                {translations.admin[language]}
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setUserRole('staff')} disabled={userRole === 'staff'}>
                {translations.staff[language]}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">{translations.logout[language]}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <SettingsProvider>
            <DashboardLayoutContent>{children}</DashboardLayoutContent>
        </SettingsProvider>
    )
}
