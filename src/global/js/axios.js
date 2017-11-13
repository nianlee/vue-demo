import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$ajax = function ajax(config) {
  return axios(config);
};

export default Vue;
