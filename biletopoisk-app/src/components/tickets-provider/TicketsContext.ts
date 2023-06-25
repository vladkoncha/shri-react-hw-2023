import { createContext } from "react";
import { Movie } from "@/api-types/types";

export const TicketsContext = createContext<Movie[]>([]);
