
  Vue.createApp({
    data() {
      return {
        newTask: '',
        tasks: []
      }
    },
    computed: {
      completedTasks() {
        return this.tasks.filter(task => task.completed);
      },
      notCompletedTasks() {
        return this.tasks.filter(task => !task.completed);
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ text: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      toggleCompleted(task) {
        task.completed = !task.completed;
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  }).mount('#app');