import { CommandOptionData } from "./CommandOptionData";

export interface NumberCommandOptionData extends CommandOptionData {
  minValue: number;
  maxValue: number;
}
