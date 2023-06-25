import {render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CoinTrial from "./CoinTrial";

//   setup and teardown for random number tests
beforeEach(function() {
    jest
      .spyOn(Math, "random")
      .mockReturnValue(0) //default
      .mockReturnValueOnce(0.75) // 1
      .mockReturnValueOnce(0.25) // 2
      .mockReturnValueOnce(0.75) // 3
      .mockReturnValueOnce(0.25) // 4
      .mockReturnValueOnce(0.25) // 5
      .mockReturnValueOnce(0.25) // 6
      .mockReturnValueOnce(0.75) // 7
      .mockReturnValueOnce(0.25) // 8
      .mockReturnValueOnce(0.25) // 9
      .mockReturnValueOnce(0.75); // 10
  });
  
afterEach(function() {
Math.random.mockRestore();
});

// coin not shown when page just loaded
it("should not have coin shown", ()=>{
    render(<CoinTrial />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
});

// test button click
it("btn works", ()=>{
    render(<CoinTrial />);

    // first click, expects tail, and 1 in summay
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByAltText("tail of penny")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveTextContent(/1/);

    // second click expects head, and 2 in summary
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByAltText("head of penny")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveTextContent(/2/);

    // third click expects tail, and 3 in summary
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByAltText("tail of penny")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveTextContent(/3/);

    // fourth click expects tail, and 3 in summary
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByAltText("head of penny")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveTextContent(/4/);

    // fifth click expects tail, and 3 in summary
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByAltText("head of penny")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveTextContent(/5/);

    // sixth click expects head, and 3 in summary
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByAltText("head of penny")).toBeInTheDocument();
    expect(screen.getByTestId("summary")).toHaveTextContent(/6/);





});
    




