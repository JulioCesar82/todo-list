import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils';

import Home from './Home.vue';

describe('Home.vue', () => {
  it('renders without crashing', () => {
    const wrapper = mount(Home, { props: {  } })
    //const wrapper = shallowMount(Home);

    expect(wrapper.exists()).toBe(true);
  });

  it('adds a new todo', async () => {
    const wrapper = mount(Home, { props: {  } })
    //const wrapper = shallowMount(Home);

    const todoTitle = 'New Todo';
    
    wrapper.setData({ newTodo: todoTitle });
    
    await wrapper.find('button').trigger('click');
    
    expect(wrapper.text()).toContain(todoTitle);
  });
});