<template>
  <div class="hero-body p-0 container">
    <div class="ml-0 mr-0 column is-12" style="" id="flex">
      <div
        class="columns is-multiline"
        style="padding: 5em 0em 3em 0em"
      >
        <div class="info-left column is-12 is-6-desktop container main p-0 m-0">
          <div class="column has-padding-box-section">
            <div
              class="
                social-container
                is-flex is-justify-content-center
                m-5
                mb-0
              "
            >
              <span style="font-size: 2em" class="is-extra-bold">Why Choose Us</span>
            </div>
          </div>
          <div class="image-click-container is-flex is-justify-content-center">
            <img
              class="image-section"
              src="@/assets/img/container/choseUs/metaverse.png"
            />
          </div>
        </div>
        <div
          class="
            info-right
            column
            is-12 is-6-desktop
            has-padding-choses-section
          "
        >
          <div class="collapse-main-section">
            <b-collapse
              class="card mb-4 chose-us"
              animation="slide"
              v-for="(collapse, index) of collapsesChoose"
              :key="index"
              :open="isOpen == index"
              @open="isOpen = index"
            >
              <template #trigger="props">
                <div
                  class="card-header chose-card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                  @click="replaceImage(collapse.title)"
                >
                  <p class="card-header-title chose-text is-extra-bold chose-title">
                    {{ collapse.title }}
                  </p>
                  <a class="card-header-icon">
                    <b-image
                      pack="fa"
                      :src="
                        props.open
                          ? require('@/assets/img/icon/up.png')
                          : require('@/assets/img/icon/down.png')
                      "
                    >
                    </b-image>
                  </a>
                </div>
              </template>

              <div class="card-content card-box">
                <div class="content data-desc chose-desc">
                  {{ collapse.description }}
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isOpen: 0,
      collapsesChoose: [
        {
          title: "One-Of-A-Kind Nostalgic 2D Metaverse",
          description:
            "ProjectOASIS is meant to be a throwback to memory lane where games are light, easy and fun in our 2D metaverse. Mesmerize yourself in the OASIS while immersing yourself in the good old days.",
          img_url: require("@/assets/img/container/choseUs/metaverse.png"),
        },
        {
          title: "Gamified DeFi",
          description:
            "The team at OASIS believes that the social gamification of DeFi will attract a new generation of DeFi adopters and enrich the overall gaming experience in OASIS. The enticing proposition is: <br /><br /> <b-icon pack='fas' icon='hand-point-right'> </b-icon><span style='position: absolute; margin-top: 2px !important'>Oasis OLá Launchpad</span><br/><br/>",
          img_url: require("@/assets/img/container/choseUs/defi.png"),
        },
        {
          title: "Cross-Chain “Realms”",
          description:
            "Oasis will primarily support Binance Smart Chain on launch. In the near future, Natives can expect cross-chain interoperability through different realms on Oasis!",
          img_url: require("@/assets/img/container/choseUs/realms.png"),
        },
        {
          title: "The Council",
          description:
            "The COUNCIL acts as a DAO in the Oasis metaverse that is governed by all Natives who hold OASIS tokens.The future of the Oasis metaverse is shaped by votes and proposal made by the Natives!",
          img_url: require("@/assets/img/container/choseUs/council.png"),
        },
      ],
    };
  },
  mounted() {},
  methods: {
    convertHTMLCode(text) {
      const output = $(".data-desc").html(text);
      return output;
    },
    replaceImage(title) {
      // console.log("title", title);
      // $(".image-section").fadeOut(1000)
      let chose_data = this.collapsesChoose.filter((user) => {
        return user.title.toLowerCase().includes(title.toLowerCase());
      });
      this.convertHTMLCode(chose_data[0].description);
      // $(".image-section" ).addClass("fade-in")

      $(".image-section").attr("src", chose_data[0].img_url).fadeOut("2000").fadeIn("1000");
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/choseUs.css";
</style>