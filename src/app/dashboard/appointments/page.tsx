'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { appointments } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, PlusCircle } from "lucide-react"
import { useSettings } from "@/context/settings-context"

export default function AppointmentsPage() {
  const { language } = useSettings();

  const translations = {
      title: { id: "Janji Temu", en: "Appointments" },
      description: { id: "Kelola dan lihat semua janji temu klien.", en: "Manage and view all client appointments." },
      newAppointment: { id: "Janji Temu Baru", en: "New Appointment" },
      client: { id: "Klien", en: "Client" },
      service: { id: "Layanan / Kelas", en: "Service / Class" },
      status: { id: "Status", en: "Status" },
      date: { id: "Tanggal", en: "Date" },
      time: { id: "Waktu", en: "Time" },
      actions: { id: "Tindakan", en: "Actions" },
      edit: { id: "Ubah", en: "Edit" },
      confirm: { id: "Konfirmasi", en: "Confirm" },
      cancel: { id: "Batalkan", en: "Cancel" },
      delete: { id: "Hapus", en: "Delete" },
      toggleMenu: { id: "Alihkan menu", en: "Toggle menu" },
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{translations.title[language]}</CardTitle>
            <CardDescription>{translations.description[language]}</CardDescription>
          </div>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            {translations.newAppointment[language]}
          </Button>
        </div>
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
              <TableHead><span className="sr-only">{translations.actions[language]}</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{appointment.client}</TableCell>
                <TableCell>{appointment.service}</TableCell>
                <TableCell>
                  <Badge 
                    variant={appointment.status === 'Cancelled' ? 'destructive' : appointment.status === 'Pending' ? 'secondary' : 'default'} 
                    className="capitalize"
                  >
                    {appointment.status}
                  </Badge>
                </TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">{translations.toggleMenu[language]}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>{translations.actions[language]}</DropdownMenuLabel>
                      <DropdownMenuItem>{translations.edit[language]}</DropdownMenuItem>
                      <DropdownMenuItem>{translations.confirm[language]}</DropdownMenuItem>
                      <DropdownMenuItem>{translations.cancel[language]}</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">{translations.delete[language]}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
