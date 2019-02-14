import sinon from 'sinon';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import AudioPlayerComponent from '@/components/AudioPlayer.vue';

let vm;
let sandbox;
let propsData;

function mountComponent() {
  const AudioPlayerComponentInstance = shallowMount(AudioPlayerComponent, {
    propsData,
  });
  ({ vm } = AudioPlayerComponentInstance);
}

const resetData = () => {
  propsData = {
    index: 3,
    file: 'someFile',
  };
};

describe('#AudioPlayerComponent', () => {
  before(resetData);

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#props', () => {
    it('should have correct props', () => {
      mountComponent();
      expect(vm.file).to.equal('someFile');
      expect(vm.index).to.equal(3);
    });
  });

  describe('#data', () => {
    it('should have correct data', () => {
      mountComponent();
      expect(vm.loaded).to.equal(false);
      expect(vm.playing).to.equal(false);
      expect(vm.paused).to.equal(true);
      expect(vm.progressStyle).to.equal('');
      expect(vm.currentTime).to.equal('00:00');
      expect(vm.totalDuration).to.equal(0);
      expect(vm.volumeValue).to.equal(70);
    });
  });

  describe('#computed', () => {
    describe('#duration', () => {
      it('should calculate the duration of the audio', () => {
        mountComponent();
        vm.audio = true;
        vm.totalDuration = '123';
        expect(vm.duration).to.equal('02:03');
      });

      it('should return an empty string if there is no audio', () => {
        mountComponent();
        vm.audio = false;
        expect(vm.duration).to.equal('');
      });
    });

    describe('#playerId', () => {
      it('should generate an id for the audio player', () => {
        mountComponent();
        expect(vm.playerId).to.equal('audioPlayer-3');
      });
    });
  });

  describe('#methods', () => {
    describe('#convertTimeHHMMSS', () => {
      it('should convert time from seconds to HHMMSS', () => {
        mountComponent();
        expect(vm.convertTimeHHMMSS('12345')).to.equal('03:25:45');
      });

      it('should remove the hours portion if the duration is less than one hour', () => {
        mountComponent();
        expect(vm.convertTimeHHMMSS('123')).to.equal('02:03');
      });
    });

    describe('#setPosition', () => {
      it('should do nothing if the audio is paused', () => {
        mountComponent();
        vm.audio.currentTime = 0;
        vm.setPosition({ target: 'someTarget' });
        expect(vm.audio.currentTime).to.equal(0);
      });

      it('should do nothing if the target is a span', () => {
        mountComponent();
        vm.audio.currentTime = 0;
        vm.paused = false;
        vm.setPosition({ target: { tagName: 'SPAN' } });
        expect(vm.audio.currentTime).to.equal(0);
      });

      xit('should set the current time of the audio to the position', () => {
        mountComponent();
        vm.audio.currentTime = 0;
        vm.paused = false;
        vm.setPosition({
          target: {
            tagName: 'SPAN',
            getBoundingClientRect: () => ({
              left: 20,
              width: 200,
            }),
          },
          clientX: 400,
        });
        expect(vm.audio.currentTime).to.equal(0);
      });
    });

    describe('#updateVolume', () => {
      it('should set the audio volume to the volume value divided by 100', () => {
        mountComponent();
        vm.volumeValue = 45;
        vm.updateVolume();
        expect(vm.audio.volume).to.equal(0.45);
      });

      it('should set muted to false if the volume is above 0', () => {
        mountComponent();
        vm.volumeValue = 45;
        vm.updateVolume();
        expect(vm.audio.muted).to.equal(false);
      });

      it('should set muted to true if the volume is 0', () => {
        mountComponent();
        vm.volumeValue = 0;
        vm.updateVolume();
        expect(vm.audio.muted).to.equal(true);
      });
    });

    describe('#stop', () => {
      it('should set playing to false', () => {
        mountComponent();
        vm.playing = true;
        vm.stop();
        expect(vm.playing).to.equal(false);
      });

      it('should set paused to true', () => {
        mountComponent();
        vm.paused = false;
        vm.stop();
        expect(vm.paused).to.equal(true);
      });

      it('should call the audio pause function', () => {
        mountComponent();
        const spy = sandbox.spy(vm.audio, 'pause');
        vm.stop();
        expect(spy.called).to.equal(true);
      });

      it('should set the audio current time to 0', () => {
        mountComponent();
        vm.audio.currentTime = 132412;
        vm.stop();
        expect(vm.audio.currentTime).to.equal(0);
      });
    });

    describe('#play', () => {
      it('should do nothing if it is already playing and not paused', () => {
        mountComponent();
        vm.playing = true;
        vm.paused = false;
        vm.play();
        expect(vm.playing).to.equal(true);
        expect(vm.paused).to.equal(false);
      });

      it('should set paused to false', () => {
        mountComponent();
        vm.playing = false;
        vm.paused = true;
        vm.play();
        expect(vm.paused).to.equal(false);
      });

      it('should set playing to true', () => {
        mountComponent();
        vm.playing = false;
        vm.paused = true;
        vm.play();
        expect(vm.playing).to.equal(true);
      });

      it('should call the audio play function', () => {
        mountComponent();
        const spy = sandbox.spy(vm.audio, 'play');
        vm.play();
        expect(spy.called).to.equal(true);
      });
    });
  });
});
