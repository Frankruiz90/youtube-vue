<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Comfortaa-VariableFont_wght;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 2px blue;
  line-height: 1.1em;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
