import Link from "next/link"
import { removeCookies } from "cookies-next"
import { ExclamationCircle } from "./ExclamationCircle"


export function CartError({ error }: { error:Error | undefined }){
    if (!error){
        return null
    }
}