<template>
  <nav class="flex items-center p-3 bg-white shadow">
    <a href="#" class="inline-flex">
      <slot name="navbar-brand"></slot>
    </a>
    <div class="lg:flex lg:flex-grow">
      <ul class="inline-flex ml-auto -mx-1">
        <slot name="nav-links"></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
