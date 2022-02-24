<template>
  <div class="has-margin header-nav">
    <nav class="" role="navigation" aria-label="main navigation">
      <div class="navbar container navbar-brand" style="width: 100%">
        <div
          class="navbar-burger burger"
          data-target="navMenu"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
        ></div>
        <a class="navbar-item">
          <figure class="image is-64x64 logo">
            <img src="@/assets/img/logo.png" />
          </figure>
        </a>
      </div>

      <div
        class="navbar-menu container navbar-menu"
        :class="{ 'is-active': showNav }"
        id="navMenu"
      >
        <div class="navbar-start pl-5 is-hidden-mobile">
          <a
            href="https://www.coingecko.com/en/coins/projectoasis"
            target="_blank"
            class="navbar-item"
          >
            <img src="@/assets/img/logo/coingecko.png" width="45" />
          </a>
          <a
            href="https://coinmarketcap.com/currencies/projectoasis/"
            target="_blank"
            class="navbar-item"
          >
            <img src="@/assets/img/logo/medium.png" width="45" />
          </a>
        </div>

        <div class="navbar">
          <a class="navbar-item text-items" data-text="Game" v-scroll-to="'#gameSection'"></a>
          <a class="navbar-item text-items" data-text="Why Us?" v-scroll-to="'#chooseUs'"></a>
          <a class="navbar-item text-items" data-text="Tokenomics" v-scroll-to="'#tekonomiks'"></a>
          <a class="navbar-item text-items" data-text="Roadmap" v-scroll-to="'#roadmaps'"></a>
          <a class="navbar-item text-items" data-text="Team" v-scroll-to="'#team'"></a>
          <a class="navbar-item text-items " data-text="Partners" v-scroll-to="'#partners'"></a>
          <a class="navbar-item text-items " data-text="Litepaper" href="https://projectoasis.io/assets/img/Oasis-Litepaper.pdf"></a> 
          <a class="navbar-item text-items " data-text="One Pager" href="https://projectoasis.io/assets/img/Oasis-1pager-3Oct.pdf"></a>           
        </div>

        <div class="navbar-end is-hidden-mobile">
          <div class="navbar-item">
            <a target="_blank" href="https://www.coingecko.com/en/coins/projectoasis" type="submit" class="button balance is-fullwidth" style="opacity: 1 !important">
              <span> {{this.oasisPrice}} $</span>
            </a>
          </div>
        </div>
      </div>
    </nav>

  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      oasisPrice: '',
      showNav: false,
    };
  },
  methods: {},
  mounted () {
    axios.get('https://api.coingecko.com/api/v3/simple/price/?ids=project-oasis&vs_currencies=usd')
    .then(response => (this.oasisPrice = response.data['project-oasis'].usd.toFixed(3)))
  }
};
</script>
<style lang="scss">
@import "../assets/css/navBar.css";
</style>
