# Apple Shortcuts setup — 2.0 Beta
Create six separate shortcuts with the exact names below. For each, use Get Dictionary from Input on Shortcut Input (JSON text). These are manual recipes, not installed shortcuts. Grant permissions and test with dummy data.

- **LifeOS Reminders**: Get `tasks` list, Repeat with Each. Read `title`, `notes`, `due`, `time`, `priority`, `list`, `id`. Find existing reminders using the LifeOS-ID marker in notes; skip matches, otherwise Add New Reminder. Map lists manually or use a default LifeOS list. Do not invent a time for date-only tasks. Duplicate prevention depends on your shortcut.
- **LifeOS Timer**: Read `seconds`, Start Timer in seconds. Native timer is separate; cancellation does not propagate.
- **LifeOS Calendar**: Read `title`, `start`, `end`, `id`. Parse ISO dates and Add New Event. Use ID marker in notes to check duplicates. Alternatively export ICS from LifeOS.
- **LifeOS Focus**: Read `mode`, branch on Study/Work/Off and Set Focus using your configured modes.
- **LifeOS Notes**: Read `title` and `body`, Create Note. Repeated runs may create duplicates.
- **LifeOS Health**: Use Find Health Samples for authorized types, aggregate nonoverlapping daily totals for sleep and activity, construct a JSON array of dictionaries with `kind`, `time`, `value`, `unit`, `source`. Save to Files and manually import in Health intelligence. Example: `[{"kind":"sleep","time":"2026-11-24T12:00:00+05:30","value":7.5,"unit":"h","source":"Apple Health"}]`. Supported units: glucose mg/dL or mmol/L, sleep h, exercise min, steps count, stress/energy score, water L, protein g, calories kcal. Libre CSV must be normalized to header `kind,time,value,unit,source`. No direct HealthKit or Libre connection.

No native confirmation callback or two-way sync. Apple permissions and available actions vary by device. Export encrypted backups via Backup, save to Files/iCloud Drive, then manually import on another device. Merge blocks conflicting IDs; replacement overwrites records. Keep separate verified backups. Never upload personal backups to GitHub.
