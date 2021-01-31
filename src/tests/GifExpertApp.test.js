import { render } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';


describe('GifExpertApp tests suite', () => {


    test('GifExpertApp renders as snapshot', () => {
        const wrapper = render( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });


});