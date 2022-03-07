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
        style=""
      >
        <div
          class="
            info-left
            column
            is-12 is-5-desktop
            container
            main
            left-padding-mobile
          "
          style="padding-top: 5em"
        >
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
          <div class="is-flex is-justify-content-center pt-6 mt-6">
            <!-- <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_2zgudqrp/Oasis-Character-1.json"
              background="transparent"
              speed="0.5"
              style="width: 500px; height: 500px"
              loop
              autoplay
            ></lottie-player> -->
            <img src="@/assets/img/oasis-web-animatedrocky-2.gif" width="500" />
          </div>
          <div
            class="container-social is-transparent-bg"
            style="padding-top: 4em"
          >
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
                  container
                  is-flex is-justify-content-center
                "
              >
                <div
                  class="
                    play-now
                    column
                    is-4-desktop is-12-mobile
                    buy-apeswap
                    pr-1
                    is-transparent-bg
                  "
                >
                  <a
                    target="_blank"
                    href="https://game.projectoasis.io/"
                    class="button home-btn play is-transparent-bg"
                    style="height: 47px"
                  >
                    <span class="icon">
                      <img src="@/assets/img/button/icon/play.png" />
                    </span>
                    <span class="title-btn"> Play Now! </span>
                  </a>
                </div>
                <div
                  class="
                    play-now
                    column
                    is-4-desktop is-12-mobile
                    buy-apeswap
                    pr-1
                    is-transparent-bg
                  "
                >
                  <!-- <a
                    target="_blank"
                    class="
                      button
                      home-btn
                      play
                      is-transparent-bg
                    "
                  >
                    <span class="icon">
                      <img src="@/assets/img/button/icon/apeswap.png" />
                    </span>
                    <span class="title-btn"> Buy Now! </span>
                  </a> -->

                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button home-btn is-transparent-bg"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                        style="height: 47px"
                      >
                        <span class="icon">
                          <img src="@/assets/img/button/icon/apeswap.png" />
                        </span>
                        <span class="title-btn"> Buy Now! </span>
                      </button>
                    </div>
                    <div
                      class="dropdown-menu"
                      id="dropdown-menu-home"
                      role="menu"
                    >
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <a
                            target="_blank"
                            href="https://pancakeswap.finance/swap?outputCurrency=0xb19289b436b2F7A92891ac391D8f52580d3087e4"
                            class="button pancake-btn play is-transparent-bg"
                            style="width: 100% !important; height: 45px"
                          >
                          </a>

                          <a
                            target="_blank"
                            href="https://app.apeswap.finance/swap?outputCurrency=0xb19289b436b2f7a92891ac391d8f52580d3087e4"
                            class="button apeswap-btn play is-transparent-bg"
                            style="width: 100% !important; height: 40px"
                          >
                          </a>

                          <!-- <a class="button is-info is-outlined is-fullwidth" target="_blank" href="https://app.apeswap.finance/swap?outputCurrency=0xb19289b436b2f7a92891ac391d8f52580d3087e4">Apeswap</a>
                          <a class="button is-danger is-outlined is-fullwidth" target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0xb19289b436b2F7A92891ac391D8f52580d3087e4">Pancake</a>                           -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div
                  class="
                    column
                    is-5-desktop is-12-mobile
                    buy-apeswap
                    pr-6
                    is-transparent-bg
                  "
                >
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button home-btn is-transparent-bg"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                      >
                      <span class="icon">
                      <img src="@/assets/img/button/icon/apeswap.png" />
                    </span>
                    <span class="title-btn"> Buy Now! </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                      <div class="dropdown-content">
                        <div class="dropdown-item">
                          <p>
                            You can insert
                            <strong>any type of content</strong> within the
                            dropdown menu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- <div
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
                </div> -->
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
                  <div class="column" v-for="(itemSocial, socialLink) in socialitems" :key="itemSocial.id">
                    <a
                      :href="itemSocial.img.link"
                      target="_blank"
                    >
                      <figure class="image is-48x48">
                        <img
                          :src="
                            hovered === socialLink ? itemSocial.img.hover : itemSocial.img.original
                          "
                          @mouseover="hovered = socialLink"
                          @mouseleave="hovered = null"
                        />
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
      hovered: null,
      socialitems: {
        first: {
          img: {
            link: "https://www.instagram.com/projectoasis.io/",
            original: require("@/assets/img/icon/social/IG.png"),
            hover: require("@/assets/img/icon/social/ig-hover.png"),
          },
        },
        second: {
          img: {
            link: "https://twitter.com/ProjectOasis_",            
            original: require("@/assets/img/icon/social/twitter.png"),
            hover: require("@/assets/img/icon/social/twitter-hover.png"),
          },
        },
        third: {
          img: {
            link: "https://discord.gg/478NAfvXre",            
            original: require("@/assets/img/icon/social/discord.png"),
            hover: require("@/assets/img/icon/social/discord-hover.png"),
          },
        },        
        fourth: {
          img: {
            link: "https://projectoasis.medium.com/",            
            original: require("@/assets/img/icon/social/medium.png"),
            hover: require("@/assets/img/icon/social/medium-hover.png"),
          },
        },
        fifth: {
          img: {
            link: "https://t.me/projectoasis_official",            
            original: require("@/assets/img/icon/social/tele.png"),
            hover: require("@/assets/img/icon/social/tele-hover.png"),
          },
        },                
      },
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