import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/gormek-lazim.png',
    title: 'Görmek Lazım',
    description:
      'An e-commerce platform that focuses on user experience and includes many different services.',
    technologies: ['NodeJS', 'TypeScript', 'MongoDb'],
    links: {
      preview: 'https://gormeklazim.com',
      github: '',
    },
  },
  {
    image: '/projects/bros.png',
    title: 'Brosmen',
    description:
      'A project that allows clients to easily book online appointments with hairdressers.',
    technologies: ['NestJS', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'https://brosmen.com.tr',
      github: '',
    },
  },
  {
    image: '/projects/amplify.png',
    title: 'Basic Amplify App With React',
    description: 'Basic Amplify app with ReactJS and AWS Amplify.',
    technologies: ['React', 'TypeScript', 'AWS Amplify'],
    links: {
      preview: 'https://aws-amplify-react.vercel.app/',
      github: 'https://github.com/AhmetMel1/aws-amplify-react',
    },
  },

  {
    image: '/projects/npm.png',
    title: 'OKX API Connect',
    description:
      'Npm package that provides an efficient way to interact with OKX API endpoints.',
    technologies: ['NodeJS', 'TypeScript'],
    links: {
      preview: 'https://www.npmjs.com/package/okx-api-connect',
      github: 'https://github.com/AhmetMel1/okx-api-connect',
    },
  },
  {
    image: '/projects/npm.png',
    title: 'NetGSM SMS Service',
    description: 'Npm package for sending SMS messages using NetGSM API.',
    technologies: ['NodeJS', 'TypeScript'],
    links: {
      preview: 'https://www.npmjs.com/package/netgsm-sms-sender',
      github: 'https://github.com/AhmetMel1/netgsm-sms-sender',
    },
  },
  {
    image: '/projects/npm.png',
    title: 'Email Sender',
    description: 'Npm package for sending email with html using nodemailer.',
    technologies: ['NodeJS', 'TypeScript'],
    links: {
      preview: 'https://www.npmjs.com/package/html-mail-sender',
      github: 'https://github.com/AhmetMel1/html-mail-sender',
    },
  },
  {
    image: '/projects/artiCareerLogo.png',
    title: 'Arti Career',
    description:
      'A project that provides AI-powered university and career counseling.',
    technologies: ['NestJS', 'TypeScript', 'MongoDb', 'ChatGPT'],
    links: {
      preview: 'https://articareer.com',
      github: '',
    },
    disabled: true,
    reason:
      'This project was developed during my time at a previous company, and it has been taken offline by the company. Due to legal reasons, the source code and content cannot be shared. You can view the former link of the project here',
  },
  {
    image: '/projects/balanceLogo.png',
    title: 'Exchange',
    description:
      'Cryptocurrency exchange platform with a focus on user experience.',
    technologies: ['Spring Boot', 'ReactJS', 'PostgreSQL', 'Redis', 'MongoDb'],
    links: {
      preview: 'https://www.balancenetwork.io',
      github: '',
    },
    disabled: true,
    reason:
      'This project was developed during my time at a previous company, and it has been taken offline by the company. Due to legal reasons, the source code and content cannot be shared. You can view the former link of the project here',
  },
  {
    image: '/projects/balanceLogo.png',
    title: 'IDO Launchpad',
    description:
      'Initial DEX Offering platform for new cryptocurrency projects.',
    technologies: ['NestJS', 'ReactJS', 'TypeScript', 'Ethers', 'MongoDb'],
    links: {
      preview: 'https://ido.balancenetwork.io',
      github: '',
    },
    disabled: true,
    reason:
      'This project was developed during my time at a previous company, and it has been taken offline by the company. Due to legal reasons, the source code and content cannot be shared. You can view the former link of the project here',
  },
  {
    image: '/projects/balanceLogo.png',
    title: 'NFT Marketplace',
    description:
      'NFT marketplace for digital art, collectibles, and virtual real estate.',
    technologies: ['NodeJS', 'NextJs', 'TypeScript', 'Ethers', 'MongoDb'],
    links: {
      preview: 'https://nft.balancenetwork.io',
      github: '',
    },
    disabled: true,
    reason:
      'This project was developed during my time at a previous company, and it has been taken offline by the company. Due to legal reasons, the source code and content cannot be shared. You can view the former link of the project here',
  },
] as const;

export const experiencesData = [
  {
    title: 'Balance Network',
    location: 'Şişli/İstanbul',
    description: 'Backend Developer',
    date: '2023 March - 2025 February',
  },
  {
    title: 'Görmek Lazım',
    location: 'Şişli/İstanbul',
    description: 'Backend Developer',
    date: '2025 March - Present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.springboot className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.java className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.csharp className="size-12" /> },
  { icon: <Icons.aspnet className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.redis className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
