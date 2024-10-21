/* eslint-disable prefer-template */
import config from "../config";
// need to import all svgs
import DiamondBadge from "../assets/svgs/DiamondBadge";
import GoldBadge from "../assets/svgs/GoldBadge";
import InfluencerBadge from "../assets/svgs/InfluencerBadge";
import SilverBadge from "../assets/svgs/SilverBadge";
import StarterBadge from "../assets/svgs/StarterBadge";

export const GOOGLE_CLOUD_STORAGE_BASE_URL = config.gumletBaseUrl;

export const CLOUDINARY_BASE_URL =
  GOOGLE_CLOUD_STORAGE_BASE_URL + "/cloudinary";

export const AREA_SLUG = [      
  {
    area: "Dadar",
    slug: "dadar-mumbai",
  },
  {
    area: "Thane East",
    slug: "thane-east-mumbai",
  },
  {
    area: "Thane West",
    slug: "thane-west-mumbai",
  },
  {
    area: "Churchgate",
    slug: "churchgate-mumbai",
  },
  {
    area: "Navi Mumbai",
    slug: "navi-mumbai-mumbai",
  },
  {
    area: "Powai",
    slug: "powai-mumbai",
  },
  {
    area: "Bandra East",
    slug: "bandra-east-mumbai",
  },
  {
    area: "Bandra West",
    slug: "bandra-west-mumbai",
  },
  {
    area: "Malad",
    slug: "malad-west-mumbai",
  },
  {
    area: "Andheri East",
    slug: "andheri-east-mumbai",
  },
  {
    area: "Andheri West",
    slug: "andheri-west-mumbai",
  },
];


export const SiteMetaData = {
  title: `Apna.co: Hire Candidates | Post Job | Search Jobs Online`,
  ogTitle: `Hire In 48 hours. Fastest job posting, online recruitment portal, find a job in 1 day - apna.co`,
  description: `Apna is the biggest job groups platform in India. On Apna you can find all types of jobs from entry level to experienced people in over 70+ categories.`,
  ogDescription: `We provide jobs and candidates for telecalling, back office, accounts, receptionist, delivery, logistics, warehouse, loaders and packers, technicians, engineers, drivers, sales representatives, business development, admin, office boy, office assistant, computer operators, data entry operators, marketing, retail, security guards, trainers. With apna.co a Job seeker can search the best jobs throughout Mumbai & Delhi - NCR and schedule the Interview at their convenience. An employer can post the vacancy and get applications directly.`,
  author: `apna`,
  image: `${CLOUDINARY_BASE_URL}/meta-image.jpg`,
  imageFullPath: "https://apna.co/meta-image.jpg",
  url: "https://apna.co",
  siteUrl: "https://apna.co",
  name: "apna.co",
};

export const CLAP_LEVELS = [
  { level: "influencer", value: 15000 },
  { level: "diamond", value: 10000 },
  { level: "gold", value: 1000 },
  { level: "silver", value: 100 },
  { level: "starter", value: 0 },
];

export const CLAP_ICONS = {
  starter: <StarterBadge />,
  silver: <SilverBadge />,
  gold: <GoldBadge />,
  diamond: <DiamondBadge />,
  influencer: <InfluencerBadge />,
};

export const CLAP_COLORS = {
  starter: "#fff",
  silver: "#6A6A6A",
  gold: "#fc9f5b",
  diamond: "#2F68E3",
  influencer: "#FE5196",
};

export const GENDER_VALUES = {
  null: "Both",
  f: "Female",
  m: "Male",
};

export const MONTHS_SHORT_HAND = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const MONTHS_FULL_HAND = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const DEFAULT_NO_OF_ITEMS_PER_PAGE = 10;
export const DEFAULT_PAGE_NO = 1;

export const GROUP_MEMBER_FILTER = {
  Fresher: "freshers",
  Experienced: "experienced",
  "Currently active": "currently-active",
  Popular: "popular",
};
export const DEFAULT_GROUP_ID = 72;
export const CITY_FILTER = [
  {
    id: 1,
    label: "Mumbai",
    url: "/jobs/jobs-in-mumbai",
  },
  {
    id: 3,
    label: "Delhi-NCR",
    url: "/jobs/jobs-in-delhi_ncr",
  },
  {
    id: 4,
    label: "Bangalore",
    url: "/jobs/jobs-in-bengaluru",
  },
  {
    id: 5,
    label: "Pune",
    url: "/jobs/jobs-in-pune",
  },
  {
    id: 6,
    label: "Ahmedabad",
    url: "/jobs/jobs-in-ahmedabad",
  },
  {
    id: 7,
    label: "Jaipur",
    url: "/jobs/jobs-in-jaipur",
  },
  {
    id: 8,
    label: "Ranchi",
    url: "/jobs/jobs-in-ranchi",
  },
];

export const LEARN_GROUP_DESCRIPTIONS = {
  72: "Join apna Learn English community & Upgrade your vocabulary & writing skills.",
  73: "Join the business community and get tips to start your Business from entrepreneur and experts.",
  74: "Join apna Government Exams Prep group and get tips from professionals to crack the upcoming Government exams.",
};

export const BRANCH_SOURCE_DEFAULT = "APNA MAIN WEBSITE";

export const PAGE_TYPES = {
  short: "SHORT TAIL",
  long: "LONG TAIL",
};

export const JOBS_PER_PAGE = 15;

export const BRANCH_APP_DOWNLOAD_CAMPAIGNS = {
  playStoreIcon: "Google Play Icon",
  downloadAppCTA: "Download App Banner",
  redirectCountdownModal: "Countdown Redirect Modal",
  profileShare: "Profile Website Share",
  getNotifiedCTA: "Get New Job Updates",
  connectWithUser: "Connect With User",
  createWebsite: "Create Website",
  jobApply: "Job Apply Button",
  onboardingOverlay: "Web To App Overlay",
  jobApplicationLead: "Job Application Lead",
  jobAlert: "Job Alert",
  webToAppBanner: "Web To App Banner",
};

export const TOP_GROUP_NAMES = [
  "beautician / hair stylist",
  "cook / chef / baker",
  "back office",
  "accounts / finance",
  "graphic designer",
  "fashion designer",
  "digital marketing / online marketing",
  "content writing",
  "pharmacist",
  "delivery person",
];

// job listing url patterns
export const WFH_JOBS_PATTERN = "work-from-home-jobs";
export const PART_TIME_JOBS_PATTERN = "part-time-jobs";
export const WOMEN_JOBS_PATTERN = "jobs-for-women";
export const WOMAN_JOBS_NEW_PATTERN = "female-jobs";
export const FRESHER_JOBS_PATTERN = "jobs-for-freshers";
export const CATEGORY_JOBS_PATTERN = "jobs-for";
export const AREA_JOBS_PATTERN_LEGACY = "find-jobs-in";
export const LOCATION_JOBS_PATTERN = "jobs-in";
export const TENTH_PASS_JOBS_PATTERN = "10th-pass-jobs";
export const TWELFTH_PASS_JOBS_PATTERN = "12th-pass-jobs";

export const JOB_STATUS = {
  ACTIVE: 0,
  UNDER_REVIEW: 1,
  INACTIVE: 2,
  ARCHIVE: 3,
};

export const JOB_LOCATION_TYPE = {
  SINGLE_LOCATION: "single_location",
  WFH: "wfh",
  FIELD_LOCATION: "field_location",
};

export const JOB_APPLICANT_LOCATIONS = {
  ANYWHERE: "ANYWHERE",
  SAME_CITY: "SAME_CITY",
  WITHIN_5KM: "WITHIN_5KM",
  WITHIN_10KM: "WITHIN_10KM",
  WITHIN_25KM: "WITHIN_25KM",
};

// job detail constants

export const EDUCATION_MAP = {
  "10th or Below 10th": "High School",
  "12th Pass": "Associate Degree",
  Diploma: "Associate Degree",
  Graduate: "Bachelor Degree",
  ITI: "Associate Degree",
  "Post Graduate": "Postgraduate Degree",
};

export const INDUSTRY_MAP = {
  "Accounts / Finance": "Accounting and Finance",
  "Admin / Office Assistant": "Admin and Office",
  "Back Office": "Admin and Office",
  "Computer / Data Entry Operator / COPA": "Computer and IT",
  "Beautician / Hair Stylist": "Personal Care and Services",
  "Content Writing": "Media, Communications and Writing",
  "Fashion Designer": "Art, Fashion and Design",
  "Delivery Person": "Transportation and Logistics",
  "Chemical Engineer": "Science and Engineering",
  "DTP Operator / Printer": "Admin and Office",
  "Human Resource": "Human Resources",
  Legal: "Legal",
  "Mobile Technician": "Installation, Maintenance and Repair",
  Painter: "Art, Fashion and Design",
  Plumber: "Construction",
  "Tailor / Cutting Master": "Art, Fashion and Design",
  Technician: "Installation, Maintenance and Repair",
  "Tool and Die Maker": "Manufacturing and Warehouse",
  "Graphic Designer": "Art, Fashion and Design",
  "Interior Designer": "Art, Fashion and Design",
  Driver: "Transportation and Logistics",
  "Electrical Engineer": "Science and Engineering",
  "Electronic Engineer": "Science and Engineering",
  "Hardware & Network Engineer": "Computer and IT",
  "Mechanical Engineer": "Science and Engineering",
  "Cook / Chef / Baker": "Restaurant and Hospitality",
  "AC Technician": "Installation, Maintenance and Repair",
  "Aircraft Maintainance": "Installation, Maintenance and Repair",
  Carpenter: "Construction",
  Draughtsman: "Construction",
  "Electrician / Wireman": "Construction",
  Foundry: "Manufacturing and Warehouse",
  "Instrument Mechanic": "Installation, Maintenance and Repair",
  "Machine Operator": "Manufacturing and Warehouse",
  "Turner-Fitter": "Manufacturing and Warehouse",
  Welder: "Manufacturing and Warehouse",
  Operations: "Business Operations",
  Pharmacist: "Healthcare",
  "Ward Helper": "Healthcare",
  Housekeeping: "Cleaning and Facilities",
  "Office Help / Peon": "Admin and Office",
  "Security Guard": "Protective Services",
  "Business Development": "Business Operations",
  Marketing: "Advertising and Marketing",
  "IT Support": "Computer and IT",
  "Software / Web Developer": "Computer and IT",
  "Corporate Trainer": "Education",
  "Telecalling / BPO / Telesales": "Customer Service",
  "Business Operations": "Business Operations",
  "Civil Engineer / Architect": "Science and Engineering",
  "Counsellor (Career / Visa)": "Education",
  "Digital / Online Marketing": "Advertising and Marketing",
  "Doctor / Dentist": "Healthcare",
  "Photography/Video Editing": "Media, Communications and Writing",
  "Field Sales": "Sales and Retail",
  "Fitness Trainer / Dietician": "Sports Fitness and Recreation",
  "Hospitality/ Hotel/ Event Management": "Restaurant and Hospitality",
  "Kitchen Appliance Technician": "Installation, Maintenance and Repair",
  "Lab Technician / Assistant": "Healthcare",
  "Labour / Factory Worker": "labourer",
  "Logistics/ Warehouse operations": "Transportation and Logistics",
  "Maid / Baby Care": "Cleaning and Facilities",
  "Manufacturing / Production": "Manufacturing and Warehouse",
  "Medical Executive / Assistant": "Healthcare",
  "Nurse / Patient Care": "Healthcare",
  "Receptionist / Front Office / Help Desk": "Admin and Office",
  "Restaurant Staff / Kitchen Help/ Steward": "Restaurant and Hospitality",
  "Retail / Counter Sales": "Sales and Retail",
  "Teacher / Faculty / Tutor": "Education",
};

export const USER_DETAIL_KEY = "user";
export const USER_AUTH_TOKEN = "USER_AUTH_TOKEN";
export const USER_DATA_EXISTS = "USER_DATA_EXISTS";
export const FILTERS_STATE = "FILTERS_STATE";
export const USER_CONTACT_DETAILS = "USER_CONTACT_DETAILS";
export const JOB_DETAILS = "JOB_DETAILS";
export const WEB_TO_APP_BANNER_SHOWN = "WEB_TO_APP_BANNER_SHOWN";
export const WEB_TO_APP_BANNER_SHOWN_ON_DATE =
  "WEB_TO_APP_BANNER_SHOWN_ON_DATE";
export const OTHER_BANNER_OPEN = "OTHER_BANNER_OPEN";

export const LOCAL_STORAGE_KEYS = {
  USER_NAME_NUMBER_INFO: "USER_NAME_NUMBER_INFO",
  ACCESS_TOKEN: "__token__",
  USER_ID: "user_id",
  IS_ONBOARDING_COMPLETE: "__isOnboardingComplete__",
};

export const SESSION_STORAGE_KEYS = {
  VENDOR_APP: "VENDOR_APP",
  UTM_SOURCE: "utm_source",
  UTM_MEDIUM: "utm_medium",
  UTM_CAMPAIGN: "utm_campaign",
  UTM_ID: "utm_id",
  UTM_TERM: "utm_term",
  UTM_CONTENT: "utm_content",
  SEARCH_EVENTS_PROPS: "search_events_props",
  PREFILLED_LOCATION: "Prefilled_Location",
};

export const JobCount = "50 Lakhs+";

// TODO: Fix naming convention @richa bhardwaj always
// eslint-disable-next-line @typescript-eslint/naming-convention
export const MS_Per_Day = 1000 * 60 * 60 * 24;

/**
 * MICRO SITES
 */
export const MICROSITES = {
  VI: "vi",
};

export const EnglishProficiencyLevels = [
  {
    id: 1,
    level: "Basic",
    description: "You can understand/speak basic sentences",
    proficiency: 1,
  },
  {
    id: 2,
    level: "Intermediate",
    description: "You can have a conversation in English on some topics",
    proficiency: 5,
  },
  {
    id: 3,
    level: "Advanced",
    description: "You can do your entire job in English and speak fluently",
    proficiency: 10,
  },
];
export const IS_APPLY_BUTTON_CLICKED_EXTERNAL_JOB =
  "IS_APPLY_BUTTON_CLICKED_EXTERNAL_JOB";
