export interface InvitationConfig {
  graduate: {
    fullName: string;
    firstName: string;
    degree: string;
    major: string;
    majorVi: string;
    university: string;
    campus: string;
    address: string;
    googleMapsUrl: string;
    phone: string;
    social: {
      facebook?: string;
      zalo?: string;
      tiktok?: string;
    };
  };
  event: {
    date: string; // YYYY-MM-DD
    displayDate: string; // 24.10.2026
    day: number;
    month: number;
    year: number;
    dayOfWeekVi: string; // Thứ Bảy
    time: string; // 09:00
    targetDateTime: string; // 2026-10-24T09:00:00
  };
  defaultGuestName: string;
  timeline: Array<{
    time: string;
    title: string;
    description?: string;
    icon: string;
  }>;
  gallery: Array<{
    id: number;
    src: string;
    thumb: string;
    alt: string;
  }>;
  bankAccount: {
    bankName: string;
    accountNumber: string;
    accountHolder: string;
    qrCodeUrl?: string;
    note: string;
  };
  audio: {
    src: string;
    title: string;
  };
}

export const invitationConfig: InvitationConfig = {
  graduate: {
    fullName: "Nguyễn Thế Anh",
    firstName: "Thế Anh",
    degree: "TÂN CỬ NHÂN",
    major: "International Business",
    majorVi: "Kinh doanh Quốc tế",
    university: "Trường Đại học FPT",
    campus: "Phân hiệu Cần Thơ",
    address: "600 Nguyễn Văn Cừ Nối Dài, Phường An Bình, Thành phố Cần Thơ",
    googleMapsUrl: "https://maps.google.com/?q=Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+FPT+C%E1%BA%A7n+Th%C6%A1",
    phone: "0914 754 005",
    social: {
      facebook: "https://facebook.com",
      zalo: "https://zalo.me",
      tiktok: "https://tiktok.com",
    },
  },
  event: {
    date: "2026-10-24",
    displayDate: "24.10.2026",
    day: 24,
    month: 10,
    year: 2026,
    dayOfWeekVi: "Thứ Bảy",
    time: "09:00",
    targetDateTime: "2026-10-24T09:00:00+07:00",
  },
  defaultGuestName: "Thế Anh",
  timeline: [
    {
      time: "09:00",
      title: "Trao bằng tốt nghiệp",
      description: "Khoảnh khắc vinh danh và nhận bằng tốt nghiệp danh giá",
      icon: "cap",
    },
    {
      time: "11:30",
      title: "Nghi thức tung mũ",
      description: "Nghi thức truyền thống đánh dấu cột mốc hoàn thành chặng đường đại học",
      icon: "branch",
    },
    {
      time: "12:00",
      title: "Chụp hình kỷ niệm",
      description: "Lưu giữ khoảnh khắc đẹp cùng người thân, bạn bè và thầy cô",
      icon: "camera",
    },
    {
      time: "15:00 - 16:00",
      title: "Chụp hình kỷ niệm",
      description: "Tiếp tục giao lưu và chụp ảnh tại khuôn viên trường",
      icon: "camera",
    },
  ],
  gallery: [
    {
      id: 1,
      src: "/assets/gallery-1.jpg",
      thumb: "/assets/gallery-1.jpg",
      alt: "Khoảnh khắc tốt nghiệp 1",
    },
    {
      id: 2,
      src: "/assets/gallery-2.jpg",
      thumb: "/assets/gallery-2.jpg",
      alt: "Khoảnh khắc tốt nghiệp 2",
    },
    {
      id: 3,
      src: "/assets/gallery-3.jpg",
      thumb: "/assets/gallery-3.jpg",
      alt: "Khoảnh khắc tốt nghiệp 3",
    },
    {
      id: 4,
      src: "/assets/gallery-4.jpg",
      thumb: "/assets/gallery-4.jpg",
      alt: "Khoảnh khắc tốt nghiệp 4",
    },
    {
      id: 5,
      src: "/assets/gallery-5.jpg",
      thumb: "/assets/gallery-5.jpg",
      alt: "Khoảnh khắc tốt nghiệp 5",
    },
    {
      id: 6,
      src: "/assets/gallery-6.jpg",
      thumb: "/assets/gallery-6.jpg",
      alt: "Khoảnh khắc tốt nghiệp 6",
    },
    {
      id: 7,
      src: "/assets/gallery-7.jpg",
      thumb: "/assets/gallery-7.jpg",
      alt: "Khoảnh khắc tốt nghiệp 7",
    },
  ],
  bankAccount: {
    bankName: "Techcombank",
    accountNumber: "19036888888888",
    accountHolder: "NGUYEN THE ANH",
    note: "Mung tot nghiep The Anh",
  },
  audio: {
    src: "/assets/music.mp3",
    title: "Nhạc nền chúc mừng tốt nghiệp",
  },
};
