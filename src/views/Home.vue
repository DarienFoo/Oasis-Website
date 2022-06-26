<template>
  <div class="hero-body">
    <div class="ml-0 mr-0 column is-12" id="flex">
      <div class="has-padding-desktop-section">
        <div class="container mt-6">
          <div class="columns is-vcentered info-container">
            <div
              class="
                info-left
                column
                is-5 is-5-desktop is-9-tablet
                landing-caption
                left-padding-mobile
              "
            >
              <div class="box is-size-1 is-size-5-mobile info mb-0">
                <h1 class="is-size-3 has-text-weight-bold is-extra-bold">
                  ProjectOasis?
                </h1>
                <h1 class="is-size-6 has-text-weight-bold is-extra-bold">
                  Gamified DeFi in a social environment
                </h1>
                <p
                  class="
                    is-size-6-desktop is-size-7-tablet is-size-7-mobile
                    text-center
                  "
                >
                  Welcome to the Oasis metaverse! A virtual ecosphere where you can gather to play games, socialize, and perform DeFi activities in-game such as staking crypto tokens, NFT minting, participating in IDOs, and more. Our dream is to build a place where everyone can come together to interact, play, compete and grow with one another.
                </p>
              </div>
              <div class="box home-slide is-hidden-mobile">
                <vueper-slides autoplay
                  ref="vueperslides1"
                  @slide="
                    $refs.vueperslides2 &&
                      $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                        emit: false,
                      })
                  "
                  :bullets="false"

                  class="no-shadow"
                  :visible-slides="1"
                  :slide-ratio="1 / 2"
                  :dragging-distance="35"
                  :arrows-outside="false"
                  show-multiple-slides="show-multiple-slides"
                >
                  <vueper-slide
                    v-for="(slide, i) in items"
                    :key="i.id"
                    :image="slide.image"
                    :link="slide.link"
                    :openInNew="true"
                  />
                </vueper-slides>

                <vueper-slides autoplay
                  class="no-shadow"
                  ref="vueperslides2"
                  :slide-ratio="1 / 8"
                  :arrows="false" :bullets="false"
                  :dragging-distance="50"
                  @slide="
                    $refs.vueperslides1 &&
                      $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                        emit: false,
                      })
                  "
                  :visible-slides="1"
                  fixed-height="70px"
                >
                  <vueper-slide
                    v-for="i in items"
                    :key="i.id"
                    @click.native="
                      $refs.vueperslides2 &&
                        $refs.vueperslides2.goToSlide(i - 1)
                    "
                  >
                    <template #content>
                      <div
                        class="
                          container-series
                          is-flex is-justify-content-center
                        "
                      >
                        <p
                          style=""
                          class="
                            is-size-7-desktop is-size-7-tablet is-extra-bold
                            has-text-black
                            nft-title
                          "
                        >
                          <a :href="i.link" target="_blank" class="has-text-black">
                            <div class="vueperslide__title" style="font-size: 1em !important">{{ i.title }}</div>
                          </a>
                        </p>
                      </div>
                    </template>
                  </vueper-slide>
                </vueper-slides>              
              </div>
            </div>
            <div class="info-right column is-7">
              <div class="is-flex is-justify-content-center pt-6 mt-6">
                <img
                  src="@/assets/img/oasis-web-animatedrocky-2.gif"
                  width="500"
                />
              </div>
              <div class="is-flex is-justify-content-center buttons">
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
                          style="width: 100% !important; height: 45px;image-rendering: -webkit-optimize-contrast;"
                        >
                        </a>

                        <a
                          target="_blank"
                          href="https://app.apeswap.finance/swap?outputCurrency=0xb19289b436b2f7a92891ac391d8f52580d3087e4"
                          class="button apeswap-btn play is-transparent-bg"
                          style="width: 100% !important; height: 40px"
                        >
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  is-flex is-justify-content-center
                  m-3
                  is-hidden-mobile
                "
              >
                <div class="social-container">
                  <div class="columns">
                    <div
                      class="column"
                      v-for="(itemSocial, socialLink) in socialitems"
                      :key="itemSocial.id"
                    >
                      <a :href="itemSocial.img.link" target="_blank">
                        <figure class="image is-48x48">
                          <img
                            :src="
                              hovered === socialLink
                                ? itemSocial.img.hover
                                : itemSocial.img.original
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
        {
          title: "Oasis Vanguard : Game Mechanics and Rewards",
          image: require("@/assets/img/container/slider/list/Oasis Vanguard.png"),
          link: "https://projectoasis.medium.com/oasis-diaries-5-legend-of-the-vanguard-77bd4b48d09e",
        },
        {
          title: "Oasis Vanguard Staking Campaign : Cauliflower Edition",
          image: require("@/assets/img/container/slider/list/stacking.jpeg"),
          link: "https://projectoasis.medium.com/oasis-vanguard-staking-campaign-cauliflower-farm-edition-4f88f7810c9b ",
        },
        {
          title: "The Four Elemental Lands",
          image: require("@/assets/img/container/slider/list/Elemental Lands.gif"),
          link: "https://projectoasis.medium.com/oasis-diaries-4-the-four-elemental-lands-f4d82da818a",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../assets/css/home.css";
</style>