# 10. The Loop

> [SCENE SLOT — Aravind: a showcase that changed an engagement's direction. Candidate prompts from your engagements: the health-insurer showcase where the outcome numbers surprised the room, or the moment at the financing org when feedback killed a week of work and that turned out to be the loop working. Needed: which week of the engagement, who was in the room, what was on screen, what was said, what shipped differently the next week. Two to four paragraphs; I will edit for rhythm.]

Every engagement has a heartbeat, and you can hear it from outside the room. In a healthy engagement, working software gets shown to the people who own the outcome, they react, and a changed version ships days later. In a sick one, the software is always almost ready, the meetings are about status, and the reactions are to documents. The method's job is to make the first rhythm the default and the second one visible as a failure.

Frontier calls this rhythm the Loop: show, discuss, ship again. It occupies most of an engagement's calendar — everything between First Proof and Graduation — and it is where the engagement's value gets built. Landing earns you context and First Proof earns you trust, but the Loop is where the outcome actually moves.

## Why a loop, and not a plan

The argument for iteration is old and won. What matters here is why field engineering demands a *faster* loop than product engineering usually runs.

A product team iterating on its own product can be wrong for a sprint and correct cheaply. A field team is spending two scarcer currencies: the time-box and the customer's attention. A Frontier engagement runs six to twelve weeks. At a weekly cadence you get perhaps eight turns of the wheel; every showcase that doesn't produce a course correction or a confirmation has burned a meaningful fraction of the engagement. And customer attention decays faster than schedule: a sponsor who sits through two showcases of stalled progress stops coming, and an engagement without its sponsor in the room is drifting toward the Demo Treadmill, whatever the burndown says.

There is a second reason, specific to this trade. The Loop is the engagement's context pump. Each turn extracts things no requirements process would have surfaced — the report nobody actually reads, the field in the claims data that means the opposite of its name, the approval step that exists because of an incident five years ago. This is the context-scarcity argument of chapter 4 made operational: you don't gather context and then build; you build in order to gather context. Overfits and generalization candidates surface on the same rhythm, which is why the Ledger (chapter 11) fills up during the Loop, not at the end.

The cadence is weekly by default. Daily loops fit short engagements; biweekly is a concession you make only when customer availability forces it, and it should be recorded in the Charter as a known risk. Slower than biweekly is not a loop. It is a project with reviews.

## Practice: the Showcase

*Evidence: proven — the weekly working-session-on-real-data pattern recurs across every credible field-engineering account, from Palantir deployments to current AI labs, and it is the author's own operating rhythm.*

**Context.** You are mid-engagement. The Charter names an outcome; software that pursues it is running against real data.

**Problem.** The people who own the outcome and the people building toward it drift apart within days. Left alone, engineers optimize for what is buildable and customers re-litigate what was promised. Both drifts are silent.

**Forces.** Status meetings feel cheaper than demos and are worthless; polishing before showing feels respectful and wastes turns of the wheel; skipping the sponsor feels efficient and removes the one person who can redirect the engagement with authority.

**Solution.** Once a week, show the outcome's current state — working software, real data, the Scorecard on screen — to the Customer Sponsor and whoever they bring. Time-box it to an hour. The agenda has three items and the first one is a demonstration: what changed since last week, shown running. Then the Scorecard: where the outcome number stands. Then discussion: what this week's version got wrong, what next week's version will do about it. The Frontier Engineer drives the demo; the Field Strategist reads the room.

Two rules are non-negotiable. Working software only — a showcase run on slides is a planning meeting wearing a costume, and one slide-only showcase licenses the next. And the Sponsor is present — a showcase without the outcome's owner produces feedback without authority, which is worse than none, because it feels like progress.

**Consequences.** You will show unfinished, sometimes embarrassing work; that is the cost of an honest loop, and it is also how trust compounds — a customer who has watched the system improve weekly does not need convincing at Graduation. The showcase also generates more feedback than you can absorb, which is the next practice's problem.

## Practice: Scorecard-keeping

*Evidence: proven in principle (it is SRE's SLO discipline and every serious delivery metric tradition, applied to an engagement); promising in its specific Frontier form.*

**Context.** The Charter names a measurable outcome. Weeks of showcases will generate motion in every direction.

**Problem.** Without a number in the room, showcases drift toward demos of what was easiest to build, and "is this working?" gets answered by the most senior voice rather than by evidence.

**Forces.** Real outcome measures move slowly and noisily; proxy measures are gameable; measuring nothing feels honest ("it's too early") and guarantees the question is settled politically at Graduation.

**Solution.** Keep one page: the outcome as the Charter defines it, the current measured state, and the trend. For the AI and agentic systems most engagements build, the measured state is an eval score — a probabilistic system's "working" is a distribution over the customer's real cases, and a showcase demo is one draw from it (chapter 13 covers building the suite). Show the page at every showcase, including the weeks it is flat or falling. When the true outcome moves too slowly to steer by, agree on its leading proxy with the Sponsor — in writing, on the Scorecard itself, so nobody discovers a substitution at Graduation. The Scorecard is the engagement's speedometer; the Charter is its destination. One page, no more.

**Consequences.** Flat weeks become visible and uncomfortable, which is the point: discomfort at week four is recoverable, and the same discomfort discovered at Graduation is not. Expect one hard conversation per engagement that the Scorecard forces early. That conversation is the practice working.

## Practice: Feedback Triage

*Evidence: promising — the mechanism is common sense under a time-box, and the specific charter-anchored form here is the author's practice; field reports will move the label.*

**Context.** A good showcase produces more asks than a week can hold: bug reports, scope extensions, adjacent wishes, and the occasional idea that changes the engagement.

**Problem.** Saying yes to everything dissolves the outcome into a services backlog. Saying no by instinct spends trust and, done badly, teaches the room to stop giving feedback.

**Forces.** The customer's enthusiasm is an asset you don't want to punish; the time-box is fixed; some "scope creep" is actually the engagement discovering its real outcome; the engineer's own preferences masquerade as prioritization.

**Solution.** Triage every item against the Charter, in the open, before the next showcase. Three dispositions. *This outcome, this engagement*: it ships into the Loop. *Real, but not this outcome*: it goes to the Sponsor as evidence for a future charter — named, written, and explicitly not promised. *A sign the Charter is wrong*: rare, and the most valuable item a showcase can produce; it triggers a re-chartering conversation (chapter 7), not a quiet pivot. The triage is visible to the customer — the point is not gatekeeping but showing that feedback goes somewhere governed.

**Consequences.** You will decline good ideas, in writing, and some sponsors will push. The Charter is what lets you decline without the refusal being personal. If triage keeps routing major items to "the Charter is wrong," stop triaging and re-charter; the Loop cannot fix a mis-aimed engagement, it can only reveal one faster.

## The loop as the method's clock

Loop Time — the median days from showcase feedback to the shipped next version — is the second of Frontier's four numbers, and it is the one the field team controls most directly. Time to First Proof is partly hostage to access; Graduation Rate settles slowly; Extraction Rate belongs half to the core team. Loop Time is yours. A team whose Loop Time is under a week is steering; a team whose Loop Time stretches past two is being steered — by integration friction, by approval queues, by its own overbuilding — and the number says so before anyone admits it in a status report.

The Loop also disciplines the other practices around it. It fills the Ledger on a weekly rhythm instead of an end-of-engagement archaeology dig. It gives the Field-Core Sync something real to carry back to the product each week. And it makes Graduation boring, in the best sense: by the final showcase, the customer has watched the system converge for weeks, and handoff is a formality rather than a reveal.

That is the design intent of the whole method in miniature. Frontier does not ask anyone to believe the engagement is going well. It arranges for the evidence to show up weekly, in a room with the one person entitled to act on it.
