# Interactive mechanism research lab

Curated publication of 15 Android package investigations and 196 bounded local mechanism reconstructions.

Start: `node ToResearch/demo-lab/server.mjs`, then open http://127.0.0.1:4193/. The generated table provides titles, distinctiveness, core loops, search, App filters, and direct demo links. Run `node ToResearch/demo-lab/build-index.mjs` to regenerate it from published catalogs and module registries.

- [Mechanism selection](FEATURE-SELECTION.md)
- [Implementation and validation index](RECONSTRUCTION-INDEX.md)
- [Lab commands and browser dependency configuration](demo-lab/README.md)

## Publication boundary

Only the 15 App folders enumerated in RECONSTRUCTION-SCOPE.json and shared research/lab documents are included. Existing SOUL, other research folders, REA tooling changes, and unrelated local deletions are excluded from this commit. Raw APK/XAPK, extracted binaries, downloaded pages/tools, large regenerable archive/class/string candidate indexes, screenshots, and local implementation planning are retained locally and excluded. APK-INFO metadata preserves analyzed identities, hashes, source URLs, and collection-time limitations. Every catalog evidence_ref file is included unchanged.

PUBLICATION-MANIFEST.json records exact original paths, byte sizes and SHA-256 hashes of published source files, plus omitted regenerable analysis indexes. Some historical reports link those explicitly omitted local indexes or screenshots; they are not bundled. Browser JSON records are retained as historical observations, not fresh Android/runtime verification. Absolute local paths in Evidence remain provenance. No source evidence is rewritten or silently redacted.

## Evidence and reconstruction limits

Static observations, product interpretation, local simulation choices, and unknowns remain separate. Resource or SDK presence does not prove runtime activation, original service behavior, or regional exclusivity. C-grade entries are local contract fragments, not recovered full games. No original account, backend, real RTC, payments, or production deployment is included.

The recorded full local validation passed 698 Node tests and 392 desktop/mobile journeys. Before this publication, all 698 local tests and 196-ID coverage were rerun on the exported checkout. The table, App demo entries and legacy entries passed desktop/mobile smoke verification; details and toolchain limitations are in PUBLICATION-VERIFICATION.json.
