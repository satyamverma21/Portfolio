import civichubImg from '@/src/assets/civichub.png';
import enterpriceImg from '@/src/assets/enterprice.png';
import sqlchatbotImg from '@/src/assets/sqlchatbot.png';
import resumeImg from '@/src/assets/resume.png';
import florasenseImg from '@/src/assets/florasense.png';
import plantpalImg from '@/src/assets/plantpal.png';
import kedar from '@/src/assets/kedar.png'
import resume from '@/src/assets/resume.pdf'

export const NAME = 'Satyam Verma';

export const SOCIALS = [
  { label: 'Leetcode', href: 'https://leetcode.com/u/satyamverma2122004/' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/satyamverma21221' },
  { label: 'GitHub', href: 'https://github.com/satyamverma21' },
  { label: 'Email', href: 'mailto:satyamverma2122004@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/satyam-verma-linkdin' },
  { label: 'Resume', href: resume },
];

export const PROJECTS = [
  {
    title: 'CivicHub',
    category: 'Featured GitHub Project',
    description:
      'Community issue reporting app with an Expo React Native frontend, Express + SQLite backend, JWT auth, and local media uploads.',
    link: 'https://github.com/satyamverma21/CivicHub',
    isLarge: true,
    image: civichubImg,
  },
  {
    title: 'Kedarnath Stay Website',
    category: 'Angular + Node',
    description:
      'A full-stack Kedarnath stay booking website with an Angular frontend and a Node.js backend. Tech: Angular, JavaScript, Node.js.',
    link: 'https://github.com/satyamverma21/Kedarnath-stay-website',
    image: kedar,
  },
  {
    title: 'Enterprise RAG Knowledge Base Assistant',
    category: 'AI + Retrieval',
    description:
      'A portfolio-relevant AI system built around a frontend/backend split for enterprise knowledge retrieval and grounded responses.',
    link: 'https://github.com/satyamverma21/Enterprise-RAG-Knowledge-Base-Assistant',
    image: enterpriceImg,
  },
  {
    title: 'SQL Chatbot with LangChain and LLM Integration',
    category: 'AI + Data',
    description:
      'A natural-language interface for querying SQL databases with ChatGroq-powered SQL generation across SQLite and MySQL.',
    link: 'https://github.com/satyamverma21/SQL-Chatbot-demo',
    image: sqlchatbotImg,
  },
  {
    title: 'Resume Analyser RAG',
    category: 'Python + NLP',
    description:
      'Python-based resume analysis and retrieval workflow using RAG-style document processing.',
    link: 'https://github.com/satyamverma21/Resume_analyzer_RAG',
    image: resumeImg,
  },
  {
    title: 'FloraSense: Plant Solution',
    category: 'Flask App',
    description:
      'Plant species identification and disease detection app using Plant.id API, Flask, Tailwind CSS, and Render hosting.',
    link: 'https://github.com/satyamverma21/FloraSense',
    image: florasenseImg,
  },
  {
    title: 'Plant Pal',
    category: 'React Native',
    description:
      'React Native plant detection app with identification, market, and sell-plant flows.',
    link: 'https://github.com/satyamverma21/PlantPal',
    image: plantpalImg,
  },
];

export const TABS = ['All Work', 'AI Systems', 'Python', 'Web Apps'];
