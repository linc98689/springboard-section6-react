import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// data for testing
const testProp = {
    caption:"Test Photo",
    src:"test.com",
    curNum:1,
    totalNum:3
};

// Smoke test
it("should render", ()=>{
    render(<Card caption={testProp.caption} src={testProp.src} curNum={testProp.curNum} totalNum={testProp.totalNum}/>);
}); 

// snapshot test
it("should not change", ()=>{
    const {asFragment} = render(
        <Card caption={testProp.caption} src={testProp.src} curNum={testProp.curNum} totalNum={testProp.totalNum}/>
    );

    expect(asFragment()).toMatchSnapshot();
});

