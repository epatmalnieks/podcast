<template>
  <div>
    <div class="audioPlayer">
      <div v-on:click="setPosition" class="progressBarContainer">
          <div v-bind:style="progressStyle" class="progressBar"></div>
          <span style="color: white">{{currentTime}}</span>
          <span style="color: white">{{duration}}</span>
      </div>
      <div @click="stop()" class="stop"></div>
      <div @click="pause()" :class="paused ? 'play' : 'pause'"></div>
      <div class="download" @click="download()"></div>
      <input orient="vertical" v-model.lazy="volumeValue" v-on:change="updateVolume()" type="range" min="0" max="100"/>
    </div>
    <audio v-bind:id="playerId" :src="file" style="display:none;"></audio>
  </div>
</template>

<script>
export const convertTimeHHMMSS = (val) => {
  const hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
  return (hhmmss.indexOf('00:') === 0) ? hhmmss.substr(3) : hhmmss;
};

export default {
  name: 'AudioPlayer',
  props: {
    file: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    duration() {
      return this.audio ? convertTimeHHMMSS(this.totalDuration) : '';
    },
    playerId() {
      return `audioPlayer-${this.index}`;
    },
  },
  data() {
    return {
      loaded: false,
      playing: false,
      paused: true,
      progressStyle: '',
      currentTime: '00:00',
      audio: undefined,
      totalDuration: 0,
      volumeValue: 7.5,
    };
  },
  methods: {
    setPosition: function name(e) {
      const tag = e.target;
      if (this.paused) return;

      if (e.target.tagName === 'SPAN') {
        return;
      }
      const pos = tag.getBoundingClientRect();
      const seekPos = (e.clientX - pos.left) / pos.width;
      this.audio.currentTime = parseInt(this.audio.duration * seekPos, 10);
    },
    updateVolume() {
      this.audio.volume = this.volumeValue / 100;
      if (this.volumeValue / 100 > 0) {
        this.audio.muted = false;
      }

      if (this.volumeValue / 100 === 0) {
        this.audio.muted = true;
      }
    },
    stop() {
      this.playing = false;
      this.paused = true;
      this.audio.pause();
      this.audio.currentTime = 0;
    },
    play() {
      if (this.playing && !this.paused) return;
      this.paused = false;
      this.audio.play();
      this.playing = true;
    },
    pause() {
      this.paused = !this.paused;
      if (this.paused) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
    },
    download() {
      this.stop();
      window.open(this.file, 'download');
    },
    handleLoaded() {
      if (this.audio.readyState >= 2) {
        if (this.autoPlay) this.play();

        this.loaded = true;
        this.totalDuration = parseInt(this.audio.duration, 10);
      } else {
        throw new Error('Failed to load sound file');
      }
    },
    handlePlayingUI() {
      const currTime = parseInt(this.audio.currentTime, 10);
      const percentage = parseInt((currTime / this.totalDuration) * 100, 10);
      this.progressStyle = `width:${percentage}%;`;
      this.currentTime = convertTimeHHMMSS(currTime);
    },
    handlePlayPause(e) {
      if (e.type === 'pause' && this.playing === false) {
        this.progressStyle = 'width:0%;';
        this.currentTime = '00:00';
        this.paused = true;
      }
    },
  },
  mounted() {
    [this.audio] = this.$el.querySelectorAll('audio');
    this.audio.addEventListener('timeupdate', this.handlePlayingUI);
    this.audio.addEventListener('loadeddata', this.handleLoaded);
    this.audio.addEventListener('pause', this.handlePlayPause);
    this.audio.addEventListener('play', this.handlePlayPause);
  },
  beforeDestroy() {
    this.audio.removeEventListener('timeupdate', this.handlePlayingUI);
    this.audio.removeEventListener('loadeddata', this.handleLoaded);
    this.audio.removeEventListener('pause', this.handlePlayPause);
    this.audio.removeEventListener('play', this.handlePlayPause);
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/audioPlayer.scss";
</style>
