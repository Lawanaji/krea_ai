"use client";

import React from "react";
import { cn } from "../../lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  color: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function FeatureCardBase({
  icon,
  title,
  description,
  badge,
  color,
  onClick,
}: FeatureCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open ${title}`}
      className={cn(
        // base layout
        "group flex w-full items-start justify-between rounded-xl p-3 text-left shadow-sm border border-transparent transition-colors",
        // use theme variables instead of fixed grays
        "bg-background text-foreground hover:border-gray-300 dark:hover:border-gray-600"
      )}
    >
      <div className="flex flex-1 gap-3">
        {/* Icon container with gradient background */}
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r",
            color
          )}
        >
          {icon}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            {badge && (
              <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-medium text-white">
                {badge}
              </span>
            )}
          </div>

          <p className="text-xs text-foreground/70 leading-snug">
            {description}
          </p>
        </div>
      </div>

      <span className="ml-3 text-xs font-medium text-blue-600 dark:text-blue-400">
        Open
      </span>
    </button>
  );
}

export default React.memo(FeatureCardBase);
