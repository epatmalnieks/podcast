<template>
<div>
  <div>
    <button class='biosButton' @click='goToBios'>Bios</button>
    <button class='archiveButton' @click='goToArchive'>Archive</button>
  </div>
  <div>
    <p>Recent Podcasts</p>
    <div class='podcastBox' v-for='(podcast, key) in recentPodcasts' :key='key'>
    <h2>{{podcast.title}}</h2>
    <p>{{podcast.date}}</p>
    <p>{{podcast.summary}}</p>
    <audio controls>
      <source src="../assets/this_is_a_podcast.mp3" type="audio/mpeg">
    </audio>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      recentPodcasts: [{
        title: 'Podcast 1',
        date: '1/21/2019',
        summary: 'Summary 1',
      }, {
        title: 'Podcast 2',
        date: '1/22/2019',
        summary: 'Summary 2',
      }, {
        title: 'Podcast 3',
        date: '1/23/2019',
        summary: 'Summary 3',
      }, {
        title: 'Podcast 4',
        date: '1/24/2019',
        summary: 'Summary 4',
      }, {
        title: 'Podcast 5',
        date: '1/25/2019',
        summary: 'Summary 5',
      }],
    };
  },
  methods: {
    goToBios() {
      this.$router.push({ name: 'bios' });
    },
    goToArchive() {
      this.$router.push({ name: 'archive' });
    },
  },
};
</script>

<style lang="scss">
.biosButton {
color: white;
background-color:blue;
}

.archiveButton {
color: white;
background-color:blue;
}

.podcastBox {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
</style>
