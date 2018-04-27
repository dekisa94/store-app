<template>
    <div>
        <h1>Customers</h1>
        <div class="list-group">
            <div class="list-group-item">
                <label>First name:</label>
                <input v-model="newCustomer.firstName" type="text" name="firstName" class="ml-3"/>
                <label class="ml-3">Last name:</label>
                <input v-model="newCustomer.lastName" type="text" name="lastName" class="ml-3"/>
                <label class="ml-3">Email:</label>
                <input v-model="newCustomer.email" type="text" name="email" class="ml-3"/>
                <button @click="addCustomer" class="btn btn-primary ml-3">Add customer</button>
            </div>
        </div>
        <div class="list-group">
            <div class="list-group-item"
            v-for="customer in customers"
            :key="customer.id"
            >{{ customer.firstName }} {{ customer.lastName }}
            <router-link :to="'/customers/'+customer.id" class="ml-5 float-right">Latest Purchases</router-link>
            <button class="btn btn-danger float-right" @click="deleteCustomer(customer)">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
import {customerService} from '../service/CustomerService'
export default {
  data(){
      return{
          customers: customerService.list(),
          newCustomer: {
                firstName: '',
                lastName: '',
                email: ''
          }
      }
  },
  methods:{
      deleteCustomer(customer){
          customerService.delete(customer)
      },
      addCustomer(){
          customerService.add(this.newCustomer)
      }
  }
}
</script>
