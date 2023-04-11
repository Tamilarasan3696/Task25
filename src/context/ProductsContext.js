import React, { useState } from 'react';


const ProductContext = React.createContext();

export default ProductContext;

const INITIAL_PRODUCTS = [
    {
        productName: "Product 1",
        productCompany: "Company 1",
        type: "Television",
        availableFrom: '2010-04-03',
        price: '22000'
    },
    {
        productName: "Product 2",
        productCompany: "Company 2",
        type: "Laptop",
        availableFrom: '2021-06-03',
        price: '30000'
    }
]
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(INITIAL_PRODUCTS)
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}