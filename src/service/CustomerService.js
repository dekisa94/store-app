const customers = [
    { id:1, firstName: 'Pera', lastName: 'Perovic', email:'pera@exm.com', products: [] },
    { id:2, firstName: 'Jova', lastName: 'Jovic', email:'jova@exm.com', products: [] },
    { id:3, firstName: 'Mica', lastName: 'Micic', email:'mica@exm.com', products: [] }
 ]
 
 let nextId=4
 export default class CustomerService{
    list(){
        return customers
    }
    delete(customer){
        customers.splice(customers.indexOf(customer), 1)
    }
    add(newCustomer){
        newCustomer.id=nextId
        customers.push(newCustomer)
        nextId++
    }
    get(id){
        return customers.find(customer => customer.id==id)
    }
 }
 
 export const customerService = new CustomerService()