'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, PlusCircle, RadioTower } from "lucide-react"
import { useSettings } from "@/context/settings-context"

// Define the type for a single client
export type Client = {
  id: number;
  name: string;
  email: string;
  phone: string;
  total_appointments: number;
  last_visit: string; // Formatted date string
  rfid: string | null;
};

interface ClientListProps {
  clients: Client[];
}

export default function ClientList({ clients }: ClientListProps) {
  const { language } = useSettings();

  const translations = {
      title: { id: "Manajemen Klien", en: "Client Management" },
      description: { id: "Lihat, tambah, dan kelola data klien Anda.", en: "View, add, and manage your client data." },
      addClient: { id: "Tambah Klien", en: "Add Client" },
      name: { id: "Nama", en: "Name" },
      email: { id: "Email", en: "Email" },
      phone: { id: "Telepon", en: "Phone" },
      totalAppointments: { id: "Total Janji Temu", en: "Total Appointments" },
      lastVisit: { id: "Kunjungan Terakhir", en: "Last Visit" },
      rfid: { id: "Gelang RFID", en: "RFID Bracelet" },
      actions: { id: "Tindakan", en: "Actions" },
      edit: { id: "Ubah", en: "Edit" },
      viewHistory: { id: "Lihat Riwayat", en: "View History" },
      assignRfid: { id: "Tetapkan RFID", en: "Assign RFID" },
      delete: { id: "Hapus", en: "Delete" },
      toggleMenu: { id: "Alihkan menu", en: "Toggle menu" },
      unassigned: { id: "Belum Ditetapkan", en: "Unassigned" },
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
            {translations.addClient[language]}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{translations.name[language]}</TableHead>
              <TableHead>{translations.email[language]}</TableHead>
              <TableHead>{translations.phone[language]}</TableHead>
              <TableHead>{translations.totalAppointments[language]}</TableHead>
              <TableHead>{translations.lastVisit[language]}</TableHead>
              <TableHead>{translations.rfid[language]}</TableHead>
              <TableHead><span className="sr-only">{translations.actions[language]}</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.total_appointments}</TableCell>
                <TableCell>{client.last_visit}</TableCell>
                <TableCell>
                  {client.rfid ? (
                    <div className="flex items-center gap-2 font-mono text-sm">
                      <RadioTower className="h-4 w-4 text-primary" />
                      <span>{client.rfid}</span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground">{translations.unassigned[language]}</span>
                  )}
                </TableCell>
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
                      <DropdownMenuItem>{translations.viewHistory[language]}</DropdownMenuItem>
                      <DropdownMenuItem>{translations.assignRfid[language]}</DropdownMenuItem>
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
