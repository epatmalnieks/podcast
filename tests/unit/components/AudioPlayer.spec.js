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
  });
});
