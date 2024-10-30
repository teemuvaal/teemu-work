'use client'

import { useState } from 'react'
import TechnologyPill from "./TechnologyPill"
import SkillPill from "./SkillPill"
import config from "@/config"

const Technologies = () => {
  const [expandedTech, setExpandedTech] = useState(null);

  return (
    <div className="py-2">
      <h2 className="text-sm pb-2">Technologies</h2>
      <div className='flex flex-wrap px-2 gap-2'>
        {config.Technologies.map((technology, index) => (
          <TechnologyPill 
            key={index} 
            technology={technology} 
            isExpanded={expandedTech === technology.name}
            onExpand={() => setExpandedTech(expandedTech === technology.name ? null : technology.name)}
          />
        ))}
      </div>
    </div>
  );
};

const OtherSkills = () => {
    const [expandedSkill, setExpandedSkill] = useState(null);
  
    return (
      <div>
        <h2 className="text-sm pb-2">Other Skills</h2>
        <div className='flex flex-wrap px-2 gap-2'>
          {config.OtherSkills.map((skill, index) => (
            <SkillPill 
              key={index} 
              skill={skill} 
              isExpanded={expandedSkill === skill.name}
              onExpand={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
            />
          ))}
        </div>
      </div>
    );
  };

export default function Skills() {
  return (
    <div className='py-2'>
      <span className='flex flex-row gap-1'><h1 className='font-bold'>Skills</h1>
      </span>
      <Technologies />
      <OtherSkills />
    </div>
  );
}