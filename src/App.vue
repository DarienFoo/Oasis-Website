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
    <section id="disclaimer" class="disclaimer-section">
      <webapp-disclaimer />
    </section>

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
            >
              <a
                href="https://www.instagram.com/projectoasis.io/"
                target="_blank"
              >
                <figure class="image is-48x48">
                  <img src="@/assets/img/icon/social/IG.png" />
                </figure>
              </a>
            </div>
            <div
              class="
                column
                is-narrow-fullhd
                is-narrow-desktop
                is-4-tablet
                is-one-third-mobile
              "
            >
              <a href="https://twitter.com/ProjectOasis_" target="_blank">
                <figure class="image is-48x48">
                  <img src="@/assets/img/icon/social/twitter.png" />
                </figure>
              </a>
            </div>
            <div
              class="
                column
                is-narrow-fullhd
                is-narrow-desktop
                is-4-tablet
                is-one-third-mobile
              "
            >
              <a href="https://discord.gg/478NAfvXre" target="_blank">
                <figure class="image is-48x48">
                  <img src="@/assets/img/icon/social/discord.png" />
                </figure>
              </a>
            </div>
            <div
              class="
                column
                is-narrow-fullhd
                is-narrow-desktop
                is-4-tablet
                is-one-third-mobile
              "
            >
              <a href="https://projectoasis.medium.com/" target="_blank">
                <figure class="image is-48x48">
                  <img src="@/assets/img/icon/social/medium.png" />
                </figure>
              </a>
            </div>
            <div
              class="
                column
                is-narrow-fullhd
                is-narrow-desktop
                is-4-tablet
                is-one-third-mobile
              "
            >
              <a href="https://t.me/projectoasis_official" target="_blank">
                <figure class="image is-48x48">
                  <img src="@/assets/img/icon/social/tele.png" />
                </figure>
              </a>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-12">
              <p>Copyright Oasisproject.io</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
import Disclaimer from "./views/Disclaimer";

export default {
  name: "App",
  components: {
    "webapp-header": header,
    "webapp-home": home,
    "webapp-chose": choseUs,
    "webapp-tekonomiks": Tekonomiks,
    "webapp-roadmaps": Roadmaps,
    "webapp-team": Team,
    "webapp-partners": Partners,
    "webapp-disclaimer": Disclaimer,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
@import "vue-glide-js/dist/vue-glide.css";

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
/* div.home-slide .vueperslide {
  width: 60.3333% !important;
} */
div.home-slide .offsetslidefirst {
  .vueperslides__track-inner {
    transform: translate3d(33.333%, 0px, 0px) !important;
  }
}
div.home-slide .vueperslide.vueperslide--active.vueperslide--visible {
  width: 50% !important;
}

div.home-slide .offsetslidelast {
  .vueperslides__track-inner {
    transform: translate3d(-99%, 0px, 0px) !important;
  }
}
div.home-slide .vueperslide {
  transition: 0.3s ease-in-out;
  /* opacity: 0.3; */
  /* filter: blur(1px); */
  transform: scale(0.8);
  border-radius: 12px !important;
  &.vueperslide--visible:first-child {
    margin-left: -37px !important;
  }
  &.vueperslide--active {
    opacity: 1 !important;
    transform: scale(1);
    filter: blur(0);
  }
}
div.home-slide .vueperslide.vueperslide--active.vueperslide--visible {
  width: 53.3333% !important;
}
.vueperslides__bullets.vueperslides__bullets--outside {
  display: none !important;
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
