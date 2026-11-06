const TYPES = {
  otaku: {
    name: "つよびおたくタイプ",
    short: "つよびおたく",
    catch: "好きの熱で、誰かの人生に出会いを起こす人。",
    symbol: "✹",
    color: "#ff4b35",
    description:
      "あなたのイベントの主役は、愛してやまない“何か”。その魅力をまだ知らない人に手渡し、運命的な出会いをつくることに火がつきます。知識量よりも、好きの解像度と語る熱が最大の資産です。",
    quote: "「これの良さ、知らないままなの……もったいなくない？」",
    hints: [
      "テーマをひとつに絞り、入門者が“沼の入口”に立てる構成にする",
      "一方的に語るだけでなく、触る・聴く・試す体験を置く",
      "熱量を翻訳してくれる進行役と組むと、初見の人にも届きやすい",
    ],
  },
  zero: {
    name: "無重力タイプ",
    short: "無重力",
    catch: "理由より先に、面白そうが浮かび上がる人。",
    symbol: "◯",
    color: "#ffc72e",
    description:
      "あなたのイベントは、“やってみたら何か起きそう”から始まります。完成した企画書より、その場の勢いと偶然を信じる実験家。人の心を軽くし、思いつきを現実に変える初速を持っています。",
    quote: "「え、やりたい。今やろ。絶対。」",
    hints: [
      "まずは小さく日付を決め、90分の実験として始める",
      "余白のある進行と、参加者が選べる遊びを用意する",
      "締切と会計が得意な相棒を一人つけると、勢いが形になる",
    ],
  },
  napoleon: {
    name: "ナポレオンタイプ",
    short: "ナポレオン",
    catch: "孤独な違和感を、仲間の旗印に変える人。",
    symbol: "⚑",
    color: "#b8e63f",
    description:
      "あなたがイベントを開くのは、“自分だけじゃないはず”を確かめたいから。共通の課題や感覚に名前をつけ、同志が出会う場をつくります。参加者同士の関係が続くことに、いちばん深い手応えを感じます。",
    quote: "「この感覚を持っている人、きっと他にもいる。」",
    hints: [
      "共通の問いを明文化し、参加者同士が話す時間を中心に置く",
      "名刺交換より“なぜ来たか”を共有できる導入をつくる",
      "終了後の連絡先や次の一歩を用意し、つながりを場の外へ運ぶ",
    ],
  },
  shoshu: {
    name: "消臭力タイプ",
    short: "消臭力",
    catch: "“私”という世界観で、空気ごと変える人。",
    symbol: "◎",
    color: "#3157ff",
    description:
      "あなたにとってイベントは、自分の美学やエネルギーを空間に立ち上げる表現です。誰がやっても同じでは意味がない。“私だからつくれる体験”で人の感情や視点を動かすことに、強く惹かれます。",
    quote: "「アタイがつくる世界、ちょっと見てみない？」",
    hints: [
      "会場・言葉・音・ふるまいまで、一貫した世界観で編集する",
      "自分の原体験を核にして、参加者が入れる物語へひらく",
      "意図を実務に翻訳できる制作パートナーと組むと強い",
    ],
  },
};

const QUESTIONS = [
  {
    title: "ふと「イベントをやりたい」と思うのは、どんな瞬間？",
    answers: [
      ["otaku", "大好きなものに出会い、『みんなにも知ってほしい』と震えたとき"],
      ["zero", "面白そうなアイデアが降ってきて、もう止まれなくなったとき"],
      ["napoleon", "同じモヤモヤを持つ人が、自分以外にもいると気づいたとき"],
      ["shoshu", "頭の中の世界観を、現実の空間に立ち上げたくなったとき"],
    ],
  },
  {
    title: "企画を人に説明するとき、最初に出てくる言葉は？",
    answers: [
      ["zero", "『なんか絶対おもろい気がする！』"],
      ["shoshu", "『私にしかつくれない空気があって』"],
      ["otaku", "『まず、これのすごさを聞いて』"],
      ["napoleon", "『こういうこと感じてる人、他にもいるよね？』"],
    ],
  },
  {
    title: "会場を出る参加者に、いちばん起きてほしい変化は？",
    answers: [
      ["napoleon", "『自分だけじゃなかった』と思い、つながる相手ができる"],
      ["otaku", "知らなかった魅力に出会い、新しい沼の入口に立つ"],
      ["shoshu", "強い余韻が残り、ものの見方が少し変わる"],
      ["zero", "理屈抜きに『なんか楽しかった！』と軽くなる"],
    ],
  },
  {
    title: "準備中にいちばんテンションが上がるのは？",
    answers: [
      ["shoshu", "照明や音、言葉がつながって“あの空気”が見えた瞬間"],
      ["napoleon", "参加者同士が話したくなる問いや仕掛けを考える時間"],
      ["zero", "予定外の案が出て、企画がどんどん変な方向へ育つ時間"],
      ["otaku", "何をどう見せれば魅力が伝わるか、順番を磨く時間"],
    ],
  },
  {
    title: "予定より参加者が少ない。当日、どう捉える？",
    answers: [
      ["otaku", "むしろ一人ずつ、深く魅力を届けられる"],
      ["shoshu", "この人数だからこその濃度で、世界観を完成させる"],
      ["napoleon", "ここに来た人同士が、本音でつながれるようにしよう"],
      ["zero", "じゃあ全員で予定を変えて、別の面白さをつくろう"],
    ],
  },
  {
    title: "イベント終了後、いちばん何度も見返しそうなのは？",
    answers: [
      ["zero", "その場の笑いとハプニングが詰まった短い動画"],
      ["napoleon", "『次は一緒に何かやりたい』という参加者同士の会話"],
      ["shoshu", "会場全体の空気まで写った、美しい一枚の写真"],
      ["otaku", "『知らなかった。もっと知りたい』という感想"],
    ],
  },
  {
    title: "ひとつだけ誰かに任せられるなら、何を手放したい？",
    answers: [
      ["napoleon", "世界観を整えるデザインや演出"],
      ["zero", "締切や予算を守るための細かな進行管理"],
      ["otaku", "受付や申込みなど、魅力を語る以外の実務"],
      ["shoshu", "会計や備品など、表現の核から遠い運営業務"],
    ],
  },
  {
    title: "イベント名を考えるとき、優先したいのは？",
    answers: [
      ["shoshu", "見た瞬間に“この世界、気になる”と思わせる響き"],
      ["otaku", "扱うテーマの魅力が、初見でも伝わること"],
      ["zero", "声に出したときに笑える、妙な引っかかり"],
      ["napoleon", "同じ課題を持つ人が『自分のためだ』と気づけること"],
    ],
  },
  {
    title: "企画が煮詰まったとき、原点に戻るなら？",
    answers: [
      ["otaku", "そもそも、自分はこれの何に惚れたんだっけ？"],
      ["napoleon", "誰と、どんな問いを分かち合いたかったんだっけ？"],
      ["zero", "最初に『おもろそう』と思ったのは、どこだっけ？"],
      ["shoshu", "私は、どんな感情をこの空間に生みたかったんだっけ？"],
    ],
  },
  {
    title: "理想の主催者ポジションに近いのは？",
    answers: [
      ["zero", "最初のドミノを倒す人。あとはみんなで面白くする"],
      ["otaku", "最高の入口をつくるキュレーター兼・熱烈な案内人"],
      ["shoshu", "全体の体験を指揮するディレクター兼・表現者"],
      ["napoleon", "声を上げるきっかけをつくる、コミュニティの旗振り役"],
    ],
  },
  {
    title: "参加者から言われたら、最もうれしい一言は？",
    answers: [
      ["napoleon", "『ここで、やっと同じ話ができる人に会えた』"],
      ["shoshu", "『あなたがつくったから、こんな体験になったんだと思う』"],
      ["otaku", "『帰り道から、ずっとこれのことを調べてます』"],
      ["zero", "『何だったか説明できないけど、めちゃくちゃ楽しかった』"],
    ],
  },
  {
    title: "次のイベントをつくるなら、最初の一歩は？",
    answers: [
      ["shoshu", "頭の中にある景色やムードを、一枚の絵にしてみる"],
      ["zero", "とりあえず日付を決めて、友だちに『やろ』と送る"],
      ["napoleon", "同じ問題意識を持ちそうな人に、話を聞きにいく"],
      ["otaku", "誰かに見せたい“最高の一例”を選び抜く"],
    ],
  },
];

const state = {
  current: 0,
  answers: [],
  result: null,
  resultImagePromise: null,
};

const screens = [...document.querySelectorAll("[data-screen]")];
const questionTitle = document.getElementById("questionTitle");
const questionKicker = document.getElementById("questionKicker");
const answerGrid = document.getElementById("answerGrid");
const currentNumber = document.getElementById("currentNumber");
const totalNumber = document.getElementById("totalNumber");
const progressBar = document.getElementById("progressBar");
const progressTrack = document.querySelector(".progress-track");
const backButton = document.getElementById("backButton");
const toast = document.getElementById("toast");

totalNumber.textContent = String(QUESTIONS.length).padStart(2, "0");
progressTrack.setAttribute("aria-valuemax", QUESTIONS.length);

function showScreen(name) {
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = QUESTIONS[state.current];
  const displayNumber = String(state.current + 1).padStart(2, "0");

  currentNumber.textContent = displayNumber;
  questionKicker.textContent = `SCENE ${displayNumber}`;
  questionTitle.textContent = question.title;
  progressBar.style.width = `${((state.current + 1) / QUESTIONS.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", state.current + 1);
  backButton.disabled = state.current === 0;
  answerGrid.replaceChildren();

  question.answers.forEach(([type, label], index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = label;
    button.addEventListener("click", () => selectAnswer(type));
    answerGrid.appendChild(button);
  });
}

function selectAnswer(type) {
  state.answers[state.current] = type;
  if (state.current < QUESTIONS.length - 1) {
    state.current += 1;
    renderQuestion();
    document.querySelector(".question-stage").animate(
      [
        { opacity: 0, transform: "translateX(12px)" },
        { opacity: 1, transform: "translateX(0)" },
      ],
      { duration: 240, easing: "ease-out" },
    );
  } else {
    calculateResult();
  }
}

function calculateResult() {
  const scores = Object.fromEntries(Object.keys(TYPES).map((key) => [key, 0]));
  state.answers.forEach((type) => {
    scores[type] += 1;
  });

  const tieOrder = ["otaku", "zero", "napoleon", "shoshu"];
  const ranked = Object.keys(scores).sort(
    (a, b) => scores[b] - scores[a] || tieOrder.indexOf(a) - tieOrder.indexOf(b),
  );

  state.result = { primary: ranked[0], secondary: ranked[1], scores };
  renderResult();
  showScreen("result");
}

function renderResult() {
  const { primary, secondary, scores } = state.result;
  const data = TYPES[primary];
  const secondaryData = TYPES[secondary];
  const scoreDifference = scores[primary] - scores[secondary];

  document.getElementById("resultTitle").textContent = data.name;
  document.getElementById("resultCatch").textContent = data.catch;
  document.getElementById("resultSymbol").textContent = data.symbol;
  document.getElementById("resultDescription").textContent = data.description;
  document.getElementById("resultQuote").textContent = data.quote;
  document.getElementById("resultMainCard").dataset.type = primary;

  const hybridNote = document.getElementById("hybridNote");
  hybridNote.textContent =
    scoreDifference <= 1
      ? `かなりのハイブリッド型。副タイプの「${secondaryData.short}」も同じくらい強く、状況によって開催のエンジンが切り替わります。`
      : `副タイプは「${secondaryData.short}」。${data.short}の動機に、このタイプの要素を足すと企画が動きやすくなります。`;

  const scoreBars = document.getElementById("scoreBars");
  scoreBars.replaceChildren();

  Object.keys(TYPES)
    .sort((a, b) => scores[b] - scores[a])
    .forEach((key) => {
      const percentage = Math.round((scores[key] / QUESTIONS.length) * 100);
      const row = document.createElement("div");
      row.className = "score-row";
      row.innerHTML = `
        <div class="score-meta"><span></span><span>${percentage}%</span></div>
        <div class="score-track"><div class="score-fill" style="width: ${percentage}%; background: ${TYPES[key].color}"></div></div>
      `;
      row.querySelector(".score-meta span").textContent = TYPES[key].short;
      scoreBars.appendChild(row);
    });

  const resultHints = document.getElementById("resultHints");
  resultHints.replaceChildren();
  data.hints.forEach((hint) => {
    const item = document.createElement("li");
    item.textContent = hint;
    resultHints.appendChild(item);
  });

  state.resultImagePromise = createResultImageBlob();

  const params = new URLSearchParams(window.location.search);
  params.set("result", primary);
  history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
}

function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";

  [...text].forEach((character) => {
    const testLine = line + character;
    if (line && ctx.measureText(testLine).width > maxWidth) {
      lines.push(line);
      line = character;
    } else {
      line = testLine;
    }
  });

  if (line) lines.push(line);
  return lines;
}

function drawCanvasLines(ctx, lines, x, y, lineHeight, maxLines = lines.length) {
  lines.slice(0, maxLines).forEach((line, index) => {
    ctx.fillText(line, x, y + index * lineHeight);
  });
}

async function createResultImageBlob() {
  if (!state.result) throw new Error("診断結果がありません");
  if (document.fonts?.ready) {
    await Promise.race([
      document.fonts.ready,
      new Promise((resolve) => window.setTimeout(resolve, 1500)),
    ]);
  }

  const { primary, secondary, scores } = state.result;
  const data = TYPES[primary];
  const secondaryData = TYPES[secondary];
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;

  const ctx = canvas.getContext("2d");
  const ink = "#171713";
  const paper = "#f4efdf";
  const white = "#fffdf4";
  const blue = "#3157ff";
  const typeColor = data.color;
  const typeInk = primary === "shoshu" ? white : ink;

  ctx.fillStyle = paper;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = ink;
  ctx.lineWidth = 4;
  ctx.strokeRect(38, 38, 1004, 1274);

  ctx.fillStyle = "#ffc72e";
  ctx.beginPath();
  ctx.arc(92, 92, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = ink;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = '900 30px "Zen Kaku Gothic New", sans-serif';
  ctx.fillText("欲", 92, 92);

  ctx.textAlign = "left";
  ctx.font = '500 22px "DM Mono", monospace';
  ctx.fillText("EVENT MOTIVE LAB.", 144, 82);
  ctx.font = '400 17px "DM Mono", monospace';
  ctx.fillText("12 QUESTIONS / 4 MOTIVES", 144, 108);

  ctx.font = '700 28px "Zen Kaku Gothic New", sans-serif';
  ctx.fillText("あなたのイベント開催欲求は——", 68, 185);

  ctx.fillStyle = typeColor;
  ctx.fillRect(68, 222, 944, 390);
  ctx.strokeStyle = ink;
  ctx.strokeRect(68, 222, 944, 390);

  ctx.fillStyle = typeInk;
  ctx.globalAlpha = 0.2;
  ctx.textAlign = "right";
  ctx.font = '900 260px "Zen Kaku Gothic New", sans-serif';
  ctx.fillText(data.symbol, 980, 385);
  ctx.globalAlpha = 1;

  ctx.textAlign = "left";
  ctx.fillStyle = typeInk;
  ctx.font = '500 20px "DM Mono", monospace';
  ctx.fillText("YOUR EVENT MOTIVE", 108, 275);
  ctx.font = '900 86px "Zen Kaku Gothic New", sans-serif';
  ctx.fillText(data.short, 106, 392);
  ctx.font = '900 28px "Zen Kaku Gothic New", sans-serif';
  drawCanvasLines(ctx, wrapCanvasText(ctx, data.catch, 770), 108, 468, 48, 2);

  ctx.strokeStyle = typeInk;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(108, 545);
  ctx.lineTo(972, 545);
  ctx.stroke();
  ctx.font = '700 24px "Zen Kaku Gothic New", sans-serif';
  drawCanvasLines(ctx, wrapCanvasText(ctx, data.quote, 820), 108, 580, 38, 2);

  ctx.fillStyle = ink;
  ctx.font = '500 19px "DM Mono", monospace';
  ctx.fillText("MOTIVE BLEND", 68, 675);
  ctx.font = '900 31px "Zen Kaku Gothic New", sans-serif';
  ctx.fillText("欲求の配合", 68, 721);

  Object.keys(TYPES)
    .sort((a, b) => scores[b] - scores[a])
    .forEach((key, index) => {
      const y = 770 + index * 84;
      const percentage = Math.round((scores[key] / QUESTIONS.length) * 100);
      ctx.fillStyle = ink;
      ctx.font = '700 23px "Zen Kaku Gothic New", sans-serif';
      ctx.fillText(TYPES[key].short, 68, y);
      ctx.textAlign = "right";
      ctx.font = '500 22px "DM Mono", monospace';
      ctx.fillText(`${percentage}%`, 1012, y);
      ctx.textAlign = "left";

      ctx.fillStyle = white;
      ctx.strokeStyle = ink;
      ctx.lineWidth = 3;
      ctx.fillRect(302, y - 22, 610, 28);
      ctx.strokeRect(302, y - 22, 610, 28);
      ctx.fillStyle = TYPES[key].color;
      ctx.fillRect(304, y - 20, (606 * percentage) / 100, 24);
    });

  ctx.fillStyle = white;
  ctx.strokeStyle = ink;
  ctx.lineWidth = 3;
  ctx.fillRect(68, 1090, 944, 120);
  ctx.strokeRect(68, 1090, 944, 120);
  ctx.fillStyle = blue;
  ctx.font = '500 17px "DM Mono", monospace';
  ctx.fillText("SECOND MOTIVE", 96, 1126);
  ctx.fillStyle = ink;
  ctx.font = '900 25px "Zen Kaku Gothic New", sans-serif';
  ctx.fillText(`副タイプは「${secondaryData.short}」`, 96, 1173);

  ctx.font = '500 17px "DM Mono", monospace';
  ctx.fillText("EVENT MOTIVE LAB.  /  イベント開催欲求診断", 68, 1250);
  ctx.font = '400 14px "DM Mono", monospace';
  ctx.fillText("yuzuran0902-crypto.github.io/event-motivation-diagnosis", 68, 1284);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("画像を生成できませんでした"));
    }, "image/png");
  });
}

function downloadResultImage(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function saveResultImage() {
  const button = document.getElementById("saveImageButton");
  const originalLabel = button.firstElementChild.textContent;
  button.disabled = true;
  button.firstElementChild.textContent = "画像を作成中…";

  try {
    const blob = await (state.resultImagePromise || createResultImageBlob());
    const fileName = `event-motive-${state.result.primary}.png`;
    const file = new File([blob], fileName, { type: "image/png" });
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile && navigator.canShare?.({ files: [file] })) {
      showToast("共有メニューで「画像を保存」を選んでください");
      await navigator.share({ files: [file], title: "イベント開催欲求診断の結果" });
    } else if (window.showSaveFilePicker) {
      const handle = await window.showSaveFilePicker({
        suggestedName: fileName,
        startIn: "pictures",
        types: [{ description: "PNG画像", accept: { "image/png": [".png"] } }],
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      showToast("結果画像を保存しました");
    } else if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file], title: "イベント開催欲求診断の結果" });
    } else {
      downloadResultImage(blob, fileName);
      showToast("結果画像をPNGでダウンロードしました");
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error);
      showToast("保存できませんでした。もう一度お試しください");
    }
  } finally {
    button.disabled = false;
    button.firstElementChild.textContent = originalLabel;
  }
}

async function shareResult() {
  const data = TYPES[state.result.primary];
  const button = document.getElementById("shareButton");
  const originalLabel = button.textContent;
  const shareData = {
    title: "イベント開催欲求診断",
    text: `私のイベント開催欲求は「${data.name}」でした！\n${data.catch}`,
    url: window.location.href,
  };

  button.disabled = true;
  button.textContent = "画像を作成中…";

  try {
    const blob = await (state.resultImagePromise || createResultImageBlob());
    const file = new File([blob], `event-motive-${state.result.primary}.png`, {
      type: "image/png",
    });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: shareData.title,
        text: `${shareData.text}\n${shareData.url}`,
      });
      showToast("結果画像のシェア画面を開きました");
    } else if (navigator.share) {
      await navigator.share(shareData);
      showToast("シェア画面を開きました");
    } else {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      showToast("結果とURLをコピーしました");
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      showToast("シェアできませんでした。URLをコピーしてお使いください");
    }
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
}

function showToast(message) {
  toast.textContent = message;
  window.setTimeout(() => {
    toast.textContent = "";
  }, 3200);
}

function restart() {
  state.current = 0;
  state.answers = [];
  state.result = null;
  state.resultImagePromise = null;
  history.replaceState(null, "", window.location.pathname);
  renderQuestion();
  showScreen("intro");
}

document.getElementById("startButton").addEventListener("click", () => {
  renderQuestion();
  showScreen("quiz");
});

backButton.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

document.getElementById("shareButton").addEventListener("click", shareResult);
document.getElementById("saveImageButton").addEventListener("click", saveResultImage);
document.getElementById("restartButton").addEventListener("click", restart);

const sharedResult = new URLSearchParams(window.location.search).get("result");
if (sharedResult && TYPES[sharedResult]) {
  document.querySelector(".hero-lead").insertAdjacentHTML(
    "afterend",
    `<p class="micro-copy">シェアされた結果：<strong>${TYPES[sharedResult].name}</strong></p>`,
  );
}
