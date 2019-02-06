import sinon from 'sinon';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HomeComponent from '@/views/Home.vue';

let vm;
let sandbox;
const $router = {};

function mountComponent() {
  const HomeComponentInstance = shallowMount(HomeComponent, {
    mocks: {
      $router,
    },
  });
  ({ vm } = HomeComponentInstance);
}

const resetData = () => {

};

describe('#Home', () => {
  before(resetData);

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    $router.push = sandbox.stub();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#methods', () => {
    describe('#goToBios', () => {
      it('should go to the bios page', () => {
        mountComponent();
        vm.goToBios();
        expect($router.push.args[0][0]).to.deep.equal({
          name: 'bios',
        });
      });
    });
  });
});
