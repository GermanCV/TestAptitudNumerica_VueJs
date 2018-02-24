<template>
  <div class="main" v-if="startTest">
    <h1 class="title">{{ title }}</h1>
    <div class="container">
      <div class="box-record">
          <div class="time-record">
            <p class="txt-time"><span>{{cronometro.minutos}}</span> : <span>{{cronometro.segundos}}</span> : <span>{{cronometro.centesimas}}</span></p>
          </div>
          <div class="success-record">
            <p class="txt-success"><span>{{item_current +1}}</span>/<span>{{data_test.length}}</span></p>
          </div>
        </div>
        <div class="box-test">
          <test-item :data="data_test[item_current]" :info="info_item" v-if="!confir_result.state_message" :BtnDisable="IsBtnItemDisable"/>
          <message :message="confir_result.msg" v-else :class="{'answer-success' : confir_result.isSuccess, 'answer-fail': confir_result.isFail}"/>
          <btn v-if="confir_result.btn_state===0" :txt="btn_txt" class="btn" v-on:click.native="ConfirResult" :disabled="!disabled"/>
          <btn v-else-if="confir_result.btn_state===1" :txt="btn_txt1" class="btn" v-on:click.native="nextItem"/>
          <btn v-else-if="confir_result.btn_state===2" :txt="btn_txt2" class="btn" v-on:click.native="getScoreTotal"/>
          <btn v-else :txt="btn_txt3" class="btn" v-on:click.native="finishTest"/>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import Btn from '@/components/ui/Button';
  import TestItem from '@/components/ui/TestItem';
  import Message from '@/components/ui/Message';

  export default {
    name: 'test-running',
    computed: {
      ...mapGetters(['disabled']),
      ...mapState(['IsBtnItemDisable', 'data_test', 'info_item', 'item_current', 'confir_result', 'cronometro', 'startTest']),
    },
    components: {
      Btn,
      TestItem,
      Message,
    },
    created() {
      if (!this.startTest) {
        this.$router.push('/');
      } else {
        this.$store.dispatch('CHANGE_STATE_BTN');
        this.cronometroStart();
      }
    },
    destroyed() {
      if (!this.IsBtnItemDisable) {
        this.$store.dispatch('CHANGE_STATE_BTN');
      }
    },
    data: () => ({
      title: 'Test de Aptitud Numérica - Evaluacion',
      btn_txt: 'CALIFICAR',
      btn_txt1: 'CONTINUAR',
      btn_txt2: 'ACEPTAR',
      btn_txt3: 'TERMINAR',
    }),
    methods: {
      ConfirResult() {
        this.$store.dispatch('getScoreItem');
      },
      nextItem() {
        this.$store.dispatch('setNextItem');
      },
      getScoreTotal() {
        this.$store.dispatch('getScoreTotal');
      },
      finishTest() {
        this.$store.dispatch('finishTest');
        this.$router.push('/');
      },
      cronometroStart() {
        this.$store.dispatch('cronometroStart');
      },
    },
  };
</script>

<style scoped>
   .answer-success{
    background: rgba(26, 255, 178, .13);
    color: #1AE1B2;
  }
  .answer-fail{
    background: rgba(255,4,4,.13);
    color: #FF0404;
  }
  .box-test {
    border-radius: 4px;
    width: 563px;
    height: 248px;
    box-shadow: rgba(0,0,0,.16) 0 3px 6px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
  .box-record {
    display: flex;
  }
  .success-record, .time-record {
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0,0,0,.23) 0 1px 1px;
  }
  .time-record {
    background: #1AE1B2;
    width: 319px;
  }
  .success-record {
    width: 128px;
    margin-left: 5px;
    background: #DAE11A;
  }
  .container {
    width: 733px;
    padding: 4%;
    box-shadow: rgba(0,0,0,.16) 0 2px 3px;
  }
  .title {
    font-family: 'Segoe UI';
    font-size: 30px;
    color: #707070;
    font-weight: normal;
  }
  .main {
    margin: 3%;
  }
   @media (min-width: 320px) and (max-width: 480px) {
     .box-record {
       display: flex;
       align-items: center;
       justify-content: center;
     }
     .success-record {
       height: 70px;
       width: 70px;
     }
     .time-record {
       width: 210px;
       height: 70px;
     }
     .box-test {
       height: 200px;
       width: auto;
       margin-left: 2%;
       margin-right: 2%;
       min-width: 90%;
     }

     .main {
       margin-left: auto;
       margin-right: auto;
       width: 98%;
     }
     .container {
       width: 100%;
       padding: 20px 0;
     }
     .title{
       font-size: 20px;
       font-weight: bold;
       margin: 0;
     }
     .btn {
       bottom: 5px;
     }
   }
</style>
