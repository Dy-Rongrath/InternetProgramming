<template>
    <div class="item" :style="{ backgroundColor: cate_bc, }">
        <div class="image">
            <img :src=Img alt="">
        </div>
        <div class="food">
            <div class="_title">
                {{ Title }}
            </div>
            <div class="_item">
                {{ Item }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Category",
    props: {
        Img: String,
        Title: String,
        Item: String,
        cate_bc: String
    }

}
</script>
<style scoped>
.item {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 136px;
    height: 177px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #F2FCE4;
    box-shadow: 20px 20px 40px 0px rgba(24, 24, 24, 0.07);
}

._title {
    color: var(--NestMart-TextHeading, #253D4E);
    text-align: center;
    font-family: Quicksand;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.006px;
}

._item {
    color: var(--NestMart-Text-Muted, #B6B6B6);
    text-align: center;
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px;
}

.image {
    margin: auto;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>