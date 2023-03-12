import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">My Budgets</h1>
        <Button variant="primary" size="lg">
          Add Budget
        </Button>
        <Button variant="outline-primary" size="lg">
          Primary
        </Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px ,1fr))",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <BudgetCard name="Entertainment" amount={600} max={1000} gray />
      </div>
    </Container>
  );
}

export default App;
