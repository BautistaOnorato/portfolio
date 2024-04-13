import type { Skill as SkillType } from "../../consts/skills";

const Skill = ({ name, icon }: SkillType) => {
  return (
    <li className="flex items-center gap-3">
      {icon(48)}
      <span className="text-xl font-bold">{name}</span>
    </li>
  );
};

export default Skill;
