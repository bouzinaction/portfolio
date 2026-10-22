/**
 * ============================================================================
 * PORTFOLIO MATÉO (SIR MARCEL) — JAVASCRIPT ENGINE (script.js)
 * Clean Vanilla JS : FR/EN Dynamic Toggle, Audio Streamer, Ferrari Scroll Flow
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     01. BILINGUAL TRANSLATION DICTIONARY (Exact texts by Matéo)
     ========================================================================== */
  const translations = {
    fr: {
      nav_moi: "Moi",
      nav_influences: "Influences",
      nav_projets: "Projets",
      nav_lutherie: "Lutherie",
      nav_encours: "En cours",
      nav_perspectives: "Perspectives",
      nav_contact: "Contact",

      title_moi: "Moi",
      moi_body: `
        <p>je m'appelle Matéo, mon nom d'artiste est Sir Marcel.</p>
        <p>J'ai 22ans et j'ai toujouts été passionné par la musique, ça a commencé quand mon petit frère à reçu une guitare en jouet quand on était petit. J'étais tellement jaloux de lui que je lui volait tout le temps et j'essayais de comprendre comment ça pouvait bien fonctionner. Mes parents ont fini par m'inscrire dans une école de musique mais je n'y suis resté q'un an. J'ai ensuite pris quelques cours de guitare electrique car j'aimais le rock mais j'ai fini par apprendre majoritairement en autodidacte. Je m'enregistrais sur garageband et je jouais avec mon tonton qui fait de la guitare aussi ! Il m'a appris mes premiers morceaux vraiment cool !</p>
        <p>Ensuite j'ai découvert le piano vers 2019 je suis tombé amoureux de cet instrument et malgré le fait de ne jamais avoir pris de cours, il m'a naturellement guidé vers la découverte des synthétiseurs. Mon premier fut un korg minilogue !</p>
        <p>J'ai toujours aimé composer mes propres musiques je me suis véritablement lancé en 2020 quand j'ai acheté ableton live 10 vers le printemps 2020. Je n'ai pas changé de version depuis !</p>
        <p>au fur et à mesure j'ai commencé à créer des morceaux de plus en plus aboutis jusqu'à créer mes deux premiers projets (que je présenterai plus tard).</p>
        <p class="highlight-quote">La composition est clairement plus qu'un passe temps pour moi c'est littéralement ce qui occupe 80% de mon temps libre (les 20% autres pourcents sont passés à écouter de la musique). Malgré le fait de m'être lancé dans des études dans un tout autre domaine qui est la mécanique (qui me passionne aussi d'ailleurs car j'ai réussi à travailler dans la formule 1 dans le cadre de mes études en apprentissage le sport automobile étant une autre de mes passions), j'ai toujours gardé en tête l'idée de me lancer plus sérieusement dans la musique.</p>
        <p>aujourd'hui c'est en me lançant dans une formation que j'espère pouvoir y arriver !</p>
      `,
      badge_tag_daw: "DAW & PRODUCTION",
      badge_desc_daw: "Utilisé quotidiennement depuis le printemps 2020 pour toutes les compositions, mixages et sound design.",
      badge_tag_inst: "INSTRUMENTS CLEFS",
      badge_list_inst: `
        <li>&bull; Korg Minilogue (1er synthétiseur)</li>
        <li>&bull; Piano & Claviers</li>
        <li>&bull; Guitare électrique</li>
        <li>&bull; Jazz Bass sur mesure faite main</li>
      `,
      badge_tag_eng: "PARCOURS TECHNIQUE",
      badge_desc_eng: "Ingénieur mécanique (ENSAM Bordeaux) &times; Expérience professionnelle en Formule 1.",

      title_influences: "Influences musicales",
      influences_intro: "voici ici quelque uns de mes artistes favoris qui sont aussi mes principales influences, cela a évidemment été très dur de choisir, je pourrais en ajouter des dizaines mais j'ai essayer de choisir ceux avec qui j'ai l'impression d'avoir un affect particuliers, que j'écoute depuis longtemps, qui m'ont influencé artistiquement et pour qui j'ai des anecdtotes !",
      flip_hint: "survoler pour lire →",
      tyler_text: "Ce que j'aime chez Tyler the Creator, c'est les univers différents qu'il est capable de créer pour chacun de ses projets, mon préféré reste indéniablement Igor qui a été mon influence principale sur mon premier album autant sur le plan visuel que musical. Il a d'ailleurs été pour moi une porte d'entrée vers le jazz et plus largement la soul. Je me souviens que cet album m'a été recommandé à l'époque par ma copine et je n'avais pas du tout apprécié à la première écoute et finalement je suis totalement tombé dedans après avoir à peine persévéré.",
      aphex_text: "ce que j'aime chez aphex twin c'est ses sons ambient, le sound design et le fait qu'il soir capable de proposer sur un même album une maginfique et iconique ballade au piano comme \"avril 14th\" puis des sonorité completement chaotiques, complexes et percussives. J'aime également le fait qu'il soit impliqué dans la création de ses propres machines et logiciel, son logiciel \"sample brain\" dévolppé avec David Griffith m'a d'ailleurs beaucoup inspiré pour créer mon propre logiciel \"machina\"",
      daft_text: "ce que j'aime chez les Daft punk c'est d'abord le fait que ce soit des Français qui ont réussi à hypnotiser le monde de la musique à l'international comme rarement dans l'histoire, leur style est immédiatement reconnaissable, ils ont réussi à faire des hits avec des samples très court qui tournent en boucle je pense notamment à \"fresh\" qui fait parti pour moi de leur meilleurs morceaux. C'est dans ce domaine qu'ils excellent de mon point de vue car c'est aussi compliqué de composer un morceaux qui fait danser et dont on ne se lasse jamais qui ne fait que quelques pistes que de composer avec des arrangements complexes. Ils ont su fait les deux comme le montre Homework et Random Access Memories",
      pink_text: "Ce que j'aime chez pink Floyd c'est la progressivité de leur musique, il m'arrive souvent de ré-écouter les deux parties de shine on your crazy diamond ou même l'album The dark side of the moon et je suis à chaque fois émerveillé devant à quel point ces morceaux me font rentrer dans une bulle et comment toutes les parties s'enchainent naturellement. J'ai d'ailleurs récupéré la platine vinyl sony de ma grand mère et elle m'a donné son vinyl de l'album Wish you were here (au passage aussi ma chanson préférée) qui date de fin 70s ! Je suis jaloux qu'elle les ait vu deux fois en concert !!!!",
      radiohead_text: "Ce que j'aime chez radiohead c'est souvent l'émotion que leur musique me procure, un des premiers morceaux que mon tonton me jouait à la guitare c'était just et j'étais juste émerveillé sur comment ce morceau sonnait différent du rock que j'écoutais étant petit (j'étais plutôt à fond sur les guns n roses) c'est vers la fin de l'adolescence que j'ai vraiment commencé à apprécier leur musique. J'ai eu la chance de les voir en concert à Berlin et j'ai retrouvé cette sensation si particulière d'envoutement et de frisson sur presque chacune de leurs musiques. (j'ai d'ailleurs toujours pas compris comment thom York arrive à jouer + chanter \"pyramid\" en live)",

      title_projets: "Projets musicaux",
      album1_tag: "Premier Projet Album",
      album2_tag: "Deuxième Projet Album",
      playlist_title: "Extraits sonores",

      title_lutherie: "Lutherie et créations",
      bass_title: "Fabrication de ma Jazz Bass (2021)",
      bass_body: `
        <p>en 2021, j'ai entrepris la fabrication de mon propre modèle de jazz bass, j'ai donc récupéré les plans sur internet, fait imprimer en taille réelle et me voilà lancé dans un projet qui m'aura pris 6 mois.</p>
        <p>J'ai décidé d'acheter le manche et de ne réaliser "que" le corps car cela reste un instrument avec lequel j'avais l'intention de jouer et la fabrication d'un manche requiert des compétences plus poussés en lutherie ainsi que des outils spécifiques.</p>
        <p>Ma partie préférée a été le creusage des formes dans le corps directement à la lime, car ce fut long mais c'était la derniere étape avant d'obtenir la forme définitive du corps.</p>
        <p class="highlight-quote">Ma basse est aujourd'hui complètement fonctionnelle et m'a d'ailleurs servi sur beaucoup de mes morceaux !!!</p>
      `,
      bass_audio_sub: "Enregistrement direct avec la basse fabriquée",
      gallery_bass_title: "Étapes de fabrication & résultat final",

      desk_title: "Bureau de home studio sur mesure (Fin 2025)",
      desk_body: `
        <p>fin 2025 je me suis lancé dans la fabrication d'un bureau sur mesure pour mon home studio. Etant donné de l'espace assez reduit que je possède il à fallu que je trouve le moyen de placer mes deux synthés dessus.</p>
        <p class="highlight-quote">Il possède un grand tiroir qui s'ouvre complètement ainsi que de deux colonnes de rangement "cachées" dans les pieds du bureau, cela permet d'avoir du rangement pour les cables ou autres accessoirs tout en gardant un aspect important : le design !</p>
      `,
      gallery_desk_title: "Conception CATIA, Rendus 3D & Bureau fini",

      title_encours: "Projets en cours",
      machina_tag: "Logiciel audio expérimental",
      machina_body: `
        <p>machina est un logiciel que j'ai imaginé en m'inspirant du travail de Richard D James et David Griffith sur leur logiciel sample brain. Il fonctionne sur la base d'une banque de sample que l'on vient découper en miliers de fragments audios à l'aide d'un modèle mathématique appelé "wavelet transform", on vient ensuite charger un sample "cible" et l'algorithme va en temps réel analyser le sample cible et jouer le fragment de sample contenu dans la banque de son qui y ressemble le plus (aussi basé sur une analyse frequentielle). On peut jouer sur différents paramètres pour influencer le choix de l'algorithme sur le fragment audio joué en temps réel. Cela donne lui à des textures assez étranges et chaotiques.Le programme a une vocation assez experimentale. J'ai également ajouté une partie sequenceur avec des drone voice pour que l'instrument permette de jouer des musiques assez complètes à lui seul. J'ai utilisé l'ia pour sécuriser et accélérer la partie codage mais la partie modèle mathématique, interface, fonctionnement etc vient de moi et de mes inspirations !</p>
      `,
      machina_audio_sub: "Démonstration sonore générée par Machina",

      elektro_tag: "Nouveau projet musical",
      elektro_body: `
        <p>j'aimerais me lancer dans la creation d'un nouveau projet musical plus abouti que mes deux précédents, avec une direction beaucoup plus electronique et une forte présence de piano mélangé a des sonorités de synthétiseurs plus aeriennes, ambient. Il s'appellera elektromania, à ce stade je suis en core en phase de reflexion sur la direction artistique et j'enregistre plusieurs maquettespour trouver la direction vers laquelle je souhaite m'orienter</p>
        <p class="highlight-quote">sur ce proejt j'aimerais augmenter le niveau de cohérence entre chaque morceau ainsi que la qualité du mixage.</p>
      `,

      title_perspectives: "Mes perspectives d'améliorations",
      perspectives_body: `
        <p>durant ces prochaines années j'aimerais améliorer mon jeu au clavier</p>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>-améliorer mon niveau en mix</strong>, j'ai souvent appris par moi même à travers des vidéos sur internet où l'on entend beaucoup de conseils différents, je n'ai jamais vraiement eu de recul sur mon travail concernant le mixage, j'aimerais développer cette compétence entouré par des gens compétents capable d'analyser mes points faible et m'aider à les effacer.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p>comme beaucoup de musiciens qui composent j'ai souvent laissé des projets à l'abandon sans jamais les terminer, c'est une chose que je suis en train de faire améliorer mias qui est malheureusement toujours présente. j'ai acheté le livre "comment finir ses morceaux" de adrien perinot de la chaine projet home studio pour m'aider dans cette demarche</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>-pour mes projets musicaux personnel je n'ai pas du tout assez développé la communication</strong> autour de mon travail, c'est un pan essentiel dans le développement d'un artiste. C'est loin d'être ma partie préférée mais elle est obligatoire, j'aimerais augmenter ma présence notamment sur les resaux pour partager mon travail mais également garder une trace de mon évolution !</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>-je n'ai jamais fait de live</strong> (excepté 2-3 concerts étant petit à l'école de musique mais je considère qu'on ne le comptera pas) c'est quelque chose qui est dans ma tête depuis un certain temps, j'ai d'ailleurs récemment acheté mon premier Controller pour essayer de développer mon aisance à jouer et aire évoluer des morceaux en live.</p>
        </div>
      `,

      title_contact: "Contact",
      contact_heading: "Matéo Bouzidi <span class=\"aka-light\">(Sir Marcel)</span>"
    },

    en: {
      nav_moi: "About",
      nav_influences: "Influences",
      nav_projets: "Projects",
      nav_lutherie: "Craft & Luthiery",
      nav_encours: "In Progress",
      nav_perspectives: "Goals",
      nav_contact: "Contact",

      title_moi: "About Me",
      moi_body: `
        <p>My name is Matéo, my artist name is Sir Marcel.</p>
        <p>I am 22 years old and have always been passionate about music. It started when my younger brother received a toy guitar when we were kids. I was so jealous of him that I kept stealing it from him, trying to understand how it could possibly work. My parents eventually enrolled me in a music school, but I only stayed for a year. I then took a few electric guitar lessons because I loved rock, but I ended up learning mostly self-taught. I recorded myself on GarageBand and played with my uncle who also plays guitar! He taught me my first truly cool songs!</p>
        <p>Then I discovered the piano around 2019, fell in love with this instrument, and despite never having taken formal lessons, it naturally guided me towards the discovery of synthesizers. My first was a Korg Minilogue!</p>
        <p>I have always loved composing my own music; I truly launched myself in 2020 when I bought Ableton Live 10 around spring 2020. I haven't changed versions since!</p>
        <p>Gradually, I started creating increasingly refined tracks until producing my first two complete projects (which I will present later).</p>
        <p class="highlight-quote">Composing is clearly more than a hobby for me: it literally occupies 80% of my free time (the remaining 20% is spent listening to music). Despite studying in an entirely different field—mechanical engineering (which also fascinates me, as I managed to work in Formula 1 during my apprenticeship studies, motorsport being another passion)—I have always kept in mind the goal of pursuing music seriously.</p>
        <p>Today, it is by entering formal professional training that I hope to achieve this!</p>
      `,
      badge_tag_daw: "DAW & PRODUCTION",
      badge_desc_daw: "Used daily since spring 2020 for all compositions, mixing, and sound design.",
      badge_tag_inst: "KEY INSTRUMENTS",
      badge_list_inst: `
        <li>&bull; Korg Minilogue (1st synthesizer)</li>
        <li>&bull; Piano & Keyboards</li>
        <li>&bull; Electric Guitar</li>
        <li>&bull; Handcrafted custom Jazz Bass</li>
      `,
      badge_tag_eng: "ENGINEERING BACKGROUND",
      badge_desc_eng: "Mechanical Engineer (ENSAM Bordeaux) &times; Professional apprenticeship in Formula 1.",

      title_influences: "Musical Influences",
      influences_intro: "Here are some of my favorite artists who are also my primary influences. It was obviously difficult to choose; I could add dozens, but I chose those for whom I have a personal connection, whom I have listened to for years, who have influenced me artistically, and for whom I have stories to share!",
      flip_hint: "hover to read →",
      tyler_text: "What I love about Tyler the Creator is the distinct universes he creates for each of his projects. My favorite remains undeniably IGOR, which was my main influence on my first album both visually and musically. It was also my gateway into jazz and soul music. I remember this album was originally recommended by my girlfriend at the time; I didn't like it on first listen, and then I completely fell in love with it after barely giving it another chance.",
      aphex_text: "What I love about Aphex Twin is his ambient soundscapes, his sound design, and his ability to deliver on the same record a magnificent, iconic piano ballad like \"Avril 14th\" right next to completely chaotic, complex, and percussive textures. I also love that he is directly involved in creating his own machines and software; his software \"Samplebrain\" developed with David Griffith greatly inspired me to create my own software \"Machina\".",
      daft_text: "What I love about Daft Punk is first that they are French artists who managed to hypnotize the international music world like few in history. Their style is immediately recognizable. They crafted anthems with short looping samples—I think especially of \"Fresh\", which is among their finest tracks for me. That is where they excel: it is just as hard to make people dance endlessly with a track of only a few stems as it is to compose intricate arrangements. They proved they could master both, as seen in Homework and Random Access Memories.",
      pink_text: "What I love about Pink Floyd is the progression of their music. I often replay both parts of \"Shine On You Crazy Diamond\" or The Dark Side of the Moon, and I am amazed every time by how naturally everything flows and draws you into a cocoon. I inherited my grandmother's vintage Sony turntable, and she gave me her original 1970s vinyl of Wish You Were Here (my favorite song). I am jealous she saw them live twice in concert!",
      radiohead_text: "What I love about Radiohead is the deep emotion their music evokes. One of the first songs my uncle played on guitar was \"Just\", and I was astonished by how different it sounded from the standard rock I listened to as a kid (I was big on Guns N' Roses). Towards late adolescence, I truly came to appreciate their music. I had the chance to see them live in Berlin, experiencing that spellbinding chill on almost every song (and I still don't understand how Thom Yorke plays piano and sings \"Pyramid Song\" at the same time live).",

      title_projets: "Musical Projects",
      album1_tag: "First Album Project",
      album2_tag: "Second Album Project",
      playlist_title: "Audio Extracts",

      title_lutherie: "Craft & Luthiery",
      bass_title: "Building My Own Jazz Bass (2021)",
      bass_body: `
        <p>In 2021, I undertook building my own model of Jazz Bass. I sourced blueprints online, printed them at 1:1 scale, and launched into a project that took 6 months.</p>
        <p>I decided to buy the neck and craft \"only\" the body, as this remained an instrument I intended to actually play, and neck fabrication requires more advanced luthiery skills and specialized tools.</p>
        <p>My favorite part was carving the contours and chamfers into the body directly with hand files: it was long, but it was the final step before obtaining the definitive body shape.</p>
        <p class="highlight-quote">My bass is now completely functional and has been recorded on many of my songs!</p>
      `,
      bass_audio_sub: "Direct sound recording with the handcrafted bass",
      gallery_bass_title: "Build steps & finished instrument",

      desk_title: "Custom Home Studio Desk (Late 2025)",
      desk_body: `
        <p>In late 2025, I embarked on fabricating a custom desk for my home studio. Given the limited space I have, I needed a way to place my two synthesizers on it.</p>
        <p class="highlight-quote">It features a large drawer that pulls out completely as well as two storage columns \"hidden\" within the legs, providing cable and accessory storage while preserving a crucial aspect: design!</p>
      `,
      gallery_desk_title: "CATIA Design, 3D Renders & Studio Setup",

      title_encours: "Projects in Progress",
      machina_tag: "Experimental audio software",
      machina_body: `
        <p>Machina is an audio software I conceptualized taking inspiration from Richard D. James and David Griffith's Samplebrain software. It works using a sample library sliced into thousands of micro-fragments using a mathematical model called \"Wavelet Transform\". You then load a target sample, and the algorithm analyzes the target in real time to trigger the library fragment that sounds closest (also based on spectral analysis). You can tweak various parameters to influence algorithmic choices in real time, yielding strange, chaotic textures. The program is experimental. I also added a step sequencer with drone voices so the instrument can generate complete pieces on its own. I used AI to assist and accelerate the coding, but the mathematical model, UI, architecture, and concepts are entirely mine!</p>
      `,
      machina_audio_sub: "Audio demonstration generated with Machina",

      elektro_tag: "Upcoming musical project",
      elektro_body: `
        <p>I would like to create a new musical project more mature than my previous two, with a stronger electronic direction and heavy piano presence blended with airy, ambient synth textures. It will be named Elektromania; right now I am reflecting on the artistic direction and recording demos to find the exact sonic direction.</p>
        <p class="highlight-quote">On this project, I want to elevate the overall cohesion between tracks and the quality of the mix.</p>
      `,

      title_perspectives: "My Improvement Goals",
      perspectives_body: `
        <p>Over the coming years, I want to improve my keyboard technique.</p>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>-improve my mixing level</strong>: I largely learned on my own through internet videos offering diverse advice; I never truly had objective critical feedback on my mixing. I want to build this skill surrounded by competent mentors who can diagnose and correct my weak points.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p>Like many composing musicians, I have often left projects unfinished; this is something I am improving but which still happens. I purchased the book \"How to Finish Your Songs\" by Adrien Perinot (Projet Home Studio) to guide me in this process.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>-for my personal musical projects, I haven't developed communication enough</strong> around my work, which is essential for an artist. It is far from my favorite part, but it is required. I want to increase my presence, especially on social networks, to share my work and keep a log of my evolution!</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>-I have never performed live</strong> (apart from 2-3 childhood concerts at music school, which I don't count). This has been on my mind for a while; I recently purchased my first controller to develop ease in playing and evolving songs live.</p>
        </div>
      `,

      title_contact: "Contact",
      contact_heading: "Matéo Bouzidi <span class=\"aka-light\">(Sir Marcel)</span>"
    }
  };

  let currentLang = 'fr';

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update buttons in header
    const frOpt = document.querySelector('.lang-opt.lang-fr');
    const enOpt = document.querySelector('.lang-opt.lang-en');
    if (frOpt && enOpt) {
      frOpt.classList.toggle('active', lang === 'fr');
      enOpt.classList.toggle('active', lang === 'en');
    }

    try {
      localStorage.setItem('sirmarcel_lang_v2', lang);
    } catch (e) {}
  }

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }

  try {
    const saved = localStorage.getItem('sirmarcel_lang_v2');
    if (saved && (saved === 'fr' || saved === 'en')) {
      applyLanguage(saved);
    }
  } catch (e) {}


  /* ==========================================================================
     02. FERRARI-STYLE DIAPORAMA SCROLL & SECTION REVEAL
     Sections smoothly appear as they enter viewport
     ========================================================================== */
  const sections = document.querySelectorAll('.slide-section');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-target') === id);
        });
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));


  /* ==========================================================================
     03. FLIP CARD TAP SUPPORT (Mobile / Touch Devices)
     ========================================================================== */
  document.querySelectorAll('.flip-card-wrapper').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });


  /* ==========================================================================
     04. ABLETON-STYLE AUDIO PLAYER CONTROLLER
     Centralized playback for all WAV files with scrub bar and volume
     ========================================================================== */
  const audioEl = document.getElementById('native-audio-player');
  const btnPlay = document.getElementById('btn-audio-play');
  const btnPrev = document.getElementById('btn-audio-prev');
  const btnNext = document.getElementById('btn-audio-next');
  const nowTitle = document.getElementById('now-playing-title');
  const nowAlbum = document.getElementById('now-playing-album');
  const timeCur = document.getElementById('time-current');
  const timeTot = document.getElementById('time-total');
  const seekTrack = document.getElementById('seek-bar-track');
  const seekFill = document.getElementById('seek-bar-fill');
  const volSlider = document.getElementById('master-vol-slider');

  const trackItems = Array.from(document.querySelectorAll('.track-item'));
  let currentIndex = -1;
  let isPlaying = false;

  function formatTime(s) {
    if (isNaN(s) || s < 0) return '00:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  function playTrackAt(index) {
    if (index < 0 || index >= trackItems.length) return;
    currentIndex = index;
    const item = trackItems[index];
    const src = item.getAttribute('data-src');
    const title = item.getAttribute('data-title') || item.querySelector('.track-title')?.textContent || 'Extrait Audio';
    const albumName = item.closest('.tracks-list')?.getAttribute('data-album') || 'Création / Démo';

    trackItems.forEach((t, i) => {
      t.classList.toggle('playing', i === index);
      const symbol = t.querySelector('.btn-symbol');
      if (symbol) symbol.textContent = (i === index) ? '⏸' : '▶';
    });

    audioEl.src = src;
    if (nowTitle) nowTitle.textContent = title;
    if (nowAlbum) nowAlbum.textContent = albumName;
    if (timeCur) timeCur.textContent = '00:00';
    if (seekFill) seekFill.style.width = '0%';

    audioEl.play().then(() => {
      isPlaying = true;
      if (btnPlay) btnPlay.textContent = '⏸';
    }).catch(e => {
      console.warn('Playback error or waiting for gesture:', e);
    });
  }

  function togglePlay() {
    if (!audioEl.src || currentIndex === -1) {
      playTrackAt(0);
      return;
    }
    if (audioEl.paused) {
      audioEl.play().then(() => {
        isPlaying = true;
        if (btnPlay) btnPlay.textContent = '⏸';
        if (trackItems[currentIndex]) {
          trackItems[currentIndex].classList.add('playing');
          const sym = trackItems[currentIndex].querySelector('.btn-symbol');
          if (sym) sym.textContent = '⏸';
        }
      });
    } else {
      audioEl.pause();
      isPlaying = false;
      if (btnPlay) btnPlay.textContent = '▶';
      if (trackItems[currentIndex]) {
        const sym = trackItems[currentIndex].querySelector('.btn-symbol');
        if (sym) sym.textContent = '▶';
      }
    }
  }

  trackItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      if (currentIndex === idx) {
        togglePlay();
      } else {
        playTrackAt(idx);
      }
    });
  });

  if (btnPlay) btnPlay.addEventListener('click', togglePlay);

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (trackItems.length === 0) return;
      let newIdx = currentIndex - 1;
      if (newIdx < 0) newIdx = trackItems.length - 1;
      playTrackAt(newIdx);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (trackItems.length === 0) return;
      let newIdx = currentIndex + 1;
      if (newIdx >= trackItems.length) newIdx = 0;
      playTrackAt(newIdx);
    });
  }

  audioEl.addEventListener('timeupdate', () => {
    if (!audioEl.duration) return;
    const cur = audioEl.currentTime;
    const tot = audioEl.duration;
    if (timeCur) timeCur.textContent = formatTime(cur);
    if (timeTot) timeTot.textContent = formatTime(tot);
    if (seekFill) {
      seekFill.style.width = `${(cur / tot) * 100}%`;
    }
  });

  audioEl.addEventListener('loadedmetadata', () => {
    if (timeTot) timeTot.textContent = formatTime(audioEl.duration);
  });

  audioEl.addEventListener('ended', () => {
    let nextIdx = currentIndex + 1;
    if (nextIdx < trackItems.length) {
      playTrackAt(nextIdx);
    } else {
      isPlaying = false;
      if (btnPlay) btnPlay.textContent = '▶';
      if (trackItems[currentIndex]) {
        trackItems[currentIndex].classList.remove('playing');
        const sym = trackItems[currentIndex].querySelector('.btn-symbol');
        if (sym) sym.textContent = '▶';
      }
    }
  });

  if (seekTrack) {
    seekTrack.addEventListener('click', (e) => {
      if (!audioEl.duration) return;
      const rect = seekTrack.getBoundingClientRect();
      const clickPercent = (e.clientX - rect.left) / rect.width;
      audioEl.currentTime = clickPercent * audioEl.duration;
    });
  }

  if (volSlider) {
    volSlider.addEventListener('input', (e) => {
      audioEl.volume = parseFloat(e.target.value);
    });
  }


  /* ==========================================================================
     05. CENTERED HOVER ZOOM VIEWER (Image 100% visible, uncropped, centered)
     ========================================================================== */
  const hoverViewer = document.getElementById('hover-zoom-viewer');
  const hoverImg = document.getElementById('hover-zoom-img');
  const hoverCap = document.getElementById('hover-zoom-caption');

  document.querySelectorAll('.zoom-image').forEach(img => {
    img.addEventListener('mouseenter', () => {
      if (!hoverViewer || !hoverImg) return;
      const src = img.getAttribute('src');
      const cap = img.getAttribute('data-caption') || img.getAttribute('alt') || '';
      hoverImg.src = src;
      if (hoverCap) {
        hoverCap.textContent = cap;
        hoverCap.style.display = cap ? 'inline-block' : 'none';
      }
      hoverViewer.classList.add('active');
    });

    img.addEventListener('mouseleave', () => {
      if (!hoverViewer) return;
      hoverViewer.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    if (hoverViewer) hoverViewer.classList.remove('active');
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    if (hoverViewer) hoverViewer.classList.remove('active');
  });

  /* ==========================================================================
     06. MINIMALIST IMAGE LIGHTBOX (On click)
     ========================================================================== */
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCap = document.getElementById('lightbox-caption');
  const modalClose = document.getElementById('lightbox-close-btn');

  function openImage(src, caption) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    if (modalCap) modalCap.textContent = caption || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeImage() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalImg) modalImg.src = '';
  }

  document.querySelectorAll('.zoom-image').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openImage(img.getAttribute('src'), img.getAttribute('data-caption') || img.getAttribute('alt') || '');
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeImage);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lightbox-backdrop')) {
        closeImage();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeImage();
  });

});
