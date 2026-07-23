# Appendix D. The Practitioner's Toolkit

The method is vendor-neutral; the practitioner cannot be. Somebody has to pick an editor on Monday morning. This appendix names tools in five categories. The categories and the selection criteria are stable — they follow from the method — and the named products are a snapshot: **checked in mid-2026, expected to churn.** When a name here dies, the criteria tell you what to replace it with. Chapter 14 covers the craft these tools serve; the starter repository in `templates/engagement-repo/` wires several of them together.

## Coding agents

What the method needs: an agent that works in the customer's repo under the Charter's agent boundary — respecting what it may read, where it may write, and which actions need a human gate — and whose output flows through the same review as any other code (chapter 13).

As of mid-2026: **Claude Code** (Anthropic; terminal-first, the strongest fit for multi-file autonomous work under permission rules), **Cursor** (the AI-native editor most engineers reach for daily), **GitHub Copilot** (the default in conservative enterprises, which matters when the customer's security team is approving your toolchain), **Codex** (OpenAI's agent line), and **Cline** (open source, bring-your-own-model — useful when the customer's data terms rule out a specific provider). Windsurf survives as a Cognition product.

## Eval harnesses

What the method needs: eval as code, in the engagement repo, runnable in CI — because the eval suite is the Scorecard (chapter 13) and the Scorecard cannot live in someone's browser tab. Prefer harnesses that version their case sets and diff their runs.

As of mid-2026: **promptfoo** (CLI- and CI-first; open source, now OpenAI-owned), **DeepEval** (pytest-native, the natural choice when the glue tests are already pytest), **Inspect** (open source from the UK AI Security Institute; the rigorous option, strong for agentic tasks), and **Braintrust** (hosted, dataset-first, the choice when the customer wants a UI their own analysts can read). Do not reach for OpenAI Evals: the hosted platform shuts down in late 2026.

## Data profiling and quality

What the method needs: the Data Walk (chapter 8) runs on agent-driven SQL first — profiling is a conversation with the warehouse, not a tool purchase. Reach for a framework when findings must become durable checks that outlive the engagement.

As of mid-2026: **GX Core** (the open-source Great Expectations engine, now stewarded by Fivetran — the cloud product went to FICO and closed), **dbt tests** with `dbt-expectations` (when the customer already runs dbt, the checks belong next to their models), and **Soda Core** (YAML-defined checks with anomaly detection, SQL-native).

## Observability for AI systems

What the method needs: the operating team must learn of failure before the vendor's engineer does — that is the production-grade definition, and for probabilistic systems it means tracing, not just uptime checks. Prefer what the customer already runs; observability handed off in an unfamiliar tool is observability turned off within a quarter.

As of mid-2026: **Langfuse** (open source, self-hostable — the answer when data cannot leave the customer's estate), **Arize Phoenix** (open source, local-first, the deepest eval integration), **LangSmith** (hosted, natural with LangChain/LangGraph stacks), and **Datadog's agent observability** (when the customer is already a Datadog shop). Instrument against the **OpenTelemetry GenAI conventions** where you can — they are still pre-1.0, so pin the version and expect churn, but they are the least-regret handoff format.

## Sandboxing and permissions

What the method needs: the agent boundary is a Charter clause; these tools are how it becomes enforceable rather than aspirational.

As of mid-2026: **devcontainers** (the baseline — a reproducible environment the customer's security team can read), **E2B** or **Modal** (hosted micro-VM sandboxes when agent code needs isolated execution), and OS-level sandboxing of the coding agent itself (Claude Code and Codex both ship it; network-off defaults are worth keeping). Sandboxes have had bypass CVEs; treat them as one layer, with the Charter's audit trail beneath.

## The starter repository

`templates/engagement-repo/` in this book's repository is an engagement skeleton: the Charter, Ledger, and Scorecard from Appendix C as files, an `evals/` directory wired into CI, and a minimal pipeline that runs the deterministic tests and the eval suite on every push. It exists because week one has better uses than inventing folder structure. Copy it, fill the Charter, delete what the engagement doesn't need.
