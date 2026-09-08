import type { category } from "../schemas/categorySchema";
import type { User } from "../schemas/loginSchema";
import type { product } from "../schemas/productSchema";
import type { order } from "../types/orders";

// Categories
import electronicsImage from "../assets/images/electronics.jpg";
import fashionImage from "../assets/images/fashion.jpg";
import booksImage from "../assets/images/books.jpg";
import homeImage from "../assets/images/home.jpg";
import sportsImage from "../assets/images/sports.jpg";

// Products
import iphoneImage from "../assets/images/iphone.jpg";
import samsungImage from "../assets/images/samsung-s24.jpg";
import macbookImage from "../assets/images/macbook.jpg";
import airpodsImage from "../assets/images/airpods-pro.jpg";
import blackTshirtImage from "../assets/images/black-tshirt.jpg";
import blueJeansImage from "../assets/images/blue-jeans.jpg";
import leatherJacketImage from "../assets/images/leather-jacket.jpg";
import jsBookImage from "../assets/images/js-book.jpg";
import vueBookImage from "../assets/images/vue-book.jpg";
import coffeeMakerImage from "../assets/images/coffee-maker.jpg";
import diningTableImage from "../assets/images/dining-table.jpg";
import footballImage from "../assets/images/football.jpg";
import tennisRacketImage from "../assets/images/tennis-racket.jpg";

export const users: User[] = [
  {
    id: 1,
    name: "Ahmed Ali",
    email: "ahmed@example.com",
    password: "123456",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "admin",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    email: "sara@example.com",
    password: "123456",
    avatar: "https://i.pravatar.cc/150?img=2",
    role: "user",
  },
  {
    id: 3,
    name: "Omar Hassan",
    email: "omar@example.com",
    password: "123456",
    avatar: "https://i.pravatar.cc/150?img=3",
    role: "user",
  },
];

export const categories: category[] = [
  {
    id: 1,
    title: "Electronics",
    description: "Phones, laptops and accessories",
    image: electronicsImage,
  },
  {
    id: 2,
    title: "Fashion",
    description: "Clothing and accessories",
    image: fashionImage,
  },
  {
    id: 3,
    title: "Books",
    description: "Educational and fiction books",
    image: booksImage,
  },
  {
    id: 4,
    title: "Home",
    description: "Home and kitchen products",
    image: homeImage,
  },
  {
    id: 5,
    title: "Sports",
    description: "Sports equipment",
    image: sportsImage,
  },
];

export const products: product[] = [
  {
    id: 1,
    categoryId: 1,
    title: "iPhone 15",
    description: "Apple smartphone",
    image: iphoneImage,
    price: 999,
    stock: 15,
  },
  {
    id: 2,
    categoryId: 1,
    title: "Samsung Galaxy S24",
    description: "Samsung flagship phone",
    image: samsungImage,
    price: 899,
    stock: 20,
  },
  {
    id: 3,
    categoryId: 1,
    title: "MacBook Air M3",
    description: "Apple laptop",
    image: macbookImage,
    price: 1299,
    stock: 10,
  },
  {
    id: 4,
    categoryId: 1,
    title: "AirPods Pro",
    description: "Wireless earbuds",
    image: airpodsImage,
    price: 249,
    stock: 30,
  },
  {
    id: 5,
    categoryId: 2,
    title: "Black T-Shirt",
    description: "Cotton t-shirt",
    image: blackTshirtImage,
    price: 25,
    stock: 50,
  },
  {
    id: 6,
    categoryId: 2,
    title: "Blue Jeans",
    description: "Slim fit jeans",
    image: blueJeansImage,
    price: 45,
    stock: 40,
  },
  {
    id: 7,
    categoryId: 2,
    title: "Leather Jacket",
    description: "Premium jacket",
    image: leatherJacketImage,
    price: 120,
    stock: 18,
  },
  {
    id: 8,
    categoryId: 3,
    title: "JavaScript Guide",
    description: "Learn JavaScript",
    image: jsBookImage,
    price: 30,
    stock: 60,
  },
  {
    id: 9,
    categoryId: 3,
    title: "Vue.js Essentials",
    description: "Vue fundamentals",
    image: vueBookImage,
    price: 35,
    stock: 45,
  },
  {
    id: 10,
    categoryId: 4,
    title: "Coffee Maker",
    description: "Automatic coffee machine",
    image: coffeeMakerImage,
    price: 80,
    stock: 12,
  },
  {
    id: 11,
    categoryId: 4,
    title: "Dining Table",
    description: "Wooden dining table",
    image: diningTableImage,
    price: 250,
    stock: 0,
  },
  {
    id: 12,
    categoryId: 5,
    title: "Football",
    description: "Professional football",
    image: footballImage,
    price: 35,
    stock: 25,
  },
  {
    id: 13,
    categoryId: 5,
    title: "Tennis Racket",
    description: "Lightweight racket",
    image: tennisRacketImage,
    price: 95,
    stock: 14,
  },
];

export const orders: order[] = [
  {
    id: 1,
    userId: 1,
    products: [
      {
        productId: 1,
        qty: 1,
      },
      {
        productId: 4,
        qty: 2,
      },
    ],
    total: 1500,
    status: "pending",
  },
  {
    id: 2,
    userId: 2,
    products: [
      {
        productId: 5,
        qty: 3,
      },
      {
        productId: 6,
        qty: 1,
      },
    ],
    total: 120,
    status: "delivered",
  },
  {
    id: 3,
    userId: 3,
    products: [
      {
        productId: 10,
        qty: 1,
      },
    ],
    total: 80,
    status: "cancelled",
  },
];
