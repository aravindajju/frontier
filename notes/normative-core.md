# The Frontier normative core — working draft v0.1

Positioning: Forward Deployed Engineering (FDE) is the discipline. **Frontier** is this opinionated method for practicing it — as Scrum is to Agile. Section 1 defines the discipline; everything after it defines the method.

This document is the method's skeleton. The manifesto, the Guide, and the book all express what is defined here; none of them may contradict it. Everything below is open to revision until the Guide ships as v1.0.

Sources: Palantir's documented practice (Delta/Echo, the Foundry extraction story), first-hand accounts (Qureshi, Ganesh), published analyses (Schmidt, Wu, Otter, Andrusko), structural precedents (Scrum Guide, XP, SRE, DORA, Kanban), and the author's engagements (6-8 week cycles, weekly show-and-discuss loop on real data).

---

## 1. Definition

Forward Deployed Engineering is the practice of embedding product engineers inside a customer's environment to ship working software against real data, own a named business outcome, and feed what they learn back into the product.

**The bright-line test.** Work is FDE only if all three hold:

1. **Production code in the customer's environment, against real data.** Not offline prototypes, not anonymized sandboxes, not slideware.
2. **Outcome ownership.** The engineer is accountable for a named business result, not a deliverables list or a satisfaction score.
3. **Product obligation.** The engagement must leave a trace in the product. Extraction is a duty, not a bonus.

Fail the first and you are doing solutions engineering. Fail the second and you are doing staff augmentation. Fail the third and you are doing consulting. All three are honorable trades; none of them is this one.

## 2. Theory — why forward deployment works

Three claims, each falsifiable in principle:

1. **Context is the scarce input.** Enterprise software fails for missing context, not missing code. Context lives at the customer — in their data, their workflows, their politics — and it degrades badly in transmission. Requirements documents are lossy compression. The economical move is to transport the engineer to the context, not the context to the engineer.
2. **The demo-to-production gap is where value dies.** The gap was always real; probabilistic AI systems widened it. A system that demos well on curated data must still be tuned against the customer's actual data, integrated with their actual systems, and adopted by their actual people. That work cannot be done remotely from a spec, and whoever does it captures the learning.
3. **Deliberate overfit, systematic generalization.** Solving one customer's problem exactly produces overfit solutions — and that is correct, provided the overfit is temporary and tracked. The product is built from the residue: what repeats across engagements gets generalized into the core. Palantir's Foundry is the proof at scale. The methodology exists to make this loop reliable instead of accidental.
4. **Machine leverage makes the economics work.** Frontier engineers build with AI code assistants and agents, and what they build is mostly AI and agentic systems. The leverage runs both directions: agent-assisted engineering is what lets one or two engineers produce team-scale output inside a 6-12 week box, and probabilistic systems are exactly the kind that cannot be tuned anywhere but in situ, against the customer's real data. The method assumes both. Corollaries: for AI systems the Scorecard is an eval suite (a probabilistic outcome needs a measured one, not a demo); and agent access to customer infrastructure is a chartered, governed decision, not a default.

## 3. Values (five, contrastive)

1. **Outcomes over deliverables.**
2. **Production over demos.**
3. **Firsthand context over written requirements.**
4. **The product over the project.**
5. **Exits over residencies.**

As in the Agile Manifesto's form: the items on the right have value; the items on the left decide when they conflict.

## 4. Principles (eleven, numbered, individually citable)

1. **Go where the context is.** The engineer travels; the context doesn't.
2. **Start in the data, not the requirements.** Discovery means reading the customer's real data and systems first. What people say they need and what their data shows they need are different documents.
3. **Deploy the platform; build the last mile.** The engagement starts from the product's existing capability, not from an empty repo. Field code is the last mile between platform and outcome — and last-mile code written twice is a platform gap. (This was the role's founding purpose: Palantir conceived forward deployment to get its platform implemented quickly, not to build bespoke systems.)
4. **Ship something real inside two weeks.** The first production-grade result on real data is the engagement's ignition; most of it should be assembly, not construction. Everything before it is positioning.
5. **Show, discuss, ship again.** The heartbeat is a short loop: working software shown to the outcome's owners, feedback taken, next version shipped. Days, not quarters.
6. **Overfit at the edge, generalize at the core.** Overfitting is permitted, logged, and temporary. Silent overfit is debt fraud.
7. **Every engagement feeds the product.** An engagement that leaves no trace in the product was consulting, whatever the job title said. Each extraction widens the platform; every widening shortens the next engagement.
8. **Own the outcome, not the ticket.** The engineer's accountability is a named business result the customer would recognize as theirs.
9. **Set the exit date on day one.** An engagement without an exit date is a services contract discovering itself.
10. **Adoption is half the job — staff it.** Someone must own workflow change, institutional politics, and problem selection. Palantir paired every Delta with an Echo; teams that drop this role pay for it in shelfware.
11. **Nobody lives at the frontier.** Rotation between field and core is structural. It moves context into the product, prevents burnout, and keeps field engineers product engineers.

## 5. Roles (four)

- **Frontier Engineer** — the FDE. Passes the same technical bar as core engineers. Writes production code in the customer's environment, working with AI code assistants and agents as the default toolchain. Owns the technical half of the outcome. Skills profile adds the AI-native layer: agentic system design, eval construction, prompt/context engineering — on top of the startup-CTO generalism (data wrangling, integration, infrastructure) the role has always required.
- **Field Strategist** — the Echo-equivalent. Owns problem selection, adoption, workflow change, and the customer's institutional terrain. Not necessarily an engineer. In small teams one person wears both hats; the accountabilities stay distinct even when the person doesn't.
- **Core Counterpart** — a named engineer or product manager in the core team who receives the engagement's extractions and owes them a decision. Extraction fails without a named receiver.
- **Customer Sponsor** — the customer-side owner of the outcome, senior enough to unblock access and data, present at showcases. No sponsor, no engagement.

Boundaries: a Frontier Engineer is not a solutions architect (production code, post-sale, outcome-owned), not a consultant (product obligation), not a support engineer (builds, not reacts).

## 6. Lifecycle

Default engagement: **6 to 12 weeks**, time-boxed in writing. Longer residencies are a tailoring case (§10), never a drift.

1. **Landing** (week 1). Get access, read the real data, map the actual environment, meet the terrain. Ends when the **Charter** is signed: named outcome, exit date, graduation criteria, named sponsor.
2. **First Proof** (by end of week 2-3). First working software on the customer's real data in their environment. Small is fine; real is mandatory; assembly over construction — platform capability aimed at the customer's data, field code only where the platform stops.
3. **The Loop** (the bulk). Weekly **Showcase**: show the outcome's current state, discuss, take feedback, ship the next version. Overfits and generalization candidates land in the **Ledger** as they happen.
4. **Graduation** (final week(s)). Handoff against the charter's criteria: the customer or the product now owns the running system. The engagement ends on its exit date. Extending it requires a new charter — a conscious re-decision, never a silent slide.
5. **Extraction Review** (within two weeks after graduation). Field team and Core Counterpart disposition every Ledger item: generalize, defer, or discard. Decided, not defaulted.

## 7. Events (recurring)

- **Showcase** — weekly, timeboxed, sponsor present. Working software only; no slide-only showcases.
- **Field-Core Sync** — weekly, Frontier Engineer with Core Counterpart. Keeps the product informed while the engagement runs, not after.
- **Extraction Review** — per engagement (see lifecycle), plus a quarterly portfolio-level review across engagements: what is repeating, and what does that demand of the product.

## 8. Artifacts (three)

- **The Charter** — one page: named outcome (measurable), exit date, graduation criteria, sponsor. Signed at Landing. The engagement's constitution.
- **The Ledger** — the running record of deliberate overfits and generalization candidates. The debt registry that makes "overfit at the edge" honest.
- **The Scorecard** — the outcome's measurable definition and current state, shown at every Showcase. The engagement's speedometer.

## 9. Operating rules (falsifiable)

1. **The two-week proof rule.** Working software on real customer data within two weeks of landing, or the charter is renegotiated. No exceptions travel silently.
2. **The exit-date rule.** No engagement runs without a written exit date. Extension = new charter.
3. **The extraction rule.** No engagement closes without an Extraction Review and a disposition for every Ledger item.
4. **The one-third rule.** When more than a third of deployments need heavy field effort for the same class of problem, that is a product defect. The fix goes to the core; adding field engineers to it is malpractice. (Calibrated from Wu's 30-40% observation.)
5. **The rotation rule.** No engineer runs more than two consecutive engagements, or six months, without a core rotation.

## 10. Metrics (the four keys, DORA-style)

1. **Time to First Proof** — days from landing to working software on real data in the customer's environment.
2. **Loop Time** — median days from showcase feedback to the shipped next version.
3. **Graduation Rate** — share of engagements that end on their charter exit date with criteria met.
4. **Extraction Rate** — Ledger items generalized into the product per quarter.

Healthy field organizations trend: proof in days-to-two-weeks, loop in under a week, graduation above ~80%, extraction rate above zero every quarter. (Thresholds are v0.1 conjecture — to be labeled as such until field data accumulates.)

## 11. Anti-patterns (named, with detection signals)

- **The Permanent Resident** — the engagement that never ends. Signal: no exit date, or serial extensions without re-chartering.
- **The Ghost Consultant** — engagements that leave no product trace. Signal: empty Ledger, skipped Extraction Reviews, extraction rate at zero.
- **The Demo Treadmill** — showcases running on slides and staged data. Signal: Time to First Proof never lands; "we'll get production access next month."
- **The Diluted Badge** — the FDE title on solutions-architect work. Signal: fails the bright-line test's first or second criterion.
- **The Silent Overfit** — edge hacks nobody recorded. Signal: production incidents at the customer that the Ledger never predicted.
- **The Burned Hero** — one engineer carrying serial engagements without rotation. Signal: rotation rule violations; resignation letters.
- **The Greenfield Reflex** — rebuilding at the edge what the platform already does. Signal: engagement code duplicating product capability; platform team learns of workarounds from incident reports.
- **The Margin Mirage** — field costs hidden to flatter product margins. Signal: FDE cost booked outside COGS/CAC. Book-level name, not part of the Guide's seven-item field catalog: it is an org/economics pathology committed by executives, named and treated in chapter 18.

## 12. Tailoring (context-dependent vs invariant)

**Invariant everywhere** (the core the bright-line test protects): the three criteria, the Charter with exit date, the Showcase loop on real data, the Extraction Review, a named Core Counterpart.

**Varies by context:**
- *Engagement length*: 6-12 weeks default; regulated or mission-critical domains (defense, health infrastructure) may run residencies — with quarterly re-chartering replacing the single exit date.
- *Field Strategist staffing*: separate person at enterprise deal sizes; a hat the engineer wears at seed stage — the accountability never disappears, only the headcount.
- *Loop cadence*: weekly default; daily in short engagements, biweekly where customer availability forces it.
- *Portfolio rules*: the one-third rule applies once there are enough engagements to have a portfolio (roughly five concurrent); before that, judgment.

**Fit gates — when not to use this model at all** (after Andrusko): low mission-criticality, small median deal size, no workflow commonality across customers, no data gravity. Fail two or more and the answer is a better product or a partner channel, not field engineers.

## 13. Vocabulary (coined terms, budget: ten)

Frontier (the method), frontier engineer, engagement, Charter, Showcase, the Loop, Ledger, Graduation, Extraction, and the bright-line test. That is ten; the budget is spent.

## 14. The diagram (to be drawn)

One loop between two poles. Left pole: **the Core** (the product). Right pole: **the Frontier** (the customer's environment). Rightward arrow: engineers and product capability deploy forward. Leftward arrow: outcomes proven, extractions flow back. Beneath the loop: the engagement timeline — Landing → First Proof → the Loop (circular) → Graduation → Extraction Review — with the exit date marked as a hard right edge. Whiteboardable in thirty seconds or it gets redrawn.
