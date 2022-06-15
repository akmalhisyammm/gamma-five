import { Inferred, Input, RadioInput, Rule, UserCertaintyFactor } from 'types/inference';
import { Personality } from 'types/personality';
import { certaintyFactor } from './certaintyFactor';

export const infer = async (data: RadioInput, personalities: Personality[], rules: Rule[]) => {
  const modifiedInput: UserCertaintyFactor[] = [];

  for (const [key, value] of Object.entries(data)) {
    modifiedInput.push({
      characteristic_id: key,
      weight: parseFloat(value),
    });
  }

  const processedInput: Input[] = [];
  let tempCharacteristics = [];

  for (const rule of rules) {
    for (const characteristic of rule.characteristics) {
      for (const input of modifiedInput) {
        if (characteristic.characteristic_id === input.characteristic_id)
          tempCharacteristics.push(input);
      }
    }

    processedInput.push({
      personality_id: rule.personality_id,
      characteristics: tempCharacteristics,
    });

    tempCharacteristics = [];
  }

  const inferResult: Inferred[] = [];

  for (const input of processedInput) {
    const currentPersonality = personalities.find(
      (personality) => personality.id === input.personality_id
    );
    const currentRule = rules.find((rule) => rule.personality_id === input.personality_id);

    if (!currentPersonality || !currentRule) return;

    const certaintyProbability = certaintyFactor(input, currentRule);

    inferResult.push({
      personality: currentPersonality,
      probability: certaintyProbability,
    });
  }

  const highestInferProb = Math.max(...inferResult.map((res) => res.probability));

  return inferResult.find((res) => res.probability == highestInferProb);
};
