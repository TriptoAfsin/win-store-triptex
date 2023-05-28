import "@testing-library/jest-dom/extend-expect";

import SocialIcons from "@/components/SocialIcons";
import { render, screen, fireEvent } from "@testing-library/react";

it("social links are clickable", () => {
  render(<SocialIcons />);
  const link = screen.getByTestId("social-links-id");

  fireEvent.click(link);
});
