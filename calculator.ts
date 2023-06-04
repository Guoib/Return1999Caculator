import { StaticCostMapping } from "./config";
import { Score, CostType } from "./types";

class Back1999Calculator {
  static energyCostPerHundred = 100;

  costMapping: Map<CostType, Score>;

  constructor() {
    this.costMapping = StaticCostMapping;
  }

  calcGiftEnergy(params: Partial<Record<CostType, number>>) {
    return Object.entries(params).reduce(
      (cost, item) => (this.costMapping.get(item[0] as CostType) || 0) * item[1] + cost,
      0
    );
  }

  calcGiftCost(params: Partial<Record<CostType, number>>) {
    return (this.calcGiftEnergy(params) * Back1999Calculator.energyCostPerHundred) / 100;
  }
}

export default Back1999Calculator