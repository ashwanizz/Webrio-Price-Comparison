export interface Product {
  id: number;
  name: string;
  category: string;
  amazonPrice: number;
  flipkartPrice: number;
  image: string;
  amazonLink: string;
  flipkartLink: string;
}

export const products: Product[] = [
  // SMARTPHONES
  { 
    id: 1, 
    name: "Apple iPhone 14 (Starlight, 128 GB)", 
    category: "Smartphones", 
    amazonPrice: 58999, 
    flipkartPrice: 57499, 
    image: "https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg",
    amazonLink: "https://amzn.in/d/0hwEb2SQ",
    flipkartLink: "https://dl.flipkart.com/s/wmtg7WNNNN"
  },
  { 
    id: 2, 
    name: "Apple iPhone 13 (Midnight, 128 GB)", 
    category: "Smartphones", 
    amazonPrice: 49999, 
    flipkartPrice: 48999, 
    image: "https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg",
    amazonLink: "https://amzn.in/d/08LeYKUY",
    flipkartLink: "https://amzn.in/d/016Nr0sj"
  },
  { 
    id: 3, 
    name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 256 GB)", 
    category: "Smartphones", 
    amazonPrice: 74999, 
    flipkartPrice: 72999, 
    image: "https://m.media-amazon.com/images/I/71goZuIha-L._SX679_.jpg",
    amazonLink: "https://amzn.in/d/0bUCDRuJ",
    flipkartLink: "https://dl.flipkart.com/s/Bd6L2huuuN"
  },
  { 
    id: 4, 
    name: "OnePlus 11 5G (Titan Black, 256 GB)", 
    category: "Smartphones", 
    amazonPrice: 56999, 
    flipkartPrice: 55499, 
    image: "https://m.media-amazon.com/images/I/71K84j2O8wL._SX679_.jpg",
    amazonLink: "https://amzn.in/d/0dTfirkL",
    flipkartLink: "https://dl.flipkart.com/s/BdLXcNuuuN"
  },
  { 
    id: 5, 
    name: "realme Narzo 60 5G (Mars Orange, 128 GB)", 
    category: "Smartphones", 
    amazonPrice: 17999, 
    flipkartPrice: 16999, 
    image: "https://m.media-amazon.com/images/I/71r5svsNKyL._SX679_.jpg",
    amazonLink: "https://amzn.in/d/074IfOTk",
    flipkartLink: "https://dl.flipkart.com/s/BdLbfouuuN"
  },

  // LAPTOPS
  { 
    id: 6, 
    name: "HP Pavilion Intel Core i5 12th Gen 1240P - (8 GB/512 GB SSD/Windows 11 Home)", 
    category: "Laptops", 
    amazonPrice: 62999, 
    flipkartPrice: 60999, 
    image: "https://m.media-amazon.com/images/I/71RUyskVR+L._SX679_.jpg",
    amazonLink: "https://amzn.in/d/01zVUdh2",
    flipkartLink: "https://dl.flipkart.com/s/wCvjDmNNNN"
  },
  { 
    id: 7, 
    name: "ASUS Vivobook 16 (2025) with Office 2024 + M365 Basic* Intel Core i5 13th Gen 13420H - (16 GB/512 GB Storage)", 
    category: "Laptops", 
    amazonPrice: 55999, 
    flipkartPrice: 54499, 
    image: "https://m.media-amazon.com/images/I/71aaW7HXKnL._SX679_.jpg",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 8, 
    name: "DELL Inspiron 15 (Core i3 14th Gen) Intel Core 3 100U - (8 GB/512 GB SSD/Windows 11 Home) DC15250", 
    category: "Laptops", 
    amazonPrice: 58499, 
    flipkartPrice: 56999, 
    image: "https://m.media-amazon.com/images/I/51M4llnn7BL._SX679_.jpg",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 9, 
    name: "Lenovo IdeaPad Slim 5 Intel Core Ultra 5 125 H - (16 GB/512 GB SSD/Windows 11 Home)", 
    category: "Laptops", 
    amazonPrice: 64999, 
    flipkartPrice: 62999, 
    image: "https://m.media-amazon.com/images/I/612vgg8jv5L._SX679_.jpg",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 10, 
    name: "Apple 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A", 
    category: "Laptops", 
    amazonPrice: 79999, 
    flipkartPrice: 77999, 
    image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },

  // SHOES (Men)
  { 
    id: 11, 
    name: "Nike Air Max", 
    category: "Shoes", 
    amazonPrice: 6999, 
    flipkartPrice: 6499, 
    image: "https://images.unsplash.com/photo-1662410945107-e3e6927e828d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwQWlyJTIwTWF4JTIwc2hvZXN8ZW58MXx8fHwxNzcxOTE2ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 12, 
    name: "Adidas Ultraboost", 
    category: "Shoes", 
    amazonPrice: 8999, 
    flipkartPrice: 8499, 
    image: "https://images.unsplash.com/photo-1546200843-d3a4e1e0103d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBVbHRyYWJvb3N0JTIwc2hvZXN8ZW58MXx8fHwxNzcxOTE2ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 13, 
    name: "Puma RS-X", 
    category: "Shoes", 
    amazonPrice: 5499, 
    flipkartPrice: 4999, 
    image: "https://images.unsplash.com/photo-1680204101400-aeac783c9d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1hJTIwc25lYWtlcnN8ZW58MXx8fHwxNzcxOTE2MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 14, 
    name: "Red Tape Sneakers", 
    category: "Shoes", 
    amazonPrice: 2499, 
    flipkartPrice: 2199, 
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 15, 
    name: "Campus Running Shoes", 
    category: "Shoes", 
    amazonPrice: 1499, 
    flipkartPrice: 1299, 
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXN8ZW58MXx8fHwxNzcxODM5NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },

  // HEADPHONES
  { 
    id: 16, 
    name: "Sony WH-1000XM4", 
    category: "Headphones", 
    amazonPrice: 19999, 
    flipkartPrice: 18499, 
    image: "https://images.unsplash.com/photo-1614860243518-c12eb2fdf66c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb255JTIwV0gtMTAwMFhNNCUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzcxOTE2ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 17, 
    name: "Boat Rockerz 550", 
    category: "Headphones", 
    amazonPrice: 1999, 
    flipkartPrice: 1799, 
    image: "https://images.unsplash.com/photo-1657223143975-d29d7959a70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwd2lyZWxlc3N8ZW58MXx8fHwxNzcxODQwNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 18, 
    name: "JBL Tune 760NC", 
    category: "Headphones", 
    amazonPrice: 5999, 
    flipkartPrice: 5499, 
    image: "https://images.unsplash.com/photo-1622473776277-c57c423daf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKQkwlMjBUdW5lJTIwNzYwTkMlMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc3MTkxNjg0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 19, 
    name: "Realme Buds Air 3", 
    category: "Headphones", 
    amazonPrice: 3999, 
    flipkartPrice: 3699, 
    image: "https://images.unsplash.com/photo-1650775231770-02f4d27484b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSZWFsbWUlMjBCdWRzJTIwQWlyJTIwMyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzcxOTE2ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 20, 
    name: "OnePlus Nord Buds", 
    category: "Headphones", 
    amazonPrice: 2799, 
    flipkartPrice: 2499, 
    image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPbmVQbHVzJTIwTm9yZCUyMEJ1ZHN8ZW58MXx8fHwxNzcxOTE2ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },

  // SMARTWATCHES
  { 
    id: 21, 
    name: "Apple Watch SE", 
    category: "Smartwatches", 
    amazonPrice: 29999, 
    flipkartPrice: 28499, 
    image: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMFdhdGNoJTIwU0V8ZW58MXx8fHwxNzcxOTE2MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 22, 
    name: "Noise ColorFit Pro", 
    category: "Smartwatches", 
    amazonPrice: 2999, 
    flipkartPrice: 2799, 
    image: "https://images.unsplash.com/photo-1699040309386-11c615ed64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOb2lzZSUyMENvbG9yRml0JTIwUHJvJTIwc21hcnR3YXRjaHxlbnwxfHx8fDE3NzE5MTY4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 23, 
    name: "Fire-Boltt Ninja", 
    category: "Smartwatches", 
    amazonPrice: 1499, 
    flipkartPrice: 1299, 
    image: "https://images.unsplash.com/photo-1597421920418-d52a25671451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwYmxhY2t8ZW58MXx8fHwxNzcxODMxNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 24, 
    name: "Samsung Galaxy Watch 4", 
    category: "Smartwatches", 
    amazonPrice: 12999, 
    flipkartPrice: 11999, 
    image: "https://images.unsplash.com/photo-1733570890170-49be2550189b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW1zdW5nJTIwR2FsYXh5JTIwV2F0Y2glMjA0fGVufDF8fHx8MTc3MTkxNjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 25, 
    name: "Boat Xtend", 
    category: "Smartwatches", 
    amazonPrice: 2799, 
    flipkartPrice: 2499, 
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNofGVufDF8fHx8MTc3MTkwNTY5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },

  // CLOTHING (Men)
  { 
    id: 26, 
    name: "Levi’s Jeans", 
    category: "Clothing", 
    amazonPrice: 2999, 
    flipkartPrice: 2799, 
    image: "https://images.unsplash.com/photo-1530062329328-9734c43ae31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwamVhbnMlMjBtZW58ZW58MXx8fHwxNzcxOTE2ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 27, 
    name: "Nike T-Shirt", 
    category: "Clothing", 
    amazonPrice: 1299, 
    flipkartPrice: 1199, 
    image: "https://images.unsplash.com/photo-1618453292507-4959ece6429e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwVC1TaGlydCUyMG1lbnxlbnwxfHx8fDE3NzE5MTY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 28, 
    name: "Adidas Hoodie", 
    category: "Clothing", 
    amazonPrice: 3499, 
    flipkartPrice: 3199, 
    image: "https://images.unsplash.com/photo-1563504520138-06ce900dcc10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBIb29kaWUlMjBtZW58ZW58MXx8fHwxNzcxOTE2ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 29, 
    name: "Puma Track Pants", 
    category: "Clothing", 
    amazonPrice: 2199, 
    flipkartPrice: 1999, 
    image: "https://images.unsplash.com/photo-1767589325064-a20f42c1da11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdW1hJTIwVHJhY2slMjBQYW50cyUyMG1lbnxlbnwxfHx8fDE3NzE5MTY4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 30, 
    name: "Allen Solly Shirt", 
    category: "Clothing", 
    amazonPrice: 1899, 
    flipkartPrice: 1699, 
    image: "https://images.unsplash.com/photo-1765175094470-ed3bef04ed40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBzaGlydCUyMG1lbnxlbnwxfHx8fDE3NzE5MTY4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },

  // EXTRA PRODUCTS
  { 
    id: 31, 
    name: "Mi Power Bank", 
    category: "Electronics", 
    amazonPrice: 1299, 
    flipkartPrice: 1199, 
    image: "https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmt8ZW58MXx8fHwxNzcxOTE2MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 32, 
    name: "Logitech Mouse", 
    category: "Electronics", 
    amazonPrice: 799, 
    flipkartPrice: 699, 
    image: "https://images.unsplash.com/photo-1722682811175-5df0b444d659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb2dpdGVjaCUyME1vdXNlfGVufDF8fHx8MTc3MTkxNjg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 33, 
    name: "HP Backpack", 
    category: "Accessories", 
    amazonPrice: 1499, 
    flipkartPrice: 1299, 
    image: "https://images.unsplash.com/photo-1667411424771-cadd97150827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBiYWNrcGFja3xlbnwxfHx8fDE3NzE5MTY4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 34, 
    name: "Amazon Echo Dot", 
    category: "Electronics", 
    amazonPrice: 4499, 
    flipkartPrice: 4199, 
    image: "https://images.unsplash.com/photo-1544451256-d79e9e199fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWF6b24lMjBFY2hvJTIwRG90fGVufDF8fHx8MTc3MTkxNjg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
  { 
    id: 35, 
    name: "Sandisk SSD 1TB", 
    category: "Electronics", 
    amazonPrice: 6999, 
    flipkartPrice: 6499, 
    image: "https://images.unsplash.com/photo-1725085815038-279c8139c8a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzc2QlMjBkcml2ZXxlbnwxfHx8fDE3NzE5MTY4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    amazonLink: "https://www.amazon.in",
    flipkartLink: "https://www.flipkart.com"
  },
];
