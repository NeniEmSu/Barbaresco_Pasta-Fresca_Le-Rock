<template>
  <div>
    <b-card
      :img-src="require(`~/assets/img/${imageshowcase + '.png'}`)"
      :img-alt="showcasealt"
      img-top
      tag="article"
      style="max-width: 350px; min-width: 350px;"
      class="mb-2  homeNavCard"
    >
      <div class="cardContent">
        <div class="card-log mx-auto text-center">
          <b-img
            class="mx-auto"
            :src="require(`~/assets/img/${logo + '.svg'}`)"
            :alt="logoalt"
          ></b-img>
        </div>
        <b-card-text class="cardDescription">
          {{ details }}
        </b-card-text>
        <div class="text-center goTosite">
          <b-button class="mx-auto goToSiteBtn" :to="sitelink"
            >Перейти до закладу</b-button
          >
        </div>
        <div class="text-center ">
          <b-button class="socialButtons instagram mx-auto" :href="instalink">
            <b-img
              class="inButtonImg "
              src="~assets/img/instagram.svg"
              alt="instagram text"
            ></b-img>
          </b-button>
          <b-button
            class="socialButtons facebook mx-auto"
            target="_blank"
            :href="faceblink"
          >
            <b-img
              class="inButtonImg "
              target="_blank"
              src="~assets/img/facebook.svg"
              alt="facebook text"
            ></b-img>
          </b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    imageshowcase: {
      type: String,
      required: true
    },
    showcasealt: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    logoalt: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    sitelink: {
      type: String,
      required: true
    },
    instalink: {
      type: String,
      required: true
    },
    faceblink: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.homeNavCard {
  background: #0a0a0a;
  box-shadow: 0px 15px 45px rgba(0, 0, 0, 0.55);
  border: 0;
}

.cardContent {
  padding: 35px 15px;
}

.card-log,
.card-log img {
  height: 80px;
  width: 160px;
  margin-bottom: 35px;
}

.cardDescription {
  height: 94px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #ffffff;
}

.goTosite {
  margin-bottom: 10px;
}

.goToSiteBtn {
  border: 2px solid #ffffff;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  padding: 14px 50px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;

  &:hover {
    border: 3px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;

    background: #ffffff;
    color: #000000;
  }
}

.socialButtons {
  border: 2px solid #ffffff;
  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  &.instagram {
    margin: 10px auto;
    padding: 10px 25px;
    -webkit-transition: 500ms;
    -moz-transition: 500ms;
    -o-transition: 500ms;
    transition: 500ms;

    .inButtonImg {
      width: 80px;
      height: 28px;
    }
  }

  &.instagram:hover {
    background-image: -moz-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background-image: -webkit-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background-image: linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
  }

  &.facebook {
    margin: 10px auto;
    padding: 12px 25px;
    -webkit-transition: background-color 500ms ease-out;
    -moz-transition: background-color 500ms ease-out;
    -o-transition: background-color 500ms ease-out;
    transition: background-color 500ms ease-out;

    .inButtonImg {
      width: 80px;
      height: 20px;
    }
  }

  &.facebook:hover {
    background-color: #395795;
  }
}

.inButtonImg {
  width: 80px;
  height: 20px;
}
</style>
