import spaceWeatherImg from '@/assets/images/space_weather.jpg';
import earthImg from '@/assets/images/Earth.jpg';
import roverImg from '@/assets/images/rover.png';
import classroomImg from '@/assets/images/classroom.jpg';

export const WHO_WE_ARE = {
  sectionNumber: '01',
  heading: 'WHO WE ARE',
  paragraphs: [
    'For years, we have studied the complex relationship between the Sun and Earth, from solar transients, like solar flares, coronal mass ejections, solar energetic particles and corotating interaction regions to geomagnetic storms and the cascading effects of space weather on modern infrastructure. What began as scientific inquiry revealed a far more urgent reality: these phenomena are not just academic subjects; they are operational risks to power grids, satellites, navigation systems, aviation, and critical infrastructure worldwide.',
    'That realization led to SpaceProbe.',
    'SpaceProbe is a DPIIT-recognized, University of Mumbai-incubated deep-tech company founded by scientists with decades of expertise in heliophysics and space-weather research. Our work spans space weather intelligence, geospatial analytics, space technology development, and STEM education.',
    'Every solution we build is grounded in peer-reviewed research, validated data, and scientific precision, turning space intelligence into real-world impact.',
  ],
};

export const WHAT_WE_OFFER = {
  sectionNumber: '02',
  heading: 'WHAT WE OFFER',
  subheading: 'One Sky. Four Ways We Help You Understand It.',
  description:
    'From the Sun to near-Earth space and the ground beneath our feet, SpaceProbe delivers science-driven intelligence across four connected domains.',
  domains: [
    {
      id: 'space-weather',
      title: 'Space Weather Intelligence',
      description:
        'Solar eruptions, including solar flares, coronal mass ejections (CMEs), and high-speed solar wind streams, drive disturbances in near-Earth space that can impact power grids, satellite operations, aviation, and GNSS systems.\n\nSpaceProbe provides real-time monitoring of solar wind, interplanetary, and geomagnetic conditions through live dashboards and analytics.\n\nOur solutions include radiation exposure assessment for aviation, geomagnetically induced current (GIC) risk mapping for utilities, thermospheric drag forecasting for satellite operators, and space-debris environment awareness for orbital risk assessment.',
      image: spaceWeatherImg,
      href: '/solutions/space-weather',
    },
    {
      id: 'geospatial',
      title: 'Geospatial Analytics',
      description:
        'Using satellite imagery, remote sensing, and GIS-based analysis, we provide actionable geospatial intelligence for infrastructure mapping, disaster risk assessment, water resource monitoring, environmental change detection, and land-use analysis, enabling data-driven planning and decision-making.',
      image: earthImg,
      href: '/solutions/geospatial',
    },
    {
      id: 'space-tech',
      title: 'Space Technology & Innovation',
      description:
        'We are building indigenous capabilities in nanosatellite and CubeSat systems, payload development, onboard electronics, and scientific instrumentation, aligned with India’s growing commercial space ecosystem and the national vision for self-reliant space technology.',
      image: roverImg,
      href: '/solutions/space-tech',
    },
    {
      id: 'education',
      title: 'Education & Workforce Development',
      description:
        'A growing space economy demands a skilled workforce. Through STEM programs, academic training, and professional development, we bridge the gap between space science education and industry-ready expertise, helping build the next generation of scientists, engineers, and innovators.',
      image: classroomImg,
      href: '/solutions/education',
    },
  ],
};

export const WHY_IT_MATTERS = {
  sectionNumber: '03',
  heading: 'WHY IT MATTERS',
  subheading: "The Sky Isn't Separate From Us Anymore",
  paragraphs: [
    'Every modern convenience, from the power grid that lights our homes to the navigation systems that guide our flights, relies on a delicate balance in near-Earth space.',
    'Space weather is no longer just a scientific curiosity; it is a critical variable in the equation of global security and economic stability.',
    'By understanding the sky, we protect the ground.',
  ],
};

export const TAGLINE = {
  text: 'Where curiosity meets learning,\nideas meet innovation,\nand creativity meets technology.',
};
