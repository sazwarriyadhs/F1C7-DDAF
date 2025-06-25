'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { inventory } from "@/lib/data"
import { MoreHorizontal, PlusCircle } from "lucide-react"
import { useSettings } from "@/context/settings-context"

export default function InventoryPage() {
  const { language } = useSettings();
  
  const translations = {
      title: { id: "Manajemen Inventaris", en: "Inventory Management" },
      description: { id: "Lacak produk, tingkat stok, dan pemasok.", en: "Track products, stock levels, and suppliers." },
      addProduct: { id: "Tambah Produk", en: "Add Product" },
      productName: { id: "Nama Produk", en: "Product Name" },
      category: { id: "Kategori", en: "Category" },
      stockLevel: { id: "Tingkat Stok", en: "Stock Level" },
      supplier: { id: "Pemasok", en: "Supplier" },
      actions: { id: "Tindakan", en: "Actions" },
      edit: { id: "Ubah", en: "Edit" },
      restock: { id: "Stok Ulang", en: "Restock" },
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
            {translations.addProduct[language]}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{translations.productName[language]}</TableHead>
              <TableHead>{translations.category[language]}</TableHead>
              <TableHead>{translations.stockLevel[language]}</TableHead>
              <TableHead>{translations.supplier[language]}</TableHead>
              <TableHead><span className="sr-only">{translations.actions[language]}</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.supplier}</TableCell>
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
                      <DropdownMenuItem>{translations.restock[language]}</DropdownMenuItem>
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
