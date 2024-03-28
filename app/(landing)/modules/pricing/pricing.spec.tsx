import { render } from "@testing-library/react";
import { PricingSection } from "./pricing";

describe("Test Pricing Section", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<PricingSection />);
    expect(getByTestId("pricing")).toBeInTheDocument();
  });
});
