# GitHub Pages deployment — LifeOS Ultimate 2.0 Beta
1. Extract the ZIP. Create a new public GitHub repository named `lifeos-ultimate` (do not use ChessForge). No personal data should be uploaded.
2. Upload the extracted files at repository root, not inside an extra folder. Ensure index.html is at root. Commit to main.
3. In Settings > Pages, select Deploy from a branch, main, / (root), Save. Wait for GitHub to publish the site.
4. Proposed URL: https://pandu212133.github.io/lifeos-ultimate/ — not yet deployed or verified.
5. Open in Safari on iPhone/iPad, Share > Add to Home Screen. On Mac use Safari or another supported browser. First load needs internet. Test offline after initial load.
6. Follow APPLE-SETUP.md for optional native handoffs. Each device has separate local storage; manual encrypted backup exchange is supported, not live sync.
7. Before updates, export and verify an encrypted backup. Upload updated runtime files to the same repository/path. Close old tabs and reopen after update.

## Acceptance checks
Create/edit/delete a dummy task, wait for Saved to IndexedDB, reload; test focus timer across closure, airplane-mode reload, encrypted export/restore, merge, Apple handoffs and migration from legacy data. Do not rely on important data until these pass. Live database is unencrypted; storage can be evicted; abrupt closure can interrupt saves. No clinical alarms or official workplace safety functions.

## Developer tests
Node 22: `node test.mjs` and `node iteration1-test.mjs` through `node iteration10-test.mjs`. For local browser testing use `python3 -m http.server 8000` and open localhost:8000. HTTPS or localhost is needed for service workers and Web Crypto. No npm installation required.
