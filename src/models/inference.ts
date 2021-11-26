import { Personality } from './personality';

export interface Inferred {
  personality: Personality;
  probability: number;
}

export interface ExpertCertaintyFactor {
  characteristic_id: string;
  mb: number;
  md: number;
}

export interface UserCertaintyFactor {
  characteristic_id: string;
  weight: number;
}

export interface Rule {
  id: string;
  personality_id: string;
  characteristics: Array<ExpertCertaintyFactor>;
}

export interface Input {
  personality_id: string;
  characteristics: Array<UserCertaintyFactor>;
}

export interface RadioInput {
  radioValue: string;
}
