<template>
  <div class="footer-wrapper">
    <div class="container-fluid main-footer">
      <div class="container">
        <footer class="footer">
          <a-row type="flex" justify="space-around">
            <a-col :span="8" :xs="24" :md="24" :lg="24" :xl="8">
              <img src="/media/homepage/footer1.png" class="footer-icon" />
              <div class="text-about">
                <a href="/">Futureacademy.pw</a>
                is a great experience, providing high quality Online courses for
                Pre-Primary, Elementary, Middle School, High School students.
                With the professional cooperation of teachers based on a variety
                of personalized methods and the supporting of modern
                technologies that help children feel interested in studying,
                master the knowledge and achieve the best results.
              </div>
            </a-col>
            <a-col
              :span="10"
              :xs="24"
              :md="24"
              :lg="24"
              :xl="8"
              class="link-wrapper"
            >
              <a-row
                type="flex"
                justify="start"
                style="margin-left: -10px; margin-right: -10px; row-gap: 20px"
              >
                <a-col
                  :span="12"
                  style="padding-left: 10px; padding-right: 10px"
                >
                  <span class="footer-title">About us</span>
                  <NuxtLink to="/about" class="footer-link"
                    >Introduction</NuxtLink
                  >
                  <NuxtLink to="/blog" class="footer-link">News</NuxtLink>
                </a-col>
                <a-col
                  :span="12"
                  style="padding-left: 10px; padding-right: 10px"
                >
                  <span class="footer-title">24/7 support</span>
                  <a href="/" class="footer-link">Study guidelines</a>
                  <a href="/" class="footer-link">Supporting Center</a>
                </a-col>

                <a-col
                  :span="24"
                  style="padding-left: 10px; padding-right: 10px"
                >
                  <span class="footer-title">Contact Us</span>
                  <div class="footer-icons">
                    <a href="/">
                      <img src="/media/homepage/footer/fb.png" />
                    </a>
                    <a href="/">
                      <img src="/media/homepage/footer/gmail.png" />
                    </a>
                    <a href="/">
                      <img src="/media/homepage/footer/youtube.png" />
                    </a>
                  </div>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="6" :xs="24" :md="24" :lg="24" :xl="8">
              <a-col :span="24" class="text-right logo">
                <img
                  src="/media/homepage/footer/logo1.png"
                  class="footer-logo"
                />
              </a-col>
              <a-col :span="24" class="text-right">
                <div class="footer-text">
                  <span class="footer-title-co-name"
                    >NODA INVESTMENT CONSULTING COMPANY LIMITED</span
                  ><span class="footer-span"
                    >Quezon City , Metro Manila, Philippines</span
                  ><span class="footer-span">TAX CODE: 0109533359</span>
                </div>
              </a-col>
            </a-col>
          </a-row>
        </footer>
      </div>
    </div>
    <div class="container-fluid">
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="24">
          <div id="topbar" class="text-center">
            <div class="topbar-text text-center">
              Copyright <small>&copy</small> Future Academy, NODA investment
              Consulting Company Limited. All rights reserved.
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-wrapper {
  margin-top: 160px;
}
.main-footer {
  background-color: #fff;
}
.link-wrapper {
  padding-top: 50px;
}
.footer-icon,
.footer-logo {
  margin-top: -100px;
}
.text-about {
  font-family: "r0c0i Regular";
  font-size: 16px;
  color: #000;
  padding-right: 60px;
  text-align: justify;
}
.footer-title,
.footer-title-co-name {
  display: block;
  font-size: 16px;
  color: #000;
  font-family: "r0c0i bold";
  margin-bottom: 16px;
  text-transform: uppercase;
}
.footer-title {
  border-bottom: 2px solid #f66b12;
}
.footer-link {
  display: block;
  font-size: 18px;
  color: #000;
  font-family: "r0c0i regular";
  margin-bottom: 15px;
}
.footer-icons img {
  margin-top: 20px;
  margin-right: 40px;
}
.footer-logo {
  width: 230px;
}
.footer-text {
  margin-top: 30px;
}
.footer-span {
  font-family: "r0c0i regular";
  display: block;
  font-size: 16px;
  color: #000;
  overflow-wrap: break-word;
}
#topbar {
  padding: 7.5px;
  min-height: 38px;
}
.topbar-text {
  font-size: 15px;
  color: #0074bd;
  font-family: "r0c0i Regular";
  text-align: center;
}
@media only screen and (max-width: 768px) {
  .topbar-text {
    font-size: 12px;
  }
  .footer-text {
    text-align: left;
  }
}
@media only screen and (max-width: 1200px) {
  .logo {
    text-align: left;
    .footer-logo {
      margin-top: 50px;
      width: 180px;
    }
  }
}
</style>