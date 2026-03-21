export interface UserTypes {
    userName: "nirmal",
    isLoggedIn: boolean
};

export interface ProductTypes {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: { rate: number, count: number },
    title: string,
};