<template>
    <div>
        <h1>Customers</h1>
        <div class="list-group">
            <div class="list-group-item"
            v-for="customer in customers"
            :key="customer.id"
            >{{ customer.firstName }} {{ customer.lastName }}
            <button class="btn btn-danger ml-5" @click="deleteCustomer(customer)">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
import {customerService} from '../service/CustomerService'
export default {
  data(){
      return{
          customers: customerService.list()
      }
  },
  methods:{
      deleteCustomer(customer){
          customerService.delete(customer)
      }
  }
}
</script>
