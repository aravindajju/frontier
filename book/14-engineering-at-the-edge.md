# 14. Engineering at the Edge

Week six at Meridian National Bank, and the covenant monitor was working. It had caught all sixty-one of the amended loans Janet's spreadsheet tracked, plus four the spreadsheet had missed. The Scorecard was ahead of the Charter. Advik demoed the week's version to Marcus, the operations lead whose team would own the system after November 7th, and Marcus asked none of the questions Advik had prepared for. He asked one about the calendar.

"Walk me through November 8th," he said. "The overnight feed breaks again — like last Tuesday. Who knows, and how?"

Last Tuesday was a fair reference. The feed had died at 6:10 in the morning, and Advik had it fixed by 9:40 — because he was awake, in the right timezone, watching a dashboard only he had bookmarked, holding credentials only he had. The fix had felt like competence. Marcus was pointing out, without unkindness, that it was also a diagnosis: the system currently ran on the fact of Advik. On November 8th there would be no Advik. The room was quiet for a moment, and then the last two weeks of the engagement got reorganized. The monitor moved off the service account Advik had borrowed and onto the bank's own deployment pipeline. Its alerts stopped going to a dashboard and started going to the queue Marcus's team already watched at 6 a.m. Its secrets moved from a config file into the bank's vault. None of that added a feature. All of it was the difference between software that works and software the customer operates.

Production-grade is what is still true on November 8th.

## Production-grade, defined

The FDE test's first criterion says production code in the customer's environment, against real data. Chapters so far have leaned on the phrase; this one defines it. A system a Frontier engagement ships is production-grade when all six of these are true:

1. **It runs on the customer's infrastructure, against their real data.** Not on the engineer's laptop, not on the vendor's cloud with a data extract.
2. **It deploys through a repeatable path.** Anyone on the receiving team can ship a change by following the path; no step lives only in the engineer's shell history.
3. **It is monitored by the people who will operate it.** The customer's team learns of a failure before the vendor's engineer does. If the only alarm rings on the engineer's phone, the system is not monitored; the engineer is.
4. **It sits on the security floor** — the practice below. Secrets in the customer's secret store, least-privilege access, data boundaries matching the Charter's agent boundary, dependencies pinned and scanned.
5. **It survives the handoff test.** The receiving team can describe, change, and restart it (chapter 12 covers the Handoff itself).
6. **It passes the comprehension line.** The engineer can explain every part of it — including the agent-written parts — at the level the receiver needs (chapter 13).

Each item is checkable by someone other than the engineer, which is the point. "Production-grade" as a feeling is how the Demo Treadmill starts; production-grade as a checklist is how Graduation Rate stays honest. A team that ships against this list can put the system in front of the receiving team in week three and take questions like Marcus's without a quiet room.

The list is deliberately short of ambition. It does not ask for the vendor's internal engineering standards, five-nines availability, or an architecture review board. The edge is a six-to-twelve-week box producing a system one customer will run; the bar is operability by that customer, not perfection by anyone.

## Testing at the edge

The time-box does not excuse a Frontier engagement from testing. It excuses it from ritual.

The probabilistic layer — the model calls, the agent behavior, the summaries and classifications — is carried by the eval suite, built from the customer's real cases and shown at every Showcase (chapter 13 owns this). Evals are the edge's substitute for the confidence a deterministic test suite gives a product team, and they hand off with the system as its regression harness.

The deterministic layer — the glue, the integrations, the data contracts — gets thin, targeted tests. Thin means: a test that the fax-channel parser still handles the four date formats the Ledger says exist; a test that the eligibility join returns one row per member; a contract test on every interface where the customer's systems meet yours, because those interfaces are where enterprise environments drift. Nobody at the edge needs a mocked unit test for a function the platform already tests in the core.

The selection rule is the Ledger. Every entry records a shortcut and the condition that turns it from asset to incident; each of those conditions is a test waiting to be written. Test where the recorded risk lives. A test suite derived from the Ledger is short, specific to this customer, and meaningful at handoff — the receiving team reads it as a map of the system's known edges, which is exactly what a new operator wants.

## Practice: the Deploy Path

*Evidence: proven in substance — it is continuous delivery, among the best-attested practices in software engineering; the week-one edge form is the author's practice and labeled promising.*

**Context.** First Proof is approaching. The fastest way to show working software in week two is to run it from the engineer's machine against the customer's systems.

**Problem.** The fastest way becomes the permanent way. A system that reaches week five deployed by hand from one laptop has built the engagement's largest unlogged overfit: the deploy process itself. Graduation week then contains a scramble that no Charter scheduled.

**Forces.** Customer pipeline tooling is slow to get access to, and week one is already crowded with access requests. A manual deploy feels harmless while the engineer is present daily. Agent-assisted building makes code cheap and frequent, which multiplies deploys, which multiplies what the manual path costs. And the Charter's agent boundary requires that agent-written code pass review on its way to production — a gate that needs a pipeline to live in.

**Solution.** Stand up the deploy path in week one, as part of Landing's access work, and make First Proof travel it. Minimal is fine: a repository the customer can see, a pipeline in their tooling that builds, runs the thin tests, holds for the Charter's review gate, and ships to their environment. The pipeline is itself part of the proof — it demonstrates that the system lives in the customer's world, not the engineer's. From then on, everything ships through it, agent-written code included; the review gate the Charter promised is a pipeline step, not a promise.

**Consequences.** Week one gets one more access battle, and the Access Escalation (chapter 9) applies to pipeline credentials as much as to data. The return is that deployment never becomes news: not at week five when the feed breaks, not at Graduation, not on November 8th. If the customer's tooling genuinely cannot be reached in week one, the fallback is a scripted path in the repository with a Ledger entry naming manual deployment as an overfit with an expiry — visible debt, not habit.

## Practice: the Security Floor

*Evidence: proven in substance — each element is baseline security engineering; the floor as a chartered, auditable set tied to the agent boundary is promising.*

**Context.** A Frontier engagement holds more privilege than almost any other outsider: production data access, deploy rights, agents running against customer systems.

**Problem.** Edge speed and security shortcuts attract each other. A credential in a config file, a service account with broad read, an agent context window fed whatever was convenient — each is invisible until it is an incident, and a security incident at a customer ends more than the engagement.

**Forces.** The customer's own security process can be slow enough to threaten the two-week proof rule, which tempts engineers to route around it — the one routing-around that is never worth it. Agents raise the stakes: what enters model context is governed by the Charter's agent boundary, and a floor that ignores it makes the boundary fiction.

**Solution.** Four commitments, from Landing onward, checkable at any Showcase. Secrets live in the customer's secret store from the first deploy — never in code, config, or chat. Access is least-privilege: the engagement's accounts can touch what the Charter scopes and nothing else, and the engineer asks for narrow grants even when broad ones are offered. Data boundaries follow the agent boundary clause-for-clause: what may not enter model context does not, and the audit trail proves it. Dependencies are pinned, scanned, and few — an edge system with a short dependency list is one the receiving team can patch.

**Consequences.** The floor costs days across an engagement and buys the only insurance that matters. In regulated domains — Cascade's health data, Meridian's banking records — the floor is not tailorable downward; expect it to be inspected, and treat the customer's security review as a receiving team for evidence the same way Marcus's operators were a receiving team for the runbook. Tailoring upward (formal threat modeling, customer-mandated controls) goes in the Charter, where it is scheduled work instead of a surprise.

## Architecture at the edge

Edge architecture is mostly the discipline of not doing it. Chapter 9's rule stands: configure what exists, glue where interfaces almost meet, construct only where the platform inventory shows nothing. What remains genuinely architectural at the edge is a handful of decisions per engagement — where state lives, which system is the source of truth for a contested field, what happens when the customer's queue and the platform's retry logic disagree.

Those decisions get Ledger entries in decision-record form: the choice, the constraint that forced it, what would reverse it. The Ledger already carries the engagement's overfits; carrying its architecture keeps the whole reasoning of the system in one place the receiving team and the Extraction Review both read.

One class of decision leaves the edge entirely. When a choice would bind the platform — a schema the core would have to honor, an interface other engagements would inherit — it goes to the Core Counterpart at the Field-Core Sync before it is built, not after. The field decides how to serve this customer; it does not get to quietly decide what the product is. That line is the architectural version of the extraction rule, and crossing it silently is how a platform accumulates load-bearing accidents.

Engineering at the edge, then, is ordinary engineering with its priorities re-sorted by the calendar. The craft is not lower than the core's; it is aimed differently — at the six checkable properties that keep a system alive in someone else's hands. Marcus's question is the whole chapter in one sentence, and every engagement should hear it long before week six: walk me through the day after you leave.
