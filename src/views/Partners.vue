<template>
  <div class="hero-body p-0 container">
    <div class="ml-0 mr-0 column is-12" style="" id="flex">
      <div class="columns is-mobile is-centered has-padding-tokenomics">
        <div class="column is-half is-flex is-justify-content-center">
          <div
            class="
              social-container
              is-flex is-justify-content-center
              mb-0
              tokenomics-header
            "
          >
            <span style="font-size: 2em" H2 class="is-extra-bold">Our Partners</span>
          </div>
        </div>
      </div>
      <div
        class="info-container container-token partner-padding"
        style="padding: 2em 0em 3em 0em"
      >
        <div
          class="is-mobile column is-12 slickPartners"
          style="padding: 0em 4em 0em"
        >
          <div id="slickPartners">
            <div class="" v-for="partnerList in partners" :key="partnerList.id">
              <div class="container">
                <a :href="partnerList.link" target="__blank">
                  <p class="is-hidden">{{ partnerList.img_url }}</p>
                  <figure class="image is-5by3">
                    <img :src="partnerList.img_url" />
                  </figure>
                </a>
              </div>
            </div>
          </div>
          <!-- <div
            class="column is-3-fullhd is-3-desktop is-6-tablet is-half-mobile"
            v-for="partnerList in partners"
            :key="partnerList.id"
          >
            <a :href="partnerList.link" target="__blank">
              <p class="is-hidden">{{ partnerList.img_url }}</p>
              <figure class="image is-5by3">
                <img :src="partnerList.img_url" />
              </figure>
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "slick-carousel/slick/slick.css";
export default {
  components: {},
  data() {
    return {
      partners: [
      {
          img_url: require("@/assets/img/partners/OMV.png"),
          link: "https://www.oasismetaverse.ventures/",
        },{
          img_url: require("@/assets/img/partners/SPINTOP.png"),
          link: "https://spintop.network/",
        },
        {
          img_url: require("@/assets/img/partners/rugdoc.png"),
          link: "https://rugdoc.io/",
        },
        {
          img_url: require("@/assets/img/partners/cakemonster.png"),
          link: "https://cake.monster/",
        },
        {
          img_url: require("@/assets/img/partners/tofu.png"),
          link: "https://tofunft.com/bsc",
        },
        {
          img_url: require("@/assets/img/partners/SAMURAILEGENDS.png"),
          link: "https://samurailegends.io/",
        },
        {
          img_url: require("@/assets/img/partners/Portalverse.png"),
          link: "https://www.portalverse.net/",
        },
        {
          img_url: require("@/assets/img/partners/pragma.png"),
          link: "https://pragma.ooo/",
        },
        {
          img_url: require("@/assets/img/partners/bscnews.png"),
          link: "https://www.bsc.news/",
        },
        {
          img_url: require("@/assets/img/partners/Bountie.png"),
          link: "https://bountiehunter.io/",
        },
        {
          img_url: require("@/assets/img/partners/Apeswap.png"),
          link: "https://apeswap.finance/",
        },
        {
          img_url: require("@/assets/img/partners/Acryptos.png"),
          link: "https://app-v2.acryptos.com/#/BSC/vaults/all",
        },
         {
          img_url: require("@/assets/img/partners/OCTOGAMEX.png"),
          link: "https://octogamex.com/",
        },
        {
          img_url: require("@/assets/img/partners/ge-fi.png"),
          link: "https://www.ge.finance/?utm_medium=social&utm_source=linktree&utm_campaign=gefi+finance+vault#/home",
        },
        {
          img_url: require("@/assets/img/partners/mintedlabs.png"),
          link: "https://minted-lab.com/",
        },
        {
          img_url: require("@/assets/img/partners/Cryptoblades.png"),
          link: "https://www.cryptoblades.io/",
        },
        {
          img_url: require("@/assets/img/partners/Startercapital.png"),
          link: "https://starter.capital/#/",
        },
        {
          img_url: require("@/assets/img/partners/strongnode.png"),
          link: "https://strongnode.io/",
        },
        {
          img_url: require("@/assets/img/partners/LOVELACE.png"),
          link: "https://lovelace.world/",
        },
        {
          img_url: require("@/assets/img/partners/Paid1.png"),
          link: "https://paidnetwork.com/",
        },
 {
          img_url: require("@/assets/img/partners/PACOCA.png"), 
          link: "https://pacoca.io/",
        },
        {
          img_url: require("@/assets/img/partners/oasis-bitkeep-logo.png"),
          link: "https://bitkeep.com/",
        },
        {
          img_url: require("@/assets/img/partners/oasis-hyperpaylogo1.png"),
          link: "https://www.hyperpay.com/",
        },
        {
          img_url: require("@/assets/img/partners/redHat.png"),
          link: "https://redhatcapital.io/",
        },
        {
          img_url: require("@/assets/img/partners/rd.png"),
          link: "https://www.rdauditors.com/",
        },
         {
          img_url: require("@/assets/img/partners/FORMLESS.png"),
          link: "http://www.formless.me/home",
        },
        {
          img_url: require("@/assets/img/partners/DaMoon.png"),
          link: "https://twitter.com/DaMoonSOC1",
        },
        {
          img_url: require("@/assets/img/partners/ENCENTIVE.png"),
          link: "https://Encentive.io",
        },
      ],
    };
  },
  mounted() {
    this.slickJS();
  },
  methods: {
    slickJS() {
      $("#slickPartners").slick({
        rows: 3,
        slidesPerRow: 4,
        // autoplay: true,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 600,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 478,
            settings: {
              slidesPerRow: 2,
              rows: 4,
              slidesToShow: 1,
            },
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/partners.css";
</style>