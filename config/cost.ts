import { MindType, Score, CostType } from "@types";

type MindExperienceType = Extract<MindType, "启寤1" | "启寤2" | "启寤3">;

const MindExperience = {
  启寤1: 400,
  启寤2: 1000,
  启寤3: 2000,
} as const;

function calcMindCost(mindType: MindExperienceType, count: number) {
  const mindOnce = MindExperience["启寤1"] * 3 + MindExperience["启寤2"] * 1;
  const curMind = MindExperience[mindType] * count;
  return (curMind / mindOnce) * 25;
}

export const StaticCostMapping = new Map<CostType, Score>([
  ["微尘", 25 / 12500],
  ["利齿子儿", 25 / 9000],
  ["启寤1", calcMindCost("启寤1", 1)],
  ["启寤2", calcMindCost("启寤2", 1)],
  ["启寤3", calcMindCost("启寤3", 1)],
]);
