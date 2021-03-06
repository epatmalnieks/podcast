import sinon from 'sinon';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import podcastList from '@/assets/podcastList.json';
import HomeView from '@/views/Home.vue';

let vm;
let sandbox;

function mountComponent() {
  const HomeViewInstance = shallowMount(HomeView, {});
  ({ vm } = HomeViewInstance);
}

describe('#HomeView', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#data', () => {
    it('should have correct data', () => {
      mountComponent();
      const mostRecentPodcasts = podcastList.podcasts.slice(0, 5);
      expect(vm.recentPodcasts).to.deep.equal(mostRecentPodcasts);
    });
  });
});
