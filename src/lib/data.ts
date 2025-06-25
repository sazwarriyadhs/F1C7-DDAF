import type { ChartConfig } from "@/components/ui/chart"

export const dailyRevenueData = [
  { date: "Mon", revenue: 2000 },
  { date: "Tue", revenue: 1800 },
  { date: "Wed", revenue: 2200 },
  { date: "Thu", revenue: 2500 },
  { date: "Fri", revenue: 3000 },
  { date: "Sat", revenue: 3500 },
  { date: "Sun", revenue: 3200 },
];

export const getPopularServicesData = (lang: 'id' | 'en') => {
    const names = {
        'swedish-massage': { id: "Pijat Swedia", en: "Swedish Massage" },
        'facial': { id: "Facial", en: "Facial" },
        'balinese-massage': { id: "Pijat Bali", en: "Balinese Massage" },
        'sauna': { id: "Sauna", en: "Sauna" },
    }
    return [
      { id: 'swedish-massage', name: names['swedish-massage'][lang], value: 400, fill: "var(--color-massage)" },
      { id: 'facial', name: names['facial'][lang], value: 300, fill: "var(--color-facial)" },
      { id: 'balinese-massage', name: names['balinese-massage'][lang], value: 300, fill: "var(--color-pilates)" },
      { id: 'sauna', name: names['sauna'][lang], value: 200, fill: "var(--color-sauna)" },
    ];
};

export const chartConfig = {
  revenue: { label: "Revenue" },
  massage: { label: "Swedish Massage", color: "hsl(var(--chart-1))" },
  pilates: { label: "Balinese Massage", color: "hsl(var(--chart-2))" },
  facial: { label: "Facial", color: "hsl(var(--chart-3))" },
  sauna: { label: "Sauna", color: "hsl(var(--chart-4))" },
} satisfies ChartConfig;


export const appointments = [
    { id: "APP001", client: "Sophia Davis", service: "Deep Tissue Massage", date: "2024-08-15", time: "10:00 AM", status: "Confirmed" },
    { id: "APP002", client: "Liam Miller", service: "Swedish Massage", date: "2024-08-15", time: "11:30 AM", status: "Confirmed" },
    { id: "APP003", client: "Olivia Wilson", service: "Aromatherapy Massage", date: "2024-08-15", time: "01:00 PM", status: "Pending" },
    { id: "APP004", client: "Noah Johnson", service: "Thai Massage", date: "2024-08-16", time: "09:00 AM", status: "Confirmed" },
    { id: "APP005", client: "Ava Brown", service: "Hot Stone Massage", date: "2024-08-16", time: "02:00 PM", status: "Cancelled" },
];

export const serviceCategories = [
    {
        category: {
            id: "Terapi Pijat / Massage Therapy",
            en: "Massage Therapy"
        },
        emoji: "💆‍♀️",
        description: {
            id: "Terapi untuk relaksasi otot, sirkulasi darah, dan keseimbangan energi tubuh.",
            en: "Therapy for muscle relaxation, blood circulation, and body energy balance."
        },
        services: [
            { title: { id: "Swedish Massage", en: "Swedish Massage" }, description: { id: "Pijatan ringan dengan gerakan panjang dan memutar.", en: "Light massage with long, circular strokes." }, price_idr: 150000, price_usd: 10, duration: "60 min", image: "https://placehold.co/600x400", hint: "swedish massage" },
            { title: { id: "Deep Tissue Massage", en: "Deep Tissue Massage" }, description: { id: "Fokus pada otot dalam dan jaringan ikat.", en: "Focuses on deep muscles and connective tissue." }, price_idr: 180000, price_usd: 12, duration: "60 min", image: "https://placehold.co/600x400", hint: "deep tissue" },
            { title: { id: "Thai Massage", en: "Thai Massage" }, description: { id: "Kombinasi peregangan dan tekanan tubuh.", en: "Combination of stretching and body pressure." }, price_idr: 170000, price_usd: 11, duration: "90 min", image: "https://placehold.co/600x400", hint: "thai massage" },
            { title: { id: "Shiatsu Massage", en: "Shiatsu Massage" }, description: { id: "Pijatan tekanan jari khas Jepang.", en: "Japanese finger pressure massage." }, price_idr: 160000, price_usd: 11, duration: "60 min", image: "https://placehold.co/600x400", hint: "shiatsu massage" },
            { title: { id: "Balinese Massage", en: "Balinese Massage" }, description: { id: "Perpaduan pijat tradisional Bali dengan aromaterapi.", en: "A blend of traditional Balinese massage and aromatherapy." }, price_idr: 160000, price_usd: 11, duration: "75 min", image: "https://placehold.co/600x400", hint: "balinese massage" },
            { title: { id: "Hot Stone Massage", en: "Hot Stone Massage" }, description: { id: "Menggunakan batu panas untuk relaksasi otot.", en: "Uses hot stones for muscle relaxation." }, price_idr: 200000, price_usd: 14, duration: "90 min", image: "https://placehold.co/600x400", hint: "hot stone" },
            { title: { id: "Refleksiologi", en: "Reflexology" }, description: { id: "Menekan titik-titik di kaki, tangan, atau telinga untuk kesehatan seluruh tubuh.", en: "Pressing points on the feet, hands, or ears for whole-body health." }, price_idr: 120000, price_usd: 8, duration: "45 min", image: "https://placehold.co/600x400", hint: "reflexology" },
            { title: { id: "Aromatherapy Massage", en: "Aromatherapy Massage" }, description: { id: "Menggunakan minyak esensial untuk relaksasi dan penyembuhan.", en: "Uses essential oils for relaxation and healing." }, price_idr: 160000, price_usd: 11, duration: "60 min", image: "https://placehold.co/600x400", hint: "aromatherapy" },
        ]
    },
    {
        category: {
            id: "Terapi Tubuh / Body Treatment",
            en: "Body Treatment"
        },
        emoji: "🌿",
        description: {
            id: "Untuk detoksifikasi, perawatan kulit, dan penyegaran tubuh.",
            en: "For detoxification, skin care, and body refreshment."
        },
        services: [
            { title: { id: "Body Scrub (Lulur)", en: "Body Scrub" }, description: { id: "Pengelupasan kulit mati dengan scrub alami.", en: "Exfoliation of dead skin with natural scrubs." }, price_idr: 130000, price_usd: 9, duration: "45 min", image: "https://placehold.co/600x400", hint: "body scrub" },
            { title: { id: "Body Wrap", en: "Body Wrap" }, description: { id: "Membungkus tubuh dengan lumpur, rumput laut, atau herbal.", en: "Wrapping the body with mud, seaweed, or herbs." }, price_idr: 220000, price_usd: 15, duration: "75 min", image: "https://placehold.co/600x400", hint: "body wrap" },
            { title: { id: "Detox Treatment", en: "Detox Treatment" }, description: { id: "Mengeluarkan racun dari tubuh, sering dikombinasikan dengan sauna.", en: "Removes toxins from the body, often combined with a sauna." }, price_idr: 250000, price_usd: 17, duration: "90 min", image: "https://placehold.co/600x400", hint: "detox" },
            { title: { id: "Parafango / Mud Therapy", en: "Parafango / Mud Therapy" }, description: { id: "Perawatan dengan lumpur mineral dan lilin.", en: "Treatment with mineral mud and wax." }, price_idr: 280000, price_usd: 19, duration: "60 min", image: "https://placehold.co/600x400", hint: "mud therapy" },
        ]
    },
    {
        category: {
            id: "Terapi Air / Hydrotherapy",
            en: "Hydrotherapy"
        },
        emoji: "💧",
        description: {
            id: "Menggunakan air untuk penyembuhan dan relaksasi.",
            en: "Using water for healing and relaxation."
        },
        services: [
            { title: { id: "Jacuzzi / Whirlpool Bath", en: "Jacuzzi / Whirlpool Bath" }, description: { id: "Air hangat bertekanan untuk melemaskan otot.", en: "Pressurized warm water to relax muscles." }, price_idr: 100000, price_usd: 7, duration: "30 min", image: "https://placehold.co/600x400", hint: "jacuzzi" },
            { title: { id: "Sauna", en: "Sauna" }, description: { id: "Ruangan panas kering yang merangsang keringat.", en: "A dry hot room that stimulates sweating." }, price_idr: 80000, price_usd: 5, duration: "30 min", image: "https://placehold.co/600x400", hint: "sauna" },
            { title: { id: "Steam Room (Ruang Uap)", en: "Steam Room" }, description: { id: "Ruangan uap hangat untuk membuka pori dan detoksifikasi.", en: "A warm steam room to open pores and detoxify." }, price_idr: 80000, price_usd: 5, duration: "30 min", image: "https://placehold.co/600x400", hint: "steam room" },
            { title: { id: "Vichy Shower", en: "Vichy Shower" }, description: { id: "Semburan air dari atas tempat tidur terapi untuk relaksasi.", en: "Water jets from above a therapy bed for relaxation." }, price_idr: 150000, price_usd: 10, duration: "20 min", image: "https://placehold.co/600x400", hint: "vichy shower" },
            { title: { id: "Cold Plunge Pool", en: "Cold Plunge Pool" }, description: { id: "Kolam air dingin untuk stimulasi sirkulasi darah.", en: "A cold water pool to stimulate blood circulation." }, price_idr: 70000, price_usd: 5, duration: "15 min", image: "https://placehold.co/600x400", hint: "ice bath" },
        ]
    },
    {
        category: {
            id: "Terapi Kecantikan / Beauty Spa",
            en: "Beauty Spa"
        },
        emoji: "🌸",
        description: {
            id: "Fokus pada perawatan estetika.",
            en: "Focuses on aesthetic treatments."
        },
        services: [
            { title: { id: "Facial", en: "Facial" }, description: { id: "Pembersihan dan perawatan wajah.", en: "Facial cleansing and treatment." }, price_idr: 200000, price_usd: 14, duration: "60 min", image: "https://placehold.co/600x400", hint: "facial treatment" },
            { title: { id: "Anti-aging Facial", en: "Anti-aging Facial" }, description: { id: "Perawatan wajah untuk mengurangi kerutan.", en: "Facial treatment to reduce wrinkles." }, price_idr: 250000, price_usd: 17, duration: "75 min", image: "https://placehold.co/600x400", hint: "anti aging" },
            { title: { id: "Acne Facial", en: "Acne Facial" }, description: { id: "Perawatan untuk kulit berjerawat.", en: "Treatment for acne-prone skin." }, price_idr: 220000, price_usd: 15, duration: "75 min", image: "https://placehold.co/600x400", hint: "acne treatment" },
            { title: { id: "Manicure & Pedicure", en: "Manicure & Pedicure" }, description: { id: "Perawatan kuku tangan dan kaki.", en: "Hand and foot nail care." }, price_idr: 150000, price_usd: 10, duration: "60 min", image: "https://placehold.co/600x400", hint: "manicure pedicure" },
            { title: { id: "Waxing / Sugaring", en: "Waxing / Sugaring" }, description: { id: "Penghilangan bulu tubuh.", en: "Body hair removal." }, price_idr: 180000, price_usd: 12, duration: "45 min", image: "https://placehold.co/600x400", hint: "waxing" },
            { title: { id: "Hair Spa", en: "Hair Spa" }, description: { id: "Perawatan rambut dan kulit kepala.", en: "Hair and scalp treatment." }, price_idr: 170000, price_usd: 11, duration: "60 min", image: "https://placehold.co/600x400", hint: "hair spa" },
        ]
    },
    {
        category: {
            id: "Terapi Energi & Relaksasi",
            en: "Energy & Relaxation Therapy"
        },
        emoji: "☯️",
        description: {
            id: "Meningkatkan keseimbangan energi dan kesehatan mental.",
            en: "Improves energy balance and mental health."
        },
        services: [
            { title: { id: "Reiki", en: "Reiki" }, description: { id: "Terapi energi dengan penyaluran energi melalui tangan.", en: "Energy therapy by channeling energy through hands." }, price_idr: 130000, price_usd: 9, duration: "60 min", image: "https://placehold.co/600x400", hint: "reiki healing" },
            { title: { id: "Sound Therapy", en: "Sound Therapy" }, description: { id: "Menggunakan suara (gong, singing bowl) untuk relaksasi.", en: "Uses sound (gongs, singing bowls) for relaxation." }, price_idr: 110000, price_usd: 7, duration: "50 min", image: "https://placehold.co/600x400", hint: "sound bath" },
            { title: { id: "Meditation & Mindfulness", en: "Meditation & Mindfulness" }, description: { id: "Latihan kesadaran dan ketenangan pikiran.", en: "Awareness and peace of mind exercises." }, price_idr: 80000, price_usd: 5, duration: "45 min", image: "https://placehold.co/600x400", hint: "meditation" },
            { title: { id: "Crystal Healing", en: "Crystal Healing" }, description: { id: "Menggunakan kristal untuk keseimbangan energi.", en: "Uses crystals for energy balance." }, price_idr: 140000, price_usd: 9, duration: "60 min", image: "https://placehold.co/600x400", hint: "crystal healing" },
        ]
    },
    {
        category: {
            id: "Terapi Herbal & Tradisional",
            en: "Herbal & Traditional Therapy"
        },
        emoji: "🍵",
        description: {
            id: "Menggunakan bahan alami dan teknik warisan budaya.",
            en: "Using natural ingredients and cultural heritage techniques."
        },
        services: [
            { title: { id: "Jamu Spa", en: "Jamu Spa" }, description: { id: "Menggunakan ramuan tradisional Indonesia.", en: "Uses traditional Indonesian herbal remedies." }, price_idr: 180000, price_usd: 12, duration: "90 min", image: "https://placehold.co/600x400", hint: "herbal spa" },
            { title: { id: "Ayurvedic Treatment", en: "Ayurvedic Treatment" }, description: { id: "Terapi India berdasarkan keseimbangan dosha.", en: "Indian therapy based on dosha balance." }, price_idr: 220000, price_usd: 15, duration: "90 min", image: "https://placehold.co/600x400", hint: "ayurvedic treatment" },
            { title: { id: "Herbal Compress Massage", en: "Herbal Compress Massage" }, description: { id: "Pijatan dengan kantong herbal hangat.", en: "Massage with warm herbal compresses." }, price_idr: 190000, price_usd: 13, duration: "75 min", image: "https://placehold.co/600x400", hint: "herbal compress" },
            { title: { id: "Totok Wajah / Totok Aura", en: "Face / Aura Acupressure" }, description: { id: "Tekanan pada titik energi wajah dan tubuh.", en: "Pressure on facial and body energy points." }, price_idr: 150000, price_usd: 10, duration: "60 min", image: "https://placehold.co/600x400", hint: "acupressure" },
        ]
    },
    {
        category: {
            id: "Terapi Khusus",
            en: "Specialized Therapy"
        },
        emoji: "👶",
        description: {
            id: "Disesuaikan dengan kebutuhan individu.",
            en: "Tailored to individual needs."
        },
        services: [
            { title: { id: "Prenatal Massage", en: "Prenatal Massage" }, description: { id: "Untuk ibu hamil.", en: "For expectant mothers." }, price_idr: 200000, price_usd: 14, duration: "60 min", image: "https://placehold.co/600x400", hint: "prenatal massage" },
            { title: { id: "Postnatal Massage", en: "Postnatal Massage" }, description: { id: "Untuk pemulihan pasca melahirkan.", en: "For postpartum recovery." }, price_idr: 200000, price_usd: 14, duration: "60 min", image: "https://placehold.co/600x400", hint: "postnatal care" },
            { title: { id: "Couples Massage", en: "Couples Massage" }, description: { id: "Untuk pasangan secara bersamaan.", en: "For couples simultaneously." }, price_idr: 350000, price_usd: 24, duration: "60 min", image: "https://placehold.co/600x400", hint: "couples massage" },
            { title: { id: "Kids/Teen Spa", en: "Kids/Teen Spa" }, description: { id: "Perawatan ringan khusus anak-anak dan remaja.", en: "Light treatments specifically for children and teens." }, price_idr: 120000, price_usd: 8, duration: "45 min", image: "https://placehold.co/600x400", hint: "kids spa" },
            { title: { id: "Medical Spa (Medi-Spa)", en: "Medical Spa (Medi-Spa)" }, description: { id: "Perawatan kecantikan medis seperti botox, peeling kimia, dll.", en: "Medical beauty treatments like botox, chemical peels, etc." }, price_idr: 1000000, price_usd: 68, duration: "Varies", image: "https://placehold.co/600x400", hint: "medical spa" },
        ]
    }
];

export const pilatesCategories = [
    {
        category: {
            id: "Berdasarkan Metode / Pendekatan",
            en: "By Method / Approach"
        },
        emoji: "✍️",
        description: {
            id: "Jenis Pilates berdasarkan gaya atau teknik yang dikembangkan dari metode Joseph Pilates.",
            en: "Types of Pilates based on the style or technique developed from Joseph Pilates' method."
        },
        types: [
            { title: { id: "Classical Pilates", en: "Classical Pilates" }, description: { id: "Mengikuti metode asli Joseph Pilates tanpa modifikasi. Urutan gerakannya tetap dan terstruktur. Menggabungkan Mat Pilates & alat (Reformer, Cadillac, Chair).", en: "Follows the original Joseph Pilates method without modification. The sequence of movements is fixed and structured. Combines Mat Pilates & equipment (Reformer, Cadillac, Chair)." } },
            { title: { id: "Contemporary Pilates", en: "Contemporary Pilates" }, description: { id: "Modifikasi dari metode klasik, dipadukan dengan ilmu anatomi modern dan fisioterapi. Lebih fleksibel, bisa disesuaikan dengan kondisi tubuh dan kebutuhan individu.", en: "A modification of the classic method, combined with modern anatomy and physiotherapy. More flexible, can be adapted to the individual's body condition and needs." } },
            { title: { id: "Clinical Pilates", en: "Clinical Pilates" }, description: { id: "Biasanya digunakan oleh fisioterapis untuk rehabilitasi cedera. Fokus pada koreksi postur, stabilitas tulang belakang, dan penyembuhan trauma tubuh.", en: "Usually used by physiotherapists for injury rehabilitation. Focuses on posture correction, spinal stability, and healing of body trauma." } },
        ]
    },
    {
        category: {
            id: "Berdasarkan Media / Peralatan",
            en: "By Media / Equipment"
        },
        emoji: "🏋️‍♀️",
        description: {
            id: "Jenis Pilates berdasarkan alat yang digunakan saat latihan.",
            en: "Types of Pilates based on the equipment used during the exercise."
        },
        types: [
            { title: { id: "Mat Pilates", en: "Mat Pilates" }, description: { id: "Dilakukan di atas matras tanpa alat berat. Mengandalkan berat badan sendiri untuk kekuatan inti dan stabilitas. Cocok untuk pemula atau latihan di rumah.", en: "Performed on a mat without heavy equipment. Relies on one's own body weight for core strength and stability. Suitable for beginners or at-home workouts." } },
            { title: { id: "Reformer Pilates", en: "Reformer Pilates" }, description: { id: "Menggunakan mesin Reformer: kerangka dengan papan geser, pegas, dan tali. Lebih dinamis dan bisa memberikan resistensi/dukungan tambahan. Cocok untuk semua level, termasuk rehabilitasi.", en: "Uses the Reformer machine: a frame with a sliding board, springs, and straps. More dynamic and can provide additional resistance/support. Suitable for all levels, including rehabilitation." } },
            { title: { id: "Cadillac Pilates (Trapeze Table)", en: "Cadillac Pilates (Trapeze Table)" }, description: { id: "Menggunakan alat besar dengan tiang, tali, dan pegas. Cocok untuk latihan terapeutik dan latihan lanjutan.", en: "Uses a large apparatus with poles, straps, and springs. Suitable for therapeutic and advanced exercises." } },
            { title: { id: "Chair Pilates (Wunda Chair)", en: "Chair Pilates (Wunda Chair)" }, description: { id: "Alat berbentuk kursi kecil dengan pedal resistensi. Menantang keseimbangan, kekuatan inti, dan koordinasi tubuh.", en: "A small chair-like apparatus with resistance pedals. Challenges balance, core strength, and body coordination." } },
            { title: { id: "Barrel Pilates (Spine Corrector / Ladder Barrel)", en: "Barrel Pilates (Spine Corrector / Ladder Barrel)" }, description: { id: "Untuk latihan fleksibilitas, postur, dan penguatan punggung bagian atas dan bawah.", en: "For flexibility, posture, and strengthening of the upper and lower back." } },
        ]
    },
    {
        category: {
            id: "Berdasarkan Tujuan / Fokus Latihan",
            en: "By Goal / Training Focus"
        },
        emoji: "🎯",
        description: {
            id: "Jenis Pilates disesuaikan dengan kebutuhan peserta.",
            en: "Types of Pilates tailored to the participant's needs."
        },
        types: [
             { title: { id: "Rehab Pilates", en: "Rehab Pilates" }, description: { id: "Fokus pada pemulihan cedera, gangguan tulang belakang, atau nyeri otot. Biasanya dipandu oleh fisioterapis atau pelatih berlisensi medis.", en: "Focuses on injury recovery, spinal disorders, or muscle pain. Usually guided by a physiotherapist or medically licensed trainer." } },
             { title: { id: "Prenatal Pilates", en: "Prenatal Pilates" }, description: { id: "Dirancang untuk ibu hamil, membantu memperkuat otot panggul dan menjaga postur. Meningkatkan pernapasan, mengurangi nyeri punggung dan bengkak.", en: "Designed for pregnant women, helps strengthen pelvic muscles and maintain posture. Improves breathing, reduces back pain and swelling." } },
             { title: { id: "Postnatal Pilates", en: "Postnatal Pilates" }, description: { id: "Untuk pemulihan pasca melahirkan. Fokus pada penguatan otot perut, panggul, dan punggung bawah.", en: "For postpartum recovery. Focuses on strengthening the abdominal, pelvic, and lower back muscles." } },
             { title: { id: "Athletic / Performance Pilates", en: "Athletic / Performance Pilates" }, description: { id: "Dirancang untuk atlet atau penari. Menggabungkan gerakan Pilates untuk meningkatkan performa, fleksibilitas, dan mencegah cedera.", en: "Designed for athletes or dancers. Combines Pilates movements to enhance performance, flexibility, and prevent injuries." } },
             { title: { id: "Pilates for Seniors", en: "Pilates for Seniors" }, description: { id: "Fokus pada keseimbangan, fleksibilitas ringan, dan kekuatan untuk usia lanjut.", en: "Focuses on balance, light flexibility, and strength for seniors." } },
        ]
    },
    {
        category: {
            id: "Varian Fusion (Gabungan dengan Metode Lain)",
            en: "Fusion Variants (Combined with Other Methods)"
        },
        emoji: "💡",
        description: {
            id: "Beberapa studio menggabungkan Pilates dengan latihan modern:",
            en: "Some studios combine Pilates with modern exercises:"
        },
        types: [
            { title: { id: "Pilates Yoga Fusion (PiYo)", en: "Pilates Yoga Fusion (PiYo)" }, description: { id: "Gabungan gerakan Pilates dan Yoga.", en: "A combination of Pilates and Yoga movements." } },
            { title: { id: "HIIT Pilates", en: "HIIT Pilates" }, description: { id: "Pilates dengan intensitas tinggi dan interval.", en: "High-intensity interval Pilates." } },
            { title: { id: "Barre Pilates", en: "Barre Pilates" }, description: { id: "Kombinasi Pilates, balet, dan cardio ringan.", en: "A combination of Pilates, ballet, and light cardio." } },
            { title: { id: "TRX Pilates", en: "TRX Pilates" }, description: { id: "Menggabungkan alat TRX (suspension training) untuk variasi latihan.", en: "Combines TRX (suspension training) equipment for varied exercises." } },
        ]
    }
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

const financialData = {
    summary: {
        revenue_idr: 610000000,
        expenses_idr: 250000000,
        profit_idr: 360000000,
        revenue_usd: 42055,
        expenses_usd: 17240,
        profit_usd: 24815,
    },
    monthlyData: [
        { month: { id: "Mar", en: "Mar" }, revenue_idr: 55000000, expenses_idr: 20000000, revenue_usd: 3790, expenses_usd: 1380 },
        { month: { id: "Apr", en: "Apr" }, revenue_idr: 58000000, expenses_idr: 22000000, revenue_usd: 3995, expenses_usd: 1515 },
        { month: { id: "Mei", en: "May" }, revenue_idr: 62000000, expenses_idr: 24000000, revenue_usd: 4270, expenses_usd: 1655 },
        { month: { id: "Jun", en: "Jun" }, revenue_idr: 60000000, expenses_idr: 23000000, revenue_usd: 4135, expenses_usd: 1585 },
        { month: { id: "Jul", en: "Jul" }, revenue_idr: 65000000, expenses_idr: 26000000, revenue_usd: 4480, expenses_usd: 1790 },
        { month: { id: "Agu", en: "Aug" }, revenue_idr: 68000000, expenses_idr: 28000000, revenue_usd: 4685, expenses_usd: 1930 },
    ],
    recentTransactions: [
        { id: "TXN001", date: "2024-08-14", description: { id: "Pembayaran Klien - S. Davis", en: "Client Payment - S. Davis" }, category: { id: "Layanan", en: "Service" }, amount_idr: 180000, amount_usd: 12, type: "Income" },
        { id: "TXN002", date: "2024-08-14", description: { id: "Pembelian Minyak Esensial", en: "Essential Oil Purchase" }, category: { id: "Persediaan", en: "Supplies" }, amount_idr: 750000, amount_usd: 50, type: "Expense" },
        { id: "TXN003", date: "2024-08-13", description: { id: "Pembayaran Klien - L. Miller", en: "Client Payment - L. Miller" }, category: { id: "Layanan", en: "Service" }, amount_idr: 150000, amount_usd: 10, type: "Income" },
        { id: "TXN004", date: "2024-08-12", description: { id: "Gaji Staf", en: "Staff Salaries" }, category: { id: "Gaji", en: "Payroll" }, amount_idr: 15000000, amount_usd: 1000, type: "Expense" },
        { id: "TXN005", date: "2024-08-12", description: { id: "Penjualan Produk - Yoga Mat", en: "Product Sale - Yoga Mat" }, category: { id: "Eceran", en: "Retail" }, amount_idr: 300000, amount_usd: 20, type: "Income" },
    ]
}

export const getFinancialData = (lang: 'id' | 'en') => {
    const isId = lang === 'id';
    return {
        summary: {
            revenue: isId ? financialData.summary.revenue_idr : financialData.summary.revenue_usd,
            expenses: isId ? financialData.summary.expenses_idr : financialData.summary.expenses_usd,
            profit: isId ? financialData.summary.profit_idr : financialData.summary.profit_usd,
        },
        monthlyData: financialData.monthlyData.map(d => ({
            month: d.month[lang],
            revenue: isId ? d.revenue_idr : d.revenue_usd,
            expenses: isId ? d.expenses_idr : d.expenses_usd,
            profit: (isId ? d.revenue_idr : d.revenue_usd) - (isId ? d.expenses_idr : d.expenses_usd),
        })),
        recentTransactions: financialData.recentTransactions.map(t => ({
            ...t,
            description: t.description[lang],
            category: t.category[lang],
            amount: isId ? t.amount_idr : t.amount_usd,
        }))
    }
}

export const rooms = [
    {
        id: 'room-001',
        name: {
            id: 'Suite Tunggal',
            en: 'Single Suite Room'
        },
        description: {
            id: 'Kamar suite mewah untuk satu orang, dengan pemandangan taman.',
            en: 'A luxurious suite room for one person, with a garden view.'
        },
        status: 'Available', // Available, Occupied, Cleaning
        image: 'https://placehold.co/600x400',
        hint: 'hotel room'
    },
    {
        id: 'room-002',
        name: {
            id: 'Suite Pasangan',
            en: 'Couple Suite Room'
        },
        description: {
            id: 'Kamar suite romantis untuk pasangan, dilengkapi dengan jacuzzi pribadi.',
            en: 'A romantic suite room for couples, complete with a private jacuzzi.'
        },
        status: 'Occupied',
        image: 'https://placehold.co/600x400',
        hint: 'luxury suite'
    },
    {
        id: 'room-003',
        name: {
            id: 'Kamar Standar',
            en: 'Standard Room'
        },
        description: {
            id: 'Kamar standar yang nyaman dengan semua fasilitas dasar.',
            en: 'A comfortable standard room with all the basic amenities.'
        },
        status: 'Cleaning',
        image: 'https://placehold.co/600x400',
        hint: 'standard room'
    },
    {
        id: 'room-004',
        name: {
            id: 'Kamar Standar',
            en: 'Standard Room'
        },
        description: {
            id: 'Kamar standar yang nyaman dengan semua fasilitas dasar.',
            en: 'A comfortable standard room with all the basic amenities.'
        },
        status: 'Available',
        image: 'https://placehold.co/600x400',
        hint: 'modern room'
    }
];

export const clients: (any)[] = [
    { id: "CUST001", name: "Sophia Davis", email: "sophia.davis@example.com", phone: "555-123-4567", totalAppointments: 5, lastVisit: "2024-08-15", rfid: "A1B2C3D4" },
    { id: "CUST002", name: "Liam Miller", email: "liam.miller@example.com", phone: "555-987-6543", totalAppointments: 8, lastVisit: "2024-08-15", rfid: "B2C3D4E5" },
    { id: "CUST003", name: "Olivia Wilson", email: "olivia.wilson@example.com", phone: "555-456-7890", totalAppointments: 2, lastVisit: "2024-08-10", rfid: "C3D4E5F6" },
    { id: "CUST004", name: "Noah Johnson", email: "noah.johnson@example.com", phone: "555-321-0987", totalAppointments: 12, lastVisit: "2024-08-16", rfid: null },
    { id: "CUST005", name: "Ava Brown", email: "ava.brown@example.com", phone: "555-789-1234", totalAppointments: 3, lastVisit: "2024-07-25", rfid: "D4E5F6G7" },
    { id: "CUST006", name: "Ethan Garcia", email: "ethan.garcia@example.com", phone: "555-234-5678", totalAppointments: 7, lastVisit: "2024-08-01", rfid: null },
    { id: "CUST007", name: "Mia Martinez", email: "mia.martinez@example.com", phone: "555-876-5432", totalAppointments: 1, lastVisit: "2024-08-12", rfid: "E5F6G7H8" },
];

export const marketplaces = [
    {
        id: 'traveloka',
        name: 'Traveloka Xperience',
        logo: 'https://placehold.co/200x80.png',
        type: 'Travel & Lifestyle',
        url: 'https://www.traveloka.com/en-id/activities',
        status: 'Connected',
        description: {
            id: 'Jangkau jutaan wisatawan dan pengguna lokal yang mencari aktivitas dan pengalaman spa.',
            en: 'Reach millions of travelers and local users looking for activities and spa experiences.'
        }
    },
    {
        id: 'klook',
        name: 'Klook',
        logo: 'https://placehold.co/200x80.png',
        type: 'Travel Activities',
        url: 'https://www.klook.com',
        status: 'Not Connected',
        description: {
            id: 'Platform global untuk menemukan dan memesan aktivitas, termasuk layanan wellness dan spa.',
            en: 'A global platform to discover and book activities, including wellness and spa services.'
        }
    },
    {
        id: 'classpass',
        name: 'ClassPass',
        logo: 'https://placehold.co/200x80.png',
        type: 'Fitness & Wellness',
        url: 'https://classpass.com',
        status: 'Not Connected',
        description: {
            id: 'Terhubung dengan pengguna yang aktif mencari kelas kebugaran, sesi spa, dan janji temu kecantikan.',
            en: 'Connect with users actively seeking fitness classes, spa sessions, and beauty appointments.'
        }
    },
    {
        id: 'fave',
        name: 'Fave',
        logo: 'https://placehold.co/200x80.png',
        type: 'Deals & Cashback',
        url: 'https://myfave.com',
        status: 'Connected',
        description: {
            id: 'Tawarkan promosi dan penawaran khusus untuk menarik pelanggan baru di pasar Asia Tenggara.',
            en: 'Offer promotions and special deals to attract new customers in the Southeast Asian market.'
        }
    },
    {
        id: 'tripadvisor',
        name: 'Tripadvisor',
        logo: 'https://placehold.co/200x80.png',
        type: 'Travel Reviews & Booking',
        url: 'https://www.tripadvisor.com',
        status: 'Not Connected',
        description: {
            id: 'Tingkatkan visibilitas Anda di platform ulasan perjalanan terbesar di dunia dan terima pemesanan.',
            en: 'Increase your visibility on the world\'s largest travel review platform and accept bookings.'
        }
    },
     {
        id: 'mindbody',
        name: 'Mindbody',
        logo: 'https://placehold.co/200x80.png',
        type: 'Wellness Services',
        url: 'https://www.mindbodyonline.com',
        status: 'Not Connected',
        description: {
            id: 'Platform terkemuka yang menghubungkan dunia dengan kesehatan, kecantikan, dan kebugaran.',
            en: 'The leading platform that connects the world to health, beauty, and fitness.'
        }
    }
];
