<template>
  <div class="root">
    <div class="page">
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (process.browse) {
      document.addEventListener(
        "keydown",
        function (e) {
          if (e.keyCode == "F8") {
            // F8
            debugger;
          }
        },
        {
          capture: true,
        }
      );
    }
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-size: 16px;
}
#page {
  min-height: 40vh;
}
* {
  box-sizing: border-box;
}
@font-face {
  font-family: "r0c0i Bold";
  src: url(~assets/fonts/r0c0iBold.ttf) format("truetype");
}
@font-face {
  font-family: "r0c0i Regular";
  src: url(~assets/fonts/r0c0iRegular.ttf) format("truetype");
}
@font-face {
  font-family: "icielCadena";
  font-style: bold;
  font-weight: 400;
  font-display: swap;
  src: url(~assets/fonts/iCielCadena.otf) format("truetype");
}
html {
  line-height: 1; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
  overflow-x: hidden;
  background-color: #ffe8df;
}

main {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

hr {
  box-sizing: content-box; /* 1 */
  height: 1; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
.ant-timeline {
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  font-feature-settings: "tnum", "tnum";
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-timeline-item-tail {
  position: absolute;
  top: 10px;
  left: 4px;
  height: calc(100% - 10px);
  border-left: 2px solid #f0f0f0;
}
small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button {
  cursor: pointer;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  /* 1 */
  text-transform: none;
}

button:focus,
select:focus {
  outline: 0;
  box-shadow: none;
}

input:focus {
  outline: 0;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

body {
  background-color: #ffe8df;
  font-family: "r0c0i Bold";
  font-size: 16px;
}
.container-fluid {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.container {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.display-flex {
  display: flex;
}
.ant-calendar-picker {
  box-sizing: border-box;
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  padding: 4px 11px;
  position: relative;
  display: inline-flex;
  align-items: center;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: border 0.3s, box-shadow 0.3s;
}
.ant-input-affix-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  display: inline-flex;
  .ant-input {
    border: none;
    &:focus,
    &:hover {
      border: none !important;
      border-color: transparent !important;
      box-shadow: none;
    }
  }
}
.ant-select {
  position: relative;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  .ant-select-selection {
    border: none;
    background: transparent;
  }
}
</style>