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

describe('#NavComponent', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    $router.push = sandbox.stub();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#data', () => {
    it('should have correct data', () => {
      mountComponent();
      expect(vm.selectedRoute).to.equal('/');
    });
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

    describe('#goToArchive', () => {
      it('should go to the archive page', () => {
        mountComponent();
        vm.goToArchive();
        expect($router.push.args[0][0]).to.deep.equal({
          name: 'archive',
        });
      });

      it('should set the selected route to archive', () => {
        mountComponent();
        vm.goToArchive();
        expect(vm.selectedRoute).to.equal('archive');
      });
    });

    describe('#goToHome', () => {
      it('should go to the home page', () => {
        mountComponent();
        vm.goToHome();
        expect($router.push.args[0][0]).to.deep.equal({
          name: 'home',
        });
      });

      it('should set the selected route to /', () => {
        mountComponent();
        vm.goToHome();
        expect(vm.selectedRoute).to.equal('/');
      });
    });
  });
});
