import { shallowMount } from '@vue/test-utils';
import Home from './Home.vue';

describe('Home.vue', () => {
  it('renders without crashing', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.exists()).toBe(true);
  });

  it('adds a new todo', async () => {
    const wrapper = shallowMount(Home);
    wrapper.setData({ newTodo: 'New Todo' });
    
    await wrapper.find('button').trigger('click');
    
    expect(wrapper.text()).toContain('New Todo');
  });
});