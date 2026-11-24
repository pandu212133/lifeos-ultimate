# LifeOS Ultimate — release candidate

All ten iteration suites and original suite passed under Node 22.16.0. Iteration 10: 10 cycles of 1001 records, 100 assertions. Total iteration assertions 1240, excluding original suite. All JS syntax checks passed.

Static GitHub Pages deployment: upload runtime HTML, CSS, JS/MJS, manifest and icons at repository root; enable Pages from main/root. Keep same origin and path for upgrades; back up before updating. No server/API required. Do not upload personal backups. Test install, offline reload, IndexedDB migration, save/reload, encrypted restore and native Shortcuts on actual Apple devices before relying on application.

Limitations: live database unencrypted; manual backup exchange, conflicts block merge, deletions do not sync; browser storage may be evicted; pending saves may be lost on abrupt iOS termination. Beforeunload warning is best effort. No clinical interpretation, financial advice, or official electrical safety workflow. No automatic Apple Health sync or native reminder confirmation. Global search capped at 50; record lists latest 100 matches. Browser and native integration not certified. No release archive created pending approval.

Packaging update: release archive prepared after approval. Fixed learning/core circular import and corrected Apple Shortcut recipes to match runtime. All suites rerun successfully.
