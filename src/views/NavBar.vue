<template>
  <div class="has-margin">
    <nav class="" role="navigation" aria-label="main navigation">
      <div class="container navbar-brand" style="width: 100%;">
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
      <!-- <div
        class="navbar-menu container-fluid navbar-menu p-1 m-2"
        :class="{ 'is-active': showNav }"
        id="navMenu"
      > -->
        <div class="navbar-start pl-5 is-hidden-mobile">
          <a href="https://www.coingecko.com/en/coins/projectoasis" target="_blank" class="navbar-item">
            <img src="@/assets/img/logo/coingecko.png" width="45" />
          </a>
          <a href="https://coinmarketcap.com/currencies/projectoasis/" target="_blank" class="navbar-item">
            <img src="@/assets/img/logo/medium.png" width="45" />
          </a>
        </div>
        <div class="navbar">
          <a class="navbar-item" v-scroll-to="'#gameSection'">Game</a>
          <a class="navbar-item">About</a>
          <a class="navbar-item" v-scroll-to="'#chooseUs'">Why Us?</a>
          <a class="navbar-item" v-scroll-to="'#tekonomiks'">Tokenomics</a>
          <a class="navbar-item" v-scroll-to="'#roadmaps'">Roadmap</a>
          <a class="navbar-item" v-scroll-to="'#team'">Team</a>
          <a class="navbar-item" v-scroll-to="'#partners'">Partners</a>
          <a class="navbar-item">Litepaper</a>
          <a class="navbar-item">One Pager</a>
        </div>
        <div class="navbar-end is-hidden-mobile">
          <a class="navbar-item">
            <button type="submit" class="button balance is-fullwidth" disabled style="opacity: 1 !important">

              <span> {{this.oasisPrice}} $</span>
            </button>
          </a>
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
