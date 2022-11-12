import type { GetServerSideProps, NextPage } from "next"
import { getCartId } from "../lib/cart.client"
import { useCreateCheckoutSessionMutation, useGetCartQuery } from "../types"
import { Header } from "../components/Header";
import { CartDetail } from "../components/CartDetail"
import { useRouter } from "next/router"
import { CartError } from "../components/CartError"

const Cart: NextPage<IProps> = ({ cartId }) => {
    const { data } = useGetCartQuery({ variables: { id: cartId } });
    const router = useRouter();
    const [createCheckoutSession, { loading: creatingCheckoutSession, error }] =
      useCreateCheckoutSessionMutation({
        variables: {
          input: {
            cartId,
          },
        },
        onCompleted: (data) => {
          if (data?.createCheckoutSession?.url) {
            router.push(data.createCheckoutSession?.url);
          }
        },
     })

