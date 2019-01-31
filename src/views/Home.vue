<template>
<div>
  <div>
    <h2>Recent Podcasts</h2>
    <div v-for='(podcast, key) in recentPodcasts' :key='key'>
      <podcast-box :podcast="podcast"></podcast-box>
    </div>
  </div>
</div>
</template>

<script>
import podcastList from '@/assets/podcastList.json';
import podcastBox from '@/components/PodcastBox.vue';

export default {
  name: 'home',
  components: {
    podcastBox,
  },
  data() {
    return {
      recentPodcasts: podcastList.podcasts.slice(0, 5),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/home.scss";
</style>
