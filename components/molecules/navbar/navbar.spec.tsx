import { fireEvent, render } from "@testing-library/react";
import { Navbar } from ".";

const items = [
  {
    path: "",
    text: "Product",
    childrens: [
      {
        path: "/product",
        text: "Product Unggulan",
      },
    ],
  },
  {
    path: "",
    text: "Solution",
    childrens: [
      {
        path: "/solution",
        text: "Our Solution",
      },
    ],
  },
  {
    path: "/",
    text: "Pricing",
  },
];

describe("Test Navbar Component", () => {
  it("Should render correctly", () => {
    const { getByTestId } = render(<Navbar items={items} />);
    expect(getByTestId("navbar")).toBeInTheDocument();
  });

  it("Should have text 'BerryLabs.io'", () => {
    const { getByTestId } = render(<Navbar items={items} />);
    expect(getByTestId("navbar")).toHaveTextContent("BerryLabs.io");
  });

  it("Should have text 'Get Started'", () => {
    const { getByTestId } = render(<Navbar items={items} />);
    expect(getByTestId("navbar")).toHaveTextContent("Get Started");
  });

  it("Should have text 'Product'", () => {
    const { getByTestId } = render(<Navbar items={items} />);
    expect(getByTestId("navbar")).toHaveTextContent("Product");
  });

  it("Should have text 'Solution'", () => {
    const { getByTestId } = render(<Navbar items={items} />);
    expect(getByTestId("navbar")).toHaveTextContent("Solution");
  });

  it("Should have text 'Pricing'", () => {
    const { getByTestId } = render(<Navbar items={items} />);
    expect(getByTestId("navbar")).toHaveTextContent("Pricing");
  });
});
