const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imgSrc: "./",
        }
    }
}).mount('#app')