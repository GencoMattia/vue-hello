const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imgSrc: "https://marketplace.canva.com/EAEMDhEGHCE/1/0/1600w/canva-cat-before-coffee-after-coffee-two-photos-and-text-meme-QZiqeDqC-q4.jpg",
        }
    }
}).mount('#app')