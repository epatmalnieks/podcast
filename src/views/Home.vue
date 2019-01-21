<template>
<div>
  <div>
    <button @click='goToBios'>Bios</button>
  </div>
  <div>
    <p>Recent Podcasts</p>
    <div v-for='(podcast, key) in recentPodcasts' :key='key'>
    <p>{{podcast.title}}</p>
    <p>{{podcast.date}}</p>
    <p>{{podcast.summary}}</p>
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
  },
};
</script>
