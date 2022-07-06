import Vue from 'vue'

const vue_fb = {}
vue_fb.install = function install (Vue, options) {
  (function (d, s, id) {
    let js; const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) { return }
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'

    fjs.parentNode.insertBefore(js, fjs)
    // console.log('setting fb sdk')
  }(document, 'script', 'facebook-jssdk'))

  window.fbAsyncInit = function onSDKInit () {
    FB.init(options)
    FB.AppEvents.logPageView()
    Vue.FB = FB
    window.dispatchEvent(new Event('fb-sdk-ready'))
  }
  Vue.FB = undefined
}

Vue.use(vue_fb, {
  appId: '5977521678940981',
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v2.9'
})
