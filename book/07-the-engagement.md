# 7. The Engagement

The last Showcase at Meridian National Bank ran twenty minutes over, and none of the overrun was about the system. On screen: covenant alerts on the middle-market book, live in production for three weeks, the last two weekly cycles run by the bank's own operations team without the field team touching anything. Ruth Okafor, the lending-operations director who had signed the Charter as Sponsor eight weeks earlier, walked the graduation criteria aloud herself — coverage live, operations self-sufficient, runbook delivered, Ledger walked — checking each against the page like a pilot running a list she had flown before.

The overrun came from her boss. Dale Whitmore, the SVP, had watched the demo with the particular stillness of an executive doing arithmetic, and when it ended he said what SVPs say: "Stay eight more weeks. Do the large-corporate book while you're warm." It was a compliment, a budget line, and a trap in one sentence — the residency offering itself at the exact moment the engagement looked best.

What made the ending clean was that nobody had to be brave. Ruth pointed at the exit date on the Charter — November 7th, fixed before anyone knew whether the engagement would deserve extending — and said the large-corporate book deserved its own page: its own outcome, its own date, scoped against what eight weeks in lending operations had actually taught them. That conversation happened the following Tuesday, properly: a new draft charter, a different outcome statement, a start three weeks out after the extraction review — and, per the rotation rule, probably a different engineer. Advik packed out on the date the Charter had named in week one. The system stayed. That is what an ending is for.

Ask a consultant when their project ends and they will tell you about the contract. Ask a product engineer when their work ends and they will look at you strangely — products don't end. The forward deployed engineer lives between those two answers, and Frontier resolves the ambiguity with a device borrowed from neither trade: the engagement, a unit of work with a written outcome, a written exit date, and a one-page constitution that both sides sign.

Everything else in the method hangs off this unit. Landing is the engagement's first week; First Proof is its ignition; the Loop is its heartbeat; Graduation is its planned death. The four metrics count engagements. The rules govern them. If Frontier has a load-bearing wall, this is it: work at the customer happens inside a time-box, and the time-box is real.

## Why exits beat residencies

The obvious model for field engineering is residency: put engineers at the customer for as long as the customer pays. Palantir ran residencies for years, and the model built the company — along with an attrition problem, a margin problem, and a decade of analysts asking whether the business was software or services. The residency's defect is not that it fails. It is that it succeeds slowly and silently at the wrong thing: it optimizes for the account, not the product, and nobody inside one can say when it should end, because nothing about it is shaped like an ending.

The time-box fixes this with a blunt instrument. Six to twelve weeks, in writing, from the start. The number does three kinds of work.

It forces selection. A team with eight weeks cannot boil the ocean, so the Charter must name one outcome the customer would recognize as theirs — which is the conversation most engagements otherwise never have.

It changes the physics of urgency. Chapter 10 argued that the Loop runs fast because the time-box makes every showcase expensive; the same pressure runs through everything. Access requests get escalated in week one instead of accepted as weather. The overfit decision (chapter 11) has a horizon to reason against. Even the customer moves differently: a sponsor who knows the team leaves on a date behaves like a person spending something finite, because they are.

And it protects the product's claim on the engineer. The extraction rule and the rotation rule are both written against engagement boundaries. A residency has no boundaries, so those rules would have nothing to grip. This is the quiet reason the time-box is invariant while almost everything else tailors: remove it and the anti-patterns stop being detectable. The Permanent Resident is not a moral failure; it is what any engagement becomes when nothing structural insists otherwise. An engagement without an exit date is a services contract discovering itself.

## The Charter

The Charter is one page, signed at the end of Landing — after the Data Walk and the Terrain Map have put reality into it, never before. Chapter 8 covers that sequence. This chapter covers what the page says. Five elements, none optional:

**The outcome, measurably stated.** A business result the customer would claim as theirs — claims rework cut by a third, loan-decision turnaround under a day — not a deliverables list. For the AI systems most engagements build, "measurably" means the eval suite's terms: the outcome statement and the Scorecard's definition are the same sentence. If the outcome cannot be stated measurably, that is not a formatting problem; it is the engagement telling you it isn't ready to start.

**The exit date.** A date, not a duration. "Twelve weeks" drifts with every slipped start; October 17th does not.

**The graduation criteria.** What must be true on the exit date for the handoff to happen — who operates the system, what the eval score reads, which of the Terrain Map's gatekeepers have signed off. Chapter 12 covers Graduation; the Charter is where its terms get fixed, while everyone is still friends.

**The Sponsor's name.** A person, not an office. The one who owns the outcome on the customer's side, attends Showcases, and can unblock access. No sponsor, no engagement — and a customer who cannot produce one in Landing week is answering the fit-gate question early.

**The agent boundary.** What AI tooling may touch in the customer's environment and under whose review — negotiated at Landing with every other access question, as chapter 8 argued, and written here so that neither side's security team discovers the arrangement later.

One page is a constraint, not an estimate. Charters grow appendices the way projects grow steering committees, and for the same reason: to diffuse accountability. Every element of the Charter is a name, a date, or a number precisely so that no one can be confused about whether it happened.

## Practice: Chartering

*Evidence: proven in substance — the Charter compresses devices with long track records (SLO-style measurable targets, project charters, Palantir's outcome-owned deployments) into one page; the five-element form is the author's practice, labeled promising.*

**Context.** Landing week is ending. The Data Walk has shown what the data supports; the Terrain Map has shown who must say yes. Both sides want to start building.

**Problem.** Without a written constitution, the engagement inherits one by default — the sales deck, the customer's ticket queue, or whichever executive spoke last. All three are residency-shaped.

**Forces.** The customer wants scope kept vague, which feels like flexibility and is actually option value against you. The account team wants the exit date kept soft, because hard dates create renewal conversations. And the engineer wants to skip the negotiation and build — the trade's characteristic vice, since building is the comfortable room and chartering is the uncomfortable one.

**Solution.** Write the page yourself — the Frontier Engineer and Field Strategist together — from Landing's findings, not from the pre-sales material. Walk the Sponsor through it element by element, and treat each pushback as information: resistance to a measurable outcome means the briefing oversold something; resistance to an exit date means someone is shopping for a residency; resistance to naming a sponsor means the organization hasn't decided it wants the outcome. You can sign a Charter amended by those conversations. You cannot safely start an engagement that avoided them. Signature is ceremony and should be treated as one — dated, witnessed by the kickoff meeting, first slide of the first Showcase.

**Consequences.** Chartering costs a real negotiation in week one and occasionally reveals that there is no engagement to have — which is the practice succeeding, at the cheapest possible moment. The signed page then does daily work: feedback triage runs against it, the Scorecard restates it weekly, and Graduation is its final reading. The failure mode is the Charter as sales artifact — written before Landing, signed by nobody who attends Showcases, remembered at week ten. A Charter nobody references is not governing anything; it is decoration with signatures.

## Practice: Re-chartering

*Evidence: promising — the mechanism is a deliberate transplant of change-control discipline into field work; the author's practice and the residency failure it prevents are both well attested, the specific form less so.*

**Context.** Mid-engagement, something real has changed. The Loop surfaced a truer outcome than the Charter's. The customer's priorities moved. Or the exit date is approaching and the work demonstrably isn't done.

**Problem.** The engagement's constitution no longer matches reality, and the cheap responses — quiet scope drift, a hallway agreement to "run a few more weeks" — each dissolve the time-box while appearing to honor it.

**Forces.** Everyone prefers the hallway version: the sponsor avoids re-opening a negotiation, the account team avoids risking the relationship, the engineer avoids admitting the original outcome was wrong. The Permanent Resident anti-pattern is not built by decisions; it is built by the absence of them, one accommodating week at a time.

**Solution.** Changes to the Charter go through the Charter. A re-charter is a new page — new outcome or new date, new signature, announced at a Showcase — and it is deliberately more expensive than a hallway agreement, because the expense is the point: it forces the question "would we start this engagement today?" to be asked out loud. Three legitimate triggers: the Loop revealed the chartered outcome was wrong (the most valuable trigger, as chapter 10 said); an external event moved the ground; or a rule fired — the two-week proof rule's renegotiation clause lands here. Serial re-chartering is its own signal: the second re-charter of an engagement should be approved by whoever owns the portfolio, not the engagement, because at that point the engagement is no longer a reliable narrator of its own story.

**Consequences.** Re-chartering keeps the time-box honest at the cost of making mid-course changes visible and slightly bureaucratic — a cost paid precisely by the engagements trying to drift. Expect roughly one legitimate re-charter per two or three engagements; zero forever means charters are being written too loosely to need amendment, and one per engagement means Landing is producing fiction.

## The unit of everything

The engagement is Frontier's unit of account in every sense. It is what the four numbers count: proofs per engagement, loop turns per engagement, graduations on time, extractions per quarter across engagements. It is the unit the portfolio reasons about — the one-third rule reads across engagements, the flywheel is measured engagement over engagement, and the rotation rule counts them like a pilot counts flight hours. And it is the unit of the engineer's career in the field: a tour with a beginning, an outcome, and an end, after which the method itself insists you go home to the core for a while.

That insistence is the deepest difference between an engagement and a residency. A residency asks how long the customer will pay. An engagement asks what will be true on October 17th — and then, unlike nearly everything else in enterprise software, it ends.
