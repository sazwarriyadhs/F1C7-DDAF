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
            id: "Terapi Fisik & Tubuh (Physical Wellness Therapy)",
            en: "Physical Wellness Therapy"
        },
        emoji: "💪",
        description: {
            id: "Fokus pada kesehatan tubuh secara langsung, seperti kekuatan, postur, fleksibilitas, dan metabolisme.",
            en: "Focuses on direct body health, such as strength, posture, flexibility, and metabolism."
        },
        services: [
            { title: { id: "Swedish Massage", en: "Swedish Massage" }, description: { id: "Pijat terapi untuk relaksasi dan sirkulasi.", en: "Therapeutic massage for relaxation and circulation." }, price_idr: 150000, price_usd: 10, duration: "60 min", image: "https://placehold.co/600x400", hint: "swedish massage" },
            { title: { id: "Thai Massage", en: "Thai Massage" }, description: { id: "Peregangan dan tekanan untuk fleksibilitas.", en: "Stretching and pressure for flexibility." }, price_idr: 170000, price_usd: 11, duration: "90 min", image: "https://placehold.co/600x400", hint: "thai massage" },
            { title: { id: "Deep Tissue Massage", en: "Deep Tissue Massage" }, description: { id: "Fokus pada otot dalam dan jaringan ikat.", en: "Focuses on deep muscles and connective tissue." }, price_idr: 180000, price_usd: 12, duration: "60 min", image: "https://placehold.co/600x400", hint: "deep tissue" },
            { title: { id: "Shiatsu Massage", en: "Shiatsu Massage" }, description: { id: "Pijatan tekanan jari khas Jepang.", en: "Japanese finger pressure massage." }, price_idr: 160000, price_usd: 11, duration: "60 min", image: "https://placehold.co/600x400", hint: "shiatsu massage" },
            { title: { id: "Lymphatic Drainage", en: "Lymphatic Drainage" }, description: { id: "Pijatan lembut untuk mengurangi pembengkakan.", en: "Gentle massage to reduce swelling." }, price_idr: 190000, price_usd: 13, duration: "75 min", image: "https://placehold.co/600x400", hint: "lymphatic drainage" },
            { title: { id: "Physiotherapy (Fisioterapi)", en: "Physiotherapy" }, description: { id: "Pemulihan fungsi otot dan sendi.", en: "Recovery of muscle and joint function." }, price_idr: 250000, price_usd: 17, duration: "60 min", image: "https://placehold.co/600x400", hint: "physiotherapy" },
            { title: { id: "Chiropractic", en: "Chiropractic" }, description: { id: "Penyesuaian tulang belakang untuk kesehatan saraf.", en: "Spinal adjustments for nerve health." }, price_idr: 300000, price_usd: 20, duration: "45 min", image: "https://placehold.co/600x400", hint: "chiropractic" },
            { title: { id: "Osteopathy", en: "Osteopathy" }, description: { id: "Terapi tulang, otot, dan sendi secara menyeluruh.", en: "Holistic therapy for bones, muscles, and joints." }, price_idr: 280000, price_usd: 19, duration: "60 min", image: "https://placehold.co/600x400", hint: "osteopathy" },
            { title: { id: "Pilates / Yoga Therapy", en: "Pilates / Yoga Therapy" }, description: { id: "Latihan untuk postur, fleksibilitas, dan pernapasan.", en: "Exercises for posture, flexibility, and breathing." }, price_idr: 120000, price_usd: 8, duration: "60 min", image: "https://placehold.co/600x400", hint: "yoga therapy" },
            { title: { id: "Acupuncture / Acupressure", en: "Acupuncture / Acupressure" }, description: { id: "Teknik Cina kuno menggunakan jarum atau tekanan.", en: "Ancient Chinese technique using needles or pressure." }, price_idr: 200000, price_usd: 14, duration: "60 min", image: "https://placehold.co/600x400", hint: "acupuncture" },
        ]
    },
    {
        category: {
            id: "Terapi Mental & Emosional (Mental & Emotional Wellness Therapy)",
            en: "Mental & Emotional Wellness Therapy"
        },
        emoji: "🧠",
        description: {
            id: "Menangani stres, kecemasan, trauma, burnout, dan ketidakseimbangan psikologis.",
            en: "Addresses stress, anxiety, trauma, burnout, and psychological imbalances."
        },
        services: [
            { title: { id: "Mindfulness & Meditation", en: "Mindfulness & Meditation" }, description: { id: "Teknik kesadaran diri dan ketenangan.", en: "Self-awareness and calming techniques." }, price_idr: 80000, price_usd: 5, duration: "45 min", image: "https://placehold.co/600x400", hint: "meditation mindfulness" },
            { title: { id: "Cognitive Behavioral Therapy (CBT)", en: "Cognitive Behavioral Therapy (CBT)" }, description: { id: "Mengubah pola pikir negatif.", en: "Changing negative thought patterns." }, price_idr: 400000, price_usd: 27, duration: "60 min", image: "https://placehold.co/600x400", hint: "therapy session" },
            { title: { id: "Hypnotherapy (Hipnoterapi)", en: "Hypnotherapy" }, description: { id: "Membantu pemrograman ulang pikiran bawah sadar.", en: "Helps reprogram the subconscious mind." }, price_idr: 350000, price_usd: 24, duration: "75 min", image: "https://placehold.co/600x400", hint: "hypnotherapy" },
            { title: { id: "Breathwork Therapy", en: "Breathwork Therapy" }, description: { id: "Terapi pernapasan untuk relaksasi dan pelepasan emosi.", en: "Breathing therapy for relaxation and emotional release." }, price_idr: 150000, price_usd: 10, duration: "60 min", image: "https://placehold.co/600x400", hint: "breathwork" },
            { title: { id: "Emotional Freedom Technique (EFT)", en: "Emotional Freedom Technique (EFT)" }, description: { id: "Ketukan ringan pada titik-titik energi.", en: "Light tapping on energy points." }, price_idr: 180000, price_usd: 12, duration: "60 min", image: "https://placehold.co/600x400", hint: "eft tapping" },
            { title: { id: "Art Therapy / Music Therapy", en: "Art Therapy / Music Therapy" }, description: { id: "Ekspresi emosi melalui seni.", en: "Emotional expression through art." }, price_idr: 220000, price_usd: 15, duration: "90 min", image: "https://placehold.co/600x400", hint: "art therapy" },
        ]
    },
    {
        category: {
            id: "Terapi Relaksasi & Pemulihan (Relaxation & Recovery Therapy)",
            en: "Relaxation & Recovery Therapy"
        },
        emoji: "💆‍♀️",
        description: {
            id: "Membantu tubuh dan pikiran untuk pulih dari stres atau kelelahan.",
            en: "Helps the body and mind recover from stress or fatigue."
        },
        services: [
            { title: { id: "Aromatherapy", en: "Aromatherapy" }, description: { id: "Penggunaan minyak esensial untuk relaksasi.", en: "Use of essential oils for relaxation." }, price_idr: 160000, price_usd: 11, duration: "60 min", image: "https://placehold.co/600x400", hint: "aromatherapy" },
            { title: { id: "Sound Healing / Sound Bath", en: "Sound Healing / Sound Bath" }, description: { id: "Terapi suara menggunakan gong, singing bowl.", en: "Sound therapy using gongs, singing bowls." }, price_idr: 110000, price_usd: 7, duration: "50 min", image: "https://placehold.co/600x400", hint: "sound bath" },
            { title: { id: "Floatation Therapy (Sensory Deprivation)", en: "Floatation Therapy (Sensory Deprivation)" }, description: { id: "Terapi mengapung di air garam.", en: "Floating therapy in salt water." }, price_idr: 250000, price_usd: 17, duration: "60 min", image: "https://placehold.co/600x400", hint: "float tank" },
            { title: { id: "Sleep Therapy", en: "Sleep Therapy" }, description: { id: "Teknik meningkatkan kualitas tidur.", en: "Techniques to improve sleep quality." }, price_idr: 180000, price_usd: 12, duration: "60 min", image: "https://placehold.co/600x400", hint: "sleep therapy" },
            { title: { id: "Thermal & Hydrotherapy", en: "Thermal & Hydrotherapy" }, description: { id: "Sauna, uap, mandi air hangat/dingin.", en: "Sauna, steam, hot/cold baths." }, price_idr: 100000, price_usd: 7, duration: "45 min", image: "https://placehold.co/600x400", hint: "hydrotherapy" },
        ]
    },
    {
        category: {
            id: "Terapi Detoks & Metabolik (Detox & Internal Wellness Therapy)",
            en: "Detox & Internal Wellness Therapy"
        },
        emoji: "🧬",
        description: {
            id: "Membersihkan tubuh dari racun dan meningkatkan metabolisme secara alami.",
            en: "Cleanses the body of toxins and naturally boosts metabolism."
        },
        services: [
            { title: { id: "Colon Hydrotherapy", en: "Colon Hydrotherapy" }, description: { id: "Pembersihan usus besar.", en: "Cleansing of the large intestine." }, price_idr: 500000, price_usd: 34, duration: "75 min", image: "https://placehold.co/600x400", hint: "hydrotherapy" },
            { title: { id: "Juice Fasting / Detox Program", en: "Juice Fasting / Detox Program" }, description: { id: "Diet berbasis jus dan makanan sehat.", en: "Diet based on juices and healthy foods." }, price_idr: 300000, price_usd: 20, duration: "Program", image: "https://placehold.co/600x400", hint: "juice detox" },
            { title: { id: "Infrared Sauna", en: "Infrared Sauna" }, description: { id: "Mengeluarkan racun lewat keringat.", en: "Expels toxins through sweat." }, price_idr: 150000, price_usd: 10, duration: "45 min", image: "https://placehold.co/600x400", hint: "infrared sauna" },
            { title: { id: "Liver / Kidney Detox Programs", en: "Liver / Kidney Detox Programs" }, description: { id: "Pembersihan organ-organ vital.", en: "Cleansing of vital organs." }, price_idr: 350000, price_usd: 24, duration: "Program", image: "https://placehold.co/600x400", hint: "detox program" },
            { title: { id: "Ayurvedic Panchakarma", en: "Ayurvedic Panchakarma" }, description: { id: "Protokol pembersihan dalam ayurveda.", en: "Cleansing protocol in Ayurveda." }, price_idr: 700000, price_usd: 47, duration: "Program", image: "https://placehold.co/600x400", hint: "ayurvedic treatment" },
        ]
    },
    {
        category: {
            id: "Terapi Holistik & Tradisional (Holistic & Traditional Wellness Therapy)",
            en: "Holistic & Traditional Wellness Therapy"
        },
        emoji: "🌿",
        description: {
            id: "Pendekatan menyeluruh yang menggabungkan tubuh, pikiran, dan jiwa.",
            en: "A holistic approach that combines body, mind, and spirit."
        },
        services: [
            { title: { id: "Ayurveda Therapy", en: "Ayurveda Therapy" }, description: { id: "Terapi India kuno berdasarkan keseimbangan dosha.", en: "Ancient Indian therapy based on dosha balance." }, price_idr: 220000, price_usd: 15, duration: "90 min", image: "https://placehold.co/600x400", hint: "ayurveda" },
            { title: { id: "Traditional Chinese Medicine (TCM)", en: "Traditional Chinese Medicine (TCM)" }, description: { id: "Akupunktur, herbal, dan qigong.", en: "Acupuncture, herbs, and qigong." }, price_idr: 250000, price_usd: 17, duration: "75 min", image: "https://placehold.co/600x400", hint: "chinese medicine" },
            { title: { id: "Reiki / Energy Healing", en: "Reiki / Energy Healing" }, description: { id: "Penyaluran energi penyembuhan.", en: "Channeling of healing energy." }, price_idr: 130000, price_usd: 9, duration: "60 min", image: "https://placehold.co/600x400", hint: "reiki healing" },
            { title: { id: "Jamu / Herbal Therapy", en: "Jamu / Herbal Therapy" }, description: { id: "Ramuan tradisional Indonesia.", en: "Traditional Indonesian herbal remedies." }, price_idr: 180000, price_usd: 12, duration: "90 min", image: "https://placehold.co/600x400", hint: "herbal therapy" },
            { title: { id: "Shamanic Healing", en: "Shamanic Healing" }, description: { id: "Penyembuhan spiritual dari tradisi asli.", en: "Spiritual healing from indigenous traditions." }, price_idr: 400000, price_usd: 27, duration: "90 min", image: "https://placehold.co/600x400", hint: "shamanic healing" },
            { title: { id: "Crystal Healing", en: "Crystal Healing" }, description: { id: "Terapi menggunakan batu kristal.", en: "Therapy using crystal stones." }, price_idr: 140000, price_usd: 9, duration: "60 min", image: "https://placehold.co/600x400", hint: "crystal healing" },
        ]
    },
    {
        category: {
            id: "Terapi Nutrisi & Gaya Hidup (Nutrition & Lifestyle Wellness Therapy)",
            en: "Nutrition & Lifestyle Wellness Therapy"
        },
        emoji: "🍽️",
        description: {
            id: "Mengatur pola makan, kebiasaan hidup, dan kebugaran.",
            en: "Manages diet, lifestyle habits, and fitness."
        },
        services: [
            { title: { id: "Nutritional Counseling", en: "Nutritional Counseling" }, description: { id: "Konsultasi gizi dan suplemen.", en: "Nutrition and supplement consultation." }, price_idr: 250000, price_usd: 17, duration: "60 min", image: "https://placehold.co/600x400", hint: "nutritionist" },
            { title: { id: "Weight Management Programs", en: "Weight Management Programs" }, description: { id: "Program manajemen berat badan.", en: "Weight management programs." }, price_idr: 500000, price_usd: 34, duration: "Program", image: "https://placehold.co/600x400", hint: "weight management" },
            { title: { id: "Functional Medicine", en: "Functional Medicine" }, description: { id: "Identifikasi akar masalah kesehatan.", en: "Identifies the root cause of health issues." }, price_idr: 600000, price_usd: 40, duration: "90 min", image: "https://placehold.co/600x400", hint: "functional medicine" },
            { title: { id: "Personal Coaching / Health Coaching", en: "Personal Coaching / Health Coaching" }, description: { id: "Panduan hidup sehat jangka panjang.", en: "Long-term healthy living guidance." }, price_idr: 450000, price_usd: 30, duration: "60 min", image: "https://placehold.co/600x400", hint: "health coach" },
            { title: { id: "Fitness Therapy / Exercise Therapy", en: "Fitness Therapy / Exercise Therapy" }, description: { id: "Olahraga disesuaikan kondisi individu.", en: "Exercise tailored to individual conditions." }, price_idr: 200000, price_usd: 14, duration: "60 min", image: "https://placehold.co/600x400", hint: "fitness" },
        ]
    },
    {
        category: {
            id: "Terapi Spiritualitas & Kesadaran Diri (Spiritual & Consciousness Therapy)",
            en: "Spiritual & Consciousness Therapy"
        },
        emoji: "🧘",
        description: {
            id: "Fokus pada pertumbuhan jiwa, koneksi diri, dan makna hidup.",
            en: "Focuses on soul growth, self-connection, and the meaning of life."
        },
        services: [
            { title: { id: "Spiritual Counseling", en: "Spiritual Counseling" }, description: { id: "Konseling berdasarkan nilai spiritual.", en: "Counseling based on spiritual values." }, price_idr: 300000, price_usd: 20, duration: "60 min", image: "https://placehold.co/600x400", hint: "spiritual counseling" },
            { title: { id: "Silent Retreat / Digital Detox", en: "Silent Retreat / Digital Detox" }, description: { id: "Melepaskan diri dari distraksi dunia luar.", en: "Disconnecting from the distractions of the outside world." }, price_idr: 800000, price_usd: 54, duration: "Program", image: "https://placehold.co/600x400", hint: "silent retreat" },
            { title: { id: "Chakra Balancing", en: "Chakra Balancing" }, description: { id: "Menyeimbangkan pusat energi dalam tubuh.", en: "Balancing the energy centers in the body." }, price_idr: 180000, price_usd: 12, duration: "60 min", image: "https://placehold.co/600x400", hint: "chakra balancing" },
            { title: { id: "Soul Journey / Regression Therapy", en: "Soul Journey / Regression Therapy" }, description: { id: "Menyembuhkan melalui eksplorasi jiwa.", en: "Healing through soul exploration." }, price_idr: 450000, price_usd: 30, duration: "90 min", image: "https://placehold.co/600x400", hint: "regression therapy" },
            { title: { id: "Mantra & Prayer Healing", en: "Mantra & Prayer Healing" }, description: { id: "Doa atau pengulangan mantra penyembuhan.", en: "Prayer or repetition of healing mantras." }, price_idr: 150000, price_usd: 10, duration: "60 min", image: "https://placehold.co/600x400", hint: "prayer healing" },
        ]
    },
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
