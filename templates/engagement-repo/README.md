# Engagement starter

A skeleton for a Frontier engagement repository. Copy it, fill the Charter, delete what this engagement doesn't need. See the Frontier Guide and book (Appendix D) for how each piece is used.

What's here:

- `charter.md` — the engagement's constitution. Fill and sign at Landing, after the Data Walk and the Terrain Map. No exit date, no engagement.
- `ledger.md` — the running record of deliberate overfits and platform gaps. One entry per decision, written in the same sitting.
- `scorecard.md` — the outcome's number, shown at every Showcase, including the weeks it is flat.
- `evals/` — the eval suite. Cases come from the customer's real data; the suite grows every week the Loop surfaces a new failure. The included example uses promptfoo; swap the harness, keep the discipline.
- `.github/workflows/ci.yml` — runs the deterministic tests and the eval suite on every push. The deploy path grows from here in week one, not graduation week.

House rules the skeleton assumes:

- Agent-written code merges through the same review as any other code, per the Charter's agent boundary.
- The Ledger and Scorecard live in the repo, next to the code, because artifacts nobody can find are artifacts nobody keeps.
- At Graduation this repo is handed to its receivers — write everything for them, not for yourself.
