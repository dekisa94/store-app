<template>
  <div>
    <label>Search</label><input v-model="searchTerm" type="text"/>
        <table class="table">
          <thead>
          <th>Title</th>
          <th>Quantity</th>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id">
              <td> {{ product.title }} </td>
              <td> {{ product.quantity }} </td>
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
  }
}
</script>
