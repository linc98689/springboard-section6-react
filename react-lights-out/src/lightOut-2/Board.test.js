import {render, fireEvent, screen} from "@testing-library/react";
import Board from "./Board";

// smoke test
it("should render", ()=>{
    render(<Board />)
})