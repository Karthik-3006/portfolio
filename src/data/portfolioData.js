export const assetPaths = {
  experiment4Docx: '/assets/experiments/exp4.docx',
  experiment5Docx: '/assets/experiments/exp5.docx',
  experiment4Html: '/assets/experiments/exp4.html',
  experiment5Html: '/assets/experiments/exp5.html',
};

export const studentProfile = {
  name: 'G.Charan Theja',
  initials: 'GCT',
  rollNo: '24102A030071',
  section: 'DS-2',
  subjectTitle: 'Data Science Laboratory',
  subjectCode: '22DS102006',
  professorName: 'Bosubabu Garu',
  collegeName: 'Mohan Babu University, Tirupati',
  githubUrl: 'https://github.com/thejacharan663-star',
  linkedinUrl: 'https://www.linkedin.com/in/charan-theja-8a220b37b/?isSelfProfile=true',
  shortBio:
    "Hi! I'm G.Charan Theja, a Data Science undergraduate (Section DS-2) at Mohan Babu University, Tirupati. This portfolio presents my practical lab work in Data Wrangling and Data Visualization using Python, guided by Prof. Bosubabu Garu.",
};

export const studentDetails = [
  {
    label: 'Name',
    value: 'G.Charan Theja',
    iconName: 'UserCheck',
  },
  {
    label: 'Roll Number',
    value: '24102A030071',
    iconName: 'Hash',
  },
  {
    label: 'Section',
    value: 'DS-2',
    iconName: 'Layers',
  },
  {
    label: 'Professor Name',
    value: 'Bosubabu Garu',
    iconName: 'GraduationCap',
  },
  {
    label: 'College Name',
    value: 'Mohan Babu University, Tirupati',
    iconName: 'Building2',
  },
  {
    label: 'Subject & Code',
    value: 'Data Science Laboratory (22DS102006)',
    iconName: 'BookOpen',
  },
];

export const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'Modules', to: '/modules', end: false },
  { label: 'Experiments', to: '/experiments', end: false },
  { label: 'Tools', to: '/tools', end: false },
  { label: 'About', to: '/about', end: false },
];

export const labDirectoryCards = [
  {
    title: 'Modules',
    description: 'Core concepts and topics covered in the lab.',
    route: '/modules',
    iconName: 'BookOpen',
  },
  {
    title: 'Experiments',
    description: 'Hands-on Python lab programs and outputs.',
    route: '/experiments',
    iconName: 'FlaskConical',
  },
  {
    title: 'Tools',
    description: 'Libraries, notebooks, and datasets we use.',
    route: '/tools',
    iconName: 'Wrench',
  },
  {
    title: 'About',
    description: 'My academic profile and lab overview.',
    route: '/about',
    iconName: 'User',
  },
];

export const modulesList = [
  {
    number: '01',
    title: 'Data Wrangling',
    description:
      'Work with hierarchical data, reshape tables, and combine DataFrames using the techniques in Experiment 4.',
    topics: [
      'Hierarchical indexing',
      'Partial indexing',
      'Stack and unstack',
      'Merge DataFrames by index',
      'combine_first',
    ],
    experimentRoute: '/experiments/4',
    iconName: 'Database',
  },
  {
    number: '02',
    title: 'Data Visualization',
    description:
      'Explore the Matplotlib and Seaborn plot types documented in Experiment 5.',
    topics: [
      'Matplotlib and Seaborn',
      'Line and bar plots',
      'Grouped and stacked bars',
      'Histogram and density plot',
      'Scatter and box plots',
    ],
    experimentRoute: '/experiments/5',
    iconName: 'BarChart3',
  },
];

export const experimentsList = [
  {
    id: 4,
    title: 'Data Wrangling',
    description:
      'Hierarchical indexing, partial selection, stack and unstack, index-based merging, and combine_first.',
    sourceFile: 'exp4.docx',
    downloadUrl: assetPaths.experiment4Docx,
    htmlSource: assetPaths.experiment4Html,
    route: '/experiments/4',
    iconName: 'TableProperties',
  },
  {
    id: 5,
    title: 'Data Visualization with Matplotlib and Seaborn',
    description:
      'Process an online Iris dataset and explore the plotting examples and topics from the lab document.',
    sourceFile: 'exp5.docx',
    downloadUrl: assetPaths.experiment5Docx,
    htmlSource: assetPaths.experiment5Html,
    route: '/experiments/5',
    iconName: 'LineChart',
  },
];

export const toolsList = [
  {
    name: 'Python 3.x',
    description: 'The programming language used to write the lab programs.',
    website: 'https://www.python.org/',
    iconName: 'Terminal',
  },
  {
    name: 'Pandas',
    description: 'Series, DataFrames, online CSV loading, and data manipulation.',
    website: 'https://pandas.pydata.org/',
    iconName: 'TableProperties',
  },
  {
    name: 'NumPy',
    description: 'Numerical arrays and data used in the Data Wrangling material.',
    website: 'https://numpy.org/',
    iconName: 'Cpu',
  },
  {
    name: 'Matplotlib',
    description: 'Line plots, bar charts, annotations, axes, and plot output.',
    website: 'https://matplotlib.org/',
    iconName: 'BarChart3',
  },
  {
    name: 'Seaborn',
    description: 'Statistical scatter, histogram, density, box, and pair plots.',
    website: 'https://seaborn.pydata.org/',
    iconName: 'LineChart',
  },
  {
    name: 'Jupyter Notebook',
    description: 'A notebook environment listed in the experiment requirements.',
    website: 'https://jupyter.org/',
    iconName: 'BookOpen',
  },
  {
    name: 'Google Colab',
    description: 'A hosted notebook option listed in the experiment requirements.',
    website: 'https://colab.research.google.com/',
    iconName: 'Cloud',
  },
  {
    name: 'Python IDE',
    description: 'An IDE is listed as an environment for running the programs.',
    iconName: 'Code2',
  },
  {
    name: 'Iris online CSV',
    description:
      'The seaborn-data Iris CSV used in the online dataset visualization example.',
    website: 'https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv',
    iconName: 'Database',
  },
];
