import { render } from "@testing-library/react";
import { HeroSection } from "./hero";

describe("Test Hero Section", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<HeroSection />);
    expect(getByTestId("hero")).toBeInTheDocument();
  });

  it("Should have text 'Berrylabs Pricing'", () => {
    const { getByTestId } = render(<HeroSection />);
    expect(getByTestId("hero")).toHaveTextContent("Berrylabs Pricing");
  });

  it("Should have text 'Automate Without Breaking the Bank: Affordable Solutions for Every Business.'", () => {
    const { getByTestId } = render(<HeroSection />);
    expect(getByTestId("hero")).toHaveTextContent(
      "Automate Without Breaking the Bank: Affordable Solutions for Every Business."
    );
  });
});
