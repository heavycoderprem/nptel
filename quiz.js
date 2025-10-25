// Hardcoded quiz data (replace fetch)
let allQuizData = [ // Renamed to avoid conflict
   
    {"question":"“Science of relationships between organisms and their environments” is the definition of:","options":["conservation","preservation","environmentalism","ecology"],"correct":"ecology","source":"pyq"},
{"question":"The Trinity explosion of 1945 is taken as the beginning of the","options":["Holocene","Cenocene","Anthropocene","Eocene"],"correct":"Anthropocene","source":"pyq"},
{"question":"Sustainable harvest of resources falls under the category of:","options":["conservation","preservation","environmentalism","none of the above"],"correct":"conservation","source":"pyq"},
{"question":"The quantum of human impacts can be written as","options":["I = P + A + T","I = P X A + T","I = P X A X T","I = P + A X T"],"correct":"I = P X A X T","source":"pyq"},
{"question":"The discipline of Demography is most closely related to:","options":["Phytogeography","Zoogeography","Population Geography","Economic Geography"],"correct":"Population Geography","source":"pyq"},
{"question":"\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for","options":["Liebig’s law of the minimum","Liebig’s law of the maximum","Shelford’s law of tolerance","Shelford’s law of intolerance"],"correct":"Liebig’s law of the minimum","source":"pyq"},
{"question":"\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for","options":["Liebig’s law of the minimum","Liebig’s law of the maximum","Shelford’s law of tolerance","Shelford’s law of intolerance"],"correct":"Shelford’s law of tolerance","source":"pyq"},
{"question":"The regional approach to Geography was developed by:","options":["Alexander von Humboldt","Karl Ritter","Rene Descartes","Eratosthenes"],"correct":"Karl Ritter","source":"pyq"},
{"question":"Good climate is a","options":["chemical factor","demographic factor","push factor","pull factor"],"correct":"pull factor","source":"pyq"},
{"question":"Scarcity of food is a","options":["chemical factor","demographic factor","push factor","pull factor"],"correct":"push factor","source":"pyq"},
{"question":"The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called","options":["translocation","migration","dispersal","drifting"],"correct":"dispersal","source":"pyq"},
{"question":"The movement of lions across the Gir landscape is an example of","options":["diffusion","secular dispersal","jump dispersal","drifting"],"correct":"diffusion","source":"pyq"},
{"question":"The Geographical discipline of Climatology is most closely related to:","options":["Geology","Meteorology","Hydrology","Pedology"],"correct":"Meteorology","source":"pyq"},
{"question":"The systematic approach to Geography was developed by:","options":["Alexander von Humboldt","Karl Ritter","Rene Descartes","Eratosthenes"],"correct":"Alexander von Humboldt","source":"pyq"},
{"question":"Which of these is true?","options":["Wildlife conservation is the same as wildlife preservation","Wildlife conservation is the same as wildlife ecology","Wildlife conservation is the same as environmentalism","none of these"],"correct":"none of these","source":"pyq"},
{"question":"In the word root for conservation, servare stands for","options":["together","to keep","house","manage"],"correct":"to keep","source":"pyq"},
{"question":"“allowing some places and some creatures to exist without significant human interference” is the definition of:","options":["conservation","preservation","environmentalism","ecology"],"correct":"preservation","source":"pyq"},
{"question":"I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should beconcerned about","options":["autophagy","allelophagy","autopathy","allelopathy"],"correct":"allelopathy","source":"pyq"},
{"question":"The regular, seasonal movement of animals, often along fixed routes is called","options":["translocation","migration","dispersal","drifting"],"correct":"migration","source":"pyq"},
{"question":"In the word root for conservation, con stands for","options":["together","to keep","house","manage"],"correct":"together","source":"pyq"},
{"question":"In an undisturbed sedimentary strata, bottom layers are older than layers above them. This is known as","options":["Principle of superposition","Principle of original horizontality","Principle of lateral continuity","Principle of inclusions"],"correct":"Principle of superposition","source":"pyq"},
{"question":"Mount Vesuvius is an example of","options":["Shield volcano","Composite volcano","Caldera","Flood basalt province"],"correct":"Composite volcano","source":"pyq"},
{"question":"Krakatoa eruption resulted in the formation of","options":["Shield volcano","Stratovolcano","Caldera","Flood basalt province"],"correct":"Caldera","source":"pyq"},
{"question":"Which of these is not a method of absolute dating?","options":["radioisotope dating","thermoluminescence dating","inclusion study","fission track dating"],"correct":"inclusion study","source":"pyq"},
{"question":"Which of these is true about S waves?","options":["They are longitudinal in nature","They are transverse in nature","They cannot move through solids, liquids and gases","They are the first to reach the surface of the Earth"],"correct":"They are transverse in nature","source":"pyq"},
{"question":"Hawaiian volcanoes are an example of","options":["Shield volcano","Stratovolcano","Caldera","Flood basalt province"],"correct":"Shield volcano","source":"pyq"},
{"question":"Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as","options":["Principle of superposition","Principle of original horizontality","Principle of lateral continuity","Principle of inclusions"],"correct":"Principle of lateral continuity","source":"pyq"},
{"question":"Which of these is a gas giant?","options":["Mercury","Venus","Mars","Saturn"],"correct":"Saturn","source":"pyq"},
{"question":"Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as","options":["Principle of fossil succession","Principle of original horizontality","Principle of superposition","Principle of cross-cutting relationships"],"correct":"Principle of fossil succession","source":"pyq"},
{"question":"Which of these is an example of direct source of information about the Earth?","options":["earthquake","volcanic eruption","magnetic survey","gravity anomaly"],"correct":"volcanic eruption","source":"pyq"},
{"question":"“the points where three or more cirques meet” is the definition of","options":["cirque","arete","horn","hanging valley"],"correct":"horn","source":"pyq"},
{"question":"Which of these is an example of endogenic process?","options":["weathering","mass movement","erosion","folding"],"correct":"folding","source":"pyq"},
{"question":"Sandstone is an example of","options":["siliciclastic rock","carbonate rock","evaporite rock","phosphatic rock"],"correct":"siliciclastic rock","source":"pyq"},
{"question":"“smooth oval-shaped ridge-like features comprised of glacial till, gravel and sand arranged parallel to the direction of ice movement” is the definition of","options":["glacial till","outwash deposit","esker","drumlin"],"correct":"drumlin","source":"pyq"},
{"question":"Which of these is an example of exogenic process?","options":["volcanism","earthquake","plate tectonics","deposition"],"correct":"deposition","source":"pyq"},
{"question":"“white or colourless hard mineral virtually insoluble in water” is a description of","options":["amphiboles","quartz","feldspar","pyroxene"],"correct":"quartz","source":"pyq"},
{"question":"Dolomite is an example of","options":["siliciclastic rock","carbonate rock","evaporite rock","phosphatic rock"],"correct":"carbonate rock","source":"pyq"},
{"question":"“green or black coloured inosilicate minerals forming prism or needle-like crystals” is a description of","options":["amphiboles","feldspar","mica","pyroxene"],"correct":"amphiboles","source":"pyq"},
{"question":"“deep, long and wide troughs or basins with very steep concave to vertically dropping high walls as its head and sides” is the definition of","options":["cirque","arete","horn","hanging valley"],"correct":"cirque","source":"pyq"},
{"question":"“magnesium iron silicate; a primary component of the Earth’s upper mantle” is a description of","options":["amphiboles","feldspar","quartz","olivine"],"correct":"olivine","source":"pyq"},
{"question":"Which of these air masses is generally cool and moist?","options":["cP","cT","mP","mT"],"correct":"mP","source":"pyq"},
{"question":"Which of these air masses is generally cold and dry?","options":["cP","cT","mP","mT"],"correct":"cP","source":"pyq"},
{"question":"The ISS orbits in which layer?","options":["Troposphere","Stratosphere","Mesosphere","Thermosphere"],"correct":"Thermosphere","source":"pyq"},
{"question":"The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called","options":["adaptation","mitigation","deceleration","maladaptation"],"correct":"mitigation","source":"pyq"},
{"question":"Surplus seed and sperm banking is an adaptation option to facilitate","options":["resistance to climate changes","resilience to climate changes","response to climate changes","none of these"],"correct":"resilience to climate changes","source":"pyq"},
{"question":"The classical period for taking averages for climate is","options":["10 years","20 years","30 years","40 years"],"correct":"30 years","source":"pyq"},
{"question":"Noctilucent clouds are present in which layer?","options":["Troposphere","Stratosphere","Mesosphere","Thermosphere"],"correct":"Mesosphere","source":"pyq"},
{"question":"Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called","options":["adaptation","mitigation","deceleration","maladaptation"],"correct":"adaptation","source":"pyq"},
{"question":"Which of these is home to the ozone layer?","options":["Troposphere","Stratosphere","Mesosphere","Thermosphere"],"correct":"Stratosphere","source":"pyq"},
{"question":"Most of the weather phenomena occur in","options":["Troposphere","Stratosphere","Mesosphere","Thermosphere"],"correct":"Troposphere","source":"pyq"},
{"question":"Equal density curves are called","options":["isopycnal curves","isohaline curves","isotherm curves","isobuoyant curves"],"correct":"isopycnal curves","source":"pyq"},
{"question":"Which of these is a minor feature of the ocean floor?","options":["continental shelf","continental slope","guyot","abyssal plain"],"correct":"guyot","source":"pyq"},
{"question":"“mountains with pointed summits rising from the sea floor, but not reaching the surface of the ocean” is a description of","options":["oceanic deep / trench","mid-oceanic ridge","seamount","atoll"],"correct":"seamount","source":"pyq"},
{"question":"Which of these is the largest habitat on the Earth?","options":["continental shelf","continental slope","guyot","abyssal plain"],"correct":"abyssal plain","source":"pyq"},
{"question":"Which of these are the largest mountain ranges on Earth?","options":["oceanic deep / trench","mid-oceanic ridge","seamount","atoll"],"correct":"mid-oceanic ridge","source":"pyq"},
{"question":"“deep valleys, often cutting across continental shelves and slopes” is a description of","options":["oceanic deep / trench","mid-oceanic ridge","guyot","submarine canyon"],"correct":"submarine canyon","source":"pyq"},
{"question":"Continental slope has a gradient of","options":["0-1 degree","1-2 degree","2-5 degree","5-10 degree"],"correct":"2-5 degree","source":"pyq"},
{"question":"Which of these is not a prominent tidal pattern?","options":["diurnal","mixed diurnal","semidiurnal","mixed semidiurnal"],"correct":"mixed diurnal","source":"pyq"},
{"question":"“relatively steep-sided, narrow, deep basins” is a description of","options":["oceanic deep / trench","mid-oceanic ridge","seamount","atoll"],"correct":"oceanic deep / trench","source":"pyq"},
{"question":"In the sea, a layer where the temperature decreases rapidly from the mixed upper layer to the cold deeper layer is called","options":["isopycnal","thermophil","thermohaline","thermocline"],"correct":"thermocline","source":"pyq"},
{"question":"In Koeppen classification, which is hot summer temperature?","options":["h","k","a","b"],"correct":"a","source":"pyq"},
{"question":"In Koeppen classification, which is desert precipitation?","options":["W","S","f","s"],"correct":"W","source":"pyq"},
{"question":"India’s location is","options":["Equatorial in South, Tropical in North","Tropical in South, Equatorial in North","Tropical in South, Sub-tropical in North","Sub-tropical in South, Tropical in North"],"correct":"Tropical in South, Sub-tropical in North","source":"pyq"},
{"question":"In Koeppen classification, which is cold arid temperature?","options":["h","k","a","b"],"correct":"k","source":"pyq"},
{"question":"In Koeppen classification, which is winter dry precipitation?","options":["w","S","f","s"],"correct":"w","source":"pyq"},
{"question":"In Koeppen classification, which is cool summer temperature?","options":["c","d","F","T"],"correct":"c","source":"pyq"},
{"question":"Which of these is the correct sequence of seasons in India?","options":["Hot weather season → Retreating monsoon season → South-West monsoon season → Cold weather season","Hot weather season → South-West monsoon season → Retreating monsoon season → Cold weather season","Hot weather season → Cold weather season → South-West monsoon season → Retreating monsoon season","Hot weather season → South-West monsoon season → Cold weather season → Retreating monsoon season"],"correct":"Hot weather season → South-West monsoon season → Retreating monsoon season → Cold weather season","source":"pyq"},
{"question":"In Koeppen classification, which is monsoonal precipitation?","options":["W","S","m","s"],"correct":"m","source":"pyq"},
{"question":"Physiography is the outcome of","options":["structure","process","stage of development","all of these"],"correct":"all of these","source":"pyq"},
{"question":"In Koeppen classification, which is equatorial climate?","options":["A","B","C","D"],"correct":"A","source":"pyq"},
{"question":"Soil formation is dependent upon","options":["vegetation","time","climate","all of the above"],"correct":"all of the above","source":"pyq"},
{"question":"Which of these is not a characteristic of pioneer species","options":["ability to grow on bare rocks","ability to tolerate extreme temperatures","large size","short life span"],"correct":"large size","source":"pyq"},
{"question":"\"groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups\" is a definition of","options":["cells","species","ecosystems","biomes"],"correct":"species","source":"pyq"},
{"question":"Mechanical action of ocean waves is an example of","options":["chemical weathering","physical weathering","biological weathering","none of the above"],"correct":"physical weathering","source":"pyq"},
{"question":"The climax near Tindni village is being controlled by disturbance by cattle. This is an example of","options":["climatic climax","edaphic climax","disclimax","catastrophic climax"],"correct":"disclimax","source":"pyq"},
{"question":"Carbonation is an example of","options":["chemical weathering","physical weathering","biological weathering","none of the above"],"correct":"chemical weathering","source":"pyq"},
{"question":"In soil profile, C refers to","options":["organic surface layer","topsoil layer","subsoil layer","substratum layer"],"correct":"substratum layer","source":"pyq"},
{"question":"A climax caused by wildfires is an example of","options":["climatic climax","edaphic climax","disclimax","catastrophic climax"],"correct":"catastrophic climax","source":"pyq"},
{"question":"Regur is a term for","options":["black cotton soil","alluvial soil","saline soil","red and yellow soil"],"correct":"black cotton soil","source":"pyq"},
{"question":"\"the diversity that exists among different geographies\" is","options":["alpha (α) biodiversity","beta (β) biodiversity","gamma (γ) biodiversity","delta (δ) biodiversity"],"correct":"gamma (γ) biodiversity","source":"pyq"},
{"question":"The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of","options":["least concern species","keystone species","flagship species","extinct species"],"correct":"keystone species","source":"pyq"},
{"question":"The “subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce” is the definition of","options":["habitat","ecosystem","biome","biosphere"],"correct":"habitat","source":"pyq"},
{"question":"Which of these correctly represents the process of habitat fragmentation and loss?","options":["Original forest → Dissection → Perforation → Fragmentation → Attrition","Original forest → Dissection → Attrition → Fragmentation → Perforation","Original forest → Dissection → Perforation → Attrition → Fragmentation","Original forest → Dissection → Fragmentation → Perforation → Attrition"],"correct":"Original forest → Dissection → Perforation → Fragmentation → Attrition","source":"pyq"},
{"question":"Soil formation is an example of","options":["provisioning service","regulating service","supporting service","cultural service"],"correct":"supporting service","source":"pyq"},
{"question":"Biological control of pest populations is an example of","options":["provisioning service","regulating service","supporting service","cultural service"],"correct":"regulating service","source":"pyq"},
{"question":"The acronym HIPPO does not include","options":["habitat loss","invasive species","pollination","pollution"],"correct":"pollination","source":"pyq"},
{"question":"The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as","options":["umbrella species","keystone species","flagship species","all of the above"],"correct":"all of the above","source":"pyq"},
{"question":"People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as","options":["umbrella species","keystone species","flagship species","extinct species"],"correct":"flagship species","source":"pyq"},
{"question":"Captive breeding is an example of","options":["in-situ conservation","ex-situ conservation","in-situ preservation","ex-situ preservation"],"correct":"ex-situ conservation","source":"pyq"},
{"question":"We prefer those areas for the creation of a conservation reserve where the level of threat is","options":["very high","medium","very low","non-existent"],"correct":"medium","source":"pyq"},
{"question":"According to Malthusian model,","options":["Population grows in geometric progression, food supply increases in arithmetic progression","Population grows in geometric progression, food supply increases in geometric progression","Population grows in arithmetic progression, food supply increases in arithmetic progression","Population grows in arithmetic progression, food supply increases in geometric progression"],"correct":"Population grows in geometric progression, food supply increases in arithmetic progression","source":"pyq"},
{"question":"Which of these is commonly observed during humanising of nature?","options":["environmental determinism","possibilism","neodeterminism","stop and go determinism"],"correct":"possibilism","source":"pyq"},
{"question":"Which of these is a pillar of sustainability","options":["social sustainability","industrial sustainability","agricultural sustainability","trans-boundary sustainability"],"correct":"social sustainability","source":"pyq"},
{"question":"Which of these is commonly observed in primitive societies?","options":["environmental determinism","possibilism","neodeterminism","stop and go determinism"],"correct":"environmental determinism","source":"pyq"},
{"question":"The demographic transition sees a society move from","options":["high birth rate, low death rate to low birth rate, high death rate","low birth rate, high death rate to low birth rate, low death rate","high birth rate, high death rate to low birth rate, low death rate","high birth rate, high death rate to low birth rate, high death rate"],"correct":"high birth rate, high death rate to low birth rate, low death rate","source":"pyq"},
{"question":"The logistic growth equation curve is","options":["I-shaped","J-shaped","S-shaped","U-shaped"],"correct":"S-shaped","source":"pyq"},
{"question":"Which of these is a preventive check according to Malthus?","options":["foresight","vice","misery","flood"],"correct":"foresight","source":"pyq"},
{"question":"Which of these is not a pillar of sustainability?","options":["environmental sustainability","economic sustainability","trans-boundary sustainability","social sustainability"],"correct":"trans-boundary sustainability","source":"pyq"},
{"question":"The book \"An Essay on the Principle of Population\" was written by","options":["Darwin","Malthus","Spencer","Owens"],"correct":"Malthus","source":"pyq"},
{"question":"Which of these is a positive check according to Malthus?","options":["late marriage","war","celibacy","moral restraint"],"correct":"war","source":"pyq"},
{"question":"Hydrogen for nuclear fusion comes under the category of","options":["potential resources","actual resources","reserve resources","stock resources"],"correct":"stock resources","source":"pyq"},
{"question":"Which of these is the largest source of ammonia (NH3) in the atmosphere?","options":["animal manure","mineral fertiliser","crops and their decomposition","human waste"],"correct":"animal manure","source":"pyq"},
{"question":"“the part of actual resources that can be developed profitably in the future” is a definition of","options":["potential resources","actual resources","reserve resources","stock resources"],"correct":"reserve resources","source":"pyq"},
{"question":"Timber from forests that is being harvested can be categorised under","options":["potential resources","actual resources","reserve resources","stock resources"],"correct":"actual resources","source":"pyq"},
{"question":"Rain gardens are primarily meant to","options":["reduce water usage","increase recharge to groundwater","protect existing water sources","increase water flow to streams"],"correct":"increase recharge to groundwater","source":"pyq"},
{"question":"Oil that has not been drilled can be categorised under","options":["potential resources","actual resources","reserve resources","stock resources"],"correct":"potential resources","source":"pyq"},
{"question":"Which of these is the largest source of nitrogen oxides in the atmosphere?","options":["electricity generation","mobile sources","industrial processes","waste disposal"],"correct":"mobile sources","source":"pyq"},
{"question":"“those resources that are currently being used after surveying, quantification and qualification” is a definition of","options":["potential resources","actual resources","reserve resources","stock resourcesstock resources"],"correct":"actual resources","source":"pyq"},
{"question":"“those resources that may be used in the future” is a definition of","options":["potential resources","actual resources","reserve resources","stock resources"],"correct":"potential resources","source":"pyq"},
{"question":"Low concentration ores come in the category of","options":["potential resources","actual resources","reserve resources","stock resources"],"correct":"reserve resources","source":"pyq"},
{"question":"New Delhi can best be categorised as","options":["administrative town","industrial town","transport town","commercial town"],"correct":"administrative town","source":"pyq"},
{"question":"Which of these is a factor governing barrier effect of roads?","options":["traffic intensity","speed of vehicles","driver sensitivity","all of these"],"correct":"all of these","source":"pyq"},
{"question":"Which of these is a factor governing barrier effect of roads?","options":["presence and location of animal crossings","movement pattern of species","species specific preference of road use","all of these"],"correct":"all of these","source":"pyq"},
{"question":"Varanasi can best be categorised as","options":["mining town","garrison town","educational town","religious town"],"correct":"religious town","source":"pyq"},
{"question":"“the ability to produce a good using fewer inputs than another producer” is","options":["comparative advantage","absolute advantage","production advantage","resource advantage"],"correct":"absolute advantage","source":"pyq"},
{"question":"\"the price of a good that prevails in the world market for that good” is the definition of","options":["export price","import price","world price","domestic price"],"correct":"world price","source":"pyq"},
{"question":"Visakhapatnam can best be categorised as","options":["administrative town","industrial town","transport town","commercial town"],"correct":"transport town","source":"pyq"},
{"question":"Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?","options":["land bridges","canopy bridges","glider poles","all of these"],"correct":"all of these","source":"pyq"},
{"question":"Bhilai can best be categorised as","options":["administrative town","industrial town","transport town","commercial town"],"correct":"industrial town","source":"pyq"},
{"question":"“the ability to produce a good at a lower opportunity cost than another producer” is a definition of","options":["real advantage","monetary advantage","comparative advantage","opportunity advantage"],"correct":"comparative advantage","source":"pyq"},
{"question":"The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.","options":["500 m","1000 m","1500 m","2000 m"],"correct":"1500 m","source":"pyq"},
{"question":"Which of these uses imputed willingness to pay?","options":["market price method","replacement cost method","travel cost method","contingent valuation method"],"correct":"replacement cost method","source":"pyq"},
{"question":"“The situation of people, infrastructure, housing, production capacities and other tangible human assets located in hazard-prone areas.” is a definition for","options":["hazard","exposure","vulnerability","disaster"],"correct":"exposure","source":"pyq"},
{"question":"“A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation.” is a definition for","options":["hazard","exposure","vulnerability","disaster"],"correct":"hazard","source":"pyq"},
{"question":"“A serious disruption of the functioning of a community or a society at any scale due to hazardous events interacting with conditions of exposure, vulnerability and capacity, leading to one or more of the following: human, material, economic and environmental losses and impacts.” is a definition for","options":["hazard","exposure","vulnerability","disaster"],"correct":"disaster","source":"pyq"},
{"question":"“The combination of all the strengths, attributes and resources available within an organisation, community or society to manage and reduce disaster risks and strengthen resilience.” is a definition for","options":["contingency","disaster management","vulnerability","capacity"],"correct":"capacity","source":"pyq"},
{"question":"Bathymetric LiDAR uses","options":["far infrared light","near infrared light","orange light","green light"],"correct":"green light","source":"pyq"},
{"question":"IMU stands for","options":["Imperial metering unit","Inertial metering unit","Imperial measurement unit","Inertial measurement unit"],"correct":"Inertial measurement unit","source":"pyq"},
{"question":"Which of these is not a consumptive value?","options":["timber","firewood","non-timber forest products","education"],"correct":"education","source":"pyq"},
{"question":"The frequency of flyovers is an indicator of","options":["spatial resolution","temporal resolution","spectral resolution","radiometric resolution"],"correct":"temporal resolution","source":"pyq"},
    
];

// Get references to buttons (single set)
const quizContainer = document.getElementById('quiz-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const startPyqButton = document.getElementById('start-pyq-button');

let currentQuestionIndex = 0;
const questionsPerPage = 10; // Show 10 questions per page
let quizData = []; // This will hold the final ordered and shuffled data

// --- Utility Function: Fisher-Yates Shuffle ---
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// --- Display Logic ---
function displayQuestions() {
    quizContainer.innerHTML = ''; // Clear previous questions
    const startIndex = currentQuestionIndex;
    const endIndex = Math.min(startIndex + questionsPerPage, quizData.length);

    for (let i = startIndex; i < endIndex; i++) {
        const questionData = quizData[i];
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');
        questionBlock.dataset.index = i; // Store original index (after shuffling)

        const questionElement = document.createElement('h3'); // The h3 container

        // Create span for the main question text part (number + text)
        const questionText = document.createElement('span');

        // Handle code blocks within questions
        if (questionData.question.includes('```')) {
            const parts = questionData.question.split('```');
            // Add text before code block
            questionText.innerHTML = `${i + 1}. ${parts[0].replace(/\\n/g, '<br>')}`;
            questionElement.appendChild(questionText); // Append text before code

            // Add code block
            const codeBlock = document.createElement('pre');
            codeBlock.textContent = parts[1].trim();
            questionElement.appendChild(codeBlock); // Append code block

            // Add text after code block (if exists)
            if (parts[2]) {
                const afterCode = document.createElement('span');
                afterCode.innerHTML = parts[2].replace(/\\n/g, '<br>');
                questionElement.appendChild(afterCode); // Append text after code
            }
        } else {
            // No code block, just set the innerHTML for the main text span
            questionText.innerHTML = `${i + 1}. ${questionData.question.replace(/\\n/g, '<br>')}`;
            questionElement.appendChild(questionText); // Append the main text span
        }

        // Create and append source label (always after the question content)
        const sourceLabel = document.createElement('span');
        sourceLabel.classList.add('source-label');
        if (questionData.source === 'original') {
            sourceLabel.textContent = ' (Year 2025)';
        } else if (questionData.source === 'pyq') {
            sourceLabel.textContent = ' (PYQ)';
        }
        // Append label only if it has content
        if (sourceLabel.textContent) {
             questionElement.appendChild(sourceLabel);
        }


        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');

        // --- Shuffle options before displaying ---
        const shuffledOptions = [...questionData.options]; // Create a copy to shuffle
        shuffleArray(shuffledOptions);
        // --- ---

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            // Pass the original correct answer text for comparison
            button.onclick = () => checkAnswer(button, option, questionData.correct, questionBlock);
            optionsContainer.appendChild(button);
        });

        questionBlock.appendChild(questionElement);
        questionBlock.appendChild(optionsContainer);
        quizContainer.appendChild(questionBlock);
    }

    updateNavigationButtons();
}

// ... existing checkAnswer function ...
function checkAnswer(button, selectedOption, correctAnswer, questionBlock) {
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('feedback');

    // Disable all buttons in this question block
    const buttons = questionBlock.querySelectorAll('.options button');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('correct');
        button.style.backgroundColor = 'lightgreen'; // Highlight correct selection
    } else {
        feedbackElement.textContent = `Incorrect. Correct answer: ${correctAnswer}`;
        feedbackElement.classList.add('incorrect');
        button.style.backgroundColor = 'lightcoral'; // Highlight incorrect selection
        // Highlight the correct answer button
        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.style.backgroundColor = 'lightgreen';
            }
        });
    }

    // Remove existing feedback if any before adding new one
    const existingFeedback = questionBlock.querySelector('.feedback');
    if (existingFeedback) {
        questionBlock.removeChild(existingFeedback);
    }
    questionBlock.appendChild(feedbackElement);
}


// --- Navigation Logic ---
// ... existing updateNavigationButtons function ...
function updateNavigationButtons() {
    const isFirstPage = currentQuestionIndex === 0;
    const isLastPage = quizData && quizData.length > 0 ? currentQuestionIndex >= quizData.length - questionsPerPage : true;

    prevButton.disabled = isFirstPage;
    nextButton.disabled = isLastPage;

    // Disable PYQ button if no PYQ questions exist
    const firstPyqIndex = findFirstPyqIndex();
    startPyqButton.disabled = firstPyqIndex === -1; // Ensure this line exists and is correct
}

// ... existing findFirstPyqIndex function ...
function findFirstPyqIndex() {
    if (!quizData || quizData.length === 0) return -1;
    return quizData.findIndex(q => q.source === 'pyq');
}


// --- Event Listeners --- 
// ... existing handleStartPyq, handlePrevious, handleNext functions ...
function handleStartPyq() {
    const firstPyqIndex = findFirstPyqIndex();
    if (firstPyqIndex !== -1) {
        // Calculate the starting index of the page containing the first PYQ
        currentQuestionIndex = Math.floor(firstPyqIndex / questionsPerPage) * questionsPerPage;
        displayQuestions(); // Refresh display to show the correct page
    }
}

function handlePrevious() {
    currentQuestionIndex -= questionsPerPage;
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }
    displayQuestions();
}

function handleNext() {
    currentQuestionIndex += questionsPerPage;
    if (quizData && quizData.length > 0 && currentQuestionIndex >= quizData.length) {
        currentQuestionIndex = Math.max(0, Math.floor((quizData.length - 1) / questionsPerPage) * questionsPerPage);
    }
    displayQuestions();
}


// Add listeners to the single set of buttons
startPyqButton.addEventListener('click', handleStartPyq);
prevButton.addEventListener('click', handlePrevious);
nextButton.addEventListener('click', handleNext);

// --- Initial Load --- 
// Removed startQuiz function and fetch logic

// Display initial questions when the page loads using the hardcoded data
document.addEventListener('DOMContentLoaded', () => {
    if (allQuizData.length > 0) {
        // 1. Separate questions by source
        const originalQuestions = allQuizData.filter(q => q.source === 'original');
        const pyqQuestions = allQuizData.filter(q => q.source === 'pyq');

        // 2. Shuffle questions within each group
        shuffleArray(originalQuestions);
        shuffleArray(pyqQuestions);

        // 3. Combine the shuffled groups (originals first, then PYQs)
        quizData = [...originalQuestions, ...pyqQuestions];

        // 4. Reset index and display
        currentQuestionIndex = 0;
        displayQuestions();
    } else {
        quizContainer.innerHTML = '<p>No questions found in hardcoded data.</p>';
        updateNavigationButtons(); // Still update buttons
    }
});

// Removed parseMarkdown function as it's no longer needed

