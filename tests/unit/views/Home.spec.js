import sinon from 'sinon';
import {
  expect,
} from 'chai';
import {
  shallowMount,
} from '@vue/test-utils';
import HomeComponent from '@/views/Home.vue';

let vm;
let sandbox;
const router = {

};

function mountComponent() {
  const HomeComponentInstance = shallowMount(HomeComponent, {
    router,
  });
  ({
    vm,
  } = HomeComponentInstance);
}

describe('#Home', () => {
  before(() => {
    sandbox = sinon.createSandbox();
  });

  beforeEach(() => {
    router.push = sandbox.stub();
  });

  describe('#methods', () => {
    describe('#goToBios', () => {
      it('should go to the bios page', () => {
        mountComponent();
        vm.goToBios();
        expect(router.push.args[0][0]).to.deep.equal({
          name: 'bios',
        });
      });
    });
  });
});
