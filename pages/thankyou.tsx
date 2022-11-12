import { removeCookies } from "cookies-next"
import { GetServerSideProps, NextPage } from "next"
import Router from "next/router"
import Stripe from "stripe"
import { CartDetail } from "../components/CartDetail"
import { Header } from "../components/Header"
import { stripe } from "../lib/stripe"
import { useGetCartQuery } from "../types"

const ThankYou: NextPage<IProps> = ({ session }) => {
    
}