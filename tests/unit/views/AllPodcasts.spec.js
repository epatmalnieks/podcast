import sinon from 'sinon';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import podcastList from '@/assets/podcastList.json';
import AllPodcasts from '@/views/AllPodcasts.vue';

let vm;
let sandbox;

function mountComponent() {
  const AllPodcastsViewInstance = shallowMount(AllPodcasts, {});
  ({ vm } = AllPodcastsViewInstance);
}

describe('#AllPodcasts', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#data', () => {
    it('should have correct data', () => {
      mountComponent();
      expect(vm.allPodcasts).to.deep.equal(podcastList.podcasts);
    });
  });
});
