<template>
  <div class="hero-body is-align-items-start pb-0 pt-2">
    <div class="ml-0 mr-0 column is-12" style="" id="flex">
      <div
        class="columns is-multiline container-token"
        style="padding: 1em 2em 8em 0em; width: 100%;display: flex;justify-content: center;padding: 1em 2em 8em 0em;"
      >
        <div class="columns is-mobile is-centered column is-12 container">
          <div class="column is-4-fullhd is-4-desktop is-6-tablet is-10-mobile">
            <b-collapse
              class="card mb-4 is-transparent"
              animation="slide"
              v-for="(collapse, index) of collapsesChoose"
              :key="index"
              :open="isOpen == index"
              @open="isOpen = index"
            >
              <template #trigger="props">
                <div
                  class="card-header disclaimer-card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                  @click="replaceImage(collapse.title)"
                >
                  <div class="columns is-mobile is-vcentered mb-0 container">
                    <div class="column is-2 pr-0 mt-2">
                      <figure class="image is-48x48">
                        <img :src="collapse.icon" alt="" />
                      </figure>
                    </div>
                    <div class="column mt-2 ml-3">
                      <span class="title disclaimer-title is-extra-bold"
                        >{{ collapse.title }}
                      </span>
                    </div>
                  </div>
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

              <div class="card-content card-box disclaimer-box">
                <div class="content data-desc" style="padding-left: 25px">
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
          icon: require("@/assets/img/disclaimer/legal.png"),
          title: "Legal Disclaimer",
          description:
            "ProjectOASIS is meant to be a throwback to memory lane where games are light, easy and fun in our 2D metaverse. Mesmerize yourself in the OASIS while immersing yourself in the good old days.",
        },
        {
          icon: require("@/assets/img/disclaimer/risk.png"),
          title: "Risk Disclaimer",
          description:
            "ProjectOASIS is meant to be a throwback to memory lane where games are light, easy and fun in our 2D metaverse. Mesmerize yourself in the OASIS while immersing yourself in the good old days.",
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