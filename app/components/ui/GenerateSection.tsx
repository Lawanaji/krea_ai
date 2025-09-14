/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Image, Mic, Wand, Edit, Move, Film, Bot } from "lucide-react";
import FeatureCard from "./FeatureCard";

// Use theme-neutral icon color so it inherits from text-foreground
const iconClass = "h-5 w-5 text-foreground";

const features = [
  {
    icon: <Image className={iconClass} />,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    badge: "New",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Film className={iconClass} />,
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Lumia, and more.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Mic className={iconClass} />,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: <Wand className={iconClass} />,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    badge: "New",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: <Edit className={iconClass} />,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    badge: "New",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: <Move className={iconClass} />,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    badge: "New",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Move className={iconClass} />,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    badge: "New",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <Bot className={iconClass} />,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    color: "from-orange-400 to-amber-500",
  },
];

export default function GenerateSection() {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-xl font-bold text-foreground">Generate</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((f, i) => (
          <FeatureCard
            key={i}
            icon={f.icon}
            title={f.title}
            description={f.description}
            badge={f.badge}
            color={f.color}
            onClick={() => console.log(`${f.title} clicked`)}
          />
        ))}
      </div>
    </section>
  );
}
