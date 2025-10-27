<template>
    <div>
        <h2>Contador</h2>
        <p>Contador: {{ count }}</p>
        <button @click="increment">Incrementar</button>
        <button @click="decrement">Decrementar</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    valor: {
        type: Number,
        default: 0,
    },
});

const count = ref(props.valor || 0);

function increment() {
    count.value++;
}

function decrement() {
    count.value--;
}
</script>