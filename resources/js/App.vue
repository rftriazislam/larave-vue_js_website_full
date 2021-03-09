<template>
    <div class="container"> 
        <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Products List</router-link>
                    <router-link to="/create" class="nav-item nav-link">Create Product</router-link>
                </div>
            </div>
        </nav> -->

        <div>
      <!--========== ADMIN SIDE MENU one ========-->
      <div class="_1side_menu" >
        <div class="_1side_menu_logo">
          <h3 style="text-align:center;">Logo Image</h3>
          <!--<img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/>-->
        </div>

        <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
        <div class="_1side_menu_content">
          <div class="_1side_menu_img_name">
            <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
            <p class="_1side_menu_name">Admin</p>
          </div>

          <!--~~~ MENU LIST ~~~~~~-->
          <div class="_1side_menu_list">
            <ul class="_1side_menu_list_ul">
              <li><router-link to="/"><Icon type="ios-speedometer" /> Dashboard</router-link></li>
              <li><router-link to="/tags"><Icon type="ios-speedometer" /> Tags</router-link></li>
              <li><router-link to="/category"><Icon type="ios-speedometer" /> Category</router-link></li>

            </ul>
          </div>
        </div>
      </div>
      <!--========== ADMIN SIDE MENU ========-->

      <!--========= HEADER ==========-->
      <div class="header">
        <div class="_2menu _box_shadow">
          <div class="_2menu_logo">
            <ul class="open_button">
              <li>
                <Icon type="ios-list" />
              </li>
              <!--<li><Icon type="ios-albums" /></li>-->
            </ul>
          </div>
        </div>
      </div>
      <!--========= HEADER ==========-->
    </div>

        <router-view> </router-view>
<footer>
    
</footer>
    </div>
</template>
 
<script>
    export default {}
</script>