export interface Product {
    id: number,
    category: string,
    name: string,
    brand: string,
    picture: string,
    description: string,
    quantity_per_unit: string,
    unit_price: number,
    discount: number,
}

export interface LineItem {
    product: Product,
    quantity: number,
}

export interface IAction {
    type: string;
    payload?: any;
}

export interface Order {
    id?: number;
    customerId?: number;
    lineItems?: LineItem[];
    orderDate?: string;
    orderStatus?: string;
}