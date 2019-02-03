<template>
  <div class="podcastBox" :class="{lastPodcastBox: index === numPodcasts}">
    <h3>{{podcast.title}}</h3>
    <p>{{podcast.date}}</p>
    <p>{{podcast.summary}}</p>
    <!-- <audio controls>
      <source :src="podcast.src" type="audio/mpeg">
    </audio> -->
    <test :file="podcast.src"></test>
  </div>
</template>

<script>
import test from './AudioPlayer.vue';

export default {
  props: {
    podcast: Object,
    index: Number,
    numPodcasts: Number,
  },
  components: {
    test,
  },
  name: 'PodcastBox',
};
</script>

<style lang="scss" scoped>
@import "../styles/components/podcastBox.scss";
</style>
