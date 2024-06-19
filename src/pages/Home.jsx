import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/udaipur.jpg";
import heroImg02 from "../assets/images/Jaipur.jpg";
import heroVideo from "../assets/images/heroVideo.mp4"
import Subtitle from "../shared/Subtitle";
import camelImg from "../assets/images/camel.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

const Home = () => {
  return (
    <>
      {/* =========== hero section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={camelImg} alt="" />
                </div>
                <h1>
                  Explore The Land Of{" "}
                  <span className="highlight">Maharajas</span>
                </h1>
                <p>
                  Discover Rajasthan’s splendor with Ghumo SA, your expert guide
                  to the Land of Kings, Experience royal hospitality and desert
                  adventures tailored just for you, with Ghumo SA, where every
                  journey is a royal saga.🏰🐪
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls/>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

         <SearchBar />  
          </Row>
        </Container>
      </section>
      {/* =========== hero section stat ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ======== featured tour section start ======== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>  
    </>
  );
};

export default Home;
