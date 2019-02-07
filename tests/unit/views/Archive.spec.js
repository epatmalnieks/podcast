import sinon from 'sinon';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import podcastList from '@/assets/podcastList.json';
import ArchiveView from '@/views/Archive.vue';

let vm;
let sandbox;

function mountComponent() {
  const ArchiveViewInstance = shallowMount(ArchiveView, {});
  ({ vm } = ArchiveViewInstance);
}

describe('#ArchiveView', () => {
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
