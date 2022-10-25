import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { inputType } from "../../features/leanCanvasForm/pages/lean-canvas-form/components/LeanCanvasQuestion";

interface LeanCanvasQuestion {
  fieldName:
    | "name"
    | "problem"
    | "customer"
    | "solution"
    | "uvp"
    | "revenue"
    | "channels"
    | "keyMetrics"
    | "costs"
    | "unfairAdvantage";
  title: string;
  description: string;
  inputType: inputType;
  modalComponent?: ReactJSXElement;
}

export const leanCanvasQuestions: LeanCanvasQuestion[] = [
  {
    fieldName: "name",
    title: "Name your idea",
    description:
      "If you haven't thought about a name yet, don't stress too much about it, you'll be able to edit this later. ",
    inputType: inputType.SINGLE,
  },
  {
    fieldName: "problem",
    title: "Define the problems that you want to solve",
    description:
      "You should define here one or more problems people have that you are willing to solve.",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "customer",
    title: "Define your customer segments & early adopters",
    description: `You should define more than 1 customer segments. Early adoptes are people that are in desperate need of your product.\n\nWho do you think is going to use your service?\n\nDo these people have specific job titles or roles?\n\nAre they working in specific industries?\n\nOr have particular demographics?
`,
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "solution",
    title: "Define your solution",
    description: "Solution...............",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "uvp",
    title: "Define your UVP & high-level concept",
    description:
      "UVP is the shorthand unique value proposition and represents............",
    inputType: inputType.MULTILINE,
    modalComponent: <div></div>,
  },
  {
    fieldName: "revenue",
    title: "Define your possible revenue streams",
    description:
      "Like direct sales, distribution in store chains, subscriptions ....",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "channels",
    title: "Define your communication channels.",
    description:
      "The methods you will use to reach your customers. Social media, google ads, fb ads, influencers .....",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "keyMetrics",
    title: "Define your key metrics.",
    description:
      "For most business ideas the main metric should be INCOME/REVENUE. Other possible key metrics: daily active users, rides, services sold.",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "costs",
    title: "Identify your costs",
    description:
      "Here you should list the costs that your business idea has like product development, salaries ........",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "unfairAdvantage",
    title: "Unfair advantage",
    description:
      "This is what makes you different from anyone willing to do the same, your non replicable competitive advantage. It's something that cannot be copied or bought. For example it might be a long time experience in the industry, credibility in a particular area or skill, access to a broad network or patents.",
    inputType: inputType.MULTILINE,
  },
];
