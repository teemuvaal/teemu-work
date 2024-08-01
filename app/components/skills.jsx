'use client'

import Technologies from "./Technologies.json"
import SkillPill from "./SkillPill"
import Image from "next/image"
import OtherSkills from "./OtherSkills.json"
import { useState } from "react"

// New component for expanded technology information
const ExpandedTechnology = ({ technology }) => (
  <div className="rounded-lg bg-black px-2 py-1 text-sm text-white flex flex-row gap-2">
    <p><strong>{technology.name}</strong></p>
    <p>{technology.level}</p>
  </div>
)

export default function Skills () {
    const [expandedTech, setExpandedTech] = useState(null)

    const expandSkill = (index) => {
        setExpandedTech(expandedTech === index ? null : index)
    }

    return (
        <div className='py-2'>
            <h1 className='font-strong'>Skills</h1>
            <div className="py-2">
                <div className='flex flex-wrap px-2 gap-1'>
                    {Technologies.map((technology, index) => (
                        <div key={index} className="flex flex-row items-center gap-1">
                            <span className="hover:scale-105 cursor-pointer flex flex-row" onClick={() => expandSkill(index)}>
                                <Image src={technology.icon} alt={technology.name} width={28} height={28} />
                            </span>
                            {expandedTech === index && (
                                    <ExpandedTechnology technology={technology} />
                                )}
                        </div>
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