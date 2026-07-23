# The Frontier Guide

*An Opinionated Method for Forward Deployed Engineering*

Version 0.1 — draft. Licensed CC BY-SA 4.0.

## Purpose of this Guide

This Guide defines Frontier: its roles, lifecycle, events, artifacts, rules, and metrics. It is deliberately short. It tells you what Frontier is precisely enough that you can tell whether you are doing it. The companion book explains why each element exists, tells the stories behind it, and covers what this Guide leaves out: hiring, economics, org design, and the customer's side of the table.

Forward Deployed Engineering (FDE) is the discipline. Frontier is one opinionated method for practicing it, the way Scrum is one method for practicing agile development. You can do FDE without Frontier. This Guide describes what you commit to when you do it with Frontier.

## Forward Deployed Engineering, defined

Forward Deployed Engineering is the practice of embedding product engineers inside a customer's environment to ship working software against real data, own a named business outcome, and feed what they learn back into the product.

Work is FDE only if all three of these hold. This is the **FDE test**:

1. **Production code in the customer's environment, against real data.** Not offline prototypes. Not anonymized sandboxes. Not slideware.
2. **Outcome ownership.** The engineer is accountable for a named business result, not a deliverables list and not a satisfaction score.
3. **Product obligation.** The engagement must leave a trace in the product. Extraction is a duty, not a bonus.

Fail the first and you are doing solutions engineering. Fail the second and you are doing staff augmentation. Fail the third and you are doing consulting. All three are honorable trades. None of them is this one.

## Why forward deployment works

Frontier rests on three claims.

**Context is the scarce input.** Enterprise software fails for missing context, not missing code. Context lives at the customer — in their data, their workflows, their politics — and it degrades badly in transmission. A requirements document is lossy compression. The economical move is to transport the engineer to the context, not the context to the engineer.

**The demo-to-production gap is where value dies.** The gap was always real; probabilistic AI systems widened it. A system that demos well on curated data must still be tuned against the customer's actual data, integrated with their actual systems, and adopted by their actual people. That work cannot be done remotely from a spec — and whoever does it captures the learning.

**Deliberate overfit, systematic generalization.** Solving one customer's problem exactly produces an overfit solution, and that is correct — provided the overfit is logged and temporary. The product is built from the residue: what repeats across engagements gets generalized into the core. Frontier exists to make this loop reliable instead of accidental.

The loop runs in both directions, and the forward direction came first. Palantir did not invent forward deployment to build bespoke systems; it invented the role to get its platform implemented quickly inside customers who couldn't implement it themselves. A Frontier engagement starts from the product's existing capability and builds only the last mile between platform and outcome. This is what makes the time-box honest — most of First Proof should already exist as product — and it is the flywheel that makes the economics compound: every extraction widens the platform, and every widening shortens the next engagement.

**Machine leverage makes the economics work.** Frontier assumes an AI-native practice on both sides of the work: the engineer builds with AI code assistants and agents, and what they build is mostly AI and agentic systems. The leverage runs both directions. Agent-assisted engineering is what lets one or two engineers produce team-scale output inside the time-box — Frontier's cadences are set for that velocity, not for hand-built velocity. And probabilistic systems are precisely the kind that cannot be tuned anywhere but in place, against the customer's real data. A method for field engineering that ignored either half would be describing a job that no longer exists.

## Values

Frontier teams value:

- **Outcomes over deliverables**
- **Production over demos**
- **Firsthand context over written requirements**
- **The product over the project**
- **Exits over residencies**

The items on the right have value. When they conflict, the items on the left decide. The eleven principles that follow from these values are stated in the Frontier Manifesto; this Guide gives them operational form.

## Roles

Frontier defines four accountabilities. Small teams may put several on one person; the accountabilities stay distinct even when the people don't.

**The Frontier Engineer** passes the same technical bar as core product engineers. They write production code in the customer's environment — with AI code assistants and agents as the default toolchain — and own the technical half of the outcome. On top of the generalism the role has always demanded (data wrangling, integration, infrastructure), the bar now includes the AI-native layer: agentic system design, eval construction, and context engineering. A Frontier Engineer is not a solutions architect (they write production code, post-sale, and own the outcome), not a consultant (they owe the product a trace), and not a support engineer (they build; they don't only react).

**The Field Strategist** owns problem selection, adoption, workflow change, and the customer's institutional terrain. This role is not necessarily an engineer. It descends from Palantir's Deployment Strategist, and it is the role most imitators drop — then pay for in software that runs but isn't used.

**The Core Counterpart** is a named engineer or product manager on the core product team who receives the engagement's extractions and owes them a decision. Extraction fails without a named receiver.

**The Customer Sponsor** owns the outcome on the customer's side, is senior enough to unblock access and data, and attends Showcases. No sponsor, no engagement.

## The Lifecycle

A Frontier engagement is time-boxed: **six to twelve weeks by default**, in writing, from the start. Longer residencies are a tailoring case (see Tailoring), never a drift.

**1. Landing — week one.** Get access. Read the real data. Map the actual environment: systems, data, people, politics. Landing ends when the Charter is signed.

**2. First Proof — by the end of week two or three.** The first working software on the customer's real data, in their environment. Small is fine. Real is mandatory. And most of it should be assembly, not construction: the platform's existing capability aimed at the customer's data, with field code only where the platform stops. A First Proof built from scratch is either a signal about the product or a Greenfield Reflex — find out which before the Loop begins.

**3. The Loop — the bulk of the engagement.** A weekly rhythm: Showcase the outcome's current state, discuss, take feedback, ship the next version. Overfits and generalization candidates go into the Ledger as they happen, not at the end.

**4. Graduation — the final week or weeks.** Handoff against the Charter's criteria: the customer or the product now owns the running system. The engagement ends on its exit date. Extending it requires a new Charter — a conscious re-decision, never a silent slide.

**5. Extraction Review — within two weeks after Graduation.** The field team and the Core Counterpart disposition every Ledger item: generalize, defer, or discard. Decided, not defaulted.

## Events

**The Showcase** — weekly, time-boxed, Sponsor present. Working software only; a Showcase run on slides is a planning meeting wearing a costume.

**The Field-Core Sync** — weekly, Frontier Engineer with Core Counterpart. The product hears what the field is learning while the engagement runs, not after it ends.

**The Extraction Review** — once per engagement (see Lifecycle), plus quarterly across the portfolio: what is repeating across engagements, and what does that demand of the product.

## Artifacts

**The Charter** — one page, signed at Landing: the named outcome (measurable), the exit date, the graduation criteria, the Sponsor — and the agent boundary: what AI agents may touch in the customer's environment, and under whose review. Agent access is an access question, and access questions are settled at Landing, not discovered in an incident report. The Charter is the engagement's constitution. If it isn't written, the engagement hasn't started; it's just visiting.

**The Ledger** — the running record of deliberate overfits and generalization candidates. The Ledger is what makes "overfit at the edge" honest: an overfit in the Ledger is a decision; an overfit not in the Ledger is a trap.

**The Scorecard** — the outcome's measurable definition and its current state, shown at every Showcase. The engagement's speedometer. For AI and agentic systems — most of what Frontier teams build — the Scorecard is an eval suite: a probabilistic system's outcome is a measured distribution, and a demo is an anecdote about it. "It worked in the showcase" is not a state an AI system can be in; an eval score is.

## Operating Rules

Frontier's rules are falsifiable on purpose: anyone can check whether a team follows them, which makes fake adoption detectable.

1. **The two-week proof rule.** Working software on real customer data within two weeks of Landing, or the Charter is renegotiated. With an agent-assisted toolchain, two weeks is generous, not heroic — when the deadline slips, the cause is almost always access, not engineering, and the renegotiation should say so. Exceptions happen; silent exceptions don't.
2. **The exit-date rule.** No engagement runs without a written exit date. Extension means a new Charter.
3. **The extraction rule.** No engagement closes without an Extraction Review and a disposition for every Ledger item.
4. **The one-third rule.** When more than a third of deployments need heavy field effort for the same class of problem, that is a product defect. The fix belongs to the core. Adding field engineers to it is malpractice.
5. **The rotation rule.** No engineer runs more than two consecutive engagements, or six months in the field, without a rotation through the core.

## Metrics

Frontier tracks four metrics. They are to a field organization what the DORA metrics are to a delivery organization.

1. **Time to First Proof** — days from Landing to working software on real data in the customer's environment.
2. **Loop Time** — median days from Showcase feedback to the shipped next version.
3. **Graduation Rate** — the share of engagements that end on their Charter exit date with criteria met.
4. **Extraction Rate** — Ledger items generalized into the product, per quarter.

Directionally: proof inside two weeks, loop inside a week, graduation above four in five, extraction above zero every quarter. These thresholds are early calibration, not settled science; the metrics themselves are the commitment.

## Anti-patterns

Each has a detection signal. If you see the signal, you have the problem, whatever the org chart says.

- **The Permanent Resident** — the engagement that never ends. Signal: no exit date, or serial extensions without re-chartering.
- **The Ghost Consultant** — engagements that leave no product trace. Signal: an empty Ledger; extraction rate at zero.
- **The Demo Treadmill** — Showcases running on slides and staged data. Signal: First Proof never lands; production access is always next month.
- **The Diluted Badge** — the FDE title on solutions-architect work. Signal: fails the FDE test.
- **The Silent Overfit** — edge hacks nobody recorded. Signal: production incidents the Ledger never predicted.
- **The Burned Hero** — one engineer carrying serial engagements without rotation. Signal: rotation-rule violations, then resignation letters.
- **The Greenfield Reflex** — rebuilding at the edge what the platform already does. Signal: engagement code that duplicates product capability; the platform team learns about workarounds from incident reports.

## Tailoring

Frontier is a method, not a liturgy. Some of it is invariant; the rest is expected to be tailored, and honest tailoring is stated tailoring.

**Invariant:** the FDE test, the Charter with an exit date, the Loop on real data, the Extraction Review, a named Core Counterpart. Remove any of these and what remains is not Frontier.

**Tailor by context:**
- *Engagement length.* Six to twelve weeks by default. Regulated or mission-critical domains may need residencies — run them as chained engagements with quarterly re-chartering, not as an open-ended stay.
- *The agent boundary.* In permissive environments the Charter's agent boundary can be a paragraph; in regulated ones (health, finance, defense) expect it to be the hardest-negotiated line in the document — human review gates, data boundaries for model context, audit trails for agent actions. The boundary's width is tailorable; its existence is not.
- *Field Strategist staffing.* A separate person at enterprise deal sizes; a hat the engineer wears at seed stage. The accountability never disappears — only the headcount.
- *Loop cadence.* Weekly by default; daily in short engagements; biweekly only when customer availability forces it.
- *The one-third rule* applies once a portfolio exists — roughly five concurrent engagements. Before that, use judgment and write down what you saw.

**When not to use Frontier at all.** Four fit gates: mission-criticality of the problem, deal size that can carry field engineering, workflow commonality across customers, and data gravity. Failing two or more, the answer is a better product or a partner channel, not field engineers.

## What Frontier is not

Frontier is not a sales method, though it lives near the sale. It is not professional services, though it bills like it in the worst implementations — the anti-patterns exist because the gravity in that direction is real. It is not a certification: there is nothing to buy, and "Frontier-certified" is not a thing this Guide recognizes. And it is not finished — this is version 0.1, the rules carry early-calibration thresholds, and revisions will remove at least as much as they add.

## Glossary

- **Charter** — the one-page engagement constitution: outcome, exit date, graduation criteria, sponsor.
- **Engagement** — one time-boxed deployment of a Frontier team against one chartered outcome.
- **Extraction** — moving something learned or built at the edge into the core product.
- **FDE test** — the three criteria that distinguish FDE from adjacent trades.
- **Frontier Engineer** — the practitioner role; a product engineer deployed into the customer's environment.
- **Graduation** — the planned end of an engagement, against the Charter's criteria.
- **Ledger** — the running record of deliberate overfits and generalization candidates.
- **The Loop** — the show-discuss-ship-again heartbeat of an engagement.
- **Scorecard** — the outcome's measurable definition and current state.
- **Showcase** — the weekly working-software review with the Sponsor present.

## Versioning and changes

This Guide is versioned. Every change appears in the changelog with its reasoning; superseded versions stay available. Changes to the normative core — the FDE test, roles, lifecycle, rules, metrics — are decided by the author after public comment. The direction of travel is a commitment: each revision removes at least as much prescription as it adds.
