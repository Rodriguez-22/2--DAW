<template>
    <div class="container">
        <h3>Contador: {{ count }}</h3>
        <button @click="Increment">+</button>
        <button @click="Decrement">-</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function Increment() {
    count.value++
}

function Decrement() {
    count.value--
}

function getColorClass() {
    if (count.value > 0) {
        return 'success'
    } else if (count.value === 0) {
        return 'normal'
    } else if (count.value < 0 && count.value >= -10) {
        return 'warning'
    } else {
        return 'alert'
    }
}
</script>

<style scoped>
.success{
    color: green;
}
.normal{
    color: blue;
}
Iwarning {
    color: orange;
}
.alert{
    color: red;
}
</style>