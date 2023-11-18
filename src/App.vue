<template>
  <div class="wrap">
    <div class="container">
      <div style="display: flex;">
        <div v-for="i in category" class="_fruit">
          <Category :cate_bc="i.bc" :Img=i.img :Title=i.title :Item=i.item></Category>
        </div>
      </div>
      <div style="display: flex;">
        <div v-for="i in promotion">
          <Promotion :text="i.text" :img="i.img" :pro_bc="i.bgC" :btn="i.btnColor" :textBtn="i.txtBtn"></Promotion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Button from "./components/Button.vue";
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
export default {
  name: "App",
  components: {
    Button,
    Category,
    Promotion,
  },
  data() {
    return {

      promotion: [
        {
          text: "Everyday Fresh & Clean with Our Products",
          img: "./src/assets/img/Onion.png",
          txtBtn: "Shop now",
          btnColor: "#3BB77E",
          bgC: "#F3E8E8"

        }, {
          text: "Make your Breakfast Healthy and Easy",
          img: "./src/assets/img/bottle.png",
          txtBtn: "Shop now",
          btnColor: "#3BB77E",
          bgC: "#F3E8E8"
        }, {
          text: "The best Organic Products Online",
          img: "./src/assets/img/vegetable.png",
          txtBtn: "Shop now",
          btnColor: "#FDC040",
          bgC: "#E7EAF3"
        },
      ],
      category: [
        {
          bc: "#F2FCE4",
          img: "./src/assets/img/cat1.png",
          title: "Cake & Milk",
          item: "14 items"
        },
        {
          bc: "#FFFCEB",
          img: "./src/assets/img/cat2.png",
          title: "Peach",
          item: "17 items"
        },
        {
          bc: "#ECFFEC",
          img: "./src/assets/img/cat3.png",
          title: "Oganic Kiwi",
          item: "21 items"
        },
        {
          bc: "#FEEFEA",
          img: "./src/assets/img/cat4.png",
          title: "Red Apple",
          item: "68 items"
        },
        {
          bc: "#FFF3EB",
          img: "./src/assets/img/cat5.png",
          title: "Snack",
          item: "34 items"
        },
        {
          bc: "#FFF3FF",
          img: "./src/assets/img/cat6.png",
          title: "Black plum ",
          item: "25 items"
        },
        {
          bc: "#F2FCE4",
          img: "./src/assets/img/cat7.png",
          title: "Vegetables",
          item: "65 items"
        },
        {
          bc: "#FFFCEB",
          img: "./src/assets/img/cat8.png",
          title: "Headphone",
          item: "33 items"
        },
        {
          bc: "#FFF3FF",
          img: "./src/assets/img/cat9.png",
          title: "Cake & Milk",
          item: "63 items"
        },
        {
          bc: "#FFF3FF",
          img: "./src/assets/img/cat10.png",
          title: "Orange",
          item: "63 items"
        }
      ]

    };
  }
}
</script>
<style scoped>
._fruit {
  margin: auto;
  display: flex;
  margin-right: 22px;
}

.wrap {
  font-family: 'Roboto Condensed', sans-serif;
  width: 1080px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
