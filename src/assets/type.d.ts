export interface UserData {
    choose_theme_id: number;
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    nickname: string;
    picture: string;
    preferedTagId: number[];
    roles: string[];
    selectedCategoryId: number[];
}

export interface TagData {
    id: string;
    name: string;
}

export interface CategoryData {
    id: string;
    name: string;
    picture: string;
}

export interface GameData {
    createdAt: string;
    description: string;
    editor: string;
    id: number;
    name: string;
    picture: string;
    price: number;
    releaseDate: string;
}