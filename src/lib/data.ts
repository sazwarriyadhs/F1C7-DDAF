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
  { name: "Swedish Massage", value: 400, fill: "var(--color-massage)" },
  { name: "Facial", value: 300, fill: "var(--color-facial)" },
  { name: "Balinese Massage", value: 300, fill: "var(--color-pilates)" },
  { name: "Sauna", value: 200, fill: "var(--color-sauna)" },
];

export const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  massage: { label: "Swedish Massage", color: "hsl(var(--chart-1))" },
  pilates: { label: "Balinese Massage", color: "hsl(var(--chart-2))" },
  facial: { label: "Facial", color: "hsl(var(--chart-3))" },
  sauna: { label: "Sauna", color: "hsl(var(--chart-4))" },
};

export const appointments = [
    { id: "APP001", client: "Sophia Davis", service: "Deep Tissue Massage", date: "2024-08-15", time: "10:00 AM", status: "Confirmed" },
    { id: "APP002", client: "Liam Miller", service: "Swedish Massage", date: "2024-08-15", time: "11:30 AM", status: "Confirmed" },
    { id: "APP003", client: "Olivia Wilson", service: "Aromatherapy Massage", date: "2024-08-15", time: "01:00 PM", status: "Pending" },
    { id: "APP004", client: "Noah Johnson", service: "Thai Massage", date: "2024-08-16", time: "09:00 AM", status: "Confirmed" },
    { id: "APP005", client: "Ava Brown", service: "Hot Stone Massage", date: "2024-08-16", time: "02:00 PM", status: "Cancelled" },
];

export const serviceCategories = [
    {
        category: "Terapi Pijat / Massage Therapy",
        emoji: "💆‍♀️",
        description: "Terapi untuk relaksasi otot, sirkulasi darah, dan keseimbangan energi tubuh.",
        services: [
        { title: "Swedish Massage", description: "Pijatan ringan dengan gerakan panjang dan memutar.", price: 150000, duration: "60 min", image: "https://placehold.co/600x400", hint: "swedish massage" },
        { title: "Deep Tissue Massage", description: "Fokus pada otot dalam dan jaringan ikat.", price: 180000, duration: "60 min", image: "https://placehold.co/600x400", hint: "deep tissue" },
        { title: "Thai Massage", description: "Kombinasi peregangan dan tekanan tubuh.", price: 170000, duration: "90 min", image: "https://placehold.co/600x400", hint: "thai massage" },
        { title: "Shiatsu Massage", description: "Pijatan tekanan jari khas Jepang.", price: 160000, duration: "60 min", image: "https://placehold.co/600x400", hint: "shiatsu massage" },
        { title: "Balinese Massage", description: "Perpaduan pijat tradisional Bali dengan aromaterapi.", price: 175000, duration: "75 min", image: "https://placehold.co/600x400", hint: "balinese massage" },
        { title: "Hot Stone Massage", description: "Menggunakan batu panas untuk relaksasi otot.", price: 200000, duration: "90 min", image: "https://placehold.co/600x400", hint: "hot stone" },
        { title: "Refleksiologi", description: "Menekan titik-titik di kaki, tangan, atau telinga untuk kesehatan seluruh tubuh.", price: 100000, duration: "45 min", image: "https://placehold.co/600x400", hint: "reflexology foot" },
        { title: "Aromatherapy Massage", description: "Menggunakan minyak esensial untuk relaksasi dan penyembuhan.", price: 160000, duration: "60 min", image: "https://placehold.co/600x400", hint: "aromatherapy" },
        ]
    },
    {
        category: "Terapi Tubuh / Body Treatment",
        emoji: "🌿",
        description: "Untuk detoksifikasi, perawatan kulit, dan penyegaran tubuh.",
        services: [
        { title: "Body Scrub (Lulur)", description: "Pengelupasan kulit mati dengan scrub alami (kopi, garam, beras, dll).", price: 120000, duration: "45 min", image: "https://placehold.co/600x400", hint: "body scrub" },
        { title: "Body Wrap", description: "Membungkus tubuh dengan lumpur, rumput laut, atau herbal untuk detoksifikasi.", price: 180000, duration: "75 min", image: "https://placehold.co/600x400", hint: "body wrap" },
        { title: "Detox Treatment", description: "Mengeluarkan racun dari tubuh, sering dikombinasikan dengan sauna.", price: 250000, duration: "90 min", image: "https://placehold.co/600x400", hint: "detox" },
        { title: "Parafango / Mud Therapy", description: "Perawatan dengan lumpur mineral dan lilin untuk melancarkan peredaran darah.", price: 220000, duration: "60 min", image: "https://placehold.co/600x400", hint: "mud therapy" },
        ]
    },
    {
        category: "Terapi Air / Hydrotherapy",
        emoji: "💧",
        description: "Menggunakan air untuk penyembuhan dan relaksasi.",
        services: [
        { title: "Jacuzzi / Whirlpool Bath", description: "Air hangat bertekanan untuk melemaskan otot.", price: 80000, duration: "30 min", image: "https://placehold.co/600x400", hint: "jacuzzi" },
        { title: "Sauna", description: "Ruangan panas kering yang merangsang keringat.", price: 60000, duration: "30 min", image: "https://placehold.co/600x400", hint: "sauna" },
        { title: "Steam Room (Ruang Uap)", description: "Ruangan uap hangat untuk membuka pori dan detoksifikasi.", price: 60000, duration: "30 min", image: "https://placehold.co/600x400", hint: "steam room" },
        { title: "Vichy Shower", description: "Semburan air dari atas tempat tidur terapi untuk relaksasi.", price: 100000, duration: "20 min", image: "https://placehold.co/600x400", hint: "vichy shower" },
        { title: "Cold Plunge Pool", description: "Kolam air dingin untuk stimulasi sirkulasi darah.", price: 50000, duration: "15 min", image: "https://placehold.co/600x400", hint: "cold plunge" },
        ]
    },
    {
        category: "Terapi Kecantikan / Beauty Spa",
        emoji: "🌸",
        description: "Fokus pada perawatan estetika.",
        services: [
        { title: "Facial", description: "Pembersihan dan perawatan wajah.", price: 150000, duration: "60 min", image: "https://placehold.co/600x400", hint: "facial treatment" },
        { title: "Anti-aging Facial", description: "Perawatan wajah untuk mengurangi kerutan.", price: 200000, duration: "75 min", image: "https://placehold.co/600x400", hint: "anti-aging facial" },
        { title: "Acne Facial", description: "Perawatan untuk kulit berjerawat.", price: 180000, duration: "60 min", image: "https://placehold.co/600x400", hint: "acne treatment" },
        { title: "Manicure & Pedicure", description: "Perawatan kuku tangan dan kaki.", price: 100000, duration: "90 min", image: "https://placehold.co/600x400", hint: "manicure pedicure" },
        { title: "Waxing / Sugaring", description: "Penghilangan bulu tubuh.", price: 90000, duration: "45 min", image: "https://placehold.co/600x400", hint: "waxing" },
        { title: "Hair Spa", description: "Perawatan rambut dan kulit kepala.", price: 120000, duration: "60 min", image: "https://placehold.co/600x400", hint: "hair spa" },
        ]
    },
    {
        category: "Terapi Energi & Relaksasi",
        emoji: "☯️",
        description: "Meningkatkan keseimbangan energi dan kesehatan mental.",
        services: [
        { title: "Reiki", description: "Terapi energi dengan penyaluran energi melalui tangan.", price: 130000, duration: "60 min", image: "https://placehold.co/600x400", hint: "reiki energy" },
        { title: "Sound Therapy", description: "Menggunakan suara (gong, singing bowl) untuk relaksasi.", price: 110000, duration: "50 min", image: "https://placehold.co/600x400", hint: "sound therapy" },
        { title: "Meditation & Mindfulness", description: "Latihan kesadaran dan ketenangan pikiran.", price: 80000, duration: "45 min", image: "https://placehold.co/600x400", hint: "meditation" },
        { title: "Crystal Healing", description: "Menggunakan kristal untuk keseimbangan energi.", price: 140000, duration: "60 min", image: "https://placehold.co/600x400", hint: "crystal healing" },
        ]
    },
    {
        category: "Terapi Herbal & Tradisional",
        emoji: "🍵",
        description: "Menggunakan bahan alami dan teknik warisan budaya.",
        services: [
        { title: "Jamu Spa", description: "Menggunakan ramuan tradisional Indonesia.", price: 180000, duration: "90 min", image: "https://placehold.co/600x400", hint: "jamu spa" },
        { title: "Ayurvedic Treatment", description: "Terapi India berdasarkan keseimbangan dosha (Vata, Pitta, Kapha).", price: 220000, duration: "90 min", image: "https://placehold.co/600x400", hint: "ayurvedic treatment" },
        { title: "Herbal Compress Massage", description: "Pijatan dengan kantong herbal hangat.", price: 190000, duration: "75 min", image: "https://placehold.co/600x400", hint: "herbal compress" },
        { title: "Totok Wajah / Totok Aura", description: "Tekanan pada titik energi wajah dan tubuh.", price: 120000, duration: "45 min", image: "https://placehold.co/600x400", hint: "face massage" },
        ]
    },
    {
        category: "Terapi Khusus",
        emoji: "👶",
        description: "Disesuaikan dengan kebutuhan individu.",
        services: [
        { title: "Prenatal Massage", description: "Untuk ibu hamil.", price: 160000, duration: "60 min", image: "https://placehold.co/600x400", hint: "prenatal massage" },
        { title: "Postnatal Massage", description: "Untuk pemulihan pasca melahirkan.", price: 160000, duration: "60 min", image: "https://placehold.co/600x400", hint: "postnatal massage" },
        { title: "Couples Massage", description: "Untuk pasangan secara bersamaan.", price: 300000, duration: "60 min", image: "https://placehold.co/600x400", hint: "couples massage" },
        { title: "Kids/Teen Spa", description: "Perawatan ringan khusus anak-anak dan remaja.", price: 90000, duration: "45 min", image: "https://placehold.co/600x400", hint: "teen spa" },
        { title: "Medical Spa (Medi-Spa)", description: "Perawatan kecantikan medis seperti botox, peeling kimia, laser, dll.", price: 500000, duration: "60 min", image: "https://placehold.co/600x400", hint: "medical spa" },
        ]
    },
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
