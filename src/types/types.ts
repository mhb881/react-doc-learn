export interface MenuItemType {
    title: string;
    to: string;
    parentTo: string;
    childrens: string[];
    challenges?: string[];
}

export interface Person {
    id?: number
    name: string
    imageId: string
    imageSize?: string
    theme?: {
        backgroundColor: string
        color: string
    }
    profession?: string
    accomplishment?: string
}

export interface Story {
    id: number
    label: string
}

export interface Coordinates {
    x: number;
    y: number;
}

export interface Product {
    id: number,
    name: string,
    count: number,
}

export interface TodoItem {
    id: number;
    title: string;
    done: boolean
}