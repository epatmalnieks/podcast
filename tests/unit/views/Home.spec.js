import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/views/Home.vue';

describe('#Home', () => {
  describe('#methods', () => {
    describe('#methods', () => {
      it('should go to the bios page', () => {
        const msg = 'sdfk';
        const wrapper = shallowMount(HelloWorld, {
          propsData: { msg },
        });
        expect(wrapper.text()).to.include(msg);
      });
    });
  });
});
