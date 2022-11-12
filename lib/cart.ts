import { PrismaClient,CartItem } from "@prisma/client";
import { Stripe } from "stripe";
import { Product } from "./products"

export const currencyCode = "USSD"

export async function findOrCreateCart(prisma: PrismaClient, id: string) {
  let cart = await prisma.cart.findUnique({
    where: { id },
  });
  if (!cart) {
    cart = await prisma.cart.create({
      data: { id },
    });
  }
  return cart;
}