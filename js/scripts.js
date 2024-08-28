const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'HELLO WORLD!',
        photo: 'https://citynews-today.stgy.ovh/~media/horizontal-mid/52863484628788/gatto-41.jpg'
      }
    }
}).mount('#js-mount')