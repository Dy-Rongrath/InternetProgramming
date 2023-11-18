<template>
    <button :style="{ backgroundColor: Bgcolor, }">
        {{ text }}
        <i class="fa-solid fa-arrow-right"></i>
    </button>
</template>

<script>

export default {
    name: "Button",
    props: ["text", "Bgcolor"],

}
</script>

<style scoped>
.font {
    margin-left: 10px;
}

button {
    position: relative;
    border: none;
    padding: 8px 15px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    border-radius: 3px;
    background: var(--NestMart-Brand-1, #3BB77E);
    box-shadow: 14px 14px 36px 0px rgba(85, 85, 85, 0.10);
}
</style>