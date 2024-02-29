import standup from "../public/events/dramatics/standup.jpeg";
export const tempdata = [
  {
    organizingCouncil: "Cultural Council",
    type: "drama",
    addedOn: "26 Feb",
    id: "0e6a2bfc-0118-4d05-83df-271f5d76c42b",
    eventName: "GIGGLE GALA (Stand-Up Comedy)",
    image: standup,
    description:
      "Attention comedy connoisseurs! Embrace the spotlight and let your humor soar at our Stand-Up Comedy Competition. From seasoned jesters to budding jokesters, this is your moment to shine. Bring your A-game, dazzle the audience with your wit, and leave them roaring with laughter. Join us for an evening of comedic brilliance, where every punchline counts and the stage is yours to conquer!",
    rules: [
      "Language used can be Hindi, English, or bilingual.",
      "Script should be original and not infringe on any copyright. If found guilty, it would result in disqualification of the team.",
      "Vulgarity is strictly prohibited, avoid making any religious blasphemy or controversial remark. In any case, the performance will be immediately stopped and will lead to disqualification.",
      "More than one participant is allowed from one college.",
      "Negative Points for exceeding the time limit.",
      "The competition will consist of two rounds.",
    ],
    rounds: [
      {
        id: "9b63cf3e-1b1f-41cc-98fb-e7b3b968780a",
        name: "ROUND 1",
        timeLimit: "15 minutes",
        penalty:
          "2% for every minute exceeded up to 5 minutes then 5% for each minute.",
        shortlistingCriteria: "Shortlisted candidates will go for round 2.",
      },
      {
        id: "1dbef1dd-8015-41c9-8754-cb72f23c8bcf",
        name: "ROUND 2",
        description:
          "Calling all dynamic duos of comedy! It's time to team up and bring your comedic synergy to the stage at our Stand-Up Comedy Duo Battle. Whether you're partners in crime or comedic kindred spirits, this is your chance to showcase your unique creativity and comedic chemistry as a duo. Prepare to dazzle the audience with your hilarious banter, clever routines, and double the laughter.",

        judgingCriteria: {
          a: "50% of the marks will be given by judges based on the following:",
          b: "a) Originality and creativity of the comedy routine.",
          c: "b) Voice clarity",
          d: "c) Quality of the delivery, including timing, pacing and stage presence.",
          e: "d) Audience Engagement and evoke laughter.",
          f: "e) Overall impact of the performance.",
          g: "The rest 50% will be decided by the Audience Votes.",
        },
      },
    ],
  },
];
