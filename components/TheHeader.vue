<template>
  <div class="header">
    <a-row>
      <a-col>
        <div class="topbar"></div>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="middle" id="header-main">
      <a-col
        :span="8"
        :xs="{ span: 12, push: 12 }"
        :md="0"
        :lg="0"
        class="responsive-header-menu"
      >
        <a-dropdown :trigger="['click']">
          <img
            src="/media/menu-logo.png"
            class="img-responsive menu-trigger-icon"
          />
          <a-menu
            slot="overlay"
            class="dropdown-menu"
            v-if="storeListClass.length"
          >
            <a-menu-item>
              <NuxtLink :to="`/schools/${storeListClass[0].classes[0].id}`"
                >Classroom</NuxtLink
              >
            </a-menu-item>
            <a-menu-item>
              <NuxtLink to="/contact">Contact</NuxtLink>
            </a-menu-item>
            <a-menu-item>
              <NuxtLink to="/about">About us</NuxtLink>
            </a-menu-item>
            <a-menu-item>
              <NuxtLink to="/profile">Profile</NuxtLink>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <button v-if="!$auth.loggedIn" class="btn-login-mobile">
          <NuxtLink to="/login">LOGIN</NuxtLink>
        </button>
        <button v-else class="btn-login-mobile" @click="logout">Logout</button>
      </a-col>
      <a-col
        :span="6"
        :xs="{ span: 12, pull: 12 }"
        :md="{ span: 5, pull: 0 }"
        :lg="6"
        class="logo"
      >
        <div id="logo">
          <NuxtLink to="/" class="menu-logo">
            <img
              src="/media/logo.png"
              alt="sweat-logo"
              class="img-responsive"
            />
          </NuxtLink>
        </div>
      </a-col>
      <a-col :span="7" :xs="0" :md="8" :lg="8">
        <div id="menu" class="text-center">
          <a-menu mode="horizontal" class="header-main-menu">
            <a-sub-menu class="header-menu-item">
              <span
                slot="title"
                class="submenu-title-wrapper header-menu-title"
              >
                <img
                  src="/media/menu-logo.png"
                  class="img-responsive menu-trigger-icon"
                />
                CLASS
              </span>
              <a-menu-item v-if="storeListClass.length">
                <NuxtLink :to="`/schools/${storeListClass[0].classes[0].id}`"
                  >Pre-Primary</NuxtLink
                >
              </a-menu-item>
              <a-sub-menu v-if="storeListClass.length">
                <span slot="title">Elementary</span>
                <a-menu-item
                  v-for="(item, index) in primaryClasses.classes"
                  :key="index"
                >
                  <NuxtLink :to="`/schools/${item.id}`">{{
                    item.classTitle
                  }}</NuxtLink>
                </a-menu-item>
                <a-menu-item>
                  <NuxtLink
                    :to="`/schools/${secondaryClasses.classes[0].id}`"
                    >{{ secondaryClasses.classes[0].classTitle }}</NuxtLink
                  >
                </a-menu-item>
              </a-sub-menu>
              <a-menu-item v-if="storeListClass.length">
                <span>Middle School</span>
                <!-- <a-menu-item
                  v-for="(item, index) in secondaryClasses.classes"
                  :key="index"
                >
                  <NuxtLink :to="`/schools/${item.id}`">{{
                    item.classTitle
                  }}</NuxtLink>
                </a-menu-item> -->
              </a-menu-item>
              <!-- <a-sub-menu v-if="storeListClass.length">
                <span slot="title">High School</span>
                <a-menu-item
                  v-for="(item, index) in highschoolClasses.classes"
                  :key="index"
                >
                  <NuxtLink :to="`/schools/${item.id}`">{{
                    item.classTitle
                  }}</NuxtLink>
                </a-menu-item>
              </a-sub-menu> -->
            </a-sub-menu>
            <a-menu-item class="header-menu-item">
              <NuxtLink to="/contact" class="header-menu-title">
                CONTACT
              </NuxtLink>
            </a-menu-item>
            <a-menu-item class="header-menu-item">
              <NuxtLink to="/about" class="header-menu-title">
                ABOUT US
              </NuxtLink>
            </a-menu-item>
          </a-menu>
        </div>
      </a-col>
      <a-col :span="3" :xs="0" :md="5" :lg="4">
        <a href="/">
          <div class="phone-wrapper">
            <div class="border">
              <img
                src="/media/contact-logo.png"
                alt="Hello"
                class="img-responsive"
              />
              <span>+63 2 8292 0688</span>
            </div>
          </div>
        </a>
      </a-col>
      <a-col :span="8" :xs="0" :md="6" :lg="6">
        <div class="user-block" v-if="$auth.loggedIn">
          <NuxtLink to="/profile" class="user-block-link">
            <img
              src="/media/user-logo.png"
              alt="user-block"
              class="img-responsive"
            />
            <span v-if="$auth.user.name && $auth.user.name.length < 9">{{
              $auth.user.name
            }}</span>
            <span v-else-if="$auth.user.name"
              >{{ $auth.user.name.slice(0, 8) }}...</span
            >
          </NuxtLink>
          <a href="/" class="header-menu-item logout-button" @click="logout"
            >Logout</a
          >
        </div>
        <div class="user-block" v-if="!$auth.loggedIn">
          <NuxtLink to="/login" class="user-block-link">LOGIN</NuxtLink>
          <NuxtLink to="/register" class="user-block-link">SIGN UP</NuxtLink>
        </div>
      </a-col>
      <a-col :xs="0" :md="0" :lg="0"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    this.fetchListClass();
  },
  data() {
    return {
      listClass: [],
    };
  },
  computed: {
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
    highschoolClasses() {
      return this.storeListClass[3];
    },
  },
  methods: {
    async logout() {
      await this.$auth.reset();
    },
    async fetchListClass() {
      this.$store.dispatch("class/getList");
    },
  },
};
</script>

<style lang="scss">
.topbar {
  min-height: 46px;
}
.img-responsive {
  max-width: 100%;
  height: auto;
  width: auto;
}
.menu-logo {
  position: absolute;
  display: inline-block;
  margin-top: -10%;
  margin-left: 16%;
}
#header-main {
  background-color: #ff6c29;
  color: #fff;
  padding: 5px 0 5px 0;
}
.header-main-menu {
  background: transparent;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-menu-title {
  color: #fff !important;
  display: flex;
  align-items: center !important;
  font-size: 1.4vmax;
}

.menu-trigger-icon {
  margin-right: 20px;
  margin-bottom: 10px;
}

.header-menu-item {
  padding: 10px 20px;
  color: #fff !important;
  border: none !important;
  transition: none !important;
}
.header-menu-item:hover {
  color: #fff !important;
  border: none !important;
  transition: none !important;
}
.header-menu-item .ant-menu-submenu-title:hover {
  color: #fff !important;
  transition: none;
}
.header-menu-item .ant-menu-submenu-title {
  padding: 0;
}
.phone-wrapper .border {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
}
.border img {
  max-width: 45px;
}
.border span {
  font-size: 1.4vmax;
  color: #fff;
  margin-left: 5px;
}
.logout-button {
  font-size: 1.4vmax;
}
.user-block {
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
}
.ant-menu-submenu-popup {
}
.ant-menu-submenu {
  .ant-menu {
    background-color: #ff6c29;
    border-radius: 4px;
    color: #fff;
    li:hover {
      color: #fff;
    }
  }
  a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  .span {
    &:hover,
    &:focus {
      color: #fff !important;
    }
  }
}

.ant-menu-item:hover,
.ant-menu-item-active,
.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-submenu-active,
.ant-menu-submenu-title:hover {
  color: #fff !important;
}

.ant-menu-submenu-vertical
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-left
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-right
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::before,
.ant-menu-submenu-inline
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-left
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-right
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::after,
.ant-menu-submenu-inline
  > .ant-menu-submenu-title
  .ant-menu-submenu-arrow::after {
  background-image: none;
}
.ant-menu-submenu-vertical
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-left
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-right
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::after,
.ant-menu-submenu-inline
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-left
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-right
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::before,
.ant-menu-submenu-inline
  > .ant-menu-submenu-title:hover
  .ant-menu-submenu-arrow::before {
  background: linear-gradient(to right, #fff, #fff);
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #ff6c29;
}
.ant-menu-submenu-selected {
  color: #fff !important;
}
.user-block {
  height: 100%;
  display: flex;
  padding: 0 30px;
  justify-content: space-around;
  align-items: center;
  a {
    font-family: "r0c0i bold";
    font-size: 1.4vmax;
    color: #fff;
    text-transform: uppercase;
  }
}
// Responsive
.dropdown-menu {
  background-color: #ff6c29;
  color: #fff;
  padding: 0;
  .ant-dropdown-menu-item {
    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
    a {
      color: #fff;
    }
  }
}

//Mobile
@media only screen and (max-width: 1200px) {
  .phone-wrapper {
    img {
      max-width: 30px;
    }
  }
  .user-block-link img {
    max-width: 40px;
  }
  #logo {
    .menu-logo {
      display: inline-block;
      margin-top: -16%;
      position: absolute;
      margin-left: 16%;
    }
  }
}
@media only screen and (max-width: 992px) {
  #header-main {
    #logo {
      padding: 10px;
      .menu-logo {
        position: relative;
        margin: 0;
      }
    }

    .header-menu-title,
    .user-block a,
    .border span {
      font-size: 14px;
    }
    .header-menu-item {
      padding: 0;
    }
    .menu-trigger-icon {
      margin: 0;
      margin-right: 10px;
    }

    .user-block {
      padding: 0;
    }
  }
}
@media only screen and (max-width: 768px) {
  #header-main {
    #logo {
      .menu-logo {
        position: relative;
        margin: 0;
      }
    }

    .header-menu-title,
    .user-block a,
    .border span {
      font-size: 14px;
    }
    .header-menu-item {
      padding: 0;
    }
    .menu-trigger-icon {
      margin: 0;
      margin-right: 10px;
    }
    .phone-wrapper {
      img {
        max-width: 30px;
      }
    }
    .user-block {
      padding: 0;
    }
    .user-block-link img {
      max-width: 30px;
    }
  }
}
@media only screen and (max-width: 576px) {
  .btn-login-mobile {
    padding: 7px 0;
    background-color: #2894ff;
    font-size: 16px;
    min-width: 90px;
    box-shadow: none;
    border: 2px solid #fff;
    border-radius: 13px;
    font-family: "icielCadena";
    text-transform: uppercase;
    line-height: 15px;
    a {
      color: #fff;
    }
  }
  .responsive-header-menu {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
  }

  #logo {
    padding: 10px;
    .menu-logo {
      position: relative;
      margin-top: 0;
      margin-left: 0;
    }
  }
  .ant-dropdown-trigger {
    margin: 0;
    padding: 10px 15px;
  }
}
</style>
