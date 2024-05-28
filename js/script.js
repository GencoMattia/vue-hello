const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imgSrc: "./img/cat-before.jpg",
            imgSrcTwo: "./img/cat-after.jpg",
            imgOneDisplay: "display-block",
            imgTwoDisplay: "display-none",
        }
    },

    methods: {
        changeImg(imgKey1, imgKey2) {
                if (this[imgKey1] === "display-block") {
                    this[imgKey1] = "display-none";
                    this[imgKey2] = "display-block";
                } else {
                    this[imgKey1] = "display-block";
                    this[imgKey2] = "display-none";
                }
            }
        },
}).mount('#app')