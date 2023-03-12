import React from "react";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormater } from "../utils";

const BudgetCard = ({
  name,
  amount,
  max,
  gray,
  onAddExpenseClick,
  hideButtons,
  onViewExpenseClick,
}) => {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }
  return (
    <>
      <Card className={classNames.join(" ")} style={{ width: "450px" }}>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
            <div className="me-2">{name}</div>
            <div className="d-flex align-items-baseline">
              {currencyFormater.format(amount)}
              {max && (
                <span className="text-muted fs-6 ms-1">
                  / {currencyFormater.format(max)}
                </span>
              )}
            </div>
          </Card.Title>
          {max && (
            <ProgressBar
              className="rounded-pill"
              variant={getProgressBarVariant(amount, max)}
              min={0}
              max={max}
              now={amount}
            />
          )}
          {!hideButtons && (
            <Stack direction="horizontal" gap="2" className="mt-4">
              <Button variant="outline-primary" onClick={onAddExpenseClick}>
                Add Expense
              </Button>
              <Button variant="outline-secondary" onClick={onViewExpenseClick}>
                View Expense
              </Button>
            </Stack>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

function getProgressBarVariant(amount, max) {
  const percentage = amount / max;
  if (percentage < 0.5) {
    return "primary";
  } else if (percentage < 0.75) {
    return "warning";
  } else {
    return "danger";
  }
}

export default BudgetCard;
