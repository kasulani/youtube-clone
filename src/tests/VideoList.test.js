import React from 'react';
import expect from "expect";
import { configure, mount } from "enzyme";
import VideoList from "../components/VideoList";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Video Item Component tests', () => {
    let videoList;
    let props;
    beforeEach(() => {
        props = {
            videos:[{etag:"e1"}]
        };
        videoList = mount(<VideoList {...props}/>);
    });
    describe('Test markup', () => {
        it('has semantic ui List component', () => {
            expect(videoList.find('List').length).toBe(1);
        });
    });
});