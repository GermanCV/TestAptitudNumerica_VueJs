<template>
  <div class="box-item">
    <p class="result">{{data.result}}</p>
    <span class="operator1">=</span>
    <p class="number1">{{data.number1}}</p>
    <div v-if="optionVisible1">
      <button-operator :icon="info.icon_1" v-on:click.native="showOption1" :disabled="BtnDisable"/>
    </div>
    <div v-else class="box-option">
      <button-operator :icon="info.icon1" v-on:click.native="selectOperator1"/>
      <button-operator :icon="info.icon2" v-on:click.native="selectOperator2"/>
      <button-operator :icon="info.icon3" v-on:click.native="selectOperator3"/>
      <button-operator :icon="info.icon4" v-on:click.native="selectOperator4"/>
    </div>
    <p class="number2">{{data.number2}}</p>
    <div v-if="optionVisible2">
      <button-operator :icon="info.icon_2" v-on:click.native="showOption2" :disabled="BtnDisable"/>
    </div>
    <div v-else class="box-option">
      <button-operator :icon="info.icon1" v-on:click.native="selectOperator1"/>
      <button-operator :icon="info.icon2" v-on:click.native="selectOperator2"/>
      <button-operator :icon="info.icon3" v-on:click.native="selectOperator3"/>
      <button-operator :icon="info.icon4" v-on:click.native="selectOperator4"/>
    </div>
    <p class="number3">{{data.number3}}</p>
  </div>
</template>

<script>
  import ButtonOperator from '@/components/ui/ButtonOperator';

  export default {
    name: 'test-item',
    components: {
      ButtonOperator,
    },
    props: ['data', 'info', 'BtnDisable'],
    data: () => ({
      optionVisible1: true,
      optionVisible2: true,
    }),
    methods: {
      showOption1() {
        this.optionVisible1 = false;
        this.$store.dispatch('CHANGE_STATE_BTN');
      },
      showOption2() {
        this.optionVisible2 = false;
        this.$store.dispatch('CHANGE_STATE_BTN');
      },
      initilAll() {
        this.optionVisible1 = true;
        this.optionVisible2 = true;
        this.$store.dispatch('CHANGE_STATE_BTN');
      },
      selectOperator1() {
        const optionVisible1 = this.optionVisible1;
        const optionVisible2 = this.optionVisible2;
        this.$store.dispatch('selectOperator1', { optionVisible1, optionVisible2 });
        this.initilAll();
      },
      selectOperator2() {
        const optionVisible1 = this.optionVisible1;
        const optionVisible2 = this.optionVisible2;
        this.$store.dispatch('selectOperator2', { optionVisible1, optionVisible2 });
        this.initilAll();
      },
      selectOperator3() {
        const optionVisible1 = this.optionVisible1;
        const optionVisible2 = this.optionVisible2;
        this.$store.dispatch('selectOperator3', { optionVisible1, optionVisible2 });
        this.initilAll();
      },
      selectOperator4() {
        const optionVisible1 = this.optionVisible1;
        const optionVisible2 = this.optionVisible2;
        this.$store.dispatch('selectOperator4', { optionVisible1, optionVisible2 });
        this.initilAll();
      },
    },
  };
</script>

<style scoped>
  .box-option {
    display: flex;
  }
  .box-item{
    width: 380px;
    border-radius: 2px;
    height: 64px;
    box-shadow: rgba(0,0,0,0.16) 0 1px 1px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    font-size: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
   .result, .number1, .number2, .number3 {
    font-size: 30px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .result, .number1, .number2, .number3 {
      font-size: 20px;
    }
    .box-item{
      min-width: 250px;
      width: auto;
      padding-left: 4px;
      padding-right: 4px;
      display: flex;
      flex-wrap: nowrap;
    }
  }
</style>
