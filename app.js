const vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            circleSize: 150,

        }
    },
    computed: {
        circleClasses() {
            return { purple: this.isPurple}
        }, 
    }
}).mount("#app")