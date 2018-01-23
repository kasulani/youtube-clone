import React from 'react';
import expect from "expect";
import { configure, mount } from "enzyme";
import VideoListItem from "../components/VideoListItem";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Video Item Component tests', () => {
    let videoItem;
    let props;
    let videoSelectCalled;
    beforeEach(() => {
        videoSelectCalled = false;
        props = {
            video:{
                snippet:{
                    thumbnails:{
                        medium:{
                            url:"http://www.youtube.com"
                        }
                    }
                }
            },
            onVideoSelect: () => { videoSelectCalled = true; }
        };
        videoItem = mount(<VideoListItem {...props}/>);
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
        describe('Test functionality', () =>{
            it('calls onVideoSelect callback on item click', () => {
                // test on item click
                videoItem.find('.item').simulate('click');
                 expect(videoSelectCalled).toBe(true);
            }); 
         });
    });
});