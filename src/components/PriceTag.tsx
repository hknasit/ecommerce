import { formartPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}
export default function PriceTag({ price, className }: PriceTagProps) {
  return <span className={`badge ${className}`}>{formartPrice(price)}</span>;
}
