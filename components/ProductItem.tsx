import Image from "next/image"
import { HTMLProps } from "react"
import { Product } from "../lib/product"

export function ProductItem({
    product: { price,src,title },
}: HTMLProps<HTMLDivElement> & {
    product: Product
}){
    return (
        
    )
}