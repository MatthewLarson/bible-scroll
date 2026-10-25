# Hostile review: Psalms 56–72 (part 056-072)

Reviewer's verdict. This is a strong part. The Plain follows the Hebrew closely and line by line. It does not hide the hard places (56:7, 58:1, 58:9, 62:3, 68:4, 68:13, 68:17, 68:27, 68:30, 72:5). The titles follow terms.json. Every psalm has a settings card with `readers`, and every summary gives the Greek number. The Jewish and Christian readings of 69 and 72 are fair, and the curse psalms 58 and 69 get an honest treatment. Most of the facts it cites from memory check out. I verified the Omer count (Psalm 67 has 49 words after the title, counting maqaf-joined words separately, Selah included), Tenebrae on Maundy Thursday, GILH 131, the Targum's "King Messiah" at 61:7 (Hebrew 61:7: יומי מלכא משיחא), the Targum's "bunch of frankincense" at 70:0 (Stec), and the Greek of 57:0, 57:2, 57:8 and 58:1. The Greek title of 71 and the Greek of 71:3, 6, 15 and 20 also check out. 57:7–11 and 60:5–12 agree with the site's Psalm 108 wherever the Hebrew agrees. But there are real errors. One Greek claim made from memory is false (61:7). One variant names a Ketiv/Qere in Psalm 108 that does not exist (60:5). Psalm 70 was translated without reference to the site's Psalm 40:13–17, and its note misquotes that Plain six times. One verse (68:29) matches the NIV and ESV wording and leaves the Hebrew preposition. Several notes misquote the site's own Plain of other psalms, including the build warning at 56:9. The part's one note on Hebrew numbering is wrong for Psalms 66, 71 and 72. No critical findings: 0 critical, 6 major, 21 minor.

## Major

**1. Major. notes.json 61:7 ("A puzzling word"). The Greek does not leave out *man*.**
The note says "Some Hebrew manuscripts and the Greek leave it out." The Old Greek (Rahlfs, Ps 60:8) reads ἔλεος καὶ ἀλήθειαν αὐτοῦ τίς ἐκζητήσει, "his mercy and truth, who will seek out?" So the Greek *translates* מַן as the Aramaic-style "who" (τίς). That is the note's own second option, and it is the strongest evidence for it. I checked this against the Rahlfs text (sacred-texts.com/bib/sep/psa060.htm). This was one of the Greek readings flagged as not rechecked.
Fix: "The Greek reads it as 'who' (τίς: 'his mercy and truth, who will seek them out?'); a few Hebrew manuscripts leave it out (as reported in BHS)." If the manuscript claim was not checked either, cut it.

**2. Major. variants.json 60:5 ("Answer me or answer us?"). Psalm 108 has no Ketiv/Qere here.**
The readings list "108:6 (Qere)" for "me" and "108:6 (Ketiv)" for "us". The Leningrad Codex at Psalm 108:7 (Hebrew) simply writes וַעֲנֵנִי, "answer me", with no Ketiv/Qere. texts/auto/Psa.json lists a Ketiv/Qere at 60:5 (K ועננו, Q ועננִי) and none at 108. So Psalm 108 is a witness for "me" in its written text. That makes the "me" reading stronger than the entry admits.
Fix: reading 0 `w`: "Qere; Psalm 108:6 (Hebrew 108:7), written text; Septuagint ἐπάκουσόν μου". Reading 1 `w`: "Ketiv (Leningrad Codex consonants)" only. Adjust the `why` to match.

**3. Major. plain.txt 70:1–5 and notes.json 70:1 ("Psalm 70 is Psalm 40:13–17"). The Plain does not follow the site's Psalm 40, and the note misquotes it.**
The brief lists 70 = 40:13–17 among the doublets. Where the Hebrew is the same, the duplicate should reuse the site's Plain and mark only the real differences. That is what the 107-118 writer did with 57 and 60 in Psalm 108. Here the identical Hebrew is rendered differently. Examples:
- 40:16 has "celebrate and be glad in you" where 70:4 has "celebrate and rejoice in you" (both יָשִׂישׂוּ וְיִשְׂמְחוּ).
- 40:16 has "Let those who love your rescue say at all times" where 70:4 has "your salvation ... always" (both יְשׁוּעָתֶךָ, תָּמִיד).
- 40:14 has "be driven back and disgraced" where 70:2 has "be turned back and disgraced" (both יִסֹּגוּ אָחוֹר וְיִכָּלְמוּ).
- 40:16 has "Great is the LORD!" where 70:4 has "God is great!" Only the divine name differs in the Hebrew (יִגְדַּל). The 40 form also keeps the jussive/exclamation better than the flat statement "God is great!", which also sounds like a slogan in English.

The note then quotes "Psalm 40" six times in wording the site's Plain does not have:
- "Be pleased, LORD, to rescue me" (site: "LORD, may it please you to rescue me!");
- "to snatch it away" (site: "to sweep it away");
- "let them be appalled" (site: "be stunned");
- "the LORD is great" (site: "Great is the LORD!");
- "the Lord thinks of me" (site: "may the Lord keep me in mind");
- "my God, do not delay" (site: "my God, do not be late").

The note's closing sentence even admits that the wording "was made separately".
Fix: rebuild 70:1–5 from 40:13–17's Plain, changing only what the Hebrew changes: God/LORD, the missing "together" and "to sweep it away", יָשׁוּבוּ for יָשֹׁמּוּ, "hurry to me" for "keep me in mind", "LORD" for "my God". Then requote 40 exactly in the note, and drop the "made separately" sentence.

**4. Major. notes.json 56:9, 56:4 and 56:13. The notes misquote the site's Psalms 118 and 116 (build warning).**
(a) 56:9 quotes 118:6 as "the LORD is for me". The site's 118:6 reads "With the LORD for me, I have no fear." `build.js --check` warns on this. (b) 56:4 says "What will flesh do to me?" is "quoted almost word for word in 118:6". The site's 118:6 second line is "What can a human being do to me?", and the Hebrew there (מַה־יַּעֲשֶׂה לִי אָדָם) matches 56:11 (*adam*), not 56:4 (*basar*). (c) 56:13 quotes 116:9 as "I will walk before the LORD in the lands of the living." The site has "I will walk about in the LORD's presence / in the lands of the living."
Fix: (a) say 118:6 makes the same point: "With the LORD for me, I have no fear" (118:6). (b) Point to 56:11: "The question of 56:11 returns in 118:6 almost word for word: 'What can a human being do to me?'" (c) Quote the site's 116:9 exactly.

**5. Major. plain.txt 68:29. Close to the NIV and ESV, and off the Hebrew.**
The Hebrew is מֵהֵיכָלֶךָ עַל־יְרוּשָׁלָםִ לְךָ יוֹבִילוּ מְלָכִים שָׁי, "From your temple over Jerusalem, to you kings will bring a gift". The Plain begins "Because of your temple ..." and ends "kings will bring you gifts". That is the NIV's and ESV's wording for both halves (each opens with "Because of your temple"). "Because of" is an interpretation of *min*, and the note at 68:29 itself glosses the phrase "from your temple". Two of the verse's three phrases match both versions, so it has to be redone under the STYLE rule.
Fix: "From your temple above Jerusalem, / kings will bring gifts to you." Or follow the line division some scholars propose, with "From your temple" closing 68:28. Put "because of" in the note as one option. Re-anchor the 68:29 note.

**6. Major. notes.json 56:0 ("Miktam, and how the titles are numbered"). The part's one numbering note is wrong for three psalms.**
It says "Hebrew Bibles count a psalm's title as verse 1, so their verse numbers here run one higher than English ones (two higher in Psalm 60)". That holds for 56–65 and 67–70. It is false for 66 and 72: in Hebrew the title shares verse 1 with the first line, and texts/orig `heb` maps 66:0 and 72:0 to 66:1 and 72:1 with no shift. It is also false for 71, which has no title. Readers who look up 66:18 or 72:8 in a Hebrew Bible will be sent to the wrong verse. This is the brief's required "once per part" note, so it must be right.
Fix: add "except Psalms 66 and 72, whose short titles share verse 1 with the first line, and Psalm 71, which has no title."

## Minor

**7. Minor. plain.txt 71:1–3 and the notes at 71:3 and 71:6. The part does not reuse the site's 31:1–3 and misquotes 22:9.** 71:1 and 31:1 are identical in Hebrew (בְּךָ־יְהוָה חָסִיתִי אַל־אֵבוֹשָׁה לְעוֹלָם). So is 71:3b, compared with 31:3a (סַלְעִי וּמְצוּדָתִי אָתָּה). The site's 31 reads "I take shelter in you, LORD; never let me end up in shame" and "For you are my cliff and my stronghold". The part's 71 reads "LORD, I have run to you for shelter. Let me never be ashamed" and "for my crag and my stronghold are you". The 71:3 note quotes 31:2 as "a fortress to save me" (site: "a fortress house to save me"). The 71:6 note quotes 22:9 as "pulled me from the womb" (site: "pulled me out of the womb"). Fix: harmonize the identical lines with 31, and requote 31:2 and 22:9 exactly.

**8. Minor. notes.json 58:10. The Greek's "hands" is missing.** The Old Greek (Ps 57:11) reads τὰς χεῖρας αὐτοῦ νίψεται ἐν τῷ αἵματι, "he will wash his *hands*" (verified, sacred-texts.com/bib/sep/psa057.htm). The Gallican Psalter has *manus*. Augustine's "spiritual" reading, which the note cites, works from "hands". Fix: add a sentence (or a short variant) that the Greek and the Latin have "hands", and that Augustine read it that way.

**9. Minor. notes.json 61:6. "The Targum and Jewish commentators read 'King Messiah' here."** The Targum claim is right (Hebrew 61:7: "the days of the King Messiah you will add"). But Rashi reads the verse of David (the plea that a decree of early death be lifted), so "Jewish commentators" overstates. Fix: "The Targum reads 'King Messiah' here; Rashi reads it of David's own life." Also give the Hebrew verse number (61:7) when citing the Targum.

**10. Minor. variants.json, missing entry at 68:28.** The MT has צִוָּה אֱלֹהֶיךָ עֻזֶּךָ, "your God has ordered your strength". The Greek (ἔντειλαι ὁ θεός) reads the imperative צַוֵּה אֱלֹהִים, "Command, O God, your strength". Many modern versions follow that reading, so the KJV and modern versions differ here. Fix: add a variant. The gloss "your God has called up your forces" can stay.

**11. Minor. notes.json 69:5 and variants.json 71:3. Vague Dead Sea Scroll claims.** "4QPs-a differs from the Leningrad Codex in this verse, but its reading is unclear" and "preserves this verse with a different wording whose meaning is unclear" tell the reader nothing they can check. 4QPs-a preserves parts of several psalms in this part: Flint lists 56, 62, 63, 66, 67, 69 and 71. The brief asks each part to say which witnesses it checked. Fix: give the actual reading from DSSB (Abegg, Flint and Ulrich), or cut the sentences. Add one line (in the 71:1 note, or a `com` note) naming the scrolls that hold these psalms and saying that DJD 16 was not checked.

**12. Minor. plain.txt 71:7, "like a warning sign".** מוֹפֵת is a portent or wonder. The note itself gives the positive reading ("a wonder of God's protection"), but the Plain has already decided for "warning". Fix: "like a portent to many" (or "a sign"), and leave the two senses to the note.

**13. Minor. chapters.json liturgy claims that are unsourced or overstated.**
- 57 L: "Christians have long sung it at the feast of the Ascension" (no source; the Ascension propers I know draw on Psalms 47 and 68, not 57).
- 59 L: "made this an evening and morning prayer" (no source). Also, every psalm is read in the Orthodox weekly Psalter, so saying it of 59 adds nothing.
- 66 L: "Because of the Greek title ... the Roman rite sings it in the Easter season" (the reason given is a guess).
- 58 L: "Some Reformed churches ... sing it as a prayer against tyranny" (no source).
- 56 L: "many Christians read 56:13 in services for the sick and dying" (no source).
- notes 68:35: "Jewish tradition reads Psalm 68 at Shavuot". The custom is real (the Gra's psalm of the day for Shavuot), but it should say "in many communities, as the psalm of the day", as the chapter's own reading card does.

Fix: source or soften each one.

**14. Minor. chapters.json 65 H.** "after the end of the three-year famine (2 Samuel 21:1, 14; 24:25)". 2 Samuel 24 is about a plague, not the famine. Fix: drop 24:25, or say "and the plague of 2 Samuel 24".

**15. Minor. chapters.json 68 C.** "perhaps from the sanctuary at Tabor": an unattributed scholarly proposal. Fix: name who proposed it (and add the source key), or cut it.

**16. Minor. chapters.json 69 sum and deep vs notes.json 69:4.** The sum and deep say 69 is the psalm the NT quotes most "after 22 and 110". The 69:4 note groups it "with Psalms 22, 110 and 118". Counts vary (Psalms 2 and 118 are close rivals). Fix: say "one of the psalms the New Testament quotes most" in all three places.

**17. Minor. plain.txt 60:9 vs the site's 108:10.** The Hebrew is the same (עִיר מָצוֹר), but 60:9 has "walled city" and 108:10 has "fortified city". Fix: use one rendering in both (tell the 107-118 writer if you change 108).

**18. Minor. chapters.json 65 sum.** It says the Greek title adds "the people of the exile", in quotation marks. Both the Greek and the part's own variant at 65:0 say ἐκ τοῦ λόγου τῆς παροικίας, "from the account of the exile (sojourning)". Fix: quote the variant's wording.

**19. Minor. glosses.json.**
- 66:17 "under my tongue" is glossed "on the tip of my tongue". In English that idiom means you can't quite recall a word, which is the opposite of praise held ready. Use "ready on my lips".
- 60:8 "Moab is my washbasin" is glossed "Moab will do my dirty work". The image is a menial vessel, not a laborer. Try "Moab is my foot tub".
- 69:27 "Add guilt to their guilt" is glossed "charge them with all they've done", which softens a curse that the chapter page says the Plain does not soften. Try "pile up their charges".

**20. Minor. chapters.json traditions cards that repeat other parts.** The 68 card ("What was that descent?", top `sheol`) asks almost exactly the 001-017 card at 16:10 ("Christ descended to the dead?", same top), with the same churches. The 69 curse card asks the same question as the cards in book.json and at 35, 79, 109 and 137. Fix: give each card a question only this passage raises. At 68, ask whether Ephesians 4:9's "lower parts of the earth" means the incarnation, the grave or Hades. At 69, ask how Romans 11:9–10's use of the curse on Israel should be read. Otherwise keep the card short and point to the earlier one.

**21. Minor. book.json outline (owned by 001-017).** Several headings for this part echo NIV/ESV wording rather than the site's Plain:
- 62:1–12 "My soul waits in silence for God" (close to the ESV 62:1);
- 69:1–36 "Save me, the waters have come up";
- 71:1–24 "Do not cast me off in old age";
- 67:1–7 "May all the peoples praise you".

The site's Plain says "quiet before God", "throw me away" and "thank you". Fix (001-017 writer): reword from the site's Plain, for example "Quiet before God", "Water up to the throat", "Do not throw me away when I am old", "Let the peoples thank you".

**22. Minor. notes.json 68:20.** Typo: "and In Revelation 1:18" should be "and in Revelation 1:18".

**23. Minor. plain.txt 56:10 and 62:4. Small departures from the MT.** 56:10 says "his word" twice, but the MT (Hebrew 56:11) has bare דָּבָר, "a word", unlike 56:4 (דְּבָרוֹ). 62:4 says "With their mouth", but the MT has בְּפִיו, "with his mouth", where the singular is distributive. Fix: "In God I praise a word. / In the LORD I praise a word", or keep "his" with a note. Either keep "their" with a `nu` note or use "each with his mouth".

**24. Minor. notes.json, no note at 61:5 "the possession of those who fear your name".** יְרֻשַּׁת is odd here. The Greek has "inheritance" (κληρονομίαν), and many scholars emend to אֲרֶשֶׁת, "the desire (of those who fear)". Fix: add a short `deb` note.

**25. Minor. chapters.json settings `readers`.** All 17 psalms (19 cards) open with the same sentence: "Israelites after the exile, singing and praying the collected Psalter in the rebuilt temple and in their homes and gatherings." The second sentence is usually good and specific. Fix: cut the boilerplate after the first card, or shorten it to "Later Israel:", so the specific point leads.

**26. Minor. notes.json previews over 120 characters:** 56:0 miktam (126), 68:4 (122), 68:14 (121). Fix: trim.

**27. Minor. topics.json `elohistic-psalter`.** It says Psalm 108, "outside the Elohistic Psalter ... keeps their 'God'". The part's own note at 57:7 says 108:3 has "the LORD" where 57:9 has "Lord". Both points belong together. Fix: "keeps their 'God' almost everywhere (but 'the LORD' at 108:3)".

## Checked and found sound
- I compared every verse against the literal lines from `literal.js`. Apart from the items above, nothing is added, dropped or softened. Name, number and tense choices follow the Hebrew or are flagged in notes and variants (58:1 *'elim*, 59:9 *'uzzi*, 72:2 jussive and future).
- Greek checked against Rahlfs:
  - 56:0 (στηλογραφία);
  - 57:0 (μὴ διαφθείρῃς), 57:2 (τὸν εὐεργετήσαντά με), 57:8 (ἡ δόξα μου);
  - 58:1 (εἰ ἀληθῶς ἄρα);
  - 71:0 title (υἱῶν Ιωναδαβ καὶ τῶν πρώτων αἰχμαλωτισθέντων), 71:3, 71:6 (σκεπαστής), 71:15 (γραμματείας), 71:20 (με).

  All are correct except 61:7 (finding 1). The part makes no Greek claims for Psalms 64 or 67, so nothing there needed checking.
- Liturgy and rabbinic claims I checked and accept:
  - Psalm 67 and the Omer (49 words);
  - Tenebrae;
  - GILH 131;
  - Berakhot 3b; Megillah 18a and 29a; Shabbat 88b; Gittin 57b; Sanhedrin 34a and 98b; Pesachim 54a; Chullin 89a; Midrash Tehillim 1:2;
  - Cassian, Conferences 10.10; Augustine, City of God 18.46; Tertullian's "almost kings";
  - the Paschal verses (68:1–3); the Hexapsalmos; Improperium; the Shabbat Minchah *Va'ani tefillati*;
  - the Targum at 61:7, 68:18, 70:0 and 72:1.
- Cross-part: 57:7–11 and 60:5–12 match the site's 108:1–13 wherever the Hebrew matches (apart from finding 17). Title forms follow terms.json ("On 'Do Not Destroy.'" as in 75:0, "On Jeduthun." as in 77:0, "Lily" singular here against "Lilies" in 80:0, as the Hebrew has it). *Nevel*/*kinnor* is "harp"/"lyre" throughout the Psalms. Quotations of Judges 5:4–5, 2 Samuel 8:13, 1 Chronicles 18:12, 1 Samuel 19:11 and 21:12–13, Numbers 6:24–25 and 10:35, Genesis 22:18, Exodus 14:22 and Revelation 1:18, 3:5 and 16:1 match the site's Plain.
- Style: no em-dashes, straight quotes, poetry marked with ` / `. Note density (210 notes for 281 verses) is fine.

## Fixes applied

1. 61:7 note now says the Greek reads *man* as "who" (τίς), the strongest support for that option; the unchecked manuscript claim is cut.
2. 60:5 variant: reading 0 witnesses are now the Qere, the written text of Psalm 108:6 (Hebrew 108:7, no Ketiv/Qere) and the Greek; reading 1 is the Ketiv only; `why` updated.
3. Psalm 70 rebuilt from the site's 40:13–17 Plain, changing only what the Hebrew changes (God/LORD, no "may it please you", no "together" or "to sweep it away", "turn back" for "be stunned", no "to me", "God, hurry to me" for "may the Lord keep me in mind", "LORD" for "my God"). The 70:1 note now lists the Hebrew differences without quoting Psalm 40, and the "made separately" sentence is gone. Notes, glosses and the chapter page are re-anchored. Realigned 2026-10-24 to the final 40:13–17 (70:4 drops "But"); the only remaining differences are the ones the Hebrew forces.
4. 56:9 now quotes 118:6 exactly; 56:4 points to 56:11 and quotes "What can a human being do to me?" (118:6); 56:13 quotes 116:9 exactly. The chapter 56 L view is corrected the same way.
5. 68:29 is now "From your temple above Jerusalem, / kings will bring gifts to you." The note gives "because of" and the other line division as options, and is re-anchored.
6. The 56:0 numbering note now excepts Psalms 66 and 72 (title shares verse 1) and Psalm 71 (no title).
7. 71:1–3 now uses 31:1–3's wording where the Hebrew agrees ("I take shelter in you, LORD; / never let me end up in shame", "for you are my cliff and my stronghold"); 31:2 ("a fortress house to save me", "a rock of shelter") and 22:9 ("pulled me out of the womb") are quoted exactly. Per the new lead rule, 69:4 now follows 35:19 for the same Hebrew ("Those who hate me without a cause", "my enemies for no true reason"), with the notes changed to match.
8. 58:10 note adds that the Greek and the Gallican Latin have "his hands", the text Augustine read.
9. 61:6 note: "The Targum reads 'King Messiah' here (Hebrew 61:7) ... Rashi reads it of David's own life."
10. Added variant 68:28: MT "your God has ordered" (followed) against the Greek imperative "Command, God".
11. The vague 4QPs-a sentences at 69:5 and 71:3 are cut. The witnesses actually checked are stated once, in a paragraph of the chapter 56 summary (Rahlfs for 56, 58–60, 62, 63, 65, 66, 68–72; 4QPs-a and 11QPs-d via the Dead Sea Scrolls Bible; DJD 16, Syriac, Targum and Jerome not checked).
12. 71:7 is now "like a portent to many"; the note keeps both senses.
13. Liturgy claims: the 57 Ascension claim and the 58 "prayer against tyranny" claim are cut; the 56 sick-and-dying claim is cut; the 59 L view is rewritten from the psalm itself (evening to morning); the 66 L view no longer gives a guessed reason; the 68:35 note says "many Jewish communities read Psalm 68 as the psalm of the day at Shavuot".
14. 65 H: 2 Samuel 24:25 dropped.
15. 68 C: the Tabor proposal is cut.
16. 69 sum, deep and the 69:4 note now say "one of the psalms the New Testament quotes most".
17. 60:9 is now "fortified city", matching 108:10 (note re-anchored).
18. 65 sum now quotes the variant's wording of the Greek title.
19. Glosses: 66:17 "ready on my lips"; 60:8 "Moab is my foot tub"; 69:27 "pile up their charges".
20. Traditions: the 68 card now asks whether "the lower parts of the earth" means the incarnation, the grave or Hades, and points to the 16:10 card. The 69 curse-liturgy card is replaced with a card on Paul's use of 69:22–23 for Israel (Romans 11:9–10), top church-israel. The 69 reading and deep section point to the card at Psalm 35 and the curse-psalms topic.
21. book.json outline headings: left to the 001-017 writer, as instructed.
22. 68:20 typo fixed.
23. 56:10 is now "In God I praise a word. / In the LORD I praise a word.", with the note on *davar* against 56:4's *devaro*. 62:4 keeps "their", with a new `nu` note on the distributive "his mouth".
24. Added a `deb` note at 61:5 on *yerushat* (Greek "inheritance") and the emendation *areshet*, "desire" (compare 21:2).
25. `readers`: the full sentence stays on the first card (56); every later card opens "Later Israel" so that its specific point leads.
26. Previews at 56:0 (miktam), 68:4 and 68:14 are trimmed to under 120 characters.
27. Topic elohistic-psalter: "keeps their 'God' almost everywhere (but 'the LORD' at Psalm 108:3)".

Also checked: no Selah stands after " / " in this part. A scan of every quotation followed by a psalm reference against all current Psalms plain.txt files found further misquotes at 56:6 (59:3), 59:3 (69:4), 71:1 (70:1–2, 22, 35, 38, 40), 71:9 (71:18), 71:16 (71:2) and 71:3 (31:2); all are fixed. `node tools/build.js --check Psa/056-072`: 0 errors, 0 warnings.
