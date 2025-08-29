"use client";

import React, { useState } from "react";
import { Carousel, Modal, Button } from "react-bootstrap";
import { useSwipeable } from "react-swipeable";

const images = [
  "/assets/images/awards/1.JPG",
  "/assets/images/awards/2.JPG",
  "/assets/images/awards/3.JPG",
  "/assets/images/awards/4.JPG",
  "/assets/images/awards/5.JPG",
  "/assets/images/awards/6.JPG",
  "/assets/images/awards/7.JPG",
  "/assets/images/awards/9.JPG",
  "/assets/images/awards/10.JPG",
  "/assets/images/awards/11.JPG",
  "/assets/images/awards/12.JPG",
  "/assets/images/awards/13.JPG",
  "/assets/images/awards/14.JPG",
  "/assets/images/awards/15JPG",
];

export default function AwardsCarousel() {
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleShow = (index: number) => {
    setSelectedIndex(index);
    setShow(true);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! === 0 ? images.length - 1 : prev! - 1));
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! === images.length - 1 ? 0 : prev! + 1));
    }
  };

  // Swipe gestures inside modal
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true, // enables mouse dragging also
  });

  return (
    <>
      {/* Main Carousel */}
      <Carousel interval={2000} controls indicators className="my-4">
        {images.map((img, index) => (
          <Carousel.Item key={index} className="text-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="rounded shadow-lg"
              style={{ cursor: "pointer", maxWidth: "600px", height: "auto" }}
              onClick={() => handleShow(index)}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Zoom Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Body className="text-center" {...swipeHandlers}>
          {selectedIndex !== null && (
            <img
              src={images[selectedIndex]}
              alt="Zoomed"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handlePrev}>
            ⬅ Prev
          </Button>
          <Button variant="secondary" onClick={handleNext}>
            Next ➡
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
