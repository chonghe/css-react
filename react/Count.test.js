import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Count from "./Count";

let getByTestId;
beforeEach(() => {
  const component = render(<Count />);
  getByTestId = component.getByTestId;
});

// afterEach(() => {
//   cleanup();
// });

test("header render with correct text", () => {
  //   const component = render(<Count />);
  //   const headerEl = component.getByTestId("header");

  //   const { getByTestId } = render(<Count />);
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("Count");
});

test("counter initall start with text of 0", () => {
  const { getByTestId } = render(<Count />);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input contains inital value of 1", () => {
  const { getByTestId } = render(<Count />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<Count />);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<Count />);
  const addBtn = getByTestId("sub-btn");

  expect(addBtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const { getByTestId } = render(<Count />);
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("click on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<Count />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
});

test("click on plus btn subtracts 1 from counter", () => {
  const { getByTestId } = render(<Count />);
  const subBtnEl = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add btn works correctly", () => {
  const { getByTestId } = render(<Count />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on add btn works correctly", () => {
  const { getByTestId } = render(<Count />);
  const subBtnEl = getByTestId("sub-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subBtnEl);
  expect(counterEl.textContent).toBe("-5");
});

test("adding adn then subtracting leads to the correct counter number", () => {
  const { getByTestId } = render(<Count />);
  const subBtnEl = getByTestId("sub-btn");
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("20");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);

  expect(counterEl.textContent).toBe("15");
});
