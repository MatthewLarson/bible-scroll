
## Reference parsing of works outside the 66 (nt lane, 2026-10-24)
- "4 Ezra 8:3" (and probably "2 Esdras", "4 Maccabees 1:1", "3 Maccabees") is read as a reference to Ezra 8:3 (or the 66-book name inside it), so a quotation of 4 Ezra in a note is checked against Ezra's Plain and warns. Expected: a numbered prefix that makes a works.json name should be read as that work, shown as plain text, never as Ezra.
- "Psalms of Solomon 17:21–32" in an `r`/`refs`/`echoes` list does not parse (the build errors), although STYLE says lists may cite works outside the 66 ("Tobit 4:15", "1 Enoch 1:9"). Probably any multi-word works.json name. Writers moved these into prose for now.
- A note cannot share its anchor with a variant (writers moved note anchors to nearby words). Fine if deliberate; say so in STYLE.

## TRADITIONS name request (nt lane, 2026-10-24)
- Please consider adding "Unitarian" (and perhaps "Oneness Pentecostal") to TRADITIONS. John 5:18, 1:1, 10:30, 14:28 and Matthew 28:19 have views held by Unitarian and Oneness churches that writers can only put in notes today. Oneness is currently written under "Pentecostal", which blurs it with Trinitarian Pentecostals.

## Source keys tied to one passage (nt lane, 2026-10-24)
- `chrysostom-matthew` and `calvin-harmony-gospels` (defined in 1Ma) cite one homily / one passage (Matthew 24). The nt lane uses general keys `chrysostom-hom-matthew` and `calvin-evangelists` for the whole works. If you prefer one key per work, widen the 1Ma ones and the nt lane will switch; otherwise consider these the general keys. The shared `ignatius` key may need widening (a note cites To the Smyrnaeans).
