
import { team } from "@/data/team";

export default function () {
    return <div className="bg-[#000f1e]">
        <>
            <div className="w-full h-24 bg-sky-500 bg-gradient-to-b from-[#2b124c] to-[#000f1e]" />
            <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
                {/* Title */}
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <p className="mt-10 mb-10 text-[#efc36a] font-bold text-7xl ">Our Team</p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
                    {
                        team.map((member, index) => (
                            <div className="text-center" key={index}>
                                <img
                                    className="rounded-full size-24 mx-auto"
                                    src={member.image.src}
                                    alt={member.name}
                                />
                                <div className="mt-2 sm:mt-4">
                                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {member.designation}
                                    </p>
                                </div>
                            </div>
                        ))
                    }


                </div>
                {/* End Grid */}
              
            </div>

        </>
    </div>
}