import { Input, Rule } from 'types/inference';

export const certaintyFactor = (input: Input, rule: Rule) => {
  const certainties = [];
  let probability = 0.0;

  for (const userData of input.characteristics) {
    for (const expertData of rule.characteristics) {
      if (userData.characteristic_id === expertData.characteristic_id) {
        const CF_Expert = expertData.mb - expertData.md;
        const CF_User = userData.weight;

        certainties.push(CF_Expert * CF_User);
      }
    }
  }

  if (!certainties.length) return probability;

  probability = certainties[0];
  for (let i = 1; i < certainties.length; i++) {
    probability = probability + certainties[i] * (1 - probability);
  }

  return probability;
};
