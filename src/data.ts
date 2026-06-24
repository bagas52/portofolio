import { Skill, FigmaProject } from "./types";

export const PERSONAL_INFO = {
  name: "Bagas Eka Putra",
  role: "UX/UI Designer",
  subTitle: "Crafting aesthetics & functional user interfaces.",
  bio: "Saya Bagas Eka Putra, Mahasiswa Semester 6 Prodi S1 Sistem Informasi, Universitas Merdeka Malang. yang berfokus pada bidang UI/UX Design. Saya memiliki kemampuan dalam merancang antarmuka pengguna yang estetis dan fungsional menggunakan Figma. Berpengalaman mengerjakan projek desain secara tim, pernah meraih nominasi terbanyak dalam pemilihan projek desain UI/UX pada FTI Fest tingkat fakultas.",
  location: "Malang,Jawa Timur",
  email: "ekab626@gmail.com",
  figmaUrl: "https://www.figma.com/design/1kMCdyxwT82skBioLoJuc7/Allinol?node-id=121-62&t=HOFQ5K8wA51C5aIc-1",
  socials: [
    {
      name: "Figma Profile",
      url: "https://www.figma.com/@bagasekaputra",
      type: "figma"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bagasekaaa_?igsh=MWYwZGkxNGRjcDF3dA%3D%3D&utm_source=qr",
      type: "instagram"
    }
  ]
};

export const INITIAL_SKILLS: Skill[] = [
  {
    name: "UI Design & High-Fidelity",
    category: "Design",
    level: 95,
    description: "Membuat visual interface yang modern, bersih, intuitif, dan Pixel-Perfect."
  },
  {
    name: "UX Research & Persona",
    category: "Research",
    level: 88,
    description: "Melakukan interview pengguna, analisis kompetitif, dan pemetaan User Journey."
  },
  {
    name: "Interactive Prototyping",
    category: "Tools",
    level: 92,
    description: "Membangun prototipe dinamis dengan smart-animate, multi-state components, dan variables."
  },
  {
    name: "Design Systems",
    category: "Design",
    level: 90,
    description: "Mengembangkan pustaka komponen terstandarisasi berbasis Atomic Design di Figma."
  },
  {
    name: "Wireframing & User Flows",
    category: "Process",
    level: 94,
    description: "Merancang kerangka kognitif (blueprint) aplikasi sebelum memasuki tahap visual."
  },
  {
    name: "Figma Auto-Layout & Variables",
    category: "Tools",
    level: 96,
    description: "Memaksimalkan fitur auto-layout v5, conditional prototypes, serta design tokens."
  },
  {
    name: "Usability Testing",
    category: "Research",
    level: 85,
    description: "Menguji efektivitas desain guna mendeteksi hambatan kognitif pengguna."
  }
];

export const INITIAL_PROJECTS: FigmaProject[] = [
  {
    id: "project-1",
    title: "ALLINOL Platform Jual Minyak Jelantah berbasis Web3 & Ai",
    category: "Web3 & AI UX/UI Web Case Study",
    description: "ALLINOL adalah platform digital revolusioner yang memadukan teknologi Web3 bertenaga blockchain untuk menjamin transparansi rantai pasok minyak jelantah daur ulang (proof of recycling), serta sistem pemanfaatan kecerdasan buatan (AI) guna memprediksi harga optimal serta mengoptimalkan rute logistik penjemputan.",
    figmaUrl: "https://www.figma.com/design/1kMCdyxwT82skBioLoJuc7/Allinol?node-id=121-62&t=HOFQ5K8wA51C5aIc-1",
    embedUrl: "https://embed.figma.com/proto/sevtbxGP1TLYHr4bzsRb4r/Allinol?node-id=685-5305&viewport=-197%2C728%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=685%3A5330&show-proto-sidebar=1&page-id=121%3A62&embed-host=share",
    coverImage: "",
    certificateImage: "allinol-certificate.jpg",
    certificateTitle: "Nominasi Terbanyak - FTI Fest UI/UX Design Award 2026",
    tags: [
      "Web3 dApp",
      "Artificial Intelligence",
      "Sustainability",
      "Used Cooking Oil",
      "Logistics",
      "Smart Contract"
    ],
    features: [
      "Web3 Smart Contract & Ecosystem: Pencatatan otomatis setiap transaksi penjualan minyak jelantah dengan token insentif ramah lingkungan.",
      "AI-Powered Price Forecasting: Model prediktif cerdas untuk memproyeksikan harga fluktuatif minyak jelantah harian secara transparan.",
      "AI Routing Optimization: Algoritma cerdas penentu rute penjemputan kurir untuk efisiensi bahan bakar dan mereduksi emisi karbon logistik."
    ],
    process: {
      research: "Berdasarkan riset mendalam, sistem rantai pasok minyak jelantah tradisional rentan terhadap pemalsuan dan minim transparansi daur ulang. Kami memanfaatkan smart-contract Web3 untuk sertifikat ramah lingkungan digital dApp.",
      wireframing: "Merancang wireframe bento-grid dashboard modern yang ramah pengguna, memudahkan pemilik rumah makan, restoran, maupun rumah tangga awam untuk terkoneksi ke crypto wallet atau check-out fiat.",
      testing: "Diuji secara usability testing kepada 15 partisipan, menghasilkan skor kemudahan transaksi, pemantauan status penjemputan, serta proses penukaran insentif (reward) mencapai 94%."
    },
    color: "#0ACF83"
  }
];