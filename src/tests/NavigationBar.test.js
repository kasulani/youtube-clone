import React from "react";
import expect from "expect";
import {configure, mount} from "enzyme";
import NavBar from "../components/NavigationBar";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Navigation bar', () => {
    let navBar;
    let searchChangeCalled;
    let props;

    beforeEach(() => {
        searchChangeCalled = false;
        props ={
            isLoading: false,
            term: 'test',
            results:[],
            onSearchChange: () => { searchChangeCalled = true; }
        };
        navBar = mount(<NavBar {...props}/>);
    });
    describe('Test markup elements', () =>{
        it('has HTML5 nav tag', () =>{
            // component should be wrapped in an HTML5 nav
            // tag
            expect(navBar.find('nav').length).toEqual(1);
        });

        it('has a Search component from semantic ui', () => {
            // navigation bar should have a search field
            // which is provided by the Search component
            // from semantic ui
            expect(navBar.find('Search').length).toEqual(1);
        });
    });
    describe('Test functionality', () =>{
       it('sets the term in local state when input text changes in the search', () => {
           // test on search term change callback
            navBar.find('input').simulate('change', {target:{value:'new video'}});
            expect(searchChangeCalled).toBe(true);
       }); 
    });
});