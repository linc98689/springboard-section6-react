import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("should render", ()=> {
  render(
   <Carousel
     photos={TEST_IMAGES}
     title="images for testing"
   />
 )});

// snapshot test
it("should not change", ()=>{
const {asFragment} = render(
<Carousel
 photos={TEST_IMAGES}
 title="images for testing"
/>);

expect(asFragment()).toMatchSnapshot();
});    

// test left arrow
/**
 * When click on left arrow, image should change from image-1 to image-3
 */
it("should go backward", ()=>{
  const {container, debug} = render(
    <Carousel 
      photos={TEST_IMAGES}
      title="images for testing"
    />);

    //define html elements
    const leftArrow = container.querySelector('.bi-arrow-left-circle');

    expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
    expect(container.querySelector('img[alt="testing image 3"]')).not.toBeInTheDocument();
    debug();

    fireEvent.click(leftArrow);
    debug();
    expect(container.querySelector('img[alt="testing image 3"]')).toBeInTheDocument();
    expect(container.querySelector('img[alt="testing image 1"]')).not.toBeInTheDocument();


});


// Given: testing right arrow
it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});


