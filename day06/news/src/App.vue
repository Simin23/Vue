<template>
  <div id="app">
    <Header />
    <Menu />
    <Content />
  </div>
</template>

<script>
import "./assets/news.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
export default {
  name: "app",
  components: {
    Header,
    Menu,
    Content
  }
};
</script>

<style>
</style>
