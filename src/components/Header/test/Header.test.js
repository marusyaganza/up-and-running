import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('<Header /> UI Component', () => {
    it('renders logo', () =>
        expect(shallow(<Header />).find('div#logo').length).toBe(1));
});
