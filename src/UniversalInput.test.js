import React from 'react';
import UniversalInput from './UniversalInput';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('UniversalInput tests', () => {
  it('Dodano poprawnie komponent inputa', () => {
    const wrapper = shallow(<UniversalInput />);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('Ustawia typ na text jeśli inpuType jest text', () => {
    const wrapper = shallow(<UniversalInput inputType={'text'} />);
    expect(wrapper.find('input').prop('type')).toBe('text');
  });

  it('Poprawnie ustawia typ na number jeśli inpuType jest number', () => {
    const wrapper = shallow(<UniversalInput inputType={'number'} />);
    expect(wrapper.find('input').prop('type')).toBe('number');
  });

  it('Poprawnie ustawia typ na email jeśli inpuType jest email', () => {
    const wrapper = shallow(<UniversalInput inputType={'email'} />);
    expect(wrapper.find('input').prop('type')).toBe('email');
  });

  it('Poprawnie ustawia typ na range jeśli inpuType jest inny ni text, number lub email', () => {
    const wrapper = shallow(<UniversalInput inputType={'some'} />);
    expect(wrapper.find('input').prop('type')).toBe('range');
  });
});
