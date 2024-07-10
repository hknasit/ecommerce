"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { formartPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

export default function CartItems({
  cartItem: { product, quantity },
}: CartEntryProps) {
  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div>
          <Link href={"/products/" + product.id}>{product.name}</Link>
          <div>Price: {formartPrice(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              className="select select-bordered w-full max-w-[80px]"
              defaultValue={quantity}
              onChange={e => {
                
              }}
            >
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-3">
            Total:{formartPrice(product.price * quantity)}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}
