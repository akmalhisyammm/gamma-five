import { Inferred, Input } from 'models';
import { getPersonalityById, getRuleByPersonalityId } from 'services/firebase';
import { certaintyFactor } from './certaintyFactor';

export const infer = async (data: Input) => {
  const personality = await getPersonalityById(data.personality_id);
  const rule = await getRuleByPersonalityId('R' + data.personality_id.slice(1));

  if (!personality || !rule) return;

  const certaintyProbability = certaintyFactor(data, rule);

  const inferred: Inferred = {
    personality: personality,
    probability: certaintyProbability,
  };

  return inferred;
};
