<template>
  <div class="podcastBox">
    <h2>{{podcast.title}}</h2>
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
  },
  name: 'PodcastBox',
};
</script>

<style lang="scss">
.podcastBox {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  background-color: #CAEBF2;
  border-radius: 10px;
}
</style>
