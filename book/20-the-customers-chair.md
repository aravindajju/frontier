# 20. The Customer's Chair

Turn the book around. You run a claims operation, or a lending desk, or a hospital group's data function. A vendor you are betting on has proposed embedding engineers — in your environment, against your data, with AI agents in their toolchain — to get their platform producing an outcome you have promised your own leadership. Every prior chapter was written over your vendor's shoulder. This one is written over yours, because the method has a strong claim to make: a customer who knows what Frontier looks like gets a better engagement than one who merely hopes the vendor is competent. Most failed field engagements fail with the customer's unwitting help.

## What you are entitled to demand

Four things, before anyone gets a login. A vendor who resists any of them is telling you which anti-pattern they intend to commit.

**A Charter.** One page: the outcome in your business's units, the exit date, the graduation criteria, the named sponsor on your side. If the vendor's proposal is a statement of work with activities and hours, you are buying staff augmentation with better branding. The Charter is your protection precisely because it is theirs too — an outcome you both signed is the only defensible answer to the mid-engagement question "but could it also do this?"

**The exit date, in writing, at the start.** Counterintuitively, the exit date protects you more than the vendor. An embedded team without one becomes infrastructure: your people route work to it, your processes grow around it, and eighteen months later you discover you have acquired a dependency with a renewal invoice. You want what the engagement builds; you do not want the engagement itself to become load-bearing. Insist on the date, and insist that extension means a new charter — a decision your side gets to make deliberately, not a drift you discover in procurement.

**A Sponsor's seat — filled.** The method requires someone from your side, senior enough to unblock access and change workflow, present at the weekly Showcase. This is the engagement's real cost to you, and vendors under-state it out of politeness: the scarce input is not money but an executive hour a week plus decision authority. An engagement your side attends with delegates-of-delegates will produce software tuned to the opinions of whoever kept showing up.

**An agent boundary you actually understand.** The vendor's engineers will use AI agents, and what they build will likely include agents acting on your systems. You are entitled to a plain-language answer to four questions: what can the agents read, what can they write, what stays out of model context entirely, and where is the human gate. Do not accept either non-answer — the hand-wave ("our tooling is enterprise-grade") or the reflexive ban from your own security team. The hand-wave leaves the boundary to be discovered by an incident; the blanket ban quietly removes the leverage that made the six-week engagement plausible, after which you get the twenty-week version at the six-week price point's promises.

## What good looks like, on a calendar

You do not need to audit code to know whether the engagement is healthy. The method gives you two checkpoints readable from a chair.

**Week two: something real runs.** Not a deck describing what will run — working software, against your production data, however narrow. The two-week proof rule is your rule as much as theirs, and its failure mode is usually on your side of the table: access not granted, data not reachable, approvals in a queue. This is worth internalizing — in an agent-era engagement, when week two arrives empty, the constraint is almost never engineering speed. It is your organization's speed at letting the engineers touch reality. Which means it is fixable by you, this week, and by nobody else.

**Mid-engagement: the Scorecard has a trend, and the trend has witnesses.** Halfway through the box — week three of a six-week engagement, week six of a twelve — you should be looking at a number your business recognizes, moving, shown weekly to your sponsor. For an AI system, that number should be an eval score over your real cases, not a highlight reel of good transcripts. A vendor showing you their best demo at the midpoint is showing you a Demo Treadmill from the inside. The question that cuts through it: "what is the score on all the cases, and what was it three weeks ago?"

## The engagement's end is a beginning you own

Graduation criteria deserve more of your attention than anything else in the Charter, because they define the state of your world after the vendor's engineers leave: who on your team operates the system, what they have been taught, what runs when the person who built it is gone. Push for criteria written as capabilities of *your* organization ("our analysts triage exceptions without vendor help") rather than properties of the software ("the system is deployed"). The second is true the day the engagement ends; the first is the thing you were actually buying.

And expect — welcome — the extraction conversation. The vendor will generalize parts of what was built for you into their platform; that is their business model, and it is also your best long-term outcome, because capability that graduates into the product gets maintained by the product, forever, instead of by a services memory of your account. The negotiation point worth having is not whether extraction happens but what your data's role in it is — which is the agent boundary conversation again, at contract scale.

## The customer-side anti-patterns

Vendors fail engagements; so do hosts. Three patterns account for most of the customer-side failures, and all three feel, from the inside, like prudence.

**The access stall.** Security review for the data warehouse: three weeks. VPN provisioning: a ticket queue. The sandbox "that's almost the same as production": offered in week one, still the only environment in week five. No single delay is unreasonable; their sum converts a chartered engagement into an expensive wait, and the two-week proof rule fails on your side of the line. The tell is that your own people describe the vendor's engineers as "ramping up" — embedded engineers do not ramp; they are either touching reality or they are stalled. The fix is a sponsor who treats access requests as their own deliverables, cleared before Landing week where possible.

**The requirements relapse.** Somewhere around week three, someone on your side — usually from the function that ran your last big software program — proposes governance: a requirements document, a steering committee, sign-off stages. The instinct is protective and the effect is fatal: the engagement's entire mechanism is the weekly loop of working software and correction, and each layer of stage-gating trades one loop turn for one meeting. You already have the governance instrument; it is the Charter plus the Showcase. If the outcome is wrong, re-charter. Do not wrap the loop in the process the loop exists to replace.

**The shadow backlog.** The embedded engineers are capable, present, and responsive — and your teams notice. Requests begin arriving sideways: a dashboard here, an export there, a small automation for a neighboring group. Each is small; the sum is an unchartered second engagement, billed against the first one's calendar, and it is the most common way good engagements miss their graduation criteria. The method's answer is feedback triage in the open — sideways requests get logged, named, and routed to the sponsor as candidates for a future charter. Your part is simpler: when the answer to your team's request is "that goes on the list for the next charter," back it. That answer is the engagement working, not the vendor being difficult.

A customer who grants access at Landing speed, seats a real sponsor, protects the loop from relapse, and holds the vendor to the Scorecard is not being a generous host. They are collecting, in full, on what the engagement model promises — and they will be quoted, by name, in the vendor's next ten pitches. There are worse positions from which to negotiate the renewal.
