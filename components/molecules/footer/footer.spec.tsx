import { render } from "@testing-library/react";
import { Footer } from ".";

describe("Test footer Component", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toBeInTheDocument();
  });

  it("Should have text 'BerryLabs.io'", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toHaveTextContent("BerryLabs.io");
  });

  it("Should have text 'Pages'", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toHaveTextContent("Pages");
  });

  it("Should have text 'Solution'", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toHaveTextContent("Solution");
  });

  it("Should have text 'Pricing'", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toHaveTextContent("Pricing");
  });
});
