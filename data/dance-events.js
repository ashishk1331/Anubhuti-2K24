import dutino from "../public/events/dance/dutino.jpg";
import nrityarang from "../public/events/dance/Nityarang.jpg";
import odoru_era from "../public/events/dance/Odoru_era.jpg";
import odoru_era2 from "../public/events/dance/Odoru_era2.jpg";
import solo from "../public/events/dance/solo.jpg";
import troupe_jive from "../public/events/dance/Troupe_jive.jpg";
export const danceEvents = [
  {
    organizingCouncil: "Cultural Council",
    addedOn: "26 Feb",
    id: "1c60a7c4-8a98-4b3f-b321-57b08b2997a7",
    eventName: "Odoru Era: Duet - Time Travel",
    image: odoru_era,
    description:
      "Step into the past and experience the magic of dance across the ages. This enchanting event will transport you through time, showcasing the evolution of dance from ancient civilizations to modern times. Marvel at the mesmerizing movements of Egyptian belly dancers, feel the elegance of Renaissance court dances, groove to the vibrant rhythms of the Roaring Twenties, and more. Each performance will be a mesmerizing journey through history, blending music, costume, and choreography to bring each era to life. Join us for a night of timeless beauty and cultural exploration at 'Odoru Era'.",
    teamSize: 2,
    numberOfRounds: 2,
    rules: [
      "All types of dance forms are allowed except classical.",
      "Participants are allowed to use props as a part of their performance.",
    ],
    rounds: [
      {
        name: "Round 1",
        description:
          "Contestants will have to perform a part of the prepared dance.",
        timeLimit: "1.5-3 min",
        judgingCriteria: [
          "Choreography",
          "Theme relevance",
          "Technique",
          "Coordination",
          "Energy",
        ],
      },
      {
        name: "Round 2",
        description:
          "Participants will have to perform the full performance of the prepared dance.",
        timeLimit: "2.5-5 min",
        judgingCriteria: [
          "Choreography",
          "Technique",
          "Energy",
          "Creativity (props and costume included)",
          "Theme relevance",
          "Overall impact",
        ],
      },
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    addedOn: "26 Feb",
    id: "85858520-0a5b-4d62-bf0a-5659deade222",
    eventName: "Duettino: A Duet Dance Extravaganza",
    image: dutino,
    description:
      "Experience the magic of two dancers moving as one at 'Duettino'. This spectacular duet dance event brings together talented performers who will mesmerize you with their synchronization, grace, and chemistry on stage. From elegant ballroom routines to passionate contemporary pieces, each performance tells a unique story through the language of dance. Feel the emotion, the connection, and the artistry as these duos take you on a journey of love, friendship, and human expression. Join us for an unforgettable evening of beauty, rhythm, and harmony at 'Duettino: A Duet Dance Extravaganza'.",
    teamSize: 2,
    numberOfRounds: 2,
    rounds: [
      {
        name: "Round 1",
        description:
          "An elimination round in which props are not allowed. The teams would present a pre-prepared performance on the basis of which the top 5 teams would be qualified for round 2.",
        timeLimit: "3-6 min",
        judgingCriteria: [
          "Choreography",
          "Synchronisation",
          "Chemistry",
          "Technique",
        ],
      },
      {
        name: "Round 2",
        description:
          "The prop round in which the top 5 teams from the previous round would be given certain props as a challenge which they will have to incorporate into their performance.",
        timeLimit: "2-4 min",
        judgingCriteria: [
          "Creative use of prop",
          "Choreography",
          "Overall impact",
        ],
      },
    ],
    rules: [
      "All types of dance styles are allowed except classical.",
      "Proper usage of allotted props is mandatory in the second round.",
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    addedOn: "26 Feb",
    id: "1e5acbc3-5f49-4d9b-a45c-4e93c1411334",
    eventName: "Nrityarang: A Classical Dance Showcase",
    image: nrityarang,
    description:
      "Experience the grace, beauty, and rich cultural heritage of classical dance at 'Nrityarang'. This enchanting event brings together talented dancers who will captivate you with their precision, expression, and artistry. From the intricate footwork of Bharatanatyam to the lyrical movements of ballet, each performance is a celebration of tradition and storytelling through dance. Join us for an evening of exquisite performances that pay homage to the timeless elegance of classical dance at 'Nrityarang: A Classical Dance Showcase'.",
    teamSize: "1-10",
    numberOfRounds: 1,
    rules: [
      "Participants should showcase their mastery of classical dance techniques while also demonstrating creativity and originality in their choreography and expression.",
      "Use of props is not allowed.",
      "Participants can participate as a soloist, in a duet, or in a group.",
    ],
    judgingCriteria: [
      "Choreography and creativity",
      "Costumes and makeup",
      "Musicality",
      "Gestures and posture",
      "Expressions",
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    addedOn: "26 Feb",
    id: "9bc6b519-f416-4a29-b6ef-8746b0413e2b",
    eventName: "Jig Tales: Storytelling Group Dance",
    image: odoru_era2,
    description:
      "Embark on a journey through myth and legend at 'Jig Tales' where dance and storytelling intertwine to create a mesmerizing spectacle. This unique group dance event brings to life ancient tales and folklore through the art of movement, blending traditional dance forms with innovative choreography. Each performance is a narrative masterpiece, with dancers embodying characters, emotions, and scenes from timeless stories. Join us for this magical evening of storytelling.",
    groupSize: "4-10",
    numberOfRounds: 1,
    rules: [
      "Group size: 4-10",
      "All types of dance forms are allowed except classical.",
      "Props are allowed.",
    ],
    timeLimit: "4-8 min",
    judgingCriteria: [
      "Storytelling",
      "Synchronization",
      "Choreography",
      "Costume",
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    addedOn: "26 Feb",
    id: "ff2bdca5-43ef-4467-9d5f-2871101f0c2e",
    eventName: "Flamenco: A Solo Dance Experience",
    image: solo,
    description:
      "Embark on a journey of self-expression and artistry at 'Flamenco'. This unique solo dance event showcases the power and beauty of individual performance, where each dancer takes the stage alone to express themselves through movement. Join us for a night of introspection, inspiration, and breathtaking performances at 'Flamenco: A Solo Dance Experience'.",
    teamSize: 1,
    numberOfRounds: 2,
    rounds: [
      {
        name: "Round 1",
        description:
          "An elimination round where participants are supposed to perform a pre-prepared dance.",
        timeLimit: "3-6 min",
        judgingCriteria: [
          "Technique: Precision, control, and clarity of dance movements",
          "Creativity: Originality in choreography, interpretation",
          "Stage Presence: Confidence and expressiveness",
          "Musicality: Synchronization with the music and rhythm",
        ],
      },
      {
        name: "Round 2",
        description:
          "The battle round where dancers would be battling with a randomly paired opponent on a random song impromptu.",
        subRounds: {
          name: "Impromptu Battle",
          description:
            "Both dancers will perform for 30 seconds consecutively. In the next 30 seconds, both dancers will perform on a different song simultaneously based on which they’ll be judged.",
          timeLimit: "6min (Maximum), 3min (Minimum)",
        },
        judgingCriteria: [
          "Technique: Precision, control, and clarity of dance movements",
          "Creativity: Originality in choreography, interpretation",
          "Stage Presence: Confidence and expressiveness",
          "Musicality: Synchronization with the music and rhythm",
        ],
      },
    ],
    rules: [
      "Usage of props is allowed but must not pose a safety hazard or obstruct the stage.",
      "All dance forms are allowed except classical.",
      "Performers must provide their own music in MP3 format a day before the commencement of the event.",
      "Covers and adaptations are permitted, original choreography is encouraged and will be rewarded.",
    ],
  },
  {
    organizingCouncil: "Cultural Council",
    addedOn: "26 Feb",
    id: "ab3e4f68-4e21-4d24-8d94-8b1037da3d2d",
    eventName: "Troupe Jive",
    image: troupe_jive,
    description:
      "Prepare to be dazzled by the power of collective movement at 'Troupe Jive.' This vibrant group dance event features a variety of dance styles performed by talented ensembles, each bringing their unique flair and energy to the stage. Join us for an unforgettable evening of rhythm, unity, and celebration.",
    teamSize: "4-15",
    numberOfRounds: 2,
    rounds: [
      {
        name: "Round 1",
        description:
          "Groups will perform their pre-prepared performances on the basis of which the top 5 teams will be qualified for the second round.",
        timeLimit: "5-12 min",
        judgingCriteria: [
          "Choreography and originality",
          "Costumes and Makeup",
          "Synchronization and Overall Effects",
        ],
      },
      {
        name: "Round 2",
        description:
          "Emotions in Motion: The selected teams will have to express a range of human emotions through dance.",
        timeLimit: "5-12 min",
        judgingCriteria: [
          "Choreography and originality",
          "Costumes and Makeup",
          "Synchronization and Overall Effects",
          "Theme relevance",
        ],
      },
    ],
    rules: [
      "A minimum of 4 dancers must be on stage at all times during the performance.",
      "All dance forms are allowed except classical.",
      "Usage of props is not allowed.",
    ],
    note: [
      "Decision of the judges will be final and binding",
      "The organizing team reserves the right to change or modify the rules",
    ],
  },
];
