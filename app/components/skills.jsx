import Technologies from "./Technologies.json"
import SkillPill from "./SkillPill"
import Image from "next/image"
import OtherSkills from "./OtherSkills.json"


export default function Skills () {
    return (
        <div className='py-2'>
            <h1 className='font-strong'>Skills</h1>
            <div className="py-2">
                <div className='flex flex-wrap px-2 gap-1'>
                    {Technologies.map((technology, index) => (
                        <span key={index}className="hover:scale-105">
                            <Image key={index} src={technology.icon} alt={technology.name} width={24} height={24} />
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex flex-wrap gap-1 p-2 text-sm'>
                    {OtherSkills.map((skill, index) => (
                        <SkillPill key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    )
}