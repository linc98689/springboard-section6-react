import {render,  fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Box from "./Box";
import {tbox} from "./_testData";

const {id, color, width, height, deleteBox} = tbox;

// smoke test
test("render BoxList", ()=>{
    render(<Box id={id} color={color} 
    width={width} height={height}
    deleteBox={deleteBox}/>);
})

// snap-shot test
test("should not change", ()=>{
    const {asFragment} = render(<Box id={id} color={color} 
        width={width} height={height}
        deleteBox={deleteBox}/>);
    expect(asFragment()).toMatchSnapshot();
})

// test delete button
test("should delete box", ()=>{
    render(<Box id={id} color={color} 
        width={width} height={height}
        deleteBox={deleteBox}/>);
    
    fireEvent.click(screen.getByRole('button'));

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
})
