<template>
  <button class="operator-box">
    <i class="material-icons icon">{{icon}}</i>
  </button>
</template>

<script>
    export default {
      props: ['icon'],
      name: 'button-operator',
    };
</script>

<style scoped>
  .operator-box {
    width: 44px;
    height: 44px;
    border-radius: 4px;
    box-shadow: rgba(23,155,151,.45) 0 2px 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffff;
    color: #A9DAD8;
    text-decoration: none;
    border: none;
    margin: 5px;
  }
  .icon {
    font-size: 30px;
  }
  .operator-box:hover {
    cursor: pointer;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .operator-box {
      width: 35px;
      height: 35px;
    }
  }
</style>
