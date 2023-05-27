import "@testing-library/jest-dom/extend-expect";

import CatCard from "../components/Cards/CatCard";
import { render, screen, fireEvent } from "@testing-library/react";

it("cat card is clickable", () => {
  render(<CatCard />);
  const button = screen.getByTestId("cat-card-id");

  fireEvent.click(button);
});
