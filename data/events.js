import gallery1 from "../public/gallery/gallery1.png";
import gallery2 from "../public/gallery/gallery2.png";
import gallery3 from "../public/gallery/gallery3.png";
import gallery4 from "../public/gallery/gallery4.png";
import gallery5 from "../public/gallery/gallery5.png";
import gallery6 from "../public/gallery/gallery6.png";
import gallery7 from "../public/gallery/gallery7.png";
import gallery8 from "../public/gallery/gallery8.png";
import gallery9 from "../public/gallery/gallery9.png";
import gallery10 from "../public/gallery/gallery10.png";
import gallery11 from "../public/gallery/gallery11.png";
import gallery12 from "../public/gallery/gallery12.png";
import gallery13 from "../public/gallery/gallery13.png";
// import gallery14 from "../public/gallery/gallery14.png";
// import gallery15 from "../public/gallery/gallery15.png";
export const events = [
  {
    id: "NKLSb7mKS64XLdK6I1tqE",
    eventName: "BollyFare",
    image: gallery1,
    description:
      "Get ready to shine at BollyFare, where your Bollywood talent takes the spotlight. This is a solo performance in 2 rounds.",
    rounds: [
      {
        name: "Round1: Freestyle",
        description: "Sing any song of your own choice.",
        rules: ["Sing any song of your own choice."],
      },
      {
        name: "Round2: BollywoodBeats",
        description:
          "Selected performers will get a chance to sing any Bollywood song.",
        rules: ["Choose any Bollywood song of your own choice and perform it."],
      },
    ],
    judgingCriteria: [
      "Stage presence",
      "Clarity",
      "Vocal quality",
      "Rhythmic interpretation",
    ],
    timeLimit: "4 minutes",
    venue: "Specify Venue",
    summary:
      "Shine with your Bollywood talent in a solo performance with 2 rounds.",
  },
  {
    id: "ryj47Bqv1GVv0vHz73Muo",
    eventName: "CARVAAN(DUET)",
    image: gallery10,
    description:
      "Get ready to show your love for the retro songs. This is a duet event with two rounds.",
    rounds: [
      {
        name: "Freestyle Round",
        description: "Participants can choose a song of their own choice.",
      },
      {
        name: "Second Round",
        description:
          "Selected participants will perform retro songs of their own choice.",
        rules: [
          "Compulsory involvement of a girl and a boy.",
          "Participants selected based on judging criteria.",
        ],
      },
    ],
    judgingCriteria: [
      "Stage presence",
      "Clarity in voice",
      "Vocal quality",
      "Rhythmic interpretation",
      "Creativity",
    ],
    timeLimit: "6 minutes",
    venue: "Specify Venue",
    summary:
      "Express your love for retro songs in this duet event with two rounds.",
  },
  {
    id: "5H9Pg2H1AKoN8uc2ZIvyI",
    eventName: "SANGAM(GROUP)",
    image: gallery3,
    description:
      "Sangam Singing Group Event celebrates the harmony of diverse musical styles. It features two rounds - Freestyle and Classical/Western.",
    rounds: [
      {
        name: "Freestyle Round",
        description:
          "Groups must consist of 3 to 6 members. Freedom to choose any genre or style.",
      },
      {
        name: "Classical/Western Round",
        description:
          "Groups must choose either classical or western music for this round.",
      },
    ],
    rules: ["Original compositions or covers allowed."],
    judgingCriteria: [
      "Stage presence",
      "Clarity in voice",
      "Vocal quality",
      "Rhythmic interpretation",
      "Creativity",
    ],
    timeLimit: "8 minutes",
    venue: "Specify Venue",
    summary: "Celebrate musical harmony with diverse styles in two rounds.",
  },
  {
    id: "07BVQqDLnQxeX0xUzMv2P",
    eventName: "TARANG(Instrumental)",
    image: gallery4,
    description:
      "An instrumental event where contestants can perform in groups. No limit in the number of members.",
    rules: ["Contestants can perform in groups."],
    timeLimit: "10-15 minutes",
    venue: "Specify Venue",
    summary: "Showcase instrumental prowess in a group performance.",
  },
  {
    id: "6_5qokW-i_XKUSxFYCPlP",
    eventName: "GHAZALNIGHT(KAWALI)",
    image: gallery9,
    description:
      "Celebrate a night filled with rich culture, bringing people together through contemporary music and rich poetry.",
    venue: "Specify Venue",
    summary: "Immerse in rich culture through contemporary music and poetry.",
  },
  {
    id: "iD4BbX8k35NGgnrodlxDo",
    eventName: "Vodka Volume (Rap Battle)",
    image: gallery8,
    description:
      "The most intense rap battle showdown of the year! Fiercest wordsmiths and lyricists compete in a high-energy clash of rhymes.",
    rules: [
      "Solo performances with designated time.",
      "No personal attacks.",
      "Original content only.",
    ],
    judgingCriteria: ["Delivery", "Lyrical content", "Flow", "Crowd reaction"],
    timeLimit: "TBD",
    venue: "Specify Venue",
    summary: "Engage in intense rap battles with designated rules.",
  },
  {
    id: "LBAX5rim0YETfrDys-ysu",
    eventName: "PitchClash (Vocal Battle)",
    image: gallery7,
    description:
      "Vocalists go head-to-head in a battle of melodies, harmonies, and raw vocal talent. Solo and Battle rounds.",
    rules: [
      "Solo performance showcasing individual vocal abilities.",
      "Vocal battle with paired vocalists.",
    ],
    judgingCriteria: [
      "Creativity",
      "Improvisation",
      "Vocal range and control",
      "Overall performance",
      "Audience engagement",
      "Vocal dynamics",
    ],
    venue: "Specify Venue",
    summary: "Vocalists compete head-to-head in solo and battle rounds.",
  },
  {
    id: "Xldeqnx8csc91Rry6anDA",
    eventName: "BandHustle",
    image: gallery8,
    description:
      "Bands compete in the ultimate musical showdown. Showcase your unique sound and wow the audience in this thrilling 30-minute competition.",
    time: "1/2 hr",
    venue: "Specify Venue",
    summary:
      "Bands compete to showcase their unique sound in a thrilling 30-minute showdown.",
  },
  {
    id: "jXluIZqICSZKAXIUYntl6",
    eventName: "Throatbass Singing Event",
    image: gallery9,
    description:
      "Celebrate the captivating art of throatbass singing. Contestants demonstrate talent, creativity, and vocal prowess.",
    venue: "Specify Venue",
    summary:
      "Demonstrate talent, creativity, and vocal prowess in throatbass singing.",
  },
  {
    id: "Z0LmGXznwhg8mjIRFV3F2",
    eventName: "ANTAKSHARI BATTLE",
    image: gallery10,
    description:
      "Reminisce the good old days with this spoken parlor game. Contestants sing verses based on the Hindi alphabet.",
    venue: "Specify Venue",
    summary:
      "Reminisce with this spoken parlor game singing verses based on the Hindi alphabet.",
  },
];
