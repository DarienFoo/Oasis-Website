<template>
  <div class="container teamview">
    <div
      class="column is-12 has-padding"
      style="padding-bottom: 0px !important"
    >
      <div class="columns is-mobile is-centered has-padding-team">
        <div
          class="
            column
            is-half-desktop is-flex is-justify-content-center is-12-mobile
            team-title-header
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
      <div class="slider slider-nav">
        <div
          class="column p-1"
          style="width: 105% !important"
          v-for="i in items"
          :key="i.id"
        >
          <button class="button team-default is-extra-bold">
            {{ i.title }}
          </button>
        </div>
      </div>
      <div class="slider slider-for">
        <div>
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
                  class="subs teams"
                  style="font-size: 0.6em; text-align: center !important"
                >
                  {{ i.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            id="slick2"
            class="team-info-char"
            style="width: 100% !important"
          >
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
                  class="subs teams"
                  style="font-size: 0.6em; text-align: center !important"
                >
                  {{ i.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            id="slickCouncel"
            class="team-info-char"
            style="width: 100% !important"
          >
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
                  class="subs teams"
                  style="font-size: 0.6em; text-align: center !important"
                >
                  {{ i.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="slickMindBenders" class="team-info-char" style="width: 100%">
            <div
              class="team-left-container"
              v-for="i in teamList['Mind Benders']"
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
                  class="subs teams"
                  style="font-size: 0.6em; text-align: center !important"
                >
                  {{ i.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="slickLeonardo" class="team-info-char" style="width: 100%">
            <div
              class="team-left-container"
              v-for="i in teamList['Leonardo']"
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
                  class="subs teams"
                  style="font-size: 0.6em; text-align: center !important"
                >
                  {{ i.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="slickDreamers" class="team-info-char" style="width: 100%">
            <div
              class="team-left-container"
              v-for="i in teamList['Dreamers']"
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
                  class="subs teams"
                  style="font-size: 0.6em; text-align: center !important"
                >
                  {{ i.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
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
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      rowSlick: 0,
      teamList: {
        "Tech Magicians": [
          {
            name: "Noodle",
            img_url: require("@/assets/img/teams/tech/Avatar-Tech-1.png"),
            desc: "Backend Developer",
          },
          {
            name: "ReveLT",
            img_url: require("@/assets/img/teams/tech/Avatar-Tech-2.png"),
            desc: "Game Developer",
          },
          {
            name: "Cva",
            img_url: require("@/assets/img/teams/tech/Avatar-Tech-3.png"),
            desc: "Software Architect",
          },
          {
            name: "Allan",
            img_url: require("@/assets/img/teams/tech/Avatar-Tech-4.png"),
            desc: "Game Developer",
          },
        ],
        "Mind Benders": [
          {
            name: "NFT Chad",
            img_url: require("@/assets/img/teams/mind/Avatar-Mind-Dylan.png"),
            desc: "Community Manager",
          },
          {
            name: "Halliday",
            img_url: require("@/assets/img/teams/mind/Avatar-4.png"),
            desc: "Game Director",
          },
          {
            name: "Cosmic",
            img_url: require("@/assets/img/teams/mind/Avatar-Mind-2.png"),
            desc: "Marketing",
          },
          {
            name: "Furbolg",
            img_url: require("@/assets/img/teams/mind/Avatar-Mind-3.png"),
            desc: "Marketing",
          },
          {
            name: "Imp Takolvski",
            img_url: require("@/assets/img/teams/mind/Avatar-Mind-Gerald.png"),
            desc: "Marketing",
          },
        ],
        Leonardo: [
          {
            name: "VVG",
            img_url: require("@/assets/img/teams/leonardo/Avatar-Art-AdiebWidigdo.png"),
            desc: "UI & Graphic Designer",
          },
          {
            name: "Nelle",
            img_url: require("@/assets/img/teams/leonardo/Avatar-Art-2Nelle.png"),
            desc: "Graphic Designer",
          },
        ],
        Advisor: [
          {
            name: "Ken",
            img_url: require("@/assets/img/teams/advisor/Advisor-ken-T2.png"),
            desc: "Founder of RD Group",
          },
        ],
        "Cool Councel": [
          {
            name: "Jasper",
            img_url: require("@/assets/img/teams/councel/Jasper.png"),
            desc: "Legal",
          },
        ],

        Dreamers: [
          {
            name: "FS",
            img_url: require("@/assets/img/teams/dreamers/Avatar-Dreamers-1-J.png"),
            desc: "Co-founder",
          },
          {
            name: "Vince",
            img_url: require("@/assets/img/teams/dreamers/Avatar-Dreamers-W.png"),
            desc: "Founder",
          },
          {
            name: "Luve",
            img_url: require("@/assets/img/teams/dreamers/Avatar-Dreamers-2-S.png"),
            desc: "Co-founder",
          },
        ],
      },
      items: [
        {
          title: "Tech Magicians",
        },
        {
          title: "Mind Benders",
        },
        {
          title: "Leonardo Da Picasso",
        },
        {
          title: "Advisor",
        },
        {
          title: "Cool Councel",
        },
        {
          title: "Dreamers",
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
      // if("Tech Magicians") {
      //   alert("ech")
      //   $(".slider.slider-for.slick-initialized.slick-slider div div.slick-track").css('height', 20 + 'em !important');
      // }
      $("#slick1")
        .slick({
          rows: this.rowSlick,
          dots: false,
          arrows: true,
          infinite: false,
          speed: 100,
          slidesToShow: 4,
          responsive: [
            {
              breakpoint: 478,
              settings: {
                slidesToShow: 3,
              },
            },

            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        })

      $("#slick2").slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 478,
            settings: {
              slidesPerRow: 2,
              rows: 2,
            },
          },
        ],
      });

      $("#slickCouncel").slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
      });

      $("#slickMindBenders").slick({
        rows: 2,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 478,
            settings: {
              slidesPerRow: 3,
              rows: 2,
            },
          },
        ],
      });

      $("#slickLeonardo").slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 478,
            settings: {
              slidesPerRow: 2,
              rows: 2,
            },
          },
        ],
      });

      $("#slickDreamers").slick({
        rows: 1,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 478,
            settings: {
              slidesPerRow: 2,
              rows: 2,
            },
          },
        ],
      });

      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
        autoplay: true,
        autoplaySpeed: 5000,        
        adaptiveHeight: true,
      })
//       .on('setPosition', function (event, slick) {
//       slick.$slides.css('height', 20 + 'em');
//  });
      
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        arrows: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000,
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