<template>
  <div class="podcastBox" :class="{lastPodcastBox: index === numPodcasts}">
    <h3>{{podcast.title}}</h3>
    <p>{{podcast.date}}</p>
    <p>{{podcast.summary}}</p>
    <audio controls>
      <source :src="podcast.src" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    podcast: Object,
    index: Number,
    numPodcasts: Number,
  },
  name: 'PodcastBox',
};
</script>

<style lang="scss" scoped>
@import "../styles/components/podcastBox.scss";
</style>
