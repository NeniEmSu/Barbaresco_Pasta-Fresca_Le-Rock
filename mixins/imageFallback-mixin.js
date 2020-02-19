export default {
  methods: {
    setFallbackImageUrl (event) {
      // event.target.src = 'https://via.placeholder.com/200x200'
      event.target.src = require(`~/assets/img/${'fallBackProductsImage' + '.jpg'}`)
    }
  }
}
