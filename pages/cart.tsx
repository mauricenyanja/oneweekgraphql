import type { GetServerSideProps, NextPage } from "next"
import { getCartId } from "../lib/cart.client"
import { useCreateCheckoutSessionMutation, useGetCartQuery } from "../types"
import { Header } from "../components/Header";
import { CartDetail } from "../components/CartDetail"
import { useRouter } from "next/router"
import { CartError } from "../components/CartError"