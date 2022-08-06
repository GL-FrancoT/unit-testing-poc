import { render, screen } from "@testing-library/react";
import BasicForm from "./BasicForm";

test("Renders First Name input label", () => {
  // Arrange
  render(<BasicForm />);

  // Act

  // Assert
  const firstNameLabel = screen.getByText("First Name", { exact: true });
  expect(firstNameLabel).toBeInTheDocument();
});
