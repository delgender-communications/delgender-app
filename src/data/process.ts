export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const process: ProcessStep[] = [
  {
    number: "01",
    title: "Identify",
    description:
      "We start by identifying the real issue behind the noise, the gap between how you're perceived and how you want to be seen.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We build a tailored plan grounded in research, message clarity, and measurable goals for your brand.",
  },
  {
    number: "03",
    title: "Elevate",
    description:
      "We execute, measure, and refine, elevating your brand until the results speak for themselves.",
  },
];

export default process;
