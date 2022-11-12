import { getCookie } from "cookies-next"
import { Product } from "../lib/products"
import { GetCartDocument, useAddToCartMutation } from "../types"
import { ProductItem } from "./ProductItem"

export function ProductDetail({ product }: { product:Product | null }) {
    const cartId = String(getCookie("cartId"))
    const [addToCart, {loading}] = useAddToCartMutation({
        refetchQueries: [GetCartDocument],
    })
}