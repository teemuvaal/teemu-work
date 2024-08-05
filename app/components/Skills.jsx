'use client'

import SkillPill from "./SkillPill"
import Image from "next/image"
import { useState } from "react"
import config from "@/config"

// New component for expanded technology information
const ExpandedTechnology = ({ technology, isExpanded }) => (
  <div className={`rounded-lg bg-black px-2 py-1 text-sm text-white flex flex-row gap-1 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-28 opacity-100' : 'max-h-0 opacity-0'}`}>
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
                    {config.Technologies.map((technology, index) => (
                        <div key={index} className="flex flex-row items-center gap-1">
                            <span className="hover:scale-105 cursor-pointer flex flex-row" onClick={() => expandSkill(index)}>
                                <Image src={technology.icon} alt={technology.name} width={28} height={28} />
                            </span>
                            {expandedTech === index && (
                                    <ExpandedTechnology technology={technology} isExpanded={expandedTech === index} />
                                )}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className='flex flex-wrap gap-1 p-2 text-sm'>
                    {config.OtherSkills.map((skill, index) => (
                        <SkillPill key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    )
}