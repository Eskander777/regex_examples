// Example 1

// Check all sentences to current pattern

const SENTENCE_1 = "KeItH sAyS yOu NeEd To LeArN rEgExEs";
const SENTENCE_2 = "wElCoMe To ThE sAlTy SpItOoN, hOw ToUgH aRe YoU?";
const SENTENCE_3 = "This is a boring, normal sentence.";
const SENTENCE_4 = "lEt Me SeE tHaT sPoNgEbOb MeMe OnE mOrE tImE";

const SENTENCES_ARR = [SENTENCE_1, SENTENCE_2, SENTENCE_3, SENTENCE_4];

// [A-Z]? - means to have zero or one(?) of title letters([A-Z])
// ([a-z],?\s?[A-Z],?\s?)+ - means to have one or more(+) small letters([a-z]),
// zero or one(?) comma(,), zero or one(?) space(\s), title letters([A-Z]),
// zero or one(?) comma(,), zero or one(?) space(\s)
// [a-z]? - means to have zero or one(?) of small letters([A-Z])
// [!|?|\.]? - means to have zero or one(?) either "!" or "?" or "." in the end
const regex = new RegExp(/[A-Z]?([a-z],?\s?[A-Z],?\s?)+[a-z]?[!|?|\.]?/);

// Check strings
// SENTENCE_3 should be "false"

for (let sentence of SENTENCES_ARR) console.log(regex.test(sentence));
// Expected output:
// true
// true
// false
// true
