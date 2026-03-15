export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Tote",
    price: 150,
    images: [
      "https://picsum.photos/300/300?random=10",
      "https://picsum.photos/300/300?random=101",
      "https://picsum.photos/300/300?random=102",
      "https://picsum.photos/300/300?random=103"
    ],
    description: "Handcrafted tote bag made from premium leather, perfect for everyday use."
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 80,
    images: [
      "https://picsum.photos/300/300?random=11",
      "https://picsum.photos/300/300?random=111",
      "https://picsum.photos/300/300?random=112"
    ],
    description: "Slim, durable wallet with multiple card slots and coin pocket."
  },
  {
    id: 3,
    name: "Leather Belt",
    price: 60,
    images: [
      "https://picsum.photos/300/300?random=12",
      "https://picsum.photos/300/300?random=121",
      "https://picsum.photos/300/300?random=122",
      "https://picsum.photos/300/300?random=123"
    ],
    description: "Timeless leather belt, adjustable and made to last."
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 120,
    images: [
      "https://picsum.photos/300/300?random=13",
      "https://picsum.photos/300/300?random=131",
      "https://picsum.photos/300/300?random=132"
    ],
    description: "Stylish crossbody bag for hands-free convenience."
  },
  {
    id: 5,
    name: "Leather Keychain",
    price: 20,
    images: [
      "https://picsum.photos/300/300?random=14",
      "https://picsum.photos/300/300?random=141",
      "https://picsum.photos/300/300?random=142",
      "https://picsum.photos/300/300?random=143"
    ],
    description: "Elegant keychain crafted from genuine leather."
  },
  {
    id: 6,
    name: "Leather Phone Case",
    price: 40,
    images: [
      "https://picsum.photos/300/300?random=15",
      "https://picsum.photos/300/300?random=151",
      "https://picsum.photos/300/300?random=152"
    ],
    description: "Protective phone case with leather finish."
  }
];