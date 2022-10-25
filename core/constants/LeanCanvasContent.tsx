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
      "Each customer segment (CS) you are thinking to work with will have a set of problems that they need solving.\nIn this box try listing the one to three high priority problems that you CS has.\n\nWithout a problem to solve, you don’t have a product/service to offer.",
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
    description:
      "Finding a solution to the problem is the golden egg! You’re not going to get this right off the first bat — it’s OK, as that’s what Lean is all about.\n\nWhat you need to do is Get Out The Building — a phrase coined by the godfather of Lean Startup, Steve Blanks.\n\nAnd what Blank’s here is that the solution is not in your office, it’s out there in the streets. So go interview your customer segment, ask them questions, and take those learnings.\n\nRemember the Lean Startup is validated learning through a continual Build — Measure — Learn cycle.",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "uvp",
    title: "Define your UVP & high-level concept",
    description:
      "In the middle of the canvas is the UVP.\n\nA value proposition is a promise of value to be delivered. It’s the primary reason a prospect should buy from you.\n\nA way to get your head around this is to think why are you different and why should your CS buy/invest time in you.\n\nFor further reading click on the info button.",
    inputType: inputType.MULTILINE,
    modalComponent: <div></div>,
  },
  {
    fieldName: "revenue",
    title: "Define your possible revenue streams",
    description:
      "How you price your business will depend on the type of model it is, however, it’s quite common for startups to lower their cost, even offer it for free to gain traction.\n\nHowever, this can pose a few problems. The key being it actually delays/avoids validation. Getting people to sign up for something for free is a lot different than asking them to pay. There is also the idea of perceived value.",
    inputType: inputType.MULTILINE,
  },
  {
    fieldName: "channels",
    title: "Define your communication channels.",
    description:
      "Channels are ways for you to reach your CS (customer segments).\n\nAnd remember that in the initial stages, it’s important not to think about scale but to focus on learning. With that in mind, try to think about which channels will give you enough access to your CS at the same time give you enough learning.\n\nChannels can be email, social, CPC ads, blogs, articles, trade shows, radio & TV, webinars etc.\n\nBTW, you don’t have to be on all of them, just where your CS are.",
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
      "Here you should list all the operational costs for taking this business to market.\n\nHow much will it cost to build / landing page? What is your burn rate — your total monthly running costs?\nHow much will it cost to interview your customer segment?\nHow much do market research papers cost? etc.\n\nYou can then use these costs and potential revenue streams to calculate a rough break-even point.",
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
