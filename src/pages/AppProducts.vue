<template>
  <div>
    <label>Search</label><input v-model="searchTerm" type="text"/>
        <table class="table">
          <thead>
          <th>Title</th>
          <th>Quantity</th>
          <th>&nbsp;</th>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td> {{ product.title }} </td>
              <td> {{ product.quantity }} </td>
              <td> 
                <button class="btn btn-success" @click="incrementQuantity(product)">+</button> 
                <button @click="decrementQuantity(product)" class="btn btn-danger" v-if="product.quantity">-</button> 
              </td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
import {productService} from '../service/ProductService'
export default {
  data(){
    return{
      products:productService.list(),
      searchTerm: ''
    }
  },
  computed:{
    filteredProducts(){
    return this.products.filter(product => {
      return product.title.toLowerCase().startsWith(this.searchTerm.toLowerCase())
    })
    }
  },
  methods:{
    incrementQuantity(product){
      productService.increment(product)
    },
    decrementQuantity(product){
      productService.decrement(product)
    }
  }
}
</script>
