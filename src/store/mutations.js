export default {
  CHANGE_STATE_BTN(state) {
    state.IsBtnItemDisable = !state.IsBtnItemDisable;
  },
  GENERATE_DATA_TEST: (state) => {
    state.startTest = true;
    for (let i = 0; i < 5; i += 1) {
      const number1 = Math.floor((Math.random() * (10 - 5)) + 1);
      const number2 = Math.floor((Math.random() * (10 - 5)) + 1);
      const number3 = Math.floor((Math.random() * (10 - 5)) + 1);
      const possible = '-+*/';
      for (let e = 0; e < 1; e += 1) {
        const operator1 = possible.charAt(Math.floor(Math.random() * possible.length));
        const operator2 = possible.charAt(Math.floor(Math.random() * possible.length));
        const result1 = number1 + operator1 + number2 + operator2 + number3;
        const tem = eval(result1);
        const result = parseFloat(Intl.NumberFormat('en', {
          maximumFractionDigits: 2,
          useGrouping: false,
        }).format(tem));
        state.data_test.push({ number1, number2, number3, operator1, operator2, result, result1 });
      }
    }
  },
  SELECT_OPERATOR1: (state, payload) => {
    if (!payload.optionVisible1) {
      state.info_item.icon_1 = 'add';
      state.data_test[state.item_current].answer_operator1 = '+';
      state.info_item.op1 = true;
    } else {
      state.info_item.icon_2 = 'add';
      state.data_test[state.item_current].answer_operator2 = '+';
      state.info_item.op2 = true;
    }
  },
  SELECT_OPERATOR2: (state, payload) => {
    if (!payload.optionVisible1) {
      state.info_item.icon_1 = 'remove';
      state.data_test[state.item_current].answer_operator1 = '-';
      state.info_item.op1 = true;
    } else {
      state.info_item.icon_2 = 'remove';
      state.data_test[state.item_current].answer_operator2 = '-';
      state.info_item.op2 = true;
    }
  },
  SELECT_OPERATOR3: (state, payload) => {
    if (!payload.optionVisible1) {
      state.info_item.icon_1 = 'close';
      state.data_test[state.item_current].answer_operator1 = '*';
      state.info_item.op1 = true;
    } else {
      state.info_item.icon_2 = 'close';
      state.data_test[state.item_current].answer_operator2 = '*';
      state.info_item.op2 = true;
    }
  },
  SELECT_OPERATOR4: (state, payload) => {
    if (!payload.optionVisible1) {
      state.info_item.icon_1 = 'more_vert';
      state.data_test[state.item_current].answer_operator1 = '/';
      state.info_item.op1 = true;
    } else {
      state.info_item.icon_2 = 'more_vert';
      state.data_test[state.item_current].answer_operator2 = '/';
      state.info_item.op2 = true;
    }
  },
  GET_SCORE_ITEM: (state) => {
    const item = state.data_test[state.item_current];
    const evalResul1 = item.number1 +
      item.answer_operator1 + item.number2 + item.answer_operator2 + item.number3;
    const tem = eval(evalResul1);
    const evalResul = parseFloat(Intl.NumberFormat('en', {
      maximumFractionDigits: 2,
      useGrouping: false,
    }).format(tem));
    item.eval_result = evalResul;
    if (evalResul === item.result) {
      state.confir_result.isFail = false;
      state.confir_result.isSuccess = true;
      state.confir_result.msg = 'Tu respuesta es CORRECTA!';
      item.answersuccess = true;
    } else {
      state.confir_result.isSuccess = false;
      state.confir_result.isFail = true;
      state.confir_result.msg = 'Tu respuesta es INCORRECTA!';
      item.answersuccess = false;
    }
    state.confir_result.state_message = true;
    if (state.item_current < (state.data_test.length - 1)) {
      state.confir_result.btn_state = 1;
    } else {
      state.confir_result.btn_state = 2;
    }
  },
  SET_NEXT_TEST: (state) => {
    state.item_current += 1;
    state.confir_result.state_message = false;
    state.confir_result.btn_state = 0;
    state.info_item.icon_1 = 'fullscreen_exit';
    state.info_item.icon_2 = 'fullscreen_exit';
    state.info_item.op1 = false;
    state.info_item.op2 = false;
  },
  GET_SCORE_TOTAL: (state) => {
    const successItems = state.data_test.filter(data => data.answersuccess === true).length;
    state.score.successItems = successItems;
    state.score.itemTotal = state.data_test.length;
    if (successItems > 13) {
      state.confir_result.isFail = false;
      state.confir_result.isSuccess = true;
    } else {
      state.confir_result.isFail = true;
      state.confir_result.isSuccess = false;
    }
    state.confir_result.msg = `Acertaste ${successItems} de ${state.data_test.length}`;
    state.confir_result.btn_state = 3;
    state.stopcronometro = true;
  },
  FINISH_TEST: (state) => {
    // DEFAULT VALUES STATE
    state.data_test = [];
    state.item_current = 0;
    state.startTest = false;
    state.stopcronometro = false;
    const cron = state.cronometro;
    cron.minutos = 0;
    cron.segundos = 0;
    cron.centesimas = 0;
    state.confir_result.state_message = false;
    state.confir_result.btn_state = 0;
    state.IsBtnItemDisable = true;
    //  Default info items
    state.info_item.icon_1 = 'fullscreen_exit';
    state.info_item.icon_2 = 'fullscreen_exit';
    state.info_item.icon1 = 'add';
    state.info_item.icon2 = 'remove';
    state.info_item.icon3 = 'close';
    state.info_item.icon4 = 'more_vert';
    state.info_item.op1 = false;
    state.info_item.op2 = false;
  },
  CRONOMETRO_START: (state) => {
    let centesimas = 0;
    let segundos = 0;
    let minutos = 0;
    const control = setInterval(() => {
      if (centesimas < 99) {
        centesimas += 1;
        if (centesimas % 4.5 === 0) {
          state.cronometro.centesimas = Intl.NumberFormat('en', { minimumIntegerDigits: 2 }).format(centesimas);
        }
      }
      if (centesimas === 99) {
        centesimas = -1;
      }
      if (centesimas === 0) {
        segundos += 1;
        state.cronometro.segundos = Intl.NumberFormat('en', { minimumIntegerDigits: 2 }).format(segundos);
      }
      if (segundos === 59) {
        segundos = -1;
      }
      if (centesimas === 0 && segundos === 0) {
        minutos += 1;
        state.cronometro.minutos = Intl.NumberFormat('en', { minimumIntegerDigits: 2 }).format(minutos);
      }
      if (state.stopcronometro) {
        clearInterval(control);
        state.score.centesimas = state.cronometro.centesimas;
        state.score.seconds = state.cronometro.segundos;
        state.score.minutes = state.cronometro.minutos;
      }
    }, 10);
    control;
  },
};
