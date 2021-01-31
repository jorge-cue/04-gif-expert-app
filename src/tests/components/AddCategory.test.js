import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";


describe('AddCategory test suite', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('should render successfully', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change text box', () => {
        const value = 'Hello World!';
        wrapper.find('input').simulate('change', { target: { value } });
        expect( wrapper.find('input').prop('value') ).toBe( value );
    });

    test('should not submit if input value is shorter than 2 characters', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled()
    });

    test('should submit if input value is at least 2 characters', () => {
        const value = 'Hello world!';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect ( wrapper.find('input').prop('value') ).toBe( '' );
    });
})