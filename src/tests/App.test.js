import React from 'react';
import expect from "expect";
import { configure, mount } from "enzyme";
import App from "../App.js";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component tests', () => {
    let app;
    beforeEach(() => {
        app = mount(<App />);
    });

    describe('Test markup', () => {
        it('has Navigation component', () => {
            expect(app.find('NavBar').length).toBe(1);
        });
        it('has Video deetail component', () => {
            expect(app.find('VideoDetail').length).toBe(1);
        });
        it('has Video list component', () => {
            expect(app.find('VideoList').length).toBe(1);
        });
    });
});