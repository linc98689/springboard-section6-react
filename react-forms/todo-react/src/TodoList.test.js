import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from "./TodoList";

// smoke test
test("should render", ()=>{
    render(<TodoList/>)
});

// snapshot test
test("should not change", ()=>{
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
})
