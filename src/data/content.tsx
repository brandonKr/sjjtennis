import { FaRegFaceSmileWink, FaWandMagicSparkles } from 'react-icons/fa6';
import { LuClipboardList } from 'react-icons/lu';
import { TbSquareRoundedLetterB } from 'react-icons/tb';

import type { NavItemType } from '@/components/NavItem';
import aveda from '@/images/aveda.png';
import gymshark from '@/images/gymshark.png';
import jackalo from '@/images/jackalo.png';
import rettergut from '@/images/rettergut.png';
import zapier from '@/images/zapier.png';

export const NavLinks: NavItemType[] = [
  {
    id: 'ee4rt',
    name: 'HOME',
    href: '/',
  },
  {
    id: 'ggh67',
    name: 'FEATURES',
    href: '/',
  },
  {
    id: 'h678g',
    name: 'HOW IT WORKS',
    href: '/',
  },
  {
    id: 'h6g8g',
    name: 'PRODUCT',
    href: '/',
  },
];

export const headingSectionData = {
  title: 'BLOG POST REWRITE SOLUTIONS',
  heading: 'TRANSFORM YOUR BLOG POST WITH AI REWRITER',
  description:
    "Welcome to the heart of Rewriter.io, where we've carefully curated a set of features that redefine the way you approach content transformation.",
  stats: [
    {
      stat: '10M',
      description: 'Users in the World',
    },
    {
      stat: '20+',
      description: 'Partner Support',
    },
    {
      stat: '4.8',
      description: 'Products reviews',
    },
  ],
};

export const logos = [aveda, zapier, rettergut, jackalo, gymshark];

export const sectionManageData = {
  heading: 'REWRITE & MANAGE YOUR BLOG POST',
  title: 'SIMPLE REWRITE YOUR BLOG POST',
  description:
    'You can rewrite and manage your blog just one click. You need to connect audiences worldwide, manage blog, and create reader relationships.',
};

export const powerfulFeaturesData = {
  title: 'POWERFUL FEATURES',
  heading: 'EMPOWERING YOUR CONTENT REWRITER JOURNEY',
  description:
    'Rewriter.io redefine the way you approach content transformation, make your experience seamless, efficient, and, most importantly',
  features: [
    {
      title: 'AI-Powered Content Rewriting',
      icon: <FaWandMagicSparkles className="text-2xl" />,
      iconColor: 'bg-[#2ecc71]',
    },
    {
      title: 'Customizable Paraphrasing Options',
      icon: <LuClipboardList className="text-2xl" />,
      iconColor: 'bg-[#e74c3c]',
    },
    {
      title: 'Tone and Style Adjustment',
      icon: <FaRegFaceSmileWink className="text-2xl" />,
      iconColor: 'bg-[#ff6726]',
    },
    {
      title: 'Blog Post Plagiarism Checker',
      icon: <TbSquareRoundedLetterB className="text-2xl" />,
      iconColor: 'bg-[#472df3]',
    },
  ],
};

export const simpleStepsData = {
  heading: 'SIMPLE STEPS TO REWRITE YOUR BLOG POST',
  title: 'SIMPLE TO US WITH OUR PLATFORM',
  description:
    'At Rewriter.io, we believe that content transformation should be effortless and accessible to everyone. Our platform makes the process smooth and efficient',
  steps: [
    {
      title: 'CHOOSE YOUR INPUT',
      description:
        "For those who prefer to start from scratch, enter your topic or ideas as a prompt, and we'll generate content for you",
    },
    {
      title: 'AI MAGIC REWRITE',
      description:
        "Once you've provided your input, our advanced Al algorithms get to work. They analyze content, and identify key elements.",
    },
    {
      title: 'MULTIPLE OPTIONS',
      description:
        'Rewriter.io generates multiple rewritten versions of your content ensures you have a variety of options to choose from.',
    },
    {
      title: 'CUSTOMIZE TO PERFECTION',
      description:
        'You have the power to customize it further. Adjust the tone, style, and level of paraphrasing to match your preferences',
    },
    {
      title: 'PLAGIARISM CHECKER',
      description:
        "Our built-in plagiarism checker scans your content to guarantee that it's entirely unique and free from unintentional similarities.",
    },
    {
      title: 'DOWNLOAD AND PUBLISH',
      description:
        "With your content transformed and polished, you're ready to go. Download it to seamlessly publish it to your blog or website",
    },
  ],
};

export const mobileAppSection = {
  title: 'WITH NEW EXPERIENCE',
  heading: 'Available on Mobile App',
  description:
    'Access Rewrite.io on mobile app to get new experience. Rewrite.io organizes work so you and your teams are clear on what to do, when to do it, and how to get it done.',
  features: [
    {
      title: 'AI-Powered Content Rewriting',
      icon: <FaWandMagicSparkles className="text-2xl" />,
      iconColor: 'bg-[#2ecc71]',
      desc: 'Rewriter.io intelligently understands your content, providing you with rewritten versions that contextually accurate.',
    },
    {
      title: 'Customizable Paraphrasing',
      icon: <LuClipboardList className="text-2xl" />,
      iconColor: 'bg-[#e74c3c]',
      desc: 'Rewriter.io intelligently understands your content, providing you with rewritten versions that contextually accurate.',
    },
    {
      title: 'Tone and Style Adjustment',
      icon: <FaRegFaceSmileWink className="text-2xl" />,
      iconColor: 'bg-[#ff6726]',
      desc: 'Rewriter.io intelligently understands your content, providing you with rewritten versions that contextually accurate.',
    },
    {
      title: 'Blog Post Plagiarism Checker',
      icon: <TbSquareRoundedLetterB className="text-2xl" />,
      iconColor: 'bg-[#472df3]',
      desc: 'Rewriter.io intelligently understands your content, providing you with rewritten versions that contextually accurate.',
    },
  ],
};

export const joinAIData = {
  heading: 'JOIN THE AI CONTENT REVOLUTION.',
  title: 'GET STARTED NOW',
  description:
    'Paste in a blog post, use Al to rewrite it instantly. Or create a new one with your own prompt! Bulk upload links or prompts to generate hundreds of unique articles',
};

export const footerData = {
  description:
    'Make your blog experience seamless, efficient, and, most importantly, effective',
  links: [
    {
      title: 'COMPANY',
      links: NavLinks,
    },
    {
      title: 'HELP',
      links: [
        {
          id: 'ee4rt',
          name: 'CUSTOMER SUPPORT',
          href: '/',
        },
        {
          id: 'ggh67',
          name: 'DELIVERY DETAILS',
          href: '/',
        },
        {
          id: 'h678g',
          name: 'TERMS & CONDITIONS',
          href: '/',
        },
        {
          id: 'h6g8g',
          name: 'PRIVACY POLICY',
          href: '/',
        },
      ],
    },
  ],
};
