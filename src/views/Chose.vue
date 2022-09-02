<template>
  <div class="hero-body p-0 container">
    <div class="ml-0 mr-0 column is-12" style="" id="flex">
      <div class="columns is-mobile is-centered has-padding-tokenomics mt-6">
        <div class="column is-half is-flex is-justify-content-center">
          <div
            class="
              social-container
              is-flex is-justify-content-center
              mb-0
              tokenomics-header
            "
          >
            <span style="font-size: 2em" H2class="is-extra-bold">Project Highlights</span>
          </div>
        </div>
      </div>
      <div class="columns is-multiline chose-sectiopns" style="padding: 5em 0em 3em 0em">
        <div class="info-left column is-12 is-6-desktop container main p-0 m-0">          
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
                  <h2
                    class="
                      card-header-title
                      chose-text
                      is-extra-bold
                      chose-title
                    "
                  >
                    {{ collapse.title }}
                  </h2>
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
            "ProjectOasis is a throwback to the good old days where games are light, easy and fun in our 2D metaverse. Participate in DeFi activities and socialize with others in Oasis while immersing yourself in the good old days.",
          img_url: require("@/assets/img/container/choseUs/metaverse.png"),
        },
        {
          title: "Gamified DeFi",
          description:
            "Team OASIS believes that the social gamification of DeFi will attract a new generation of DeFi adopters and enrich the overall GameFi experience. Our vision for Oasis is to be a gamified ecosystem that includes everything from <strong>Staking (Oasis Swap)</strong>, <strong>IDOs (OLá Launchpad)</strong> & <strong>INOs (OLáMint)</strong>, with <strong>P2E (Play-to-Earn) elements such as our minigame OASIS Vanguard.</strong>.",
          img_url: require("@/assets/img/container/choseUs/defi.png"),
        },
        {
          title: "Cross-Chain “Realms”",
          description:
            'Oasis at present mainly supports Binance Smart Chain (BSC). In the near future, expect Oasis to evolve from a metaverse into a multiverse, allowing Natives to traverse across multiple chains to other "realms" the crypto space!',
          img_url: require("@/assets/img/container/choseUs/realms.png"),
        },
        {
          title: "The Council",
          description:
            "The COUNCIL acts as a Decentralised Autonomous Organisation (DAO) in the Oasis metaverse, which is governed by all Natives who hold OASIS tokens. The future of the Oasis metaverse is shaped by votes and proposal made by Natives for Natives!",
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

      $(".image-section")
        .attr("src", chose_data[0].img_url)
        .fadeOut("2000")
        .fadeIn("1000");
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/choseUs.css";
</style>