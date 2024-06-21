import React from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import tourData from "../assets/data/tours";
import { useParams } from "react-router-dom";
import { ListGroup } from "reactstrap";
import avater from "../assets/images/avatar.jpg"
import calculateAvgRating from "./../utils/avgRatin"

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourData.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = tour;
  const calculateAvgRating = () => {
    if (reviews.length === 0) {
      return 0;
    }
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  };
  const avgRating = calculateAvgRating().toFixed(1);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt="" />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex align-items-center gap-5">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-s-fill"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    {avgRating === "0.0"
                      ? "Not rated"
                      : `${avgRating} (${reviews.length})`}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span>
                    <i class="ri-map-pin-2-line"></i>
                    {city}
                  </span>
                  <span>
                    <i class="ri-money-dollar-circle-line"></i>₹{price} /per
                    person
                  </span>
                  <span>
                    <i class="ri-group-line"></i>
                    {maxGroupSize}
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>
              <div className="tour__review mt-4">
                <h4>Reviews({reviews?.length} reviews)</h4>
                <Form>
                  <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span>
                      1 <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      2 <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      3 <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      4 <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      5 <i class="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <div className="review__input">
                    <input type="text" placeholder="share your thoughts"/>
                    <button className="btn primary__btn text-white" type="submit">
                      Submit
                    </button>
                  </div>
                </Form>
                <ListGroup className="user__reviews">
                      {
                        reviews?.map(review=>(
                          <div className="review__item">
                            <img src={avater} alt="" />
                          </div>
                        ))
                      }
                </ListGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TourDetails;
