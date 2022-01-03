<template>
  <div class="search-input">
    <select>
      <option>All</option>
      <option>Apples</option>
      <option>Bananas</option>
      <option>Pears</option>
    </select>
    <input />
  </div>
</template>
<style lang="scss" scoped>
.search-input {
  display: flex;
  border: 1px solid lightgray;
  input {
    width: 100%;
  }
}
</style>
