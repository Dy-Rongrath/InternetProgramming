<template>
    <div class="wrapper">
        <div class="feature">
            <div>{{ feature }}</div>
        </div>
        <div class="category">
            <a v-for="i in category" href="">{{ i }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            feature: String,
            category: Array,
        },
    }
</script>

<style scoped>
.wrapper {
  width: 1590px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.feature {
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; 
  letter-spacing: -0.013px;
}

.category {
  display: flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; 
}
.category a{
  margin-left: 20px;
  text-decoration: none;
  color: #253D4E;
}
</style>