<template>
  <div class="hero-body p-0 container">
    <div class="ml-0 mr-0 column is-12" id="flex">
      <div
        class="
          info-container
          is-vcentered
          columns
          is-multiline
          has-padding-desktop-section
        "
      >
        <div class="info-left column is-12 is-5-desktop container main">
          <div class="box is-size-1 is-size-3-mobile info mb-0">
            <h1 class="is-size-3 has-text-weight-bold is-extra-bold">
              ProjectOasis?
            </h1>
            <p class="is-size-6 text-center">
              As a group of gaming enthusiasts, it has always been a dream to
              create an ecosphere where everyone can come together to interact,
              play, compete and to grow together in a world where no one can
              judge us! Hence, the metaverse of OASIS is born!
            </p>
          </div>
          <div class="columns is-centered is-hidden-mobile">
            <div class="column is-flex is-justify-content-center pt-3 pb-0">
              <div class="box whats-new is-transparent-bg">
                <span class="is-size-4 is-extra-bold">Whats New?</span>
              </div>
            </div>
          </div>
          <div class="is-hidden-mobile background-carousel">
            <div class="home-slide">
              <!-- <vueper-slides
                :class="{
                  offsetslidefirst: first_slide,
                  offsetslidelast: last_slide,
                }"              
                class="no-shadow"
                :visible-slides="3"
                slide-multiple
                :gap="4"
                :slide-ratio="1 / 4"
                :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
              > -->
              <vueper-slides
                class="no-shadow"
                :visible-slides="3"
                :slide-ratio="1 / 4"
                :dragging-distance="35"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
              >
                <vueper-slide
                  v-for="(slide, i) in items"
                  :key="i"
                  :image="slide.image"
                />
              </vueper-slides>
            </div>

            <div class="container-series is-flex is-justify-content-center">
              <p
                style="font-size: 1em !important"
                class="is-extra-bold has-text-black"
              >
                Series 1 Attributed NFT Sale
              </p>
            </div>
          </div>
        </div>
        <div class="info-right column is-12 is-7-desktop">
          <div class="is-flex is-justify-content-center">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_2zgudqrp/Oasis-Character-1.json"
              background="transparent"
              speed="0.5"
              style="width: 500px; height: 500px"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="container-social is-transparent-bg">
            <div
              class="
                is-flex is-justify-content-center
                m-3
                pt-3
                is-transparent-bg
              "
            >
              <div
                class="
                  columns
                  is-vcentered is-multiline is-mobile is-transparent-bg
                "
              >
                <div
                  class="
                    play-now
                    column
                    is-4-desktop is-12-mobile
                    buy-apeswap
                    pr-6
                    is-transparent-bg
                  "
                >
                  <a
                    target="_blank"
                    href="https://game.projectoasis.io/"
                    class="
                      button
                      home-btn
                      play
                      is-hidden-mobile is-transparent-bg
                    "
                  >
                    <span class="icon">
                      <img src="@/assets/img/button/icon/play.png" />
                    </span>
                    <span class="title-btn"> Play Now! </span>
                  </a>
                </div>
                <div
                  class="
                    column
                    is-4-desktop is-12-mobile
                    buy-apeswap
                    pr-6
                    is-transparent-bg
                  "
                >
                  <a
                    class="button home-btn is-transparent-bg"
                    target="__blank"
                    href="https://app.apeswap.finance/swap?outputCurrency=0xb19289b436b2f7a92891ac391d8f52580d3087e4"
                  >
                    <span class="icon">
                      <img src="@/assets/img/button/icon/apeswap.png" />
                    </span>
                    <span class="title-btn"> Buy on APESWAP </span>
                  </a>
                </div>
                <div
                  class="
                    column
                    is-4-desktop is-12-mobile
                    buy-apeswap
                    pr-6
                    is-transparent-bg
                  "
                >
                  <a
                    target="_blank"
                    class="button home-btn is-transparent-bg"
                    href="https://pancakeswap.finance/swap?outputCurrency=0xb19289b436b2F7A92891ac391D8f52580d3087e4"
                  >
                    <span class="icon">
                      <img src="@/assets/img/button/icon/pancake.png" />
                    </span>
                    <span class="title-btn"> Buy on Pancake </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
                is-flex is-justify-content-center
                m-3
                pt-5
                mt-5
                is-hidden-mobile
              "
            >
              <div class="social-container">
                <div class="columns">
                  <div class="column">
                    <a
                      href="https://www.instagram.com/projectoasis.io/"
                      target="_blank"
                    >
                      <figure class="image is-48x48">
                        <img src="@/assets/img/icon/social/IG.png" />
                      </figure>
                    </a>
                  </div>
                  <div class="column">
                    <a
                      href="https://twitter.com/ProjectOasis_"
                      target="_blank"
                    >
                      <figure class="image is-48x48">
                        <img src="@/assets/img/icon/social/twitter.png" />
                      </figure>
                    </a>
                  </div>
                  <div class="column">
                    <a
                      href="https://discord.gg/478NAfvXre"
                      target="_blank"
                    >                    
                    <figure class="image is-48x48">
                      <img src="@/assets/img/icon/social/discord.png" />
                    </figure>
                    </a>
                  </div>
                  <div class="column">
                    <a
                      href="https://projectoasis.medium.com/"
                      target="_blank"
                    >
                    <figure class="image is-48x48">
                      <img src="@/assets/img/icon/social/medium.png" />
                    </figure>
                    </a>
                  </div>
                  <div class="column">
                    <a
                      href="https://t.me/projectoasis_official"
                      target="_blank"
                    >
                      <figure class="image is-48x48">
                        <img src="@/assets/img/icon/social/tele.png" />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueCardCarousel } from "vue-card-carousel";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    VueCardCarousel,
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      // nextSlide: [],
      arrow: true,
      arrowHover: false,
      drag: true,
      gray: false,
      opacity: false,
      values: 1,
      perList: 3,
      increment: 1,
      repeat: false,
      items: [
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },

        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
        { image: require("@/assets/img/container/slider/list/slider.png") },
      ],
    };
  },
  methods: {
    // beforeSlide(eventName, params) {
    //   this.first_slide = params.nextSlide.index === 0;
    //   this.last_slide = params.nextSlide.index === this.slides.length - 1;
    // },
  },
};
</script>
<style lang="scss">
@import "../assets/css/home.css";
</style>