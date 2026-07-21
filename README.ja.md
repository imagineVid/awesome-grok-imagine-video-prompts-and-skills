<a href="https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills">
  <img src="public/images/grok-imagine-video-prompt-skills-cover.png" alt="Grok Imagine Video Prompt Skills" width="100%" />
</a>

> Grok Imagine Videoのショットブリーフ、モーションパターン、視聴覚ワークフローを集めた、出典を検証できるライブラリ。
# Awesome Grok Imagine Video Prompts & Skills

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills?style=social)](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/actions/workflows/update-readme.yml/badge.svg)](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> ブリーフを読み、結果を見て、クリエイターをたどり、表面的なスタイルではなく演出ロジックを再利用しましょう。

> **クレジットと訂正：** 公開された各ケースには、クリエイターと正規の出典へのリンクがあります。権利は各権利者に帰属します。クレジットの変更や削除はissueでお知らせください。

---

[![English](https://img.shields.io/badge/English-Click%20to%20View-lightgrey)](README.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Click%20to%20View-lightgrey)](README.es.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Click%20to%20View-lightgrey)](README.pt.md) [![Italiano](https://img.shields.io/badge/Italiano-Click%20to%20View-lightgrey)](README.it.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Click%20to%20View-lightgrey)](README.de.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Click%20to%20View-lightgrey)](README.fr.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Click%20to%20View-lightgrey)](README.ar.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Current-brightgreen)](README.ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Click%20to%20View-lightgrey)](README.ko.md) [![中文](https://img.shields.io/badge/%E4%B8%AD%E6%96%87-Click%20to%20View-lightgrey)](README.zh.md)
[![Nederlands](https://img.shields.io/badge/Nederlands-Click%20to%20View-lightgrey)](README.nl.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Click%20to%20View-lightgrey)](README.ru.md) [![Türkçe](https://img.shields.io/badge/T%C3%BCrk%C3%A7e-Click%20to%20View-lightgrey)](README.tr.md) [![Polski](https://img.shields.io/badge/Polski-Click%20to%20View-lightgrey)](README.pl.md)

---

## Grok Imagine Videoで制作する

**[ImagineVidでGrok Imagineワークフローを開く](https://imaginevid.io/ja/grok-imagine)**

このリポジトリで、クリエイターの指示と生成された動きを比較できます。ショットの文法を新しいクリップに応用する準備ができたらImagineVidを開いてください。

人気はエビデンスではありません。完全なプロンプトと有用な動画を備えた低反応の投稿は、再現可能な指示のないバイラルなショーケースより高く評価されることがあります。

| 制作上のニーズ | エビデンスライブラリ | ImagineVidワークフロー |
|---------|--------------|---------------------|
| ケースレビュー | プロンプト、結果、出典 | 生成して比較 |
| ディスカバリー | リポジトリ内テキスト検索 | ワークフローから探す |
| 生成 | - | Grok Imagineを開く |
| 閲覧 | GitHubネイティブMarkdown | ブラウザ制作ワークスペース |
| ビデオワークフロー | - | 制作フィルター |


### 制作ワークフローから探す

- [**カメラ演出とショット設計**](#workflow-camera-direction-shot-design) - フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。
- [**台詞、演技、ネイティブ音声**](#workflow-dialogue-performance-native-audio) - 台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。
- [**プロダクトモーションとCMスポット**](#workflow-product-motion-commercial-spots) - 製品、オファー、衣装、料理、デバイス、ブランドの瞬間を動きの中心に据えるCMクリップ。
- [**画像から動画と被写体の連続性**](#workflow-image-to-video-subject-continuity) - 静止画を動かしながら、人物の同一性、構図、製品形状、絵コンテのレイアウトを保つ画像起点のワークフロー。
- [**スタイライズドモーションと視覚効果**](#workflow-stylized-motion-visual-effects) - 変形、シミュレーション、シュールな物理、グラフィックモーション、独自のメディア処理によるエフェクトとアニメーションのパターン。
- [**動画編集、リスタイル、シーン制御**](#workflow-video-editing-restyling-scene-control) - 連続性を守りながら、既存映像のスタイル変更、延長、追加、削除、置換、シーンの方向変更を行うワークフロー。

---

## 目次

- [Grok Imagine Videoで制作する](#grok-imagine-videoで制作する)
- [Grok Imagine Videoとは？](#grok-imagine-videoとは)
- [コレクションの状態](#コレクションの状態)
- [注目のビデオプロンプト](#community-featured-prompts)
- [コミュニティのビデオプロンプト](#community-prompt-cases)
- [検証済みケースを投稿する](#検証済みケースを投稿する)
- [ライセンス](#ライセンス)
- [クリエイタークレジット](#クリエイタークレジット)
- [リポジトリの成長](#リポジトリの成長)

---

## Grok Imagine Videoとは？

**Grok Imagine Video**は、テキスト、画像、元映像から短い動画を生成・編集するxAIのシステムです。音声も結果の一部として生成されます。現在の`grok-imagine-video-1.5`モデルはxAI APIから一般利用できます。xAIはこのリリースについて、動き、物理的な一貫性、音声、効果音、環境音、生成速度が改善されたと説明しています。

実用的なプロンプトでは、各リクエストをムードボードではなくショットブリーフとして扱います。見える動作、カメラの挙動、ビートのタイミング、音の設計、そして安定させる対象を明記してください。以下のケースではクリエイターのプロンプトを結果の横に置き、役立つ演出と装飾的な言い回しを見分けられるようにしています。

- **テキストまたはフレームから始める** - 書かれたシーンから生成するか、構図をすでに持つ画像を動かす
- **観察できる動きを指示する** - ブロッキング、勢い、物体の相互作用、各動作が生む物理的な結果を説明する
- **あらすじではなくビートを書く** - タイミングや見せ場が重要ならタイムスタンプまたは短い動作列を使う
- **シーンと一緒に音を生成する** - 音声が物語の一部なら台詞、環境音、音楽、効果音を含める
- **既存映像を編集する** - クリップのスタイルを変え、シーンの条件を変更し、見える要素を追加・削除・置換する
- **連続性を明示的に守る** - 顔、製品形状、レイアウト、衣装、背景のうち、変化させてはいけないものを指定する

**現在の参考資料：** [xAI Video 1.5 release](https://x.ai/news/grok-imagine-video-1-5) · [xAI model documentation](https://docs.x.ai/developers/models/grok-imagine-video) · [Grok Imagine on ImagineVid](https://imaginevid.io/ja/grok-imagine)

### プロンプトをショットテンプレートに変える

再利用可能な動画プロンプトでは、シーンの変数と演出ロジックを分けます。被写体、場所、台詞、製品を置き換えながら、検証済みのカメラパス、ビート構成、音の設計、連続性ルールを保ちます。

**テンプレート例：**
```
[DURATION + ASPECT RATIO]。[SUBJECT]が[SETTING]で[VISIBLE ACTION]を行う。カメラ： [FRAMING + MOVE]。Beats: [TIMED ACTIONS]。音声： [DIALOGUE + FOLEY + AMBIENCE]。Preserve: [IDENTITY / PRODUCT / LAYOUT]。Avoid: [FAILURE MODES]。
```

まず1つの動作と1つのカメラアイデアから始めます。時間、音、保持条件は目に見える制作上の課題を解決するときだけ加え、生成ごとに1つの変数だけを変えてください。

---

## コレクションの状態

<div align="center">

| コレクション項目 | 現在値 |
|--------|-------|
| 検証済みケース | **17** |
| 編集部のおすすめ | **4** |
| 生成日時 | **2026年7月21日火曜日 17:16:25 UTC** |

</div>

---

<a id="community-featured-prompts"></a>

## 注目のビデオプロンプト

> 再現性、動きの明瞭さ、制作上の有用性で選定

<a id="prompt-1"></a>

### #1: 高速宇宙船ディテール・モンタージュとハードトランジション

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### このワークフローが重要な理由

毎秒、新しい宇宙船のディテールと大胆なズーム動作を割り当て、フェードを明確に禁止する、複数シーンのテンポを試す短いテスト。

#### ローカライズ済みプロンプト

```
超高速飛行。複数シーンでテンポの速い実写動画を作成する。毎秒、宇宙船の異なるディテールへ鋭いズームインとズームアウトを行う。鋭いシーン転換を使い、フェードは使わない。
```

<details>
<summary>元のソースプロンプト</summary>

```
Ultra-fast flight. Create a multi-scene, fast-paced live-action video. Use sharp zoom-ins and zoom-outs on different details of the spacecraft every second. Sharp scene transitions, no fade.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2044049267589816320/vid/avc1/1280x720/NSIhpjHgXuMxvVlN.mp4?tag=24"><img src="https://pbs.twimg.com/amplify_video_thumb/2044049267589816320/img/pMWIqfLwp11wbUs4.jpg" height="420" alt="高速宇宙船ディテール・モンタージュとハードトランジション - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2044049267589816320/vid/avc1/1280x720/NSIhpjHgXuMxvVlN.mp4?tag=24)**
</div>

#### エビデンス

- **クリエイター:** [Dogan Ural](https://x.com/doganuraldesign)
- **正規の出典:** [正規の出典](https://x.com/doganuraldesign/status/2044049325299204120)
- **公開日:** 2026年4月14日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-3"></a>

### #2: スローモーションのシリアル爆発と台詞・サウンドデザイン

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### このワークフローが重要な理由

広角構図、スローモーションの粒子、話し声のリアクション、具体的なフォーリー、音楽の方向性を組み合わせた楽しい朝食スポット。

#### ローカライズ済みプロンプト

```
居心地のよいレトロなダイナー風キッチンのシネマティックな広角ショット。少女が色鮮やかなシリアルのボウルに身を乗り出すと、ミルクが劇的なスローモーションで上へ弾ける。明るいシリアルの輪が顔の周りに浮かぶ。彼女は目を大きく見開き、口を開けた驚きと喜びの表情でカメラをまっすぐ見る。ブラインド越しに暖かな朝日が差し込む。魚眼レンズの歪み、リアルな照明、高いディテール、ダイナミックな動き、楽しい映画的な雰囲気。長さ： 10秒。

台詞： えっ……朝ごはん、本当に飛んでるの？

音響設計：

突然のミルクの水しぶき。
軽いシリアルの散乱音。
柔らかな魔法のきらめき音。
少女の驚いた息。
楽しく弾むBGM。
```

<details>
<summary>元のソースプロンプト</summary>

```
A cinematic wide angle shot inside a cozy retro diner style kitchen. A young girl leans over a bowl of colorful cereal as milk bursts upward in dramatic slow motion. Bright cereal loops float through the air around her face. She looks directly at the camera with wide eyes and an open-mouth expression of surprise and delight. Warm morning sunlight streams through the blinds. The scene has a playful, magical, energetic feel, with fisheye lens distortion, realistic lighting, high detail, dynamic motion, and a fun cinematic vibe. Duration: 10 seconds.

Dialogue:  Whoa… is my breakfast actually flying?

Sound Design:

Sudden milk splash.
Light cereal scattering sounds.
Soft magical sparkle effect.
Girl’s surprised gasp.
Fun playful background music.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2069395437908643841/vid/avc1/1280x704/HpEN37WNo_J8Cw9v.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2069395437908643841/img/g-URoeS90azUiBUG.jpg" height="420" alt="スローモーションのシリアル爆発と台詞・サウンドデザイン - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2069395437908643841/vid/avc1/1280x704/HpEN37WNo_J8Cw9v.mp4?tag=25)**
</div>

#### エビデンス

- **クリエイター:** [BMX](https://x.com/bmx_ai13)
- **正規の出典:** [正規の出典](https://x.com/bmx_ai13/status/2069395522088030511)
- **公開日:** 2026年6月23日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-5"></a>

### #3: 同期したスラップスティック音声のワンショット人形格闘

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### このワークフローが重要な理由

開始時のアリーナを固定し、連続する反撃を演出し、台詞、衝撃の動き、観客音、道具のフォーリーを指定する画像から動画へのアクションブリーフ。

#### ローカライズ済みプロンプト

```
10s / image-to-video / ワンカット連続ショット / ネイティブ音声 / 16:9

添付画像を正確な最初のフレームとして使う。PuppetFightのアリーナ、鮮やかなホットピンクのリングロープ、叫ぶ人形の観客、強い頭上スポットライト、ざらついたリング床、爆ぜる詰め物、混沌とした地下格闘の熱気を維持する。左側ではTina Tornadoが宙に浮き、ワイルドな髪とピンクのカーラーをなびかせ、壊れた折りたたみ椅子を握る。右側では黒いサングラスをかけた骸骨グローブのパンクボクサーが彼女に凶暴なパンチを繰り出し、布切れ、ほこり、詰め物が空中へ弾ける。

すでにパンチが当たっているフレームから正確に始める。パンチがさらに押し込み、Tinaを横へねじり、破片が外へ爆発する。彼女は激しく、馬鹿げた勢いで跳ね返り、折りたたみ椅子を振り上げて「Cheap shot, skull boy!」と叫ぶ。続けて椅子を上へ乱暴に振り、「I brought furniture!」と叫ぶ。椅子がボクサーをかすめ、詰め物がカメラへ飛び、ピンクのロープが揺れ、観客が沸き、ショットは完全な大混乱で終わる。

動き： 高速ハンドヘルドカメラ、激しいプッシュイン、衝撃の揺れ、鞭のようなリフレーミング、ロープの振動、飛び散る詰め物、椅子の揺れ、誇張された人形の物理、残酷なスラップスティックの勢い。

音声： 咆哮する人形の観客、短く明瞭なリップシンク、パンチの衝撃音、椅子の金属音、ロープの弾ける音、詰め物の破裂音、アリーナの低音ヒット、混沌とした観客の反応。
```

<details>
<summary>元のソースプロンプト</summary>

```
10s / image-to-video / one continuous shot / native audio / 16:9

Use the attached image as the exact first frame. Preserve the PuppetFight arena, hot-pink ring ropes, screaming puppet crowd, harsh overhead spotlights, gritty ring floor, exploding stuffing, and chaotic underground fight energy. Tina Tornado is on the left, airborne, wild hair and pink curlers flying, gripping a busted folding chair. On the right, the skull-gloved punk boxer in black sunglasses drives a savage punch into her as fabric scraps, dust, and stuffing burst through the air.

Start exactly on the frame with the hit already connecting. The punch drives harder and sends Tina twisting sideways while debris explodes outward. She snaps back with fierce, ridiculous energy, whipping the folding chair into position and yelling, “Cheap shot, skull boy!” She then swings the chair upward in a wild, messy counterattack and shouts, “I brought furniture!” The chair clips the boxer as stuffing blasts toward camera, the pink ropes shake, the crowd erupts, and the shot ends in full chaotic mayhem.

Motion: fast handheld camera, aggressive push-in, impact shakes, whip-like reframing, rope vibration, flying stuffing, chair wobble, exaggerated puppet physics, brutal slapstick energy.

Audio: roaring puppet crowd, short clear lip sync, punch impacts, chair clanks, rope twangs, stuffing pops, arena bass hit, chaotic crowd reaction.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2062228478255116288/vid/avc1/1920x1080/ibkEHfzs5STuofwh.mp4?tag=27"><img src="https://pbs.twimg.com/amplify_video_thumb/2062228478255116288/img/iKuXlfkdwHozEcZp.jpg" height="420" alt="同期したスラップスティック音声のワンショット人形格闘 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2062228478255116288/vid/avc1/1920x1080/ibkEHfzs5STuofwh.mp4?tag=27)**
</div>

#### エビデンス

- **クリエイター:** [Krista Gable](https://x.com/DomainDomme)
- **正規の出典:** [正規の出典](https://x.com/DomainDomme/status/2062228580851974229)
- **公開日:** 2026年6月3日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-11"></a>

### #4: 5つのタイムドCMショットで見せる高級香水

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### このワークフローが重要な理由

ガラスのマクロディテールから花びら、液体の動き、霧状の蒸気、最後のヒーロー構図へ進む10秒のプロダクトフィルム。

#### ローカライズ済みプロンプト

```
10秒のシネマティックな高級香水CM。フォトリアル、16:9、ハイファッション広告スタイル。

シーン： 光沢のある黒い反射面、空気中の柔らかな霧、暗闇を切り裂く劇的なスポットライトの光線がある、暗くエレガントなスタジオ。
ミニマルでラグジュアリーなデザイン、優雅なブランドラベル、透明なガラス、内部の黄金色の液体、超リアルな反射を備えた高級ガラス香水ボトルを中央に置く。

0–2s: 香水ボトルの極端なマクロクローズアップ。光がガラスの縁を滑り、黄金色の液体がきらめく。シネマティックな影と高級ファッション広告の照明。
2–4s: スローモーション。繊細な花びら（バラ、ジャスミン）が現れてボトルの周囲を舞い、柔らかな霧が流れ、粒子が光線の中で輝く。
4–6s: ボトル内の液体が生きているようにそっと動き、黄金の粒子が上昇し、キャップがスローモーションで少し浮く。控えめなマジックリアリズム。
6–8s: 香水スプレーがスローモーションで空中へ弾け、流れる絹のような蒸気と花の形へ変わる。優雅でシュールなビューティーショット。
8–10s: 最終ヒーローショット。反射面の中央にボトルを置き、柔らかく光る霧と花びらで囲む。劇的なスポットライト、ラグジュアリーブランドへの集中、ハイファッションCMの締め。

超リアル、シネマティックな照明、高級広告、マクロディテール、ガラスの反射、スローモーション、被写界深度、柔らかな光、フィルム品質、エレガント、高級感のある美学。テキストオーバーレイなし、字幕なし。
```

<details>
<summary>元のソースプロンプト</summary>

```
10-second cinematic luxury perfume commercial, photorealistic, 16:9, high-fashion advertisement style.

Scene: a dark elegant studio with glossy black reflective surface, soft mist in the air, and dramatic spotlight beams cutting through the darkness.
A premium glass perfume bottle with a minimalist luxury design and a visible elegant brand label sits at the center, crystal-clear glass, golden liquid inside, ultra realistic reflections.

0–2s: extreme close-up macro shot of the perfume bottle, light glides across the glass edges, golden liquid shimmering, cinematic shadows, high-end fashion ad lighting.

2–4s: slow motion — delicate flower petals (rose, jasmine) appear and swirl around the bottle, soft mist flowing, particles glowing in light beams.

4–6s: liquid inside the bottle gently moves as if alive, golden particles rise, cap lifts slightly in slow motion, subtle magical realism effect.

6–8s: perfume spray bursts into the air in slow motion, transforming into flowing silk-like vapor and floral shapes, elegant and surreal, cinematic beauty shot.

8–10s: final hero shot — bottle centered on reflective surface, surrounded by soft glowing mist and petals, dramatic spotlight, luxury brand focus, high-fashion commercial ending.

ultra realistic, cinematic lighting, luxury advertisement, macro detail, glass reflections, slow motion, depth of field, soft glow, film quality, elegant, premium aesthetic, no text overlay, no subtitles.
```

</details>

#### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2038574681377447936/vid/avc1/1300x720/yOgaI_BSFPBmI_5L.mp4?tag=24"><img src="https://pbs.twimg.com/amplify_video_thumb/2038574681377447936/img/e5gg6UBuoz2e7u6J.jpg" height="420" alt="5つのタイムドCMショットで見せる高級香水 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2038574681377447936/vid/avc1/1300x720/yOgaI_BSFPBmI_5L.mp4?tag=24)**
</div>

#### エビデンス

- **クリエイター:** [Mr Das](https://x.com/MrDasOnX)
- **正規の出典:** [正規の出典](https://x.com/MrDasOnX/status/2038574814378783159)
- **公開日:** 2026年3月30日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="community-prompt-cases"></a>

## コミュニティのビデオプロンプト

> 出典の日付と編集上の価値の順.

<a id="workflow-camera-direction-shot-design"></a>

### カメラ演出とショット設計 (2)

フレーミング、カメラパス、ブロッキング、テンポ、見せ場、トランジションを軸にしたショットブリーフ。

**注目のビデオプロンプト**

- [高速宇宙船ディテール・モンタージュとハードトランジション](#prompt-1)

<a id="prompt-2"></a>

#### #1: 小さなカメラマンの机上ランとタイムド・ビート

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

タイムスタンプ、スケールの基準、ハンドヘルドの追跡、音の合図、きれいなヒーローショットの終わり方を使う4ビートのミニチュア追走劇。

##### ローカライズ済みプロンプト

```
16:9、15秒のシネマティックな動画を作成する。巨大なコンテンツクリエイターの机を走る、身長3インチの小さなカメラマンのPOV。0–4s：都市の建物のように巨大なキーボードのキーを駆け抜ける。4–8s：ネオンのポータルのように光るスマートフォン画面の下を滑る。8–12s：上向きに撮影しながら巨大な塔のようなコーヒーカップの周囲を回る。12–15s：ノートに飛び乗り、カメラを視聴者へ向け、机の世界が劇的なヒーローショットで静止する。暖かな日差し、リアルなミニチュア感、滑らかなハンドヘルド追跡、遊び心のあるクリエイターのエネルギー。音声： 小さな足音、カメラのクリック音、柔らかな風切り音、明るい電子ビート。文字、字幕、ロゴは入れない。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create a 15 second cinematic video in 16:9. From the POV of a tiny 3 inch cameraman running across a giant content creator’s desk. 0–4s: he sprints past huge keyboard keys like city buildings. 4–8s: he slides under a glowing phone screen that feels like a neon portal. 8–12s: he circles a coffee cup like a massive tower while filming upward. 12–15s: he jumps onto a notebook, points the camera at the viewer, and the desk world freezes in a dramatic hero shot. Warm sunlight, realistic miniature scale, smooth handheld tracking, playful creator energy. Audio: tiny footsteps, camera clicks, soft whooshes, upbeat electronic beat. No text, no subtitles, no logos.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2073857585468592128/vid/avc1/1280x720/rxriKyCHdrthsjfO.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2073857585468592128/img/ejoH2fAT7J9Pt6Xk.jpg" height="420" alt="小さなカメラマンの机上ランとタイムド・ビート - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2073857585468592128/vid/avc1/1280x720/rxriKyCHdrthsjfO.mp4?tag=25)**
</div>

##### エビデンス

- **クリエイター:** [BMX](https://x.com/bmx_ai13)
- **正規の出典:** [正規の出典](https://x.com/bmx_ai13/status/2073857648848716232)
- **公開日:** 2026年7月5日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="workflow-dialogue-performance-native-audio"></a>

### 台詞、演技、ネイティブ音声 (4)

台詞、演技、環境音、音楽、同期音がシーンを動かすパフォーマンス中心のプロンプト。

**注目のビデオプロンプト**

- [スローモーションのシリアル爆発と台詞・サウンドデザイン](#prompt-3)
- [同期したスラップスティック音声のワンショット人形格闘](#prompt-5)

<a id="prompt-4"></a>

#### #2: 間と微表情で進む微妙な口論

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

簡潔な台詞、顔のニュアンス、レンズ、照明、意図的な間で感情演出を試す、抑制されたパフォーマンスブリーフ。

##### ローカライズ済みプロンプト

```
怒っているカップルの感情的なシーンを作成する。短くパンチのある台詞、適切で微妙な微表情、キーライトのフィルを使った暖色のカラーグレーディング、アナモルフィックレンズ。画面上の文字は入れない。感情は複雑だが微妙に、適切なアングルで。インディー映画のドラマ感を持つ若いアメリカ人カップル。怒りと間によって幅広い感情を表現する。
```

<details>
<summary>元のソースプロンプト</summary>

```
Create an emotional scene of an angry couple, limited punchy dialogue, appropriate subtle micro expressions, warm color grading with key fill light and anamorphic lensing no onscreen text, emotionally complex but subtle proper angles, younger American couple with indie film drama sensibility with anger and pauses for a full range
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2070218111413035009/vid/avc1/1280x720/I6Uw_IbRpPre2CpL.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2070218111413035009/img/K5v2YoeYSUocr6rw.jpg" height="420" alt="間と微表情で進む微妙な口論 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2070218111413035009/vid/avc1/1280x720/I6Uw_IbRpPre2CpL.mp4?tag=25)**
</div>

##### エビデンス

- **クリエイター:** [Kiri](https://x.com/Kyrannio)
- **正規の出典:** [正規の出典](https://x.com/Kyrannio/status/2070218164609405380)
- **公開日:** 2026年6月25日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-17"></a>

#### #3: ニューヨークを疾走するウサギ

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

一文から被写体の動き、都市の連続性、同期音声を試す最小構成の公式例。

##### ローカライズ済みプロンプト

```
ウサギがニューヨークの街を全力で走る。地面に近い高さから勢いよく追跡し、交通と歩行者の整合性、自然な足音、途切れない都市遠近を保つ。
```

<details>
<summary>元のソースプロンプト</summary>

```
A rabbit sprinting through New York City. Track it at street level with energetic forward motion, coherent traffic and pedestrian ambience, realistic footfalls, and continuous urban perspective.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2062331873305759744/vid/avc1/1280x720/xqRipmxEF1bG32eX.mp4?tag=14"><img src="https://pbs.twimg.com/amplify_video_thumb/2062331873305759744/img/xIyH77VNCyxnAPUR.jpg" height="420" alt="ニューヨークを疾走するウサギ - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2062331873305759744/vid/avc1/1280x720/xqRipmxEF1bG32eX.mp4?tag=14)**
</div>

##### エビデンス

- **クリエイター:** [@vercel_dev](https://x.com/vercel_dev)
- **正規の出典:** [正規の出典](https://x.com/vercel_dev/status/2062331926296641565)
- **公開日:** 2026年6月4日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="workflow-product-motion-commercial-spots"></a>

### プロダクトモーションとCMスポット (2)

製品、オファー、衣装、料理、デバイス、ブランドの瞬間を動きの中心に据えるCMクリップ。

**注目のビデオプロンプト**

- [5つのタイムドCMショットで見せる高級香水](#prompt-11)

<a id="prompt-12"></a>

#### #4: 自然な緑茶の注ぎと商品エンドカード

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

ゆっくり注ぐ動き、蒸気と葉の動き、暖かな日光、自然の環境音、音楽、パッケージ、タイムドメッセージで構成するウェルネス広告。

##### ローカライズ済みプロンプト

```
透明なグラスへ新鮮な緑茶をスローモーションで注ぐ、シネマティックな広告。蒸気が柔らかく立ち上り、新鮮な緑茶の葉がグラスの周りに落ちる。窓辺の木のテーブルに朝日が差し込み、暖かく自然な光を作る。茶葉の露をクローズアップし、鳥の声が聞こえる穏やかな自然の背景、柔らかくリラックスした音楽。最後に高級な商品パッケージを表示し、テキストを入れる：‘Pure Green Tea – Refresh Your Mind, Boost Your Day.’ 超リアル、4KのCMスタイル。

画面上のテキストの順序：
0–5 sec: Start Your Day Fresh
5–10 sec: 100% Natural Green Tea
10–15 sec: Sip Wellness, Live Better.
```

<details>
<summary>元のソースプロンプト</summary>

```
A cinematic advertisement of fresh green tea being poured into a transparent glass cup in slow motion. Steam rises softly while fresh green tea leaves fall around the cup. Morning sunlight shines through a wooden table near a window, creating a warm natural glow. Close-up shots of dew drops on tea leaves, a peaceful nature background with birds chirping, soft relaxing music, premium product packaging displayed at the end with text: ‘Pure Green Tea – Refresh Your Mind, Boost Your Day.’ Ultra-realistic, 4K commercial style.

On-screen text sequence:
0–5 sec: Start Your Day Fresh
5–10 sec: 100% Natural Green Tea
10–15 sec: Sip Wellness, Live Better.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2054166808329080832/pu/vid/avc1/1280x720/A7qudxSoiMyyGMbz.mp4?tag=25"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2054166808329080832/pu/img/uMj-fcc76z8yMPzM.jpg" height="420" alt="自然な緑茶の注ぎと商品エンドカード - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/ext_tw_video/2054166808329080832/pu/vid/avc1/1280x720/A7qudxSoiMyyGMbz.mp4?tag=25)**
</div>

##### エビデンス

- **クリエイター:** [Ur Meer](https://x.com/UrMeer289)
- **正規の出典:** [正規の出典](https://x.com/UrMeer289/status/2054167234290082149)
- **公開日:** 2026年5月12日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="workflow-image-to-video-subject-continuity"></a>

### 画像から動画と被写体の連続性 (4)

静止画を動かしながら、人物の同一性、構図、製品形状、絵コンテのレイアウトを保つ画像起点のワークフロー。

<a id="prompt-6"></a>

#### #5: 松明に照らされたファンタジーのキスと実写フィルムの連続性

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### このワークフローが重要な理由

衣装、セットの質感、キャラクターのブロッキングを守りながら、1本の実写ショットでコミカルなロマンチックビートを作る参照フレームの継続。

##### ローカライズ済みプロンプト

```
1960年代のヴィンテージな実写映画の美学。アップロード画像を14秒の実写映画ショットの正確な開始フレームとして使う。金髪の鎧のヒロインと小柄で屈強な俳優が、松明に照らされた石室の中で一緒にフレームに残る。濡れた髪が火明かりにきらめき、実用的な革と金属の鎧には摩耗と経年の風合いが見える。煙が空間を漂い、光る残り火が上昇し、暖かな琥珀色とオレンジ色の火明かりが粗い石壁に揺れる影を落とす。

自然なゲートウィーブと微細なフィルムグレインを持つハンドヘルド35mmアナモルフィックカメラが、2人へゆっくり寄る。彼女は身をかがめ、狡猾で愛情のある笑みを浮かべ、目を彼に固定する。彼は彼女を見上げ、驚きと緊張を見せながら完全に魅了され、その瞬間に凍りつく。

彼女は短く遊び心のあるキスを1度だけする。すぐ後に彼はコミカルに後ろへ気絶し、安全にフレーム外へ転がる。彼女は立ち上がり、小さな勝ち誇った笑みを浮かべ、愉快そうな満足感とともに彼の落下を目で追う。

中世ファンタジー映画の実用撮影素材のように撮る。豊かな暖色の本物らしい1960年代フィルムストック、自然な不完全さ、松明による軽いレンズフレア、有機的なカメラの揺れ。全シーケンスはリアルタイムで展開し、古典的アドベンチャー映画を思わせる演劇的なブロッキングとタイミングにする。
```

<details>
<summary>元のソースプロンプト</summary>

```
Vintage 1960s practical filmmaking aesthetic. Use the uploaded image as the exact start frame for a 14-second real live-action film shot: the blonde armored heroine and short rugged actor remain in frame together inside a torchlit stone chamber with wet hair glistening in firelight, practical leather and metal armor showing wear and patina, smoke drifting through the space, glowing embers floating upward, warm amber and orange firelight casting flickering shadows on rough-hewn stone walls.

Handheld 35mm anamorphic camera with natural gate weave and subtle film grain slowly pushes in on the pair. She leans down with a sly, affectionate smile spreading across her face, her eyes locked on his. He looks up at her, stunned expression, nervous energy, completely charmed and frozen in the moment.

She gives him one brief, playful kiss — a quick, tender moment. Immediately after, he comically faints backward, safely tumbling out of frame. She straightens up, holding a tiny victorious smirk, eyes following him down with amused satisfaction.

Captured like raw practical footage from a medieval fantasy movie — authentic 1960s film stock look with rich warm tones, natural imperfections, slight lens flares from torchlight, organic camera shake. The entire sequence unfolds in real time with theatrical blocking and timing reminiscent of classic adventure cinema.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2064435062935023616/vid/avc1/1280x720/6a89qw_0P05Eizwm.mp4?tag=27"><img src="https://pbs.twimg.com/amplify_video_thumb/2064435062935023616/img/2jonm-Korb5XcrU3.jpg" height="420" alt="松明に照らされたファンタジーのキスと実写フィルムの連続性 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2064435062935023616/vid/avc1/1280x720/6a89qw_0P05Eizwm.mp4?tag=27)**
</div>

##### エビデンス

- **クリエイター:** [Brent Lynch](https://x.com/BrentLynch)
- **正規の出典:** [正規の出典](https://x.com/BrentLynch/status/2064437767963332901)
- **公開日:** 2026年6月9日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-7"></a>

#### #6: 火、布、音声の物理を伴う高速ドラゴン飛行

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### このワークフローが重要な理由

カメラパス、空気力学的な動き、移動する火明かり、粒子の空気感、同期音を明確な制御ブロックに分けた、要求度の高い参照アニメーション。

##### ローカライズ済みプロンプト

```
この参照画像を、HBOのGame of ThronesとHouse of the Dragonの壮大なドラゴンシーンとまったく同じビジュアルスタイルで、息をのむようなシネマティック10–12秒動画に忠実にアニメーション化する。Daenerysの外見、Drogonの解剖、鱗、翼の構造、初期照明を参照画像と完全に一貫させる。

DrogonはKing's Landingの屋根すれすれを高速で飛び、力強くリアルに羽ばたき、体をうねらせる。巨大で乱流を伴う炎の息が顎から噴き出し、炎は風と動きに反応してリアルな流体物理で変化する。光る残り火が後方へ飛び、強い熱の歪みとブルームが起こる。炎は下から古い石造建築とRed Keepを劇的に照らし、変化する暖色のハイライトと深い影を作る。

Daenerysは支配的な姿勢で前傾する。銀髪と重いマントは高速の風に激しくなびき、リアルな布のダイナミクスと慣性を持つ。空中に細かな火花と灰の粒子。

カメラ： Drogonをやや後方かつ側面から追う、ダイナミックなローアングルのシネマティックトラッキングショット。ドラゴンと同じ高速で移動し、動きに合わせてわずかに上昇・バンクする。勢いのある流麗なカメラモーションに、軽いハンドヘルド感と制御された映画的精度を混ぜる。

物理： ドラゴンの翼膜が風を受けて曲がり、個々の翼指が自然に動く。重いマントと髪は本物の重量と乱流を持つ。炎は実際の流体力学で動き、空気の動きと相互作用する。

照明と空気感： ドラゴンの炎を主な移動光源とし、街の建築を下から劇的に照らす。ボリュームのある煙、残り火、熱の揺らぎ。街に薄い霞がかかる壮大な空気遠近。

ネイティブ同期音声： 深く力強いドラゴンの咆哮に、激しい炎の轟音、強い風切り音、自然な残響を伴う遠い街の環境音を混ぜる。フォトリアルなレンダリング、連続した動き、緻密なディテール、アーティファクトなし、ARRI Alexa級の忠実度。傑作、最大級のスケール、速度、映画的インパクト。
```

<details>
<summary>元のソースプロンプト</summary>

```
Faithfully animate this reference image into a breathtaking cinematic 10-12 second video in the exact visual style of HBO Game of Thrones and House of the Dragon epic dragon sequences. Maintain perfect consistency with the reference image — Daenerys' appearance, Drogon's anatomy, scales, wing structure, and initial lighting.

Drogon flies at high speed low over King's Landing rooftops with powerful, realistic wing flaps and body undulation. Massive turbulent fire breath erupts from its jaws, flames reacting dynamically to wind and movement with realistic fluid physics, glowing embers flying backward, intense heat distortion and light bloom. Fire dramatically illuminates the ancient stone buildings and Red Keep from below with shifting warm highlights and deep shadows.

Daenerys leans forward with commanding posture, her silver hair and heavy cloak whipping violently in the high-speed wind with realistic fabric dynamics and inertia. Subtle sparks and ash particles in the air.

Camera: Dynamic low-angle cinematic tracking shot that follows Drogon from a slightly behind and side position, moving at high speed with the dragon. The camera subtly rises and banks with the dragon's movement, creating a powerful sense of speed, scale and immersion. Sweeping, fluid camera motion with slight handheld energy mixed with controlled cinematic precision.

Physics: Highly realistic dragon wing membrane flexing and catching the wind, individual wing fingers moving naturally, heavy cloak and hair with authentic weight and turbulence, fire behaving with real fluid dynamics and interaction with air movement.

Lighting & atmosphere: Dragon fire provides the primary moving light source, dramatically lighting the city architecture from below. Volumetric smoke, embers and heat haze. Epic atmospheric depth with slight haze over the city.

Native synchronized audio: Deep powerful dragon roar mixed with the roaring whoosh of intense fire, strong wind rush, and distant city ambience with natural reverb. Photorealistic rendering, coherent motion, intricate detail, no artifacts, shot with ARRI Alexa-level fidelity. Masterpiece, maximum epic scale, speed, and cinematic impact.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2067227819680178176/vid/avc1/1920x1080/Lyhy1DwxKbjXxXp-.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2067227819680178176/img/PAqDHuEWD_nCrT3q.jpg" height="420" alt="火、布、音声の物理を伴う高速ドラゴン飛行 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2067227819680178176/vid/avc1/1920x1080/Lyhy1DwxKbjXxXp-.mp4?tag=28)**
</div>

##### エビデンス

- **クリエイター:** [AYi](https://x.com/AYi_AInotes)
- **正規の出典:** [正規の出典](https://x.com/AYi_AInotes/status/2067227900399562775)
- **公開日:** 2026年6月17日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-8"></a>

#### #7: 固定されたエディトリアルグリッドと独立した微細運動

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### このワークフローが重要な理由

8分割レイアウトとカメラを固定しながら、呼吸、まばたき、煙、炎、髪の制御された動きを許可する構造化された安定性テスト。

##### ローカライズ済みプロンプト

```
{
  "video_generation": {
    "model": "grok",
    "duration": "6s",
    "aspect_ratio": "4:5",
    "motion_intensity": "low_realistic",
    "camera_motion": "none",
    "grid_lock": true,
    "no_zoom": true,
    "no_crop": true,
    "no_panel_shift": true,
    "identity_lock": {
      "preserve_face": true,
      "preserve_hands": true,
      "preserve_glove": true,
      "preserve_cigarette_shape": true,
      "preserve_background": true
    },
    "scene": "8パネルの荒々しいエディトリアルグリッド。濡れた髪の女性、スモーキーな目、黒い手袋、中立的な壁。硬いフラッシュ照明。パネルは完全に固定する。",
    "movement_rules": {
      "start_immediately": true,
      "no_slow_motion": true,
      "natural_speed": true,
      "all_panels_active": true,
      "breathing": "すべてのパネルで自然な呼吸を見せる",
      "blink": "パネル全体に自然なまばたきを分散させる",
      "eye_movement": "連続したごく小さな目の動き",
      "smoke": "物理的に正確な、常に上昇する煙の流れ",
      "flame": "連続する控えめな炎の揺らめき",
      "hair": "濡れた髪の束の軽い動き"
    },
    "stability_rules": ["カメラを動かさない","レイアウトを変えない","顔を変形させない","唇をぶれさせない","余分な指を出さない","煙を破綻させない","背景をちらつかせない"],
    "quality_mode": "max_stability",
    "negative_prompt": ["スローモーション","静止画","ズーム","クロップ","パネルのずれ","歪んだ顔","AIの揺れ"]
  }
}
```

<details>
<summary>元のソースプロンプト</summary>

```
{
  "video_generation": {
    "model": "grok",
    "duration": "6s",
    "aspect_ratio": "4:5",
    "motion_intensity": "low_realistic",
    "camera_motion": "none",

    "grid_lock": true,
    "no_zoom": true,
    "no_crop": true,
    "no_panel_shift": true,

    "identity_lock": {
      "preserve_face": true,
      "preserve_hands": true,
      "preserve_glove": true,
      "preserve_cigarette_shape": true,
      "preserve_background": true
    },

    "scene": "8-panel gritty editorial grid. Wet hair woman, smoky eyes, black glove, neutral wall. Hard flash lighting. Panels remain perfectly fixed.",

    "movement_rules": {
      "start_immediately": true,
      "no_slow_motion": true,
      "natural_speed": true,
      "all_panels_active": true,

      "breathing": "visible natural breathing in every panel",
      "blink": "natural blinks distributed across panels",
      "eye_movement": "continuous micro eye shifts",
      "smoke": "constant upward smoke flow, physically accurate",
      "flame": "continuous subtle flame flicker",
      "hair": "light wet strand motion"
    },

    "stability_rules": [
      "no camera movement",
      "no layout change",
      "no face morph",
      "no lip jitter",
      "no extra fingers",
      "no smoke glitch",
      "no background flicker"
    ],

    "quality_mode": "max_stability",

    "negative_prompt": [
      "slow motion",
      "freeze frame",
      "zoom",
      "crop",
      "panel drift",
      "warped face",
      "AI jitter"
    ]
  }
}
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2024901412547641344/vid/avc1/720x1280/aLY-ZGPl4g6vpthr.mp4?tag=21"><img src="https://pbs.twimg.com/amplify_video_thumb/2024901412547641344/img/RWFQtc5G2WzSqmXu.jpg" height="420" alt="固定されたエディトリアルグリッドと独立した微細運動 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2024901412547641344/vid/avc1/720x1280/aLY-ZGPl4g6vpthr.mp4?tag=21)**
</div>

##### エビデンス

- **クリエイター:** [Özge Döner](https://x.com/astronomerozge1)
- **正規の出典:** [正規の出典](https://x.com/astronomerozge1/status/2024901494290743510)
- **公開日:** 2026年2月20日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-15"></a>

#### #8: タイムズスクエアに眠る巨人

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### このワークフローが重要な理由

人物を街中で眠る巨人へ変え、交通、路面表示、広告光、斜め俯瞰のドローン視点で巨大さを示す、参照画像ベースのシュールなスケール演出。

##### ローカライズ済みプロンプト

```
アップロードした顔を参照し、混雑したタイムズスクエアの交差点の中央で体を丸めて眠る巨人として描く、極端な遠近感のドローンショット。交通は巨大な身体を避けて流れ、黄色いタクシーは玩具の車のように小さく見える。人物はゆったりした大きめのグレーのスウェットパンツとフーディーを着用。アスファルトの路面表示や街の細かなごみがスケール感を支える。夜のタイムズスクエアの電光看板が鮮やかな多色光を眠る人物へ投げかける。カメラは真上に近い位置から、建物の高さが分かるよう少し傾ける。8K、写実的な群衆と車両、親密さと公共空間の混沌が同居するシュールな画面。
```

<details>
<summary>元のソースプロンプト</summary>

```
An extreme perspective drone shot capturing the uploaded face as reference as a sleeping giant curled up in the middle of a busy Times Square intersection. Traffic is diverted around the giant body, with yellow taxis appearing as toy cars in comparison. The subject is wearing oversized, comfortable grey sweatpants and a hoodie. The asphalt markings and street debris provide scale cues. The lighting is the electric vibrance of Times Square billboards at night, casting multi-colored light across the sleeping figure. The camera angle is top-down but slightly angled to show the height of the buildings. 8k resolution, photorealistic crowd and vehicle details, and a surreal juxtaposition of intimacy and public chaos.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2077442928272953344/vid/avc1/832x1504/-WXJulilhZsyGpHg.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2077442928272953344/img/I7WDDHxses1etiXw.jpg" height="420" alt="タイムズスクエアに眠る巨人 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2077442928272953344/vid/avc1/832x1504/-WXJulilhZsyGpHg.mp4?tag=25)**
</div>

##### エビデンス

- **クリエイター:** [Mr Das](https://x.com/MrDasOnX)
- **正規の出典:** [正規の出典](https://x.com/MrDasOnX/status/2077443101631926682)
- **公開日:** 2026年7月15日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="workflow-stylized-motion-visual-effects"></a>

### スタイライズドモーションと視覚効果 (4)

変形、シミュレーション、シュールな物理、グラフィックモーション、独自のメディア処理によるエフェクトとアニメーションのパターン。

<a id="prompt-9"></a>

#### #9: 月明かりの下で寄り添うドラゴン、抑制されたスローモーション

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

1つの優しい動作、微細な筋肉の動き、反射する鱗のディテール、柔らかな月明かりの空気感に集中する静的クローズアップ。

##### ローカライズ済みプロンプト

```
シネマティックなクローズアップ、スローモーション動画。巨大で筋肉質な金色のドラゴンと、星のような生物発光の鱗を持つ、より細身で優雅な真夜中の紫色のドラゴンが、月明かりの魔法の森で休んでいる。2頭はゆっくり優しく頭を互いへ近づける。金色のドラゴンが紫色のドラゴンの首をそっと鼻先で押す。鱗がきらめき、銀色の月光を反射する。カメラの動き： 静的ショット。鱗の下でわずかに波打つ筋肉と、目に宿る柔らかな琥珀色の光を捉える。空気感と照明： 巨大な満月のあるソフトフォーカスの背景。
```

<details>
<summary>元のソースプロンプト</summary>

```
Cinematic close-up, slow-motion video. A massive, muscular golden dragon and a more slender, elegant midnight purple dragon with starry bioluminescent scales are resting in a moonlit enchanted forest. The two dragons slowly and tenderly move their heads toward each other. The golden dragon gently nudges the purple dragon’s neck. Their scales shimmer and reflect the silver moonlight. Camera Movement: static shot, The camera captures the subtle muscle ripples under the scales and the soft amber glow in their eyes. Atmosphere & Lighting: Soft-focus background with a giant full moon.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2053639303700566016/pu/vid/avc1/1168x1728/iTKoCMbepTjPPd4a.mp4?tag=23"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2053639303700566016/pu/img/paFojbfcBAr6mUm_.jpg" height="420" alt="月明かりの下で寄り添うドラゴン、抑制されたスローモーション - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/ext_tw_video/2053639303700566016/pu/vid/avc1/1168x1728/iTKoCMbepTjPPd4a.mp4?tag=23)**
</div>

##### エビデンス

- **クリエイター:** [auqib](https://x.com/auqibhabib)
- **正規の出典:** [正規の出典](https://x.com/auqibhabib/status/2053639419266322623)
- **公開日:** 2026年5月11日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-10"></a>

#### #10: 重い衝撃物理を伴う連続武術トラバーサル

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

地形の移動、連続する格闘技の動き、リアルな運動量、周回するカメラ、カットなしの制約を組み合わせた6秒のアクションブリーフ。

##### ローカライズ済みプロンプト

```
最高品質の6秒動画。非常に熟練したファイターが、残酷で激しい戦いを続けながら荒れた地形を進む。回転蹴り、飛び膝、空中回転、ウォールラン、激しいテイクダウンを含む、速く力強い武術コンボを行う。重い衝撃と運動量を備えた強くリアルな物理。トラッキングショット、周回するカメラ、劇的なローアングルによるダイナミックなカメラワーク。シネマティックな照明、明瞭なモーション、激しく生々しいアクション、カットなし、滑らかで力強い振り付け、最高品質、6秒動画。
```

<details>
<summary>元のソースプロンプト</summary>

```
Masterpiece quality, 6-second video of a highly skilled fighter traversing rough terrain while engaged in a brutal, high-intensity fight. The character performs fast, powerful martial arts combos including spinning kicks, flying knees, aerial flips, wall runs, and savage takedowns. Strong realistic physics with heavy impact and momentum. Dynamic camera work with tracking shots, circling camera, and dramatic low angles. Cinematic lighting, sharp motion clarity, intense and raw action, no cuts, smooth and powerful choreography, best quality, 6-second video.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2067298117415059456/vid/avc1/688x464/-y07rGLLEnox_zTy.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2067298117415059456/img/fFgLi1L_hufsoKI6.jpg" height="420" alt="重い衝撃物理を伴う連続武術トラバーサル - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2067298117415059456/vid/avc1/688x464/-y07rGLLEnox_zTy.mp4?tag=25)**
</div>

##### エビデンス

- **クリエイター:** [⭕Kisalay](https://x.com/Kisalay_)
- **正規の出典:** [正規の出典](https://x.com/Kisalay_/status/2067298200520896673)
- **公開日:** 2026年6月17日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-14"></a>

#### #11: 逆流して浮かぶ水の球体

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

コップの水が上向きに流れ出し、柔らかな昼光の中で宙に浮く球体へ集まる、物理法則を超えた簡潔な動画プロンプトです。

##### ローカライズ済みプロンプト

```
テーブルの上に水の入ったコップ。突然、水がコップから上向きに流れ出し、宙に浮く球体を形作る。フォトリアル、柔らかな昼光
```

<details>
<summary>元のソースプロンプト</summary>

```
A glass of water on a table, the water suddenly flows upward out of the glass and forms a floating sphere, photorealistic, soft daylight
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2077061435562364928/vid/avc1/752x416/sWQUveRllw3DBHTI.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2077061435562364928/img/8qeVxVJrvKvXuW5h.jpg" height="420" alt="逆流して浮かぶ水の球体 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2077061435562364928/vid/avc1/752x416/sWQUveRllw3DBHTI.mp4?tag=25)**
</div>

##### エビデンス

- **クリエイター:** [atmen](https://x.com/atmen189)
- **正規の出典:** [正規の出典](https://x.com/atmen189/status/2077238726120669192)
- **公開日:** 2026年7月15日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="prompt-16"></a>

#### #12: ランタンに照らされたJRPG市場

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

にぎわう市場、三人称カメラ、読めるUI、布の物理表現、空気感のあるエフェクトを組み合わせたゲーム映像。

##### ローカライズ済みプロンプト

```
現代的なJRPGのシネマティックなゲームプレイ映像。NPCと商人でにぎわう市場、暖かなランタン光、三人称カメラ、ボリュームライト、粒子表現、布の物理を備えた精密なキャラクター、リアルなゲームエンジン質感、被写界深度、モーションブラー。アニメ調の美術と環境による物語表現。HP/MPバーとミニマップは常に読める状態を保つ。60fpsの滑らかなカメラ、4K。
```

<details>
<summary>元のソースプロンプト</summary>

```
Cinematic gameplay footage from a modern JRPG video game: a bustling marketplace filled with NPCs and vendors, warm lantern lighting, third-person camera angle, dynamic volumetric god rays, particle effects, detailed character models with cloth physics, photorealistic game-engine textures, depth of field, and motion blur. Anime-inspired art direction with atmospheric environmental storytelling. Keep UI elements visible, including HP/MP bars and a minimap. Smooth 60 fps camera movement, 4K presentation.
```

</details>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/1987063720108040194/vid/avc1/464x688/pa6Bp_3lB7jCXuMF.mp4?tag=23"><img src="https://pbs.twimg.com/amplify_video_thumb/1987063720108040194/img/VuuPeYmBCr09uM7y.jpg" height="420" alt="ランタンに照らされたJRPG市場 - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/1987063720108040194/vid/avc1/464x688/pa6Bp_3lB7jCXuMF.mp4?tag=23)**
</div>

##### エビデンス

- **クリエイター:** [@icreatelife](https://x.com/icreatelife)
- **正規の出典:** [正規の出典](https://x.com/icreatelife/status/1987063774449430763)
- **公開日:** 2025年11月8日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

<a id="workflow-video-editing-restyling-scene-control"></a>

### 動画編集、リスタイル、シーン制御 (1)

連続性を守りながら、既存映像のスタイル変更、延長、追加、削除、置換、シーンの方向変更を行うワークフロー。

<a id="prompt-13"></a>

#### #13: 既存クリップを原子力級サイバーパンクにリスタイル

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### このワークフローが重要な理由

元動画の基礎となる動きを保ったまま、映像処理だけを未来的なサイバーパンクスタイルへ変えられることを示す、意図的に最小限の編集指示。

##### ローカライズ済みプロンプト

```
スタイルを未来的なCyberpunkに変更する
```

<details>
<summary>元のソースプロンプト</summary>

```
Change the style to futuristic Cyberpunk
```

</details>

##### ソースと結果のフレーム

<table>
<tr>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/amplify_video_thumb/2018048438965768192/img/N0xaRAp2EYmuPcUF.jpg" width="100%" alt="既存クリップを原子力級サイバーパンクにリスタイル - Image 1"></td>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/amplify_video_thumb/2018048888234553344/img/Gjbr2r7c4rig1ghx.jpg" width="100%" alt="既存クリップを原子力級サイバーパンクにリスタイル - Image 2"></td>
</tr>
</table>

##### 動画

<div align="center">
<a href="https://video.twimg.com/amplify_video/2018048888234553344/vid/avc1/788x1168/_LiqbALuNiUVFZ9B.mp4?tag=21"><img src="https://pbs.twimg.com/amplify_video_thumb/2018048888234553344/img/Gjbr2r7c4rig1ghx.jpg" height="420" alt="既存クリップを原子力級サイバーパンクにリスタイル - Motion preview"></a>

*プレビューをクリックして動画を開く* · **[▶ 動画を見る →](https://video.twimg.com/amplify_video/2018048888234553344/vid/avc1/788x1168/_LiqbALuNiUVFZ9B.mp4?tag=21)**
</div>

##### エビデンス

- **クリエイター:** [Tyler Keehner](https://x.com/STFUnion)
- **正規の出典:** [正規の出典](https://x.com/STFUnion/status/2018049167839400312)
- **公開日:** 2026年2月1日
- **プロンプト言語:** en

**[この方向性で制作する · ImagineVid](https://imaginevid.io/ja/grok-imagine)**

---

## 検証済みケースを投稿する

実際の演出パターンを学べるGrok Imagine Videoのケースを見つけましたか？プロンプト、再生可能な結果、クリエイター、出典、モデルエビデンス、入力モードをGitHub Issuesから送ってください。

### GitHub issue

1. [**ビデオプロンプトを投稿する**](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/issues/new?template=submit-prompt.yml)
2. 完全なブリーフ、出典、クリエイター、モデルエビデンス、再生可能なメディアを提示する
3. メンテナーが出所、動画としての価値、対象範囲、重複を確認する
4. 承認されたケースはローカルデータソースに正規化される
5. すべての品質チェックに合格すると、ジェネレーターがケースを公開する

**編集方針：** 人気はエビデンスではありません。完全なプロンプトと有用な動画を備えた低反応の投稿は、再現可能な指示のないバイラルなショーケースより高く評価されることがあります。

投稿前に[CONTRIBUTING.md](docs/CONTRIBUTING.md)を読んでください。

---

## ライセンス

ImagineVidが作成した編集テキストとコードは[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)でライセンスされています。第三者のプロンプト、クリエイターの身元、商標、画像、動画はそれぞれの権利者に帰属し、このライセンスの対象外です。

---

## クリエイタークレジット

<details>
<summary>Community creators we thank (15)</summary>

[@icreatelife](https://x.com/icreatelife) · [@vercel_dev](https://x.com/vercel_dev) · [⭕Kisalay](https://x.com/Kisalay_) · [atmen](https://x.com/atmen189) · [auqib](https://x.com/auqibhabib) · [AYi](https://x.com/AYi_AInotes) · [BMX](https://x.com/bmx_ai13) · [Brent Lynch](https://x.com/BrentLynch)<br>
[Dogan Ural](https://x.com/doganuraldesign) · [Kiri](https://x.com/Kyrannio) · [Krista Gable](https://x.com/DomainDomme) · [Mr Das](https://x.com/MrDasOnX) · [Özge Döner](https://x.com/astronomerozge1) · [Tyler Keehner](https://x.com/STFUnion) · [Ur Meer](https://x.com/UrMeer289)

</details>

---

## リポジトリの成長

[![GitHub stars](https://img.shields.io/github/stars/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills?style=for-the-badge&logo=github&label=GitHub%20Stars)](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/stargazers)

**[リポジトリの成長](https://star-history.com/#imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills&Date)**

---

<div align="center">

**[Grok Imagine Videoで制作する](https://imaginevid.io/ja/grok-imagine)** •
**[検証済みケースを投稿する](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/issues/new?template=submit-prompt.yml)** •
**[コレクションにスターを付ける](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills)**

<sub>バージョン管理されたローカルデータから生成： 2026-07-21T17:16:25.077Z</sub>

</div>
