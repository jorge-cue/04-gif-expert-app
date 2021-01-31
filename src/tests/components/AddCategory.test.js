import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"


describe('AddCategory tests suite', () => {

    let testValue;

    let cats = []

    const setCategories = (cats) => [...cats, testValue];

    let wrapper = shallow( <AddCategory setCategories={ setCategories } />)

    beforeEach(() => {
        wrapper = shallow ( <AddCategory setCategories={ setCategories } />)
    })


    test('Addcategory renders as required', () => {
        testValue = 'Test'
        wrapper.simulate('submit')
        expect(cats).toBe([testValue])
    })

})