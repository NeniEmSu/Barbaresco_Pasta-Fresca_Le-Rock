<template>
  <div id="about-us">
    <div class="row">
      <div class="col-md-6 p-0 image-container">

      </div>
      <div class="col-md-6 m-auto p-5">
        <h1>Про нас</h1>
        <p>Barbaresco City Cafe затишний та світлий заклад, розташоване неподалік від центру міста. Відкритий з 2016 року. Щодня нас відвідує понад тисяча гостей, яких ми радо зустрічаємо та даруємо можливість відволіктись від міської метушні, насолодитись смачними стравами та освіжаючими напоями. Заклад пропонує страви європейської та японської кухні за доступними цінами. Привітний та обізнаний персонал завжди швидко та влучно допоможе обрати страви, які будуть вам до смаку.</p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'about-us',
  layout: 'barbaresco',
  components: {

  },
  meta: {
    animation: "overlay-down-full"
  },
  head () {
    return {
      title: "Barbaresco - About us".slice(
        0,
        60
      ),
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Barbaresco - About us.".slice(
            0,
            320
          )
        }
      ]
    }
  },

  data () {

    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.image-container {
  height: calc(100vh - 120px);
  background-image: url("~assets/img/barbarescoAboutUs.png");
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  font-family: $primaryFont;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 106px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #000000;
}

p {
  font-family: $mainFont;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 140.4%;

  color: #000000;
}
</style>
