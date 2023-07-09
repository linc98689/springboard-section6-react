import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import EditForm from "./EditForm";

// smoke test
test("should render", ()=>{
    render(<EditForm  task="wash car"/>);
});

// snapshot test
test("should not change", ()=>{
    const {asFragment} = render(<EditForm task="wash car" />);
    expect(asFragment()).toMatchSnapshot();
});