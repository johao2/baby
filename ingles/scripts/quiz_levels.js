// scripts/quiz_levels.js

// Estructura de las preguntas: [Nivel, Tema, ID, Preguntas]
const allLevelQuizzes = [
    // ----------------------------------------------------------------------
    // NIVEL 1: BÁSICO (Refuerzo de Tiempos) - MODALIDAD: RELLENAR HUECOS
    // ----------------------------------------------------------------------
    { id: 'L1T1', level: 'Básico 1', title: 'Pasado Simple vs. Presente Perfecto', questions: [
        { prompt: "She (live) ________ in Vancouver for ten years.", answer: "has lived", type: "fill" },
        { prompt: "I (finish) ________ the book yesterday evening.", answer: "finished", type: "fill" },
        { prompt: "They (not/see) ________ the movie yet.", answer: "have not seen", type: "fill" },
        { prompt: "The company (begin) ________ operations in 1999.", answer: "began", type: "fill" },
        { prompt: "We (already/eat) ________ when he arrived.", answer: "had already eaten", type: "fill" },
        { prompt: "The machine (break) ________ down last night.", answer: "broke", type: "fill" },
        { prompt: "We have (be) ________ very busy lately.", answer: "been", type: "fill" },
        { prompt: "He (not/come) ________ to the party last week.", answer: "did not come", type: "fill" },
        { prompt: "They (buy) ________ the car in 2020.", answer: "bought", type: "fill" },
        { prompt: "I (know) ________ the answer, but I said nothing.", answer: "knew", type: "fill" },
        { prompt: "The storm (start) ________ 3 hours ago.", answer: "started", type: "fill" },
        { prompt: "She (not/speak) ________ to me recently.", answer: "has not spoken", type: "fill" },
        { prompt: "They (drink) ________ all the coffee this morning.", answer: "drank", type: "fill" },
        { prompt: "I (tell) ________ him the truth, but he didn't listen.", answer: "told", type: "fill" },
        { prompt: "The project (take) ________ more time than expected.", answer: "took", type: "fill" },
        { prompt: "We (visit) ________ Paris three times.", answer: "have visited", type: "fill" },
        { prompt: "The meeting (end) ________ ten minutes ago.", answer: "ended", type: "fill" },
        { prompt: "They (lose) ________ the game yesterday.", answer: "lost", type: "fill" },
        { prompt: "He (write) ________ a letter before he left.", answer: "wrote", type: "fill" },
        { prompt: "She (bring) ________ her own food.", answer: "brought", type: "fill" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 2: INTERMEDIO (Errores Comunes de CLB 7/8) - MODALIDAD: RELLENAR HUECOS
    // ----------------------------------------------------------------------
    { id: 'L2T1', level: 'Intermedio 1', title: 'Condicionales 1 & 2 y Wish', questions: [
        { prompt: "If I (be) ________ the CEO, I would hire more staff.", answer: "were", type: "fill" },
        { prompt: "I wish I ________ (have) more time to study.", answer: "had", type: "fill" },
        { prompt: "If you work hard, you (pass) ________ the exam.", answer: "will pass", type: "fill" },
        { prompt: "Unless you (finish) ________ the report, we cannot submit it.", answer: "finish", type: "fill" },
        { prompt: "If they (not/be) ________ so busy, they would come.", answer: "were not", type: "fill" },
        { prompt: "If it (rain) ________ tomorrow, the event will be cancelled.", answer: "rains", type: "fill" },
        { prompt: "I wish I (can) ________ fly.", answer: "could", type: "fill" },
        { prompt: "If she (call) ________ me, I will tell her the news.", answer: "calls", type: "fill" },
        { prompt: "If he (not/have) ________ a car, he takes the bus.", answer: "does not have", type: "fill" },
        { prompt: "I would travel more if I (have) ________ more money.", answer: "had", type: "fill" },
        { prompt: "We (go) ________ to the beach if it were sunny.", answer: "would go", type: "fill" },
        { prompt: "If they (study) ________, they will succeed.", answer: "study", type: "fill" },
        { prompt: "I wish I (know) ________ his name.", answer: "knew", type: "fill" },
        { prompt: "If I (see) ________ him, I will give him the message.", answer: "see", type: "fill" },
        { prompt: "She (feel) ________ better if she exercised more.", answer: "would feel", type: "fill" },
        { prompt: "I wish I (not/eat) ________ so much cake.", answer: "had not eaten", type: "fill" },
        { prompt: "If we (leave) ________ now, we'll catch the train.", answer: "leave", type: "fill" },
        { prompt: "They (buy) ________ a new house if they won the lottery.", answer: "would buy", type: "fill" },
        { prompt: "If I (be) ________ you, I wouldn't do that.", answer: "were", type: "fill" },
        { prompt: "I wish it (be) ________ summer.", answer: "were", type: "fill" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 3: AVANZADO (Gramática CLB 9+) - MODALIDAD: RELLENAR HUECOS (INVERSIÓN)
    // ----------------------------------------------------------------------
    { id: 'L3T1', level: 'Avanzado 1', title: 'Inversión y Subjuntivo Formal', questions: [
        { prompt: "Not only ________ (the product/launch) successfully, but it also sold out.", answer: "did the product launch", type: "fill" },
        { prompt: "Had ________ (the weather/be) better, we would have finished the race.", answer: "the weather been", type: "fill" },
        { prompt: "The board demands that the CEO ________ (resign) immediately.", answer: "resign", type: "fill" },
        { prompt: "Under no circumstances ________ (you/allow) anyone to enter the room.", answer: "are you to allow", type: "fill" },
        { prompt: "Only after the negotiations failed ________ (the company/sue) the rival.", answer: "did the company sue", type: "fill" },
        { prompt: "Never before ________ (I/hear) such compelling evidence.", answer: "have I heard", type: "fill" },
        { prompt: "Should ________ (you/need) assistance, contact the helpdesk.", answer: "you need", type: "fill" },
        { prompt: "It is essential that the data ________ (be) kept confidential.", answer: "be", type: "fill" },
        { prompt: "Rarely ________ (the government/intervene) in private matters.", answer: "does the government intervene", type: "fill" },
        { prompt: "Were ________ (I/travel) to space, I would bring a camera.", answer: "I to travel", type: "fill" },
        { prompt: "Little ________ (they/realize) the risks they were taking.", answer: "did they realize", type: "fill" },
        { prompt: "The mandate requires that she ________ (start) work immediately.", answer: "start", type: "fill" },
        { prompt: "Only then ________ (I/understand) the gravity of the situation.", answer: "did I understand", type: "fill" },
        { prompt: "It is crucial that he ________ (do) his best.", answer: "do", type: "fill" },
        { prompt: "No sooner ________ (I/arrive) than the rain started.", answer: "had I arrived", type: "fill" },
        { prompt: "Under no circumstances ________ (the price/drop) below this level.", answer: "will the price drop", type: "fill" },
        { prompt: "Only by working together ________ (we/achieve) this goal.", answer: "can we achieve", type: "fill" },
        { prompt: "It is vital that they ________ (know) the procedure.", answer: "know", type: "fill" },
        { prompt: "Not until the last moment ________ (the result/be) known.", answer: "was the result", type: "fill" },
        { prompt: "Hardly ________ (the speech/finish) when the crowd erupted.", answer: "had the speech finished", type: "fill" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 4: AVANZADO 2 - MODALIDAD: REESCRITURA/REDUCCIÓN DE CLÁUSULAS
    // ----------------------------------------------------------------------
    { id: 'L4T2', level: 'Avanzado 2', title: 'Cláusulas de Participio (V-ing / V-ed)', questions: [
        { prompt: "Reescribe: The company that was founded in 1990 is still successful.", answer: "The company founded in 1990 is still successful.", type: "rewrite" },
        { prompt: "Reescribe: The students who are working on the thesis should be quiet.", answer: "The students working on the thesis should be quiet.", type: "rewrite" },
        { prompt: "Reescribe: The proposal, which was approved yesterday, will be implemented.", answer: "The proposal, approved yesterday, will be implemented.", type: "rewrite" },
        { prompt: "Reescribe: The cost that includes the fees is too high.", answer: "The cost including the fees is too high.", type: "rewrite" },
        { prompt: "Reescribe: The document which was written by the CEO is confidential.", answer: "The document written by the CEO is confidential.", type: "rewrite" },
        // ... (15 preguntas más de reescritura) ...
        { prompt: "Reescribe: The people who live in the area complain about noise.", answer: "The people living in the area complain about noise.", type: "rewrite" },
        { prompt: "Reescribe: The painting, which was stolen in 2005, has been recovered.", answer: "The painting, stolen in 2005, has been recovered.", type: "rewrite" },
        { prompt: "Reescribe: The issues that are discussed in the report are complex.", answer: "The issues discussed in the report are complex.", type: "rewrite" },
        { prompt: "Reescribe: The machine that cleans the floor is broken.", answer: "The machine cleaning the floor is broken.", type: "rewrite" },
        { prompt: "Reescribe: The budget, which was presented by the board, caused controversy.", answer: "The budget, presented by the board, caused controversy.", type: "rewrite" },
        { prompt: "Reescribe: The problem which affects all of us is pollution.", answer: "The problem affecting all of us is pollution.", type: "rewrite" },
        { prompt: "Reescribe: The evidence, which was released last month, proves the theory.", answer: "The evidence, released last month, proves the theory.", type: "rewrite" },
        { prompt: "Reescribe: The reforms that were proposed by the opposition were rejected.", answer: "The reforms proposed by the opposition were rejected.", type: "rewrite" },
        { prompt: "Reescribe: The policy that allows remote work is popular.", answer: "The policy allowing remote work is popular.", type: "rewrite" },
        { prompt: "Reescribe: The building, which was constructed in 1880, is a landmark.", answer: "The building, constructed in 1880, is a landmark.", type: "rewrite" },
        { prompt: "Reescribe: The costs which are associated with the project are high.", answer: "The costs associated with the project are high.", type: "rewrite" },
        { prompt: "Reescribe: The candidates who are applying for the job must be bilingual.", answer: "The candidates applying for the job must be bilingual.", type: "rewrite" },
        { prompt: "Reescribe: The funds that were raised by the charity went to education.", answer: "The funds raised by the charity went to education.", type: "rewrite" },
        { prompt: "Reescribe: The decision, which was made yesterday, is final.", answer: "The decision, made yesterday, is final.", type: "rewrite" },
        { prompt: "Reescribe: The team that coordinates the efforts is efficient.", answer: "The team coordinating the efforts is efficient.", type: "rewrite" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 5: PRECISION LÉXICA 1 - MODALIDAD: SELECCIÓN DE COLOCACIÓN (Fill)
    // ----------------------------------------------------------------------
    { id: 'L5T3', level: 'Léxico CLB 9', title: 'Colocaciones: Verbos y Sustantivos', questions: [
        { prompt: "The government must **(make / implement)** a reform to the system.", answer: "implement", type: "collocation" },
        { prompt: "The company must **(find / reach)** a consensus before voting.", answer: "reach", type: "collocation" },
        { prompt: "It is crucial to **(put / draw)** attention to the main issue.", answer: "draw", type: "collocation" },
        { prompt: "He **(did / made)** a strong commitment to his goals.", answer: "made", type: "collocation" },
        { prompt: "The scientist must **(do / conduct)** research thoroughly.", answer: "conduct", type: "collocation" },
        // ... (15 preguntas más de colocación) ...
        { prompt: "The decision will **(have / take)** a profound effect on the economy.", answer: "have", type: "collocation" },
        { prompt: "The two parties finally **(struck / hit)** a deal.", answer: "struck", type: "collocation" },
        { prompt: "The company has to **(deal / address)** the growing demand.", answer: "address", type: "collocation" },
        { prompt: "We must **(put / set)** forward a convincing argument.", answer: "put", type: "collocation" },
        { prompt: "You should always **(make / raise)** a complaint officially.", answer: "raise", type: "collocation" },
        { prompt: "The media should **(give / shed)** light on this matter.", answer: "shed", type: "collocation" },
        { prompt: "He decided to **(pursue / follow)** his ambitions abroad.", answer: "pursue", type: "collocation" },
        { prompt: "The committee **(arrived / reached)** a conclusion quickly.", answer: "reached", type: "collocation" },
        { prompt: "They must **(meet / find)** the deadline for the submission.", answer: "meet", type: "collocation" },
        { prompt: "We need to **(get / gain)** access to the restricted files.", answer: "gain", type: "collocation" },
        { prompt: "The politician tried to **(avoid / evade)** the question.", answer: "evade", type: "collocation" },
        { prompt: "It is necessary to **(make / do)** arrangements for the conference.", answer: "make", type: "collocation" },
        { prompt: "The company will **(create / generate)** jobs next year.", answer: "generate", type: "collocation" },
        { prompt: "The opposition decided to **(launch / throw)** a protest.", answer: "launch", type: "collocation" },
        { prompt: "The policy will **(bring / yield)** positive results.", answer: "yield", type: "collocation" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 6: PRECISION LÉXICA 2 - MODALIDAD: SELECCIÓN DE COLOCACIÓN (Fill)
    // ----------------------------------------------------------------------
    { id: 'L6T4', level: 'Léxico CLB 9', title: 'Colocaciones: Adverbios y Adjetivos', questions: [
        { prompt: "The new strategy is **(highly / deeply)** effective.", answer: "highly", type: "collocation" },
        { prompt: "The issue is **(vitally / strongly)** important to the community.", answer: "vitally", type: "collocation" },
        { prompt: "The project was **(bitterly / fiercely)** competitive.", answer: "fiercely", type: "collocation" },
        { prompt: "The findings were **(strongly / profoundly)** influential.", answer: "profoundly", type: "collocation" },
        { prompt: "The report was **(bitterly / severely)** criticized by experts.", answer: "bitterly", type: "collocation" },
        // ... (15 preguntas más de colocación) ...
        { prompt: "The market is **(deeply / closely)** regulated.", answer: "closely", type: "collocation" },
        { prompt: "The decision was **(flatly / totally)** rejected by the council.", answer: "flatly", type: "collocation" },
        { prompt: "The cost is **(heavily / astronomically)** high.", answer: "astronomically", type: "collocation" },
        { prompt: "The results were **(deeply / thoroughly)** disappointing.", answer: "deeply", type: "collocation" },
        { prompt: "The consequences were **(seriously / severely)** damaged.", answer: "severely", type: "collocation" },
        { prompt: "She is **(widely / fully)** recognized as an expert.", answer: "widely", type: "collocation" },
        { prompt: "The problem is **(heavily / gravely)** concerning.", answer: "gravely", type: "collocation" },
        { prompt: "The system is **(fully / heavily)** reliant on external power.", answer: "heavily", type: "collocation" },
        { prompt: "The company is **(bitterly / highly)** committed to sustainability.", answer: "highly", type: "collocation" },
        { prompt: "The area is **(closely / densely)** populated.", answer: "densely", type: "collocation" },
        { prompt: "The proposal was **(fully / utterly)** convincing.", answer: "utterly", type: "collocation" },
        { prompt: "The statistics are **(entirely / wholly)** misleading.", answer: "wholly", type: "collocation" },
        { prompt: "The situation became **(seriously / bitterly)** complicated.", answer: "seriously", type: "collocation" },
        { prompt: "The policy is **(widely / fully)** supported by the public.", answer: "widely", type: "collocation" },
        { prompt: "The leader was **(deeply / intensely)** moved by the speech.", answer: "deeply", type: "collocation" },
    ] },
    
    // ----------------------------------------------------------------------
    // NIVEL 7: GRAMÁTICA MIXTA 1 - MODALIDAD: IDENTIFICACIÓN DE ERRORES (Reescribe el error)
    // ----------------------------------------------------------------------
    { id: 'L7T5', level: 'Mixto CLB 8/9', title: 'Identificación y Corrección de Errores', questions: [
        { prompt: "Corrige: If I would have known the risks, I would have stopped.", answer: "Had I known the risks, I would have stopped.", type: "error_correction" },
        { prompt: "Corrige: The report was published last year, is highly critical.", answer: "The report, published last year, is highly critical.", type: "error_correction" },
        { prompt: "Corrige: Never before I have seen such dedication from a team.", answer: "Never before have I seen such dedication from a team.", type: "error_correction" },
        { prompt: "Corrige: It is crucial that she submits the request before noon.", answer: "It is crucial that she submit the request before noon.", type: "error_correction" },
        { prompt: "Corrige: The committee decided to rise a complaint.", answer: "The committee decided to raise a complaint.", type: "error_correction" },
        // ... (15 preguntas más de corrección de errores) ...
        { prompt: "Corrige: Not only they implemented new rules, but they also cut taxes.", answer: "Not only did they implement new rules, but they also cut taxes.", type: "error_correction" },
        { prompt: "Corrige: We have been here since three hours.", answer: "We have been here for three hours.", type: "error_correction" },
        { prompt: "Corrige: I wish I had more time yesterday.", answer: "I wish I had had more time yesterday.", type: "error_correction" },
        { prompt: "Corrige: Despite of the cold weather, we went outside.", answer: "Despite the cold weather, we went outside.", type: "error_correction" },
        { prompt: "Corrige: He is capable to lead the team.", answer: "He is capable of leading the team.", type: "error_correction" },
        { prompt: "Corrige: I look forward to meet you next week.", answer: "I look forward to meeting you next week.", type: "error_correction" },
        { prompt: "Corrige: Were the project succeeds, we will celebrate.", answer: "Were the project to succeed, we will celebrate.", type: "error_correction" },
        { prompt: "Corrige: They are heavily concerned about the results.", answer: "They are deeply concerned about the results.", type: "error_correction" },
        { prompt: "Corrige: The report which was detailing the flaws was leaked.", answer: "The report detailing the flaws was leaked.", type: "error_correction" },
        { prompt: "Corrige: She suggested that he must attend the meeting.", answer: "She suggested that he attend the meeting.", type: "error_correction" },
        { prompt: "Corrige: If I was rich, I would buy a house.", answer: "If I were rich, I would buy a house.", type: "error_correction" },
        { prompt: "Corrige: The problem is mostly important.", answer: "The problem is vitally important.", type: "error_correction" },
        { prompt: "Corrige: Hardly I had finished the speech when the phone rang.", answer: "Hardly had I finished the speech when the phone rang.", type: "error_correction" },
        { prompt: "Corrige: We agreed on the terms of the contract.", answer: "We agreed to the terms of the contract.", type: "error_correction" },
        { prompt: "Corrige: The committee decided to do an investigation.", answer: "The committee decided to conduct an investigation.", type: "error_correction" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 8: CONECTORES Y ESTILO - MODALIDAD: RELLENAR HUECOS (Conectores)
    // ----------------------------------------------------------------------
    { id: 'L8T6', level: 'Estilo CLB 9', title: 'Uso de Conectores (Linking Words) de Alto Nivel', questions: [
        { prompt: "The economy is stable; ________, unemployment remains a challenge.", answer: "nevertheless", type: "connector" },
        { prompt: "The policy was implemented. ________, the market responded positively.", answer: "consequently", type: "connector" },
        { prompt: "The evidence is compelling; ________, we must proceed with caution.", answer: "nonetheless", type: "connector" },
        { prompt: "Funding is secure. ________, the project must still meet strict deadlines.", answer: "even so", type: "connector" },
        { prompt: "The report suggests new measures. ________, it analyzes past failures.", answer: "moreover", type: "connector" },
        // ... (15 preguntas más de conectores) ...
        { prompt: "The analysis is flawed; ________, the conclusion is invalid.", answer: "consequently", type: "connector" },
        { prompt: "He is highly skilled; ________, he lacks experience.", answer: "however", type: "connector" },
        { prompt: "The company cut costs; ________, profits increased.", answer: "as a result", type: "connector" },
        { prompt: "The study is comprehensive; ________, it contains minor errors.", answer: "nevertheless", type: "connector" },
        { prompt: "The government made tax cuts; ________, it increased spending.", answer: "simultaneously", type: "connector" },
        { prompt: "The system is complex; ________, it is reliable.", answer: "nonetheless", type: "connector" },
        { prompt: "Attendance was low; ________, the event was cancelled.", answer: "accordingly", type: "connector" },
        { prompt: "The data is incomplete; ________, we cannot draw a firm conclusion.", answer: "therefore", type: "connector" },
        { prompt: "The problem is serious. ________, we have a solution.", answer: "on the other hand", type: "connector" },
        { prompt: "The policy failed. ________, the officials resigned.", answer: "subsequently", type: "connector" },
        { prompt: "The new rules are strict; ________, they are fair.", answer: "on the whole", type: "connector" },
        { prompt: "The report is long; ________, it is well-written.", answer: "nevertheless", type: "connector" },
        { prompt: "The company expanded its operations; ________, it hired new staff.", answer: "similarly", type: "connector" },
        { prompt: "The climate is changing; ________, urgent action is needed.", answer: "consequently", type: "connector" },
        { prompt: "The proposal is risky; ________, it offers huge rewards.", answer: "however", type: "connector" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 9: PRUEBA DE PRECISIÓN FINAL 1 - MODALIDAD: IDENTIFICACIÓN DE ERRORES
    // ----------------------------------------------------------------------
    { id: 'L9T7', level: 'Test Final', title: 'Revisión Final: Tiempos, Voz y Puntuación', questions: [
        { prompt: "Corrige: The problem, which is mainly caused by pollution, is serious.", answer: "The problem, mainly caused by pollution, is serious.", type: "error_correction" },
        { prompt: "Corrige: I would have liked to have went to the concert last night.", answer: "I would have liked to have gone to the concert last night.", type: "error_correction" },
        { prompt: "Corrige: No sooner the police arrived than the thieves fled.", answer: "No sooner had the police arrived than the thieves fled.", type: "error_correction" },
        { prompt: "Corrige: I wish I had a better job now.", answer: "I wish I had a better job now.", type: "error_correction" }, // No change, checking understanding of "wish"
        { prompt: "Corrige: It is advised that the customer contacts the support team.", answer: "It is advised that the customer contact the support team.", type: "error_correction" },
        // ... (15 preguntas más de corrección de errores) ...
        { prompt: "Corrige: The policy was rejected. However, it was unfair.", answer: "The policy was rejected; however, it was unfair.", type: "error_correction" },
        { prompt: "Corrige: If I were to buy a new house, I will need a loan.", answer: "If I were to buy a new house, I would need a loan.", type: "error_correction" },
        { prompt: "Corrige: They are bitterly concerned about the future.", answer: "They are deeply concerned about the future.", type: "error_correction" },
        { prompt: "Corrige: The machine has been worked since 8 am.", answer: "The machine has been working since 8 am.", type: "error_correction" },
        { prompt: "Corrige: The decision was token last week.", answer: "The decision was taken last week.", type: "error_correction" },
        { prompt: "Corrige: Never in my life I have traveled abroad.", answer: "Never in my life have I traveled abroad.", type: "error_correction" },
        { prompt: "Corrige: It is highly advised that the team reviews the process.", answer: "It is highly advised that the team review the process.", type: "error_correction" },
        { prompt: "Corrige: The issue has been discussing for weeks.", answer: "The issue has been discussed for weeks.", type: "error_correction" },
        { prompt: "Corrige: I am looking forward to see you.", answer: "I am looking forward to seeing you.", type: "error_correction" },
        { prompt: "Corrige: Despite the heavy rain, but we went out.", answer: "Despite the heavy rain, we went out.", type: "error_correction" },
        { prompt: "Corrige: Were he to know the truth, he would not leave.", answer: "Were he to know the truth, he would not leave.", type: "error_correction" },
        { prompt: "Corrige: The company agreed in the terms.", answer: "The company agreed to the terms.", type: "error_correction" },
        { prompt: "Corrige: Under no circumstances we will accept the bribe.", answer: "Under no circumstances will we accept the bribe.", type: "error_correction" },
        { prompt: "Corrige: The funds raised by the charity, are essential.", answer: "The funds raised by the charity are essential.", type: "error_correction" },
        { prompt: "Corrige: She suggested to cancel the meeting.", answer: "She suggested canceling the meeting.", type: "error_correction" },
    ] },

    // ----------------------------------------------------------------------
    // NIVEL 10: PRUEBA DE VOCABULARIO FINAL 2 - MODALIDAD: RELLENAR HUECOS (Lexis)
    // ----------------------------------------------------------------------
    { id: 'L10T8', level: 'Test Final', title: 'Revisión Final: Colocaciones y Phrasal Verbs', questions: [
        { prompt: "We must ________ a thorough investigation into the matter.", answer: "conduct", type: "lexis_fill" },
        { prompt: "The decision had a ________ effect on the company's morale.", answer: "detrimental", type: "lexis_fill" },
        { prompt: "The management needs to ________ a consensus on the new policy.", answer: "reach", type: "lexis_fill" },
        { prompt: "She ________ light on the complexities of the immigration process.", answer: "shed", type: "lexis_fill" },
        { prompt: "The problem is considered a ________ issue by the community.", answer: "burning", type: "lexis_fill" },
        // ... (15 preguntas más de léxico) ...
        { prompt: "It is ________ important that all steps are followed.", answer: "vitally", type: "lexis_fill" },
        { prompt: "The opposition decided to ________ a formal complaint.", answer: "raise", type: "lexis_fill" },
        { prompt: "The project was ________ successful, exceeding all expectations.", answer: "highly", type: "lexis_fill" },
        { prompt: "They must ________ their ambitions to expand globally.", answer: "pursue", type: "lexis_fill" },
        { prompt: "The policy is ________ beneficial to low-income families.", answer: "mutually", type: "lexis_fill" },
        { prompt: "The parties managed to ________ a deal after long negotiations.", answer: "strike", type: "lexis_fill" },
        { prompt: "The evidence was ________ analyzed before the trial.", answer: "thoroughly", type: "lexis_fill" },
        { prompt: "The government should ________ the problem promptly.", answer: "address", type: "lexis_fill" },
        { prompt: "The leader needs to ________ a clear vision for the future.", answer: "articulate", type: "lexis_fill" },
        { prompt: "The team failed to ________ the tight deadline.", answer: "meet", type: "lexis_fill" },
        { prompt: "The findings ________ a strong possibility of fraud.", answer: "suggest", type: "lexis_fill" },
        { prompt: "The decision will have a ________ impact on the budget.", answer: "considerable", type: "lexis_fill" },
        { prompt: "We need to ________ a viable strategy for the expansion.", answer: "devise", type: "lexis_fill" },
        { prompt: "The argument was ________ weak and lacked evidence.", answer: "utterly", type: "lexis_fill" },
        { prompt: "The committee needs to ________ forward a strong recommendation.", answer: "put", type: "lexis_fill" },
    ] },

];

// ----------------------------------------------------------------------
// LÓGICA DE QUIZ GENERAL Y PROGRESO (Actualizada para manejar tipos)
// ----------------------------------------------------------------------

function loadQuiz(quizId) {
    const quizData = allLevelQuizzes.find(q => q.id === quizId);
    if (!quizData) {
        document.getElementById('quiz-container').innerHTML = `<p>Error: Cuestionario no encontrado.</p>`;
        return;
    }

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h3>${quizData.title} (${quizData.level}) - 20 Preguntas</h3>
        <p><strong>Modalidad:</strong> ${quizData.questions[0].type.toUpperCase().replace('_', ' ')} | Instrucciones: Escribe la respuesta correcta o la frase reescrita en el espacio.</p>
        <form id="active-quiz-form"></form>
        <button class="check-button" onclick="checkActiveQuiz('${quizId}')">Terminar Quiz y Ver Nota</button>
        <div id="active-quiz-results" class="quiz-results" style="display: none;"></div>
    `;

    const form = document.getElementById('active-quiz-form');
    quizData.questions.forEach((q, index) => {
        const questionBox = document.createElement('div');
        questionBox.className = 'question-box';
        questionBox.innerHTML = `
            <label for="${quizId}q${index}">
                ${index + 1}. ${q.prompt} 
                <span style="font-size: 0.85em; color: #555;">[Tema: ${q.type}]</span>
            </label>
            <input type="text" id="${quizId}q${index}" name="${quizId}q${index}" class="answer-input" required>
            <p id="feedback_${quizId}q${index}" class="feedback-msg"></p>
        `;
        form.appendChild(questionBox);
    });

    document.getElementById('quiz-list-view').style.display = 'none';
    quizContainer.style.display = 'block';
}

function normalizeAnswer(answer) {
    // Convierte a minúsculas, quita espacios extra y maneja puntuación final (., ! ?)
    let normalized = answer.trim().toLowerCase().replace(/\s+/g, ' ');
    return normalized.replace(/[\.,!?;]$/, '');
}

function checkActiveQuiz(quizId) {
    let score = 0;
    const quizData = allLevelQuizzes.find(q => q.id === quizId);
    const totalQuestions = quizData.questions.length;
    const resultsDiv = document.getElementById('active-quiz-results');

    quizData.questions.forEach((q, index) => {
        const inputElement = document.getElementById(`${quizId}q${index}`);
        
        // Normaliza las respuestas
        const userAnswer = normalizeAnswer(inputElement.value);
        const correctAnswer = normalizeAnswer(q.answer);
        
        // Manejo de contracciones y alternativas para 'fill'
        let possibleAnswers = [correctAnswer];
        if (q.type === 'fill' || q.type === 'collocation' || q.type === 'connector' || q.type === 'lexis_fill') {
            const contracted = correctAnswer
                .replace(/do not/, "don't").replace(/does not/, "doesn't")
                .replace(/did not/, "didn't").replace(/have not/, "haven't")
                .replace(/had not/, "hadn't");
            if (contracted !== correctAnswer) {
                 possibleAnswers.push(normalizeAnswer(contracted));
            }
        }
        
        const feedbackElement = document.getElementById(`feedback_${quizId}q${index}`);
        feedbackElement.className = 'feedback-msg';
        feedbackElement.textContent = '';
        inputElement.style.border = '1px solid #ccc';

        if (possibleAnswers.includes(userAnswer)) {
            score++;
            feedbackElement.classList.add('correct');
            feedbackElement.textContent = '¡Correcto! ✅';
            inputElement.style.border = '2px solid green';
        } else {
            feedbackElement.classList.add('incorrect');
            feedbackElement.textContent = `Incorrecto. Respuesta esperada: ${q.answer}`;
            inputElement.style.border = '2px solid red';
        }
    });

    const grade = (score / totalQuestions) * 10;
    const percentage = (score / totalQuestions) * 100;

    // 1. Guardar el resultado en localStorage
    let progress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    progress[quizId] = { score: score, grade: grade.toFixed(1), total: totalQuestions, completed: true };
    localStorage.setItem('courseProgress', JSON.stringify(progress));

    // 2. Mostrar resultado individual
    let message = (grade >= 8.5) ? '¡Excelente! Nivel de precisión CLB 9.' : 'Necesitas repasar este concepto para mayor precisión.';
    
    resultsDiv.innerHTML = `
        <h3>RESULTADO INDIVIDUAL</h3>
        <p>Aciertos: ${score} de ${totalQuestions}</p>
        <p>Porcentaje: ${percentage.toFixed(0)}%</p>
        <p><strong>NOTA: ${grade.toFixed(1)} / 10</strong></p>
        <p style="margin-top: 15px; font-style: italic;">${message}</p>
        <button class="topic-link" style="width: 100%; margin-top: 20px;" onclick="renderProgress()">Volver a la Lista de Progreso</button>
    `;
    resultsDiv.style.display = 'block';
    resultsDiv.scrollIntoView({ behavior: 'smooth' });

    // Actualizar el progreso general
    renderProgress(); 
}


function renderProgress() {
    // ... (El resto de la función renderProgress que calcula y muestra el resumen permanece igual)
    const progressDiv = document.getElementById('progress-summary');
    const quizListView = document.getElementById('quiz-list-view');
    const quizContainer = document.getElementById('quiz-container');
    const progressData = JSON.parse(localStorage.getItem('courseProgress')) || {};

    // Ocultar quiz activo y mostrar lista
    quizContainer.style.display = 'none';
    quizListView.style.display = 'block';

    let totalScore = 0;
    let totalCompleted = 0;
    let completedQuizzes = 0;

    let quizListHTML = `
        <table class="progress-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nivel y Tema</th>
                    <th>Modalidad</th>
                    <th>Nota (Max 10)</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
    `;

    allLevelQuizzes.forEach((quiz, index) => {
        const result = progressData[quiz.id];
        const isCompleted = result && result.completed;
        const modality = quiz.questions[0].type.toUpperCase().replace('_', ' ');
        
        const status = isCompleted ? `<span class="status-check">COMPLETADO</span>` : `<span class="status-pending">PENDIENTE</span>`;
        const grade = isCompleted ? result.grade : '-';
        const actionButton = `<button class="topic-link" onclick="loadQuiz('${quiz.id}')">${isCompleted ? 'Repetir' : 'Iniciar'}</button>`;
        
        if (isCompleted) {
            totalScore += parseFloat(result.grade);
            completedQuizzes++;
            totalCompleted += quiz.questions.length;
        }

        quizListHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${quiz.level}: ${quiz.title}</td>
                <td>${modality}</td>
                <td>${grade}</td>
                <td>${actionButton}</td>
            </tr>
        `;
    });

    quizListHTML += `</tbody></table>`;
    quizListView.innerHTML = quizListHTML;

    // Calcular y mostrar resumen general
    const overallGrade = completedQuizzes > 0 ? (totalScore / completedQuizzes) : 0;
    
    progressDiv.innerHTML = `
        <h3>🎯 Progreso General del Curso</h3>
        <div class="grammar-topic" style="border-left-color: #27ae60;">
            <p>Quizzes Completados: <strong>${completedQuizzes} / ${allLevelQuizzes.length}</strong></p>
            <p><strong>Nota Media General: <span style="font-size: 1.5em; color: ${overallGrade >= 8.5 ? 'green' : (overallGrade >= 7 ? 'orange' : 'red')};">${overallGrade.toFixed(1)} / 10</span></strong></p>
            <p>Tu objetivo CLB 9 requiere una Nota Media superior a **8.5/10**.</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', renderProgress);