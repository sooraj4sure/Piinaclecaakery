export const BUSINESS = "Piinacle Caakery";
export const FOUNDER = "Preity Goyaal";
export const PHONE_DISPLAY = "+91 93128 36397";
export const PHONE_DIGITS = "919312836397";
export const INSTAGRAM = "https://www.instagram.com/piinaclecaakery/";
export const INSTAGRAM_HANDLE = "@piinaclecaakery";
export const FACEBOOK = "https://www.facebook.com/piinaclecaakery";
export const ADDRESS = "Plot No 51-52, Pocket 7, Sector 24, Rohini, Delhi 110085";
export const HOURS = "11 AM – 8 PM";
export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=28.725491,77.087007";

export function waLink(message: string): string {
  return `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}

export const WA_ORDER =
  "Hi Preity! I'd like to order a cake from Piinacle Caakery.";
export const WA_ENQUIRE =
  "Hi Preity! I'd like to enquire about a cake from Piinacle Caakery.";
export const WA_HAMPER =
  "Hi Preity! I'd like to know more about your hampers.";
export const WA_CUSTOM =
  "Hi Preity! I'd like to order a custom cake. My occasion is: ";

export type Cake = {
  name: string;
  occasion: string;
  desc: string;
  img: string;
  signature?: boolean;
};

export const CAKES: Cake[] = [
  {
    name: "Vintage Red-Heart Cake",
    occasion: "Birthday",
    desc: "A timeless vintage design in deep red with hand-piped hearts — for birthdays that deserve a little drama.",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=80",
  },
  {
    name: "Pink Watercolour & Gold-Leaf Cake",
    occasion: "Birthday",
    desc: "Soft pink watercolour buttercream, a fresh rose and delicate gold leaf — elegant and timeless.",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=900&q=80",
  },
  {
    name: "Blue & White Celebration Cake",
    occasion: "Birthday",
    desc: "Classic blue and white, finished with pearls — a favourite for milestone birthdays.",
    img: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=900&q=80",
  },
  {
    name: "Bigg Boss Theme Cake",
    occasion: "Theme Cake",
    desc: "Lavender and gold with bold theme lettering — for the biggest fan in the family.",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=900&q=80",
  },
  {
    name: "Pink Buttercream-Rose Cake",
    occasion: "Birthday",
    desc: "Blush buttercream swirls topped with fresh roses — soft, pretty and made to be photographed.",
    img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=900&q=80",
  },
  {
    name: "\u201CWe Are Married\u201D Wedding Cake",
    occasion: "Wedding",
    desc: "Red fondant hearts and pearls, with matching Bride-to-Be and Groom-to-Be cupcakes for the big day.",
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=900&q=80",
  },
  {
    name: "Two-Tier White & Gold Anniversary Cake",
    occasion: "Anniversary",
    desc: "White tiers with gold sprinkles, pearls and roses, finished with a Happy Anniversary topper.",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80",
  },
  {
    name: "60th Anniversary Cake",
    occasion: "Anniversary",
    desc: "\u201C60 Years Together\u201D — butterflies and pink sugar roses for a once-in-a-lifetime milestone.",
    img: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=900&q=80",
  },
  {
    name: "Teddy-Bear \u201C1 Month\u201D Cake",
    occasion: "Baby Milestone",
    desc: "A soft teddy-bear design to mark baby's very first month — sweet, gentle and made for photos.",
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80",
  },
  {
    name: "Ghewar Cake",
    occasion: "Signature",
    desc: "Our festive signature — white whipped cream, dried rose petals, pistachios, almonds and a gold drizzle.",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=80",
    signature: true,
  },
  {
    name: "Premium Honey Oatmeal Cake",
    occasion: "Signature",
    desc: "Jaggery-based and wholesome — caramel drizzle, sliced almonds and a gold topper. A house favourite.",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80",
    signature: true,
  },
];

export function cakeWaMessage(cake: Cake): string {
  return `Hi Piinacle Caakery! I'd like to order the ${cake.name} (${cake.occasion}). Please share the price and available sizes.`;
}

export type HamperRange = {
  name: string;
  price: string;
  tag: string;
  img: string;
  contents: string[];
};

export function hamperWaMessage(h: HamperRange): string {
  return `Hi Piinacle Caakery! I'd like to order ${h.name} (${h.tag}, ${h.price}). Please confirm availability and delivery details.`;
}

export const HAMPER_RANGES: HamperRange[] = [
  {
    name: "Hampers 1–6",
    price: "₹500 – ₹850",
    tag: "Everyday gifting",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&q=80",
    contents: [
      "Chocolate boxes",
      "Patakha Chocolates — firework-shaped",
      "Make Your Own Hamper",
      "Choco Lava Cookie Tin",
      "Shahi Gulab Jamun Cake",
      "Poker-themed tins",
    ],
  },
  {
    name: "Hampers 7–11",
    price: "₹900 – ₹1,900",
    tag: "Premium gifting",
    img: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=900&q=80",
    contents: [
      "Protein Booster tubes & Healthy Grown Up Cereal",
      "Puff Bites, Vita Crunch & Mini Lava Cookie Box",
      "Oats Cranberry Cookies & Indian Spice Cookies",
      "Atta Nankhatai & Mini Cookies",
      "Poker Chocolates — dice & card motifs",
      "Soya Candles & Potpourri in a jute bag",
      "Shahi Gulab Jamun Cake",
      "Reusable boxes, jars & metal baskets",
    ],
  },
];
