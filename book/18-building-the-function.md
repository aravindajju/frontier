# 18. Building the Function

New forward deployed engineers at Palantir were handed a book to read. Not a systems text and not a sales manual — *Impro*, Keith Johnstone's book on improvisational theater, chosen for its chapters on status: how people signal it, read it, and trade it in a room. Nabeel Qureshi, who spent eight years in the role, describes the choice as entirely practical. The engineers were about to sit across from intelligence analysts, hospital administrators, and factory managers, and the difference between an engagement that lands and one that stalls is often whether the engineer can read who actually holds the room. The company had learned that you can teach a strong engineer to read a room, but you have to decide to teach it — it does not come with the computer science degree.

That is the theme of this chapter. A field function is not a group of product engineers who travel. It is a deliberately built team with its own hiring profile, its own compensation logic, its own reporting tensions, and its own retention problem. Companies that treat it as "engineering, but remote and stressful" build the Burned Hero anti-pattern at organizational scale.

## The profile

The FDE test sets the floor: a Frontier Engineer writes production code in the customer's environment, so the technical bar is the same bar core product engineers pass. Palantir was explicit about this — Deltas interviewed against the same standard as Devs — and the reason is structural, not egalitarian. A field engineer who cannot pass the core bar cannot do the job's second half: their extractions arrive at the platform team as requests from a colleague or as tickets from a vendor, and only one of those gets read seriously.

On top of the floor sit three layers.

**Generalism under bad conditions.** The working environment is someone else's: their VPN, their half-documented warehouse, their approval queues. The profile is the scrappy startup CTO — SQL and shell fluency, data wrangling, integration work, infrastructure enough to deploy without a platform team in the next room. Specialists who need their own toolchain around them struggle at the edge, however strong they are inside it.

**The AI-native layer.** Frontier teams build mostly AI and agentic systems, with agents in the toolchain. The bar therefore includes agentic system design, eval construction, and context engineering — not as specialties, as literacy. An engineer who cannot build an eval suite from a customer's real cases cannot keep a Scorecard for a probabilistic system, which means they cannot run a Showcase that says anything.

**The room-reading layer.** Joe Schmidt at a16z, surveying companies that made the model work, compressed the hiring guidance to "curious hustlers over credentials" — high agency, comfort with ambiguity, the instinct to walk the halls. This is the layer *Impro* was aimed at, and it is the one conventional interviews measure worst.

## Interviewing for it

Each layer wants its own test, and only the first has a standard one.

The technical bar is your existing engineering loop, unchanged. Resist the temptation to soften it for a "customer-facing" role; the FDE test is the thing you are protecting.

Generalism shows up in a messy-data exercise: a real (anonymized) extract with the defects the field actually serves — duplicate keys, a column whose name lies, three date formats. Ask for something working against it in a bounded window, with an agent available. You learn two things at once: how they move through unfamiliar mess, and how they drive the agent — whether it is leverage in their hands or a slot machine.

The room-reading layer needs a scenario, not a quiz. Give the candidate the week-four situation: Scorecard flat, sponsor skipping showcases, an analyst quietly rebuilding their spreadsheet workflow around your system's output. Ask what they do Monday. There is no right answer; there is a recognizable shape to good ones — they name the people before the code, and they escalate deliberately rather than heroically. Candidates who answer entirely in engineering are telling you which half of the job they intend to do.

## Paying for it

The market has already priced the role; the design question is composition, not level. Reported ranges at the AI labs run from the mid hundreds of thousands to seven figures at the top of band — field engineering is not the discount tier of engineering, and a company that prices it that way staffs it with people who couldn't get the core job, which the FDE test then faithfully converts into a solutions-architecture team with the wrong title.

Two composition rules matter more than the number.

First: field engineers hold product-engineer equity, on product-engineer terms. The role's whole claim is that it builds the product from the edge; compensation should agree. Rocio Wu's analysis of failed FDE functions reaches the same conclusion from the failure side — teams paid like services organizations behave like services organizations, and the Ledger empties out. The warning sign at the industry level is the same one: when a lab spins its field function into a separate entity without core equity, it has told you — whatever the job posts say — that it considers the work adjacent, not core.

Second: expect and design for the sales-alignment pull. Schmidt's guidance aligns FDE incentives with account executives, and there is real logic to it — the field team is often the reason the deal closes and expands. But a variable component tied purely to bookings is a Permanent Resident generator: it pays people to stay embedded. If field compensation carries a commercial component, tie it to *graduations* — engagements ended on their Charter date with criteria met — not to continued presence. Pay for exits, and you will get exits.

## The reporting-lines argument

Every placement of the function on the org chart is a known trade. Under Sales (Palantir's Deltas reported into business development), the field stays close to revenue and drifts from the product; the extraction rule exists, but the org chart fights it daily. Under Engineering, extraction flows naturally and the commercial edge dulls — engagements optimize for interesting problems over important accounts. Under a standalone Customer or Field Engineering org, you buy focus and a seat at the executive table at the price of a new silo.

Wu's recommendation, and this book's: the standalone org, with a dotted line to Product that is real rather than ceremonial. "Real" is checkable, in the method's own terms: every engagement has a named Core Counterpart, the Field-Core Sync happens weekly, and the quarterly portfolio review puts field leadership and product leadership at the same table with the Ledgers between them. If those three run, the solid line matters much less. If they don't, no org chart will save the loop; you will have built a consulting arm with a dotted line to its conscience.

## Rotation is the retention policy

The job burns people. Travel, context-switching, the customer's timezone, the perpetual guest-in-someone-else's-house condition — the accounts agree on the strain, and the one-sentence version of the fix appears in every serious source: rotate.

Vinoo Ganesh's Project Frontline at Palantir is the documented template, and its direction is the instructive part: it rotated more than 250 *product* engineers through live customer deployments — core to edge, not only edge to core. Rotation is not a rest cycle for tired field engineers. It is the mechanism that makes the whole model compound: field engineers rotating into the core carry context no document holds and become the platform's best advocates for closing Ledger gaps; core engineers rotating outward stop designing for imaginary customers. Frontier's rotation rule — no more than two consecutive engagements, or six months, without a core rotation — is deliberately a *rule*, sitting beside the exit-date rule, because everything in an engagement's short-term logic argues for one more tour from the person who already knows the account. The rule exists so that argument loses.

Run this way, the field function becomes something recruiting can say honestly: not a services team attached to a product company, but the fastest route in the building from an engineer's keyboard to the product's roadmap — with the equity to match. That sentence, provable, is worth more than any adjustment to the band.
