<template>
  <div>
    <!-- From State -->
    {{ this.$store.state.todos.name }}
    <!-- From Map Getter -->
    {{ getName }}

    <!-- Mutation -->
    <input type="text" v-model="name" /> <button @click="add">Add</button>

    <button @click="change('Aung Paing Soe Change Name')">Change Name</button>

    <button @click="action" class="btn btn-primary">action</button>

    <h1 class="animate__animated animate__bounce">An animated element</h1>

    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      name: '',
    }
  },
  name: 'IndexPage',
  computed: {
    ...mapGetters('todos', ['getName']),
  },
  methods: {
    add() {
      this.$store.commit('todos/add', this.name)
    },
    ...mapMutations({
      change : 'todos/changeName'
    }),
    action() {
      this.$store.dispatch('todos/alert','Hello')
    }
  },
}
</script>
