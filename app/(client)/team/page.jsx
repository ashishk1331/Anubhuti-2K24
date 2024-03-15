import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { team, teamData } from "@/data/team";

export default function () {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 py-10 sm:px-6 lg:px-8   ">
        <div className="max-w-2xl mx-auto mb-10 text-center">
          <h2 className="text-2xl font-bold text-center md:text-4xl md:leading-tight dark:text-white">
            Our Team
          </h2>
        </div>
        <div>
          <h1 className="mb-4 text-2xl font-bold text-gray-700">Core Team</h1>
          <div className="grid grid-cols-1 gap-8 p-2 mt-8 lg:grid-cols-3 md:gap-6 md:p-0">
            {team.slice(4, team.length - 1).map((member, index) => (
              <div
                className="grid sm:flex sm:items-center gap-y-3 gap-x-4 "
                key={index}
              >
                <img
                  className="rounded-full size-12"
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
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Fest Secretory
            </h1>
            {teamData.chairpersonFestSecretary.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Fest Co-ordinator
            </h1>
            {teamData.festCoordinator.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Finance & Operation
            </h1>
            {teamData.financeAndOperation.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Competition Head
            </h1>
            {teamData.competitionHead.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Informals Head
            </h1>
            {teamData.informalsHeads.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Technical Heads
            </h1>
            {teamData.technicalHeads.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Media Mixing and Mastering
            </h1>
            {teamData.mediaMixingAndMastering.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Sponsorship Head
            </h1>
            {teamData.sponsorshipHeads.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Outreach and Hospitality
            </h1>
            {teamData.outreachAndHospitality.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Security Heads
            </h1>
            {teamData.securityHeads.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
          <div className="">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
              Creative Heads
            </h1>
            {teamData.creativeHeads.map((member, index) => (
              <Display key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
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
