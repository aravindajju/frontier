# 8. Landing

Advik and Adit landed at Cascade Health on a Monday with a briefing deck that knew exactly what the problem was. Claims rework, it said, was an adjudication problem: the rules engine was old, the edits too strict, the fix was smarter exception handling. The deck had charts. It had been assembled three floors above the claims operation, and it was wrong in the specific way week one exists to discover.

They spent the first two days acquiring things instead of opinions — warehouse credentials on day one (Elena Ruiz, the VP of Claims Operations sponsoring the engagement, turned the request around in hours, which told them something about her), read access to the intake systems, the names of the people who actually run adjudication. Then the Data Walk: three days inside the claims tables, an agent doing the archaeology — profiling intake channels, joining rework events back to their source claims — while the two of them read pipeline code and asked the warehouse the questions the deck hadn't thought to ask.

The picture that emerged did not match the briefing. Rework wasn't distributed across adjudication; it was concentrated at the front door. Cascade takes claims through four channels — EDI, the provider portal, paper, and fax — and the fax channel, digitized by an OCR vendor and keyed into intake, accounted for roughly two-thirds of all first-pass rework: misread member IDs, mangled provider numbers, transposed dates of service, each surfacing downstream as an adjudication "error" that was actually an intake defect wearing a disguise. The rules the briefing wanted loosened were, mostly, correctly rejecting corrupted claims.

They brought findings, not conclusions, to the intake operations team on Thursday and let the people who own the systems correct the details. By Friday the Charter said what the data said, not what the deck said: cut first-pass rework on the fax channel by a third in six weeks. Elena signed it. The engagement that would have spent six weeks tuning a rules engine spent them at the front door instead.

The first week of an engagement decides its shape. Not because the plan you write in week one survives — it won't — but because week one is when you choose what to believe: the deck the account team showed you, or the customer's actual systems. Frontier calls this phase Landing, and it has one deliverable — a signed Charter — and one discipline: access before opinions.

## Access before opinions

The temptation in week one is to be impressive. There are introductions, a kickoff, senior people in the room, and a strong pull to present a point of view. Resist most of it. Every opinion you voice before you've seen real data is a check written against an account you haven't opened, and enterprise environments are where confident briefings go to be contradicted.

The counter-move is to spend week one acquiring things instead of asserting things: credentials, network access, a seat in the data warehouse, read access to the systems the outcome runs through, the names of the people who actually operate them. Access requests are also the engagement's first diagnostic. A customer who can grant a data-warehouse login in two days has told you something about how Graduation will go; a customer where the request enters a six-week ticket queue has told you something more important, and the Charter should reflect it.

This is also when the agent boundary gets negotiated — what your AI tooling may touch, what stays out of model context, what needs a human gate. Do it now, in the same conversation as every other access question. An agent boundary negotiated at Landing is a paragraph in the Charter; the same boundary negotiated after an incident is a crisis meeting with the security team, and the engagement rarely recovers its footing.

## Practice: the Data Walk

*Evidence: proven — every credible field-engineering account starts here, and it is the author's own first move: analyze and discover the data before discussing the requirements.*

**Context.** You have read access. The Charter is not yet signed. Everyone above the working level has already told you what the problem is.

**Problem.** What people say they need and what their data shows they need are different documents, and you have so far only read the first one.

**Forces.** The briefing feels authoritative — it came from people senior enough to sponsor the engagement. Reading raw data feels slow when the calendar says you have six weeks. And the data will be worse than anyone admitted: undocumented fields, dead columns, three tables with the same name and different truths. That mess is not an obstacle to the discovery; it is the discovery.

**Solution.** Before the Charter is signed, walk the data the outcome depends on — personally, at the table-and-field level, queries not dashboards. You are looking for three things: what actually exists (versus what the architecture diagram claims), what its real quality is (nulls, drift, the field whose name means the opposite of its contents), and what it implies about the outcome (the briefing says reduce claim rework; the data shows two-thirds of rework comes from one intake channel — that reframing is worth more than any requirements workshop). Bring an agent: turning it loose on schema archaeology — profiling tables, mapping joins, flagging anomalies — compresses days of this into hours. Bring the findings, not conclusions, to the working-level people who own the systems, and let them correct you. Their corrections are the highest-density context of the whole engagement.

**Consequences.** The Data Walk costs most of a week and produces nothing demonstrable, which takes nerve to defend. Its yield is that the Charter gets written against reality: an outcome the data can actually support, and a first sighting of where the platform stops and last-mile work begins. Engagements that skip it write fiction into the Charter and discover it at week four, when it is expensive.

## Practice: the Terrain Map

*Evidence: proven in substance — it is the Deployment Strategist's documented craft at Palantir; the one-page form here is promising.*

**Context.** Same week, other half of the job. The outcome runs through people, and nobody has briefed you honestly about the people.

**Problem.** Engagements fail on adoption more often than on engineering, and the causes are visible in week one to anyone who looks: the manager whose team's workflow you are about to change, the analyst whose spreadsheet you are about to replace, the IT owner whose approval sits on every path to production.

**Forces.** Org charts describe authority, not influence. Asking directly ("who could block this?") makes the blocking start early. And engineers systematically under-invest here because it doesn't feel like work — which is exactly why Frontier makes it a named accountability of the Field Strategist rather than a virtue everyone is assumed to have.

**Solution.** Keep a one-page map, owned by the Field Strategist, drawn during Landing and corrected for the rest of the engagement. Four lists: who wins if the outcome lands, who loses or thinks they lose, whose approval gates the path to production, and who operates the systems daily. For each name: what they need to see, and at which Showcase they need to see it. The map is private working material — it never goes in a deck — but its conclusions go straight into the Charter's graduation criteria and into who gets invited to Showcases.

**Consequences.** Done well, the map converts likely blockers into early reviewers — the analyst whose spreadsheet you might replace becomes the person who tells you what the spreadsheet actually does, which no schema will. Done performatively, it is astrology with a org chart. The test is whether the map changed at least one Showcase invitation or one graduation criterion; if it didn't, it wasn't a map, it was a drawing.

## Landing ends with a signature

Landing ends when the Charter is signed: the outcome, measurably stated; the exit date; the graduation criteria; the Sponsor's name; the agent boundary. One page. Chapter 7 covers the Charter in full — what matters here is the sequence. The Charter is signed after the Data Walk and the Terrain Map, not before, because a charter written before contact with reality is the account team's deck with a signature line.

A week spent this way looks quiet from the outside. It is the highest-leverage week of the engagement: everything after it — First Proof in the following fortnight, the Loop's weekly rhythm, Graduation on the named date — moves at the speed that Landing's access, data understanding, and terrain reading permit. Teams that land badly spend the middle of the engagement doing Landing's work at Loop prices.
