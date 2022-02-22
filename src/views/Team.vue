<template>
  <div class="container teamview">
    <div class="info-container column is-12 has-padding">
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
      <div class=""></div>
      <div class="team-s">
        <vueper-slides
          class="no-shadow"
          ref="vueperslides1"
          :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
          @slide="
            $refs.vueperslides2 &&
              $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                emit: false,
              })
          "
          :visible-slides="3"
          :slide-ratio="1 / 4"
          :bullets="false"
          fixed-height="100px"
        >
          <vueper-slide
            v-for="i in items"
            :key="i.id"
            @click.native="
              $refs.vueperslides2 && $refs.vueperslides2.goToSlide(i - 1)
            "
          >
            <template #content>
              <div class="vueperslide__content-wrapper">
                <div class="column" style="width: 100% !important">
                  <button
                    class="button team-default is-extra-bold"
                    @click="showTeam(i.title)"
                  >
                    {{ i.title }}
                  </button>
                </div>
              </div>
            </template>
          </vueper-slide>
        </vueper-slides>
        <!-- <vueper-slides
          class="no-shadow"
          ref="vueperslides2"
          :arrows="false"          
          :slide-ratio="1 / 8"
          :dragging-distance="50"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
          @slide="
            $refs.vueperslides1 &&
              $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                emit: false,
              })
          "
          :visible-slides="4"
          fixed-height="500px"
        >
          <vueper-slide
            v-for="i in teamInfo"
            :key="i.id"
            @click.native="
              $refs.vueperslides2 && $refs.vueperslides2.goToSlide(i - 1)
            "
          >
            <template #content>
              <div class="vueperslide__content-wrapper">
                <div class="team-left-container">
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
            </template>
          </vueper-slide>
        </vueper-slides> -->
      </div>
      <div id="slick1" class="team-info-char">
        
        <div class="team-left-container" v-for="i in teamInfo" :key="i.id">
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
              style="font-size: 0.6em !important; text-align: center !important"
            >
              {{ i.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
export default {
  components: { VueSlickCarousel, VueperSlides, VueperSlide },
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
        }
        ],
        "Advisor": [
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
          title: "Advisor",
        },
        {
          title: "Cool Councel",
        },
        {
          title: "Tech Magicians",
        },
      ],
      teamInfo: [
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
        }
      ],

      options: {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 10,
        initialSlide: 1,
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
              vertical: true,
              verticalSwiping: true,
              slidesToScroll: 0,
            },
          },
          {
            breakpoint: 480,
            settings: {
              vertical: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      },
      options2: {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              vertical: true,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.slickJS("Tech Magicians");
    // this.$nextTick(this.$forceUpdate);
  },
  methods: {
    showTeam(title) {
      // this.rowSlick = 1;
      if (this.teamList[title].length > 4) {
        this.rowSlick = 2;
      } else {
        this.rowSlick = 1;
      }
      let chose_data = this.teamList[title];
      this.teamInfo = chose_data;

      $('#slick1').slick('slickSetOption', 'rows', this.rowSlick, 'slidesToShow', '5','dots' , false, 'arrows' , true,'infinite', false,'speed', 300,'slidesToShow', 4,'slidesToScroll', 1);
            $('#slick1').slick( 'refresh' );

      // this.slickJS(title);
    },
    slickJS(title) {
      // if (this.teamList[title].length >= 4) {
      //   this.rowSlick = 2;
      // } else {
      //   alert("low 1 proceed");
      //   this.rowSlick = 1;
      // }

      if (this.teamInfo.length >= 5) {
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