<template>
  <div id="app">
    <navbar>
      <div slot="navbar-brand">
        Frontendfunn
      </div>
      <fragment slot="nav-links">
        <nav-item leftIconClasses="bg-gray-200" class="mx-1">
          <font-awesome-icon :icon="['fas', 'plus']" slot="leftIcon" />
        </nav-item>
        <nav-item leftIconClasses="bg-gray-200" class="mx-1">
          <font-awesome-icon
            :icon="['fab', 'facebook-messenger']"
            slot="leftIcon"
          />
        </nav-item>
        <nav-item leftIconClasses="bg-gray-200" class="mx-1">
          <font-awesome-icon :icon="['fas', 'bell']" slot="leftIcon" />
        </nav-item>
        <nav-item
          leftIconClasses="bg-gray-200"
          class="mx-1"
          @toggleDropdown="toggleDropdown"
          @changeMenuEvent="changeMenu('main')"
        >
          <font-awesome-icon :icon="['fas', 'caret-down']" slot="leftIcon" />
          <!-- dropdown menu -->

          <div slot="dropdown" class="bg-white" :showDropdown="showDropdown">
            <transition name="fade">
              <div v-if="showDropdown">
                <!-- main menu -->
                <ul
                  v-if="showDropdown && activeDropdown == 'main'"
                  class="p-3 border shadow rounded-lg"
                >
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                    @changeMenuEvent="changeMenu('second')"
                    menuName="'second'"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Settings</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Help &amp; Support</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Display Preferences</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Logout</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                </ul>

                <!-- main menu -->
                <!-- second dropdown -->
                <ul
                  v-if="showDropdown && activeDropdown == 'second'"
                  class="p-3 border shadow rounded-lg"
                >
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Setting 2</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Help &amp; Support 2</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Display Preferences 2</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                  <nav-item
                    anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
                  >
                    <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
                    <span slot="linkText" class="whitespace-no-wrap"
                      >Logout 2</span
                    >
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      slot="rightIcon"
                    />
                  </nav-item>
                </ul>
                <!-- second dropdown -->
              </div>
            </transition>
          </div>
          <!-- dropdown menu -->
        </nav-item>
      </fragment>
    </navbar>
    {{ activeDropdown }}
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import NavItem from "./components/NavItem.vue";

import { Fragment } from "vue-fragment";

export default {
  components: { Navbar, NavItem, Fragment },
  name: "App",
  data() {
    return {
      showDropdown: false,
      activeDropdown: "main",
    };
  },
  methods: {
    toggleDropdown(e) {
      e.preventDefault();
      this.showDropdown = !this.showDropdown;
    },
    changeMenu(activeMenuName) {
      console.log("change menu", activeMenuName);
      this.activeDropdown = activeMenuName;
    },
  },
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
