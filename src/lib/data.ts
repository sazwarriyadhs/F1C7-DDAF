import { CalendarIcon } from "lucide-react";

export const dailyRevenueData = [
  { date: "Mon", revenue: 2000 },
  { date: "Tue", revenue: 1800 },
  { date: "Wed", revenue: 2200 },
  { date: "Thu", revenue: 2500 },
  { date: "Fri", revenue: 3000 },
  { date: "Sat", revenue: 3500 },
  { date: "Sun", revenue: 3200 },
];

export const popularServicesData = [
  { name: "Massage", value: 400, fill: "var(--color-massage)" },
  { name: "Pilates", value: 300, fill: "var(--color-pilates)" },
  { name: "Facial", value: 300, fill: "var(--color-facial)" },
  { name: "Sauna", value: 200, fill: "var(--color-sauna)" },
];

export const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  massage: { label: "Massage", color: "hsl(var(--chart-1))" },
  pilates: { label: "Pilates", color: "hsl(var(--chart-2))" },
  facial: { label: "Facial", color: "hsl(var(--chart-3))" },
  sauna: { label: "Sauna", color: "hsl(var(--chart-4))" },
};

export const appointments = [
    { id: "APP001", client: "Sophia Davis", service: "Deep Tissue Massage", date: "2024-08-15", time: "10:00 AM", status: "Confirmed" },
    { id: "APP002", client: "Liam Miller", service: "Vinyasa Flow Pilates", date: "2024-08-15", time: "11:30 AM", status: "Confirmed" },
    { id: "APP003", client: "Olivia Wilson", service: "Aromatherapy Facial", date: "2024-08-15", time: "01:00 PM", status: "Pending" },
    { id: "APP004", client: "Noah Johnson", service: "Reformer Pilates", date: "2024-08-16", time: "09:00 AM", status: "Confirmed" },
    { id: "APP005", client: "Ava Brown", service: "Hot Stone Massage", date: "2024-08-16", time: "02:00 PM", status: "Cancelled" },
];

export const services = [
    { title: "Deep Tissue Massage", description: "An intensive massage focused on relieving chronic muscle tension.", price: 120, duration: "60 min", image: "https://placehold.co/600x400", hint: "massage therapy" },
    { title: "Aromatherapy Facial", description: "A soothing facial treatment using essential oils to rejuvenate the skin.", price: 90, duration: "50 min", image: "https://placehold.co/600x400", hint: "facial treatment" },
    { title: "Hot Stone Massage", description: "Heated stones are used to melt away tension and ease muscle stiffness.", price: 135, duration: "75 min", image: "https://placehold.co/600x400", hint: "hot stones" },
    { title: "Manicure & Pedicure", description: "Complete nail care for a polished and elegant look.", price: 75, duration: "90 min", image: "https://placehold.co/600x400", hint: "nail care" },
];

export const classes = [
    { id: "CLS001", name: "Vinyasa Flow Pilates", instructor: "Elena Reyes", date: "2024-08-20", time: "08:00 AM", capacity: 15, booked: 12 },
    { id: "CLS002", name: "Reformer Essentials", instructor: "Mark Chen", date: "2024-08-20", time: "10:00 AM", capacity: 8, booked: 8 },
    { id: "CLS003", name: "Mat Pilates Core", instructor: "Elena Reyes", date: "2024-08-21", time: "08:00 AM", capacity: 15, booked: 10 },
    { id: "CLS004", name: "Advanced Reformer", instructor: "Mark Chen", date: "2024-08-21", time: "12:00 PM", capacity: 8, booked: 5 },
];

export const staff = [
    { id: "STF001", name: "Elena Reyes", role: "Pilates Coach", email: "elena.r@serenity.com", phone: "555-0101" },
    { id: "STF002", name: "Mark Chen", role: "Pilates Coach", email: "mark.c@serenity.com", phone: "555-0102" },
    { id: "STF003", name: "Isabella Rossi", role: "Therapist", email: "isabella.r@serenity.com", phone: "555-0103" },
    { id: "STF004", name: "David Lee", role: "Therapist", email: "david.l@serenity.com", phone: "555-0104" },
    { id: "STF005", name: "Admin User", role: "Administrator", email: "admin@serenity.com", phone: "555-0100" },
];

export const inventory = [
    { id: "INV001", name: "Organic Lavender Oil", category: "Essential Oils", stock: 45, supplier: "AromaPure Inc." },
    { id: "INV002", name: "Premium Yoga Mat", category: "Equipment", stock: 20, supplier: "FlexiGear" },
    { id: "INV003", name: "Herbal Green Tea", category: "Consumables", stock: 150, supplier: "Zen Teas" },
    { id: "INV004", name: "Turkish Cotton Towels", category: "Linens", stock: 80, supplier: "SoftWeave Co." },
    { id: "INV005", name: "Pilates Reformer Spring", category: "Equipment Parts", stock: 30, supplier: "FlexiGear" },
];
