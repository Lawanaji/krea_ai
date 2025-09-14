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
        // layout
        "group flex w-full items-start justify-between rounded-xl p-3 text-left shadow-sm border border-transparent",
        // light theme
        "bg-white hover:border-gray-300",
        // dark theme
        "dark:bg-[#202020] dark:hover:border-gray-600",
        // animation
        "transition-colors"
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
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            {badge && (
              <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-medium text-white">
                {badge}
              </span>
            )}
          </div>

          <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">
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

// Memoize to avoid unnecessary re-renders when props don’t change
export default React.memo(FeatureCardBase);
