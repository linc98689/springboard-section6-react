import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from "./Todo";

// smoke test
test("should render", ()=>{
    render(<Todo />)
});

// snapshot test
test("should not change", ()=>{
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
})
