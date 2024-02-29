import dutino from "../public/events/dance/dutino.jpg";
export const litevents = [
  {
    id: 1,
    organizingCouncil: "Literary Council",
    type: "debate",
    addedOn: "29 Feb",
    eventName: "The Parliamentary Masquerade",
    description: `A typical form of the parliamentary debate with the simplifications of the rules 
        so that every person can simply understand the event and enjoy it. The event will 
        consist of a speaker, ruling side and an opposition."
        language: "Bilingual`,
    image: dutino,
    details: {
      scope: "Major",
      estimatedDays: "2 or 3",
      participation: "Individual",
    },
    venue: "CSA",
  },
  {
    id: 2,
    organizingCouncil: "Literary Council",
    type: "debate",
    addedOn: "29 Feb",
    eventName: "मंथन",
    description: `An event consists of two stages: Group Discussion and panel discussion. The
      event will take place in two stages. The first will be the introductory round,
      consisting of the group discussion. The top-performing candidates will move to
      the next round, which will be a panel discussion. `,
    image: dutino,
    details: {
      language: "Hindi",
      scope: "Major",
      estimatedDays: "2",
      participation: "Individual",
    },
    venue: "Seminar Hall and Alumni Park",
  },
  {
    id: 3,
    organizingCouncil: "Literary Council",
    type: "debate",
    addedOn: "29 Feb",
    eventName: "Against the For",
    image: dutino,
    description: `This will be a non-conventional debate where teams will be assigned a topic and
        tasked with speaking in favor of it, within a time frame of 4-5 minutes to present
        their thoughts. At the end of this time, the next team will have to speak in favor
        of the topic. Moving to the next step, both teams will present their views in favor
        of the topic, and they will also need to articulate their views against it. Once both
        teams have spoken for and against the topic, the jury will decide which team
        presented their views most effectively.`,
    details: {
      language: "Hindi",
      scope: "Major",
      estimatedDays: "2",
      participation: "Team",
    },
    venue: "Seminar Hall",
  },
  {
    id: 4,
    organizingCouncil: "Literary Council",
    type: "debate",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Battle of Rhetoricians",
    description: `This will be a ladder event in which each individual participant will be paired
        with another participant on the day of the event (the pairing will be random). Each
        pair will be assigned a topic to speak in favor of or against. The favor or
        opposition will be decided with the chit system.
        Each participant will give a 3–4-minute speech on their given topic, and after the
        speeches of both participants, the jury members will decide who will move to the
        next rounds.
        Topics will be related to current affairs and general perceptions and similar fields.
        One of the candidates will be chosen for the next round, and a similar pairing will
        happen until we get the top 4 participants.`,
    details: {
      language: "English",
      scope: "Minor",
      estimatedDays: "1",
      participation: "Individual",
    },
    venue: "Seminar Hall",
  },
  {
    id: 5,
    organizingCouncil: "Literary Council",
    type: "debate",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Debate-o-Maina",
    description: `This is a debating event wherein participating candidates will be grouped into
      teams for favor and against a given topic. Each team member will deliver a speech
      lasting 2-3 minutes, presenting their arguments. Subsequently, the next grouped
      candidates will speak in opposition. Following this, each candidate will have the
      opportunity to pose questions to members of the opposing team. Participants will
      be evaluated based on the quality of their introductory speeches and the
      effectiveness of their responses to opposing questions.`,
    details: {
      language: "English",
      scope: "Minor",
      estimatedDays: "1",
      participation: "Individual",
    },
    venue: "Seminar Hall",
  },
  {
    id: 1,
    organizingCouncil: "Literary Council",
    type: "poetry",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "KavyaSarita (Hindi Poem)",
    description: "Recite self-written poem in Hindi (no Urdu words).",
    venue: "Bsc Ground",
    rounds: [
      {
        id: "6323v3tft2f2g",
        name: " Online entry (video entry) ",
      },
      {
        id: "6323v54gf2f2g",
        name: "Stage round ",
      },
    ],
  },
  {
    id: 2,
    organizingCouncil: "Literary Council",
    type: "poetry",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Poetry Slam (English Poem)",
    description: "Recite self-written poem in English.",
    venue: "CSA Hall",
    rounds: [
      {
        id: "6323v3tft2f2g",
        name: " Online entry (video entry) ",
      },
      {
        id: "6323v54gf2f2g",
        name: "Stage round ",
      },
    ],
    details: {
      NumberOfRounds: "2",
    },
  },
  {
    id: 3,
    organizingCouncil: "Literary Council",
    type: "poetry",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Bait Baazi (Shayari Competition)",
    description:
      "Teams compete, reciting sher starting with last letter of previous sher.",
    venue: "Alumni Park",
    rounds: [],
    details: {
      NumberOfRounds: "2",
    },
  },
  {
    id: 4,
    organizingCouncil: "Literary Council",
    type: "poetry",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Kissagoi (Storytelling)",
    description:
      "Tell self-written short stories or part of life in English/Hindi.",
    venue: "Bsc Ground",
    rounds: [
      {
        id: "6323v3tft2f2g",
        name: " Online entry (story in pdf) ",
      },
      {
        id: "6323v54gf2f2g",
        name: "Stage round ",
      },
    ],
    details: {
      NumberOfRounds: "2",
    },
  },
  {
    id: 5,
    organizingCouncil: "Literary Council",
    type: "poetry",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Two liners",
    description:
      "Create two-line snippet using simile, personification, or metaphor.",
    venue: "Mechanical Hall",
    rounds: [
      {
        id: "6323v3tft2f2g",
        name: " Stage Round",
      },
    ],
    details: {
      NumberOfRounds: "1",
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "poetry",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Kaviroop (Writing poem)",
    description:
      "Teams write and recite poem based on given first line of well-known poem (Hindi).",
    venue: "Seminar Hall",
    details: {
      NumberOfRounds: "2",
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "funtoosh",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Khud ki Khoz (Character’s Play)",
    description:
      "Candidates portray roles within limited set of zones with predefined list of names. Points awarded based on portrayal accuracy.",
    venue: "Electronics Classes",
    details: {
      timeLine: "4:30 hrs",
      type: "Bilingual",
      soloEvent: true,
      majorEvent: true,
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "funtoosh",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "2 stage Charades",
    description:
      "Two-stage event where candidates answer clue-based puzzles in the first stage. In the second stage, they play charades on provided answers with points awarded or deducted.",
    venue: "CSA",
    details: {
      timeLine: "3:30 hrs",
      type: "English",
      teamEvent: true,
      teamSize: "3-4 members",
      majorEvent: true,
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "funtoosh",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Turn the Quote + Just a Minute",
    description:
      "Two-staged event with 'Turn the Quote' followed by 'Just a Minute' round. Conducted in teams of two.",
    venue: "CSA and Alumni",
    details: {
      timeLine: "4:30 hrs",
      type: "Bilingual",
      teamEvent: true,
      teamSize: "Duo",
      majorEvent: true,
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "funtoosh",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "WHAT IF",
    description:
      "Situation-based event where participants provide a positive ending to familiar anecdotes/incidents/scenarios.",
    venue: "Electrical Seminar Hall",
    details: {
      timeLine: "1:30 hrs",
      type: "Bilingual",
      soloEvent: true,
      minorEvent: true,
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "funtoosh",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Card + Screen Word",
    description:
      "Participants write a philosophical POV in 50 words based on a given scene, submit through QR code, and the top entries proceed to a screen-based round with word prompts.",
    venue: "Electrical Seminar Hall",
    details: {
      timeLine: "1:30 hrs",
      type: "English",
      soloEvent: true,
      minorEvent: true,
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "funtoosh",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Word and Voice Based",
    description:
      "Candidates solve hints/riddles leading to the next round. The second stage is a voice-based round conducted in a buzzer manner with winners decided by points.",
    venue: "Mechanical",
    details: {
      timeLine: "2 hrs",
      type: "English",
      teamEvent: true,
      teamSize: "Duo",
      majorEvent: true,
    },
  },
  {
    id: 6,
    organizingCouncil: "Literary Council",
    type: "funtoosh",
    addedOn: "29 Feb",
    image: dutino,
    eventName: "Treasure Hunt",
    description:
      "Participants solve riddles or clues to reach locations, gather words, and arrange them to form a sentence. Winners decided based on time taken.",
    venue: "Alumni Park",
    details: {
      timeLine: "2:30 hrs",
      type: "English",
      teamEvent: true,
      teamSize: "3 - 5 members",
      minorEvent: true,
    },
  },
];
