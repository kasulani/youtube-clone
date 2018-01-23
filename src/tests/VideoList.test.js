import React from 'react';
import expect from "expect";
import { configure, mount } from "enzyme";
import VideoList from "../components/VideoList";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Video List Component tests', () => {
    let videoList;
    let props;
    beforeEach(() => {
        props = {
            videos:[{
                etag:"e1",
                snippet:{
                    thumbnails:{
                        medium:{
                            url:"http://www.youtube.com"
                        }
                    }
                }
            }],
            onVideoSelect: () => {}
        };
        videoList = mount(<VideoList {...props}/>);
    });
    describe('Test markup', () => {
        it('has semantic ui List component', () => {
            expect(videoList.find('List').length).toBe(1);
        });
    });
});