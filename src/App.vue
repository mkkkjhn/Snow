<template>
  <nav-bar></nav-bar>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}

</script>

<style lang="scss">
/*Обнуление*/
*{
  padding: 0;
  margin: 0;
  border: 0;
}
*,*:before,*:after{
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,:active{outline: none;}
a:focus,a:active{outline: none;}

nav,footer,header,aside{display: block;}

html,body{
  height: 100%;
  width: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,button,textarea{font-family:inherit;}

input::-ms-clear{display: none;}
button{cursor: pointer;}
button::-moz-focus-inner {padding:0;border:0;}
a, a:visited{text-decoration: none;}
a:hover{text-decoration: none;}
ul li{list-style: none;}
img{vertical-align: top;}

h1,h2,h3,h4,h5,h6{font-weight: 400;}
/*--------------------*/
body {
  font-family: Work Sans,sans-serif;
  color: #5f5f5f;
  line-height: 1.65;
  letter-spacing: .004em;
}
a {
  cursor: pointer;
}
nav {
  padding: 34px 0;
  background-color: inherit;
}
.container {
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 1140px) {
  .container {
    width: 1140px;
    max-width: 100%;
  }
}
</style>
