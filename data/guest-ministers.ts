export interface GuestMinister {
  id: number;
  name: string;
  ministry: string;
  country: string;
  image: string;
  bio: string;
  scripture: string;
  socials: {
    instagram: string;
    youtube: string;
    facebook: string;
  };
}

export const guestMinisters: GuestMinister[] = [
  {
    id: 1,
    name: "Folarin Ayodeji",
    ministry: "Pastor Askerr",
    country: "Nigeria",
    image: "/images/about.jpg",
    bio: "A gifted worship leader and songwriter with a passion for authentic worship encounters. Folarin has led worship experiences across Africa and Europe, touching thousands with the presence of God through music.",
    scripture: "Yet a time is coming and has now come when the true worshippers will worship the Father in Spirit and in truth.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 2,
    name: "Ayo Olanrewaju",
    ministry: "Grace International Church",
    country: "United Kingdom",
    image: "/images/about.jpg",
    bio: "An anointed minister known for prophetic worship and deep spiritual encounters. Ayo's ministry combines music, prayer, and the Word of God to create transformative worship experiences.",
    scripture: "Sing to the Lord a new song; sing his praise from the ends of the earth.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 3,
    name: "Tunde Oladele",
    ministry: "Hillsong Lagos",
    country: "Nigeria",
    image: "/images/about.jpg",
    bio: "A dynamic worship pastor and music director whose ministry focuses on contemporary worship that honors Christ. Tunde has trained countless worship leaders across West Africa.",
    scripture: "Let everything that has breath praise the Lord. Praise the Lord.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
    },
  },
  {
    id: 4,
    name: "Mercy Adeyemi",
    ministry: "The Redeemed Fellowship",
    country: "South Africa",
    image: "/images/about.jpg",
    bio: "An internationally recognized gospel artist whose soulful voice carries the message of redemption. Mercy combines traditional and contemporary styles to create worship that transcends cultural boundaries.",
    scripture: "I will sing of the Lord's great love forever; with my mouth I will make your faithfulness known through all generations.",
    socials: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
    },
  },
];
