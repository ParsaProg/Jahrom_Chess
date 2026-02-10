export interface ChessNewsModelInterface {
  id: number;
  title: string;
  description: string;
  picture: string;
  author: string;
  date: string;
  cat: string;
  isInGrid?: boolean;
}

export const ChessNews: ChessNewsModelInterface[] = [
  {
    id: 1,
    title: "مگنوس کارلسن قهرمان مسابقات سریع‌بازی 2024 شد",
    description:
      "مگنوس کارلسن با عملکرد درخشان خود در مسابقات سریع‌بازی دبی، عنوان قهرمانی را از آن خود کرد و برتری خود را در شطرنج سریع تثبیت نمود.",
    picture:
      "https://images.chesscomfiles.com/uploads/v1/news/1906086.4306076f.630x354o.2ad6790d4340@2x.png",
    author: "علیرضا شطرنجی",
    date: "2024-03-15",
    cat: "شطرنج",
  },
  {
    id: 2,
    title: "نوجوان ایرانی به جمع ۱۰۰ بازیکن برتر جهان صعود کرد",
    description:
      "پرهام مقصودی، نوجوان ۱۶ ساله ایرانی، با کسب امتیاز ۲۶۰۰ در رنکینگ فیده، برای اولین بار وارد جمع ۱۰۰ بازیکن برتر جهان شد.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1898854.10b7b6fe.300x169o.9c85485e62ef@2x.png",
    author: "مریم احمدی",
    date: "2024-03-10",
    cat: "شطرنج",
  },
  {
    id: 3,
    title: "انتشار کتاب جدیدی در مورد گشایش سیسیلی",
    description:
      "استاد بزرگ ویسواناتان آناند کتابی جامع در مورد گشایش سیسیلی منتشر کرده که تحلیل‌های عمیقی از واریانت‌های مدرن این گشایش ارائه می‌دهد.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1905902.cc2e2a2d.300x169o.0062ab26c6c0@2x.png",
    author: "کاظم نجفی",
    date: "2024-03-05",
    cat: "شطرنج",
  },
  {
    id: 4,
    title: "شطرنج آنلاین؛ رشد ۴۰ درصدی کاربران در سال گذشته",
    description:
      "بررسی‌ها نشان می‌دهد پلتفرم‌های شطرنج آنلاین با رشد چشمگیر ۴۰ درصدی کاربران در سال ۲۰۲۳ مواجه شده‌اند.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1905074.8f2f8325.300x169o.3e15f29dd3c4@2x.png",
    author: "سینا رضایی",
    date: "2024-02-28",
    cat: "شطرنج",
  },
  {
    id: 5,
    title: "رقابت تاریخی بین دو هوش مصنوعی شطرنج",
    description:
      "در رقابتی جالب توجه، دو موتور قوی شطرنج AlphaZero و Stockfish در ۱۰۰ بازی متوالی به رقابت پرداختند که نتایج شگفت‌انگیزی داشت.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1901934.5e98864e.300x169o.d09ae899e33b@2x.jpg",
    author: "فرهاد محمودی",
    date: "2024-02-20",
    cat: "شطرنج",
  },
  {
    id: 6,
    title: "آغاز دوره جدید مربی‌گری شطرنج در فدراسیون",
    description:
      "فدراسیون شطرنج ایران دوره جدید مربی‌گری درجه ۲ را با حضور ۳۰ داوطلب از سراسر کشور آغاز کرد.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1900938.b8a20079.300x169o.628487d1b642@2x.jpg",
    author: "الهه کریمی",
    date: "2024-02-15",
    cat: "شطرنج",
  },
  {
    id: 7,
    title: "تغییرات مهم در قوانین مسابقات سریع‌بازی",
    description:
      "اتحادیه جهانی شطرنج قوانین جدیدی برای مسابقات سریع‌بازی و برق‌آسا تصویب کرده که از فصل آینده اجرایی خواهد شد.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1900510.305d7cc4.300x169o.33867c423b7b@2x.png",
    author: "رضا اکبری",
    date: "2024-02-10",
    cat: "شطرنج",
  },
  {
    id: 8,
    title: "بازنشستگی استاد بزرگ ۶۰ ساله پس از نیم قرن فعالیت",
    description:
      "بوریس گلفاند، استاد بزرگ اسرائیلی، پس از ۵۰ سال حضور در عرصه حرفه‌ای شطرنج، خداحافظی خود را از رقابت‌های رسمی اعلام کرد.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1905008.d671d81a.300x169o.3b01acc2becd@2x.png",
    author: "محمد حسینی",
    date: "2024-02-05",
    cat: "شطرنج",
  },
  {
    id: 9,
    title: "مسابقات بین‌المللی شطرنج دانشگاه‌های جهان در تهران",
    description:
      "برای اولین بار، مسابقات شطرنج دانشگاه‌های جهان به میزبانی دانشگاه تهران برگزار خواهد شد.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1900262.d1b7963b.300x169o.241d674c0526@2x.png",
    author: "نادر قلی‌پور",
    date: "2024-01-30",
    cat: "شطرنج",
  },
  {
    id: 10,
    title: "رکورد جدید در مسابقات همزمان شطرنج",
    description:
      "استاد بزرگ ماکسیم واشیر لاگراو رکورد جدیدی در بازی همزمان با ۱۰۰ بازیکن ثبت کرد و در ۹۸ بازی پیروز شد.",
    picture: "https://images.chesscomfiles.com/uploads/v1/news/1889780.f1bec03c.300x169o.b3377da71827@2x.png",
    author: "سارا امیری",
    date: "2024-01-25",
    cat: "شطرنج",
  },
];
