const products= [
    {id: 1, title: 'Telefon', quantity: 2},
    {id: 2, title: 'Punjac', quantity: 5},
    {id: 3, title: 'Digitron', quantity: 8}
]

export default class ProductService{
    list(){
        return products
    }
    increment(product){
        product.quantity++
    }
    decrement(product){
        product.quantity--
    }
}
export const productService = new ProductService()