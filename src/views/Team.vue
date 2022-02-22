<template>
  <div class="container teamview">
    <div class="column is-12 has-padding">
      <div class="columns is-mobile is-centered has-padding-team">
        <div
          class="
            column
            is-half-desktop is-flex is-justify-content-center is-12-mobile
          "
        >
          <div
            class="
              social-container
              is-flex is-justify-content-center
              mb-0
              tokenomics-header
            "
          >
            <span style="font-size: 1.7em" class="is-extra-bold"
              >Meet the Team</span
            >
          </div>
        </div>
      </div>
      <div class="slider-nav">
        <div
          class="column"
          style="width: 105% !important"
          v-for="i in items"
          :key="i.id"
        >
          <button class="button team-default is-extra-bold">
            {{ i.title }}
          </button>
        </div>
      </div>
      <div class="slider-for">
        <div id="slick1" class="team-info-char">
          <div
            class="team-left-container"
            v-for="i in teamList['Tech Magicians']"
            :key="i.id"
          >
            <div class="container">
              <img :src="i.img_url" />
              <p
                class="
                  is-extra-bold
                  title
                  team-title
                  is-flex is-justify-content-center
                  mb-0
                  pb-0
                "
              >
                {{ i.name }}
              </p>
              <p
                class="subs subs-team"
                style="
                  font-size: 0.6em !important;
                  text-align: center !important;
                "
              >
                {{ i.desc }}
              </p>
            </div>
          </div>
        </div>
        <div id="slick2" class="team-info-char" style="width: 100% !important">
          <div
            class="team-left-container"
            v-for="i in teamList['Advisor']"
            :key="i.id"
          >
            <div class="container">
              <img :src="i.img_url" />
              <p
                class="
                  is-extra-bold
                  title
                  team-title
                  is-flex is-justify-content-center
                  mb-0
                  pb-0
                "
              >
                {{ i.name }}
              </p>
              <p
                class="subs subs-team"
                style="
                  font-size: 0.6em !important;
                  text-align: center !important;
                "
              >
                {{ i.desc }}
              </p>
            </div>
          </div>
        </div>
        <div id="slickCouncel" class="team-info-char" style="width: 100% !important">
          <div
            class="team-left-container"
            v-for="i in teamList['Cool Councel']"
            :key="i.id"
          >
            <div class="container">
              <img :src="i.img_url" />
              <p
                class="
                  is-extra-bold
                  title
                  team-title
                  is-flex is-justify-content-center
                  mb-0
                  pb-0
                "
              >
                {{ i.name }}
              </p>
              <p
                class="subs subs-team"
                style="
                  font-size: 0.6em !important;
                  text-align: center !important;
                "
              >
                {{ i.desc }}
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
export default {
  components: {  VueperSlides, VueperSlide },
  data() {
    return {
      rowSlick: 0,
      teamList: {
        "Tech Magicians": [
          {
            name: "Jasper",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Jasper 2",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Jasper 3",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Jasper 4",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Jasper 5",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Jasper 6",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
        Advisor: [
          {
            name: "Advisor 1",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Advisor 2",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Advisor 3",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Advisor 4",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
        "Cool Councel": [
          {
            name: "Councel 1",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Councel 2",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Councel 3",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Councel 4",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          {
            name: "Councel 5",
            img_url: require("@/assets/img/teams/Avatar-Dreamers-1-J.png"),
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ],
      },
      items: [
        {
          title: "Tech Magicians",
        },
        {
          title: "Advisor",
        },
        {
          title: "Cool Councel",
        },
        {
          title: "Fourth",
        },
      ],
     
    };
  },
  mounted() {
    this.slickJS("Tech Magicians");
  },
  methods: {    
    slickJS(title) {
      if (this.teamList[title].length >= 5) {
        this.rowSlick = 2;
      } else {
        this.rowSlick = 1;
      }
      $("#slick1").slick({
        rows: this.rowSlick,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        
      });
      $("#slick2").slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
      });
      
      $("#slickCouncel").slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
      });

      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",        
      });
      $(".slider-nav").slick({
        slidesToShow: 3,
        slideToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              vertical: false,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 0,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/team.css";
@media screen and (min-width: 500px) and (max-width: 700px) {
  /* .slick-slide.slick-active {
    width: 50% !important;
} */
  // .slick-slider.slick-initialized.slick-vertical
  //   div.slick-list
  //   div.slick-track
  //   div.slick-slide {
  //   width: 50% !important;
  // }

  .subs {
    font-size: 0.5em !important;
  }
}
</style>