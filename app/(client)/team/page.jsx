import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { team, teamData } from "@/data/team";

export default function () {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8   ">
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h2 className="text-2xl font-bold text-center md:text-4xl md:leading-tight mb-24">
            Our Team
          </h2>
        </div>
        <div>
          <h1 className="mb-4 text-2xl font-bold text-gray-700 text-voilet">
            Core Team
          </h1>
          <div className="grid grid-cols-1 gap-8 p-2 mt-8 lg:grid-cols-3 md:gap-6 md:p-0">
            {team.slice(4, team.length - 1).map((member, index) => (
              <div
                className="grid sm:flex sm:items-center gap-y-3 gap-x-4 "
                key={index}
              >
                <img
                  className="rounded-full size-16 object-cover"
                  src={member.image.src}
                  alt={member.name}
                />

                <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-full">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 uppercase">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 p-2 mt-10 lg:grid-cols-3 md:gap-12 md:p-0">
          {[
            {
              title: "Fest Secretary",
              data: teamData.chairpersonFestSecretary,
            },
            {
              title: "Fest Co-ordinator",
              data: teamData.festCoordinator,
            },
            {
              title: "Finance & Operation",
              data: teamData.financeAndOperation,
            },
            { title: "Competition Head", data: teamData.competitionHead },
            { title: "Informals Head", data: teamData.informalsHeads },
            { title: "Technical Heads", data: teamData.technicalHeads },
            {
              title: "Media Mixing and Mastering",
              data: teamData.mediaMixingAndMastering,
            },
            { title: "Sponsorship Head", data: teamData.sponsorshipHeads },
            {
              title: "Outreach and Hospitality",
              data: teamData.outreachAndHospitality,
            },
            { title: "Security Heads", data: teamData.securityHeads },
            { title: "Creative Heads", data: teamData.creativeHeads },
          ].map((each, index) => (
            <Collection key={index} {...each} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

function Collection(props) {
  let { title, data } = props;
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold text-voilet">{title}</h1>
      {data.map((member, index) => (
        <Display key={index} member={member} />
      ))}
    </div>
  );
}

function Display({ member }) {
  return (
    <div className="mb-4">
      <p className="text-sm font-semibold text-gray-700">{member.name}</p>
      <p className="text-sm text-gray-600">{`Department: ${member.department}`}</p>
    </div>
  );
}
