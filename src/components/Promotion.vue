<template>
    <div class="_promotion" :style="{ backgroundColor: pro_bc }">
        <div class="_quote">
            <div class="_text">{{ text }}</div>
        </div>
        <div class="_img">
            <img :src=img alt="">
        </div>
        <Button :text="textBtn" :bc="btn" class="_btn"></Button>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    name: "Promotion",
    props: {
        text: String,
        img: String,
        textBtn: String,
        btn: String,
        pro_bc: String
    },
    components: {
        Button,
    }

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

._promotion {
    width: 512px;
    height: 300px;
    position: relative;
    border-radius: 10px;
}

._promotion:hover{
    transform: scale(90%);
}
._img {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: end;
    align-items: end;
    width: 200px;
    height: 250px;
    right: 0px;
    bottom: 0px;
}


._quote {
    position: absolute;
    width: calc(512px-200px);
    position: relative;
}

._text {
    position: absolute;
    top: 75px;
    left: 48px;
    width: 271px;
    color: var(--NestMart-TextHeading, #253D4E);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.01px;
    z-index: 10;
}

._btn {
    position: absolute;
    left: 48px;
    bottom: 75px
}

img {
    height: 250px;
}
</style>