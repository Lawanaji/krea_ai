"use client";

import { Image, Mic, Wand, Edit, Move, Film, Bot } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <Image className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    badge: "New",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Film className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Lumia, and more.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Mic className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: <Wand className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    badge: "New",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: <Edit className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    badge: "New",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: <Move className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    badge: "New",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Move className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    badge: "New",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <Bot className="h-5 w-5 text-gray-700 dark:text-gray-200" />,
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    color: "from-orange-400 to-amber-500",
  },
];

export default function GenerateSection() {
  return (
    <section className=" py-8">
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">
        Generate
      </h2>
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
