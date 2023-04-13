<template>
  <div class="has-margin header-nav">
    <nav class="" role="navigation" aria-label="main navigation">
      <div class="navbar container navbar-brand" style="width: 100%">
        <div
          class="navbar-burger burger"
          data-target="navMenu"
          @click="showNav = !showNav"
          :class="{ 'is-active': showNav }"
        >
          <div id="outerContainer">
                
            <div id="containerTest">
                    
              <div class="item">
                        <img src="@/assets/img/icon/hamburger.png" />       
              </div>
                    
              <div class="circle" style="animation-delay: 0s"></div>
              <div class="circle" style="animation-delay: 1s"></div>
                  
            </div>
              
          </div>
        </div>

        <a class="navbar-item logo-ui">
          <figure class="image logo">
            <img src="@/assets/img/newlogoV2.png" style="height: 80px; width: 114px;"/>
          </figure>
        </a>
      </div>

      <div
        class="navbar-menu navbar-menu"
        :class="{ 'is-active': showNav }"
        id="navMenu"
      >
        <div class="navbar-start pl-5 is-hidden-mobile">
          <a
            href="https://www.coingecko.com/en/coins/projectoasis"
            target="_blank"
            class="navbar-item"
            style="z-index: 9999999999"
          >
            <img src="@/assets/img/logo/coingecko.png" width="45" />
          </a>
          <a
            href="https://coinmarketcap.com/currencies/projectoasis/"
            target="_blank"
            class="navbar-item"
            style="z-index: 9999999999"
          >
            <img src="@/assets/img/logo/medium.png" width="45" />
          </a>
        </div>

        <div class="navbar">
          
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/game.png"
              width="25"
            />
            
          </a> 
          <a
            class="navbar-item text-items"
            data-text="Guides"
            href="https://www.youtube.com/playlist?list=PLqfg9du2-jVvj66ZsQ8GBpv1k0r4-T0zQ"
            target="_blank"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/guide.png"
              width="25"
            />

            
          </a>

          
          <a
            class="navbar-item text-items"
            data-text="Highlights"
            v-scroll-to="'#chooseUs'"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/whyus.png"
              width="25"
            />
          </a>
          <a
            class="navbar-item text-items"
            data-text="Tokenomics"
            v-scroll-to="'#tekonomiks'"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/Tokenomics.png"
              width="25"
            />
          </a>
          <a
            class="navbar-item text-items"
            data-text="Blog"
            href="https://projectoasis.io/blog/"
            target="_blank"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/blog.png"
              width="25"
            />

            
          </a>

          <a
            class="navbar-item text-items"
            data-text="Launchpad"
            href="https://launchpad.projectoasis.io/"
            target="_blank"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/launchpad.png"
              width="25"
            />

            
          </a>
          <a
            class="navbar-item text-items"
            data-text="Staking"
            href="https://staking.projectoasis.io/"
            target="_blank"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/STAKING.png"
              width="25"
            />

            
          </a>
          <!-- <a
            class="navbar-item text-items"
            data-text="Roadmap"
            v-scroll-to="'#roadmaps'"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/roadmap.png"
              width="25"
            />
          </a> -->
          <a
            class="navbar-item text-items"
            data-text="Team"
            v-scroll-to="'#team'"
          >
            <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/team.png"
              width="25"
            />
          </a>
          <a
            class="navbar-item text-items"
            data-text="Partners"
            v-scroll-to="'#partners'"
          >
           <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/heart.png"
              width="25"
          /></a>
     
          <a
            class="navbar-item text-items"
            data-text="Buy Avatars"
            href="https://tofunft.com/collection/oasis-attributed-nft/items"
            target="_blank"
          > 
          <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/game.png"
              width="25"
            />

            
            <!-- <img
              class="icon-nav"
              src="@/assets/img/navbar/logo/onepager.png"
              width="25"
            /> -->
          </a>
        </div>

        <div class="navbar-end is-hidden-mobile">
          <div class="navbar-item">
            <a
              target="_blank"
              href="https://www.coingecko.com/en/coins/projectoasis"
              type="submit"
              class="button balance is-fullwidth"
              style="z-index: 999999999999; opacity: 1 !important"
            >
              <span> {{ this.oasisPrice }} $</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      oasisPrice: "",
      showNav: false,
    };
  },
  methods: {},
  mounted() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price/?ids=project-oasis&vs_currencies=usd"
      )
      .then(
        (response) =>
          (this.oasisPrice = response.data["project-oasis"].usd.toFixed(3))
      );
  },
};
</script>
<style lang="scss">
@import "../assets/css/navBar.css";
</style>
