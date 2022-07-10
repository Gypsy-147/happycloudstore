<template>
  <div class="flex flex-col h-screen justify-between relative bg-white">
    <!--  COMPONENT: HEADER -->
    <!-- <li><a href="#collections">collections</a></li>
          <li><a href="#blog">blog</a></li> -->
    <header>
      <!-- <header class="fixed top-0 left-0 right-0 z-50"> -->
      <div id="nav" class="navbar bg-base-200">
        <div class="navbar-start">
          <a href="/"> <img src="/happycloudlogo.png" class="h-16" alt="logo"> </a>
        </div>
        <div class="hidden navbar-center lg:flex">
          <ul class="p-0 menu menu-horizontal">
            <li><a href="/">HOME</a></li>
            <li tabindex="0">
              <a href="/productsall">
                PRODUCTS
                <!-- <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg> -->
              </a>
              <!-- <ul class="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul> -->
            </li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <div class="flex-none">
            <!-- <div class="dropdown dropdown-end">
              <label tabindex="0" class="snipcart-customer-signin btn glass bg-primary btn-circle">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="w-5 h-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  ><circle cx="26" cy="16" r="4" fill="currentColor" /><path fill="currentColor" d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zM12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" /></svg>
                </div>
              </label>
            </div> -->
            <!-- <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn glass bg-primary btn-circle">
                <div class="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span class="badge badge-sm indicator-item snipcart-items-count" />
                </div>
              </label>
              <div tabindex="0" class="mt-3 shadow card card-compact dropdown-content w-52 bg-base-100">
                <div class="card-body">
                  <span>
                    <span class="text-lg font-bold snipcart-items-count" /> Items
                  </span>
                  <span>
                    Subtotal: <span class="text-info snipcart-total-price" />
                  </span>
                  <div class="card-actions">
                    <button class="btn btn-primary btn-block snipcart-checkout">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="dropdown dropdown-end">
              <label tabindex="0" class="btn glass bg-primary btn-circle lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabindex="0" class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li><a href="/">Home</a></li>
                <li tabindex="0">
                  <a href="/productsall" class="justify-between">
                    Products
                  <!-- <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> -->
                  </a>
                <!-- <ul class="p-2 bg-base-100">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul> -->
                </li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="bg-white">
      <Nuxt />
    </div>
    <footer class="bg-base-200">
      <section class="py-6 text-base-content">
        <div class="container max-w-screen-xl px-4 mx-auto">
          <div class="flex flex-wrap">
            <aside class="flex justify-center w-full mb-5 md:mr-4 md:w-1/3 md:justify-start lg:w-1/4">
              <div class="post-container">
                <!-- <div class="h_iframe"> -->
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhappycloudthailand%2F&tabs=timeline&width=340&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=5977521678940981"
                  width="340"
                  height="240"
                  style="border:none;overflow:hidden"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
                <!-- </div> -->
              </div>

              <!-- <div
                class="fb-page"
                data-href="https://www.facebook.com/happycloudthailand/"
                data-tabs="timeline"
                data-width="350"
                data-height="100"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote cite="https://www.facebook.com/happycloudthailand/" class="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/happycloudthailand/">DynaVap Happy Cloud Thailand</a>
                </blockquote>
              </div> -->
            </aside> <!-- col .// -->
            <aside class="flex-auto w-1/2 mb-5 sm:w-auto">
              <h3 class="font-semibold">
                Store
              </h3>
              <ul class="mt-2 space-y-1">
                <li>
                  <a href="/" class="opacity-70 hover:opacity-100"> Home </a>
                </li>
                <li>
                  <a href="/productsall" class="opacity-70 hover:opacity-100"> Products </a>
                </li>
                <!-- <li>
                  <a class="opacity-70 hover:opacity-100"> Blog </a>
                </li> -->
              </ul>
            </aside> <!-- col .// -->
            <aside class="flex-auto w-1/2 mb-5 sm:w-auto">
              <h3 class="font-semibold">
                About Us
              </h3>
              <ul class="mt-2 space-y-1">
                <li>
                  <a class="opacity-70 hover:opacity-100" href="/contact"> Contact us </a>
                </li>
              </ul>
            </aside> <!-- col .// -->
            <aside class="flex-auto w-1/2 mb-5 sm:w-auto">
              <h3 class="font-semibold">
                Help
              </h3>
              <ul class="mt-2 space-y-1">
                <li>
                  <a class="opacity-70 hover:opacity-100"> Track your order </a>
                </li>
              </ul>
            </aside> <!-- col .// -->
            <aside class="w-1/2 mb-5 sm:w-auto lg:w-50">
              <a class="btn glass bg-primary btn-circle">
                <span class="sr-only">YouTube</span>
                <i class="w-4 fab fa-youtube" />
              </a>
              <a href="https://www.facebook.com/happycloudstoreth" target="_blank" class="btn glass bg-primary btn-circle">
                <span class="sr-only">Facebook</span>
                <i class="fab fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/happycloudstoreth" target="_blank" class="btn glass bg-primary btn-circle">
                <span class="sr-only">Instagram</span>
                <i class="fab fa-instagram" />
              </a>
            </aside> <!-- col .// -->
          </div>  <!-- grid .// -->
        </div> <!-- container .// -->
      </section>
      <!-- section footer top end -->

      <!-- section footer bottom  -->
      <section class="py-6 bg-base-200 text-base-content">
        <div class="container max-w-screen-xl px-4 mx-auto">
          <div class="justify-between lg:flex">
            <div class="mb-3">
              <img src="/images/misc/payments.png" height="24" class="h-6" alt="Payment methods">
            </div> <!-- col .// -->
            <div class="space-x-6">
              <nav class="space-x-4 text-sm">
                <a href="/" class="opacity-70 hover:opacity-100">
                  © 2021 Happy Cloud Store All Rights Reserved
                </a>
              </nav>
            </div> <!-- col .// -->
          </div>  <!-- grid .// -->
        </div> <!-- container .// -->
      </section>
      <!-- section footer bottom  end -->
    </footer>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout'
  // components: { NavBar }
}
</script>
<style>
#snipcart {
 /* Default */
--color-buttonPrimary : #5C7F67;
--borderColor-buttonPrimary : #5C7F67;
--bgColor-buttonPrimary : #5C7F67;

/* Hover */
--color-buttonPrimary-hover : white;
--borderColor-buttonPrimary-hover : #5C7F67;
--bgColor-buttonPrimary-hover : #496552;
--shadow-buttonPrimary-hover : #496552;
/* Active */
--color-buttonPrimary-active: black;
--borderColor-buttonPrimary-active: #5C7F67;
--bgColor-buttonPrimary-active: #496552;
--shadow-buttonPrimary-active: #496552;
/* Focus */
--color-buttonPrimary-focus : black;
--borderColor-buttonPrimary-focus: #5C7F67;
--bgColor-buttonPrimary-focus: #496552;
--shadow-buttonPrimary-focus: #496552;
}
/* --color-buttonPrimary-disabled
--borderColor-buttonPrimary-disabled
--bgColor-buttonPrimary-disabled

--color-buttonPrimary-success
--borderColor-buttonPrimary-success
--bgColor-buttonPrimary-success

--color-buttonPrimary-error
--borderColor-buttonPrimary-error
--bgColor-buttonPrimary-error  */

.post-container {
position: relative;
padding-bottom: 56.25%;
padding-top: 35px;
height: 0;
overflow: hidden;
}
</style>
