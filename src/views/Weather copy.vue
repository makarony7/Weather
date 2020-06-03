<template>
  <div>
    <div class="bg-behind bg-night"></div>
    <div class="header">
      <b-container>
        <top-header />
      </b-container>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/top-header.vue'

export default {
  name: 'Weather',
  components: {
    topHeader,
  }
}
</script>

