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
        changeImg(imgOne, imgTwo) {
            if (imgOne === display-block) {
                imgOne = display-none
                imgTwo = display-block
            } else if (imgTwo === display-block) {
                imgOne = display-block
                imgTwo = display-none
            } else {
                imgOne = display-block
                imgTwo = display-none
            }
            }
        },
}).mount('#app')