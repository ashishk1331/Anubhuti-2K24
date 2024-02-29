import mime from "../public/events/dramatics/mime.jpeg";
import monoact from "../public/events/dramatics/mono-act.jpeg";
import nukkadnatak from "../public/events/dramatics/nukkad-natak.jpeg";
import stageplay from "../public/events/dramatics/stage-play.jpeg";
import standup from "../public/events/dramatics/standup.jpeg";
export const dramaticsEvents = [
  {
    organizingCouncil: "Cultural Council",
    type: "drama",
    addedOn: "26 Feb",
    id: "8d3154bf-93c8-4313-8683-2d17ff07fe6e",
    eventName: "Street Saga (Nukkad Natak)",
    image: nukkadnatak,
    description:
      "Harnessing the dynamic energy of street gatherings, Nukkad or street plays have long served as a conduit for the collective voice of society. Here's your chance to ignite the pavement stage with your creativity! Step into the spotlight of the street play competition, where your voice transforms into a potent catalyst for social transformation. Merge artistry with advocacy and let your performance resonate as a powerful force for change.",
    rules: [
      "Only One team from one college is allowed.",
      "Language used can be Hindi or English.",
      "Script should be original and not infringe on any copyright. If found guilty, it would result in disqualification of the team.",
      "Vulgarity is strictly prohibited, avoid making any controversial remark.",
      "Recorded music is not allowed.",
      "Use of props is allowed.",
      "Negative Points for exceeding the time limit.",
    ],
    rounds: [
      {
        name: "ROUND 1",
        timeLimit: "7-10 minutes",
        teamSize: "Maximum of 25 members",
        penalty:
          "2% for every minute exceeded up to 5 minutes then 5% for each minute.",
      },
      {
        name: "ROUND 2",
        timeLimit: "25-30 minutes",
        teamSize: "Maximum of 25 members",
        penalty:
          "2% for every minute exceeded up to 5 minutes then 5% for each minute.",
      },
    ],
    judgingCriteria: [
      "Script and the quality of presentation.",
      "Acting and coordination of team.",
      "Creativity and use of props.",
      "Audience Engagement.",
      "Clarity of message.",
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    type: "drama",
    addedOn: "26 Feb",
    id: "af2bc2c7-60f5-4a42-8152-d2baa7dd703f",
    eventName: "Theatrical Tempest (Stage Play)",
    image: stageplay,
    description:
      "In the realm of theater, drama finds its essence in the heightened portrayal of emotions, a vivid exaggeration that transports us beyond the ordinary. This Anubhuti event pledges a deep commitment to the art of stagecraft, enriching the cultural experience of our audience with a diverse array of compelling dramas designed to stir and delight the senses. Gather your ensemble, immerse yourself in ingeniously crafted scripts, and bring them to life on stage, guided by the skillful direction that elevates each performance to new heights of theatrical excellence.",
    rules: [
      "Only One team from one college is allowed.",
      "Language used can be Hindi, English or Bi-lingual, or it can be a Musical Drama.",
      "Script can be original or an adaptation.",
      "Use of props is allowed.",
      "A team can have five backstage/prop manager, one light in charge, one sound in-charge and a round-up artist (if any they have to be registered).",
      "Vulgarity is strictly prohibited, avoid making any religious blasphemy or controversial remark. In any case, the judge's decision will be final.",
      "Negative Points for exceeding the time limit.",
    ],
    rounds: [
      {
        name: "Round 1",
        timeLimit: "40-50 minutes",
        teamSize: "Maximum of 15 members (Excluding five Backstage artists)",
        penalty:
          "5% for every minute exceeded up to 5 minutes then 7% for each minute.",
      },
    ],
    judgingCriteria: [
      "Script and the quality of presentation.",
      "Acting and depiction of characters.",
      "Relevance of script.",
      "Voice clarity and coordination of the team.",
      "Direction and use of stage.",
      "Creativity and use of props, costume, music and light.",
      "Audience Engagement.",
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    type: "drama",
    addedOn: "26 Feb",
    id: "e9c9b163-6729-49c5-b54f-0cc299eab07f",
    eventName: "Antarman (Mime)",
    image: mime,
    description:
      "Enter the mesmerizing realm of silent storytelling. Through expressive gestures and movements, enchant audiences, painting vivid narratives without uttering a word. Witness the power of emotion, humor, and drama unfold on stage, as you captivate with your creativity and precision. Join us for an unforgettable showcase where silence speaks volumes and imagination knows no bounds.",
    rules: [
      "Only One team from one college is allowed.",
      "The act should not contain any dialogues or lip sync.",
      "Script should be original and not infringe on any copyright. If found guilty, it would result in disqualification of the team.",
      "A team can have two backstage, one light in charge, one sound in-charge and",
      "Vulgarity is strictly prohibited, no act or gesture should be offensive or disrespectful. If any of these instructions are not followed, the act will be immediately stopped and will lead to disqualification.",
      "Points will be given on the basis of innovation, depiction of the situation, teamwork, and expressions.",
      "This competition will consist of one round only.",
    ],
    timeLimit: "10-12 minutes",
    teamSize: "Maximum of 15 members (Excluding two Backstage artists)",
    judgingCriteria: [
      "Acting and expression.",
      "Relevance of script.",
      "Clarity of script and depiction of the situation.",
      "Coordination of team and use of stage.",
      "Creativity and Innovation.",
      "Audience Engagement.",
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    type: "drama",
    addedOn: "26 Feb",
    id: "bae218f5-4a67-4f67-929e-3a03e50e0b6f",
    eventName: "Advitiya (Mono Act)",
    image: monoact,
    description:
      "Prepare to command the stage at Anubhuti’s prestigious Monoact Competition! Embrace the opportunity to showcase your solo talent with finesse and flair. From riveting character portrayals to captivating narratives, unleash your creativity and captivate the audience with your compelling performance. Join us for an exhilarating competition where your solo act promises to be the epitome of artistic excellence!",
    rules: [
      "Language used can be Hindi, English, or bilingual.",
      "Script should be original and not infringe on any copyright. If found guilty, it would result in disqualification of the team.",
      "Vulgarity is strictly prohibited, avoid making any controversial remark.",
      "Use of props is allowed.",
      "A team can have two backstage artist/prop manager, one light in charge, one sound in-charge. (if any they have to be registered).",
      "Negative Points for exceeding the time limit.",
      "More than one participant is allowed from one college.",
      "Topic will be provided by Team Anubhuti to shortlisted candidates for round 2.",
    ],
    rounds: [
      {
        name: "ROUND 1",
        timeLimit: "10 minutes",
        teamSize:
          "Maximum of three members (Including two Backstage artists if required)",
        penalty:
          "2% for every minute exceeded up to 5 minutes then 5% for each minute.",
        shortlistingCriteria:
          "5 candidates will be shortlisted for the next round.",
      },
      {
        id: "0cfe6f1c-bc6f-4f76-8e17-804cd62bbf5a",
        name: "ROUND 2",
        timeLimit: "10-12 minutes",
        teamSize:
          "Maximum of three members (Including two Backstage artists if required)",
        penalty:
          "2% for every minute exceeded up to 5 minutes then 5% for each minute. (Participants have to act on the topic provided only; otherwise, it will lead to disqualification.)",
      },
    ],
    judgingCriteria: [
      "Script and the quality of presentation.",
      "Acting and direction.",
      "Voice clarity and coordination of the team.",
      "Audience Engagement.",
      "Clarity and relevance of the message delivered.",
      "Direction and use of stage.",
      "Creativity and use of music and light.",
    ],
  },
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
        subRounds: [
          {
            id: "149b41c2-d3df-459b-bb24-7f2db7b17f06",
            name: "Duo Comedy Battle",
            description:
              "Out of the shortlisted participants for this round, two participants will get the same topic simultaneously. Each pair will be given 5 minutes for thinking up. After 5 minutes, the two will take the stage to perform their comedy as a comic duo, i.e., humor battle.",
            timeLimit: "5 minutes (for both)",
            penalty:
              "2% for every minute exceeded up to 5 minutes then 5% for each minute.",
          },
        ],
        judgingCriteria: [
          "50% of the marks will be given by judges based on the following:",
          "a) Originality and creativity of the comedy routine.",
          "b) Voice clarity",
          "c) Quality of the delivery, including timing, pacing and stage presence.",
          "d) Audience Engagement and evoke laughter.",
          "e) Overall impact of the performance.",
          "The rest 50% will be decided by the Audience Votes.",
        ],
      },
    ],
  },
];

// You can now use the 'dramaticsEvents' array in your application.
