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
        category: "Terapi Fisik & Tubuh (Physical Wellness Therapy)",
        emoji: "💪",
        description: "Fokus pada kesehatan tubuh secara langsung, seperti kekuatan, postur, fleksibilitas, dan metabolisme.",
        services: [
            { title: "Swedish Massage", description: "Pijat terapi untuk relaksasi dan sirkulasi.", price: 150000, duration: "60 min", image: "https://placehold.co/600x400", hint: "swedish massage" },
            { title: "Thai Massage", description: "Peregangan dan tekanan untuk fleksibilitas.", price: 170000, duration: "90 min", image: "https://placehold.co/600x400", hint: "thai massage" },
            { title: "Deep Tissue Massage", description: "Fokus pada otot dalam dan jaringan ikat.", price: 180000, duration: "60 min", image: "https://placehold.co/600x400", hint: "deep tissue" },
            { title: "Shiatsu Massage", description: "Pijatan tekanan jari khas Jepang.", price: 160000, duration: "60 min", image: "https://placehold.co/600x400", hint: "shiatsu massage" },
            { title: "Lymphatic Drainage", description: "Pijatan lembut untuk mengurangi pembengkakan.", price: 190000, duration: "75 min", image: "https://placehold.co/600x400", hint: "lymphatic drainage" },
            { title: "Physiotherapy (Fisioterapi)", description: "Pemulihan fungsi otot dan sendi.", price: 250000, duration: "60 min", image: "https://placehold.co/600x400", hint: "physiotherapy" },
            { title: "Chiropractic", description: "Penyesuaian tulang belakang untuk kesehatan saraf.", price: 300000, duration: "45 min", image: "https://placehold.co/600x400", hint: "chiropractic" },
            { title: "Osteopathy", description: "Terapi tulang, otot, dan sendi secara menyeluruh.", price: 280000, duration: "60 min", image: "https://placehold.co/600x400", hint: "osteopathy" },
            { title: "Pilates / Yoga Therapy", description: "Latihan untuk postur, fleksibilitas, dan pernapasan.", price: 120000, duration: "60 min", image: "https://placehold.co/600x400", hint: "yoga therapy" },
            { title: "Acupuncture / Acupressure", description: "Teknik Cina kuno menggunakan jarum atau tekanan.", price: 200000, duration: "60 min", image: "https://placehold.co/600x400", hint: "acupuncture" },
        ]
    },
    {
        category: "Terapi Mental & Emosional (Mental & Emotional Wellness Therapy)",
        emoji: "🧠",
        description: "Menangani stres, kecemasan, trauma, burnout, dan ketidakseimbangan psikologis.",
        services: [
            { title: "Mindfulness & Meditation", description: "Teknik kesadaran diri dan ketenangan.", price: 80000, duration: "45 min", image: "https://placehold.co/600x400", hint: "meditation mindfulness" },
            { title: "Cognitive Behavioral Therapy (CBT)", description: "Mengubah pola pikir negatif.", price: 400000, duration: "60 min", image: "https://placehold.co/600x400", hint: "therapy session" },
            { title: "Hypnotherapy (Hipnoterapi)", description: "Membantu pemrograman ulang pikiran bawah sadar.", price: 350000, duration: "75 min", image: "https://placehold.co/600x400", hint: "hypnotherapy" },
            { title: "Breathwork Therapy", description: "Terapi pernapasan untuk relaksasi dan pelepasan emosi.", price: 150000, duration: "60 min", image: "https://placehold.co/600x400", hint: "breathwork" },
            { title: "Emotional Freedom Technique (EFT)", description: "Ketukan ringan pada titik-titik energi.", price: 180000, duration: "60 min", image: "https://placehold.co/600x400", hint: "eft tapping" },
            { title: "Art Therapy / Music Therapy", description: "Ekspresi emosi melalui seni.", price: 220000, duration: "90 min", image: "https://placehold.co/600x400", hint: "art therapy" },
        ]
    },
    {
        category: "Terapi Relaksasi & Pemulihan (Relaxation & Recovery Therapy)",
        emoji: "💆‍♀️",
        description: "Membantu tubuh dan pikiran untuk pulih dari stres atau kelelahan.",
        services: [
            { title: "Aromatherapy", description: "Penggunaan minyak esensial untuk relaksasi.", price: 160000, duration: "60 min", image: "https://placehold.co/600x400", hint: "aromatherapy" },
            { title: "Sound Healing / Sound Bath", description: "Terapi suara menggunakan gong, singing bowl.", price: 110000, duration: "50 min", image: "https://placehold.co/600x400", hint: "sound bath" },
            { title: "Floatation Therapy (Sensory Deprivation)", description: "Terapi mengapung di air garam.", price: 250000, duration: "60 min", image: "https://placehold.co/600x400", hint: "float tank" },
            { title: "Sleep Therapy", description: "Teknik meningkatkan kualitas tidur.", price: 180000, duration: "60 min", image: "https://placehold.co/600x400", hint: "sleep therapy" },
            { title: "Thermal & Hydrotherapy", description: "Sauna, uap, mandi air hangat/dingin.", price: 100000, duration: "45 min", image: "https://placehold.co/600x400", hint: "hydrotherapy" },
        ]
    },
    {
        category: "Terapi Detoks & Metabolik (Detox & Internal Wellness Therapy)",
        emoji: "🧬",
        description: "Membersihkan tubuh dari racun dan meningkatkan metabolisme secara alami.",
        services: [
            { title: "Colon Hydrotherapy", description: "Pembersihan usus besar.", price: 500000, duration: "75 min", image: "https://placehold.co/600x400", hint: "hydrotherapy" },
            { title: "Juice Fasting / Detox Program", description: "Diet berbasis jus dan makanan sehat.", price: 300000, duration: "Program", image: "https://placehold.co/600x400", hint: "juice detox" },
            { title: "Infrared Sauna", description: "Mengeluarkan racun lewat keringat.", price: 150000, duration: "45 min", image: "https://placehold.co/600x400", hint: "infrared sauna" },
            { title: "Liver / Kidney Detox Programs", description: "Pembersihan organ-organ vital.", price: 350000, duration: "Program", image: "https://placehold.co/600x400", hint: "detox program" },
            { title: "Ayurvedic Panchakarma", description: "Protokol pembersihan dalam ayurveda.", price: 700000, duration: "Program", image: "https://placehold.co/600x400", hint: "ayurvedic treatment" },
        ]
    },
    {
        category: "Terapi Holistik & Tradisional (Holistic & Traditional Wellness Therapy)",
        emoji: "🌿",
        description: "Pendekatan menyeluruh yang menggabungkan tubuh, pikiran, dan jiwa.",
        services: [
            { title: "Ayurveda Therapy", description: "Terapi India kuno berdasarkan keseimbangan dosha.", price: 220000, duration: "90 min", image: "https://placehold.co/600x400", hint: "ayurveda" },
            { title: "Traditional Chinese Medicine (TCM)", description: "Akupunktur, herbal, dan qigong.", price: 250000, duration: "75 min", image: "https://placehold.co/600x400", hint: "chinese medicine" },
            { title: "Reiki / Energy Healing", description: "Penyaluran energi penyembuhan.", price: 130000, duration: "60 min", image: "https://placehold.co/600x400", hint: "reiki healing" },
            { title: "Jamu / Herbal Therapy", description: "Ramuan tradisional Indonesia.", price: 180000, duration: "90 min", image: "https://placehold.co/600x400", hint: "herbal therapy" },
            { title: "Shamanic Healing", description: "Penyembuhan spiritual dari tradisi asli.", price: 400000, duration: "90 min", image: "https://placehold.co/600x400", hint: "shamanic healing" },
            { title: "Crystal Healing", description: "Terapi menggunakan batu kristal.", price: 140000, duration: "60 min", image: "https://placehold.co/600x400", hint: "crystal healing" },
        ]
    },
    {
        category: "Terapi Nutrisi & Gaya Hidup (Nutrition & Lifestyle Wellness Therapy)",
        emoji: "🍽️",
        description: "Mengatur pola makan, kebiasaan hidup, dan kebugaran.",
        services: [
            { title: "Nutritional Counseling", description: "Konsultasi gizi dan suplemen.", price: 250000, duration: "60 min", image: "https://placehold.co/600x400", hint: "nutritionist" },
            { title: "Weight Management Programs", description: "Program manajemen berat badan.", price: 500000, duration: "Program", image: "https://placehold.co/600x400", hint: "weight management" },
            { title: "Functional Medicine", description: "Identifikasi akar masalah kesehatan.", price: 600000, duration: "90 min", image: "https://placehold.co/600x400", hint: "functional medicine" },
            { title: "Personal Coaching / Health Coaching", description: "Panduan hidup sehat jangka panjang.", price: 450000, duration: "60 min", image: "https://placehold.co/600x400", hint: "health coach" },
            { title: "Fitness Therapy / Exercise Therapy", description: "Olahraga disesuaikan kondisi individu.", price: 200000, duration: "60 min", image: "https://placehold.co/600x400", hint: "fitness" },
        ]
    },
    {
        category: "Terapi Spiritualitas & Kesadaran Diri (Spiritual & Consciousness Therapy)",
        emoji: "🧘",
        description: "Fokus pada pertumbuhan jiwa, koneksi diri, dan makna hidup.",
        services: [
            { title: "Spiritual Counseling", description: "Konseling berdasarkan nilai spiritual.", price: 300000, duration: "60 min", image: "https://placehold.co/600x400", hint: "spiritual counseling" },
            { title: "Silent Retreat / Digital Detox", description: "Melepaskan diri dari distraksi dunia luar.", price: 800000, duration: "Program", image: "https://placehold.co/600x400", hint: "silent retreat" },
            { title: "Chakra Balancing", description: "Menyeimbangkan pusat energi dalam tubuh.", price: 180000, duration: "60 min", image: "https://placehold.co/600x400", hint: "chakra balancing" },
            { title: "Soul Journey / Regression Therapy", description: "Menyembuhkan melalui eksplorasi jiwa.", price: 450000, duration: "90 min", image: "https://placehold.co/600x400", hint: "regression therapy" },
            { title: "Mantra & Prayer Healing", description: "Doa atau pengulangan mantra penyembuhan.", price: 150000, duration: "60 min", image: "https://placehold.co/600x400", hint: "prayer healing" },
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
