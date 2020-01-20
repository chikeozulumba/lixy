import {
  shallowMount, mount,
} from '@vue/test-utils';

import App from '@/App.vue';

describe('App.vue', () => {
  it('should return header text when shallowMounted', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.text()).toMatch(
      'Prime Numbers Place an integer in the boxes below   Generate Table No table generated',
    );
  });
  it('should confirm button availability', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.contains('button')).toBe(true);
  });

  it('should check if table is generated', () => {
    const wrapper = mount(App);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.contains('table')).toBe(true);
  });
});
