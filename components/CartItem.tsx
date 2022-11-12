import Image from "next/image"
import {
  CartItem,
  GetCartDocument,
  useDecreaseCartItemMutation,
  useIncreaseCartItemMutation,
  useRemoveFromCartMutation,
} from "../types"
import { CloseIcon } from "./CloseIcon"
import { MinusIcon } from "./MinusIcon"
import { PlusIcon } from "./PlusIcon"