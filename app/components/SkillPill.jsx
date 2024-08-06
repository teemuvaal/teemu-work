const ExpandedSkill = ({ skill }) => (
  <div className="ml-1 rounded-lg bg-black px-2 py-1 text-sm text-white">
    <p>{skill.description}</p>
  </div>
);

export default function SkillPill({ skill, isExpanded, onExpand }) {
  return (
    <div className="inline-block">
      <span 
        className="inline-flex items-center hover:scale-105 cursor-pointer"
        onClick={onExpand}
      >
        <div className="rounded-lg bg-black px-2 py-1 text-sm text-white">
          {skill.name}
        </div>
        {isExpanded && <ExpandedSkill skill={skill} />}
      </span>
    </div>
  );
}