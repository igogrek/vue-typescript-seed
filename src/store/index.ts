import Vue from 'vue'
import Vuex from 'vuex'

import {DELETE_LABEL, EDIT_LABEL, SET_LABELS} from './mutation-types'
import {ILabel} from '../shared/interfaces/ILabel';

Vue.use(Vuex)

interface ILabelsState {
  labels: ILabel[];
  loading: boolean;
}

export default new Vuex.Store({
  state: {
    labels: [],
    loading: true
  },
  mutations: {
    [SET_LABELS](state: ILabelsState, payload) {
      state.labels = payload;
      state.loading = false;
    },
    [DELETE_LABEL](state: ILabelsState, index: number) {
      state.labels.splice(index, 1)
    },
    [EDIT_LABEL](state: ILabelsState, payload) {
      Vue.set(state.labels, payload.index, payload.row)
    },
  },
})
