<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
body{
  background-color: #e3e1ff;
  color: #444;
}

.cont{
  width: 90%;
  max-width: 960px;
  margin: 80px auto;
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, .1);
  background: white;
}

.error{
  color: #ff3f80;
  font-size: 14px;
}
.button{
  text-decoration: none;
  background: #5ae4ca;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
}
.button:hover{
  transition: .2s ease-in-out all;
  background-color: #328677;
}
</style>
