<template>
  <div>
        <table class="table">
          <thead>
          <th>Title</th>
          <th>Quantity</th>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
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
      products:productService.list()
    }
  }
}
</script>
