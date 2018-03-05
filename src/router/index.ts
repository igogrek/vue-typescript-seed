import Vue from 'vue';
import Router from 'vue-router';
import ButtonTest from '../components/example/ButtonTest.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ButtonTest',
      component: ButtonTest,
    },
  ],
});
