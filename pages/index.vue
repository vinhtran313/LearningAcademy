<template>
  <div class="homepage container-fluid">
    <div class="hero-section">
      <div style="margin-top: -47%">
        <a-row type="flex" justify="center" align="middle">
          <a-col :span="12" :xs="20" :md="12">
            <div class="hero-info">
              <div class="hero-info-wrapper">
                <h1>Future Academy</h1>
                <h4>Philippine's Top Academy</h4>
                <h5>Comprehensive development of 2 subjects:</h5>
                <h6>Math and English</h6>
              </div>
            </div>
          </a-col>
        </a-row>
        <div class="container hero-slider-wrapper">
          <div class="hero-slider">
            <VueSlickCarousel v-bind="carrouselSetting">
              <template #prevArrow="heroArrowOption">
                <div class="custom-prev-arrow">
                  {{ heroArrowOption.currentSlide }}/{{
                    heroArrowOption.slideCount
                  }}
                </div>
              </template>
              <template #nextArrow="heroArrowOption">
                <div class="custom-next-arrow">
                  {{ heroArrowOption.currentSlide }}/{{
                    heroArrowOption.slideCount
                  }}
                </div>
              </template>

              <img
                v-for="(item, index) in carrouselImg"
                :key="index"
                class="hero-carrousel-image"
                :src="item.url"
              />
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div id="school-level-section">
        <div id="school-level">
          <a-row
            type="flex"
            justify="center"
            style="margin-left: -15px; margin-right: -15px; row-gap: 100px"
            v-if="storeListClass.length"
          >
            <a-col
              :span="8"
              :xs="24"
              :md="8"
              :lg="8"
              style="padding-left: 15px; padding-right: 15px"
            >
              <div
                class="school-level__block text-center"
                id="school-level__block-0"
              >
                <div class="school-level__block-icon">
                  <img
                    src="/media/homepage/level0.png"
                    alt="level0"
                    class="img-responsive"
                  />
                </div>
                <div class="school-level__block-content">
                  <h4
                    class="school-level__block-content__title"
                    id="school-level__block-content-title-0"
                  >
                    Pre-Primary
                  </h4>
                  <ul class="school-level__block_content_list-class">
                    <li
                      class="school-level__block_content_list-class_list-item"
                    >
                      <NuxtLink
                        :to="`/schools/${storeListClass[0].classes[0].id}`"
                        >Pre-Primary</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </a-col>
            <a-col
              :span="8"
              :xs="24"
              :md="8"
              :lg="8"
              style="padding-left: 15px; padding-right: 15px"
              ><div
                class="school-level__block text-center"
                id="school-level__block-1"
              >
                <div class="school-level__block-icon">
                  <img
                    src="/media/homepage/level1.png"
                    alt="level0"
                    class="img-responsive"
                  />
                </div>
                <div class="school-level__block-content">
                  <h4
                    class="school-level__block-content__title"
                    id="school-level__block-content-title-1"
                  >
                    Elementary
                  </h4>
                  <ul class="school-level__block_content_list-class">
                    <li
                      class="school-level__block_content_list-class_list-item"
                    >
                      <NuxtLink
                        :to="`/schools/${primaryClasses.classes[0].id}`"
                        >{{ primaryClasses.classes[0].classTitle }}</NuxtLink
                      >
                    </li>
                    <li
                      class="school-level__block_content_list-class_list-item"
                    >
                      <NuxtLink
                        :to="`/schools/${primaryClasses.classes[1].id}`"
                        >{{ primaryClasses.classes[1].classTitle }}</NuxtLink
                      >
                    </li>
                    <li
                      class="school-level__block_content_list-class_list-item"
                    >
                      <NuxtLink
                        :to="`/schools/${primaryClasses.classes[2].id}`"
                        >{{ primaryClasses.classes[2].classTitle }}</NuxtLink
                      >
                    </li>
                    <li
                      class="school-level__block_content_list-class_list-item"
                    >
                      <NuxtLink
                        :to="`/schools/${primaryClasses.classes[3].id}`"
                        >{{ primaryClasses.classes[3].classTitle }}</NuxtLink
                      >
                    </li>
                    <li
                      class="school-level__block_content_list-class_list-item"
                    >
                      <NuxtLink
                        :to="`/schools/${primaryClasses.classes[4].id}`"
                        >{{ primaryClasses.classes[4].classTitle }}</NuxtLink
                      >
                    </li>
                    <li
                      class="school-level__block_content_list-class_list-item"
                    >
                      <NuxtLink
                        :to="`/schools/${secondaryClasses.classes[0].id}`"
                        >{{ secondaryClasses.classes[0].classTitle }}</NuxtLink
                      >
                    </li>
                  </ul>
                </div>
              </div></a-col
            >
            <a-col
              :span="8"
              :xs="24"
              :md="8"
              :lg="8"
              style="padding-left: 15px; padding-right: 15px"
              ><div
                class="school-level__block text-center"
                id="school-level__block-2"
              >
                <div class="school-level__block-icon">
                  <img
                    src="/media/homepage/level2.png"
                    alt="level0"
                    class="img-responsive"
                  />
                </div>
                <div class="school-level__block-content">
                  <h4
                    class="school-level__block-content__title"
                    id="school-level__block-content-title-2"
                  >
                    Secondary School
                  </h4>
                  <ul class="school-level__block_content_list-class">
                    <!-- <a href="/"
                      ><li
                        class="school-level__block_content_list-class_list-item"
                      >
                        <span>6th Grade</span>
                      </li></a
                    >
                    <a href="/"
                      ><li
                        class="school-level__block_content_list-class_list-item"
                      >
                        <span>7th Grade</span>
                      </li></a
                    >
                    <a href="/"
                      ><li
                        class="school-level__block_content_list-class_list-item"
                      >
                        <span>8th Grade</span>
                      </li></a
                    >
                    <a href="/"
                      ><li
                        class="school-level__block_content_list-class_list-item"
                      >
                        <span>9th Grade</span>
                      </li></a
                    > -->
                  </ul>
                </div>
              </div></a-col
            >
          </a-row>
        </div>
      </div>
    </div>
    <div id="feature-section" class="feature">
      <div class="container">
        <div class="section-header">
          <div class="feature-title">
            <h4>Outstanding Lesson</h4>
          </div>
          <div class="feature-main">
            <a-row style="row-gap: 10px">
              <a-col
                :span="12"
                :xs="24"
                :md="24"
                :lg="12"
                class="text-left display-flex"
                style="padding-left: 15px; padding-right: 15px"
              >
                <div class="feature-main-content">
                  <!-- <div class="feature-main-content_title">
                    <h4>{{ featureMainContentTitle }}</h4>
                  </div> -->
                  <button class="feature-main-content_title">
                    {{ featureMainContentTitle }}
                  </button>
                  <div class="feature-main-content_text">
                    <div class="feature-main-content_text-wrapper">
                      <p>
                        <span> DEEP UNDERSTANDING, LONG-TERM MEMORY </span>
                      </p>
                    </div>
                  </div>
                  <button class="feature-main-content_button-wrapper">
                    <a href="/">See more ></a>
                  </button>
                </div>
              </a-col>
              <a-col :xs="24" :md="24" :lg="12" class="text-center">
                <div class="feature-main__slide">
                  <VueSlickCarousel
                    v-bind="featureCarrouselSetting"
                    @afterChange="featureCarouselChange"
                    @init="initFeatureCarousel"
                  >
                    <template #prevArrow="featureArrowOption">
                      <div class="custom-feature-prev-arrow">
                        {{ featureArrowOption.currentSlide }}/{{
                          featureArrowOption.slideCount
                        }}
                      </div>
                    </template>
                    <template #nextArrow="featureArrowOption">
                      <div class="custom-feature-next-arrow">
                        {{ featureArrowOption.currentSlide }}/{{
                          featureArrowOption.slideCount
                        }}
                      </div>
                    </template>

                    <img
                      v-for="(item, index) in featureSectionCarrousel"
                      :key="index"
                      class="feature-carrousel-image"
                      :src="item.url"
                    />
                  </VueSlickCarousel>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="section-banner">
          <a-row type="flex" justify="center" align="middle">
            <a-col :span="24">
              <div class="banner-block text-center">
                <img
                  src="/media/homepage/ban5.png"
                  alt="banner section"
                  class="img-responsive"
                />
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div class="container">
      <div id="teacher-list" class="section-teacher">
        <div class="section-teacher-title">
          <h4>Faculty member</h4>
        </div>
        <a-row type="flex" justify="center" align="middle">
          <a-col :span="24">
            <div class="section-teacher-content">
              <VueSlickCarousel v-bind="teacherCarrouselSetting">
                <div
                  v-for="(item, index) in teacherList"
                  :key="index"
                  class="teacher-block text-center"
                >
                  <div class="teacher-image">
                    <img :src="item.img" class="img-responsive" />
                  </div>
                  <div class="teacher-text">
                    <h5>{{ item.name }}</h5>
                    <p>{{ item.subject }}</p>
                    <p v-show="readMoreTeacher == false">
                      {{ item.description.slice(0, 70) }}...
                    </p>
                    <p
                      @click="readMoreTeacher = true"
                      v-show="readMoreTeacher == false"
                      class="readmore-trigger"
                    >
                      Show details
                    </p>
                    <p
                      v-show="readMoreTeacher == true"
                      v-html="item.description"
                    ></p>

                    <p
                      @click="readMoreTeacher = false"
                      v-show="readMoreTeacher == true"
                      class="readmore-trigger"
                    >
                      Collapse
                    </p>
                  </div>
                </div>
              </VueSlickCarousel>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="container">
      <div id="achievement" class="section-achievement">
        <div class="section-achievement-title">
          <h4>Student Achievements</h4>
        </div>
        <SectionAchievement />
      </div>
    </div>
    <div id="customer">
      <div class="section-customer">
        <div class="container">
          <div class="section-customer-title">
            <h4>Feedback</h4>
          </div>
          <div class="section-customer-content">
            <a-row
              type="flex"
              justify="center"
              align="middle"
              style="padding-bottom: 50px"
            >
              <a-col :span="8" :xs="24" :md="8" class="text-center">
                <div class="section-customer-content-image">
                  <img
                    class="img-responsive"
                    src="/media/homepage/customer/feed1.png"
                    alt=""
                  />
                </div>
              </a-col>
              <a-col
                :span="16"
                :xs="24"
                :md="16"
                class="text-center"
                style="padding-left: 15px; padding-right: 15px"
              >
                <div class="section-customer-content-text">
                  <h4 class="title">Liezel Quindao</h4>
                  <p>
                    My son has been studying for 3 months. In the past, he were
                    lazy and unwilling study , we had to observe and force him
                    to learn. Since joining the program, he really enjoy
                    learning, he starts learning every 7 p.m. At first, I have
                    to observe him in some sessions but everything has
                    changed...
                  </p>
                </div>
              </a-col>
            </a-row>
            <a-row type="flex" justify="center" align="middle">
              <a-col :span="24">
                <VueSlickCarousel v-bind="customerCarrouselSetting">
                  <div
                    v-for="(item, index) in customerList"
                    :key="index"
                    class="customer-block text-center"
                  >
                    <div class="section-customer__text">
                      <h4 class="section-customer__text-title">
                        {{ item.name }}
                      </h4>
                      <p class="section-customer__text-content">
                        {{ item.description }}
                      </p>
                    </div>
                    <div class="section-customer__image">
                      <img :src="item.url" />
                    </div>
                  </div>
                </VueSlickCarousel>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
    <div class="section-space">
      <div class="container">
        <div id="blog-list" class="section-blog">
          <div class="section-blog-title">
            <h4>News</h4>
          </div>
          <div class="section-blog-content">
            <a-row
              type="flex"
              justify="center"
              align="middle"
              v-if="blogList.length > 0"
            >
              <a-col :span="24">
                <VueSlickCarousel v-bind="blogCarrouselSetting">
                  <div
                    v-for="item in blogList"
                    :key="item._id"
                    class="blog-block text-center"
                  >
                    <div class="item">
                      <NuxtLink :to="`/blog/${item._id}`">
                        <div class="section-blog-image">
                          <img :src="item.thumbnail" class="img-responsive" />
                        </div>
                      </NuxtLink>

                      <div class="section-blog-text">
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.content }}...</p>
                      </div>
                    </div>
                  </div>
                </VueSlickCarousel>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import SectionAchievement from "../components/homepage/achievement/achievement.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  layout: "default",
  components: {
    VueSlickCarousel: VueSlickCarousel,
    SectionAchievement: SectionAchievement,
  },
  head() {
    return {
      title: "Future Academy",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  data() {
    return {
      carrouselSetting: {
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        autoPlay: true,
        centerPadding: "0px",
        slidesToShow: 3,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
      },
      featureCarrouselSetting: {
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        accessibility: false,
        autoPlay: true,
        centerPadding: "0px",
        slidesToShow: 1,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
      },
      teacherCarrouselSetting: {
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        accessibility: false,
        centerPadding: "0px",
        slidesToShow: 3,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
        ],
      },
      customerCarrouselSetting: {
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        accessibility: false,
        centerPadding: "0px",
        slidesToShow: 3,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
        ],
      },
      blogCarrouselSetting: {
        focusOnSelect: true,
        infinite: true,
        accessibility: false,
        dots: true,
        speed: 500,
        centerPadding: "0px",
        slidesToShow: 4,
        rows: 1,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
        ],
      },
      featureSectionCarrousel: [
        {
          subject: "English 1",
          url: "/media/homepage/feature-carousel/1tch.png",
        },
        {
          subject: "English 2",
          url: "/media/homepage/feature-carousel/2tch.png",
        },
        {
          subject: "English 3",
          url: "/media/homepage/feature-carousel/3tch.png",
        },
        {
          subject: "English 4",
          url: "/media/homepage/feature-carousel/4tch.png",
        },
        {
          subject: "English 5",
          url: "/media/homepage/feature-carousel/5tch.png",
        },
      ],
      carrouselImg: [
        {
          url: "/media/homepage/carousel/ban1.png",
        },
        {
          url: "/media/homepage/carousel/ban2.png",
        },
        {
          url: "/media/homepage/carousel/ban3.png",
        },
        {
          url: "/media/homepage/carousel/ban4.png",
        },
      ],
      heroArrowOption: {
        currentSlide: 1,
        slideCount: 10,
      },
      featureArrowOption: {
        currentSlide: 1,
        slideCount: 10,
      },
      teacherArrowOption: {
        currentSlide: 1,
        slideCount: 10,
      },
      featureCarouselIndex: 1,
      teacherList: [
        {
          name: "Ms. Susan",
          subject: "English Teacher",
          description:
            "Ms. Susan is a passionate primary school teacher, she has been teaching in England for 4 years. She served as a teacher at schools in different cities and districts, as well as teaching at special education schools. She has experience working with students of KS2 and Kindergarten, she wants to apply her passion in each class so that students develop social, emotional, child aspects, people. <br/>Degree:<br/>- Bachelor of Arts majoring in English Language and Literature. <br/>- Master of Education, majoring in Primary Education, Comprehensive Education.",
          img: "/media/homepage/teacher/teacher1.png",
        },
        {
          name: "Mr. Daniel",
          subject: "English Teacher",
          description:
            "Mr. Daniel is passionate about languages and can speak many languages. He has extensive experience teaching English in different settings such as primary schools in the UK. After graduating from university in 2012, he has accumulated a wealth of teaching experience as a full-time primary school teacher, teaching students from a variety of cultures. With a love of languages, he studied for a Certificate in Teaching English to Foreigners (CELTA) from Cambridge University.At the school, he is constantly improving his language skills and now he is participating in many internationally recognized language training programs. Mr. Mathew is committed to providing maximum opportunities to help BVIS students develop their English skills.<br/>Degree:<br/>- Primary School Teacher KS1/2.<br/>- BA with Honors in Education and Sport, Liverpool Hope University, UK.<br/>- Postgraduate Certificate in Education, University of Chester, UK.<br/>- Certificate in Professional Education, Schools Direct Crewe Alliance.<br/>- CELTA Certificate, University of Cambridge, UK.",
          img: "/media/homepage/teacher/teacher2.png",
        },
        {
          name: "Ms. Phoebe",
          subject: "English Teacher",
          description:
            "Ms. Phoebeis a passionate primary school teacher, she has been teaching in England for 4 years. She served as a teacher at schools in different cities and districts, as well as teaching at special education schools. She has experience working with students of KS2 and Kindergarten, she wants to apply her passion in each class so that students develop social, emotional, child aspects, people.At the school, she is constantly improving her language skills and now she is participating in many internationally recognized language training programs. She is committed to providing maximum opportunities to help BVIS students develop their English skills.<br/>Degree:<br/>- Primary School Teacher KS1/2.<br/>- BA with Honors in Education and Sport, Liverpool Hope University, UK.<br/>- Postgraduate Certificate in Education, University of Chester, UK.<br/>- Certificate in Professional Education, Schools Direct Crewe Alliance.<br/>- CELTA Certificate, University of Cambridge, UK.",
          img: "/media/homepage/teacher/teacher3.png",
        },
        // {
        //   name: "Ms. Yen",
        //   subject: "Vietnamese Teacher",
        //   description:
        //     "Ms. Yen Vietnamese Teacher Tran Bao Yen She graduated with Honors from  Hanoi National University of Educattion. Ms. Yen always wants to improve her teaching experience , innovating learning methods to help her students access knowledge more easily . Future Academy believes that through her teaching and learning experience, students will be more passionate and love learning, will not feel afraid when learning.",
        //   img: "/media/homepage/teacher/coyen.png",
        // },
      ],
      readMoreTeacher: false,
      customerList: [
        {
          url: "/media/homepage/customer/feed2.png",
          name: "Nicole Navarro",
          description:
            "My son is not lazy but his analytical ability is still slow, so his learning results are not good. I believe that every parent wants their child have good score. Therefore,  inspite of busy sometime I still try my best to put my work off to take care of my child...",
        },
        {
          url: "/media/homepage/customer/feed1.png",
          name: "Liezel Quindao",
          description:
            "My son has been studying for 3 months. In the past, he were lazy and unwilling study , we had to observe and force him to learn.  Since joining the program, he really enjoy learning, he starts learning every 7 p.m. At first, I have to observe him in some sessions but everything has changed......",
        },
        {
          url: "/media/homepage/customer/feed3.png",
          name: "Marikit Gomez",
          description:
            "The course helps my children understand the lesson, expand his knowledge  and skills. After studying for a while, I see that my child has improved a lot, he is more excited about learning. Thank you so much for this progress.",
        },
        // {
        //   url: "/media/homepage/customer/64fe48b9-d60d-495d-a793-b499f520ff18.png",
        //   name: "Bui Thi Huyen",
        //   description:
        //     "This course is very lively and understandable, my kid is very interested in the lesson, he learns like when he watching a cartoon. My son is very enjoying so he can understand most of the lesson in class, therefore his learning is also much easier.",
        // },
        // {
        //   url: "/media/homepage/customer/9c1556c9-755d-4c58-b23f-050ed1eabc22.png",
        //   name: "Tran Van Dung",
        //   description:
        //     "Currently, my child is doing well in school, I also want to send him to a good tutoring class. When studying at Future Academy, she said that the center has a lot of diverse lessons and exercises, including an advanced section. Especially, there are many weekly and monthly mock tests. ",
        // },
      ],
      blogList: [],
    };
  },
  computed: {
    featureMainContentTitle() {
      if (this.featureCarouselIndex == 0) {
        return "English 1";
      }
      if (this.featureCarouselIndex == 1) {
        return "English 2";
      }
      if (this.featureCarouselIndex == 2) {
        return "English 3";
      }
      if (this.featureCarouselIndex == 3) {
        return "English 4";
      }
      return "English 5";
    },
    blogListComputed() {
      return this.blogList;
    },
    storeListClass: {
      get: function () {
        return this.$store.state.class.listClass;
      },
      set: function (value) {
        return;
      },
    },
    primaryClasses() {
      return this.storeListClass[1];
    },
    secondaryClasses() {
      return this.storeListClass[2];
    },
  },
  methods: {
    initFeatureCarousel() {
      this.featureCarouselIndex = 0;
    },
    featureCarouselChange(value) {
      this.featureCarouselIndex = value;
    },
    async fetchData() {
      let res = await this.$axios.$get("/news");
      this.blogList = res.results;
      if (process.browser) {
        for (let i = 0; i < this.blogList.length; i++) {
          let output = this.decode(this.blogList[i].content);
          const html = output;
          let template = document.createElement("template");
          template.innerHTML = html;
          this.blogList[i].content =
            template.content.firstElementChild.innerText.slice(0, 80);
        }
      }
    },
    decode(html) {
      if (process.browser) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss">
@import "~/static/scss/home.scss";
</style>
