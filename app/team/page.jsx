
import { team } from "@/data/team";


export default function () {
    return <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our Team</h2>
            
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-2 md:p-0">

            {
                team.map((member, index) => (
                    <div className="grid sm:flex sm:items-center  gap-y-3 gap-x-4 " key={index}>
                        <img className="rounded-full size-20" src={member.image.src} alt={member.name} />

                        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-full">
                            <div>
                                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-xs uppercase text-gray-500">
                                    {member.designation}
                                </p>
                            </div>

                        </div>
                    </div>
                ))
            }


        </div>

    </div>

}