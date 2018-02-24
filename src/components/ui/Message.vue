<template>
  <div class="box-message">
    <p class="message">{{message}}</p>
  </div>
</template>

<script>
    export default {
      name: 'message',
      props: ['message'],
    };
</script>

<style scoped>
  .box-message {
    width: 472px;
    height: 112px;
    box-shadow: rgba(0,0,0,.13) 0 3px 4px;
    font-size: 30px;
    font-family: 'Segoe UI';
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .message {
      text-align: center;
      font-size: 20px;
    }
    .box-message {
      width: 95%;
      height: auto;
      padding: 5px 0;
    }
  }
</style>
