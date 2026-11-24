# LifeOS Ultimate 2.0 Beta

Start with DEPLOYMENT.md and APPLE-SETUP.md. The current release uses IndexedDB, persistent timestamp-based focus sessions and optional encrypted backup exports. The historical iteration notes below are superseded by later iterations where they conflict.

## Iteration 2 Apple Shortcuts (manual setup)
Create shortcuts with the exact names below. Each receives Shortcut Input as text; use Get Dictionary from Input. Test manually before using LifeOS. Native permissions are required. No callback or automatic synchronization is implemented.
- LifeOS Reminders: repeat over `tasks`; find reminders whose notes contain the exact LifeOS-ID marker (including completed reminders if available); skip matches; otherwise Add New Reminder with title, notes, and optional due date. Choose a default list or map `list` to existing lists. Map priority if available. This recipe is not a preinstalled shortcut; duplicate prevention depends on your implementation.
- LifeOS Timer: read `seconds`, use Start Timer with seconds (if action unavailable on device, start manually). Canceling LifeOS does not cancel Apple Clock.
- LifeOS Calendar: parse start/end ISO dates and Add New Event with title. Alternatively import the exported ICS manually. Repeated shortcut runs may create duplicates.
- LifeOS Focus: branch on mode Study/Work/Off and use Set Focus for configured modes.
- LifeOS Notes: Create Note from title and body. Repeated runs may create duplicates.
- Health: no UI or native integration in this iteration.

## Iteration 3
Habits support cues, minimum actions, coping plans, weekday/weekend schedules, importance labels and dated full/minimum/rest/missed/undo logs. Seven-day assessed completion excludes rest and unlogged days; it is not a measure of automaticity. Older full-day logs remain readable. No native notification or automatic behaviour detection is added. Run `node iteration3-test.mjs` plus previous tests.

Iteration 4: Plan tab schedules available tasks with duration, energy, prerequisite and earliest date constraints, five-minute buffers and Calendar handoff. Recurring completion creates one successor; monthly recurrence clamps to the target month length. Save-and-send and reminder batches require native Shortcut setup; no native acknowledgement or two-way sync. Due times are stored but not enforced by planner. Run node iteration4-test.mjs for ten logic cycles.

## Iteration 5
Learning hub, adaptive four-grade recall (heuristic, not FSRS), manual mock topic entries, PYQ/trap tags, linked notes and time-budget study plan. No bundled question bank or automatic source verification.

Iteration 6: Health intelligence tab, normalized JSON/CSV import, unit conversion, duplicate filtering, 14-day sample summaries, manual nutrition/stress/energy logging and optional workload check-in. Data and backups are unencrypted. Native Apple Health export requires manual Shortcut setup. CSV header: kind,time,value,unit,source (unquoted fields). No direct CGM API, medical interpretation, or time-in-range calculation. 50,000 sample cap; browser storage may impose a lower limit. Regression: node iteration6-test.mjs.

## Iteration 7
Professional hub: equipment aliases, breakdowns, maintenance follow-ups, inspection observations, skills and achievements. Personal non-confidential records only. Equipment links use displayed IDs. Follow-up tasks and communication drafts require manual review.

Iteration 8: Financial Hub, category budgets (budget name matches expense category), current asset/debt snapshots, savings goals, recurring expense estimates, investment and decision journals, EMI and fixed-return projections. All manual INR data. No bank connection, transaction reconciliation, automatic recurring posting or investment advice. Backups remain unencrypted.

## Iteration 9
IndexedDB snapshot storage with transactional revision checks, previous snapshot, SHA-256 integrity checks, encrypted export (AES-256-GCM, PBKDF2 SHA-256 600000 iterations), manual conflict-blocking merge, backup reminder and storage estimate. Live storage remains plaintext. Save completion is asynchronous; wait for Saved to IndexedDB before closing. Backup reminders are in-app only; verify downloaded files. Deletions do not propagate in merges. Recovery is limited to the previous snapshot. No live iCloud sync. Browser smoke test attempted but localhost navigation was blocked by environment policy. Native Apple testing remains pending.

## Iteration 10
Simplified navigation, quick capture, global search, daily priority filtering, responsive dark mode, pending-save warning and focus validation. See RELEASE-AUDIT.md for release gates.
