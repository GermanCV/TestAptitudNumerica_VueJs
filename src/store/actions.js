const actions = {
  CHANGE_STATE_BTN: ({ commit }) => {
    commit('CHANGE_STATE_BTN');
  },
  generateDatatest: ({ commit }) => {
    commit('GENERATE_DATA_TEST');
  },
  selectOperator1: ({ commit }, payload) => {
    commit('SELECT_OPERATOR1', payload);
  },
  selectOperator2: ({ commit }, payload) => {
    commit('SELECT_OPERATOR2', payload);
  },
  selectOperator3: ({ commit }, payload) => {
    commit('SELECT_OPERATOR3', payload);
  },
  selectOperator4: ({ commit }, payload) => {
    commit('SELECT_OPERATOR4', payload);
  },
  getScoreItem: ({ commit }) => {
    commit('GET_SCORE_ITEM');
  },
  setNextItem: ({ commit }) => {
    commit('SET_NEXT_TEST');
  },
  getScoreTotal: ({ commit }) => {
    commit('GET_SCORE_TOTAL');
  },
  finishTest: ({ commit }) => {
    commit('FINISH_TEST');
  },
  cronometroStart: ({ commit }) => {
    commit('CRONOMETRO_START');
  },
};
const a = 12;
export { actions, a };
