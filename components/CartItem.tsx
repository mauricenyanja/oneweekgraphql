import Image from "next/image";
import {
  CartItem,
  GetCartDocument,
  useDecreaseCartItemMutation,
  useIncreaseCartItemMutation,
  useRemoveFromCartMutation,
} from "../types";
import { CloseIcon } from "./CloseIcon";
import { MinusIcon } from "./MinusIcon";
import { PlusIcon } from "./PlusIcon";

export function CartItem({
  item,
  cartId,
  isReadOnly,
}: {
  item: CartItem;
  cartId: string;
  isReadOnly?: boolean;
}) {
  const [increaseCartItem, { loading: increasingCartItem }] =
    useIncreaseCartItemMutation({
      refetchQueries: [GetCartDocument],
    });
  const [decreaseCartItem, { loading: decreasingCartItem }] =
    useDecreaseCartItemMutation({
      refetchQueries: [GetCartDocument],
    });
  const [removeFromCart, { loading: removingFromCart }] =
    useRemoveFromCartMutation({
      refetchQueries: [GetCartDocument],
    });
}
