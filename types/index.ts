import { MouseEventHandler } from "react";

export interface SearchProductProps {
    product: string;
    setProduct: (product: string) => void;
}