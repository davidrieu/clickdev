'use client';

import SectionTitle from '@/components/section-title';
import { BotIcon, BrainIcon, ZapIcon, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const featuresData: Feature[] = [
  {
    icon: BotIcon,
    title: 'Autonomous Agents',
    description: 'Agents that plan, execute & think step-by-step.',
  },
  {
    icon: BrainIcon,
    title: 'Memory & Learning',
    description: 'Agents retain memory and improve over time.',
  },
  {
    icon: ZapIcon,
    title: 'Real-time Execution',
    description: 'Fast responses with async task processing.',
  },
];

export default function Features() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="mt-32">
      <SectionTitle
        title="Agent features"
        description="Design AI assistants that research, plan, and execute tasks — all powered by your prompts."
      />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 px-6">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className="glass w-full max-w-80 space-y-4 rounded-xl p-6 hover:-translate-y-0.5"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: 'spring',
                stiffness: 320,
                damping: 70,
                mass: 1,
              }}
              onAnimationComplete={() => {
                const card = refs.current[index];
                if (card) {
                  card.classList.add('transition', 'duration-300');
                }
              }}
            >
              <Icon className="size-8.5" />
              <h3 className="text-base font-medium text-white">{feature.title}</h3>
              <p className="line-clamp-2 pb-2 text-gray-100">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
