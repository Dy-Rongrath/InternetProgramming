<template>
  <div class="wrap">
    <Menu feature="Featured Categories" :category="groups" class="menu"></Menu>
    <div class="container">
      <div class="category">
        <div v-for="i in category">
          <Category :cate_bc="i.bc" :Img=i.img :Title=i.title :Item=i.item></Category>
        </div>
      </div>
      <div class="promotion">
        <div v-for="i in promotion">
          <Promotion :text="i.text" :img="i.img" :pro_bc="i.bgC" :btn="i.btnColor" :textBtn="i.txtBtn" ></Promotion>
        </div>
      </div>
      <Menu feature="Popular Products" :category="groups" class="menu"></Menu>
      <div class="Product" style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
        <div v-for="i in products" >
          <Product :tag="i.tag" :tagBg="i.tagBg" :image="i.image" :name="i.name" :rate="i.rate" :sellPrice="i.sellPrice" :discountPrice="i.discountPrice"></Product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Button from "./components/Button.vue";
import Category from "./components/Category.vue";
import Menu from "./components/Menu.vue";
import Product from "./components/Product.vue";
import Promotion from "./components/Promotion.vue";
import { useTodoStore } from "./store/todo";
import { mapState } from "pinia";
export default {
  name: "App",
  components: {
    Button,
    Category,
    Promotion,
    Menu,
    Product
},

setup() {
  const todoStore = useTodoStore();
  return { todoStore };
},

computed: {
  ...mapState(useTodoStore, ["groups"]),
  ...mapState(useTodoStore, ["promotion"]),
  ...mapState(useTodoStore, ["category"]),
  ...mapState(useTodoStore, ["products"]),
},
}
</script>
<style scoped>


.menu{
  margin-top: 50px;
}
.container {
  margin: auto;
  width: 1590px;
}

.category{
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.promotion {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
