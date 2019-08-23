<i18n>
{
  "uk": {"home": {"siteButtonTxt": "Перейти до закладу"}  },

  "en": {"home": {"siteButtonTxt": "Go to the institution"} },

  "ru": {"home": {"siteButtonTxt": "Перейти до закладу"} }
}

</i18n>

<template>

  <b-card
    :img-src="require(`~/assets/img/${imageshowcase + '.jpg'}`)"
    :img-alt="showcasealt"
    img-top
    tag="article"
    style=""
    class="mb-2 ml-md-4 mx-auto homeNavCard"
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
        <b-button
          class="mx-auto goToSiteBtn"
          :to="localePath({name: sitelink},$i18n.locale)"
        >{{ $t('home.siteButtonTxt') }}</b-button>
      </div>
      <div class="text-center ">
        <b-button
          class="socialButtons instagram mx-auto"
          :href="instalink"
        >
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
    siteLink: {
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

.card {
  max-width: 350px;
  width: 100%;
  min-width: 350px;
}

.cardContent {
  padding: 15px 5px;
}

.card-body {
  padding: 0;
}

.card-log,
.card-log img {
  height: 80px;
  width: 160px;
  margin-bottom: 35px;
  object-fit: scale-down;
}

.cardDescription {
  height: 94px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: $lightColor;
}

.goTosite {
  margin-bottom: 10px;
}

.goToSiteBtn {
  border: 2px solid $lightColor;
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

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: $lightColor;

  &:hover {
    border: 3px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;

    background: $lightColor;
    color: #000000;
  }
}

.socialButtons {
  border: 2px solid $lightColor;
  border-radius: 0;
  box-sizing: border-box;

  background-color: transparent;

  &.instagram {
    margin: 10px auto;
    padding: 10px 25px;
    transition: 500ms ease-in-out;

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

@media (max-width: 1440px) {
  .card {
    max-width: 275px;
    width: 100%;
    min-width: 275px;
  }

  .card-image-top {
    height: 150px;
  }

  .card-log,
  .card-log img {
    height: 50px;
    width: 100px;
    margin-bottom: 35px;
  }

  .cardDescription {
    height: 60px;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }

  .cardContent {
    padding: 16px 10px;
  }

  .goTosite {
    margin-bottom: 10px;
  }

  .goToSiteBtn {
    padding: 14px 25px;
  }

  .socialButtons {
    &.instagram {
      padding: 10px 18px;

      .inButtonImg {
        width: 70px;
        height: 24px;
      }
    }

    &.facebook {
      padding: 12px 15px;

      .inButtonImg {
        width: 70px;
        height: 14.82px;
      }
    }
  }

  .inButtonImg {
    width: 70px;
  }
}
</style>
