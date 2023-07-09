import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewTodoForm from "./NewTodoForm";

// smoke test
test("should render", ()=>{
    render(<NewTodoForm />)
});

// snapshot test
test("should not change", ()=>{
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
})
