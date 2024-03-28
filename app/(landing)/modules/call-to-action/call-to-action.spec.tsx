import { render } from "@testing-library/react";
import { CTASection } from "./call-to-action";

describe("Test Call To Action Section", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<CTASection />);
    expect(getByTestId("cta")).toBeInTheDocument();
  });

  it("Should have text 'Haven't found which package is right for you?'", () => {
    const { getByTestId } = render(<CTASection />);
    expect(getByTestId("cta")).toHaveTextContent(
      "Haven't found which package is right for you?"
    );
  });

  it("Should have text 'We've got you covered! Talk to our experts to find the best solution for you, anytime for free!'", () => {
    const { getByTestId } = render(<CTASection />);
    expect(getByTestId("cta")).toHaveTextContent(
      "We've got you covered! Talk to our experts to find the best solution for you, anytime for free!"
    );
  });

  it("Should have text 'Talk To Expert'", () => {
    const { getByTestId } = render(<CTASection />);
    expect(getByTestId("cta")).toHaveTextContent("Talk To Expert");
  });
});
