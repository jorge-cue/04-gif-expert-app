import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('GifGridItem tests suite', () => { 
    const image = {
        id: 'Ignored id',
        title: 'Test Image Title',
        url: 'https://test_image_url',
    }
    const wrapper = shallow( <GifGridItem  { ...image } /> );

    test('shoud render the component successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should use title and url in proper properties of img', () => {
        const imgElement = wrapper.find('img');
        expect(imgElement.prop('alt')).toBe(image.title);
        expect(imgElement.prop('src')).toBe(image.url);
    });

    test('should use title un paragraph', () => {
        const pElement = wrapper.find('p');
        expect(pElement.text().trim()).toBe(image.title);
    })

    test('should use "card" in className for div', () => {
        const divElement = wrapper.find('div');
        const className = 'card';
        expect(divElement.prop('className')).toContain(className);        
    })
    
    // test('should use "animate__fadeIn" in className for div', () => {
    //     const divElement = wrapper.find('div');
    //     const className = 'animate__fadeIn';
    //     expect(divElement.prop('className')).toContain(className);        
    // }) 
});