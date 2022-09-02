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
            <span style="font-size: 2em" H2 class="is-extra-bold">Tokenomics</span>
          </div>
        </div>
      </div>
      <div
        class="info-container columns is-multiline container-token"
        style="padding: 5em 0em 3em 0em"
      >
        <div class="info-left column is-12 is-6-desktop container main p-0 m-0">
          <div class="is-flex is-justify-content-center image-section-token">
            <a @click="showImageModal()">
              <img class="" src="@/assets/img/tokenomiks/chart.png" />
            </a>
          </div>
        </div>
        <div class="info-right column is-12 is-6-desktop tokenomics-right">
          <div class="tekonomics-container is-flex is-justify-content-center">
            <div class="no-padding-mobile tokenomics-data">
              <div class="columns is-mobile is-vcentered">
                <div
                  class="
                    content
                    token-desc
                    has-text-weight-bold has-text-black
                    is-medium-font
                  "
                >
                 
                </div>
              </div>

              <div class="columns is-mobile is-vcentered has-border-3px mb-0">
                <div class="column is-3 p-0 m-0">
                  <figure class="image is-64x64 tokenomiks-icon">
                    <img src="@/assets/img/tokenomiks/coinrestart.png" alt="" />
                  </figure>
                </div>
                <div class="column">
                  <span class="title tokenomiks-title is-medium-font"
                    >Circulating Supply Amount </span
                  ><br />
                  <span class="subtitle is-size-6 has-text-black"
                    ># of coins circulating in the market/general public's
                    hands, not controlled by team
                  </span>
                </div>
              </div>

              <div class="columns is-mobile is-vcentered has-border-3px mb-0">
                <div class="column is-3 p-0 m-0">
                  <figure class="image is-64x64 tokenomiks-icon">
                    <img
                      src="@/assets/img/tokenomiks/coingangster.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div class="column">
                  <span class="title tokenomiks-title is-medium-font"
                    >Total Supply Amount</span
                  ><br />
                  <span class="subtitle is-size-6 has-text-black"
                    ># of coins minted, minus any coins burned
                  </span>
                </div>
              </div>

              <div class="columns is-mobile is-vcentered">
                <div class="column is-3 p-0 m-0">
                  <figure class="image is-64x64 tokenomiks-icon">
                    <img src="@/assets/img/tokenomiks/coinbag.png" alt="" />
                  </figure>
                </div>
                <div class="column">
                  <span class="title tokenomiks-title is-medium-font"
                    >Max Supply Amount</span
                  ><br />
                  <span class="subtitle is-size-6 has-text-black"
                    ># of coins that will ever exist (hard-coded)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="modalImage">
      <div class="modal-background"></div>
      <div class="modal-content container is-flex is-justify-content-center is-align-items-center">
          <img class="" src="@/assets/img/tokenomiks/chart.png" width="900"/>
      </div>
      <button class="modal-close is-large" @click="closeModal()" aria-label="close"></button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    showImageModal() {
      $("#modalImage").addClass("is-active");
    },
    closeModal() {
      $("#modalImage").removeClass("is-active");      
    }
  },
  mounted() {
    $(document).ready(function () {});
  },
};
</script>
<style lang="scss">
@import "../assets/css/tekonomics.css";
</style>