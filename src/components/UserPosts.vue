<script>
  export default {
    name: 'UserPosts',
    data() {
      return {
        posts: [],
      };
    },
    created() {
      const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`;
      fetch(url)
        .then(res => res.json())
        .then((posts) => {
          this.posts = posts;
        });
    },
    computed: {
      userLink() {
        return `/user/${this.$route.params.userId}`;
      },
    },
  };
</script>

<template>
  <div>
    <router-link :to="userLink">Back to user</router-link>
    <div v-bind:key="post.id" v-for="post in posts">
      <h4>{{post.title}}</h4>
      <p>{{post.title}}</p>
      <hr/>
    </div>

  </div>
</template>

<style scoped>

</style>
