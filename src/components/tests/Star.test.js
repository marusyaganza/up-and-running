import Star from '../Star';
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Star /> UI Component', () => {
    it('renders default star', () =>
        expect(shallow(<Star />).find('div.star').length).toBe(1));
});
