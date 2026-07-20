<a href="https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills">
  <img src="public/images/grok-imagine-video-prompt-skills-cover.png" alt="Grok Imagine Video Prompt Skills" width="100%" />
</a>

> Grok Imagine Video için kaynakları doğrulanabilir çekim brifleri, hareket kalıpları ve görsel-işitsel iş akışları kütüphanesi.
# Awesome Grok Imagine Video Promtları ve Becerileri

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
[![GitHub stars](https://img.shields.io/github/stars/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills?style=social)](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Update README](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/actions/workflows/update-readme.yml/badge.svg)](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

> Brifi inceleyin, sonucu izleyin, üreticiyi takip edin ve yüzeysel stili kopyalamak yerine yönetmenlik mantığını yeniden kullanın.

> **Atıf ve düzeltmeler:** Yayımlanan her örnek üreticisine ve kanonik kaynağa bağlantı verir. Haklar sahiplerinde kalır. Atıf değişikliği veya kaldırma için issue açın.

---

[![English](https://img.shields.io/badge/English-Click%20to%20View-lightgrey)](README.md) [![Español](https://img.shields.io/badge/Espa%C3%B1ol-Click%20to%20View-lightgrey)](README.es.md) [![Português](https://img.shields.io/badge/Portugu%C3%AAs-Click%20to%20View-lightgrey)](README.pt.md) [![Italiano](https://img.shields.io/badge/Italiano-Click%20to%20View-lightgrey)](README.it.md) [![Deutsch](https://img.shields.io/badge/Deutsch-Click%20to%20View-lightgrey)](README.de.md) [![Français](https://img.shields.io/badge/Fran%C3%A7ais-Click%20to%20View-lightgrey)](README.fr.md) [![العربية](https://img.shields.io/badge/%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-Click%20to%20View-lightgrey)](README.ar.md) [![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-Click%20to%20View-lightgrey)](README.ja.md) [![한국어](https://img.shields.io/badge/%ED%95%9C%EA%B5%AD%EC%96%B4-Click%20to%20View-lightgrey)](README.ko.md) [![中文](https://img.shields.io/badge/%E4%B8%AD%E6%96%87-Click%20to%20View-lightgrey)](README.zh.md)
[![Nederlands](https://img.shields.io/badge/Nederlands-Click%20to%20View-lightgrey)](README.nl.md) [![Русский](https://img.shields.io/badge/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9-Click%20to%20View-lightgrey)](README.ru.md) [![Türkçe](https://img.shields.io/badge/T%C3%BCrk%C3%A7e-Current-brightgreen)](README.tr.md) [![Polski](https://img.shields.io/badge/Polski-Click%20to%20View-lightgrey)](README.pl.md)

---

## Grok Imagine Video ile üret

**[ImagineVid üzerinde Grok Imagine iş akışını aç](https://imaginevid.io/tr/grok-imagine)**

Bir üreticinin talimatlarını ortaya çıkan hareketle karşılaştırmak için bu depoyu kullanın. Çekim gramerini yeni bir klibe uyarlamaya hazır olduğunuzda ImagineVid'i açın.

Popülerlik kanıt değildir. Eksiksiz promptu ve yararlı videosu olan düşük etkileşimli bir gönderi, yeniden üretilebilir yönlendirmesi olmayan viral bir gösteriden daha değerli olabilir.

| Üretim ihtiyacı | Kanıt kütüphanesi | ImagineVid iş akışı |
|---------|--------------|---------------------|
| Örnek inceleme | Prompt, sonuç ve kaynak | Üret ve karşılaştır |
| Keşif | Depo metin araması | İş akışı odaklı keşif |
| Üretim | - | Grok Imagine'ı aç |
| Okuma | GitHub uyumlu Markdown | Tarayıcı üretim çalışma alanı |
| Video iş akışları | - | Üretim filtreleri |


### Üretim iş akışına göre göz at

- [**Kamera yönetimi ve çekim tasarımı**](#workflow-camera-direction-shot-design) - Kadraj, kamera yolu, blocking, tempo, açığa çıkarmalar ve geçişler etrafında kurulan çekim brifleri.
- [**Diyalog, performans ve yerel ses**](#workflow-dialogue-performance-native-audio) - Konuşma, oyunculuk, ambiyans, müzik veya senkron sesin sahneyi taşıdığı performans odaklı promptlar.
- [**Ürün hareketi ve reklam spotları**](#workflow-product-motion-commercial-spots) - Ürünü, teklifi, giysiyi, yemeği, cihazı veya marka anını hareketin merkezinde tutan ticari klipler.
- [**Görselden videoya ve konu sürekliliği**](#workflow-image-to-video-subject-continuity) - Bir sabit görseli canlandırırken kimliği, kompozisyonu, ürün geometrisini veya storyboard yerleşimini koruyan görsel temelli iş akışları.
- [**Stilize hareket ve görsel efektler**](#workflow-stylized-motion-visual-effects) - Dönüşüm, simülasyon, sürreal fizik, grafik hareket veya ayırt edici medya işlemiyle yönlendirilen efekt ve animasyon kalıpları.
- [**Video düzenleme, yeniden stillendirme ve sahne kontrolü**](#workflow-video-editing-restyling-scene-control) - Sürekliliği koruyarak mevcut videoyu yeniden stillendiren, uzatan, ekleyen, kaldıran, değiştiren veya sahnenin bir kısmını yönlendiren iş akışları.

---

## İçindekiler

- [Grok Imagine Video ile üret](#grok-imagine-video-ile-üret)
- [Grok Imagine Video nedir?](#grok-imagine-video-nedir)
- [Koleksiyon durumu](#koleksiyon-durumu)
- [Öne çıkan video promptları](#community-featured-prompts)
- [Topluluk video promptları](#community-prompt-cases)
- [Doğrulanmış örnek gönder](#doğrulanmış-örnek-gönder)
- [Lisans](#lisans)
- [Üretici kredileri](#üretici-kredileri)
- [Depo büyümesi](#depo-büyümesi)

---

## Grok Imagine Video nedir?

**Grok Imagine Video**, xAI'ın metin, görsel ve kaynak görüntülerden kısa videolar üretip düzenleyen; sesi de sonuçla birlikte oluşturan sistemidir. Güncel `grok-imagine-video-1.5` modeli xAI API üzerinden genel kullanıma açıktır. xAI bu sürümde hareket, fiziksel tutarlılık, konuşma, ses efektleri, ambiyans ve üretim hızının geliştirildiğini belirtir.

Pratik prompt yazarken her isteği bir moodboard değil, çekim brifi olarak ele alın. Görünen eylemi, kamera davranışını, vuruş zamanlamasını, ses planını ve sabit kalması gerekenleri adlandırın. Aşağıdaki örnekler üreticinin promptunu sonuçla birlikte tutar; böylece yararlı yönlendirmeyi süslü ifadelerden ayırabilirsiniz.

- **Metin veya kareyle başlayın** - Yazılı bir sahne üretin ya da kompozisyonu taşıyan bir görseli canlandırın
- **Gözlemlenebilir hareketi tarif edin** - Blocking'i, momentumu, nesne etkileşimini ve her eylemin fiziksel sonucunu belirtin
- **Özet değil, vuruşlar yazın** - Zamanlama ve açığa çıkarmalar önemliyse zaman kodları veya kısa bir eylem dizisi kullanın
- **Sesi sahneyle üretin** - Ses hikâyenin parçasıysa diyalog, ambiyans, müzik veya efekt ekleyin
- **Mevcut görüntüyü düzenleyin** - Bir klibi yeniden stillendirin, sahne koşullarını değiştirin ya da görünen unsurları ekleyin, kaldırın ve değiştirin
- **Sürekliliği açıkça koruyun** - Hangi yüzün, ürün geometrisinin, yerleşimin, kostümün veya arka planın değişmemesi gerektiğini söyleyin

**Güncel referanslar:** [xAI Video 1.5 release](https://x.ai/news/grok-imagine-video-1-5) · [xAI model documentation](https://docs.x.ai/developers/models/grok-imagine-video) · [Grok Imagine on ImagineVid](https://imaginevid.io/tr/grok-imagine)

### Promptu çekim şablonuna dönüştür

Yeniden kullanılabilir video promptları sahne değişkenlerini yönetmenlik mantığından ayırır. Konuyu, ortamı, söylenen cümleyi veya ürünü değiştirirken denenmiş kamera yolunu, vuruş yapısını, ses planını ve süreklilik kurallarını koruyun.

**Şablon örüntüsü:**
```
[DURATION + ASPECT RATIO]. [SUBJECT] performs [VISIBLE ACTION] in [SETTING]. Camera: [FRAMING + MOVE]. Beats: [TIMED ACTIONS]. Audio: [DIALOGUE + FOLEY + AMBIENCE]. Preserve: [IDENTITY / PRODUCT / LAYOUT]. Avoid: [FAILURE MODES].
```

Bir eylem ve bir kamera fikriyle başlayın. Zamanlama, ses ve koruma kısıtlarını yalnızca görünür bir üretim ihtiyacını çözdüklerinde ekleyin; sonra üretimler arasında tek seferde bir değişkeni değiştirin.

---

## Koleksiyon durumu

<div align="center">

| Koleksiyon alanı | Güncel değer |
|--------|-------|
| Doğrulanmış örnekler | **15** |
| Editör seçimi | **4** |
| Oluşturulma | **20 Temmuz 2026 Pazartesi 21:10:23 UTC** |

</div>

---

<a id="community-featured-prompts"></a>

## Öne çıkan video promptları

> Yeniden üretilebilirlik, hareket açıklığı ve üretim faydasına göre seçildi

<a id="prompt-1"></a>

### #1: Sert geçişli hızlı uzay aracı detay montajı

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### İş akışı neden önemli

Her saniyeye yeni bir uzay aracı detayı ve kararlı bir zoom hareketi atayan, fade kullanımını açıkça yasaklayan kısa bir çok sahneli tempo testi.

#### Yerelleştirilmiş prompt

```
Ultra hızlı uçuş. Çok sahneli, hızlı tempolu bir live-action video oluşturun. Her saniye uzay aracının farklı ayrıntılarına keskin zoom-in ve zoom-out kullanın. Keskin sahne geçişleri, fade yok.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
Ultra-fast flight. Create a multi-scene, fast-paced live-action video. Use sharp zoom-ins and zoom-outs on different details of the spacecraft every second. Sharp scene transitions, no fade.
```

</details>

#### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2044049267589816320/vid/avc1/1280x720/NSIhpjHgXuMxvVlN.mp4?tag=24"><img src="https://pbs.twimg.com/amplify_video_thumb/2044049267589816320/img/pMWIqfLwp11wbUs4.jpg" height="420" alt="Sert geçişli hızlı uzay aracı detay montajı - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2044049267589816320/vid/avc1/1280x720/NSIhpjHgXuMxvVlN.mp4?tag=24)**
</div>

#### Kanıt

- **Üretici:** [Dogan Ural](https://x.com/doganuraldesign)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/doganuraldesign/status/2044049325299204120)
- **Yayımlandı:** 14 Nisan 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-3"></a>

### #2: Diyalog ve ses tasarımıyla ağır çekimde mısır gevreği patlaması

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### İş akışı neden önemli

Geniş açılı kompozisyonu, ağır çekim parçacıkları, sözlü tepkiyi, somut Foley'i ve müzik yönünü koordine eden eğlenceli bir kahvaltı reklamı.

#### Yerelleştirilmiş prompt

```
Rahat bir retro lokanta tarzı mutfakta sinematik geniş açı çekimi. Genç bir kız renkli mısır gevreği kâsesine eğilirken süt dramatik ağır çekimde yukarı patlar. Parlak gevrek halkaları yüzünün çevresinde havada süzülür. Gözlerini doğrudan kameraya diker; gözleri açık, ağzı şaşkınlık ve neşe içinde açıktır. Sıcak sabah güneşi jaluzilerden süzülür. Sahne fisheye lens bozulması, gerçekçi ışık, yüksek ayrıntı, dinamik hareket ve eğlenceli sinema hissiyle oyuncu, büyülü ve enerjiktir. Süre: 10 saniye.

Diyalog: Vay… kahvaltım gerçekten uçuyor mu?

Sound Design:

Ani süt sıçraması.
Hafif gevrek saçılma sesleri.
Yumuşak büyülü kıvılcım efekti.
Kızın şaşkın nefesi.
Eğlenceli, oyuncu arka plan müziği.
```

<details>
<summary>Özgün kaynak prompt</summary>

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

#### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2069395437908643841/vid/avc1/1280x704/HpEN37WNo_J8Cw9v.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2069395437908643841/img/g-URoeS90azUiBUG.jpg" height="420" alt="Diyalog ve ses tasarımıyla ağır çekimde mısır gevreği patlaması - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2069395437908643841/vid/avc1/1280x704/HpEN37WNo_J8Cw9v.mp4?tag=25)**
</div>

#### Kanıt

- **Üretici:** [BMX](https://x.com/bmx_ai13)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/bmx_ai13/status/2069395522088030511)
- **Yayımlandı:** 23 Haziran 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-5"></a>

### #3: Senkron slapstick sesiyle tek çekimde kukla dövüşü

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

#### İş akışı neden önemli

Başlangıç arenasını kilitleyen, kesintisiz bir karşı saldırı kuran ve diyalog, darbe hareketi, kalabalık sesi ile aksesuar Foley'ini belirleyen image-to-video aksiyon brifi.

#### Yerelleştirilmiş prompt

```
10s / image-to-video / tek kesintisiz çekim / native audio / 16:9

Ekli görseli tam ilk kare olarak kullanın. PuppetFight arenasını, sıcak pembe ring iplerini, çığlık atan kukla kalabalığını, sert üst spotları, kirli ring zeminini, patlayan dolguyu ve kaotik yeraltı dövüşü enerjisini koruyun. Tina Tornado solda, havada; vahşi saçları ve pembe bigudileri uçuşurken kırık bir katlanır sandalye tutuyor. Sağda siyah güneş gözlüklü, kafatası eldivenli punk boksör ona vahşi bir yumruk indiriyor; kumaş parçaları, toz ve dolgu havaya saçılıyor.

Vuruşun zaten temas ettiği karede tam olarak başlayın. Yumruk güçlenerek Tina'yı yana doğru döndürsün, enkaz dışarı patlasın. Tina sert ve saçma bir enerjiyle geri dönsün, sandalyeyi pozisyona getirip “Ucuz vuruş, kafatası çocuk!” diye bağırsın. Sonra sandalyeyi vahşi, dağınık bir karşı saldırıyla yukarı savurup “Mobilyayı ben getirdim!” desin. Sandalye boksöre çarpsın, dolgu kameraya doğru patlasın, pembe ipler sallansın, kalabalık coşsun ve çekim tam bir kaosla bitsin.

Motion: hızlı elde kamera, agresif push-in, darbe sarsıntıları, whip benzeri yeniden kadrajlama, ip titreşimi, uçuşan dolgu, sallanan sandalye, abartılı kukla fiziği, acımasız slapstick enerjisi.

Audio: kükreyen kukla kalabalığı, kısa net lip sync, yumruk darbeleri, sandalye şangırtıları, ip gerilim sesleri, dolgu patlamaları, arena bas vuruşu, kaotik kalabalık tepkisi.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
10s / image-to-video / one continuous shot / native audio / 16:9

Use the attached image as the exact first frame. Preserve the PuppetFight arena, hot-pink ring ropes, screaming puppet crowd, harsh overhead spotlights, gritty ring floor, exploding stuffing, and chaotic underground fight energy. Tina Tornado is on the left, airborne, wild hair and pink curlers flying, gripping a busted folding chair. On the right, the skull-gloved punk boxer in black sunglasses drives a savage punch into her as fabric scraps, dust, and stuffing burst through the air.

Start exactly on the frame with the hit already connecting. The punch drives harder and sends Tina twisting sideways while debris explodes outward. She snaps back with fierce, ridiculous energy, whipping the folding chair into position and yelling, “Cheap shot, skull boy!” She then swings the chair upward in a wild, messy counterattack and shouts, “I brought furniture!” The chair clips the boxer as stuffing blasts toward camera, the pink ropes shake, the crowd erupts, and the shot ends in full chaotic mayhem.

Motion: fast handheld camera, aggressive push-in, impact shakes, whip-like reframing, rope vibration, flying stuffing, chair wobble, exaggerated puppet physics, brutal slapstick energy.

Audio: roaring puppet crowd, short clear lip sync, punch impacts, chair clanks, rope twangs, stuffing pops, arena bass hit, chaotic crowd reaction.
```

</details>

#### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2062228478255116288/vid/avc1/1920x1080/ibkEHfzs5STuofwh.mp4?tag=27"><img src="https://pbs.twimg.com/amplify_video_thumb/2062228478255116288/img/iKuXlfkdwHozEcZp.jpg" height="420" alt="Senkron slapstick sesiyle tek çekimde kukla dövüşü - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2062228478255116288/vid/avc1/1920x1080/ibkEHfzs5STuofwh.mp4?tag=27)**
</div>

#### Kanıt

- **Üretici:** [Krista Gable](https://x.com/DomainDomme)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/DomainDomme/status/2062228580851974229)
- **Yayımlandı:** 3 Haziran 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-11"></a>

### #4: Beş zamanlanmış reklam çekiminde lüks parfüm açılımı

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Featured](https://img.shields.io/badge/Featured-gold-gold)

#### İş akışı neden önemli

Makro cam detayından çiçek yapraklarına, sıvı hareketine, atomize buhara ve son hero kompozisyonuna ilerleyen on saniyelik ürün filmi.

#### Yerelleştirilmiş prompt

```
10 saniyelik sinematik lüks parfüm reklamı, fotogerçekçi, 16:9, yüksek moda reklam stili.

Sahne: parlak siyah yansıtıcı yüzeyli karanlık ve zarif bir stüdyo, havada yumuşak sis ve karanlığı kesen dramatik spot ışınları.
Minimalist lüks tasarımlı, zarif marka etiketi görünen premium cam parfüm şişesi merkezde durur; kristal berraklığında cam, içindeki altın sıvı, ultra gerçekçi yansımalar.

0–2s: parfüm şişesinin aşırı yakın makro çekimi; ışık cam kenarlarında gezinir, altın sıvı parlar, sinematik gölgeler ve üst düzey moda reklamı ışığı.

2–4s: slow motion — narin çiçek yaprakları (gül, yasemin) belirip şişenin çevresinde döner, yumuşak sis akar, parçacıklar ışınlarda parlar.

4–6s: şişedeki sıvı canlıymış gibi nazikçe hareket eder, altın parçacıklar yükselir, kapak slow motion'da hafifçe kalkar, ince büyülü gerçekçilik.

6–8s: parfüm spreyi slow motion'da havaya patlar, akışkan ipek benzeri buhara ve çiçek şekillerine dönüşür; zarif, sürreal, sinematik beauty shot.

8–10s: final hero shot — şişe yansıtıcı yüzeyin merkezinde, yumuşak parlayan sis ve yapraklarla çevrili, dramatik spot, lüks marka odağı, yüksek moda reklamı finali.

ultra gerçekçi, sinematik ışık, lüks reklam, makro ayrıntı, cam yansımaları, slow motion, alan derinliği, yumuşak ışıma, film kalitesi, zarif, premium estetik, metin bindirmesi yok, altyazı yok.
```

<details>
<summary>Özgün kaynak prompt</summary>

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

#### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2038574681377447936/vid/avc1/1300x720/yOgaI_BSFPBmI_5L.mp4?tag=24"><img src="https://pbs.twimg.com/amplify_video_thumb/2038574681377447936/img/e5gg6UBuoz2e7u6J.jpg" height="420" alt="Beş zamanlanmış reklam çekiminde lüks parfüm açılımı - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2038574681377447936/vid/avc1/1300x720/yOgaI_BSFPBmI_5L.mp4?tag=24)**
</div>

#### Kanıt

- **Üretici:** [Mr Das](https://x.com/MrDasOnX)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/MrDasOnX/status/2038574814378783159)
- **Yayımlandı:** 30 Mart 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="community-prompt-cases"></a>

## Topluluk video promptları

> Kaynak tarihi ve editoryal değere göre sıralanır.

<a id="workflow-camera-direction-shot-design"></a>

### Kamera yönetimi ve çekim tasarımı (2)

Kadraj, kamera yolu, blocking, tempo, açığa çıkarmalar ve geçişler etrafında kurulan çekim brifleri.

**Öne çıkan video promptları**

- [Sert geçişli hızlı uzay aracı detay montajı](#prompt-1)

<a id="prompt-2"></a>

#### #1: Zamanlanmış hikâye vuruşlarıyla masada koşan minik kameraman

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Zaman kodlarını, ölçek referanslarını, elde takip çekimini, ses ipuçlarını ve temiz bir hero-shot finalini kullanan dört vuruşlu minyatür kovalamaca.

##### Yerelleştirilmiş prompt

```
16:9 formatında 15 saniyelik sinematik bir video oluşturun. Büyük bir içerik üreticisinin masasında koşan 3 inçlik minik bir kameramanın POV'u. 0–4s: şehir binaları gibi görünen dev klavye tuşlarının yanından koşar. 4–8s: neon portal hissi veren parlayan telefon ekranının altından kayar. 8–12s: yukarı doğru çekerken dev bir kule gibi duran kahve fincanının çevresinde döner. 12–15s: bir deftere atlar, kamerayı izleyiciye çevirir ve masa dünyası dramatik bir hero-shot'ta donar. Sıcak güneş ışığı, gerçekçi minyatür ölçeği, akıcı elde takip, oyuncu üretici enerjisi. Audio: minik ayak sesleri, kamera klikleri, yumuşak whoosh'lar, neşeli elektronik ritim. Metin, altyazı ve logo yok.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
Create a 15 second cinematic video in 16:9. From the POV of a tiny 3 inch cameraman running across a giant content creator’s desk. 0–4s: he sprints past huge keyboard keys like city buildings. 4–8s: he slides under a glowing phone screen that feels like a neon portal. 8–12s: he circles a coffee cup like a massive tower while filming upward. 12–15s: he jumps onto a notebook, points the camera at the viewer, and the desk world freezes in a dramatic hero shot. Warm sunlight, realistic miniature scale, smooth handheld tracking, playful creator energy. Audio: tiny footsteps, camera clicks, soft whooshes, upbeat electronic beat. No text, no subtitles, no logos.
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2073857585468592128/vid/avc1/1280x720/rxriKyCHdrthsjfO.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2073857585468592128/img/ejoH2fAT7J9Pt6Xk.jpg" height="420" alt="Zamanlanmış hikâye vuruşlarıyla masada koşan minik kameraman - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2073857585468592128/vid/avc1/1280x720/rxriKyCHdrthsjfO.mp4?tag=25)**
</div>

##### Kanıt

- **Üretici:** [BMX](https://x.com/bmx_ai13)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/bmx_ai13/status/2073857648848716232)
- **Yayımlandı:** 5 Temmuz 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="workflow-dialogue-performance-native-audio"></a>

### Diyalog, performans ve yerel ses (3)

Konuşma, oyunculuk, ambiyans, müzik veya senkron sesin sahneyi taşıdığı performans odaklı promptlar.

**Öne çıkan video promptları**

- [Diyalog ve ses tasarımıyla ağır çekimde mısır gevreği patlaması](#prompt-3)
- [Senkron slapstick sesiyle tek çekimde kukla dövüşü](#prompt-5)

<a id="prompt-4"></a>

#### #2: Duraklamalar ve mikro ifadelerle taşınan ince tartışma

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Kısa diyalog, yüz nüansı, lens, ışık ve bilinçli duraklamalarla duygusal yönetmenliği sınayan ölçülü bir performans brifi.

##### Yerelleştirilmiş prompt

```
Öfkeli bir çiftin duygusal sahnesini oluşturun; sınırlı, vurucu diyalog, uygun ince mikro ifadeler, key fill ışığı ve anamorfik lensle sıcak renk düzeni, ekranda metin yok, duygusal olarak karmaşık ama ince, doğru açılar, bağımsız film dramı duyarlılığına sahip genç Amerikalı çift, öfke ve tam bir ifade aralığı için duraklamalar.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
Create an emotional scene of an angry couple, limited punchy dialogue, appropriate subtle micro expressions, warm color grading with key fill light and anamorphic lensing no onscreen text, emotionally complex but subtle proper angles, younger American couple with indie film drama sensibility with anger and pauses for a full range
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2070218111413035009/vid/avc1/1280x720/I6Uw_IbRpPre2CpL.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2070218111413035009/img/K5v2YoeYSUocr6rw.jpg" height="420" alt="Duraklamalar ve mikro ifadelerle taşınan ince tartışma - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2070218111413035009/vid/avc1/1280x720/I6Uw_IbRpPre2CpL.mp4?tag=25)**
</div>

##### Kanıt

- **Üretici:** [Kiri](https://x.com/Kyrannio)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/Kyrannio/status/2070218164609405380)
- **Yayımlandı:** 25 Haziran 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="workflow-product-motion-commercial-spots"></a>

### Ürün hareketi ve reklam spotları (2)

Ürünü, teklifi, giysiyi, yemeği, cihazı veya marka anını hareketin merkezinde tutan ticari klipler.

**Öne çıkan video promptları**

- [Beş zamanlanmış reklam çekiminde lüks parfüm açılımı](#prompt-11)

<a id="prompt-12"></a>

#### #3: Ürün son kartıyla doğal yeşil çay dökümü

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Yavaş döküm, buhar ve yaprak hareketi, sıcak gün ışığı, doğa sesleri, müzik, ambalaj ve zamanlanmış mesaj dizisinden oluşan wellness reklamı.

##### Yerelleştirilmiş prompt

```
Şeffaf cam bardağa taze yeşil çayın ağır çekimde döküldüğü sinematik bir reklam. Buhar hafifçe yükselirken taze yeşil çay yaprakları bardağın çevresine düşer. Sabah güneşi pencere yanındaki ahşap masadan geçerek sıcak doğal bir ışıltı oluşturur. Çay yapraklarında çiy damlası yakın planları, kuş sesli huzurlu doğa arka planı, rahatlatıcı yumuşak müzik ve sonunda şu metni taşıyan premium ürün ambalajı: ‘Pure Green Tea – Refresh Your Mind, Boost Your Day.’ Ultra gerçekçi, 4K reklam stili.

Ekran metni dizisi:
0–5 sec: Güne taze başla
5–10 sec: %100 Doğal Yeşil Çay
10–15 sec: Sağlığı yudumla, daha iyi yaşa.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
A cinematic advertisement of fresh green tea being poured into a transparent glass cup in slow motion. Steam rises softly while fresh green tea leaves fall around the cup. Morning sunlight shines through a wooden table near a window, creating a warm natural glow. Close-up shots of dew drops on tea leaves, a peaceful nature background with birds chirping, soft relaxing music, premium product packaging displayed at the end with text: ‘Pure Green Tea – Refresh Your Mind, Boost Your Day.’ Ultra-realistic, 4K commercial style.

On-screen text sequence:
0–5 sec: Start Your Day Fresh
5–10 sec: 100% Natural Green Tea
10–15 sec: Sip Wellness, Live Better.
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2054166808329080832/pu/vid/avc1/1280x720/A7qudxSoiMyyGMbz.mp4?tag=25"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2054166808329080832/pu/img/uMj-fcc76z8yMPzM.jpg" height="420" alt="Ürün son kartıyla doğal yeşil çay dökümü - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/ext_tw_video/2054166808329080832/pu/vid/avc1/1280x720/A7qudxSoiMyyGMbz.mp4?tag=25)**
</div>

##### Kanıt

- **Üretici:** [Ur Meer](https://x.com/UrMeer289)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/UrMeer289/status/2054167234290082149)
- **Yayımlandı:** 12 Mayıs 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="workflow-image-to-video-subject-continuity"></a>

### Görselden videoya ve konu sürekliliği (4)

Bir sabit görseli canlandırırken kimliği, kompozisyonu, ürün geometrisini veya storyboard yerleşimini koruyan görsel temelli iş akışları.

<a id="prompt-6"></a>

#### #4: Pratik film sürekliliğiyle meşale ışığında fantastik öpücük

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### İş akışı neden önemli

Tek bir live-action çekimde kostümü, set dokusunu ve karakter blocking'ini koruyarak komik romantik bir vuruş kuran referans kare devamı.

##### Yerelleştirilmiş prompt

```
1960'lar pratik film yapımı estetiği. Yüklenen görseli 14 saniyelik gerçek live-action film çekimi için tam başlangıç karesi olarak kullanın: sarışın zırhlı kadın kahraman ve kısa, sert görünümlü oyuncu meşalelerle aydınlanan taş odada birlikte kadrajda kalsın; ıslak saçlar ateş ışığında parlasın, pratik deri ve metal zırh yıpranma ve patina göstersin, duman mekânda süzülsün, parlayan közler yukarı yükselsin, sıcak amber ve turuncu ateş ışığı kaba taş duvarlarda titreşen gölgeler oluştursun.

Doğal gate weave ve ince film grenine sahip handheld 35mm anamorfik kamera çifte yavaşça yaklaşsın. Kadın kurnaz, sevecen bir gülümsemeyle eğilsin, gözleri onunkilere kilitlensin. Adam şaşkınlıkla yukarı baksın; gergin, tamamen büyülenmiş ve ana donmuş olsun.

Kadın ona tek, kısa ve oyuncu bir öpücük versin — hızlı, şefkatli bir an. Hemen ardından adam komik biçimde geriye bayılsın ve güvenle kadraj dışına yuvarlansın. Kadın doğrulsun, küçük muzaffer bir sırıtışla onu eğlenmiş bir memnuniyetle gözleriyle takip etsin.

Ortaçağ fantastik filminden ham pratik görüntüler gibi çekilmiş olsun: zengin sıcak tonlarda gerçek 1960'lar film stoku, doğal kusurlar, meşale lens flare'leri ve organik kamera sarsıntısı. Tüm sekans gerçek zamanlı, klasik macera sinemasını andıran teatral blocking ve zamanlamayla ilerlesin.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
Vintage 1960s practical filmmaking aesthetic. Use the uploaded image as the exact start frame for a 14-second real live-action film shot: the blonde armored heroine and short rugged actor remain in frame together inside a torchlit stone chamber with wet hair glistening in firelight, practical leather and metal armor showing wear and patina, smoke drifting through the space, glowing embers floating upward, warm amber and orange firelight casting flickering shadows on rough-hewn stone walls.

Handheld 35mm anamorphic camera with natural gate weave and subtle film grain slowly pushes in on the pair. She leans down with a sly, affectionate smile spreading across her face, her eyes locked on his. He looks up at her, stunned expression, nervous energy, completely charmed and frozen in the moment.

She gives him one brief, playful kiss — a quick, tender moment. Immediately after, he comically faints backward, safely tumbling out of frame. She straightens up, holding a tiny victorious smirk, eyes following him down with amused satisfaction.

Captured like raw practical footage from a medieval fantasy movie — authentic 1960s film stock look with rich warm tones, natural imperfections, slight lens flares from torchlight, organic camera shake. The entire sequence unfolds in real time with theatrical blocking and timing reminiscent of classic adventure cinema.
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2064435062935023616/vid/avc1/1280x720/6a89qw_0P05Eizwm.mp4?tag=27"><img src="https://pbs.twimg.com/amplify_video_thumb/2064435062935023616/img/2jonm-Korb5XcrU3.jpg" height="420" alt="Pratik film sürekliliğiyle meşale ışığında fantastik öpücük - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2064435062935023616/vid/avc1/1280x720/6a89qw_0P05Eizwm.mp4?tag=27)**
</div>

##### Kanıt

- **Üretici:** [Brent Lynch](https://x.com/BrentLynch)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/BrentLynch/status/2064437767963332901)
- **Yayımlandı:** 9 Haziran 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-7"></a>

#### #5: Ateş, kumaş ve ses fiziğiyle yüksek hızlı ejderha uçuşu

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### İş akışı neden önemli

Kamera yolunu, aerodinamik hareketi, hareketli ateş ışığını, parçacık atmosferini ve senkron sesi açık kontrol bloklarına ayıran zorlu referans animasyonu.

##### Yerelleştirilmiş prompt

```
Bu referans görseli HBO Game of Thrones ve House of the Dragon'daki epik ejderha sekanslarının tam görsel stilinde, 10-12 saniyelik nefes kesici sinematik videoya sadakatle dönüştürün. Referans görselle mükemmel tutarlılığı koruyun — Daenerys'in görünümü, Drogon'un anatomisi, pulları, kanat yapısı ve başlangıç ışığı.

Drogon King's Landing çatılarının üzerinde alçaktan, yüksek hızla uçar; güçlü ve gerçekçi kanat çırpışları ile gövde dalgalanması yapar. Çenesinden dev, türbülanslı ateş püskürür; alevler rüzgâra ve harekete gerçekçi akışkan fiziğiyle dinamik tepki verir, parlayan közler geriye uçar, yoğun ısı bozulması ve ışık patlaması oluşur. Ateş, eski taş binaları ve Red Keep'i aşağıdan hareketli sıcak vurgular ve derin gölgelerle aydınlatır.

Daenerys buyurgan bir duruşla öne eğilir; gümüş saçları ve ağır pelerini yüksek hızlı rüzgârda gerçekçi kumaş dinamiği ve ataletle şiddetle savrulur. Havada ince kıvılcım ve kül parçacıkları.

Camera: Drogon'u biraz arkadan ve yandan, ejderhayla yüksek hızda birlikte ilerleyerek takip eden dinamik, düşük açılı sinematik tracking-shot. Kamera ejderhanın hareketiyle hafifçe yükselip yatışır; hız, ölçek ve içine çekilme duygusu yaratır. Hafif handheld enerjisini kontrollü sinematik hassasiyetle birleştiren süpürücü, akıcı hareket.

Physics: rüzgârı yakalayıp doğal bükülen gerçekçi kanat zarı, doğal hareket eden tek tek kanat parmakları, gerçek ağırlık ve türbülansa sahip ağır pelerin ve saç, hava hareketiyle etkileşen gerçek akışkan dinamiğinde ateş.

Lighting & atmosphere: ejderha ateşi birincil hareketli ışık kaynağıdır ve şehir mimarisini aşağıdan dramatik biçimde aydınlatır. Hacimsel duman, köz ve ısı dalgası. Şehir üzerinde hafif pusla epik atmosferik derinlik.

Native synchronized audio: güçlü ejderha kükremesi, yoğun ateşin kükreyen whoosh'u, sert rüzgâr akışı ve doğal yankılı uzak şehir ambiyansı. Fotogerçekçi render, tutarlı hareket, karmaşık ayrıntı, artefakt yok, ARRI Alexa düzeyinde sadakat. Başyapıt, maksimum epik ölçek, hız ve sinematik etki.
```

<details>
<summary>Özgün kaynak prompt</summary>

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

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2067227819680178176/vid/avc1/1920x1080/Lyhy1DwxKbjXxXp-.mp4?tag=28"><img src="https://pbs.twimg.com/amplify_video_thumb/2067227819680178176/img/PAqDHuEWD_nCrT3q.jpg" height="420" alt="Ateş, kumaş ve ses fiziğiyle yüksek hızlı ejderha uçuşu - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2067227819680178176/vid/avc1/1920x1080/Lyhy1DwxKbjXxXp-.mp4?tag=28)**
</div>

##### Kanıt

- **Üretici:** [AYi](https://x.com/AYi_AInotes)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/AYi_AInotes/status/2067227900399562775)
- **Yayımlandı:** 17 Haziran 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-8"></a>

#### #6: Bağımsız mikro hareketli sabit editoryal grid

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### İş akışı neden önemli

Sekiz panelli yerleşimi ve kamerayı dondururken kontrollü nefes, göz kırpma, duman, alev ve saç hareketine izin veren yapılandırılmış bir stabilite testi.

##### Yerelleştirilmiş prompt

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
    "identity_lock": {"preserve_face": true,"preserve_hands": true,"preserve_glove": true,"preserve_cigarette_shape": true,"preserve_background": true},
    "scene": "8 panelli sert editoryal grid. Islak saçlı, dumanlı gözlü kadın, siyah eldiven, nötr duvar. Sert flaş ışığı. Paneller tamamen sabit kalır.",
    "movement_rules": {"start_immediately": true,"no_slow_motion": true,"natural_speed": true,"all_panels_active": true,"breathing": "her panelde görünür doğal nefes","blink": "panellere dağıtılmış doğal göz kırpmalar","eye_movement": "sürekli mikro göz kaymaları","smoke": "fiziksel olarak doğru sürekli yukarı duman akışı","flame": "sürekli ince alev titreşimi","hair": "ıslak saç tellerinde hafif hareket"},
    "stability_rules": ["kamera hareketi yok","yerleşim değişikliği yok","yüz morph'u yok","dudak titremesi yok","fazla parmak yok","duman glitch'i yok","arka plan titreşimi yok"],
    "quality_mode": "max_stability",
    "negative_prompt": ["slow motion","freeze frame","zoom","crop","panel drift","warped face","AI jitter"]
  }
}
```

<details>
<summary>Özgün kaynak prompt</summary>

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

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2024901412547641344/vid/avc1/720x1280/aLY-ZGPl4g6vpthr.mp4?tag=21"><img src="https://pbs.twimg.com/amplify_video_thumb/2024901412547641344/img/RWFQtc5G2WzSqmXu.jpg" height="420" alt="Bağımsız mikro hareketli sabit editoryal grid - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2024901412547641344/vid/avc1/720x1280/aLY-ZGPl4g6vpthr.mp4?tag=21)**
</div>

##### Kanıt

- **Üretici:** [Özge Döner](https://x.com/astronomerozge1)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/astronomerozge1/status/2024901494290743510)
- **Yayımlandı:** 20 Şubat 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-15"></a>

#### #7: Times Square’de uyuyan dev

![Language-EN](https://img.shields.io/badge/Language-EN-blue)
![Reference](https://img.shields.io/badge/Reference-Image%20Needed-orange)

##### İş akışı neden önemli

Referansla yönlendirilen gerçeküstü ölçek çekimi, kişiyi şehirde uyuyan bir deve dönüştürür; trafik, yol çizgileri, ekranlar ve eğik drone açısı ölçeği belirler.

##### Yerelleştirilmiş prompt

```
Yüklenen yüzü referans alan aşırı perspektifli drone çekimi; kişiyi Times Square’deki yoğun bir kavşağın ortasında kıvrılıp uyuyan bir dev olarak gösterir. Trafik dev bedenin çevresinden yönlendirilir ve sarı taksiler oyuncak arabalar kadar küçük görünür. Kişi bol, rahat gri eşofman altı ve kapüşonlu üst giyer. Asfalt işaretleri ve sokaktaki küçük parçalar ölçek ipuçları sağlar. Gece Times Square reklam panolarının elektrikli canlılığı, uyuyan figürün üzerine çok renkli ışık düşürür. Kamera yukarıdan bakar ancak binaların yüksekliğini göstermek için hafifçe eğimlidir. 8K çözünürlük, fotogerçekçi kalabalık ve araç ayrıntıları, mahremiyet ile kamusal kaosun gerçeküstü karşıtlığı.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
An extreme perspective drone shot capturing the uploaded face as reference as a sleeping giant curled up in the middle of a busy Times Square intersection. Traffic is diverted around the giant body, with yellow taxis appearing as toy cars in comparison. The subject is wearing oversized, comfortable grey sweatpants and a hoodie. The asphalt markings and street debris provide scale cues. The lighting is the electric vibrance of Times Square billboards at night, casting multi-colored light across the sleeping figure. The camera angle is top-down but slightly angled to show the height of the buildings. 8k resolution, photorealistic crowd and vehicle details, and a surreal juxtaposition of intimacy and public chaos.
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2077442928272953344/vid/avc1/832x1504/-WXJulilhZsyGpHg.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2077442928272953344/img/I7WDDHxses1etiXw.jpg" height="420" alt="Times Square’de uyuyan dev - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2077442928272953344/vid/avc1/832x1504/-WXJulilhZsyGpHg.mp4?tag=25)**
</div>

##### Kanıt

- **Üretici:** [Mr Das](https://x.com/MrDasOnX)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/MrDasOnX/status/2077443101631926682)
- **Yayımlandı:** 15 Temmuz 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="workflow-stylized-motion-visual-effects"></a>

### Stilize hareket ve görsel efektler (3)

Dönüşüm, simülasyon, sürreal fizik, grafik hareket veya ayırt edici medya işlemiyle yönlendirilen efekt ve animasyon kalıpları.

<a id="prompt-9"></a>

#### #8: Ölçülü ağır çekimde ay ışığında ejderha burun dokunuşu

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Tek bir nazik eyleme, ince kas hareketine, yansıtıcı pul detayına ve yumuşak ay ışığı atmosferine odaklanan statik yakın plan.

##### Yerelleştirilmiş prompt

```
Sinematik yakın plan, ağır çekim video. Yıldızlı biyolüminesans pullara sahip dev, kaslı altın bir ejderha ile daha narin, zarif gece moru bir ejderha ay ışığındaki büyülü ormanda dinlenir. İki ejderha başlarını yavaşça ve şefkatle birbirine yaklaştırır. Altın ejderha mor ejderhanın boynuna nazikçe dokunur. Pulları parlar ve gümüş ay ışığını yansıtır. Camera Movement: sabit çekim. Kamera pulların altındaki ince kas dalgalanmalarını ve gözlerdeki yumuşak amber parıltısını yakalar. Atmosphere & Lighting: dev dolunaylı yumuşak odaklı arka plan.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
Cinematic close-up, slow-motion video. A massive, muscular golden dragon and a more slender, elegant midnight purple dragon with starry bioluminescent scales are resting in a moonlit enchanted forest. The two dragons slowly and tenderly move their heads toward each other. The golden dragon gently nudges the purple dragon’s neck. Their scales shimmer and reflect the silver moonlight. Camera Movement: static shot, The camera captures the subtle muscle ripples under the scales and the soft amber glow in their eyes. Atmosphere & Lighting: Soft-focus background with a giant full moon.
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/ext_tw_video/2053639303700566016/pu/vid/avc1/1168x1728/iTKoCMbepTjPPd4a.mp4?tag=23"><img src="https://pbs.twimg.com/ext_tw_video_thumb/2053639303700566016/pu/img/paFojbfcBAr6mUm_.jpg" height="420" alt="Ölçülü ağır çekimde ay ışığında ejderha burun dokunuşu - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/ext_tw_video/2053639303700566016/pu/vid/avc1/1168x1728/iTKoCMbepTjPPd4a.mp4?tag=23)**
</div>

##### Kanıt

- **Üretici:** [auqib](https://x.com/auqibhabib)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/auqibhabib/status/2053639419266322623)
- **Yayımlandı:** 11 Mayıs 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-10"></a>

#### #9: Ağır darbe fiziğiyle kesintisiz dövüş sanatları geçişi

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Arazi geçişini, zincirlenmiş dövüş hareketlerini, gerçekçi momentumu, dairesel kamerayı ve kesmesiz kısıtı birleştiren altı saniyelik aksiyon brifi.

##### Yerelleştirilmiş prompt

```
Başyapıt kalitesinde, zorlu arazide ilerlerken acımasız ve yüksek yoğunluklu bir dövüşe giren son derece yetenekli dövüşçünün 6 saniyelik videosu. Karakter dönüş tekmeleri, uçan dizler, havada taklalar, duvar koşuları ve vahşi takedown'lar içeren hızlı ve güçlü dövüş sanatları kombinasyonları yapar. Ağır darbe ve momentumla güçlü gerçekçi fizik. Tracking-shot'lar, dairesel kamera ve dramatik alçak açılarla dinamik kamera. Sinematik ışık, keskin hareket netliği, yoğun ve ham aksiyon, kesme yok, akıcı ve güçlü koreografi, en iyi kalite, 6 saniyelik video.
```

<details>
<summary>Özgün kaynak prompt</summary>

```
Masterpiece quality, 6-second video of a highly skilled fighter traversing rough terrain while engaged in a brutal, high-intensity fight. The character performs fast, powerful martial arts combos including spinning kicks, flying knees, aerial flips, wall runs, and savage takedowns. Strong realistic physics with heavy impact and momentum. Dynamic camera work with tracking shots, circling camera, and dramatic low angles. Cinematic lighting, sharp motion clarity, intense and raw action, no cuts, smooth and powerful choreography, best quality, 6-second video.
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2067298117415059456/vid/avc1/688x464/-y07rGLLEnox_zTy.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2067298117415059456/img/fFgLi1L_hufsoKI6.jpg" height="420" alt="Ağır darbe fiziğiyle kesintisiz dövüş sanatları geçişi - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2067298117415059456/vid/avc1/688x464/-y07rGLLEnox_zTy.mp4?tag=25)**
</div>

##### Kanıt

- **Üretici:** [⭕Kisalay](https://x.com/Kisalay_)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/Kisalay_/status/2067298200520896673)
- **Yayımlandı:** 17 Haziran 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="prompt-14"></a>

#### #10: Ters akışlı su küresi

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Suyun bardaktan yukarı yükselip yumuşak gün ışığında havada asılı bir kürede toplandığı, fiziğe meydan okuyan kısa bir video istemi.

##### Yerelleştirilmiş prompt

```
Masanın üzerinde bir bardak su; su aniden bardaktan yukarı doğru akarak havada asılı bir küre oluşturur, fotogerçekçi, yumuşak gün ışığı
```

<details>
<summary>Özgün kaynak prompt</summary>

```
A glass of water on a table, the water suddenly flows upward out of the glass and forms a floating sphere, photorealistic, soft daylight
```

</details>

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2077061435562364928/vid/avc1/752x416/sWQUveRllw3DBHTI.mp4?tag=25"><img src="https://pbs.twimg.com/amplify_video_thumb/2077061435562364928/img/8qeVxVJrvKvXuW5h.jpg" height="420" alt="Ters akışlı su küresi - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2077061435562364928/vid/avc1/752x416/sWQUveRllw3DBHTI.mp4?tag=25)**
</div>

##### Kanıt

- **Üretici:** [atmen](https://x.com/atmen189)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/atmen189/status/2077238726120669192)
- **Yayımlandı:** 15 Temmuz 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

<a id="workflow-video-editing-restyling-scene-control"></a>

### Video düzenleme, yeniden stillendirme ve sahne kontrolü (1)

Sürekliliği koruyarak mevcut videoyu yeniden stillendiren, uzatan, ekleyen, kaldıran, değiştiren veya sahnenin bir kısmını yönlendiren iş akışları.

<a id="prompt-13"></a>

#### #11: Mevcut klibin atomik cyberpunk yeniden stillendirmesi

![Language-EN](https://img.shields.io/badge/Language-EN-blue)

##### İş akışı neden önemli

Kaynak videonun temel hareketini korurken görsel işlemi fütüristik bir cyberpunk stiline değiştirebileceğini gösteren bilinçli olarak minimal düzenleme talimatı.

##### Yerelleştirilmiş prompt

```
Stili fütüristik Cyberpunk olarak değiştir
```

<details>
<summary>Özgün kaynak prompt</summary>

```
Change the style to futuristic Cyberpunk
```

</details>

##### Kaynak ve sonuç kareleri

<table>
<tr>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/amplify_video_thumb/2018048438965768192/img/N0xaRAp2EYmuPcUF.jpg" width="100%" alt="Mevcut klibin atomik cyberpunk yeniden stillendirmesi - Image 1"></td>
<td width="50%" valign="top" align="center"><img src="https://pbs.twimg.com/amplify_video_thumb/2018048888234553344/img/Gjbr2r7c4rig1ghx.jpg" width="100%" alt="Mevcut klibin atomik cyberpunk yeniden stillendirmesi - Image 2"></td>
</tr>
</table>

##### Video

<div align="center">
<a href="https://video.twimg.com/amplify_video/2018048888234553344/vid/avc1/788x1168/_LiqbALuNiUVFZ9B.mp4?tag=21"><img src="https://pbs.twimg.com/amplify_video_thumb/2018048888234553344/img/Gjbr2r7c4rig1ghx.jpg" height="420" alt="Mevcut klibin atomik cyberpunk yeniden stillendirmesi - Motion preview"></a>

*Videoyu açmak için önizlemeye tıklayın* · **[▶ Videoyu izle →](https://video.twimg.com/amplify_video/2018048888234553344/vid/avc1/788x1168/_LiqbALuNiUVFZ9B.mp4?tag=21)**
</div>

##### Kanıt

- **Üretici:** [Tyler Keehner](https://x.com/STFUnion)
- **Kanonik kaynak:** [Kanonik kaynak](https://x.com/STFUnion/status/2018049167839400312)
- **Yayımlandı:** 1 Şubat 2026
- **Prompt dili:** en

**[Bu yönlendirmeyle oluştur · ImagineVid](https://imaginevid.io/tr/grok-imagine)**

---

## Doğrulanmış örnek gönder

Gerçek bir yönetmenlik kalıbı öğreten bir Grok Imagine Video örneği mi buldunuz? Promptu, oynatılabilir sonucu, üreticiyi, kaynağı, model kanıtını ve giriş modunu GitHub Issues üzerinden gönderin.

### GitHub issue

1. [**Video promptu gönder**](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/issues/new?template=submit-prompt.yml)
2. Tam brifi, kaynağı, üreticiyi, model kanıtını ve oynatılabilir medyayı sağlayın
3. Bir maintainer kökeni, video değerini, kapsamı ve kopyaları kontrol eder
4. Onaylanan örnekler yerel veri kaynağına normalize edilir
5. Generator tüm kalite kontrolleri geçince örneği yayımlar

**Editör kuralı:** Popülerlik kanıt değildir. Eksiksiz promptu ve yararlı videosu olan düşük etkileşimli bir gönderi, yeniden üretilebilir yönlendirmesi olmayan viral bir gösteriden daha değerli olabilir.

Göndermeden önce [CONTRIBUTING.md](docs/CONTRIBUTING.md) dosyasını okuyun.

---

## Lisans

ImagineVid'in editoryal metni ve kodu [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) lisanslıdır. Üçüncü taraf promptları, üretici kimlikleri, ticari markalar, görseller ve videolar ilgili sahiplerinde kalır ve bu lisansa dahil değildir.

---

## Üretici kredileri

<details>
<summary>Community creators we thank (13)</summary>

[⭕Kisalay](https://x.com/Kisalay_) · [atmen](https://x.com/atmen189) · [auqib](https://x.com/auqibhabib) · [AYi](https://x.com/AYi_AInotes) · [BMX](https://x.com/bmx_ai13) · [Brent Lynch](https://x.com/BrentLynch) · [Dogan Ural](https://x.com/doganuraldesign) · [Kiri](https://x.com/Kyrannio)<br>
[Krista Gable](https://x.com/DomainDomme) · [Mr Das](https://x.com/MrDasOnX) · [Özge Döner](https://x.com/astronomerozge1) · [Tyler Keehner](https://x.com/STFUnion) · [Ur Meer](https://x.com/UrMeer289)

</details>

---

## Depo büyümesi

[![GitHub stars](https://img.shields.io/github/stars/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills?style=for-the-badge&logo=github&label=GitHub%20Stars)](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/stargazers)

**[Depo büyümesi](https://star-history.com/#imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills&Date)**

---

<div align="center">

**[Grok Imagine Video ile üret](https://imaginevid.io/tr/grok-imagine)** •
**[Doğrulanmış örnek gönder](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills/issues/new?template=submit-prompt.yml)** •
**[Koleksiyona yıldız ver](https://github.com/imaginevid-ai/Awesome-grok-imagine-video-prompts-and-skills)**

<sub>Sürümlenen yerel veriden oluşturulma zamanı 2026-07-20T21:10:23.351Z</sub>

</div>
