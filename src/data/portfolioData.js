export const assetPaths = {
  experiment1Docx: '/assets/experiments/exp1.docx',
  experiment2Docx: '/assets/experiments/exp2.docx',
  experiment6Docx: '/assets/experiments/exp6.docx',
  experiment7Docx: '/assets/experiments/exp7.docx',
  experiment1Html: '/assets/experiments/exp4.html',
  experiment2Html: '/assets/experiments/exp5.html',
  experiment6Html: '/assets/experiments/exp6.html',
  experiment7Html: '/assets/experiments/exp7.html',
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
    "Hi! I'm G.Charan Theja, a Data Science undergraduate (Section DS-2) at Mohan Babu University, Tirupati. This portfolio presents my practical lab work in Data Wrangling, Data Visualization, Time Series Analysis, and Data Aggregation using Python, guided by Prof. Bosubabu Garu.",
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
    id: 1,
    number: '01',
    title: 'Types of Data Analysis',
    subtitle: '30-Page Academic Module · Data Science & Analytics',
    description:
      'A structured learning module covering the major analytical approaches used to understand, explain, predict, and support decisions from data.',
    topics: [
      'Descriptive, Diagnostic & Exploratory Analysis',
      'Inferential, Predictive & Prescriptive Methods',
      'Univariate, Bivariate & Multivariate Analysis',
      'Time-Series, Correlation & Regression Analysis',
      'Classification, Clustering & Root-Cause Techniques',
    ],
    route: '/modules/1',
    experimentRoute: '/experiments/1',
    htmlSource: '/assets/modules/module1.html',
    iconName: 'Database',
  },
  {
    id: 2,
    number: '02',
    title: 'Extracting Meaning from Data',
    subtitle: '30-Page Academic Module · Data Science & Analytics',
    description:
      'A comprehensive study module covering data interpretation, context, data quality, descriptive statistics, visualization, patterns, and decision-making.',
    topics: [
      'Data, Information, Knowledge and Insight hierarchy',
      'Context, Domain Understanding & Data Quality',
      'Finding Trends, Seasonality, Cycles & Relationships',
      'Visualization Discipline & Avoiding Misleading Charts',
      'Ethical Interpretation, Causal Thinking & Actionable Decisions',
    ],
    route: '/modules/2',
    experimentRoute: '/experiments/2',
    htmlSource: '/assets/modules/module2.html',
    iconName: 'LineChart',
  },
  {
    id: 3,
    number: '03',
    title: 'Feature Selection and Decision Tree Foundations',
    subtitle: '30-Page Academic Module · Machine Learning',
    description:
      'Understand how to identify useful predictors, eliminate redundancy, avoid data leakage, and build interpretable decision-tree models that generalize reliably.',
    topics: [
      'Filter, Wrapper & Embedded Feature Selection Methods',
      'Correlation, Redundancy, Multicollinearity & Mutual Information',
      'Target Leakage & Preprocessing Data Leakage Prevention',
      'Decision Tree Splitting Logic (Gini Impurity & Entropy)',
      'Tree Complexity, Pruning Rules & Human-Readable Decision Rules',
    ],
    route: '/modules/3',
    experimentRoute: '/experiments/4',
    htmlSource: '/assets/modules/module3.html',
    iconName: 'TableProperties',
  },
  {
    id: 4,
    number: '04',
    title: 'Ensemble Learning',
    subtitle: '30-Page Academic Module · Machine Learning',
    description:
      'Understand how combining multiple learners improves predictive performance, stability, and robustness through bagging, boosting, and meta-learning.',
    topics: [
      'Bias-Variance Trade-off & the Ensemble Advantage',
      'Bagging, Bootstrap Sampling & Out-of-Bag (OOB) Evaluation',
      'Random Forests & Random Feature Selection',
      'AdaBoost, Gradient Boosting, XGBoost & LightGBM',
      'Voting Ensembles, Stacking & Meta-Learning Architecture',
    ],
    route: '/modules/4',
    experimentRoute: '/experiments/6',
    htmlSource: '/assets/modules/module4.html',
    iconName: 'Layers',
  },
  {
    id: 5,
    number: '05',
    title: 'Dimensionality Reduction',
    subtitle: '30-Page Academic Module · Machine Learning',
    description:
      'A detailed academic explanation of why high-dimensional data is difficult to analyze, how dimensionality reduction works, major linear and nonlinear methods, and evaluation.',
    topics: [
      'Curse of Dimensionality, Sparsity & Distance Concentration',
      'Feature Scaling, Standardization & Preprocessing Discipline',
      'Principal Component Analysis (PCA) & SVD Matrix Factorization',
      'Supervised Reduction (LDA) vs Unsupervised Variance (PCA)',
      'Nonlinear Manifolds: Kernel PCA, t-SNE, UMAP & Autoencoders',
    ],
    route: '/modules/5',
    experimentRoute: '/experiments/7',
    htmlSource: '/assets/modules/module5.html',
    iconName: 'BarChart3',
  },
];

export const experimentsList = [
  {
    id: 1,
    title: 'Data Wrangling',
    description:
      'Hierarchical indexing, partial selection, stack and unstack, index-based merging, and combine_first.',
    sourceFile: 'exp1.docx',
    downloadUrl: assetPaths.experiment1Docx,
    htmlSource: assetPaths.experiment1Html,
    route: '/experiments/1',
    iconName: 'TableProperties',
    isEmpty: false,
  },
  {
    id: 2,
    title: 'Data Visualization with Matplotlib and Seaborn',
    description:
      'Process an online Iris dataset and explore the plotting examples and topics from the lab document.',
    sourceFile: 'exp2.docx',
    downloadUrl: assetPaths.experiment2Docx,
    htmlSource: assetPaths.experiment2Html,
    route: '/experiments/2',
    iconName: 'LineChart',
    isEmpty: false,
  },
  {
    id: 3,
    title: 'Experiment 03',
    description:
      'Laboratory session slot 03. No documentation or programs uploaded yet.',
    route: '/experiments/3',
    iconName: 'FlaskConical',
    isEmpty: true,
  },
  {
    id: 4,
    title: 'Experiment 04',
    description:
      'Laboratory session slot 04. No documentation or programs uploaded yet.',
    route: '/experiments/4',
    iconName: 'FlaskConical',
    isEmpty: true,
  },
  {
    id: 5,
    title: 'Experiment 05',
    description:
      'Laboratory session slot 05. No documentation or programs uploaded yet.',
    route: '/experiments/5',
    iconName: 'FlaskConical',
    isEmpty: true,
  },
  {
    id: 6,
    title: 'Time Series Analysis',
    description:
      'Create time series using datetime objects, date_range, time zone conversion, period arithmetic, frequency conversion, and resampling.',
    sourceFile: 'exp6.docx',
    downloadUrl: assetPaths.experiment6Docx,
    htmlSource: assetPaths.experiment6Html,
    route: '/experiments/6',
    iconName: 'LineChart',
    isEmpty: false,
  },
  {
    id: 7,
    title: 'Data Aggregation',
    description:
      'Group tabular data with groupby on single and multiple keys, compute summary statistics with aggregate, and perform EDA on Iris dataset.',
    sourceFile: 'exp7.docx',
    downloadUrl: assetPaths.experiment7Docx,
    htmlSource: assetPaths.experiment7Html,
    route: '/experiments/7',
    iconName: 'Database',
    isEmpty: false,
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
