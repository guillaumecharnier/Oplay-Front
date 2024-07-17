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
    hasCategory: any;
    createdAt: string;
    description: string;
    editor: string;
    id: number;
    name: string;
    picture: string;
    price: number;
    releaseDate: string;
}

export interface Game {
    id: number;
    name: string;
    description: string;
    editor: string;
    price: number;
    picture: string;
    createdAt: string;
    releaseDate: string;
    hasCategory: Category[];
    hasTag: Tag[];
  }

export interface JwtPayload {
    roles: string[];
    username: string;
    id: number;
}