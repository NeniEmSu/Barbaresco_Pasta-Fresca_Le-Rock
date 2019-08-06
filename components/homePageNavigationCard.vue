<template>
  <div>
    <b-card
      :img-src="require(`~/assets/img/${imageshowcase + '.png'}`)"
      :img-alt="showcasealt"
      img-top
      tag="article"
      style="max-width: 350px;"
      class="mb-2 homeNavCard"
    >
      <div class="cardContent">
        <div class="card-log mx-auto text-center">
          <b-img-lazy
            class="mx-auto"
            :src="require(`~/assets/img/${logo + '.svg'}`)"
            :alt="logoalt"
          ></b-img-lazy>
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
            <b-img-lazy
              class="inButtonImg "
              src="~assets/img/instagram.svg"
              alt="instagram text"
            ></b-img-lazy>
          </b-button>
          <b-button
            class="socialButtons facebook mx-auto"
            target="_blank"
            :href="faceblink"
          >
            <b-img-lazy
              class="inButtonImg "
              src="~assets/img/facebook.svg"
              alt="facebook text"
            ></b-img-lazy>
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

.card-log {
  height: 80px;
  width: 160px;
  margin-bottom: 35px;
}

.cardDescription {
  font-family: Roboto;
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
  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  padding: 14px 55px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;

  &:hover {
    background: #ffffff;
    color: #000000;
  }
}

.socialButtons {
  border: 2px solid #ffffff;
  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  padding: 14px 25px;

  &.instagram {
    margin: 10px auto;
  }

  &.instagram:hover {
    background: -moz-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background: -webkit-linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );
    background: linear-gradient(
      69.74deg,
      #fdd276 -7.77%,
      #e1585f 55.36%,
      #a741b6 106.84%
    );

    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  &.facebook {
    margin: 10px auto;
  }

  &.facebook:hover {
    background-color: #395795;
  }
}

.inButtonImg {
  width: auto;
  height: 20px;
}
</style>
