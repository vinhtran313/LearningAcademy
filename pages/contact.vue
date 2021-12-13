<template>
  <div class="container">
    <div id="contact" style="padding-bottom: 100px">
      <div class="title"><h4>Contact</h4></div>
      <div class="content">
        <a-row
          type="flex"
          justify="center"
          style="margin-left: -25px; margin-right: -25px; row-gap: 50px"
        >
          <a-col
            :span="12"
            :xs="24"
            :md="12"
            class="wrapper"
            style="padding-left: 25px; padding-right: 25px"
          >
            <div class="item text-center">
              <div class="icon-block">
                <img
                  src="/media/contact/phone.png"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="block-content">
                <h5>Hotline</h5>
                <a href="tel:+63 2 8292 0688"><p>+63 2 8292 0688</p></a>
              </div>
            </div>
          </a-col>
          <a-col
            :span="12"
            :xs="24"
            :md="12"
            class="wrapper"
            style="padding-left: 25px; padding-right: 25px"
          >
            <div class="item text-center">
              <div class="icon-block">
                <img
                  src="/media/contact/email.png"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="block-content">
                <h5>Supporting Email</h5>
                <a href="mailto:sp.futureacademy@gmail.com"
                  ><p>sp.futureacademy@gmail.com</p></a
                >
              </div>
            </div>
          </a-col>
          <a-col
            :span="12"
            :xs="24"
            :md="12"
            class="wrapper"
            style="padding-left: 25px; padding-right: 25px"
          >
            <div class="item text-center">
              <div class="icon-block">
                <img
                  src="/media/contact/fb.png"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="block-content">
                <h5>Facebook</h5>
                <a target="blank" href="http://FB.com/future.academy.official"
                  ><p>FB.com/future.academy.official</p></a
                >
              </div>
            </div>
          </a-col>
          <a-col
            :span="12"
            :xs="24"
            :md="12"
            class="wrapper"
            style="padding-left: 25px; padding-right: 25px"
          >
            <div class="item text-center">
              <div class="icon-block">
                <img
                  src="/media/contact/location.png"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="block-content">
                <h5>Representative office</h5>
                <p>
                  Future Academy, Magsaysay Avenue, UP Diliman, Quezon City 1103
                </p>
              </div>
            </div>
          </a-col>
        </a-row>
        <a-row
          type="flex"
          justify="center"
          style="
            margin-left: -25px;
            margin-right: -25px;
            margin-top: 50px;
            row-gap: 50px;
          "
        >
          <a-col
            :span="12"
            :xs="24"
            :md="12"
            class="form-wrapper"
            style="padding-left: 25px; padding-right: 25px"
          >
            <div class="title">
              <h4>Leave your information<br />We will contact you soon</h4>
            </div>
            <div class="form">
              <form id="nest-messages">
                <a-row
                  type="flex"
                  justify="center"
                  align="middle"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <a-input
                    placeholder="Your full name"
                    v-model="name"
                  ></a-input>
                </a-row>
                <a-row type="flex" justify="center" align="middle">
                  <a-col
                    :span="12"
                    :xs="24"
                    :md="12"
                    style="padding-right: 10px; padding-left: 10px"
                  >
                    <a-input
                      placeholder="Phone number"
                      v-model="phone"
                    ></a-input>
                  </a-col>
                  <a-col
                    :span="12"
                    :xs="24"
                    :md="12"
                    style="padding-left: 10px; padding-right: 10px"
                  >
                    <a-input placeholder="Email" v-model="email"></a-input>
                  </a-col>
                </a-row>
                <a-row
                  type="flex"
                  justify="center"
                  align="middle"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <a-textarea
                    placeholder="Anything can we help you? "
                    :rows="4"
                    v-model="content"
                    style="padding: 5px 10px"
                  />
                </a-row>
                <a-row
                  type="flex"
                  align="middle"
                  style="padding-right: 10px; padding-left: 10px"
                >
                  <ButtonDefault
                    title="Send"
                    class="btn-send"
                    @clicked="submitForm"
                  />
                </a-row>
              </form>
            </div>
          </a-col>
          <div
            class="ant-col ant-col-12 ant-col-xs-24 ant-col-md-12"
            style="padding-left: 25px; padding-right: 25px; height: 500px"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.393841812374!2d121.05278298621349!3d14.650351936331882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7727440e5c5%3A0xe9492f4d0dd80c8f!2sUniversity%20of%20the%20Philippines%20Diliman%2C%20Diliman%2C%20Quezon%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2s!4v1638268895840!5m2!1sen!2s"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDefault from "../components/button/defaultButton.vue";
export default {
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
  components: {
    ButtonDefault,
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      content: "",
    };
  },
  methods: {
    onChangeName(e) {
      console.log(e);
    },
    submitForm() {
      console.log("Clicccckkkkkk");
    },
  },
};
</script>

<style lang="scss">
#contact {
  .title {
    font-family: "iCielCadena";
    text-transform: uppercase;
    font-weight: 700;
    font-size: 70px;
    text-align: center;
    margin: 20px 0;
    h4 {
      color: #ff6c29;
      text-shadow: 3px 3px 3px #fff;
    }
  }
  .wrapper {
    .item {
      padding: 25px;
      border-radius: 40px;
      border: 10px solid #ff6c29;
      border-top-width: 50px;
      .icon-block {
        position: absolute;
        top: -27px;
        left: 44%;
        img {
          max-width: 80px;
        }
      }
      .block-content {
        h5 {
          font-size: 25px;
          color: #969696;
          font-family: "r0c0i Regular";
          position: relative;
        }
        p {
          font-size: 31px;
          color: #ff6c29;
          font-family: "iCielCadena";
        }
      }
    }
  }
  .form-wrapper {
    .title {
      h4 {
        color: #00d847;
        font-size: 36px;
        text-shadow: none;
      }
    }
    input,
    textarea {
      border: 2px solid #00d847;
      border-radius: 18px;
      height: 50px;
    }
  }
}
.ant-input {
  box-sizing: border-box;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  margin: 0 0 24px;
  padding: 0 10px;
  vertical-align: top;
}
.btn-send {
  border: none;
  margin-top: 20px;
  color: #fff;
}
@media only screen and (max-width: 992px) {
  #contact .wrapper .item .block-content p {
    font-size: 22px;
  }
}
@media only screen and (max-width: 768px) {
  #contact .wrapper .item .block-content p {
    font-size: 16px;
  }
}
</style>