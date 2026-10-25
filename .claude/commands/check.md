---
description: Validate one book or part of the Bible Scroll and explain every error and warning
argument-hint: <book id>[/<part>]
---

Run `cd bible && VERBOSE=1 node tools/build.js --check $ARGUMENTS` and report the errors and warnings grouped by
cause, each with the file and the fix. Fix the cause, never work around it in content; a build or app problem
goes in `bible/tools/build.js` / `bible/app/` (or, for a lane book, `content/proposals/<lane>/build.md`). Ask
before changing content you did not just write.
