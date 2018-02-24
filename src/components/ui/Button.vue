<template>
  <button class="btn" txt="sss">
    <span>{{txt}}</span>
  </button>
</template>

<script>
  export default {
    name: 'Btn',
    props: ['txt'],
  };
</script>
<style scoped>

  .btn span {
    color: #fff;
    font-weight: bold;
    font-family: "Segoe UI";
    font-size: 25px;
  }
  .btn {
    height: 74px;
    width: 277px;
    position: relative;
    display: block;
    padding: 0;
    overflow: hidden;
    border-width: 0;
    outline: none;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
    background-color: rgba(26, 255, 178, 1);
    color: #ecf0f1;
    transition: background-color .3s;
  }
  .btn:hover, .btn:focus {
    cursor: pointer;
  }
  .btn > * {
    position: relative;
  }

  .btn span {
    display: block;
    padding: 12px 24px;
  }

  .btn:before {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, .45);
    transform: translate(-50%, -50%);
  }
  .btn:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width .2s ease-out, padding-top .2s ease-out;
  }
</style>
