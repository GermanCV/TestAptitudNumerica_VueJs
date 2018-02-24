import Vue from 'vue';
import Vuex from 'vuex';

import { actions } from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    IsBtnItemDisable: true,
    data_test: [],
    score: { successItems: 0, itemTotal: 0, minutes: '00', seconds: '00', centesimas: '00' },
    cronometro: {
      centesimas: '00',
      segundos: '00',
      minutos: '00',
    },
    info_item: { icon_1: 'fullscreen_exit',
      icon_2: 'fullscreen_exit',
      icon1: 'add',
      icon2: 'remove',
      icon3: 'close',
      icon4: 'more_vert',
      op1: false,
      op2: false,
    },
    item_current: 0,
    confir_result: {
      state_message: false,
      isSuccess: false,
      isFail: false,
      msg: 'Message!',
      btn_state: 0,
    },
    stopcronometro: false,
    startTest: false,
  },
  actions,
  mutations,
  getters,
  modules: {
  },
});

export default store;
