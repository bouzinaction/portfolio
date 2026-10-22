/**
 * ============================================================================
 * PORTFOLIO MATÉO (SIIR MARCEL) — JAVASCRIPT ENGINE (script.js)
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
        <p>Je m'appelle Matéo, aka Siir Marcel.</p>
        <p>J'ai 22 ans et j'ai toujours été passionné par la musique. Tout a commencé quand mon petit frère a reçu une guitare en jouet quand on était petits. J'étais tellement jaloux de lui que je la lui volais tout le temps, juste pour essayer de comprendre comment ça pouvait bien fonctionner. Mes parents voyant cela ont fini par m'inscrire dans une école de musique, mais je n'y suis resté qu'un an. J'ai ensuite pris quelques cours de guitare électrique car j'adorais le rock, mais j'ai fini par apprendre majoritairement en autodidacte. Je m'enregistrais sur GarageBand et je jouais avec mon tonton qui fait de la guitare aussi ! Il m'a appris mes premiers morceaux vraiment cool !</p>
        <p>J'ai découvert le piano au lycée. Je suis véritablement tombé amoureux de cet instrument et, malgré le fait de ne jamais avoir pris de cours, cela m'a tout naturellement guidé vers la découverte des synthétiseurs. Mon tout premier fut un Korg Minilogue !</p>
        <p>J'ai toujours aimé composer mes propres musiques, mais je me suis véritablement lancé quand j'ai acheté Ableton Live 10 vers le printemps 2020. Je n'ai pas changé de version depuis !</p>
        <p>Au fur et à mesure, j'ai commencé à créer des morceaux de plus en plus aboutis, jusqu'à donner vie à mes deux premiers projets (que je présenterai plus tard).</p>
        <p class="highlight-quote">La composition est clairement bien plus qu'un passe-temps pour moi : c'est littéralement ce qui occupe la majorité de mon temps libre (le temps restant est passé à écouter de la musique). Malgré le fait de m'être lancé dans des études de mécanique à la sortie du lycée (ce qui m'a permis de travailler dans la Formule 1 et de toucher du doigt un premier rêve), j'ai toujours gardé au fond de moi l'idée de lier mon activité professionnelle à la musique.</p>
        <p>Aujourd'hui, j'espère concrétiser cet objectif !</p>
      `,

      title_influences: "Influences musicales",
      influences_intro: "Voici quelques-uns de mes artistes favoris qui sont aussi mes principales influences. Je pourrais en ajouter des dizaines, mais j'ai essayé de choisir ceux avec qui j'ai un affect particulier, que j'écoute depuis longtemps, qui m'ont influencé artistiquement et pour qui j'ai des anecdotes !",
      other_influences_title: "Autres influences :",
      flip_hint: "survoler pour lire →",
      daft_text: "Ce que j'aime chez Daft Punk, c'est d'abord le fait que ce soit des Français qui ont réussi à hypnotiser le monde de la musique à l'international comme rarement dans l'histoire. Leur son est immédiatement reconnaissable, ils ont réussi à faire des hits avec des samples très courts tournant en boucle, je pense notamment à « Fresh » qui fait partie pour moi de leurs meilleurs morceaux. C'est dans ce domaine qu'ils excellent de mon point de vue, car c'est aussi complexe de composer un morceau « simple » dont on ne se lasse jamais qui ne fait que quelques pistes que de composer avec des arrangements complexes. Ils ont su faire les deux comme le montrent Homework et Random Access Memories. Ils sont trop forts.",
      aphex_text: "Ce que j'aime chez Aphex Twin, ce sont ses sons ambient, son sound design et le fait qu'il soit capable de proposer sur un même album une magnifique et iconique ballade au piano comme « Avril 14th », puis des sonorités complètement chaotiques, complexes et percussives. J'aime également le fait qu'il soit impliqué dans la création de ses propres machines et logiciels : son logiciel « Samplebrain », développé avec Dave Griffiths, m'a d'ailleurs beaucoup inspiré pour concevoir mon propre programme « Machina ».",
      pink_text: "Ce que j'aime chez Pink Floyd, c'est la progressivité de leur musique. Il m'arrive souvent de réécouter les deux parties de « Shine On You Crazy Diamond » ou même l'album The Dark Side of the Moon, et je suis à chaque fois émerveillé devant la façon dont ces morceaux me plongent dans une bulle et comment toutes les parties s'enchaînent naturellement. J'ai d'ailleurs récupéré la platine vinyle Sony de ma grand-mère et elle m'a donné son vinyle de l'album Wish You Were Here (au passage ma chanson préférée) qui date de la fin des années 70 ! Je suis jaloux qu'elle les ait vus deux fois en concert !",
      radiohead_text: "Ce que j'aime chez Radiohead, c'est souvent l'émotion que leur musique me procure. Un des premiers morceaux que mon tonton me jouait à la guitare c'était « Just », et j'étais émerveillé par la façon dont ce morceau sonnait différemment du rock que j'écoutais étant petit (j'étais plutôt à fond sur les Guns N' Roses dès le matin dans le train direction le collège). C'est vers la fin de l'adolescence que j'ai vraiment commencé à apprécier leur musique. J'ai eu la chance de les voir en concert à Berlin et j'ai retrouvé cette sensation si particulière d'envoûtement et de frisson sur presque chacun de leurs morceaux (je n'ai d'ailleurs toujours pas compris comment Thom Yorke arrive à jouer + chanter « Pyramid Song » en live). Il y a quelque chose de pur et vulnérable mais puissant, autant dans la personnalité du groupe que dans leur musique.",
      tyler_text: "Ce que j'aime chez Tyler, The Creator, ce sont les univers différents qu'il est capable de créer pour chacun de ses projets. Mon préféré reste indéniablement IGOR, qui a été mon influence principale sur mon premier album, autant sur le plan visuel que musical. Il a d'ailleurs été pour moi une porte d'entrée vers le jazz et plus largement vers la soul. Je me souviens que cet album m'avait été recommandé par ma copine et je n'avais pas du tout accroché à la première écoute, avant de finalement tomber totalement dedans après avoir à peine persévéré !",

      title_projets: "Projets musicaux",
      album1_tag: "Premier Projet Album",
      album2_tag: "Deuxième Projet Album",
      album1_body: `
        <p>Electric Marguerite est mon premier projet musical. À cette époque, je voulais créer un univers avec un personnage mystérieux qui transportait toujours avec lui une mallette rouge. Cet album m'a énormément formé : j'ai essayé, effacé, recommencé un nombre incalculable de fois pour trouver où je voulais emmener chaque musique, en essayant de faire en sorte qu'elles soient progressives. La plupart du temps, l'inspiration venait naturellement en pratiquant : j'ai découvert que ce n'est pas en cherchant pendant des heures ou en se posant trop de questions qu'on parvient à aboutir à quelque chose qui fonctionne. Il faut faire, commencer, et la vision du projet se construit et se définit au fur et à mesure, le plaisir guidant l'inspiration.</p>
        <p>J'ai géré absolument toute la partie artistique (composition, imagination du costume, de la cover, des affiches, définition de la direction artistique générale). Côté technique, je remercie encore un ami qui m'a énormément aidé pour le mixage (quand je réécoute aujourd'hui, je trouve que le mixage et certaines prises sont imparfaits, mais il faut bien commencer !). Deux autres amis ont réalisé et monté mes clips vidéo.</p>
        <p>Je dirais que j'ai assez mal géré la partie communication, et le projet a eu son petit succès dans mon cercle élargi d'amis, mais après avoir mis tant d'efforts dans la création, j'ai sans doute trop pensé que les choses se feraient d'elles-mêmes.</p>
        <p class="highlight-quote">J'en garde de très bons retours et je retiens surtout le principal : une expérience formidable et la fierté d'avoir été capable d'aller au bout d'un projet complet.</p>
      `,
      album2_body: `
        <p>Drama est mon deuxième projet musical, je voulais quelque chose de beaucoup plus court avec des musiques plus « sombres ».</p>
        <p>Ce deuxième projet est, je trouve, moins abouti que le premier mais c'est en partie lié au fait que je le voyais plutôt comme un EP. Les musiques sont en général plus simplistes mais elles restent avec une identité qui me correspond.</p>
        <p>Ce projet m'a appris que c'est loin d'être plus facile de faire une musique qui « fonctionne » à la première écoute. La musique instrumentale a besoin d'être constamment en mouvement sans que cela se remarque parfois, que ce soit par le mix, en modulant les effets ou de par les mélodies : même une musique répétitive doit être pleine de mouvement.</p>
        <p class="highlight-quote">C'est ce que j'ai essayé d'appliquer sur ce projet dont je suis également très fier !</p>
      `,
      playlist_title: "Extraits sonores",

      title_lutherie: "Lutherie et créations",
      bass_title: "Fabrication de ma Jazz Bass (2021)",
      bass_body: `
        <p>En 2021, j'ai entrepris la fabrication de mon propre modèle de Jazz Bass. J'ai donc récupéré les plans sur Internet, fait imprimer en taille réelle et me voilà lancé dans un projet qui m'aura pris 6 mois.</p>
        <p>J'ai décidé d'acheter le manche et de ne réaliser « que » le corps car cela reste un instrument avec lequel j'avais l'intention de jouer, et la fabrication d'un manche requiert des compétences plus poussées en lutherie ainsi que des outils spécifiques.</p>
        <p>Ma partie préférée a été le creusage des formes d'amincissement dans le corps directement à la lime, car ce fut long mais c'était la dernière étape avant d'obtenir la forme définitive du corps.</p>
        <p class="highlight-quote">Ma basse est aujourd'hui complètement fonctionnelle et m'a d'ailleurs servi sur beaucoup de mes morceaux !!!</p>
      `,
      bass_audio_sub: "Enregistrement direct avec la basse fabriquée",
      gallery_bass_title: "Étapes de fabrication & résultat final",

      desk_title: "Bureau de home studio sur mesure (Fin 2025)",
      desk_body: `
        <p>Fin 2025, je me suis lancé dans la fabrication d'un bureau pour mon home studio. Étant donné l'espace assez réduit que je possède, il a fallu que je trouve le moyen de placer mes deux synthés dessus.</p>
        <p>Il possède un grand tiroir qui s'ouvre complètement ainsi que deux colonnes de rangement « cachées » dans les pieds du bureau, cela permet d'avoir de l'espace pour les câbles ou autres accessoires tout en gardant un aspect important : le design !</p>
        <p class="highlight-quote">Ce projet m'a pris 6 mois entre la conception, la fabrication et le montage. J'ai pu faire sous-traiter la soudure et la découpe du bois à quelques amis qui ont le matériel.</p>
      `,
      gallery_desk_title: "Conception CATIA, Rendus 3D & Bureau fini",

      title_encours: "Projets en cours",
      machina_tag: "Logiciel audio expérimental",
      machina_body: `
        <p>Machina est un logiciel que j'ai imaginé en m'inspirant du travail de Richard D. James et Dave Griffiths sur leur logiciel Samplebrain. Il fonctionne sur la base d'une banque de samples que l'on vient découper en milliers de fragments audio à l'aide d'un modèle mathématique appelé « wavelet transform » ; on vient ensuite charger un sample « cible » et l'algorithme va en temps réel analyser le sample cible et jouer le fragment de sample contenu dans la banque de son qui y ressemble le plus (aussi basé sur une analyse fréquentielle). On peut jouer sur différents paramètres pour influencer le choix de l'algorithme sur le fragment audio joué en temps réel. Cela donne lieu à des textures assez étranges et chaotiques. Le programme a une vocation assez expérimentale. J'ai également ajouté une partie séquenceur avec des drone voices pour que l'instrument permette de jouer des musiques assez complètes à lui seul. J'ai utilisé l'IA pour sécuriser et accélérer la partie codage mais la partie modèle mathématique, interface, fonctionnement, etc., vient de moi et de mes inspirations !</p>
      `,
      machina_audio_sub: "Démonstration sonore générée par Machina",

      elektro_tag: "Nouveau projet musical",
      elektro_body: `
        <p>Je me suis lancé dans la création d'un nouveau projet musical, mon objectif est qu'il soit plus abouti que mes deux précédents, avec une direction beaucoup plus électronique et une forte présence de piano mélangé à des sonorités de synthétiseurs plus aériens, ambient. Il s'appellera Elektromania, à ce stade je suis encore en phase de réflexion sur la direction artistique et j'enregistre plusieurs maquettes pour trouver la direction vers laquelle je souhaite m'orienter.</p>
        <p>J'enregistre quasiment tous mes sons à l'aide de mon ASM Hydrasynth et j'utilise mon Moog Grandmother pour les basses. Je compte également le composer pour qu'il soit facile d'improviser sur les musiques et faire un album facilement adaptable au live. C'est encore loin d'être concret pour moi mais c'est un domaine dans lequel je souhaite m'entraîner.</p>
        <p class="highlight-quote">Sur ce projet j'aimerais augmenter le niveau de cohérence entre chaque morceau, la qualité du mixage ainsi que la partie communication dont j'ai compris qu'elle était cruciale.</p>
        <p>Voici quelques extraits de maquettes en avant-première ainsi que des aperçus visuels de la direction artistique.</p>
      `,
      elektro_audio_title: "Extraits de maquettes en avant-première",
      elektro_visuals_title: "Inspirations visuelles & moodboard",

      title_perspectives: "Mes perspectives d'améliorations",
      perspectives_body: `
        <p>Durant ces prochaines années, j'aimerais améliorer mon jeu au clavier.</p>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>Améliorer mon niveau en mix :</strong> j'ai souvent appris par moi-même à travers des vidéos sur Internet où l'on entend beaucoup de conseils différents ; je n'ai jamais vraiment eu de recul sur mon travail concernant le mixage, j'aimerais développer cette compétence entouré par des gens compétents capables d'analyser mes points faibles et m'aider à les effacer.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p>Comme beaucoup de musiciens qui composent, j'ai souvent laissé des projets à l'abandon sans jamais les terminer, c'est une chose que je suis en train d'améliorer mais qui est malheureusement toujours présente. J'ai acheté le livre « Comment finir ses morceaux » d'Adrien Perinot de la chaîne Projet Home Studio pour m'aider dans cette démarche.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>Pour mes projets musicaux personnels, je n'ai pas du tout assez développé la communication</strong> autour de mon travail, c'est un pan essentiel dans le développement d'un artiste. C'est loin d'être ma partie préférée mais elle est obligatoire, j'aimerais augmenter ma présence notamment sur les réseaux sociaux pour partager mon travail mais également garder une trace de mon évolution ! Je souhaite m'entourer d'une personne qui aura une vision à laquelle je peux m'identifier et qui pourra m'aider.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>Je n'ai jamais fait de live</strong> (excepté 2-3 concerts étant petit à l'école de musique mais je considère qu'on ne le comptera pas), c'est quelque chose qui est dans ma tête depuis un certain temps, j'ai d'ailleurs récemment acheté mon premier contrôleur MIDI pour essayer de développer mon aisance à jouer et faire évoluer des morceaux en live.</p>
        </div>
      `,

      title_contact: "Contact",
      contact_heading: "Matéo Bouzidi <span class=\"aka-light\">(Siir Marcel)</span>"
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
        <p>My name is Matéo, aka Siir Marcel.</p>
        <p>I am 22 years old and have always been passionate about music. It all started when my younger brother received a toy guitar when we were kids. I was so jealous of him that I kept stealing it from him, trying to understand how it could possibly work. Seeing this, my parents enrolled me in a music school, but I only stayed for a year. I then took a few electric guitar lessons because I loved rock, but I ended up learning mostly self-taught. I recorded myself on GarageBand and played with my uncle who also plays guitar! He taught me my first truly cool songs!</p>
        <p>I discovered the piano in high school. I truly fell in love with this instrument, and despite never having taken formal lessons, it naturally guided me towards the discovery of synthesizers. My very first was a Korg Minilogue!</p>
        <p>I have always loved composing my own music, but I truly launched myself when I bought Ableton Live 10 around spring 2020. I haven't changed versions since!</p>
        <p>Gradually, I started creating increasingly refined tracks until producing my first two complete projects (which I will present later).</p>
        <p class="highlight-quote">Composing is clearly much more than a hobby for me: it literally occupies the majority of my free time (the remaining time is spent listening to music). Despite pursuing mechanical engineering studies after high school (which allowed me to work in Formula 1 and touch my first dream), I have always kept in mind the goal of tying my professional career to music.</p>
        <p>Today, I hope to turn that goal into reality!</p>
      `,

      title_influences: "Musical Influences",
      influences_intro: "Here are some of my favorite artists who are also my primary influences. I could add dozens, but I chose those for whom I have a personal connection, whom I have listened to for years, who have influenced me artistically, and for whom I have stories to share!",
      other_influences_title: "Other influences:",
      flip_hint: "hover to read →",
      daft_text: "What I love about Daft Punk is first that they are French artists who managed to hypnotize the international music world like few in history. Their style is immediately recognizable. They crafted anthems with short looping samples—I think especially of \"Fresh\", which is among their finest tracks for me. That is where they excel: it is just as hard to make people dance endlessly with a track of only a few stems as it is to compose intricate arrangements. They proved they could master both, as seen in Homework and Random Access Memories. They are brilliant.",
      aphex_text: "What I love about Aphex Twin is his ambient soundscapes, his sound design, and his ability to deliver on the same record a magnificent, iconic piano ballad like \"Avril 14th\" right next to completely chaotic, complex, and percussive textures. I also love that he is directly involved in creating his own machines and software: his software \"Samplebrain\", developed with Dave Griffiths, greatly inspired me to design my own program \"Machina\".",
      pink_text: "What I love about Pink Floyd is the progression of their music. I often replay both parts of \"Shine On You Crazy Diamond\" or The Dark Side of the Moon, and I am amazed every time by how naturally everything flows and draws you into a cocoon. I inherited my grandmother's vintage Sony turntable, and she gave me her original 1970s vinyl of Wish You Were Here (my favorite song). I am jealous she saw them live twice in concert!",
      radiohead_text: "What I love about Radiohead is the deep emotion their music evokes. One of the first songs my uncle played on guitar was \"Just\", and I was astonished by how different it sounded from the standard rock I listened to as a kid (I was big on Guns N' Roses). Towards late adolescence, I truly came to appreciate their music. I had the chance to see them live in Berlin, experiencing that spellbinding chill on almost every song (and I still don't understand how Thom Yorke plays piano and sings \"Pyramid Song\" at the same time live). There is something pure, vulnerable yet powerful in both their personality and music.",
      tyler_text: "What I love about Tyler, The Creator is the distinct universes he creates for each of his projects. My favorite remains undeniably IGOR, which was my main influence on my first album both visually and musically. It was also my gateway into jazz and soul music. I remember this album was originally recommended by my girlfriend at the time; I didn't like it on first listen, and then I completely fell in love with it after barely giving it another chance!",

      title_projets: "Musical Projects",
      album1_tag: "First Album Project",
      album2_tag: "Second Album Project",
      album1_body: `
        <p>Electric Marguerite is my first musical project. Back then, I wanted to create an entire universe around a mysterious character who always carried a red briefcase. This album trained me immensely: I tried, erased, and restarted countless times to discover where I wanted each song to go, aiming for progressive development. Inspiration usually came naturally through practice: I realized that spending hours overthinking never yields results that work. You have to start making, and the vision defines itself along the way, guided by creative enjoyment.</p>
        <p>I directed all the artistic components (composition, costume concept, album cover, posters, overall artistic direction). On the technical side, I warmly thank a friend who helped me tremendously with mixing (listening back today, the mix and some takes are imperfect, but everyone has to start somewhere!). Two other friends filmed and edited my music videos.</p>
        <p>I would say I handled promotional communication rather poorly; the project found its modest audience within my broader circle of friends, but having poured so much energy into creation, I assumed things would happen on their own.</p>
        <p class="highlight-quote">I received wonderful feedback and retain the core accomplishment: a fantastic journey and the pride of seeing a full project through to completion.</p>
      `,
      album2_body: `
        <p>Drama is my second musical project. I wanted something much more concise with darker textures.</p>
        <p>I find this second project less comprehensive than the first, partly because I envisioned it more as an EP. The tracks are generally more stripped back, but they retain an identity that is authentically mine.</p>
        <p>This project taught me that making music that clicks on first listen is never easy. Instrumental music needs constant subtle motion—through mix modulations, automation, or melodic variations: even repetitive music must stay alive.</p>
        <p class="highlight-quote">That is what I sought to implement on this project, of which I am also very proud!</p>
      `,
      playlist_title: "Audio Extracts",

      title_lutherie: "Craft & Luthiery",
      bass_title: "Building My Own Jazz Bass (2021)",
      bass_body: `
        <p>In 2021, I undertook building my own model of Jazz Bass. I sourced blueprints online, printed them at 1:1 scale, and launched into a project that took 6 months.</p>
        <p>I decided to buy the neck and craft \"only\" the body, as this remained an instrument I intended to actually play, and neck fabrication requires more advanced luthiery skills and specialized tools.</p>
        <p>My favorite part was carving the contours and body chamfers directly with hand files: it took time, but it was the final step before obtaining the definitive body shape.</p>
        <p class="highlight-quote">My bass is now completely functional and has been recorded on many of my songs!</p>
      `,
      bass_audio_sub: "Direct sound recording with the handcrafted bass",
      gallery_bass_title: "Build steps & finished instrument",

      desk_title: "Custom Home Studio Desk (Late 2025)",
      desk_body: `
        <p>In late 2025, I embarked on fabricating a custom desk for my home studio. Given the limited space I have, I needed a way to place my two synthesizers on it.</p>
        <p>It features a large drawer that pulls out completely as well as two storage columns \"hidden\" within the legs, providing cable and accessory storage while preserving a crucial aspect: design!</p>
        <p class="highlight-quote">This project took 6 months from conception to fabrication and assembly. I outsourced the metal welding and wood cuts to friends equipped with professional machinery.</p>
      `,
      gallery_desk_title: "CATIA Design, 3D Renders & Studio Setup",

      title_encours: "Projects in Progress",
      machina_tag: "Experimental audio software",
      machina_body: `
        <p>Machina is an audio software I conceptualized taking inspiration from Richard D. James and Dave Griffiths' Samplebrain software. It works using a sample library sliced into thousands of micro-fragments using a mathematical model called \"Wavelet Transform\". You then load a target sample, and the algorithm analyzes the target in real time to trigger the library fragment that sounds closest (also based on spectral analysis). You can tweak various parameters to influence algorithmic choices in real time, yielding strange, chaotic textures. The program is experimental. I also added a step sequencer with drone voices so the instrument can generate complete pieces on its own. I used AI to assist and accelerate the coding, but the mathematical model, UI, architecture, and concepts are entirely mine!</p>
      `,
      machina_audio_sub: "Audio demonstration generated with Machina",

      elektro_tag: "Upcoming musical project",
      elektro_body: `
        <p>I have begun work on a new musical project, aiming for higher maturity than my previous two, with a much more electronic direction and a heavy piano presence blended with airy, ambient synth textures. It will be named Elektromania; right now I am in the artistic reflection phase, recording various demos to define our sonic identity.</p>
        <p>I record almost all sounds with my ASM Hydrasynth and use my Moog Grandmother for basslines. I also plan to compose it so that improvisation is intuitive, making the album easily adaptable to live performance. It's still early stage, but it's an area I am committed to practicing.</p>
        <p class="highlight-quote">On this project, I want to elevate the overall cohesion between tracks, the quality of the mix, and the communication strategy, which I realized is crucial.</p>
        <p>Here are several exclusive preview demos alongside visual moodboard explorations.</p>
      `,
      elektro_audio_title: "Preview demo extracts",
      elektro_visuals_title: "Visual inspirations & moodboard",

      title_perspectives: "My Improvement Goals",
      perspectives_body: `
        <p>Over the coming years, I want to improve my keyboard technique.</p>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>Improve my mixing level:</strong> I largely learned on my own through internet videos offering diverse advice; I never truly had objective critical feedback on my mixing. I want to build this skill surrounded by competent mentors who can diagnose and correct my weak points.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p>Like many composing musicians, I have often left projects unfinished; this is something I am improving but which still happens. I purchased the book \"How to Finish Your Songs\" by Adrien Perinot (Projet Home Studio) to guide me in this process.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>For my personal musical projects, I haven't developed communication enough</strong> around my work, which is essential for an artist. It is far from my favorite part, but it is required. I want to increase my presence, especially on social networks, to share my work and keep a log of my evolution! I wish to collaborate with someone who shares a creative vision I can identify with and who can assist me.</p>
        </div>
        <div class="persp-item-box">
          <span class="bullet-arrow">&bull;</span>
          <p><strong>I have never performed live</strong> (apart from 2-3 childhood concerts at music school, which I don't count). This has been on my mind for a while; I recently purchased my first MIDI controller to develop ease in playing and evolving songs live.</p>
        </div>
      `,

      title_contact: "Contact",
      contact_heading: "Matéo Bouzidi <span class=\"aka-light\">(Siir Marcel)</span>"
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

    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) {
      document.querySelectorAll('.flip-hint').forEach(hint => {
        hint.textContent = lang === 'fr' ? 'toucher pour lire \u2192' : 'tap to read \u2192';
      });
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


  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

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
          const isActive = link.getAttribute('data-target') === id;
          link.classList.toggle('active', isActive);
          if (isActive && window.innerWidth <= 768) {
            link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        });
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(s => observer.observe(s));


  /* ==========================================================================
     03. FLIP CARD TAP SUPPORT (Mobile / Touch Devices)
     ========================================================================== */
  document.querySelectorAll('.flip-card-wrapper').forEach(card => {
    card.addEventListener('click', (e) => {
      card.classList.toggle('flipped');
    });
  });

  // Tap outside anywhere to unflip active cards on mobile/tablet
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.flip-card-wrapper')) {
      document.querySelectorAll('.flip-card-wrapper.flipped').forEach(c => {
        c.classList.remove('flipped');
      });
    }
  });

  // Touch hint adaptation
  if (isTouchDevice) {
    document.querySelectorAll('.flip-hint').forEach(hint => {
      hint.textContent = currentLang === 'fr' ? 'toucher pour lire \u2192' : 'tap to read \u2192';
    });
  }


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
