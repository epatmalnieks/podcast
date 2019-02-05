<template>
  <div class="podcastBox" :class="{lastPodcastBox: index === numPodcasts}">
    <h3>{{podcast.title}}</h3>
    <p>{{podcast.date}}</p>
    <p>{{podcast.summary}}</p>
    <audio-player :file="podcast.src" :index="index"></audio-player>
  </div>
</template>

<script>
import audioPlayer from './AudioPlayer.vue';

export default {
  props: {
    podcast: Object,
    index: Number,
    numPodcasts: Number,
  },
  components: {
    audioPlayer,
  },
  name: 'PodcastBox',
};
</script>

<style lang="scss" scoped>
@import "../styles/components/podcastBox.scss";
</style>
