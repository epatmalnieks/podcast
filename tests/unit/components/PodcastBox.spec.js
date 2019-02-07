import sinon from 'sinon';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import PodcastBoxComponent from '@/components/PodcastBox.vue';

let vm;
let sandbox;
let propsData;

function mountComponent() {
  const PodcastBoxComponentInstance = shallowMount(PodcastBoxComponent, {
    propsData,
  });
  ({ vm } = PodcastBoxComponentInstance);
}

const resetData = () => {
  propsData = {
    podcast: {
      something: 'test',
    },
    index: 1,
    numPodcasts: 4,
  };
};

describe('#PodcastBoxComponent', () => {
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
      expect(vm.podcast).to.deep.equal({ something: 'test' });
      expect(vm.index).to.equal(1);
      expect(vm.numPodcasts).to.equal(4);
    });
  });
});
