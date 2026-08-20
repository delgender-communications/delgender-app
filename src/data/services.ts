import type { IconType } from "react-icons";
import {
  FiTarget,
  FiCompass,
  FiMic,
  FiEdit3,
  FiShield,
  FiUsers,
} from "react-icons/fi";

export type Service = {
  icon: IconType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: FiTarget,
    title: "Brand Identity & Positioning",
    description:
      "We clarify who you are and how you show up, building a brand identity that's consistent, credible, and hard to confuse with anyone else.",
  },
  {
    icon: FiCompass,
    title: "Strategic Communications",
    description:
      "From messaging frameworks to full communication plans, we build the strategy that turns your goals into a clear plan of action.",
  },
  {
    icon: FiMic,
    title: "Public Relations & Media",
    description:
      "We manage your public image, secure media coverage, and prepare you for every conversation that matters.",
  },
  {
    icon: FiEdit3,
    title: "Content & Social Media",
    description:
      "Consistent, on-brand content across every platform, planned and produced to keep your audience engaged.",
  },
  {
    icon: FiShield,
    title: "Crisis Communications",
    description:
      "When something goes wrong, we help you respond fast, protect your reputation, and communicate with confidence.",
  },
  {
    icon: FiUsers,
    title: "Corporate Training & Workshops",
    description:
      "We equip your team with the communication skills to represent your brand consistently, from the boardroom to the front line.",
  },
];

export default services;
