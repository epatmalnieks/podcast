<template>
  <div :class="`vue-sound-wrapper`">
    <div :class="`vue-sound__player`">
      <a style="color: white" @click="stop()" title="Stop" class="icon-stop2" >Stop</a>
      <a style="color: white" @click="pause()" title="Play" :class="[ paused ? 'icon-play3' : 'icon-pause2' ]">Play</a>
      <div v-on:click="setPosition" :class="`vue-sound__playback-time-wrapper`" title="Time played : Total time">
          <div v-bind:style="progressStyle" :class="`vue-sound__playback-time-indicator`"></div>
          <span style="color: white" :class="`vue-sound__playback-time-current`">{{currentTime}}</span>
          <span style="color: white" :class="`vue-sound__playback-time-separator`"></span>
          <span style="color: white" :class="`vue-sound__playback-time-total`">{{duration}}</span>
      </div>
      <div :class="`vue-sound__extern-wrapper`">
        <a @click="download()" class="icon-download"></a>
        <a @click="changeLoop()" :class="[ innerLoop ? 'icon-spinner10' : 'icon-spinner11']"></a>
        <a @click="mute()" :class="[isMuted ? 'icon-volume-mute2': 'icon-volume-high' ]" title="Mute"></a>
        <a v-on:mouseover="toggleVolume()" class="volume-toggle icon-paragraph-justify" title="Volume">
          <input orient="vertical" v-model.lazy="volumeValue" v-on:change="updateVolume()" v-show="hideVolumeSlider" type="range" min="0" max="100" class="volume-slider"/>
        </a>

      </div>
    </div>
    <audio v-bind:id="playerId" :loop="innerLoop" ref="audiofile" :src="file" preload="auto" style="display:none;"></audio>
  </div>
</template>

<script>
export const baseVolumeValue = 7.5;

export const prefixCls = 'vue-sound';

export const generateUUID = () => Math.random();

export const convertTimeHHMMSS = (val) => {
  const hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
  return (hhmmss.indexOf('00:') === 0) ? hhmmss.substr(3) : hhmmss;
};

export default {
  name: 'AudioPlayer',
  props: {
    file: {
      type: String,
      default: null,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    duration() {
      return this.audio ? convertTimeHHMMSS(this.totalDuration) : '';
    },
    playerId() {
      return `player-${this.uuid}`;
    },
    classes() {
      return prefixCls;
    },
  },
  data() {
    return {
      isMuted: false,
      loaded: false,
      playing: false,
      paused: true,
      progressStyle: '',
      currentTime: '00:00',
      uuid: '0',
      innerLoop: undefined,
      audio: undefined,
      totalDuration: 0,
      hideVolumeSlider: false,
      volumeValue: baseVolumeValue,
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
      this.hideVolumeSlider = false;
      this.audio.volume = this.volumeValue / 100;
      if (this.volumeValue / 100 > 0) {
        this.isMuted = false;
        this.audio.muted = false;
      }

      if (this.volumeValue / 100 === 0) {
        this.isMuted = true;
        this.audio.muted = true;
      }
    },
    toggleVolume() {
      this.hideVolumeSlider = true;
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
    changeLoop() {
      this.innerLoop = !this.innerLoop;
    },
    download() {
      this.stop();
      window.open(this.file, 'download');
    },
    mute() {
      this.isMuted = !this.isMuted;
      this.audio.muted = this.isMuted;
      this.volumeValue = this.isMuted ? 0 : 75;
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
    init() {
      this.audio.addEventListener('timeupdate', this.handlePlayingUI);
      this.audio.addEventListener('loadeddata', this.handleLoaded);
      this.audio.addEventListener('pause', this.handlePlayPause);
      this.audio.addEventListener('play', this.handlePlayPause);
    },
    getAudio() {
      return this.$el.querySelectorAll('audio')[0];
    },
  },
  mounted() {
    this.uuid = generateUUID();
    this.audio = this.getAudio();
    this.innerLoop = this.loop;
    this.init();
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
