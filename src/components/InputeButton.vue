<template>
    <div class="btn">
        <input type="number" name="" id="input_amout" min="0" value="1" />
    </div>
</template>

<script>
export default {
    name: "InputeButton",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Quicksand:wght@400;500&display=swap");

#input_amout {
    position: absolute;
    width: 90%;
    height: 90%;
    border: none;
    outline: none;
    color: #3bb77e;
    font-family: Quicksand;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.006px;
    text-align: center;
}

.btn {
    position: relative;
    width: 67px;
    height: 29px;
    border-radius: 4px;
    border: 1px solid #3bb77e;
    background: #fff;
    box-sizing: border-box;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    opacity: 1;
    color: #3bb77e;
}
</style>
