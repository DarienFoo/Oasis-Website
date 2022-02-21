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
            <span style="font-size: 2em" class="is-extra-bold">Partners</span>
          </div>
        </div>
      </div>
      <div
        class="info-container columns is-multiline container-token partner-padding"
        style="padding: 2em 0em 3em 0em"
      >
        <div class="columns is-multiline is-mobile column is-12" style="padding: 0em 4em 0em ">
          <div
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
      partners: [
        {
          img_url: require("@/assets/img/partners/startercapital.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/metaverse.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/DaMoon.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/redHat.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/pragma.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/strongnode.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/rugdoc.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/bsc.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/ge-fi.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/mintedlabs.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/rd.png"),
          link: "#",
        },
        {
          img_url: require("@/assets/img/partners/cakemonster.png"),
          link: "#",
        },
      ],
    };
  },
  mounted() {},
};
</script>
<style lang="scss">
@import "../assets/css/partners.css";
</style>