import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { MdDeliveryDining } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { SiPinterest } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaCcPaypal, FaCcAmazonPay, FaCodiepie  } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { FaCcApplePay } from "react-icons/fa6";

const data = {
  header: {
    logo: "https://preview.colorlib.com/theme/ashion/img/logo.png",
    navbar: [
      { id: 1, name: "men's", slug: "category/men" },
      { id: 2, name: "women's", slug: "category/women" },
      { id: 3, name: "kids", slug: "category/kid" },
      { id: 4, name: "shoes", slug: "category/shoe" },
      { id: 5, name: "begs", slug: "category/beg" },
      { id: 6, name: "blog", slug: "blog" },
      { id: 7, name: "contact", slug: "contact" },
    ],

    icons: [
      { id: 1, icon: CiHeart, slug: "wishlist" },
      { id: 2, icon: CiShoppingCart, slug: "cart" },
    ],
  },
  banner: [
    {
      id: 1,
      heading: "men's fashion",
      items: "358 items",
      slug: "category/men",
      className: "#fae3d9",
      image: "https://ae01.alicdn.com/kf/S4b83d85a1f05439baf5d39969dd57029F.jpg",
    },
    {
      id: 2,
      heading: "women's fashion",
      items: "486 items",
      slug: "category/women",
      className: "#bfe3d7",
      image: "https://rubyscollection.com.pk/wp-content/uploads/2023/04/Flower-girl-dress.jpg",
    },
    {
      id: 3,
      heading: "kid's fashion",
      items: "253 items",
      slug: "category/kid",
      className: "#d5d3f0",
      image: "https://www.lucyandsam.com/cdn/shop/files/website_squares_l_s_eb10_600x.png?v=1651145100",
    },
    {
      id: 4,
      heading: "shoes",
      items: "214 items",
      slug: "category/shoe",
      className: "#ffdbe5",
      image: "https://servis.pk/cdn/shop/files/M-SR-0200031BROWN.jpg?v=1738355654",
    },
    {
      id: 5,
      heading: "ladies beg",
      items: "56 items",
      slug: "category/beg",
      className: "#cee2f5",
      image:
        "https://image.made-in-china.com/202f0j00WpRoOhBIaugP/2024-Female-Beg-Girls-Purses-and-Handbags-Top-Handle-Satchel-Shoulder-Bags-Messenger-Tote-Bag-for-Ladies.webp",
    },
  ],
  newProduct: [
    { id: 1, name: "all", category: "all" },
    { id: 2, name: "men's", category: "men" },
    { id: 3, name: "women's", category: "women" },
    { id: 4, name: "kid's", category: "kid" },
    { id: 5, name: "shoes", category: "shoe" },
    { id: 6, name: "begs", category: "beg" },
  ],
  products: [
    {
      id: 1,
      name: "navy_non-denim_overshirt",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/n/a/navy_non-denim_overshirt_224-117-012_9_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
      oldprice: 1999,
      newprice: 1499,
      category: "men",
      create: 20250101,
    },
    {
      id: 2,
      name: "light_green_non-denim_overshirt",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/l/i/light_green_non-denim_overshirt_224-117-016_2_.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=550:825",
      oldprice: 2199,
      newprice: 1799,
      category: "men",
      create: 20240111,
    },
    {
      id: 3,
      name: "light_blue_overshirt",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/l/i/light_blue_overshirt_224-117-010_3_.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=550:825",
      oldprice: 2199,
      newprice: 1799,
      category: "men",
      create: 20240111,
    },
    {
      id: 4,
      name: "LightColor Beg",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/8/m/j/shoulder-bags-for-woman-big-size-black-30-04-shoulder-bag-fl-original-imah2mwep48rbf2p.jpeg?q=20&crop=false",
      oldprice: 2199,
      newprice: 1799,
      category: "beg",
      create: 20240111,
    },
    {
      id: 5,
      name: "multi_knit_regular_hoodie",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/m/u/multi_knit_regular_hoodie_224-112-020_8_.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=2:3",
      oldprice: 2199,
      newprice: 1799,
      category: "men",
      create: 20240111,
    },
    {
      id: 6,
      name: "maddy_green_fashion_sweatshirt",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/m/a/maddy_green_fashion_sweatshirt_mn-sws-ws23-003_3_.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=2:3",
      oldprice: 2199,
      newprice: 1799,
      category: "men",
      create: 20250101,
    },
    {
      id: 7,
      name: "white_brown_yarn_dyed_checkered_casual_shirt",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/w/h/white_brown_yarn_dyed_checkered_casual_shirt_mn-cs-yd23-002_2_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
      oldprice: 2199,
      newprice: 1799,
      category: "men",
      create: 20250101,
    },
    {
      id: 8,
      name: "3 piece unstiched printed lawn suit",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/c/l/cl-42148_1_.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=550:825",
      oldprice: 2199,
      newprice: 1799,
      category: "women",
      create: 20240111,
    },
    {
      id: 9,
      name: "jacquard shirt gls-23-40",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-40_5_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
      oldprice: 2199,
      newprice: 1799,
      category: "women",
      create: 20250101,
    },
    {
      id: 10,
      name: "jacquard shirt gls-23-38",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/g/l/gls-23-38_4_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
      oldprice: 2199,
      newprice: 1799,
      category: "women",
      create: 20240111,
    },
    {
      id: 11,
      name: "dobby dyed embellished shirt and trouser",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/k/s/kst-43320_4_.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=550:825",
      oldprice: 2199,
      newprice: 1799,
      category: "women",
      create: 20250101,
    },
    {
      id: 12,
      name: "shahtaj latha unstiched fabric cotton-lf",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/3/5/356224_4__1.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=550:825",
      oldprice: 2199,
      newprice: 1799,
      category: "men",
      create: 20240111,
    },
    {
      id: 13,
      name: "black_knit_sweater",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/b/l/black_knit_sweater_224-311-007_2_.jpg?optimize=medium&fit=bounds&height=825&width=550&canvas=550:825",
      oldprice: 2199,
      newprice: 1799,
      category: "kid",
      create: 20250101,
    },
    {
      id: 14,
      name: "toddler_boy_khaaki_casual_shirt",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/t/o/toddler_boy_khaaki_casual_shirt_224-317-009_5_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
      oldprice: 2199,
      newprice: 1799,
      category: "kid",
      create: 20250101,
    },
    {
      id: 15,
      name: "junior_boy_casual_shirt",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/j/u/junior_boy_casual_shirt_224-317-015_4_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
      oldprice: 2199,
      newprice: 1799,
      category: "kid",
      create: 20240111,
    },
    {
      id: 16,
      name: "blue mules",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/4/1/418728_1_.jpg?optimize=medium&auto=webp&bg-color=255,255,255&fit=bounds&canvas=2:3&width=500&height=750",
      oldprice: 2199,
      newprice: 1799,
      category: "shoe",
      create: 20240111,
    },
    {
      id: 17,
      name: "Golden Slipper",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/4/0/401447_2_.jpg?optimize=medium&fit=bounds&height=&width=",
      oldprice: 2199,
      newprice: 1799,
      category: "shoe",
      create: 20250101,
    },
    {
      id: 18,
      name: "White Comfy Slipper",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/4/1/418776_3_.jpg?optimize=medium&fit=bounds&height=900&width=600",
      oldprice: 2199,
      newprice: 1799,
      category: "shoe",
      create: 20240111,
    },
    {
      id: 19,
      name: "White Slipper",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/3/9/391462_2_.jpg?optimize=medium&fit=bounds&height=900&width=599",
      oldprice: 0,
      newprice: 1899,
      category: "shoe",
      create: 20250101,
    },
    {
      id: 20,
      name: "Tan Slipper",
      image:
        "https://www.gulahmedshop.com/media/catalog/product/4/1/419724_2_.jpg?optimize=medium&fit=bounds&height=900&width=600",
      oldprice: 0,
      newprice: 2048,
      category: "shoe",
      create: 20240111,
    },
    {
      id: 21,
      name: "Pink Slipper ",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/f/9/v/girl-s-western-look-hand-bag-aj-m03-bl-shoulder-bag-al-jazeera-original-imaggzh6ghzjhedz.jpeg?q=20&crop=false",
      oldprice: 0,
      newprice: 2048,
      category: "beg",
      create: 20250101,
    },
    {
      id: 22,
      name: "Pink Slipper ",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/s/n/c/stylish-ladiesh-hand-bags-m16-gr-shoulder-bag-al-jazeera-original-imagnssjjfgqwz59.jpeg?q=90&crop=false",
      oldprice: 0,
      newprice: 2048,
      category: "beg",
      create: 20240111,
    },
    {
      id: 23,
      name: "Pink Slipper ",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/k/i/u/stylish-ladiesh-hand-bags-m16-bl-shoulder-bag-al-jazeera-original-imagnssjvgkxbdks.jpeg?q=90&crop=false",
      oldprice: 0,
      newprice: 2048,
      category: "beg",
      create: 20250101,
    },
    {
      id: 24,
      name: "Pink Slipper ",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/hand-messenger-bag/j/b/u/combo-women-stylish-trendy-collage-casual-formal-office-handbags-original-imagnz897qhpahwt.jpeg?q=20&crop=false",
      oldprice: 0,
      newprice: 2048,
      category: "beg",
      create: 20240111,
    },
  ],

  categories: [
    {
      id: 1,
      name: "Hot Trend",
      products: [
        {
          name: "Chain bucket bag",
          price: 999,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/ht-1.jpg",
        },
        {
          name: "Pendant earrings",
          price: 1299,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/ht-2.jpg",
        },
        {
          name: "Cotton T-Shirt",
          price: 1599,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/ht-3.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Best seller",
      products: [
        {
          name: "Cotton T-Shirt",
          price: 1499,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/bs-1.jpg",
        },
        {
          name: "Zip-pockets pebbled tote briefcase",
          price: 6499,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/bs-2.jpg",
        },
        {
          name: "Round leather bag",
          price: 4999,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/bs-3.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Feature",
      products: [
        {
          name: "Bow wrap skirt",
          price: 1999,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/f-1.jpg",
        },
        {
          name: "Metallic earrings",
          price: 1499,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/f-2.jpg",
        },
        {
          name: "Flap cross-body bag",
          price: 1199,
          rating: 4.7,
          image: "https://preview.colorlib.com/theme/ashion/img/trend/f-3.jpg",
        },
      ],
    },
  ],
  rules: [
    {
      icon: MdDeliveryDining,
      name: "Free Shipping",
      message: "For all oder over $99",
    },
    {
      icon: FaMoneyBillAlt,
      name: "Money Back Guarantee",
      message: "If good have Problems",
    },
    {
      icon: HiSupport,
      name: "Online Support 24/7",
      message: "Dedicated support",
    },
    {
      icon: RiSecurePaymentFill,
      name: "Payment Secure",
      message: "00% secure payment",
    },
  ],
  slider: [
    "https://ae01.alicdn.com/kf/S4b83d85a1f05439baf5d39969dd57029F.jpg",
    "https://rubyscollection.com.pk/wp-content/uploads/2023/04/Flower-girl-dress.jpg",
    "https://www.lucyandsam.com/cdn/shop/files/website_squares_l_s_eb10_600x.png?v=1651145100",
    "https://servis.pk/cdn/shop/files/M-SR-0200031BROWN.jpg?v=1738355654",
    "https://image.made-in-china.com/202f0j00WpRoOhBIaugP/2024-Female-Beg-Girls-Purses-and-Handbags-Top-Handle-Satchel-Shoulder-Bags-Messenger-Tote-Bag-for-Ladies.webp"
  ],

  footer: {
    image: "https://preview.colorlib.com/theme/ashion/img/logo.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.",
    categories: [
      {
        id: 1,
        listName: "Quick links",
        category: [
          { id: 1, listItem: "home", slug: "/home" },
          { id: 2, listItem: "men's", slug: "/men" },
          { id: 3, listItem: "women's", slug: "/women" },
          { id: 4, listItem: "kids", slug: "/kids" },
          { id: 5, listItem: "shoes", slug: "/shoes" },
        ],
      },
      {
        id: 2,
        listName: "Account",
        category: [
          { id: 1, listItem: "My Account", slug: "/account" },
          { id: 2, listItem: "Order Tracking", slug: "/tracking" },
          { id: 3, listItem: "Checkout", slug: "/checkout" },
          { id: 4, listItem: "Wishlist", slug: "/wishlist" },
        ],
      },
    ],
    newsletter: [
      {
        icon: TiSocialFacebook,
        slug: "/facebook",
      },
      {
        icon: TiSocialTwitter,
        slug: "/twitter",
      },
      {
        icon: FaYoutube,
        slug: "/youtube",
      },
      {
        icon: AiFillInstagram,
        slug: "/instagram",
      },
      {
        icon: SiPinterest,
        slug: "/pinterest",
      },
    ],
    payment: [
      {
        icon: FaCcPaypal,
        slug: "/paypal",
      },
      {
        icon: FaCcAmazonPay,
        slug: "/aws",
      },
      {
        icon: SiGooglepay,
        slug: "/googlepay",
      },
      {
        icon: FaCcApplePay,
        slug: "/applepay",
      },
      {
        icon: FaCodiepie,
        slug: "/pinterest",
      },
    ],
    copyright: "Copyright ©2025 All rights reserved | This template is made with by Abdullah Bhatti",
  },
};

export default data;
