import type {GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Header } from "../components/Header"
import { ProductList } from "../components/ProductList"
import { Product, products } from "../lib/products"


export const getStaticProps:GetStaticProps<{
  products: Product[]
}> = async () => ({
  props: {
    products:products.slice(0,6)
  }
})
const Home: NextPage = () => {
  return <h1 className="text-purple-500 text-xl">Hello world</h1>;
};

export default Home;