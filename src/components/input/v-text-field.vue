<script lang="ts" setup>
interface VTextFieldProps extends HTMLInputElement {}
defineProps<{ props?: VTextFieldProps }>();
const emit = defineEmits(["onInput", "onChange"]);
</script>
<template><input @input="(e) => emit('onInput', e)" /></template>

<style lang="scss" scoped></style>
