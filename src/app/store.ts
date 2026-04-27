import { create } from "zustand";
import { data } from "../data/data";

export const useStore = create(() => ({
    products: data.products,
}));
