import { NextRequest, NextResponse } from "next/server";
// Mock product data
const products = [
  { id: 1, name: "Delicious Pizza", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$20", image: "/f1.png" },
  { id: 2, name: "Delicious Burger", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$15", image: "/f2.png" },
  { id: 3, name: "Delicious Pizza", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$17", image: "/f3.png" },
  { id: 4, name: "Delicious Pasta", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$18", image: "/f4.png" },
  { id: 5, name: "French Fries", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$10", image: "/f5.png" },
  { id: 6, name: "Delicious Pizza", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$15", image: "/f6.png" },
  { id: 7, name: "Tasty Burger", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$12", image: "/f7.png" },
  { id: 8, name: "Tasty Burger", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$14", image: "/f8.png" },
  { id: 9, name: "Delicious Pasta", description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque", price: "$10", image: "/f9.png" }
];

export async function GET(request: NextRequest,  context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const productId = parseInt(id, 10); // Convert id to number
  const product = products.find((p) => p.id === productId); // Find the product

  return NextResponse.json(product); // Return product data
}
