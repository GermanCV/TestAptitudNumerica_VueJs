<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p>El objetivo del test es descubrir los operadores (suma +, resta -, multiplicación * ó división /) que hay
      que colocar entre los números para conseguir que el resultado de la operación sea el mostrado. Ejemplo:</p>
    <div class="container-example">
      <div class="example-box">
        <test-item :data="data_example" :info="data_example_info" :BtnDisable="IsBtnItemDisable"/>
        <test-item :data="data_result" :info="data_result_info" :BtnDisable="IsBtnItemDisable" />
      </div>
      <btn txt="INICIAR" v-on:click.native="StartTest" class="box-btn"/>
    </div>
    <div class="content-record">
      <p class="txt-record">Maximo record</p>
      <div class="box-record">
        <div class="time-record">
          <p class="txt-time"><span>{{score.minutes}}</span> : <span>{{score.seconds}}</span> : <span>{{score.centesimas}}</span></p>
        </div>
        <div class="success-record">
          <p class="txt-success"><span>{{score.successItems}}</span>/<span>{{score.itemTotal}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Btn from '@/components/ui/Button';
import TestItem from '@/components/ui/TestItem';

export default {
  name: 'Test',
  components: {
    Btn,
    TestItem,
  },
  data: () => ({
    msg: 'Test de Aptitud Numérica',
    data_example: { result: 17, number1: 7, number2: 15, number3: 5 },
    data_example_info: { icon_1: 'fullscreen_exit', icon_2: 'fullscreen_exit' },
    data_result: { result: 17, number1: 7, number2: 15, number3: 5 },
    data_result_info: { icon_1: 'add', icon_2: 'remove' },
  }),
  methods: {
    StartTest() {
      this.$router.push('test');
      this.$store.dispatch('generateDatatest');
    },
  },
  computed: {
    ...mapState(['data', 'IsBtnItemDisable', 'score']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .example-box {
    box-shadow: rgba(0,0,0,.16) 0 3px 4px;
    height: 201px;
    width: 563px;
    border-radius: 4px;
    margin-left: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .box-btn {
    margin-top: 15px;
    margin-left: 3%;
  }
  .txt-time {
    font-weight: bold;
    font-size: 33px;
  }
  .txt-success {
    font-size: 25px;
  }
  .txt-success, .txt-time {
    color: #fff;
    font-family: "Segoe UI";
  }
  .content-record {
    margin-top: 1.5em;
  }
  .txt-record {
    color: #1AE1B2;
    font-size: 25px;
    margin: 0;
    font-family: "Segoe UI";
  }
  .box-record {
    display: flex;
  }
  .time-record, .success-record {
    background: rgba(26, 255, 178, .41);
    height: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .time-record {
    width: 234px;
  }
  .success-record {
    width: 94px;
    margin-left: 5px;
  }
  h1, h2 {
  font-family: "Segoe UI";
  font-weight: normal;
  font-size: 30px;
  color: #707070;
}
p {
  font-family: "Segoe UI";
  font-size: 20px;
  color: #707070;
}
ul {
  list-style-type: none;
  padding: 0;
}
.main{
  margin: 3%;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
  @media (min-width: 320px) and (max-width: 480px) {
    .main {
      margin-left: auto;
      margin-right: auto;
      width: 95%;
    }
    h1 {
      font-size: 20px;
      font-weight: bold;
      margin: 0;
    }
    p {
      margin: 5px;
      font-size: 16px;
    }
    .example-box {
      width: 90%;
      margin-left: 0;
      margin-top: 10px;
    }
    .container-example {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    .content-record {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 15px;
    }
    .box-btn {
      margin-left: 0;
    }
  }
</style>
