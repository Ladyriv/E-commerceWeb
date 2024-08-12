import { MouseEventHandler } from "react";

export interface SearchProductProps {
    product: string;
    setProduct: React.Dispatch<React.SetStateAction<string>>;
    //setProduct: (product: string) => void;
}

export interface Product {
    category: string;
    id: number;
    name: string;
    image: string;
    price: number;
    toLowerCase: () => string;
    //description: string;
}