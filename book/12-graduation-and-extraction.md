# 12. Graduation and Extraction

Palantir's field engineers spent the early 2010s building the same things over and over. Data ingestion for a bank, then data ingestion for an agency, then data ingestion for a manufacturer — each one bespoke, each one urgent, each one nearly identical underneath. By the accounts of people who were there, the repetition became its own argument: the ingestion work became a tool called Magritte, the analysis work became Contour, the interface work became Workshop, and the accumulated residue of a thousand deployments became Foundry — the product that came to drive more than half the company's revenue. A company that looked like a consultancy in 2016 reported software-company margins by 2023. The field work didn't shrink the product; the field work *became* the product, because someone kept ending engagements and harvesting what they left behind.

That harvest is not automatic. It is the most commonly skipped step in field engineering, because it happens exactly when everyone's attention has moved on: the customer is served, the next engagement is starting, and the shortcuts and last-mile code of the finished one are nobody's urgent problem. Frontier makes the harvest mechanical rather than aspirational, with two events at the engagement's end: Graduation, which transfers the system to its owners, and the Extraction Review, which transfers the learning to the product. An engagement is not finished when the software works. It is finished when both transfers have happened.

## Ending on time is the method

Graduation is the engagement ending on its Charter exit date with the graduation criteria met. Stated that way it sounds like an administrative detail. It is closer to the method's center of gravity, because everything else Frontier claims depends on engagements actually ending.

The exit date is what makes the time-box real rather than decorative — an engagement that slides past its date without a new Charter has become the Permanent Resident, and the field function has begun its quiet slide into professional services. The graduation criteria are what make the ending honest — an engagement that ends on time by abandoning the outcome hasn't graduated, it has escaped. And a track record of engagements that end when they said they would is the single most persuasive fact a field function can show a skeptical customer, a skeptical CFO, or a skeptical engineer deciding whether to join. The Graduation Rate metric exists because this number, more than any other, distinguishes a product company with a field function from a consultancy with a product.

Ending well is a practice, not a ceremony.

## Practice: the Handoff

*Evidence: proven — planned operational handover is among the best-attested practices in software delivery; the Ledger-anchored form here follows directly from documented field-engineering failure modes.*

**Context.** The exit date is weeks away. The system runs in production against real data. The people who will own it — customer engineers, customer operators, sometimes the product's own managed service — have watched Showcases but have not lived inside the system.

**Problem.** The engagement's knowledge is concentrated in the people who are about to leave. Whatever doesn't transfer becomes an incident, and the incident becomes the customer's lasting memory of the engagement.

**Forces.** Handoff work is invisible in the Scorecard, so it gets deferred in favor of one more improvement. The receiving team underestimates what it doesn't know, because the Showcases made everything look manageable. And the field team's honest map of the system's sharp edges — the Ledger — is mildly embarrassing to walk strangers through, which is a quiet pressure toward a sanitized handoff.

**Solution.** Treat Graduation as a phase, not a meeting. In the final weeks, invert the roles progressively: the receiving owners drive, the field team watches. They run the deployment, they respond to the week's anomalies, they present the final Showcase while the Frontier Engineer sits in the audience. The handoff package is short and honest: the Charter and final Scorecard, the runbook the receivers wrote themselves during inversion (a runbook written by the leaving team describes the leaving team's reflexes), and the Ledger, walked through entry by entry — every deliberate overfit, every known trigger, every "fine for this customer's lifetime" judgment, stated aloud to the people who will live with it. Graduation criteria are met when the receivers have operated the system for real, not when the field team has finished presenting.

**Consequences.** Inversion costs Loop capacity in the final weeks; the last improvements don't ship, and saying so at a Showcase takes nerve. That is the trade, and it is correct: a system handed off with its Ledger read aloud produces boring operations, and boring is what Graduation is for. The alternative — the polished handoff that hides the sharp edges — converts every Ledger omission into a future escalation with the company's name on it.

## Practice: the Extraction Review

*Evidence: proven in trajectory — the field-to-product loop is the documented engine of the founding case and the point on which every serious account of this discipline agrees; the two-week, disposition-per-entry form is the author's practice and labeled promising.*

**Context.** The engagement has graduated. The Ledger holds the engagement's honest record: overfits, platform gaps, last-mile code, generalization guesses. The field team's memory is at its freshest and its calendar is at its emptiest — a combination that lasts about two weeks.

**Problem.** Left to default, the Ledger becomes an archive nobody reads, and the engagement's learning evaporates. The product roadmap goes on being invented in planning meetings while its best evidence sits unexamined in a closed repo.

**Forces.** The next engagement has already started and feels more urgent than the finished one. The core team has its own roadmap and treats field requests as interruptions. Individual entries look too small to matter — a date parser here, an export format there — and the pattern across engagements is invisible from inside any single one.

**Solution.** Within two weeks of Graduation, the field team and the Core Counterpart sit down with the Ledger and give every entry a disposition: *generalize* — it enters the product backlog as a platform candidate, with the engagement's evidence attached; *defer* — plausibly general, not yet proven by repetition, parked where the next engagement's review will see it; *discard* — genuinely specific to this customer, closed with a sentence saying why. Decided, not defaulted: an entry without a disposition is a review that didn't happen. The Core Counterpart is not a note-taker here; they arrive owing decisions, and "generalize" from them means the item actually enters the product's process — that is their side of the bargain, and it is why the role must be a named person with backlog authority rather than a distribution list.

Once a quarter, the portfolio review does the same at height: all engagements' dispositions side by side, hunting the repetition no single review can see. Three deferrals of the same shape from three customers is not three small requests. It is the platform's next capability, discovered rather than invented — and, per the one-third rule, sometimes it is the finding that the product itself has a defect the field has been quietly absorbing.

**Consequences.** The review costs a half-day per engagement and obligates the core team to treat field evidence as roadmap input, which will generate real friction with roadmaps built by other means. The return is the flywheel: each extraction widens the platform, each widening shortens the next engagement's last mile, and the Extraction Rate metric — items generalized per quarter — reports whether the flywheel is turning or the field function is just consulting with better vocabulary. An extraction rate of zero for two consecutive quarters is not a scheduling problem. It is the Ghost Consultant anti-pattern showing up in the numbers, and it deserves the uncomfortable meeting it will cause.

## The flywheel, stated plainly

Graduation and Extraction are one mechanism seen from two sides. Graduation ends the engagement's obligation to the customer; Extraction ends its obligation to the product. Skip the first and you accumulate residencies. Skip the second and you accumulate nothing — every engagement starts from the same platform the last one did, the last mile never shortens, and the field function's costs stay linear in its revenue forever. That is the services trap, described mechanically.

Run both, and the arithmetic changes. The platform widens engagement by engagement. First Proof gets faster because more of it pre-exists. Engagements shorten, or the same engagement serves a bigger outcome. The field function needs fewer heroics per customer — which is what makes the rotation rule affordable — and the product grows in exactly the directions paying customers have already proven they need. Foundry is this arithmetic run for a decade.

Which points at a conclusion the book returns to in chapter 21: a field function that runs its extractions honestly is working itself out of each class of engagement it masters. That is not a threat to the function. It is the function's purpose, and the teams that understand this build the platform; the teams that don't become the scaffolding they were supposed to remove.
