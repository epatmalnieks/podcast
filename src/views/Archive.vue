<template>
  <div>
    <div v-for='(podcast, key) in allPodcasts' :key='key'>
      <podcast-box :podcast="podcast"></podcast-box>
    </div>
  </div>
</template>

<script>
import podcastList from '@/assets/podcastList.json';
import podcastBox from '@/components/PodcastBox.vue';

export default {
  name: 'Archive',
  components: {
    podcastBox,
  },
  data() {
    return {
      allPodcasts: podcastList.podcasts,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/views/archive.scss";
</style>
