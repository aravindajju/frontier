# Appendix C. Templates

Three one-page artifacts, ready to copy. Fill every field; a blank field is a decision postponed to a worse moment.

---

## The Charter

*One page. Signed at Landing, after the Data Walk and the Terrain Map — not before. Extension of the engagement requires a new Charter.*

**Engagement:** [customer, short name for this engagement]
**Dates:** Landing [date] · **Exit date: [date]** (hard edge; extension = new Charter)

**Outcome.** [One sentence, in the customer's business units, measurable. "Reduce claim rework from X% to Y%" — not "deploy the platform." This is what the Frontier Engineer owns.]

**How it is measured.** [The Scorecard definition: the metric, its source of truth, its current baseline value. For AI systems: the eval suite, and where its cases come from.]

**Graduation criteria.** [Three to five checkable statements about the customer's organization after handoff, e.g.:]
- ["Customer analysts triage exceptions without vendor help"]
- ["The system runs in customer production, operated by [named team]"]
- ["Eval score ≥ [threshold] on the full case set for two consecutive weeks"]

**Customer Sponsor:** [name, role — senior enough to unblock access and change workflow; attends every Showcase]
**Frontier Engineer(s):** [name(s)] · **Field Strategist:** [name or "hat worn by engineer"]
**Core Counterpart:** [named engineer/PM receiving extractions]

**Agent boundary.** [What AI agents and assistants may do in this environment:]
- May read: [systems/data]
- May write: [systems/environments, e.g. "dev and staging only"]
- Never enters model context: [data classes]
- Human gate required for: [actions]
- Audit trail: [where agent actions are logged]

**Signatures:** [Sponsor] · [Field team] · [date]

---

## A Ledger Entry

*One entry per deliberate overfit, shortcut, or platform gap. Written in the same sitting as the decision. Five minutes.*

**#[n] · [date] · [short name]**

**What was done.** [The shortcut or customer-specific construction, concretely. "Hard-coded the four date formats emitted by [system]; parser rejects all others."]

**Why it was right here.** [The constraint that made the general version wrong for this engagement — time-box, data reality, platform edge.]

**What breaks if conditions change.** [The trigger that turns this from asset to incident. "A fifth format appears — likely if they onboard the [X] feed."]

**Platform gap?** [yes/no. If yes: what capability the platform lacked. If this same last mile has appeared in a prior engagement, name it — second occurrence goes to the Core Counterpart at the next Field-Core Sync.]

**Disposition guess:** generalization candidate / fine for this customer's lifetime / replace before Graduation

**Disposition (filled at Extraction Review):** generalize / defer / discard — [decision, owner, date]

---

## The Scorecard

*One page, shown at every Showcase, including the weeks it is flat or falling.*

**Engagement:** [name] · **Week:** [n of total] · **Exit date:** [date]

**The outcome** (verbatim from the Charter): [sentence]

**The number:**

| | Baseline | Last week | This week | Graduation target |
|---|---|---|---|---|
| [metric] | [v] | [v] | [v] | [v] |

**For AI systems — the eval suite:**

| Case set | Cases | Score last week | Score this week |
|---|---|---|---|
| [e.g. "All claims, Jan-Jun"] | [n] | [v] | [v] |
| [hard/edge subset] | [n] | [v] | [v] |

*Cases come from the customer's real data; the suite grows every week the Loop surfaces a new failure. A demo is one draw from this distribution; the suite is the distribution.*

**Trend, honestly:** [rising / flat / falling — and the one-sentence reason]

**If flat or falling:** [what changes in next week's version, decided at this Showcase]
