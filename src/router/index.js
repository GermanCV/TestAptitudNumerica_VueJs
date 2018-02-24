import Vue from 'vue';
import Router from 'vue-router';
import Test from '@/components/Test';
import TestRunning from '@/components/TestRunning';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test,
    },
    {
      path: '/test',
      name: 'TestRunning',
      component: TestRunning,
    },
  ],
});
