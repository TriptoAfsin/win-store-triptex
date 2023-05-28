import "@testing-library/jest-dom/extend-expect";

import Footer from "@/components/Footer";
import { render, screen, fireEvent } from "@testing-library/react";

it("my account is clickable", () => {
  render(<Footer />);
  const link = screen.getByTestId("my-account-test-id");

  fireEvent.click(link);
});
