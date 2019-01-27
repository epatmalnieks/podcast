<template>
<div>
  <div>
    <p>Recent Podcasts</p>
    <div class='podcastBox' v-for='(podcast, key) in recentPodcasts' :key='key'>
    <h2>{{podcast.title}}</h2>
    <p>{{podcast.date}}</p>
    <p>{{podcast.summary}}</p>
    <audio controls>
      <source :src="podcast.src" type="audio/mpeg">
    </audio>
    </div>
  </div>
</div>
</template>

<script>
import podcastList from '@/assets/podcastList.json';

export default {
  name: 'home',
  data() {
    return {
      recentPodcasts: podcastList.podcasts.slice(0, 5),
    };
  },
};
</script>

<style lang="scss">
.biosButton {
color: #FFFFFF;
background-color:#FF3B3F;
}

.archiveButton {
color: #FFFFFF;
background-color:#FF3B3F;
}

.podcastBox {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  background-color: #CAEBF2;
  opacity: 0.7;
}
</style>
