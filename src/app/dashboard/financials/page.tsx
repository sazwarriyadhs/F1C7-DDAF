'use client'

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
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { useSettings } from "@/context/settings-context"
import { getFinancialData, chartConfig as baseChartConfig } from "@/lib/data"
import { DollarSign, ArrowUpRight, ArrowDownLeft, Download } from "lucide-react"

const chartConfig = {
  ...baseChartConfig,
  revenue: { label: "Revenue", color: "hsl(var(--chart-2))" },
  expenses: { label: "Expenses", color: "hsl(var(--chart-5))" },
  profit: { label: "Profit", color: "hsl(var(--primary))" },
}

export default function FinancialsPage() {
  const { language, currency } = useSettings();
  const { summary, monthlyData, recentTransactions } = getFinancialData(language);

  const translations = {
    title: { id: "Laporan Keuangan", en: "Financial Report" },
    description: { id: "Lihat kinerja keuangan dan laporan terperinci Anda.", en: "View your financial performance and detailed reports." },
    downloadReport: { id: "Unduh Laporan", en: "Download Report" },
    totalRevenue: { id: "Total Pendapatan", en: "Total Revenue" },
    totalExpenses: { id: "Total Pengeluaran", en: "Total Expenses" },
    netProfit: { id: "Laba Bersih", en: "Net Profit" },
    monthlyOverview: { id: "Tinjauan Bulanan", en: "Monthly Overview" },
    monthlyDescription: { id: "Pendapatan, Pengeluaran, dan Laba selama 6 bulan terakhir.", en: "Revenue, Expenses, and Profit over the last 6 months." },
    recentTransactions: { id: "Transaksi Terkini", en: "Recent Transactions" },
    recentTransactionsDesc: { id: "Daftar transaksi keuangan terbaru.", en: "A list of the most recent financial transactions." },
    date: { id: "Tanggal", en: "Date" },
    transactionDescription: { id: "Deskripsi", en: "Description" },
    category: { id: "Kategori", en: "Category" },
    amount: { id: "Jumlah", en: "Amount" },
    type: { id: "Tipe", en: "Type" },
    income: { id: "Pemasukan", en: "Income" },
    expense: { id: "Pengeluaran", en: "Expense" },
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'id' ? 'id-ID' : 'en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(amount);
  }

  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold font-headline">{translations.title[language]}</h1>
            <p className="text-muted-foreground">{translations.description[language]}</p>
        </div>
        <Button size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          {translations.downloadReport[language]}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations.totalRevenue[language]}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary.revenue)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations.totalExpenses[language]}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary.expenses)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{translations.netProfit[language]}</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(summary.profit)}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{translations.monthlyOverview[language]}</CardTitle>
            <CardDescription>{translations.monthlyDescription[language]}</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={monthlyData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                  <YAxis
                    tickFormatter={(value) => formatCurrency(value as number).replace(/,00$/, '').replace(/\.00$/, '')}
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent
                      formatter={(value, name) => (
                        <div className="flex flex-col">
                            <span className="capitalize">{name}</span>
                            <span>{formatCurrency(value as number)}</span>
                        </div>
                      )}
                    />}
                  />
                  <Legend />
                  <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} name={chartConfig.revenue.label} />
                  <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} name={chartConfig.expenses.label} />
                  <Line type="monotone" dataKey="profit" stroke="var(--color-profit)" strokeWidth={2} name={chartConfig.profit.label} />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{translations.recentTransactions[language]}</CardTitle>
          <CardDescription>{translations.recentTransactionsDesc[language]}</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{translations.date[language]}</TableHead>
                <TableHead>{translations.transactionDescription[language]}</TableHead>
                <TableHead>{translations.category[language]}</TableHead>
                <TableHead>{translations.type[language]}</TableHead>
                <TableHead className="text-right">{translations.amount[language]}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentTransactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell className="font-medium">{tx.description}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{tx.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                        {tx.type === 'Income' ? 
                            <ArrowUpRight className="h-4 w-4 text-green-500"/> : 
                            <ArrowDownLeft className="h-4 w-4 text-red-500"/>}
                        <span>{tx.type === 'Income' ? translations.income[language] : translations.expense[language]}</span>
                    </div>
                  </TableCell>
                  <TableCell className={`text-right font-medium ${tx.type === 'Income' ? 'text-green-500' : 'text-red-500'}`}>
                    {tx.type === 'Income' ? '+' : '-'}{formatCurrency(tx.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
