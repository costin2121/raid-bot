import { ApplicationCommandOptionType } from "discord.js";
import { ChoiceData } from "./ChoiceData";

export type CommandOptionData = {
  name: string;
  description: string;
  required?: boolean;
  autocomplete?: boolean;
  choices?: ChoiceData[];
  type?: ApplicationCommandOptionType;
};
