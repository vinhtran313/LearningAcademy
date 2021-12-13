<template>
  <div class="section-achievement-content">
    <a-row type="flex" justify="center" align="middle">
      <a-col
        :span="6"
        :xs="12"
        :md="12"
        :lg="6"
        class="text-center section-achievement-content__block"
        v-for="(item, index) in achievements"
        :key="index"
      >
        <div class="section-achiement-image">
          <img :src="item.url" class="img-responsive" />
        </div>
        <div class="section-achievement-text">
          <p>{{ item.text }}</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          url: "/media/homepage/achievement/achi-1.9ac3c45e.png",
          text: "levels",
        },
        {
          url: "/media/homepage/achievement/achi-2.62115232.png",
          text: "courses",
        },
        {
          url: "/media/homepage/achievement/achi-3.dba1b2d8.png",
          text: "exercises",
        },
        {
          url: "/media/homepage/achievement/achi-4.04313550.png",
          text: "finish",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.section-achievement {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
}
.section-achievement-title {
  align-self: center;
  h4 {
    border-top: 2px solid #f16322;
    width: fit-content;
    font-family: "iCielCadena";
    font-size: 2.4vmax;
    text-transform: uppercase;

    text-align: center;
    color: #1248f6;
    text-shadow: 5px 5px #fff;
    padding: 80px 0 50px;
  }
}
.section-achievement-content__block {
  padding: 20px;
}
.section-achievement-text {
  font-size: 30px;
  font-family: "iCielCadena";
  color: #1248f6;
}

@media only screen and (max-width: 576px) {
  .section-achievement-text {
    p {
      font-size: 20px;
    }
  }
}
</style>