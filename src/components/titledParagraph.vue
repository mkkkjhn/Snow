<template>
  <div class="title">
    <span>{{title}}</span>
  </div>
  <div class="text">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
.title {
  font-family: Playfair Display,serif;
  color: #171717;
  font-weight: 700;
  font-size: 3.2rem;
  padding-top: 80px;
  margin: 10px 0 15px 0;
}
.text {
  margin-bottom: 24px;
  padding: 0 260px 0 260px;
}
</style>
