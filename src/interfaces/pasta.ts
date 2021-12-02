import { Comments } from "./comments";

export interface Pasta {
    id: number
    name: string
    image: string
    description: string
    comments: Comments[]
    category: string
    label: string
    price: string
}