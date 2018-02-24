<template>
  <div id="app">
    <nav>
      <header>
        <span>Diviertete!</span>
      </header>
    </nav>
    <aside>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  width: 82%;
  left: 18%;
  top: 60px;
  position: absolute;
  right: 0;
}
aside{
  background: #9E9A9A;
  height: 100%;
  width: 18%;
  position: absolute;
}
nav {
  margin: 0;
  z-index: 5;
  position: fixed;
  height: 60px;
  width: 100%;
  top: 0;
  padding: 0 16px 0 24px;
  background-color: #1AE1B2;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px;
}

nav header {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
@media (min-width: 320px) and (max-width: 480px) {
  aside {
    display: none;
  }
  main {
    width: 100%;
    height: auto;
    position: absolute;
    top: 60px;
    left: 0;
  }
  nav {
    height: 55px;
    position: fixed;
  }
}

</style>
