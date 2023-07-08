import {render,  fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import BoxList from "./BoxList";
import {testBoxes} from "./_testData";

// smoke test
test("should render", ()=>{
    render(<BoxList />);
})

// snap-shot test
test("should not change", ()=>{
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

// test form submission

