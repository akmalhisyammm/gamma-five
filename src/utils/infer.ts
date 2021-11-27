import { Inferred, Input, Personality, Rule } from 'models';
import { certaintyFactor } from './certaintyFactor';

export const infer = async (
  data: Input,
  personality: Personality,
  rule: Rule
) => {
  const certaintyProbability = certaintyFactor(data, rule);

  const inferred: Inferred = {
    personality: personality,
    probability: certaintyProbability,
  };

  return inferred;
};
