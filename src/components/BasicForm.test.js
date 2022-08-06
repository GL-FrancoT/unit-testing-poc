import "@testing-library/jest-dom";
import { render, screen, configure } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import BasicForm from "./BasicForm";

const container = document.getElementById("app");
const root = createRoot(container);

test("Renders First Name input label", () => {
  // Arrange
  root.render(<BasicForm />);

  // Act

  // Assert
  const firstNameLabel = screen.getByText("First Name", { exact: true });
  expect(firstNameLabel).toBeInTheDocument();
});
