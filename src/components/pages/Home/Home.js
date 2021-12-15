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
      <div className="anim1">
        <b>
          <i>HELLO WORLD</i>
        </b>
      </div>

      <center>
        <div className="Container">
          <center>
            {width > 900 ? (
              <div className="Dis">
                <b>Google Develops Students Club </b>
                <div className="clg">
                  <b>Sri Ramakrishna Engineering College</b>
                </div>
              </div>
            ) : (
              <div className="Dis">
                <b>GDSC </b>
                <div className="clg">
                  <b>SREC</b>
                </div>
              </div>
            )}
          </center>
        </div>
      </center>
      <div className="anim2">
        <b>
          <i>{"#INCLUDE<STDIO.H>"}</i>
        </b>
      </div>
      <br />
      <br />
      <div className="Start">
        <div className="slider">
          {width > 900 ? (
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={40}
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
                      src="{data.image}"
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
            </CarouselProvider>
          ) : (
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={85}
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
            </CarouselProvider>
          )}
        </div>
      </div>

      <div style={{ display: "table" }} className="design">
        <br />
        <br />
        {width > 900 ? (
          <div style={{ display: "table-row" }}>
            <div style={{ display: "table-cell" }} className="emptyspace"></div>

            <div style={{ display: "table-cell" }} className="Icon1">
              <center>
                {width > 900 ? (
                  <Icon
                    icon="el:group"
                    color="#8a8e97"
                    width="100"
                    height="100"
                  />
                ) : (
                  <Icon
                    icon="el:group"
                    color="#8a8e97"
                    width="50"
                    height="50"
                  />
                )}
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
                {" "}
                {width > 900 ? (
                  <Icon
                    icon="dashicons:welcome-learn-more"
                    color="#8a8e97"
                    width="100"
                    height="100"
                  />
                ) : (
                  <Icon
                    icon="dashicons:welcome-learn-more"
                    color="#8a8e97"
                    width="50"
                    height="50"
                  />
                )}
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
                {width > 900 ? (
                  <Icon
                    icon="uil:arrow-growth"
                    color="#8a8e97"
                    width="100"
                    height="100"
                  />
                ) : (
                  <Icon
                    icon="uil:arrow-growth"
                    color="#8a8e97"
                    width="50"
                    height="50"
                  />
                )}
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
        ) : (
          <div style={{ display: "table-row" }}>
            <div></div>

            <div className="Icon1" style={{ display: "table-cell" }}>
              <center>
                <Icon
                  icon="el:group"
                  color="#8a8e97"
                  width="100"
                  height="100"
                />
              </center>
              <center>
                <b>Connect</b>
              </center>
              <br />
              <div className="label1">
                Meet students interested in developer technologies at your
                university. All are welcome, including those with diverse
                backgrounds and different majors.
              </div>
            </div>
            <div></div>
            <div className="Icon2" style={{ display: "table-cell" }}>
              <center>
                {" "}
                <Icon
                  icon="dashicons:welcome-learn-more"
                  color="#8a8e97"
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
            <div></div>
            <div className="Icon3" style={{ display: "table-cell" }}>
              <center>
                <Icon
                  icon="uil:arrow-growth"
                  color="#8a8e97"
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
            <div></div>
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
