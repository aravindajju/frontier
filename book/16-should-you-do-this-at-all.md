# 16. Should You Do This At All?

Part III changes seats. The first two parts of this book addressed the people doing the work; this one addresses the people deciding whether the work should exist — founders, engineering leaders, and, in chapter 19, the customers hosting it. It opens with the decision that precedes every other one, because the most expensive way to learn that forward deployment doesn't fit your business is to build the function first.

The pressure to skip this chapter is real. FDE postings grew several hundred percent year over year into 2026; OpenAI, Anthropic, and Google built the function; the a16z essay arguing for trading margin for moat made the model respectable to boards. Hiring field engineers has become what adopting agile was in 2010 — the thing a serious company is assumed to do. Fashion is a bad reason to restructure your go-to-market, and the record already contains the companies that learned it: Marc Andrusko's "The Palantirization of Everything" — the corrective essay from the same firm that popularized the trade — exists because the model was being copied by companies it could only hurt.

Andrusko's analysis reduces to four questions. Frontier adopts them as its fit gates, and the honest answer to this chapter's title starts with scoring yourself against all four.

## Gate one: mission-criticality

Forward deployment asks a customer to tolerate outside engineers inside their production environment, working against their live data — and to pay prices that carry the cost of putting them there. Customers accept both only for problems that matter enough. The founding case is the extreme one: Palantir's intelligence customers had problems of national consequence and data that could not leave the building, so the engineers came to the data. Your customers don't need classified networks, but they need problems in the same shape — consequential enough that an embedded team is a relief rather than an imposition, and that an outcome is worth outcome pricing.

The gate fails quietly. Customers will accept free field engineering for unimportant problems all day; what they won't do is pay for it, sponsor it, or grant it the access the two-week proof rule demands. If your engagements keep stalling at Landing for access nobody will expedite, the problem may not be your playbook. It may be that the problem isn't important enough to the people who own the door.

## Gate two: deal size

An engagement is six to twelve weeks of an engineer and a strategist, plus travel, plus the core counterpart's time. That cost must live inside the contract it serves. Andrusko's version is blunt: if your median deal is around a hundred thousand dollars and you are copying a go-to-market built for multi-million-dollar deployments, you are quietly building a consulting firm. Agent-assisted velocity moves this gate — smaller teams, shorter boxes, more engagements per engineer than the hand-built era allowed — but it moves the threshold, not the logic. Somewhere below a deal size you can compute for your own cost structure, the engagement can never pay for itself, and no amount of extraction optimism changes the arithmetic on this deal.

The gate has a second face: concentration. If only two customers can carry engagement economics, the function's fate is welded to two renewals. That is not a field engineering strategy; it is key-account dependency with better job titles.

## Gate three: workflow commonality

The flywheel — extract, widen the platform, shorten the next engagement — requires that engagements rhyme. Overfit solutions generalize only when the underlying workflow repeats across customers; that is what makes the second occurrence, the Overfit Decision's trigger, possible at all. If every customer's workflow is genuinely unique, extraction has nothing to extract. You will accumulate Ledgers full of orphan entries, an Extraction Rate at zero for reasons that are nobody's fault, and a platform that stays exactly as wide as the day you started — the Ghost Consultant's portfolio, produced with perfect discipline.

This gate deserves the most honesty, because early evidence is ambiguous: the first few engagements always look unique. The test is whether, squinting across your last ten prospects, you can name the workflow that would appear in seven of them. If you can't name it, the field won't find it either.

## Gate four: data gravity

Forward deployment's founding logic is that the value lives in customer data that cannot come to you — for reasons of regulation, security, scale, or entanglement with systems that don't move. That immobility is what justifies moving the engineer. When the data can travel — an export, an API, a sandbox that faithfully represents production — the whole apparatus of embedding is solving a problem you don't have. Ship the product, run the integration remotely, keep the plane fare.

AI systems have strengthened this gate's grip for the companies that genuinely pass it: models tuned against live enterprise data, agents operating inside customer systems, evals built from real cases — in situ work by nature. But the gate still discriminates. Plenty of AI products are tuned perfectly well on data the customer will happily hand over. Gravity is a property of your customers' data, not of the AI era.

## Failing the gates, honestly

The Guide's rule: failing two or more gates, the answer is a better product or a partner channel, not field engineers. Both alternatives deserve to be taken seriously rather than treated as consolation prizes.

A better product is the boring fix that the field-engineering fashion obscures. If deployments stall on setup, documentation, and configuration — the same way each time — that is an onboarding defect with a product solution, and hiring engineers to hand-carry customers past it is paying salary to avoid a roadmap conversation.

The partner channel is the historically proven fix, and the SAP case from chapter 15 is its monument: generalize what the field learns, hand implementation to partners, and let a services ecosystem carry the last mile at its own margins. You give up the direct feedback loop — the real cost, not to be waved away — in exchange for scale no employed field force reaches.

And if the truth is that your customers' outcomes require permanent on-site engineering — if the exit dates would all be fictions — then what you have is a services business. That is a legitimate thing to be. It has its own economics, its own multiples, and its own excellence. The only mistake is running one while booking it as software, which is the Margin Mirage, and chapter 18 treats it fully.

## The referendum never closes

Passing the gates once is not a license; it is an entry ticket to a vote that repeats. The instrument of the ongoing referendum is the one-third rule, calibrated from Rocio Wu's operating analysis: when more than a third of deployments need heavy field effort for the same class of problem, that is a product defect, and the fix belongs to the core — adding field engineers to it is malpractice.

Read at portfolio level, quarterly, the rule turns the field function into a standing audit of the product. Early on, most deployments need the field — that is why the function exists. As extraction compounds, the share should fall. A share that stays high for the same class of problem is the product refusing to absorb what the field keeps learning, and the correct response is roadmap pressure, not headcount. A share that stays high across changing classes of problem may just be the frontier moving — new capability, new integration surface — which is the healthy version, and the portfolio review exists to tell the two apart.

Which points at the strangest feature of a well-run field function, treated fully in chapter 20: its trajectory is toward needing less of itself. The gates ask whether you should build it. The referendum asks, every quarter, whether the product has caught up yet. A leadership team uncomfortable with a function whose success shrinks its own necessity should settle that discomfort now — before chapter 17, which is about hiring people whose careers will depend on you meaning it.
