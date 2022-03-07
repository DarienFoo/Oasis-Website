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
            <span style="font-size: 2em" class="is-extra-bold">Roadmaps</span>
          </div>
        </div>
      </div>
      <div
        class="info-container columns is-multiline container-token"
        style="padding: 5em 4em 3em"
      >
        <!-- <div class="info-left column is-12 is-4-desktop container main">
          <div class="box roadmapsQ">
            <div
              class="columns is-mobile is-vcentered mb-0 pb-0"
              v-for="i in roadmapsQ"
              :key="i.id"
            >
              <div class="column is-3 p-0 m-0">
                <figure class="image is-64x64">
                  <img
                    class="is-rounded"
                    :src="
                      i.checked
                        ? require('@/assets/img/roadmaps/status/checkbox-on.png')
                        : require('@/assets/img/roadmaps/status/checkbox-off.png')
                    "
                  />
                </figure>
              </div>
              <div class="column p-0 m-0">
                <div
                  class="card is-transparent"
                  style="cursor: pointer !important"
                  @click="replaceImage(i.title)"
                >
                  <div class="card-image">
                    <figure class="image">
                      <a class="">
                        <img
                          :src="
                            i.isActive
                              ? require('@/assets/img/roadmaps/buttonActive.png')
                              : require('@/assets/img/roadmaps/buttonDefault.png')
                          "
                        />
                      </a>
                    </figure>
                  </div>
                  <div
                    class="
                      card-content
                      is-overlay is-flex is-align-items-center
                    "
                  >
                    <span class="roadmaps-title is-extra-bold">{{
                      i.title
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-right column is-12 is-8-desktop">
          <div class="box roadmapsQ-Right"></div>
        </div> -->
        <div
          class="
            info-left
            column
            is-12 is-4-desktop
            container
            main
            p-0
            m-0
            image-left-container
            roadmap-leftQ
          "
        >
          <div
            class="columns is-mobile is-vcentered mb-0 pb-0"
            v-for="i in roadmapsQ"
            :key="i.id"
          >
            <div class="column is-3 p-0 m-0">
              <figure class="image is-64x64">
                <img
                  class="is-rounded"
                  :src="
                    i.checked
                      ? require('@/assets/img/roadmaps/status/checkbox-on.png')
                      : require('@/assets/img/roadmaps/status/checkbox-off.png')
                  "
                />
              </figure>
            </div>
            <div class="column p-0 m-0">
              <div
                class="card is-transparent"
                style="cursor: pointer !important"
                @click="replaceImage(i.title)"
              >
                <div class="card-image">
                  <figure class="image">
                    <a class="">
                      <img
                        :src="
                          i.isActive
                            ? require('@/assets/img/roadmaps/buttonActive.png')
                            : require('@/assets/img/roadmaps/buttonDefault.png')
                        "
                      />
                    </a>
                  </figure>
                </div>
                <div
                  class="card-content is-overlay is-flex is-align-items-center"
                >
                  <span class="roadmaps-title is-extra-bold">{{
                    i.title
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-right column is-12 is-8-desktop roadmaps-right p-0">
          <section
            class="box listing-roadmaps"
            v-for="i in roadmapsDataList"
            :key="i.id"
          >
            <div class="roadmaps-data" v-if="i.img_url !== ''">
              <figure
                class="image is-5by5 roadmap-image-sction"
                style="padding: 2em 2em 3em 2em"
              >
                <img :src="i.img_url" alt="Description" />
              </figure>

              <ul id="botoes">
                <div>
                  <!-- <div v-if="i.dataInfo.length <= 3">
                    <li>
                      <figure class="image is-64x64">
                        <img
                          class="is-rounded"
                          :src="
                            z.checked
                              ? require('@/assets/img/roadmaps/status/checkbox-on.png')
                              : require('@/assets/img/roadmaps/status/checkbox-off.png')
                          "
                        />
                      </figure>
                    </li>
                    <li>
                      {{ z.lists }}
                    </li>
                  </div> -->
                  <!-- <div v-else> -->
                    <li v-for="z in i.dataInfo" :key="z.id">
                      <div class="columns is-mobile is-centered is-vcentered roadmaps-sections">
                        <div class="column is-1 m-2 p-1">
                          <figure class="image is-64x64">
                            <img
                              class="is-rounded"
                              :src="
                                z.checked
                                  ? require('@/assets/img/roadmaps/status/checkbox-on.png')
                                  : require('@/assets/img/roadmaps/status/checkbox-off.png')
                              "
                            />
                          </figure>
                        </div>
                        <div class="column ml-1" style="width: 15em;">
                          <span class="subtitle li" style="font-size: 1em;">{{ z.lists }}</span
                          ><br />
                        </div>
                      </div>
                    </li>
                  <!-- </div> -->
                </div>
              </ul>
            </div>
            <section class="hero coming-soon-page" v-if="i.img_url == ''">
              <div
                class="is-flex is-justify-content-center"
                style="height: 100% !important; align-items: center !important"
              >
                <span
                  style="font-size: 2em; padding: 0.8em"
                  class="is-extra-bold"
                  >COMING SOON</span
                >
              </div>
            </section>
          </section>
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
      open: 0,
      roadmapsQ: [
        {
          checked: 1,
          title: "Q1’ 2022",
          isActive: 0,
          img_url: require("@/assets/img/roadmaps/listing/Q1.png"),
        },
        {
          checked: 1,
          title: "Q2’ 2022",
          isActive: 0,
          img_url: require("@/assets/img/roadmaps/listing/Q2.png"),
        },
        {
          checked: 1,
          title: "Q3’ 2022",
          isActive: 0,
          img_url: "",
        },
        {
          checked: 1,
          title: "Q4’ 2022",
          isActive: 0,
          img_url: "",
        },
        {
          checked: 0,
          title: "2023 & Beyond",
          isActive: 0,
          img_url: "",
        },
      ],
      roadmapsData: [
        {
          title: "Q1’ 2022",
          infoData: [
            {
              img_url: require("@/assets/img/roadmaps/listing/Q1.png"),
              dataInfo: [
                {
                  checked: 0,
                  lists: "Zone Sharding System",
                },
                {
                  checked: 0,
                  lists: "Rework of Core Functions/UI",
                },
                {
                  checked: 0,
                  lists: "Lunar New Year Event",
                },
                {
                  checked: 0,
                  lists: "Website 2.0",
                },
                {
                  checked: 0,
                  lists: "Gamified whitelisting",
                },    
                {
                  checked: 0,
                  lists: "System Layering Architecture",
                },  
                {
                  checked: 0,
                  lists: "Migration to Web 3.0 Technology ",
                },                
              ],
            },
          ],
        },

        {
          title: "Q2’ 2022",
          infoData: [
            {
              img_url: require("@/assets/img/roadmaps/listing/Q2.png"),
              dataInfo: [
                {
                  checked: 0,
                  lists: "Oasis Carnival (Minigames) - P2E Beta",
                },
                {
                  checked: 0,
                  lists: "Interactable partnership module with building tools",
                },
                {
                  checked: 0,
                  lists: "Easy Access Integration tool for Oasis Metaverse (features, NFTs, mini-games)",
                },
                {
                  checked: 0,
                  lists: "Revolutionary Social Interaction Integration",
                },
                {
                  checked: 0,
                  lists: "Early Access Land Development",
                },                
              ],
            },
          ],
        },

        {
          title: "Q3’ 2022",
          infoData: [
            {
              img_url: require("@/assets/img/roadmaps/listing/Q3.png"),
              dataInfo: [
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },   
              ],
            },
          ],
        },

        {
          title: "Q4’ 2022",
          infoData: [
            {
              img_url: require("@/assets/img/roadmaps/listing/Q4.png"),
              dataInfo: [
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },   
              ],
            },
          ],
        },

        {
          title: "2023 & Beyond",
          infoData: [
            {
              img_url: require("@/assets/img/roadmaps/listing/2023.png"),
              dataInfo: [
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },
                {
                  checked: 0,
                  lists: "TBA",
                },   
              ],
            },
          ],
        },
      ],
      roadmapsDataList: [],
    };
  },
  mounted() {
    this.replaceImage("Q1’ 2022");
    $(document).ready(function () {});
  },
  methods: {
    replaceImage(title) {
      let chose_data = this.roadmapsQ.filter((user) => {
        return user.title.toLowerCase().includes(title.toLowerCase());
      });

      let filter_data = this.roadmapsData.filter((user) => {
        return user.title.toLowerCase().includes(title.toLowerCase());
      });

      // console.log("FILTER DATA", filter_data[0].infoData);
      this.roadmapsDataList = filter_data[0].infoData;

      if (filter_data[0].infoData[0].img_url !== "") {
        $(".coming-soon").hide();
      } else {
        $(".roadmap-image-sction").hide();
        $(".coming-soon").show();
      }
    },
  },
};
</script>
<style lang="scss">
@import "../assets/css/roadmap.css";
</style>