import { CommandOptionData } from "./CommandOptionData";

export interface StringCommandOptionData extends CommandOptionData {
  minLength: number;
  maxLength: number;
}
