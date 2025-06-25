'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { staff } from "@/lib/data"
import { MoreHorizontal, PlusCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useSettings } from "@/context/settings-context"

export default function StaffPage() {
  const { language } = useSettings();

  const translations = {
      title: { id: "Manajemen Staf", en: "Staff Management" },
      description: { id: "Kelola akun terapis, pelatih, dan admin.", en: "Manage therapist, coach, and admin accounts." },
      addStaff: { id: "Tambah Staf", en: "Add Staff" },
      name: { id: "Nama", en: "Name" },
      role: { id: "Peran", en: "Role" },
      email: { id: "Email", en: "Email" },
      phone: { id: "Telepon", en: "Phone" },
      actions: { id: "Tindakan", en: "Actions" },
      edit: { id: "Ubah", en: "Edit" },
      viewSchedule: { id: "Lihat Jadwal", en: "View Schedule" },
      deactivate: { id: "Nonaktifkan", en: "Deactivate" },
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
            {translations.addStaff[language]}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{translations.name[language]}</TableHead>
              <TableHead>{translations.role[language]}</TableHead>
              <TableHead>{translations.email[language]}</TableHead>
              <TableHead>{translations.phone[language]}</TableHead>
              <TableHead><span className="sr-only">{translations.actions[language]}</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staff.map((member) => (
              <TableRow key={member.id}>
                <TableCell className="font-medium">{member.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{member.role}</Badge>
                </TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.phone}</TableCell>
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
                      <DropdownMenuItem>{translations.viewSchedule[language]}</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">{translations.deactivate[language]}</DropdownMenuItem>
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
