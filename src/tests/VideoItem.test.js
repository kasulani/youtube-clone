import React from 'react';
import expect from "expect";
import { configure, mount } from "enzyme";
import VideoItem from "../components/VideoItem";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Video Item Component tests', () => {
    let videoItem;
    let props;
    beforeEach(() => {
        props = {
            video:{}
        };
        videoItem = mount(<VideoItem {...props}/>);
    });
    describe('Test markup', () => {
        it('has List item div', () => {
            expect(videoItem.find('.item').length).toBe(1);
        });
        it('has semantic ui Image component', () => {
            expect(videoItem.find('Image').length).toBe(1);
        });
        it('has List item content div', () => {
            expect(videoItem.find('.content').length).toBe(1);
        });
        it('has List item header', () => {
            expect(videoItem.find('.header').length).toBe(1);
        });
        it('has List item description', () => {
            expect(videoItem.find('.description').length).toBe(1);
        });
    });
});