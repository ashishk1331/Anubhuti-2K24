import { ID, databases, storage } from "@/Appwrite/appwrite.config";
import { Query } from "appwrite";
import { useState } from "react";
import solo from "@/public/landing/crowd.jpg";
export default function EventForm() {
  const [formData, setFormData] = useState({
    organizingCouncil: "Cultural Council",
    addedOn: "26 Feb",
    eventName: "Odoru Era: Duet - Time Travel",
    image: null, // Image will be stored as a file
    description:
      "Step into the past and experience the magic of dance across the ages...",
    teamSize: 2,
    numberOfRounds: 2,
    rules:
      "All types of dance forms are allowed except classical.\nParticipants are allowed to use props as a part of their performance.",
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleRoundInputChange = (index, field, value) => {
    const newRounds = [...formData.rounds];
    newRounds[index][field] = value;
    setFormData({
      ...formData,
      rounds: newRounds,
    });
  };

  const handleJudgingCriteriaChange = (index, criteriaIndex, value) => {
    const newRounds = [...formData.rounds];
    newRounds[index].judgingCriteria[criteriaIndex] = value;
    setFormData({
      ...formData,
      rounds: newRounds,
    });
  };

  const addRound = () => {
    setFormData({
      ...formData,
      rounds: [
        ...formData.rounds,
        {
          name: `Round ${formData.rounds.length + 1}`,
          description: "",
          timeLimit: "",
          judgingCriteria: [
            "Choreography",
            "Theme relevance",
            "Technique",
            "Coordination",
            "Energy",
          ],
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);

    try {
      const promise = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        ID.unique(),
        formData.image
      );
      console.log(promise);
      // const promise2 = await databases.createDocument(
      //   process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      //   process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
      //   ID.unique(),
      //   {
      //     imageId: "abd",
      //     data: JSON.stringify(formData),
      //   }
      // );
      // console.log(promise2.$id);
      // const data = await databases.listDocuments(
      //   process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      //   process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
      //   [Query.equal("$id", promise2.$id)]
      // );
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container max-w-md p-6 mx-auto my-10 bg-gray-200">
      <form onSubmit={handleSubmit}>
        <label
          className="block mb-2 text-lg font-bold"
          htmlFor="organizingCouncil"
        >
          Organizing Council:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          id="organizingCouncil"
          name="organizingCouncil"
          value={formData.organizingCouncil}
          onChange={handleInputChange}
        />

        <label className="block mb-2 text-lg font-bold" htmlFor="addedOn">
          Added On:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          id="addedOn"
          name="addedOn"
          value={formData.addedOn}
          onChange={handleInputChange}
        />

        <label className="block mb-2 text-lg font-bold" htmlFor="eventName">
          Event Name:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          id="eventName"
          name="eventName"
          value={formData.eventName}
          onChange={handleInputChange}
        />

        <label className="block mb-2 text-lg font-bold" htmlFor="image">
          Image:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="file"
          id="image"
          name="image"
          onChange={handleFileChange}
        />

        <label className="block mb-2 text-lg font-bold" htmlFor="description">
          Description:
        </label>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        />

        <label className="block mb-2 text-lg font-bold" htmlFor="teamSize">
          Team Size:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="number"
          id="teamSize"
          name="teamSize"
          value={formData.teamSize}
          onChange={handleInputChange}
        />

        <label
          className="block mb-2 text-lg font-bold"
          htmlFor="numberOfRounds"
        >
          Number of Rounds:
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="number"
          id="numberOfRounds"
          name="numberOfRounds"
          value={formData.numberOfRounds}
          onChange={handleInputChange}
        />

        <label className="block mb-2 text-lg font-bold" htmlFor="rules">
          Rules:
        </label>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          id="rules"
          name="rules"
          value={formData.rules}
          onChange={handleInputChange}
          rows="4"
          cols="50"
        />

        <label className="block mb-2 text-lg font-bold" htmlFor="rounds">
          Rounds:
        </label>
        <div>
          {formData.rounds.map((round, index) => (
            <div key={index} className="mb-4">
              <label
                className="block mb-2 text-lg font-bold"
                htmlFor={`roundName${index}`}
              >
                Round {index + 1} Name:
              </label>
              <input
                className="w-full p-2 mb-2 border rounded"
                type="text"
                id={`roundName${index}`}
                name={`rounds[${index}][name]`}
                value={round.name}
                onChange={(e) =>
                  handleRoundInputChange(index, "name", e.target.value)
                }
              />

              <label
                className="block mb-2 text-lg font-bold"
                htmlFor={`roundDescription${index}`}
              >
                Round {index + 1} Description:
              </label>
              <textarea
                className="w-full p-2 mb-2 border rounded"
                id={`roundDescription${index}`}
                name={`rounds[${index}][description]`}
                value={round.description}
                onChange={(e) =>
                  handleRoundInputChange(index, "description", e.target.value)
                }
                rows="4"
                cols="50"
              />

              <label
                className="block mb-2 text-lg font-bold"
                htmlFor={`timeLimit${index}`}
              >
                Round {index + 1} Time Limit:
              </label>
              <input
                className="w-full p-2 mb-2 border rounded"
                type="text"
                id={`timeLimit${index}`}
                name={`rounds[${index}][timeLimit]`}
                value={round.timeLimit}
                onChange={(e) =>
                  handleRoundInputChange(index, "timeLimit", e.target.value)
                }
              />

              <label
                className="block mb-2 text-lg font-bold"
                htmlFor={`judgingCriteria${index}`}
              >
                Round {index + 1} Judging Criteria:
              </label>
              {round.judgingCriteria.map((criteria, criteriaIndex) => (
                <div key={criteriaIndex} className="mb-2">
                  <textarea
                    className="w-full p-2 border rounded"
                    id={`judgingCriteria${index}`}
                    name={`rounds[${index}][judgingCriteria][${criteriaIndex}]`}
                    value={criteria}
                    onChange={(e) =>
                      handleJudgingCriteriaChange(
                        index,
                        criteriaIndex,
                        e.target.value
                      )
                    }
                    rows="2"
                    cols="50"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addRound}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add Round
        </button>
        <br />

        <input
          type="submit"
          value="Submit"
          className="px-4 py-2 text-white bg-green-500 rounded cursor-pointer"
        />
      </form>
    </div>
  );
}
