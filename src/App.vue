<template>
  <div id="app">
    <!-- <router-view/> -->
    <section id="gameSection" class="hero main-section is-fullheight">
      <webapp-header />
      <webapp-home />
    </section>
    <section id="chooseUs" class="hero is-fullheight chose-section">
      <webapp-chose />
    </section>
    <section id="tekonomiks" class="hero is-fullheight tekonomiks-section">
      <webapp-tekonomiks />
    </section>
    <section id="roadmaps" class="hero is-fullheight roadmaps-section">
      <webapp-roadmaps />
    </section>
    <section id="team" class="team-section">
      <webapp-team />
    </section>
    <section id="partners" class="partner-section">
      <webapp-partners />
    </section>
    <!-- <section id="disclaimer" class="disclaimer-section">
      <webapp-disclaimer />
    </section> -->

    <footer class="footer" style="padding: 0.76em !important">
      <div
        class="
          info-container
          is-vcentered
          columns
          is-multiline
          has-padding-desktop-chose
        "
      >
        <div class="info-left column is-5-desktop container main is-offset-1">
          <div class="footer-logo">
            <a class="title is-6"
              ><img
                src="@/assets/img/logo.png"
                alt="Logo"
                width="140"
                height="28"
            /></a>
          </div>
        </div>
        <div
          class="info-right column is-12 is-4-desktop is-5-fullhd is-12-mobile"
        >
          <div class="columns is-mobile">
            <div class="column is-12 is-extra-bold">
              <p>
                <strong>Follow Us at:</strong>
              </p>
            </div>
          </div>
          <div class="columns is-multiline is-mobile mobile-footer">
            <div
              class="
                column
                is-narrow-fullhd
                is-narrow-desktop
                is-4-tablet
                is-one-third-mobile
              "
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
          <div class="columns is-mobile">
            <div class="column is-12">
              <p>Copyright @ projectoasis.io</p>
              <a @click="disclaimer()">Read our Legal and Risk Disclaimer</a>              
              <div class="columns">
                <div class="column is-4">
                  <a
                    href="../static/Privacy_Policy_-_Oasis.pdf"
                    target="_blank"
                    >Privacy Policy</a
                  >
                </div>
                <div class="column is-half">
                  <a
                    href="https://docs.google.com/document/d/1dQsf8izuw5XUVdLvrTbiry3ka-gg53gO-RvVW7wzxlg/edit?usp=sharing"
                    target="_blank"
                    >Terms of Service</a
                  >
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="columns is-mobile">
        <div class="column is-12 container">
          <p style="font-size: 9px !important;display: flex;text-align: justify;">
            The information on this website, provided by Project Oasis, does not constitute investment, financial, or trading advice, and should not be treated as such. We cannot, and do not, recommend that you should buy, sell, hold or trade any cryptocurrency. Before making any investment decisions, you should conduct your own due diligence and / or consult a licensed financial advisor. When you purchase OASIS tokens ($OASIS), or use any of the services on projectoasis.io, you shall agree that Project Oasis is not liable for any losses or taxes you might incur and that your are fully responsible for your own personal actions. You also agree that OASIS token ($OASIS) are sold 'as is' and we are not required to provide support or services of any kind. If you live in an area where there are government bans or regulations on cryptocurrencies, it is strongly advised that you do not purchase OASIS tokens ($OASIS) as we cannot guarantee compliance with your local regulations. You must always ensure that you comply with you local regulations wwhen purchasing OASIS tokens ($OASIS) or any other cryptocurrencies.
            <br/><br/> All information provided on this website is not intended and does not constitute any invitation, solicitation or offer to buy and sell any cryptocurrencies, digital assets and / or securities. You acknowledge that you are obtaining and perusing all information on this website based on your own volition ad self-initiative.
          </p>
          <br/>

          <p style="font-size: 9px !important;display: flex;text-align: justify;">
            You shall be aware that there are always risks associated with Smart Contracts, and you shall use them at your own risk. Project oasis is not a registered broker, analyst or investment advisor. All the information provided on projectoasis.io is provided purely for informational and educational purposes and should not be treated as legal or financial advice. All information we provide should be independently verified and confirmed on your own, or through a legal, financial advisor. We do not accept any liability for any loss or damages whatsoever caused in relation to the information or services we provide. You should be aware that there are always risks involved when trading in any financial market and you should never trade or invest money that you cannot afford to lose. If any doubt you should always consult with a professional financial advisor before making any investment decisions.            
          </p>
        </div>
      </div> -->
    </footer>

    <div class="modal success" id="myModal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Disclaimer</p>
          <button
            class="delete"
            aria-label="close"
            @click="closeModal()"
          ></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <span style="font-size: 2em" class="is-extra-bold"
            >Legal Disclaimer</span
          >

          <p style="font-size: 9px">
            The information on this website, provided by Project Oasis, does not
            constitute investment, financial, or trading advice, and should not
            be treated as such. We cannot, and do not, recommend that you should
            buy, sell, hold or trade any cryptocurrency. Before making any
            investment decisions, you should conduct your own due diligence and
            / or consult a licensed financial advisor. When you purchase OASIS
            tokens ($OASIS), or use any of the services on projectoasis.io, you
            shall agree that Project Oasis is not liable for any losses or taxes
            you might incur and that your are fully responsible for your own
            personal actions. You also agree that OASIS token ($OASIS) are sold
            'as is' and we are not required to provide support or services of
            any kind. If you live in an area where there are government bans or
            regulations on cryptocurrencies, it is strongly advised that you do
            not purchase OASIS tokens ($OASIS) as we cannot guarantee compliance
            with your local regulations. You must always ensure that you comply
            with you local regulations wwhen purchasing OASIS tokens ($OASIS) or
            any other cryptocurrencies.

            <br /><br />
            All information provided on this website is not intended and does
            not constitute any invitation, solicitation or offer to buy and sell
            any cryptocurrencies, digital assets and / or securities. You
            acknowledge that you are obtaining and perusing all information on
            this website based on your own volition ad self-initiative.
          </p>

          <br /><br />
          <span style="font-size: 2em" class="is-extra-bold"
            >Risk Disclaimer</span
          >

          <p style="font-size: 9px">
            You shall be aware that there are always risks associated with Smart
            Contracts, and you shall use them at your own risk. Project oasis is
            not a registered broker, analyst or investment advisor. All the
            information provided on projectoasis.io is provided purely for
            informational and educational purposes and should not be treated as
            legal or financial advice. All information we provide should be
            independently verified and confirmed on your own, or through a
            legal, financial advisor. We do not accept any liability for any
            loss or damages whatsoever caused in relation to the information or
            services we provide. You should be aware that there are always risks
            involved when trading in any financial market and you should never
            trade or invest money that you cannot afford to lose. If any doubt
            you should always consult with a professional financial advisor
            before making any investment decisions.
          </p>
        </section>
        <!-- <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer> -->
      </div>
    </div>
  </div>
</template>

<script>
import header from "./views/NavBar";
import home from "./views/Home";
import choseUs from "./views/Chose";
import Tekonomiks from "./views/Tekonomiks";
import Roadmaps from "./views/Roadmaps";
import Team from "./views/Team";
import Partners from "./views/Partners";
// import Disclaimer from "./views/Disclaimer";

export default {
  name: "App",
  data() {
    return {
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
    };
  },
  components: {
    "webapp-header": header,
    "webapp-home": home,
    "webapp-chose": choseUs,
    "webapp-tekonomiks": Tekonomiks,
    "webapp-roadmaps": Roadmaps,
    "webapp-team": Team,
    "webapp-partners": Partners,
    // "webapp-disclaimer": Disclaimer,
  },
  methods: {
    disclaimer() {
      $("#myModal").addClass("is-active");
    },
    closeModal() {
      $("#myModal").removeClass("is-active");
    },
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
@import "vue-glide-js/dist/vue-glide.css";

button.button.team-default.is-extra-bold {
    padding: 2em !important;
}
p.is-extra-bold.title.team-title.is-flex.is-justify-content-center.mb-0.pb-0 {
    font-size: 1.3em !important;
}
html {
  overflow-x: hidden !important;
}
@font-face {
  font-family: "Baloo-Regular";
  src: url("../src/assets/font/Baloo2-Regular.ttf") format("truetype"); /* Safari, Android, iOS */
}

@font-face {
  font-family: "Baloo-ExtraBold";
  src: url("../src/assets/font/Baloo2-ExtraBold.ttf") format("truetype"); /* Safari, Android, iOS */
}

@font-face {
  font-family: "Baloo-ExtraBold";
  src: url("../src/assets/font/Baloo2-ExtraBold.ttf") format("truetype"); /* Safari, Android, iOS */
}

@font-face {
  font-family: "Baloo-Medium";
  src: url("../src/assets/font/Baloo2-Medium.ttf") format("truetype"); /* Safari, Android, iOS */
}
section.hero.coming-soon {
  display: none;
}
.is-transparent-bg {
  background-color: transparent !important;
}
a.navbar-item {
  background-color: transparent !important;
}
.footer {
  background-color: #fafafa;
  padding: 3rem 1.5rem 1rem;
}
// div.home-slide .offsetslidefirst {
//   .vueperslides__track-inner {
//     transform: translate3d(33.333%, 0px, 0px) !important;
//   }
// }
// div.home-slide .vueperslide.vueperslide--active.vueperslide--visible {
//   width: 50% !important;
// }

// div.home-slide .offsetslidelast {
//   .vueperslides__track-inner {
//     transform: translate3d(-99%, 0px, 0px) !important;
//   }
// }
// div.home-slide .vueperslide {
//   transition: 0.3s ease-in-out;
//   /* opacity: 0.3; */
//   /* filter: blur(1px); */
//   transform: scale(0.8);
//   border-radius: 12px !important;
//   &.vueperslide--visible:first-child {
//     margin-left: -37px !important;
//   }
//   &.vueperslide--active {
//     opacity: 1 !important;
//     transform: scale(1);
//     filter: blur(0);
//   }
// }
// div.home-slide .vueperslide.vueperslide--active.vueperslide--visible {
//   width: 53.3333% !important;
// }

div.home-slide .vueperslide {
  transition: 0.3s ease-in-out;
  /* opacity: 0.3; */
  /* filter: blur(1px); */
  transform: scale(0.8);
  border-radius: 12px !important;
  &.vueperslide--active {
    opacity: 1 !important;
    transform: scale(1);
    filter: blur(0);
  }
}
.vueperslides__bullets.vueperslides__bullets--outside {
  display: none !important;
}

.vueperslides__arrow {
  color: #333;
}

.vueperslides__bullet {
  box-shadow: none;
}

.vueperslide {
  color: #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.3;
  // filter: blur(4px);
  transform: scale(0.8);
}
.vueperslide--active {
  opacity: 1 !important;
  transform: scale(1);
  // filter: blur(0);
}
.vueperslide__title {
  font-size: 7em;
  opacity: 0.6;
}

.offset-slide--first .vueperslides__track-inner {
  transform: translate3d(33.333%, 0, 0) !important;
}

.offset-slide--last .vueperslides__track-inner {
  transform: translate3d(-133.33%, 0, 0) !important;
}
.has-padding-desktop-section,
.has-padding-desktop-chose {
  padding: 0em 3em 0em 3em;
}
.has-padding-desktop {
  padding: 0% 4% 0% 6%;
}
.padding-partners {
  padding: 0% 15%;
}
.has-border-3px {
  border-bottom: 3px solid black;
}
.is-transparent {
  background: transparent !important;
}
@media screen and (max-width: 700px) {
  span.title.tokenomiks-title.is-medium-font {
    font-size: 14px !important;
  }
  lottie-player {
    width: 100% !important;
    height: 300px !important;
  }
}
@media screen and (max-width: 1020px) {
  .p-6.main {
    padding: 0px !important;
  }
  ul.glide__slides {
    width: 371.667px !important;
    margin-left: -103px;
  }
}
@media screen and (min-width: 1400px) {
  .glide.glide--ltr.glide--slider.glide--swipeable {
    padding: 3em 4em 0% 2em !important;
  }
  .prev {
    left: -8em !important;
  }
  .next {
    right: -7em !important;
  }
  div[data-glide-el="controls"] {
    top: -12em !important;
    height: 11px;
  }
}

.slick-slide.slick-active.slick-current {
  background: transparent !important;
  border: none;
}
.slick-slide.slick-active {
  background: transparent !important;
  border: none;
}

div.background-carousel
  div.carousel-list
  div.carousel-slides
  div.carousel-slide {
  width: 188.5px !important;
}
</style>
