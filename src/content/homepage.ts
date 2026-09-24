import spaceWeatherImg from '@/assets/images/space_weather.webp';
import earthImg from '@/assets/images/Earth.webp';
import roverImg from '@/assets/images/rover.webp';
import classroomImg from '@/assets/images/classroom.webp';
import cosmosImg from '@/assets/images/cosmos.webp';
import backgroundImg from '@/assets/images/background.webp';

export const HERO_CONTENT = {
  eyebrow: 'Heliophysics & Space Intelligence',
  titleLine1: 'From Sun to Earth.',
  titleLine2: 'Protecting Critical Systems Through Space Science.',
  description:
    'SpaceProbe is a DPIIT-recognized, University of Mumbai-incubated deep-tech enterprise translating solar transients, space weather, and satellite analytics into mission-critical operational intelligence.',
  primaryCta: {
    label: 'Explore Solutions',
    href: '#solutions',
  },
  secondaryCta: {
    label: 'Connect With Us',
    href: '#connect',
  },
  badges: [
    'Space Weather Intelligence',
    'Geospatial Analytics',
    'Space Technology',
    'STEM & Workforce',
  ],
};

export const WHO_WE_ARE = {
  sectionNumber: '01',
  tag: 'WHO WE ARE',
  heading: 'Pioneering Heliophysics & Real-World Space Intelligence',
  lead: 'Bridging the critical gap between space physics research and operational infrastructure protection.',
  paragraphs: [
    'Founded by heliophysics scientists, SpaceProbe translates complex Sun–Earth dynamics into operational intelligence. We understand how solar transients propagate through interplanetary space to affect technologies on Earth.',
    'From solar flares and coronal mass ejections to geomagnetic storms, we transform peer-reviewed space physics into actionable resilience for modern infrastructure.',
  ],
};

export const WHAT_WE_OFFER = {
  sectionNumber: '02',
  tag: 'WHAT WE OFFER',
  heading: 'One Sky. Four Ways We Help You Understand It.',
  description:
    'From the Sun to near-Earth space and the ground beneath our feet, SpaceProbe delivers science-driven intelligence across four connected domains.',
  domains: [
    {
      id: 'space-weather',
      title: 'Space Weather Intelligence',
      shortTag: 'Solar & Geomagnetic Risk',
      description:
        'Real-time monitoring and predictive risk analytics for solar wind disturbances, geomagnetic storms, radiation hazards for aviation, and thermospheric drag on satellites.',
      image: spaceWeatherImg,
      href: '#platform',
    },
    {
      id: 'geospatial',
      title: 'Geospatial Analytics',
      shortTag: 'Earth Observation & GIS',
      description:
        'Satellite imagery, remote sensing, and GIS-based analytics for infrastructure mapping, disaster mitigation, water resource monitoring, and environmental change detection.',
      image: earthImg,
      href: '#platform',
    },
    {
      id: 'space-tech',
      title: 'Space Technology & Innovation',
      shortTag: 'CubeSats & Payloads',
      description:
        'Indigenous capabilities in nanosatellite subsystems, scientific payloads, and precision instrumentation supporting commercial and national space programs.',
      image: roverImg,
      href: '#platform',
    },
    {
      id: 'education',
      title: 'Education & Workforce Development',
      shortTag: 'STEM & Aerospace Training',
      description:
        'Academic training, hands-on student satellite programs, and STEM outreach to bridge the gap between classroom science and the expanding aerospace economy.',
      image: classroomImg,
      href: '#platform',
    },
  ],
};

export const WHY_IT_MATTERS = {
  sectionNumber: '03',
  tag: 'WHY IT MATTERS',
  heading: "The Sky Isn't Separate From Us Anymore",
  subheading: 'Space is increasingly connected to the systems we depend on on Earth.',
  narrative:
    'Solar disturbances and geomagnetic storms are no longer academic curiosities—they are operational risks to global security and economic continuity.',
  punchline: 'By understanding the sky, we protect the ground.',
  impactVectors: [
    {
      title: 'Power Grids',
      system: 'Power',
      description:
        'Geomagnetically Induced Currents (GIC) risk forecasting to prevent transformer damage and catastrophic grid blackouts.',
      icon: 'Zap',
    },
    {
      title: 'Satellites & Orbit',
      system: 'Satellites',
      description:
        'Atmospheric drag modeling and radiation hazard monitoring to safeguard orbital longevity and constellations.',
      icon: 'Satellite',
    },
    {
      title: 'Aviation & Polar Routes',
      system: 'Aviation',
      description:
        'Solar energetic particle dose monitoring and high-frequency communication blackout mitigation for polar flights.',
      icon: 'Plane',
    },
    {
      title: 'GNSS & Positioning',
      system: 'GNSS',
      description:
        'Ionospheric scintillation tracking to preserve centimeter-level precision for maritime, defense, and autonomous transport.',
      icon: 'Navigation',
    },
  ],
};

export const PLATFORM_SOLUTIONS = {
  sectionNumber: '04',
  tag: 'EXPLORE PLATFORM',
  heading: 'Architected for Mission-Critical Operations',
  description:
    'A unified ecosystem combining real-time space physics with scalable data architecture and analytical intelligence.',
  platforms: [
    {
      id: 'space-weather-platform',
      badge: 'Flagship Platform',
      badgeColor: 'cyan',
      title: 'Space Weather Monitoring Suite',
      description:
        'Live telemetry ingestion and storm forecasting engine tracking solar wind parameters, Kp index storm thresholds, and geomagnetically induced currents.',
      features: [
        'Real-time solar wind & IMF monitoring',
        'NOAA-scale geomagnetic storm alerting',
        'Aviation radiation exposure indexing',
        'Satellite orbital drag modeling',
      ],
      status: 'In Active Development',
      linkText: 'Learn More & Request Access',
      href: '#connect',
    },
    {
      id: 'geospatial-platform',
      badge: 'Earth Intelligence',
      badgeColor: 'blue',
      title: 'Geospatial Analytics Engine',
      description:
        'Multi-spectral satellite processing and GIS mapping algorithms for critical infrastructure planning, environmental surveillance, and disaster response.',
      features: [
        'High-resolution satellite image processing',
        'Hydrological & flood risk modeling',
        'Urban growth & land use classification',
        'Rapid post-disaster assessment',
      ],
      status: 'Enterprise Solutions',
      linkText: 'Inquire for GIS Services',
      href: '#connect',
    },
    {
      id: 'space-tech-platform',
      badge: 'Aerospace Engineering',
      badgeColor: 'teal',
      title: 'CubeSat & Payload Systems',
      description:
        'End-to-end mission architecture for nanosatellites, custom scientific instrumentation, magnetic sensor payloads, and space-grade power telemetry.',
      features: [
        'Miniaturized fluxgate magnetometers',
        'CubeSat bus subsystems & power distribution',
        'Payload thermal & vacuum testing',
        'Flight software & ground station telemetry',
      ],
      status: 'Hardware Capabilities',
      linkText: 'Explore Engineering Partnerships',
      href: '#connect',
    },
    {
      id: 'education-platform',
      badge: 'Academic & Outreach',
      badgeColor: 'purple',
      title: 'STEM & Workforce Academy',
      description:
        'Comprehensive space science programs, university workshops, and hands-on payload design labs developing skilled aerospace engineers.',
      features: [
        'University-level heliophysics workshops',
        'Hands-on CubeSat simulation kits',
        'Peer-reviewed research mentoring',
        'Public astronomy & science exhibitions',
      ],
      status: 'Community Programs',
      linkText: 'Collaborate on STEM Outreach',
      href: '#connect',
    },
  ],
};

export const TAGLINE = {
  text: 'Where curiosity meets learning,\nideas meet innovation,\nand creativity meets technology.',
};

export const GALLERY_IMAGES = [
  {
    src: spaceWeatherImg,
    alt: 'Space Weather Monitoring & Solar Research',
    category: 'Research',
    span: 'sm:col-span-12 md:col-span-5 md:row-span-2',
  },
  {
    src: earthImg,
    alt: 'Geospatial Earth Observation & Remote Sensing',
    category: 'Analytics',
    span: 'sm:col-span-6 md:col-span-7',
  },
  {
    src: cosmosImg,
    alt: 'Deep Space & Heliophysics Exploration',
    category: 'Science',
    span: 'sm:col-span-6 md:col-span-7',
  },
  {
    src: classroomImg,
    alt: 'Aerospace STEM Education & Academic Outreach',
    category: 'Education',
    span: 'sm:col-span-7 md:col-span-8',
  },
  {
    src: backgroundImg,
    alt: 'Instrumentation & Hardware Innovation',
    category: 'Hardware',
    span: 'sm:col-span-5 md:col-span-4',
  },
];

export const CONNECT_CONTENT = {
  sectionNumber: '06',
  tag: 'CONNECT',
  heading: 'Ready to Integrate Space Intelligence?',
  subtitle:
    'Whether safeguarding mission-critical assets, consulting on geospatial solutions, or advancing academic research, our team is ready to collaborate.',
  contacts: [
    {
      label: 'Direct Email',
      value: 'director@spaceprobe.in',
      href: 'mailto:director@spaceprobe.in?subject=SpaceProbe%20Inquiry%20from%20Website',
      description: 'Direct communication for institutional and commercial inquiries.',
    },
    {
      label: 'Headquarters & Incubation',
      value: 'Borivali, Mumbai, India',
      href: '#',
      description: 'University of Mumbai Incubation Centre & DPIIT Deep-Tech Facility.',
    },
    {
      label: 'Academic & B2B Solutions',
      value: 'Open for Collaboration',
      href: 'mailto:director@spaceprobe.in?subject=Collaboration%20Inquiry',
      description: 'Joint research, satellite mission payloads, and customized telemetry.',
    },
  ],
};
