import React, { useState } from "react";
import "./Home.css";
import { CarouselProvider, Slider, Slide, Image } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import useWindowSize from "./useWindowSize";
import { Icon } from "@iconify/react";
function App() {
  const { width } = useWindowSize();
  console.log({ width });

  return (
    <div className="whole">
      <div className="Start">
        <div className="slider">
          {width > 900 ? (
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={25}
              totalSlides={3}
              isPlaying={true}
              interval={2000}
              infinite={true}
              className="carousel"
            >
              <div className="slidebody">
                <Slider>
                  <Slide index={0}>
                    <Image
                      isBgImage="true"
                      className="firstslide"
                      src="https://i.imgur.com/uStkuTk.png"
                      alt="fs"
                    />
                  </Slide>
                  <Slide index={1}>
                    <Image
                      isBgImage="true"
                      className="firstslide"
                      src="https://i.imgur.com/K1mJXvB.png"
                      alt="fs"
                    />
                  </Slide>
                  <Slide index={2}>
                    <Image
                      isBgImage="true"
                      className="firstslide"
                      src="https://i.imgur.com/Ge2KUVK.png"
                      alt="fs"
                    />
                  </Slide>
                </Slider>
              </div>
              <br />
            </CarouselProvider>
          ) : (
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={60}
              totalSlides={3}
              isPlaying={true}
              interval={2000}
              infinite={true}
              className="carousel"
            >
              <div className="slidebody">
                <Slider>
                  <Slide index={0}>
                    <Image
                      isBgImage="true"
                      className="firstslide"
                      src="https://i.imgur.com/uStkuTk.png"
                      alt="fs"
                    />
                  </Slide>
                  <Slide index={1}>
                    <Image
                      isBgImage="true"
                      className="firstslide"
                      src="https://i.imgur.com/K1mJXvB.png"
                      alt="fs"
                    />
                  </Slide>
                  <Slide index={2}>
                    <Image
                      isBgImage="true"
                      className="firstslide"
                      src="https://i.imgur.com/Ge2KUVK.png"
                      alt="fs"
                    />
                  </Slide>
                </Slider>
              </div>
              <br />
            </CarouselProvider>
          )}
        </div>
      </div>
      <div className="desc1" style={{ display: "table-cell" }}></div>
      <div className="desc2" style={{ display: "table-cell" }}></div>
      <div style={{ display: "table" }} className="design">
        <br />
        <br />
        <div style={{ display: "table-row" }}>
          <div style={{ display: "table-cell" }} className="emptyspace"></div>

          <div style={{ display: "table-cell" }} className="Icon1">
            <center>
              <Icon icon="el:group" color="#34a853" width="100" height="100" />
            </center>
            <center className="connect">
              <b>Connect</b>
            </center>
            <br />
            <div className="label1">
              Meet students interested in developer technologies at your
              university. All are welcome, including those with diverse
              backgrounds and different majors.
            </div>
          </div>
          <div style={{ display: "table-cell" }} className="emptyspace"></div>
          <div style={{ display: "table-cell" }} className="Icon2">
            <center>
              <Icon
                icon="dashicons:welcome-learn-more"
                color="#34a853"
                width="100"
                height="100"
              />
            </center>
            <center>
              <b>Learn</b>
            </center>
            <br />
            <div className="label2">
              Learn about a range of technical topics and gain new skills
              through hands-on workshops, events, talks, and project-building
              activities - both online and in-person.
            </div>
          </div>
          <div style={{ display: "table-cell" }} className="emptyspace"></div>
          <div style={{ display: "table-cell" }} className="Icon3">
            <center>
              <Icon
                icon="uil:arrow-growth"
                color="#34a853"
                width="100"
                height="100"
              />
            </center>
            <center>
              <b>Grow</b>
            </center>
            <br />
            <div className="label3">
              Learn about a range of technical topics and gain new skills
              through hands-on workshops, events, talks, and project-building
              activities - both online and in-person.
            </div>
          </div>
          <div style={{ display: "table-cell" }} className="emptyspace"></div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
