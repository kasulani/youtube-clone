import React from 'react';
import expect from "expect";
import { configure, mount } from "enzyme";
import VideoDetail from "../components/VideoDetail";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Video Detail Component tests', () => {
    let videoDetail;
    let props;
    beforeEach(() => {
        props = {
            video:{
                id:{
                    videoId: "eSD56y"
                },
                snippet:{
                    thumbnails:{
                        high:{
                            url: "https://youtube.com"
                        }
                    }
                }
            }
        };
        videoDetail = mount(<VideoDetail {...props}/>);
    });
    describe('Test markup', () => {
        it('has semantic ui Embed component', () => {
            expect(videoDetail.find('Embed').length).toBe(1);
        });
        it('has video title div', () => {
            expect(videoDetail.find('.video-title').length).toBe(1);
        });
        it('has video description div', () => {
            expect(videoDetail.find('.video-description').length).toBe(1);
        });
    });
});