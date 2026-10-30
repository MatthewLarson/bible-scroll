# Song of Songs: brief for the writer

Book id `Sng` (USFM `SNG`). 8 chapters, 117 verses in English numbering (17, 17, 11, 16, 16, 13, 13, 14). The Hebrew numbers 6:13 as 7:1, so Hebrew 7:2–14 is English 7:1–13; keys here are English, and `texts/orig/Sng.json` gives the Hebrew number in `heb`. Say so in a note at 6:13.

**One part, no `parts/` folder.** 117 verses is under the 100–200 size for splitting, and the Song's images (gazelle, garden, vineyard, spices, the night search, the oath) answer each other across the whole book, so one writer keeps them consistent. Files go flat in `content/books/Sng/` like Ruth. That writer owns book.json. The hostile review is one `review.md` in the book folder, by a different agent.

**Brief and drift audit.**
- Follow tools/agent-writer.md exactly, with STYLE.md and PLAN.md: the "Drift audit", "References", "Who it was for, and why", "Where Christians differ".
- Compare against the NIV and ESV only in your head. Never write out their text; log only the verse number, the outcome and a few words of reason.
- The Song is heavily quoted at weddings and in sermons ("I am my beloved's and my beloved is mine", "Many waters cannot quench love", "Set me as a seal", "Arise, my love, my fair one", "Rose of Sharon"). Rebuild every verse from `node tools/literal.js Sng <ch>`. A familiar line stays only where the Hebrew forces it. Audit honestly, line by line; a script may not mark lines "changed".
- Reading level is 8th grade and the readers include teens. Translate the erotic imagery honestly and plainly, neither coy nor crude. Keep the images (breasts like fawns, a garden, fruit, the hand through the opening) and explain them in notes; do not swap in a euphemism and do not add one the Hebrew lacks.

**Plain English Translation layout.**
- All poetry: one verse per line, ` / ` between poetic lines.
- The Hebrew marks the speaker by gender and person, but the text has no labels. The Plain English Translation adds none inside verse lines. Use section headings of 2–6 words that name the unit and, where clear, the voice ("Her longing", "His answer"). Where the speaker or the break is debated, say so in a note and give the views. The chapter settings cards (`by`, `to`) carry the voices: the woman, the man, the "daughters of Jerusalem" (chorus), her brothers (1:6; 8:8–9), the watchmen (3:3; 5:7), and the unnamed voice of 5:1c, 8:5a and 8:11–12.

**Lenses (fixed; use these keys in every chapter's `views`).**
- `H` History and setting: Solomon and the title (1:1), the date (the she- relative, Persian pardes, Greek or Persian 'appiryon, Tirzah beside Jerusalem at 6:4, place names from Lebanon to En-gedi), the setting of the poems, why a book with no divine name and no mention of covenant was kept.
- `L` Love poetry: the Song read as human love, a collection or one poem, its voices, its wasf (descriptive praise) songs, and its neighbors: Egyptian love songs (Papyrus Chester Beatty I, Turin, Harris 500, Cairo Love Songs), Mesopotamian Dumuzi–Inanna songs, the Syrian wedding-week custom (Wetzstein), and Greek pastoral (Theocritus) as a Hellenistic comparison. Fox, Exum, Bloch, Keel, Longman, Garrett.
- `J` Jewish tradition: Akiva's "holy of holies" (Mishnah Yadayim 3:5), the Targum's history of Israel from the Exodus to the end, Song of Songs Rabbah, Rashi, Ibn Ezra, Maimonides, the Kabbalists, the reading at Passover and on Friday evenings, the rabbis' reading of 3:11, 8:6 and 8:12.
- `X` Christian tradition: allegory of Christ and the Church or the soul (Hippolytus, Origen, Gregory of Nyssa, Ambrose, Augustine, Gregory the Great, Bernard's sermons, Teresa of Ávila, John of the Cross), the Marian use in the liturgy, the Reformation (Luther, Calvin, Castellio's rejection, the Puritans), the literal marriage readings, Theodore of Mopsuestia, modern evangelical and Catholic use (the "theology of the body").
- `M` Modern and women's readings: the woman's initiative and voice (Trible's "Eden reversed", Exum, Brenner, Falk, Bloch), what the brothers and the watchmen show about her freedom, readings in dialogue with desire, consent and marriage today, and the psychological and drama theories (Ewald's shepherd-lover (the three-character drama) and Delitzsch's two-character form, which argued against the shepherd; the drama theories generally).

**Book.json (the writer owns it).** It covers:
- The title: *shir hashirim* is the superlative "the best song" (grammar like "holy of holies"), and *lishlomo* may mean "by", "for", "about" or "in the manner of" Solomon. Solomon's 1,005 songs (1 Kings 4:32) and the later "Solomon" frame; Solomon is named seven times (1:1, 5; 3:7, 9, 11; 8:11, 12), and 8:12 sets "my own vineyard" beside his, so the king may be a foil rather than the lover. Weigh the Solomonic, northern-preexilic, Persian and Hellenistic dates fairly, with the language evidence.
- The Song's form and unity: an anthology of separate poems (Fox's 31, others fewer) against one poem with a refrain structure (the oath at 2:7, 3:5, 8:4; the refrain "my lover is mine and I am his" at 2:16, 6:3, 7:10) and a dramatic reading.
- The four main ways of reading (allegory, literal love poetry, drama, wedding or cultic liturgy) and the combinations, each in its strongest form, with the consensus labeled (most modern scholars read it as love poetry; most premodern Jews and Christians read it as allegory, and Jewish and Catholic teaching still gives that reading real weight).
- The canon: Mishnah Yadayim 3:5 (Akiva), Tosefta Sanhedrin 12:10 (against singing it in taverns), Aboth de-Rabbi Nathan, the five Scrolls (Megillot), Origen's report of a rule about when it may be read, Jerome's advice to Laeta, Theodore of Mopsuestia's rejection of the allegory (and the later claim that the Council of 553 condemned him for it, which writers must check or label), Castellio's 1544 rejection and Calvin.
- The book's silence about God (no divine name, apart from the debated *shalhevetyah* at 8:6), and what that means for each reading.
- The reception: the Targum, the Song at Passover, Bernard of Clairvaux (86 sermons, only to 3:1), the Marian liturgy, the Spiritual Canticle, and the modern marriage reading.
- Audience, facts, outline (the units below), lenses (above), two to five image prompts, `traditions` at book level only where the question belongs to the whole book (see below).

**Outline for chapters.json and settings cards (adapt if the Hebrew shows a better break).**
- 1:1 title.
- 1:2–2:7 first cycle: her longing, the daughters of Jerusalem, "dark and lovely", where he pastures, the couple's first praise of each other, the garden bed, oath at 2:7.
- 2:8–3:5 spring and the night search: "Listen! My lover!", the leap over the mountains, "Arise my darling", the foxes, the night search in the city, oath at 3:5.
- 3:6–5:1 the wedding: Solomon's litter, the first wasf (4:1–7), "my sister, my bride", the locked garden, the garden opened, 5:1.
- 5:2–6:3 the knock and the second night search, the watchmen, the wasf of the man (5:10–16), "my lover has gone down to his garden".
- 6:4–7:9 [Hebrew 7:10] his praise again, the Shulammite, the dance of Mahanaim, the wasf from the feet up.
- 7:10–8:4 "his desire is for me", "let us go out to the fields", the wish that he were her brother, oath at 8:4.
- 8:5–14 the seal and the flame, the little sister and the wall, Solomon's vineyard, "Hurry, my lover".
- Give every chapter a settings card for each unit above, and put it on the chapter where the unit starts. Each card says who speaks, to whom inside the poem, and in `readers` what it meant to the book's own first readers (a wedding feast, a scribal school, the temple community; give the proposals in `views`). Where the speaker is debated (1:9–11; 2:15; 4:16 and 5:1; 5:1c; 6:10; 7:10; 8:5, 8:8–9, 8:11–12) give each view.

**Terms (lead decisions; add to content/terms.json with a short read-modify-write, and say so in your report).** Read `content/terms.json` and `content/proposals/*/terms.json` first; the Song has no entries yet.
- *dod* (the man, in her mouth) is "my lover"; *dodim* is "lovemaking" (1:2, 1:4, 4:10, 5:1, 7:12 [Hebrew 7:13]), with a note that the Greek read "breasts" (dadayim) at 1:2, 1:4 and 4:10 and that "love" and "wine" are paired. *ra'yah* (his word for her, 1:9, 15; 2:2, 10, 13; 4:1, 7; 5:2; 6:4) is "my darling"; *re'a* "friend" (5:16). *ahavah* is "love" every time (never "desire" or "lust"), and the same English in the refrain at 2:7, 3:5 and 8:4.
- The refrain at 2:7, 3:5 and 8:4 is one English line each time, with the Hebrew differences (8:4 lacks "gazelles and does of the field") noted. *tsevaot / ayyelot hassadeh* are "gazelles or does of the field", with a note on the possible wordplay with *tsva'ot*, "armies", and *El Shaddai*.
- *bnot Yerushalayim* "daughters of Jerusalem" (and *bnot Tsion* "daughters of Zion", 3:11) the same everywhere. *hashulammit* "the Shulammite" (6:13), with a note on Shunem and Abishag (1 Kings 1:3) and on Solomon (*Shelomoh*).
- *kallah* "bride", *achoti* "my sister" (4:9–5:1; 8:8): "my sister, my bride" with a note on "sister" as a lovers' word in Egyptian songs (Fox) and not a blood tie.
- *nerd* "nard", *mor* "myrrh", *kofer* "henna blossoms", *karkom* "saffron", *qaneh* "calamus", *qinnamon* "cinnamon", *levonah* "frankincense", *ahalot* "aloes", *besamim* "spices", *pardes* "orchard" (4:13, a Persian loanword; also Ecclesiastes 2:5). One spice is one English word across the book.
- *shoshannah* "lily" (2:1–2, 16; 4:5; 5:13; 6:2–3; 7:2 [Hebrew 7:3]), *chavatselet hasharon* "a crocus of the Sharon plain" with a note on the "rose of Sharon" and the hymn "Lily of the Valley" (the speaker is the woman, not Christ). *tappuach* "apple tree" (2:3, 5; 7:8; 8:5) with a note that it may be apricot or quince.
- *shalhevetyah* (8:6) "a flame of Yah" with the superlative reading ("a raging flame") in a note and both views in `views` (the one possible divine name in the book); *reshef* "flames" (8:6), *qin'ah* "jealousy" with a note that the word covers fierce loyalty (it is used of God's jealousy), *'az kamavet ahavah* "love is as strong as death", Sheol as in terms.json (gloss at first use).
- *tirtsah* "Tirzah" (6:4), *Hermon, Senir, Amanah* (4:8), *En-gedi* (1:14), *Heshbon, Bat-rabbim* (7:4 [Hebrew 7:5]), *Baal-hamon* (8:11), *Kedar* (1:5), *Gilead* (4:1; 6:5): place names as in the Plain English Translation of the books already written; Lebanon is "Lebanon".
- Euphemism and body words get one fixed English each time and a note on the sense: *shadayim* "breasts", *beten* "belly" (7:2; 5:14), *shorer* (7:2) "navel" with the alternatives in a note, *yarkeikh* "thighs", *yad* "hand" (5:4), *me'ay* "my insides", *gan* "garden", *kerem* "vineyard" (1:6; 8:12), *peri* "fruit".
- Plant and animal words: *ofer ha'ayyalim* "young deer", *ofer* and *tsevi*, *yonah* "dove", *'orev* "raven", *tomer*/*gefen* as in the Plain English Translation; *shoshannah*; *dudaim* "mandrakes" (7:13 [Hebrew 7:14]; compare Genesis 30:14–16).
- "The LORD" does not occur in the Song; no note should claim it does.

**Textual evidence.**
- The Leningrad Codex is the base; the Aleppo Codex has the Song and is a witness (ABH/B markers in `texts/auto/Sng.json`). Ketiv and Qere in the auto file: 1:17 (rafters), 2:11 (winter), 2:13, 4:9, 6:12, and the small spelling marks at 3:8, 6:3, 7:8 (Hebrew 7:9) and 8:1, 8:13. Most are spelling; give variants.json entries only where the sense changes.
- The Septuagint (Rahlfs; Swete prints Vaticanus, Sinaiticus and Alexandrinus: `python tools/lxx.py Sng`) reads the vowels differently at 1:2, 1:4 and 4:10 ("breasts" for "lovemaking"), at 1:7 (*kə'ot'iyyah*, "like a veiled woman" in the Hebrew; the Greek, Latin and Syriac read "wandering"), and at 6:12 ("Aminadab"). The Greek is very literal in this book and close to Aquila's style (kaige).
- The Dead Sea Scrolls: 4QCant-a (4Q106), 4QCant-b (4Q107), 4QCant-c (4Q108) and 6QCant (6Q6). 4QCant-a and 4QCant-b are reported to give a shorter text than the Masoretic text (Tov, *Textual Criticism of the Hebrew Bible*); read them with `python tools/dss.py Sng` and say what you read there, not what you remember. Cite DJD (Tov in DJD XVI; Baillet in DJD III for 6Q6) and the Abegg–Flint–Ulrich *Dead Sea Scrolls Bible* only as far as you have checked them.
- The Targum of Song of Songs is a long paraphrase that reads the Song as the history of Israel with God as the lover, from the Exodus to the Messiah; quote it as such. The Syriac Peshitta, Jerome's Vulgate (translated from the Hebrew) and Aquila, Symmachus and Theodotion (Hexapla fragments) are later or secondary witnesses.
- Variants and cruxes that need an entry or a note: 1:5 ("and" or "but" lovely), 1:7, 1:17, 2:7/3:5/8:4 (the oath's form), 2:12 (*zamir*: song or pruning), 2:17 and 4:6 (*yafuach hayyom*, dawn or evening; *har hammor*, *har Bether*), 3:10 (*ratsuf ahavah*, "inlaid with love" or "paved with leather"), 5:6, 5:13, 6:12 (*Ammi-nadib*), 7:1 [Hebrew 7:2] (*shorer*), 7:5 (*ruhatim*), 7:9 (*dovev sifte yeshenim*), 8:2, 8:5 (the Hebrew "I woke you" masculine, against the Syriac and Vulgate), 8:6 (*shalhevetyah*), 8:11 (Baal-hamon).
- Say once, on your first chapter page, which witnesses you checked yourself. No reader-facing text may say "from memory", "not rechecked" or name a website; name the edition.

**Places that need full treatment (notes, traditions cards, deep sections).**
- 1:1: the title, *shir hashirim*, Solomon.
- 1:5–6: "dark and lovely", the brothers, "I have not kept my own vineyard" (*kerem*).
- 1:7–8 and 2:15: the flock, the foxes, and what each allegory and love-poem reading does with them.
- 2:1: the "rose of Sharon" and "lily of the valleys", and the misreading that Christ is speaking.
- 2:4: "his banner over me is love" (*diglo alai ahavah*), the banquet house.
- 2:7, 3:5, 8:4: the oath and what the woman asks of the chorus (do not wake or stir love until it wants), read as a warning against haste, against disturbance, or against forcing love, with the views.
- 3:6–11: who is coming up from the wilderness, Solomon's litter, "on his wedding day", the daughters of Zion.
- 4:1–7, 5:10–16, 6:4–10, 7:1–9: the four wasf songs. Show their shape (from the head down, or the feet up), what each image means (the comparisons are about impression and not shape: a flock of goats going down Gilead = hair), and what the Egyptian and Arabic parallels show.
- 4:12–5:1: the locked garden, the spring, the north wind and the south wind, and the Eden echoes (compare Genesis 2:8–25; Genesis 3:8); 5:1c's "Eat, friends, drink" voice.
- 5:2–8: the night search and the watchmen's beating; the hand in the opening; *me'ay hamu alav*; the veil taken (*redid*), and what is real and what is dream.
- 6:10 ("Who is this that looks down like the dawn?"), 6:12 and 6:13 (Ammi-nadib; the Shulammite; Mahanaim).
- 7:10 (Hebrew 7:11): "his desire is for me" (*teshuqato*), beside Genesis 3:16 and Genesis 4:7, and the argument that the Song reverses the Eden curse.
- 7:13: the mandrakes beside Genesis 30:14–16.
- 8:1–4: "if only you were my brother"; kissing in the street.
- 8:5: the apple tree, and who is waking whom.
- 8:6–7: the seal, strong as death, jealousy as hard as Sheol, the flame of Yah, many waters; the one verse the New Testament era read most. Full note, a `views` note from each lens, and a `traditions` card.
- 8:8–10: the little sister and the wall; "I am a wall and my breasts are towers": whose speech, what is promised and what is refused.
- 8:11–12: Solomon's vineyard at Baal-hamon and "my own vineyard": the Song's last argument.
- 8:14: the last word, "Hurry, my lover", and the Aramaic and Christian readings of it as the longing for the Messiah or Christ's return.

**Parallels with books already written (earlier Plain English Translation is the model; quote it exactly).**
- Proverbs 5:15–20 (drink water from your own cistern, "you will always be drunk with her love"); Proverbs 7:6–23 (the window, the bed with myrrh, aloes and cinnamon: the other side of the same imagery); Proverbs 30:18–19; Proverbs 31:10–31; Ecclesiastes 9:9; Ecclesiastes 7:26–29.
- Ruth 3 (night, a threshing floor, a man and a woman; "uncover his feet" / "spread your wing"), Ruth 2:1 for Boaz.
- 1 Kings 4:32–34; 1 Kings 5; 1 Kings 7:2; 1 Kings 10 (Sheba's spices); 1 Kings 11:1–3 against Song 6:8–9; 1 Kings 1:1–4 (Abishag the Shunammite).
- Isaiah 5:1–7 (the song of the vineyard, "my beloved"); Isaiah 62:5; Hosea 2:14–20; Hosea 14:5–7; Jeremiah 2:2; Ezekiel 16; Psalm 45 (a royal wedding, myrrh, aloes and cassia); Genesis 2:23–25; Genesis 29 (Jacob and Rachel); Genesis 24 (Rebekah's veil).
- New Testament: no verse quotes the Song by name. Ephesians 5:22–33, John 3:29, Mark 2:19–20, Matthew 25:1–13 and Revelation 19:7–9; 21:2 use the bridal image (present them as the bridal-imagery topic and not as quotations); Revelation 3:20 (the knock) is a possible echo of Song 5:2, which you should label as an echo and not a quotation.
- Books outside the 66 (name them as in works.json): Sirach 47:14–17 (Solomon's songs and proverbs), 4 Ezra 5:24–26 and the Targum, Ephrem and the early Church's reading are the later tradition; Wisdom of Solomon is a different book.

**Who it was for, and why.** Every chapter gets settings cards as listed. Cover the proposals fairly: a wedding week or festival (Wetzstein's Syrian wedding songs, Mishnah Taanit 4:8 on the 15th of Av when the daughters of Jerusalem dance in the vineyards), a scribal school of the Persian or Hellenistic period, a court collection of Solomon's reign, the Jewish people reading it as God's love song at Passover, and monastic readers who took it as their rule of prayer.

**Fairness and traditions.** Write "Where Christians differ" cards (each with `top`, at least two views, tradition names from TRADITIONS in tools/build.js), only where the churches really answer differently:
- What is the Song about? `top: song-of-songs` (new topic you create). Catholic (the Church's tradition reads it as Christ and the Church or the soul, and also as human love; Catechism, Theology of the Body), Orthodox (read in Holy Week at the Bridegroom services; monastic, mystical), Lutheran and Reformed (Luther's political allegory, Calvin's reserve about it, the Puritan love of the allegory against the modern marriage reading), Baptist and Evangelical (a celebration of marital love, with a typological echo), Adventist and others. This is the main book-level card.
- Marian reading, `top: mary`: the Song as a Marian text in the Catholic and Orthodox liturgy (the Assumption, the Immaculate Conception, "tota pulchra es") against the Protestant churches that do not apply it to Mary. Only if the passage adds something the Mary topic page lacks.
- Sex and desire in marriage and the single life, `top: marriage` or `top: celibacy`: Catholic (marital love as a gift; its orientation to children), Orthodox, Evangelical, Anabaptist, Pentecostal; and whether the Song speaks to people who are unmarried (the oath, the brothers, the night search). Name each tradition's answers as its own teachers state them.
- The bride, `top: bride`: the Church as the bride of Christ against the soul as the bride (Origen, Bernard, John of the Cross), and Jewish readings of Israel as bride (Targum, Rashi). Use this card or the `song-of-songs` card, not both.
- Do not rank traditions, and do not caricature the allegory (the allegorical reading shaped the Church's prayer for 1,800 years and is not a way of dodging the plain sense) or the literal reading (it is not a rejection of the Church's reading).

**Topics.** Contribute to existing topics (search content/topics/ and every content/proposals/*/topics/ for the title and `aka` first). Likely contributions: solomon, wisdom, marriage, bride, wine, vine, music, incense, queen-of-sheba (Sheba's spices), gems, typology, canon, celibacy, ancient-near-east, creation or eden (the Eden echoes), mary, hevel only if used. The writer creates `song-of-songs` (the book's core, with whole-Bible overview sections and `related`) and any of these that do not exist: a topic for desire and the body (check `marriage` first; a separate page only if the subject is distinct, for example `love-and-desire`), `wasf` or ancient love poetry (check ancient-near-east first), `spices-and-perfume` (check incense first), `shulammite`, and `allegorical-reading` (check typology first). One page per subject; the build errors on a title or alias collision. Aim for 12–20 topics.

**Atlas.** Tell the atlas-harvester that Bible Atlas links some Song names by name and not by sense ("Solomon" appears in the title and the body; "Lebanon", "Hermon", "Gilead", "Kedar", "En-gedi", "Tirzah", "Heshbon", "Carmel", "Damascus", "Sharon", "Amana", "Senir", "Shunem", "Baal-hamon", "Mahanaim" are real places; the "Shulammite" may be linked to Shunem or Abishag, which is a view and not a fact). The reviewer decides corrections.

**Shared rules learned from Psalms, Proverbs and Ecclesiastes.**
- When the book quotes a verse of another book, use that verse's current Plain English Translation exactly; the build warns otherwise. Books not on the site are quoted in your own rendering from the Leningrad Codex or the SBLGNT, never NIV or ESV wording.
- Where the same Hebrew appears twice, the earlier verse is the model and the later one matches it unless the Hebrew differs: the refrain at 2:7, 3:5, 8:4; "my lover is mine and I am his" at 2:16, 6:3, 7:10 (the Hebrew changes the order and the third time changes the second half: note it); the "until the day breathes" couplet at 2:17 and 4:6; the oath-like "daughters of Jerusalem" calls; "gazelle or young stag" at 2:9, 2:17, 8:14; "I am sick with love" at 2:5 and 5:8; the wasf images repeated at 4:1–5, 6:5–7 and 7:1–9.
- Notes typed `spec` are only Claude's own theory. Published observations are `com` or `views` notes with a source.
- Write the book name in every reference to another book, including inside tables and lists.
- Source keys are global: reuse keys from content/sources.json and the other books. New Song keys go in the book's sources.json: for example `fox-song`, `exum-song`, `murphy-song`, `longman-song`, `garrett-song`, `pope-song`, `bloch-song`, `keel-song`, `hess-song`, `trible-rhetoric`, `davis-song`, `origen-song`, `bernard-song`, `targum-song`, `song-rabbah`, `tov-textual`, `djd16`. Only cite real works; if you cannot name a page or edition, give the work without one. Egyptian love songs are cited as sources (Fox, *The Song of Songs and the Ancient Egyptian Love Songs*, 1985), not added to works.json.
- Keep scratch files in `.scratch/sng/`.

**Mount rules.** Shared files (terms.json, sources.json, works.json, topics/) are edited with a short read-modify-write, a few lines at a time. If you need a change to an existing topic core, put it in `content/proposals/lead/topics.md`.

**When you finish.**
- Run `VERBOSE=1 node tools/build.js --check Sng` until it reports 0 errors and 0 warnings.
- Update `content/books/Sng/progress.md` (`Status: written`).
- Report your counts, any repeated phrases left to align, the verses where the Plain English Translation follows a reading other than the Masoretic text, and anything I should know. Be accurate about which reading each verse follows.

**Model books.** `content/books/Rut` for a short, much-studied book with about one note per verse; `content/books/Ecc` and `tools/brief-ecc.md` for poetry, wisdom and a contested book with many readings; `tools/brief-pro.md` for the Wisdom/Torah and acrostic handling and the lead-decision format; `content/books/Rev` for the depth of a chapter page.
