<!-- BEGIN:nextjs-agent-rules -->
# AGENT.md

## Project context

This project is a B2B privacy-first HR analytics platform for an hackathon about “devices of the future”.

The product is not an employee surveillance tool.
It must never present itself as a system that monitors, ranks, diagnoses, or evaluates individual employees.

The product logic is:

- show only aggregated team-level insights
- no individual employee dashboard
- no employee ranking
- no personal drill-down
- no raw webcam storage
- no raw biometric storage in backend
- minimum cohort threshold for analytics (for example: 5 people)
- privacy-by-design must be visible in both UX and copy
- the tone must be calm, trustworthy, and enterprise-grade
- the product is for HR teams / People Ops / leadership

The concept is:
a future-oriented workplace wellbeing platform that transforms workplace signals into aggregated team insights such as overload, fatigue risk, focus stability, recovery quality, and meeting pressure.

## Design source of truth

Use the visual language, layout decisions, spacing, hierarchy, and component style defined in the Google Stitch project as the primary design reference.

Important:
- Google Stitch is the main visual source of truth
- follow its structure, visual hierarchy, spacing rhythm, component proportions, and overall tone
- do not redesign from scratch if Stitch already defines a good solution
- when implementation details are missing, extend the design in a way that is fully consistent with the Stitch style system
- keep strong visual consistency between landing page, login page, and HR dashboard

If there is any conflict between a generic AI-generated UI pattern and the Stitch project, always prefer the Stitch project.

## Product areas to build

The frontend includes 3 areas:

1. Public landing page
2. HR team login page
3. Private HR dashboard

## Landing page goals

The landing page must:
- explain the value proposition clearly
- communicate privacy-first positioning immediately
- explain that managers never see individuals
- present the platform as a trustworthy B2B system
- include clear CTA to login/demo
- visually match the Stitch design direction

Suggested product message:
“See team wellbeing without seeing individuals.”

## Login page goals

The login area is for HR Team / People Ops only.

It must:
- feel secure, minimal, premium, and calm
- include HR-focused access language
- include demo access if needed
- remind the user that the platform only exposes team-level aggregated insights
- visually align with the Stitch project

## Dashboard goals

The private dashboard is the core product experience.

It must show:
- team-level KPIs
- trends over time
- alerts and recommendations
- team detail pages
- privacy/trust center
- sources/signals page

It must never show:
- individual records
- employee names
- personal performance
- any biometric raw data
- invasive or medicalized language

## Required dashboard sections

### Overview
- Team Overload Index
- Fatigue Risk
- Focus Stability
- Recovery Quality
- Meeting Pressure
- weekly / monthly trends
- team risk summary
- recommendations panel

### Teams
Example teams:
- Engineering
- Sales
- Marketing
- Customer Support

Each team view should show:
- aggregated headcount
- team trend over time
- main drivers
- status / risk level
- label such as “Aggregated from 12 employees”

### Signals
Display the categories of signals used by the system:
- keystroke dynamics aggregate
- calendar / workload signals
- ambient signals
- wearable-derived aggregate metrics
- webcam-derived aggregate features

For each signal type, emphasize:
- aggregated processing
- no raw storage
- privacy level
- explainability

### Privacy Center
This is a critical page.
It must visually and textually reinforce:
- no individual drill-down
- no raw webcam storage
- no employee ranking
- local preprocessing where possible
- minimum cohort threshold
- privacy-first governance
- why HR cannot see individuals

## Tone and UX rules

The entire product must feel:
- trustworthy
- calm
- premium
- modern
- enterprise
- non-invasive
- understandable in a demo

The product must NOT feel:
- clinical
- scary
- surveillance-oriented
- futuristic in a sci-fi way
- flashy
- neon
- crypto-dashboard-like
- generic AI template

## Visual direction

Use the design language from Google Stitch first.

If additional visual guidance is needed:
- clean enterprise SaaS aesthetic
- spacious layout
- restrained color palette
- subtle shadows
- moderate border radius
- elegant charts
- no noisy gradients
- no decorative blobs
- no exaggerated glassmorphism
- no purple-blue AI aesthetic unless Stitch explicitly uses it

Suggested palette defined in Stitch:

Dark mode equivalent should stay restrained and readable.

## Typography

If Stitch already defines typography, follow it.

Otherwise use:
- headings: Manrope or Plus Jakarta Sans
- body and UI text: Inter

Typography must be:
- clean
- highly legible
- professional
- minimal
- consistent across landing, login, and dashboard

## Frontend implementation rules

- prefer semantic, accessible, production-like UI
- maintain consistency with Stitch components
- preserve spacing and hierarchy
- use reusable components
- charts must look integrated with the design system
- mock data should look realistic
- responsive behavior must be solid
- desktop is primary, mobile must still work well
- dark mode support is appreciated if feasible

## Copy rules

All copy must be:
- short
- enterprise-friendly
- privacy-first
- non-medical
- non-alarmist
- direct and credible

Preferred language examples:
- “aggregated team insight”
- “privacy by design”
- “minimum cohort threshold”
- “no individual visibility”
- “explainable alerts”
- “team-level wellbeing patterns”

Avoid language such as:
- “we detect stressed employees”
- “we monitor workers”
- “employee surveillance”
- “productivity score per person”
- “mental health diagnosis”

## Decision rule

When making design or product decisions:
1. follow the Google Stitch project first
2. preserve the privacy-first B2B HR logic described here
3. avoid generic AI-generated design patterns
4. prefer calm, premium, trustworthy UX over fl
<!-- END:nextjs-agent-rules -->
