import sinon from 'sinon';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import NavComponent from '@/components/Nav.vue';

let vm;
let sandbox;
const $router = {};

function mountComponent() {
  const NavComponentInstance = shallowMount(NavComponent, {
    mocks: {
      $router,
    },
  });
  ({ vm } = NavComponentInstance);
}

const resetData = () => {

};

describe('#Nav', () => {
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

      it('should set the selected route to bios', () => {
        mountComponent();
        vm.goToBios();
        expect(vm.selectedRoute).to.equal('bios');
      });
    });
  });
});
