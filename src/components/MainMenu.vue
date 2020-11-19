<template>
  <ul v-if="showDropdown" class="p-3 border shadow rounded-lg">
    <nav-item
      anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg"
      @goto="goto"
      :menuName="menuName"
    >
      <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
      <span slot="linkText" class="whitespace-no-wrap">Settings</span>
      <font-awesome-icon :icon="['fas', 'chevron-right']" slot="rightIcon" />
    </nav-item>
    <nav-item anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg">
      <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
      <span slot="linkText" class="whitespace-no-wrap">Help &amp; Support</span>
      <font-awesome-icon :icon="['fas', 'chevron-right']" slot="rightIcon" />
    </nav-item>
    <nav-item anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg">
      <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
      <span slot="linkText" class="whitespace-no-wrap"
        >Display Preferences</span
      >
      <font-awesome-icon :icon="['fas', 'chevron-right']" slot="rightIcon" />
    </nav-item>
    <nav-item anchorClasses="p-2 my-1 hover:bg-gray-200 rounded-lg">
      <font-awesome-icon :icon="['fas', 'cog']" slot="leftIcon" />
      <span slot="linkText" class="whitespace-no-wrap">Logout</span>
      <font-awesome-icon :icon="['fas', 'chevron-right']" slot="rightIcon" />
    </nav-item>
  </ul>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  components: { NavItem },
  props: {
    showDropdown: Boolean,
    menuName: String,
  },
  methods: {
    goto(menuName) {
      this.$emit("goto", menuName);
    },
  },
};
</script>

<style></style>
