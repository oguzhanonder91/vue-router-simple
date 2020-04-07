<script>
  export default {
    name: 'UserProfile',
    data() {
      return {
        userData: {},
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        const url = `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`;
        fetch(url)
          .then(res => res.json())
          .then((user) => {
            this.userData = user;
          });
      },
      goBack() {
        return this.$router.push({ name: 'home' });
      },
      paramGoBack() {
        return this.$router.push({ name: 'userProfile', params: { id: 1 } });
      },
    },
    watch: {
      $route: 'fetchData',
    },
    computed: {
      postsLink() {
        return `/user/${this.$route.params.id}/posts`;
      },
      nextUserLink() {
        return `/user/${parseInt(this.$route.params.id, 10) + 1}`;
      },
    },
  };
</script>

<template>
  <div>
    <a @click="goBack">Go Back to user list</a>
    <a @click="paramGoBack">Param Go Back to user</a>

    <h1>{{userData.name}}</h1>
    <ul>
      <li>{{userData.phone}}</li>
      <li>{{userData.email}}</li>
      <li>{{userData.website}}</li>
      <router-link :to="postsLink" :id="userData.id">Posts</router-link>
      <router-link :to="nextUserLink" :id="userData.id">Next to user</router-link>

    </ul>
  </div>
</template>

<style scoped>

</style>
