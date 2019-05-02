<template>
  <div>
    <h2>All Podcasts</h2>
    <div v-for='(podcast, key) in allPodcasts' :key='key'>
      <podcast-box :podcast="podcast" :index="key" :numPodcasts="allPodcasts.length - 1"></podcast-box>
    </div>
  </div>
</template>

<script>
import podcastList from '@/assets/podcastList.json';
import podcastBox from '@/components/PodcastBox.vue';

export default {
  name: 'AllPodcasts',
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

<style lang="scss" scoped>
@import "../styles/views/allPodcasts.scss";
</style>
