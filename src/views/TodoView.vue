<template>
  <div>
    <h1>To-Do List</h1>

    <div class="my-4 flex flex-row items-center justify-start gap-x-4 rounded-xl bg-white p-2.5">
      <input
        class="h-5 w-5 rounded border-0 bg-gray-200 font-semibold text-zinc-800 focus:ring-0 focus:ring-transparent"
        type="checkbox" />
      <input
        class="border-0 bg-transparent p-0 font-semibold text-zinc-800 ring-0 placeholder:font-normal
          focus:border-0 focus:outline-hidden focus:ring-0"
        v-model="newTask"
        type="text"
        placeholder="Add a new task"
        @keyup.enter="addTask" />
      <button
        class=""
        @click="addTask">
        Add
      </button>
    </div>

    <ul class="flex flex-col gap-y-2">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="flex flex-row items-center justify-start gap-x-4 rounded-xl bg-white p-2.5">
        <input
          class="h-5 w-5 rounded border-0 bg-gray-200 text-zinc-800 focus:ring-0 focus:ring-transparent"
          type="checkbox"
          v-model="task.completed" />
        <span
          class="relative font-semibold text-zinc-800 after:absolute after:left-0 after:top-1/2 after:h-[2px]
            after:-translate-y-1/2 after:transform after:bg-zinc-800 after:transition-all after:duration-500
            after:ease-in-out"
          :class="task.completed ? 'after:w-full' : 'after:w-0'">
          {{ task.text }}
        </span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [
        { text: 'Sample Task 1', completed: false },
        { text: 'Sample Task 2', completed: true }
      ]
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask.trim(), completed: false })
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style scoped></style>
