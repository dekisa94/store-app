const customers = [
    { id:1, firstName: 'Pera', lastName: 'Perovic', email:'pera@exm.com', products: [] },
    { id:2, firstName: 'Jova', lastName: 'Jovic', email:'jova@exm.com', products: [] },
    { id:3, firstName: 'Mica', lastName: 'Micic', email:'mica@exm.com', products: [] }
 ]
 
 export default class CustomerService{
    list(){
        return customers
    }
    delete(customer){
        customers.splice(customers.indexOf(customer), 1)
    }
 }
 
 export const customerService = new CustomerService()