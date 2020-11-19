<template>
  <li class="relative">
    <a
      href="#"
      class="text-black flex items-center flex-grow"
      :class="anchorClasses"
      @click="navItemAction"
    >
      <icon
        v-if="hasLeftIcon"
        :class="[
          { 'mr-2 bg-gray-200': hasLeftIcon && hasLinkText },
          leftIconClasses,
        ]"
      >
        <slot name="leftIcon"></slot>
      </icon>
      <slot name="linkText"></slot>
      <icon
        v-if="hasRightIcon"
        :class="{ 'ml-auto': hasRightIcon && hasLinkText }"
      >
        <slot name="rightIcon"></slot>
      </icon>
    </a>
    <div class="absolute transform right-0" v-if="hasDropdown">
      <slot name="dropdown"></slot>
    </div>
  </li>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: { Icon },
  props: {
    leftIconClasses: String,
    anchorClasses: String,
    rightIconClasses: String,
  },
  computed: {
    hasLeftIcon() {
      return !!this.$slots.leftIcon;
    },
    hasLinkText() {
      return !!this.$slots.linkText;
    },
    hasRightIcon() {
      return !!this.$slots.rightIcon;
    },
    hasDropdown() {
      return !!this.$slots.dropdown;
    },
  },
  methods: {
    toggle(e) {
      this.$emit("toggleDropdown", e);
    },
    navItemAction(e) {
      if (this.hasDropdown) {
        this.toggle(e);
        console.log("nav dropdown action");
      } else {
        this.$emit("changeMenuEvent");
        console.log("nav changemenu action");
      }
    },
  },
};
</script>

<style></style>
