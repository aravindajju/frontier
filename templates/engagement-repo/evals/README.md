# Evals

The eval suite is the Scorecard's instrument for AI systems. Cases come from the customer's real data, collected from Landing onward; the suite grows every week the Loop surfaces a new failure, and it graduates with the system as the receiving team's regression harness.

This skeleton assumes promptfoo (`promptfooconfig.yaml`); swap the harness, keep the rules:

- Every case is a real case, traceable to where it came from.
- The hard/edge subset is scored separately — averages hide the failures that matter.
- Runs happen in CI on every push, not on demo days.
- A score drop blocks the merge until someone decides otherwise, in writing.
