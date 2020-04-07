import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import UserProfile from '../components/UserProfile';
import UserPosts from '../components/UserPosts';


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/', component: Home, name: 'home',
    },
    {
      path: '/user/:id', component: UserProfile, name: 'userProfile',
    },
    {
      path: '/user/:userId/posts', component: UserPosts,
    },

  ],
  mode: 'history',

});

export default router;
