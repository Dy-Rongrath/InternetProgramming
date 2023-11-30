import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        groups: ["Milke & Diaries", "Coffes & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"],
        promotion: [
            {
            text: "Everyday Fresh & Clean with Our Products",
            img: "./src/assets/img/Onion.png",
            txtBtn: "Shop now",
            btnColor: "#3BB77E",
            bgC: "#F0E8D5"

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
          bc: "#F2FCE4",
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
      ],

      products: [
          {
            id: 1,
            tag: "-17%",
            tagBg: "#3BB77E",
            image: "./src/assets/img/1-Seeds.png",
            category: 3,
            name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 2,
            tag: "Hot",
            tagBg: "#FD6E6E",
            image: "./src/assets/img/3-Boomchickapop.png",
            category: 3,
            name: "All Natural Italian-Style Chicken Meatballs",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 3,
            tag: "Sale",
            tagBg: "#FDC040",
            image: "./src/assets/img/1-Seeds.png",
            category: 3,
            name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 4,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/4-FasterFarms.png",
            category: 3,
            name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 5,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/5-BlueDiamond.png",
            category: 3,
            name: "Blue Diamond Almonds Lightly Salted Vegetables",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 6,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/6-Chobani.png",
            category: 3,
            name: "Chobani Complete Vanilla Greek Yogurt",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 7,
            tag: "Sale",
            tagBg: "#FDC040",
            image: "./src/assets/img/7-Canado.png",
            category: 3,
            name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 8,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/8-Encore.png",
            category: 3,
            name: "Encore Seafoods Stuffed Alaskan Salmon",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 9,
            tag: "",
            tagBg: "",
            image: "./src/assets/img/9-Gorton.png",
            category: 3,
            name: "Gorton’s Beer Battered Fish Fillets with soft paper",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
          {
            id: 1,
            tag: "Hot",
            tagBg: "#FD6E6E",
            image: "./src/assets/img/10-Haagen.png",
            category: 3,
            name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
            rate: 4.0,
            description: "500 gram",
            sellPrice: "2.00",
            discountPercentage: 17,
            discountPrice: "3.00",
          },
        ],
    })
})