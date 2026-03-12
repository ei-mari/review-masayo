const categoryMeta = {
  vowel: {
    label: "母音",
    description: "母音の質、長さ、口の開き方に関するズレ",
    color: "var(--vowel)",
  },
  consonant: {
    label: "子音",
    description: "子音の摩擦、舌先の位置、Dark L などの子音処理",
    color: "var(--consonant)",
  },
  rhythm: {
    label: "リズム",
    description: "機能語の軽さ、語強勢、スピード変化",
    color: "var(--rhythm)",
  },
  linking: {
    label: "リンキング",
    description: "語と語のつながり方、連結の自然さ",
    color: "var(--linking)",
  },
  intonation: {
    label: "イントネーション",
    description: "音程の置き方、核、フレーズ全体の抑揚",
    color: "var(--intonation)",
  },
};

const studentPages = {
  masayo: {
    title: "採点結果",
    description:
      "各指摘を 1 項目あたり -0.3 点で減点し、褒めコメントは別枠で記録しています。各文の近くで音声も再生できます。",
    evaluatedAt: "2026年3月12日採点",
    candidate: "masayoさん",
    heroWord: "MASAYO",
    baseScore: 100,
    penaltyPerIssue: 0.3,
    sentences: [
      {
        id: "01",
        audioSrc: "../audio/masayo/ma_1.m4a",
        segments: [
          { text: "It st" },
          { text: "ar", category: "vowel" },
          { text: "ted before I was born." },
        ],
        issues: [
          {
            category: "vowel",
            target: "ar",
            text: "ɑːrに若干違和感があります。この音は顎に動きのある発音ですが、ɝːとɑːrの間のような音に聞こえます。一度顎を下げて、その顎を戻してから舌を引きRを出しましょう。",
          },
        ],
        praises: [],
      },
      {
        id: "02",
        audioSrc: "../audio/masayo/ma_2.m4a",
        segments: [
          { text: "My bio" },
          { text: "lo", category: "vowel" },
          { text: "" },
          { text: "gi", category: "vowel" },
          { text: "" },
          { text: "ca", category: "vowel" },
          { text: "" },
          { text: "l", category: "consonant" },
          { text: " mother was a " },
          { text: "y", category: "consonant" },
          { text: "oung, " },
          { text: "u", category: "vowel" },
          { text: "" },
          { text: "n", category: "consonant" },
          { text: "" },
          { text: "we", category: "vowel" },
          { text: "d gradu" },
          { text: "ate", category: "rhythm" },
          { text: " stu" },
          { text: "dent", category: "intonation" },
          { text: ", and she decided to put me up for adoption." },
        ],
        issues: [
          { category: "vowel", target: "lo", text: "loがローマ字読みに寄っています。ɑ" },
          { category: "vowel", target: "gi", text: "/ʤɪ/ の母音/ɪ/が落ちてしまっています。" },
          { category: "vowel", target: "ca", text: "cal - ローマ字読み「カル」のように聞こえます。母音はローマ字読みにならないよう「お」寄りで読みましょう。" },
          { category: "consonant", target: "l", text: "舌先は弾かないようにDark Lを意識しましょう。" },
          { category: "consonant", target: "y", text: "/j/が日本語のヒの子音のように聞こえました（[ç]）" },
          { category: "vowel", target: "u", text: "母音/ʌ/をもう少しはっきり読んであげるとさらに🙆" },
          { category: "consonant", target: "n", text: "/n/は舌先を歯茎につけましょう。" },
          { category: "vowel", target: "we", text: "母音/ɛ/をもう少しはっきり読んであげるとさらに🙆" },
          { category: "vowel", target: "ate", text: "動詞の方の発音（/eɪ/）になっています。母音に注意。" },
          { category: "intonation", target: "dent", text: "これは/ɡrædʒ/が第一強勢で、残りの部分は尾部のように読んであげたいところなので、studentであまり音程を変化させすぎないように、一番低い音程で推移させるように意識しましょう。" },
        ],
        praises: [
          { target: "文全体", text: "機能語、内容語の強勢音節がきちんと意識されていて、心地よいリズムで読めています。" },
          { target: "biological / put up", text: "イントネーションについても、biological の強勢移動、フレーズ強勢put upなど意識されていて素晴らしいです。" },
        ],
      },
      {
        id: "03",
        audioSrc: "../audio/masayo/ma_3.m4a",
        segments: [
          { text: "" },
          { text: "She", category: "rhythm" },
          { text: " felt very strong" },
          { text: "l", category: "consonant" },
          { text: "y that I should be adopted by college gradu" },
          { text: "a", category: "vowel" },
          { text: "" },
          { text: "tes", category: "vowel" },
          { text: ", so everything was all set " },
          { text: "f", category: "consonant" },
          { text: "or me to be adopted" },
          { text: " at", category: "linking" },
          { text: " birth by a lawyer and his wife." },
        ],
        issues: [
          { category: "rhythm", target: "She", text: "sheは機能語なので、もう少し短く速く読んであげられると◎" },
          { category: "consonant", target: "l", text: "Lが弱めです。" },
          { category: "vowel", target: "a", text: "graduates の/æ/で口の横の緊張が甘くなっています。" },
          { category: "vowel", target: "tes", text: "こちらも動詞の方の発音/ˈɡrædʒ.u.eɪt/になっています。/ˈɡrædʒ.u.ət/で読みましょう。" },
          { category: "consonant", target: "f", text: "/f/の摩擦が聞こえませんでした。歯が唇に当たっていないような音に聞こえます。" },
          { category: "linking", target: "at", text: "adopted a birth に聞こえます。adopted atをリンキングしようとするより、adoptedat と一語で読む感覚のほうがうまくいくかもしれません。" },
          { category: "rhythm", target: "文全体", text: "全体的なスピードがこの文で急に変わったのは少し気になりますが、テスト対策としてならOKです。" },
        ],
        praises: [{ target: "文全体", text: "リズムも音素も安定しています。" }],
      },
      {
        id: "04",
        audioSrc: "../audio/masayo/ma_4.m4a",
        segments: [
          { text: "Except that when I popped out they decided at the l" },
          { text: "a", category: "vowel" },
          { text: "st minute" },
          { text: "s", category: "consonant" },
          { text: " that they really wanted a girl." },
        ],
        issues: [
          { category: "vowel", target: "a", text: "last - /æ/に注意しましょう。" },
          { category: "consonant", target: "s", text: "minuteが複数形minutesになっています。" },
        ],
        praises: [
          { target: "文全体", text: "イントネーションとても良い感じです！Iを核にしているところも、really wanted a girl - 下降調の連続も決まっています✨" },
        ],
      },
      {
        id: "05",
        audioSrc: "../audio/masayo/ma_5.m4a",
        segments: [
          { text: "So my parents, " },
          { text: "wh", category: "consonant" },
          { text: "o were on a waiting list, got a call in the middle of the night asking:" },
        ],
        issues: [{ category: "consonant", target: "wh", text: "who - /h/ではなく、日本語の[ɸ]（フの子音）のように聞こえます。" }],
        praises: [
          { target: "文全体", text: "音素は安定しているし、リズムも意識できていて良いです。" },
          { target: "of", text: "点は引きませんが、ofは母音がちょっとローマ字読みに引っ張られてはいるので、機能語の/əv/で読めるとさらに見本に近くはなりそうです。" },
        ],
      },
      {
        id: "06",
        audioSrc: "../audio/masayo/ma_6.m4a",
        segments: [{ text: "We’ve got an unexpected baby boy; do you want him?" }],
        issues: [],
        praises: [{ target: "文全体", text: "とても良いですよ〜〜〜！" }],
      },
      {
        id: "07",
        audioSrc: "../audio/masayo/ma_7.m4a",
        segments: [
          { text: "They said: “Of c" },
          { text: "ou", category: "vowel" },
          { text: "rse.”" },
        ],
        issues: [{ category: "vowel", target: "ou", text: "course /ɔr/が/ɝ/のように聞こえます。" }],
        praises: [],
      },
      {
        id: "08",
        audioSrc: "../audio/masayo/ma_8.m4a",
        segments: [
          { text: "My bio" },
          { text: "lo", category: "vowel" },
          { text: "" },
          { text: "gi", category: "vowel" },
          { text: "" },
          { text: "ca", category: "vowel" },
          { text: "" },
          { text: "l", category: "consonant" },
          { text: " mother " },
          { text: "f", category: "consonant" },
          { text: "ound " },
          { text: "out", category: "rhythm" },
          { text: " later that my mother had never graduated from college and that my father had never graduated from high school." },
        ],
        issues: [
          { category: "vowel", target: "lo", text: "loがローマ字読みに寄っています。ɑ" },
          { category: "vowel", target: "gi", text: "/ʤɪ/ の母音/ɪ/が落ちてしまっています。" },
          { category: "vowel", target: "ca", text: "cal - ローマ字読み「カル」のように聞こえます。母音はローマ字読みにならないよう「お」寄りで読みましょう。" },
          { category: "consonant", target: "l", text: "舌先は弾かないようにDark Lを意識しましょう。" },
          { category: "consonant", target: "f", text: "found の/f/が聞こえません。日本語のファのようになっている？" },
          { category: "rhythm", target: "out", text: "found out はoutのほうが第一強勢です。" },
        ],
        praises: [
          { target: "mother vs father / college vs high school", text: "mother vs father, college vs high schoolの対比がわかりやすいように読まれていて◎です。" },
        ],
      },
      {
        id: "09",
        audioSrc: "../audio/masayo/ma_9.m4a",
        segments: [
          { text: "" },
          { text: "She", category: "rhythm" },
          { text: " refused to sign the final adoption papers." },
        ],
        issues: [{ category: "rhythm", target: "She", text: "sheが内容語のように目立っているので、できれば機能語のように縮めて弱く読んであげたいところです。" }],
        praises: [],
      },
      {
        id: "10",
        audioSrc: "../audio/masayo/ma_10.m4a",
        segments: [
          { text: "" },
          { text: "She", category: "rhythm" },
          { text: " only re" },
          { text: "len", category: "rhythm" },
          { text: "ted a few months later when my parents promised that " },
          { text: "I would", category: "intonation" },
          { text: " go to college." },
        ],
        issues: [
          { category: "rhythm", target: "She", text: "こちらもsheが目立っています。" },
          { category: "rhythm", target: "len", text: "/rɪˈlɛntɪd/の強勢を意識できると嬉しい。" },
          { category: "intonation", target: "I would", text: "that I would go to collegeで、JobsはIに強勢を置いているのですが、masayoさんはwouldに強勢を置いています。" },
        ],
        praises: [],
      },
    ],
  },
  tomoko: {
    title: "採点結果",
    description:
      "各指摘を 1 項目あたり -0.3 点で減点し、褒めコメントは別枠で記録しています。Tomokoさん用のレビュー内容を反映済みです。",
    evaluatedAt: "2026年3月12日採点",
    candidate: "tomokoさん",
    heroWord: "TOMOKO",
    baseScore: 100,
    penaltyPerIssue: 0.3,
    displayScore: 88,
    sentences: [
      {
        id: "01",
        audioSrc: "../audio/tomoko/tomoko_1.m4a",
        segments: [
          { text: "It started before I was bor" },
          { text: "n", category: "supplement" },
          { text: "." },
        ],
        issues: [],
        emptyIssueText: "合格です！上手い！",
        praises: [],
        supplements: [
          { target: "born", text: "点は引きませんが、bornの/n/は舌先を歯茎につけて終われるとさらに◎。" },
        ],
      },
      {
        id: "02",
        audioSrc: "../audio/tomoko/tomoko_2.m4a",
        segments: [
          { text: "My bio" },
          { text: "lo", category: "vowel" },
          { text: "" },
          { text: "g", category: "consonant" },
          { text: "i", category: "vowel" },
          { text: "" },
          { text: "cal", category: "vowel" },
          { text: " mother was a young, u" },
          { text: "n", category: "consonant" },
          { text: "wed gr" },
          { text: "a", category: "vowel" },
          { text: "du" },
          { text: "ate", category: "vowel" },
          { text: " stu" },
          { text: "dent", category: "intonation" },
          { text: ", and she decided to put me " },
          { text: "up", category: "vowel" },
          { text: " for adoption." },
        ],
        issues: [
          { category: "vowel", target: "lo", text: "loがローマ字読みに寄っています。/ɑ/が「オ」にならないよう注意。" },
          { category: "consonant", target: "g", text: "/ʤɪ/ の/ʤ/が出ていません。" },
          { category: "vowel", target: "i", text: "母音/ɪ/が落ちてしまっています。" },
          { category: "vowel", target: "cal", text: "cal - ローマ字読みのように聞こえます。母音はローマ字読みにならないよう「お」寄りでDark Lを意識しましょう。" },
          { category: "consonant", target: "n", text: "/n/は舌先を歯茎につけましょう。" },
          { category: "vowel", target: "a", text: "/æ/の口の横の緊張が甘めです。" },
          { category: "vowel", target: "ate", text: "動詞の方の発音（/eɪ/）になっています。母音に注意。" },
          { category: "intonation", target: "dent", text: "graduate student - これは/ɡrædʒ/が第一強勢で、残りの部分は尾部のように読んであげたいところなので、studentであまり音程を変化させすぎないように、一番低い音程で推移させるように意識しましょう。" },
          { category: "vowel", target: "up", text: "up のʌで顎がガクンと落ちているように聞こえます。なるべく顎は下げすぎないように気をつけましょう。" },
        ],
        praises: [
          { target: "文全体", text: "機能語、内容語の強勢音節がきちんと意識されていて、心地よいリズムで読めています。イントネーションについても、biological の強勢移動、フレーズ強勢put upなど意識されていて素晴らしいです。" },
          { target: "総評", text: "とにかくリズムがとても上手です。ものすごく心地よくて、プラス２００点あげちゃいたいぐらいです！素晴らしい👏" },
        ],
      },
      {
        id: "03",
        audioSrc: "../audio/tomoko/tomoko_3.m4a",
        segments: [
          { text: "She " },
          { text: "felt", category: "rhythm" },
          { text: " " },
          { text: "very", category: "rhythm" },
          { text: " str" },
          { text: "o", category: "vowel" },
          { text: "ngly " },
          { text: "th", category: "consonant" },
          { text: "at I should be adopted by college gr" },
          { text: "a", category: "vowel" },
          { text: "duat" },
          { text: "tes", category: "vowel" },
          { text: ", so everything was all set for me to be adopted at birth by a lawyer and his wife." },
        ],
        issues: [
          { category: "rhythm", target: "felt / very", text: "Sheが速くて弱いのは最高ですが、felt とveryは内容語なので母音をもう少し長く目立たせるように読んであげると、早口に聞こえません。", count: 2 },
          { category: "vowel", target: "o", text: "strongly - /ɔ/で顎が下がっていません。口が小さく開いてしまっています。" },
          { category: "consonant", target: "th", text: "thatの/ð/が日本語のザになっているので注意。" },
          { category: "vowel", target: "a", text: "/æ/の口の横の緊張が甘めです。" },
          { category: "vowel", target: "tes", text: "こちらも動詞の方の発音/ˈɡrædʒ.u.eɪt/になっています。/ˈɡrædʒ.u.ət/で読みましょう。" },
        ],
        praises: [
          { target: "TH", text: "THが多い文章でしたが、that以外はちゃんと出ています👏頑張りましたね！" },
          { target: "felt very以外", text: "felt very以外の部分は、内容語の強勢音節をちゃんと目立たせているし、機能語の縮め方も本当にお上手。イントネーションも自然で、とてもとても良いです。" },
        ],
      },
      {
        id: "04",
        audioSrc: "../audio/tomoko/tomoko_4.m4a",
        segments: [
          { text: "Except " },
          { text: "that", category: "consonant" },
          { text: " when I p" },
          { text: "o", category: "vowel" },
          { text: "pped out they decided at the last m" },
          { text: "i", category: "vowel" },
          { text: "nute that they really wanted a g" },
          { text: "ir", category: "vowel" },
          { text: "l." },
        ],
        issues: [
          { category: "consonant", target: "that", text: "thatの/ð/に注意！" },
          { category: "vowel", target: "o", text: "popがローマ字読みになっています。" },
          { category: "vowel", target: "i", text: "/ɪ/は日本語の「イ」にならないよう注意。" },
          { category: "vowel", target: "ir", text: "ɝは顎が下がらないようにしましょう。" },
        ],
        praises: [
          { target: "文全体", text: "イントネーションとても良い感じです！Iを核にしているところも、really wanted a girl - 下降調の連続も決まっています✨" },
        ],
      },
      {
        id: "05",
        audioSrc: "../audio/tomoko/tomoko_5.m4a",
        segments: [
          { text: "So my parents, who were on a waiting list, got a call in the midd" },
          { text: "l", category: "consonant" },
          { text: "e of the night asking:" },
        ],
        issues: [
          { category: "consonant", target: "l", text: "Lのところで舌を弾いています。" },
        ],
        praises: [
          { target: "リズム", text: "リズムとても良いですね。" },
          { target: "イントネーション", text: "イントネーションも自然!" },
        ],
      },
      {
        id: "06",
        audioSrc: "../audio/tomoko/tomoko_6.m4a",
        segments: [{ text: "We’ve got an unexpected baby boy; do you want him?" }],
        issues: [],
        emptyIssueText: "Great!",
        praises: [],
      },
      {
        id: "07",
        audioSrc: "../audio/tomoko/tomoko_7.m4a",
        segments: [{ text: "They said: “Of course.”" }],
        issues: [],
        emptyIssueText: "こちらもいいですね！",
        praises: [],
      },
      {
        id: "08",
        audioSrc: "../audio/tomoko/tomoko_8.m4a",
        segments: [
          { text: "My biolog" },
          { text: "i", category: "vowel" },
          { text: "cal mother f" },
          { text: "ou", category: "vowel" },
          { text: "nd out later " },
          { text: "th", category: "consonant" },
          { text: "at my mother ne" },
          { text: "v", category: "consonant" },
          { text: "er gr" },
          { text: "a", category: "vowel" },
          { text: "duated " },
          { text: "f", category: "consonant" },
          { text: "rom college and " },
          { text: "th", category: "consonant" },
          { text: "at my father ne" },
          { text: "v", category: "consonant" },
          { text: "er gr" },
          { text: "a", category: "vowel" },
          { text: "duated " },
          { text: "f", category: "consonant" },
          { text: "rom high sch" },
          { text: "oo", category: "vowel" },
          { text: "l." },
        ],
        issues: [
          { category: "vowel", target: "i", text: "母音/ɪ/が落ちてしまっています。が、２行目のbiologicalより良くなっています。" },
          { category: "vowel", target: "ou", text: "二重母音/aʊ/に聞こえません。fʌndのように聞こえました😨" },
          { category: "consonant", target: "th", text: "that /ð/気をつけて〜💡" },
          { category: "consonant", target: "v", text: "/v/気をつけて〜💡" },
          { category: "vowel", target: "a", text: "/æ/の口の横の緊張が甘めです。" },
          { category: "consonant", target: "f", text: "/f/も気をつけて〜💡" },
          { category: "consonant", target: "th", text: "that /ð/気をつけて〜💡" },
          { category: "consonant", target: "v", text: "/v/気をつけて〜💡" },
          { category: "vowel", target: "a", text: "/æ/の口の横の緊張が甘めです。" },
          { category: "consonant", target: "f", text: "/f/も気をつけて〜💡" },
          { category: "vowel", target: "oo", text: "/u/は唇を思い切り突き出して。" },
        ],
        praises: [
          { target: "mother vs father / college vs high school", text: "mother vs father, college vs high schoolの対比がわかりやすいように読まれていて◎です。" },
        ],
      },
      {
        id: "09",
        audioSrc: "../audio/tomoko/tomoko_9.m4a",
        segments: [
          { text: "She refu" },
          { text: "s", category: "consonant" },
          { text: "ed to sign the final a" },
          { text: "dop", category: "intonation" },
          { text: "tion papers." },
        ],
        issues: [
          { category: "consonant", target: "s", text: "/z/が出ていません" },
          { category: "intonation", target: "dop", text: "finalが核のようになっています。adoptionのdopに第一強勢を置きましょう。famous movie starと同じイントネーションです。" },
        ],
        praises: [],
      },
      {
        id: "10",
        audioSrc: "../audio/tomoko/tomoko_10.m4a",
        segments: [
          { text: "She only relen" },
          { text: "ted", category: "consonant" },
          { text: " a few months later when my parents p" },
          { text: "r", category: "supplement" },
          { text: "omised that I would go to college." },
        ],
        issues: [
          { category: "consonant", target: "ted", text: "relenチッチャのように聞こえました。" },
        ],
        praises: [],
        supplements: [
          { target: "promised", text: "点は引きませんが/r/で舌先が歯茎に触れないよう注意⚠️" },
          { target: "I", text: "Iに強勢を置くところも見事に再現できていて素晴らしいです！" },
        ],
      },
    ],

  },
};

function countIssues(issues) {
  return issues.reduce((sum, issue) => sum + (issue.count ?? 1), 0);
}

function getStudentId() {
  return document.body.dataset.student;
}

function getScoreData(student) {
  const categoryCounts = { vowel: 0, consonant: 0, rhythm: 0, linking: 0, intonation: 0 };

  student.sentences.forEach((sentence) => {
    sentence.issues.forEach((issue) => {
      categoryCounts[issue.category] += issue.count ?? 1;
    });
  });

  const totalIssues = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0);
  const rawScore = student.baseScore - totalIssues * student.penaltyPerIssue;

  return {
    categoryCounts,
    totalIssues,
    rawScore,
    roundedScore: Math.round(rawScore),
  };
}

function setPageMeta(student, scoreData) {
  document.title = student.title;
  document.getElementById("page-title").textContent = student.title;
  document.getElementById("hero-display-word").textContent = student.heroWord;

  const hasReview = student.sentences.length > 0;
  const shownScore = student.displayScore ?? scoreData.roundedScore;
  document.getElementById("rounded-score").textContent = hasReview ? String(shownScore) : "DRAFT";
  document.getElementById("score-caption").textContent = `${student.evaluatedAt} | ${student.candidate}`;
}

function renderLegend() {
  const legend = document.getElementById("legend");
  Object.values(categoryMeta).forEach((meta) => {
    const item = document.createElement("article");
    item.className = "legend-item";
    item.style.setProperty("--accent", meta.color);
    item.innerHTML = `
      <div class="legend-swatch" style="--accent: ${meta.color}">${meta.label}</div>
      <p>${meta.description}</p>
    `;
    legend.appendChild(item);
  });
}

function renderSummary(student, scoreData) {
  const summary = document.getElementById("summary");
  Object.entries(categoryMeta).forEach(([key, meta]) => {
    const count = scoreData.categoryCounts[key];
    const card = document.createElement("article");
    card.className = "summary-card";
    card.innerHTML = `
      <div class="summary-value" style="color: ${meta.color}">${count}</div>
      <div class="summary-label">${meta.label}</div>
    `;
    summary.appendChild(card);
  });
}

function renderSentenceText(segments) {
  return segments
    .map((segment) =>
      segment.category
        ? `<span class="highlight" data-category="${segment.category}">${segment.text}</span>`
        : segment.text,
    )
    .join("");
}

function renderIssueItems(items, emptyText = "減点対象の指摘はありません。") {
  if (!items.length) {
    return `<p class="empty-note">${emptyText}</p>`;
  }

  return `
    <div class="note-list">
      ${items
        .map((item) => {
          const meta = categoryMeta[item.category];
          return `
            <div class="note-item">
              <span class="note-dot" style="background: ${meta.color};"></span>
              <p class="note-text"><span class="note-target">${item.target}</span>: ${item.text}</p>
            </div>
          `;
        })
        .join("")}
      </div>
    </section>
  `;
}

function renderPraiseItems(items) {
  if (!items.length) {
    return "";
  }

  return `
    <section class="praise-block">
      <p class="feedback-heading feedback-heading-positive">🎁良かった点</p>
      <div class="praise-list">
      ${items
        .map(
          (item) => `
            <div class="praise-item">
              <span class="praise-dot"></span>
              <p class="note-text"><span class="note-target">${item.target}</span>: ${item.text}</p>
            </div>
          `,
        )
        .join("")}
      </div>
    </section>
  `;
}

function renderSupplementItems(items) {
  if (!items?.length) {
    return "";
  }

  return `
    <section class="supplement-block">
      <p class="feedback-heading feedback-heading-supplement">💡 補足</p>
      <div class="praise-list">
      ${items
        .map(
          (item) => `
            <div class="praise-item">
              <span class="supplement-dot"></span>
              <p class="note-text"><span class="note-target">${item.target}</span>: ${item.text}</p>
            </div>
          `,
        )
        .join("")}
      </div>
    </section>
  `;
}

function renderEmptyState() {
  const results = document.getElementById("results");
  const card = document.createElement("article");
  card.className = "result-card pending-card";
  card.innerHTML = `
    <p class="pending-title">レビュー準備中</p>
    <p class="pending-copy">Tomokoさんのコメント、色分け対象、音声ファイルを追加するとこのページがそのまま完成版になります。</p>
    <p class="pending-copy">音声は <span class="pending-path">/audio/tomoko/</span> に置き、データは <span class="pending-path">app.js</span> の tomoko セクションに追加します。</p>
  `;
  results.appendChild(card);
}

function renderResults(student) {
  const results = document.getElementById("results");

  if (!student.sentences.length) {
    renderEmptyState();
    return;
  }

  student.sentences.forEach((sentence) => {
    const card = document.createElement("article");
    card.className = "result-card";
    card.innerHTML = `
      <div class="sentence-header">
        <div class="sentence-number">[${sentence.id}]</div>
      </div>
      <div class="audio-row">
        <p class="audio-label">Sentence Audio</p>
        <audio class="sentence-audio" controls preload="none" src="${sentence.audioSrc}"></audio>
      </div>
      <p class="sentence-text">${renderSentenceText(sentence.segments)}</p>
      <section class="feedback-box">
        <p class="feedback-heading feedback-heading-negative">ポイント</p>
        ${renderIssueItems(sentence.issues, sentence.emptyIssueText)}
      </section>
      ${renderSupplementItems(sentence.supplements)}
      ${renderPraiseItems(sentence.praises)}
    `;
    results.appendChild(card);
  });
}

function boot() {
  const student = studentPages[getStudentId()];
  if (!student) {
    return;
  }

  const scoreData = getScoreData(student);
  setPageMeta(student, scoreData);
  renderLegend();
  renderSummary(student, scoreData);
  renderResults(student);
}

boot();
