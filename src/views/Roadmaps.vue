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
        <div
          class="
            info-right
            column
            is-12 is-8-desktop
            roadmaps-right
            image-right-container
          "
        >
          <figure
            class="image is-5by5 roadmap-image-sction"
            style="padding: 2em 2em 4em 2em"
          >
            <img
              class="image-roadmap-section"
              src="@/assets/img/roadmaps/list/Q1.png"
              alt="Description"
            />
          </figure>
          <section class="hero coming-soon">
            <div class="is-flex is-justify-content-center" style="height: 100% !important;align-items: center !important">
               <span style="font-size: 2em;padding: 0.8em;" class="is-extra-bold">COMING SOON</span>
            </div>
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
          img_url: require("@/assets/img/roadmaps/list/Q1.png"),
        },
        {
          checked: 1,
          title: "Q2’ 2022",
          isActive: 0,
          img_url: require("@/assets/img/roadmaps/list/Q2.png"),
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
    };
  },
  mounted() {
    $(document).ready(function () {});
  },
  methods: {
    replaceImage(title) {
      let chose_data = this.roadmapsQ.filter((user) => {
        return user.title.toLowerCase().includes(title.toLowerCase());
      });

      if (chose_data[0].img_url !== "") {
        $(".coming-soon").hide();
        $(".roadmap-image-sction").show();        
        $(".image-roadmap-section").attr("src", chose_data[0].img_url);
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