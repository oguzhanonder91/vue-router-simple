<script>
  import UserItem from './UserItem';

  export default {
    name: 'Home',
    components: { UserItem },
    data() {
      return {
        users: [],
      };
    },
    created() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((users) => {
          this.users = users;
        });
    },
  };
</script>

<template>
  <div>
    <div v-bind:key="user.id" v-for="user in users">
      <UserItem :user="user"></UserItem>
    </div>

  </div>
</template>


<style scoped>

</style>
