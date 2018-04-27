<template>
  <div class="container">
      <table class="table">
      <thead>
      <th>First name</th>
      <th>Last name</th>
      <th>email</th>
      </thead>
      <tbody>
        <td> {{customer.firstName}} </td>
        <td> {{customer.lastName}} </td>
        <td> {{customer.email}} </td>
      </tbody>
    </table>
       
      <ul class="list-group">
          <li v-for="(product,key) in customer.products"
            :key="key" class="list-group-item"> {{product}} </li>
      </ul>
      <router-link to="/customers" class="badge badge-info">Back to customers</router-link>
  </div>
</template>

<script>
import {customerService} from '../service/CustomerService'
export default {
  created(){
      this.customer = customerService.get(this.$route.params.id)

  }
}
</script>
