<script>
  export default {
    name: 'UserItem',
    props: {
      user: { type: Object, required: true },
    },
    computed: {
      userLink() {
        return `/user/${this.user.id}`;
      },
    },
  };
</script>

<template>
  <div>
    <p>
      <router-link :to="userLink">{{user.name}} @{{user.username}}</router-link>
    </p>
  </div>
</template>

<style scoped>

</style>
