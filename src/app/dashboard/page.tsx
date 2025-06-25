"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { DollarSign, Users, Calendar as CalendarIcon, Activity } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { appointments, getPopularServicesData, chartConfig } from "@/lib/data"
import { useSettings } from "@/context/settings-context"


export default function Dashboard() {
  const { language } = useSettings();
  const popularServicesData = getPopularServicesData(language);
  
  const translations = {
    todaysRevenue: { id: "Pendapatan Hari Ini", en: "Today's Revenue" },
    fromYesterday: { id: "+15.2% dari kemarin", en: "+15.2% from yesterday" },
    newClients: { id: "Klien Baru", en: "New Clients" },
    fromLastWeek: { id: "+12.1% dari minggu lalu", en: "+12.1% from last week" },
    upcomingAppointments: { id: "Janji Temu Mendatang", en: "Upcoming Appointments" },
    inNext24Hours: { id: "dalam 24 jam ke depan", en: "in the next 24 hours" },
    classCapacity: { id: "Kapasitas Kelas", en: "Class Capacity" },
    avgToday: { id: "Rata-rata di semua kelas hari ini", en: "Average across all classes today" },
    appointmentsTodayTomorrow: { id: "Daftar janji temu untuk hari ini dan besok.", en: "A list of appointments for today and tomorrow." },
    client: { id: "Klien", en: "Client" },
    service: { id: "Layanan", en: "Service" },
    status: { id: "Status", en: "Status" },
    date: { id: "Tanggal", en: "Date" },
    time: { id: "Waktu", en: "Time" },
    popularServices: { id: "Layanan Populer", en: "Popular Services" },
    mostBookedThisMonth: { id: "Layanan yang paling banyak dipesan bulan ini.", en: "The most booked services this month." },
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {translations.todaysRevenue[language]}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{language === 'id' ? 'Rp61.000.000' : '$4,205.50'}</div>
            <p className="text-xs text-muted-foreground">
              {translations.fromYesterday[language]}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {translations.newClients[language]}
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+25</div>
            <p className="text-xs text-muted-foreground">
              {translations.fromLastWeek[language]}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations.upcomingAppointments[language]}</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              {translations.inNext24Hours[language]}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {translations.classCapacity[language]}
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82%</div>
            <p className="text-xs text-muted-foreground">
              {translations.avgToday[language]}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>{translations.upcomingAppointments[language]}</CardTitle>
            <CardDescription>{translations.appointmentsTodayTomorrow[language]}</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{translations.client[language]}</TableHead>
                  <TableHead>{translations.service[language]}</TableHead>
                  <TableHead>{translations.status[language]}</TableHead>
                  <TableHead>{translations.date[language]}</TableHead>
                  <TableHead>{translations.time[language]}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {appointments.slice(0, 5).map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      <div className="font-medium">{appointment.client}</div>
                    </TableCell>
                    <TableCell>{appointment.service}</TableCell>
                    <TableCell>
                      <Badge variant={appointment.status === 'Cancelled' ? 'destructive' : 'default'} className="capitalize">{appointment.status}</Badge>
                    </TableCell>
                    <TableCell>{appointment.date}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{translations.popularServices[language]}</CardTitle>
            <CardDescription>{translations.mostBookedThisMonth[language]}</CardDescription>
          </CardHeader>
          <CardContent>
             <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={popularServicesData} layout="vertical" margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} tickMargin={10} width={100} />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Bar dataKey="value" radius={5}>
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
