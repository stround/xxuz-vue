<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
}
*{margin: 0;padding: 0;}
ul{list-style: none;}
a{text-decoration: none}
body{
  margin:0;
  font-size: 14px;
  font-family: "Microsoft Yahei";
}
.f-18{
  font-size: 18px;
}
.f-16{
  font-size: 16px;
}
.wid-auto{
  width: 1210px;
  margin-left: auto;
  margin-right: auto;
}
</style>
