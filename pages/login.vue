<template>
  <div class="login-bg" id="login-page">
    <div class="container">
      <h4 class="login-title">Sign In</h4>
      <div class="text-center" style="margin-bottom: 20px">
        <span class="login-sub-title">
          Fill in the following form and click "Sign in"
        </span>
      </div>
      <a-form
        :form="form"
        :label-col="{ span: 12 }"
        :wrapper-col="{ span: 5 }"
        @submit="handleSubmitLogin"
      >
        <a-form-item
          label="Your account ( Phone number):"
          class="login-input-item"
        >
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please fill in your phone number',
                  },
                ],
              },
            ]"
            class="login-input-field"
          ></a-input>
        </a-form-item>
        <a-form-item label="Password:" class="login-input-item">
          <a-input-password
            allow-clear
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please fill in your password',
                  },
                ],
              },
            ]"
            class="login-input-field password-field"
          ></a-input-password>
        </a-form-item>
        <a-form-item
          :wrapper-col="{ span: 14, offset: 5 }"
          class="responsive-button"
        >
          <a-button type="primary" html-type="submit" class="btn-login btn-df">
            Sign in
          </a-button>
        </a-form-item>
        <span class="login-sub-title" style="display: block"
          >You don’t have any account ?
        </span>
        <a-form-item
          :wrapper-col="{ span: 14, offset: 5 }"
          class="responsive-button"
        >
          <a-button
            type="primary"
            class="btn-register btn-df btn-register-routing"
            ><NuxtLink to="/register">Register</NuxtLink></a-button
          >
        </a-form-item>
        <span class="login-sub-title" style="display: block"
          >Fogot your password?</span
        >
        <a-form-item
          :wrapper-col="{ span: 14, offset: 5 }"
          class="responsive-button"
        >
          <a-button
            type="primary"
            class="btn-register btn-df btn-resetpass-routing"
            ><NuxtLink to="/resetpassword"
              >Restore password
            </NuxtLink></a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import ButtonDefault from "../components/button/defaultButton.vue";

export default {
  middleware: "auth",
  components: {
    ButtonDefault,
  },
  head() {
    return {
      title: "Future Academy - Login",
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
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "loginForm" }),
    };
  },
  methods: {
    async handleSubmitLogin(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          let res = this.$auth
            .loginWith("local", {
              data: values,
            })
            .then(async (res) => {
              await this.getUserInfo(res.data.user.id);
            })
            .catch((err) => {
              this.form.setFields({
                phone: {
                  errors: [
                    {
                      message: "Wrong phone number or password",
                      field: "phone",
                    },
                  ],
                },
                password: {
                  errors: [
                    {
                      message: "Wrong phone number or password",
                      field: "password",
                    },
                  ],
                },
              });
            });
        }
      });
    },
    getUserInfo(userId) {
      this.$axios
        .$get(`/users/info/${userId}`)
        .then((res) => {
          this.$auth.$storage.setUniversal("user", res, true);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log("Co loi xay ra");
          return this.$nuxt.error({
            statusCode: err.statusCode,
            message: "Something went wrong. Please try again.",
          });
        });
    },
  },
};
</script>

<style lang="scss">
@import "~/static/scss/login.scss";
.login-title {
  font-size: 38px !important;
  font-family: "iCielCadena";
  color: #ff6c29 !important;
  text-transform: uppercase;
  text-shadow: 5px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff,
    0 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
.btn-login {
  border: none !important;
  background: url("/media/button-bg-orange.png") !important;
  background-repeat: no-repeat;
  background-size: cover !important;
}
.btn-register-routing {
  width: 200px;
  height: 50px !important;
  font-size: 25px !important;
  font-weight: 900 !important;
}
.btn-resetpass-routing {
  width: 250px;
  height: 70px !important;
  font-size: 25px !important;
  font-weight: 900 !important;
  margin-bottom: 50px;
}
.password-field {
  .ant-input {
    text-align: left;
    padding: 0;
  }
}

@media only screen and (max-width: 576px) {
  .responsive-button {
    .ant-form-item-control-wrapper {
      text-align: center;
      margin-left: 0;
    }
  }
  #login-page .login-sub-title {
    font-size: 18px !important;
  }
}
</style>