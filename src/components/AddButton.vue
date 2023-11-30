<template>
    <div class="btn">
        <span>Add</span>
        <img src="../assets/img/add-btn.svg" alt="" />
    </div>
</template>

<script>
export default {
    name: "ButtonAdd",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Quicksand:wght@400;500&display=swap");

.btn {
    position: relative;
    width: 67px;
    height: 29px;
    border-radius: 4px;
    border: 1px solid #3bb77e;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;

    color: var(--NestMart-Brand-1, #3bb77e);
    font-family: Quicksand;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    /* 142.857% */
    letter-spacing: -0.006px;
    cursor: pointer;
}
</style>
