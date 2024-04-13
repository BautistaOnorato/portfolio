import type { Skill } from "../../consts/skills";

const SkillTag = ({ name, icon }: Skill) => {
  return (
    <div className="flex items-center justify-center px-2 py-2 gap-2 bg-[#1b1b1b] border border-[#3f3f3f] rounded-md">
      {icon(24)}
      {name}
    </div>
  );
};

export default SkillTag;
