import Image from "next/image";

const ExpandedTechnology = ({ technology }) => (
  <div className="ml-1 rounded-lg bg-black px-2 py-1 text-sm text-white flex flex-row gap-1 transition-all duration-300">
    <p><strong>{technology.name}</strong></p>
    <p>{technology.level}</p>
  </div>
);

export default function TechnologyPill({ technology, isExpanded, onExpand }) {
  return (
    <div className="inline-block">
      <span 
        className="inline-flex items-center hover:scale-105 cursor-pointer"
        onClick={onExpand} onMouseEnter={onExpand} onTouchStart={onExpand}
      >
        <Image src={technology.icon} alt={technology.name} width={28} height={28} />
        {isExpanded && <ExpandedTechnology technology={technology} />}
      </span>
    </div>
  );
}