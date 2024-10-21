/* eslint-disable camelcase */
/* eslint-disable radix */
import Router from "next/router";
import {
  AREA_JOBS_PATTERN_LEGACY,
  CATEGORY_JOBS_PATTERN,
  FRESHER_JOBS_PATTERN,
  LOCATION_JOBS_PATTERN,
  PART_TIME_JOBS_PATTERN,
  TENTH_PASS_JOBS_PATTERN,
  TWELFTH_PASS_JOBS_PATTERN,
  WFH_JOBS_PATTERN,
  WOMEN_JOBS_PATTERN,
  WOMAN_JOBS_NEW_PATTERN,
  LOCAL_STORAGE_KEYS,
  SESSION_STORAGE_KEYS,
} from "./constants";
import {
  slugify,
  jobCityAreaBreadcrumb,
  jobCategoryBreadcrumb,
  womenJobBreadcrumb,
  otherBreadcrumb,
} from "./helpers";
import { getCurrentDateString } from "./dateUtils";
import { logout } from "./apiClientPrivate";

/* eslint-disable prefer-destructuring */
export const parseJobListSlugOld = (paths, areaData, categoryData) => {
  let slug;
  let cityName;
  let areaName;
  let categoryName;
  let areaId;
  let areaSlug;
  let typeId;
  let categoryId;
  let workFromHome = 0;
  let partTime = 0;
  let womenJobs = 0;
  let freshersJobs = 0;
  let filter = "";
  let educationLevel = null;
  let city = {
    id: -1,
    name: "All",
    slug: "all",
  };
  let area = {
    id: -1,
    name: "All",
    slug: "all",
  };
  let category = {
    id: -1,
    name: "All",
    slug: "all",
  };
  let breadCrumbData = null;
  const slugLength = paths?.length;
  let fallBackType = "location";
  let redirectUrl = null;
  if (slugLength === 2) {
    // legacy urls jobs/type/slug or jobs/category/slug
    const slugParts = paths[1].split("-");
    if (paths[0] === "type") {
      areaId = slugParts[slugParts.length - 1];
      typeId = slugParts[slugParts.length - 2];
      cityName = slugParts[slugParts.length - 3];
      cityName = slugify(cityName);
      city = areaData[cityName];
      area = city?.area?.find((areaitem) => areaitem.id === parseInt(areaId));
      fallBackType = "type";
      filter = `area_id=${areaId}&type_id=${typeId}&city_id=${city.id}&fall_back_type=${fallBackType}`;
    } else if (paths[0] === "category") {
      areaId = slugParts[slugParts.length - 1];
      categoryId = slugParts[slugParts.length - 2];
      cityName = slugParts[slugParts.length - 3];
      cityName = slugify(cityName);
      city = areaData[cityName];
      category = categoryData.find(
        (categoryItem) => categoryItem.id === parseInt(categoryId)
      );
      area = city?.area?.find((areaitem) => areaitem.id === parseInt(areaId));
      fallBackType = "category";
      filter = `area_id=${areaId}&category_id=${categoryId}&city_id=${city.id}&fall_back_type=${fallBackType}`;
    }
  } else if (slugLength === 1) {
    slug = paths[0];
    if (slug.includes(WFH_JOBS_PATTERN)) {
      breadCrumbData = otherBreadcrumb({
        baseDisplayText: "work from home",
        pattern: WFH_JOBS_PATTERN,
      });
      workFromHome = 1;
      filter = "wfh=1";
      fallBackType = "wfh";
      const slugParts = slug.replace(WFH_JOBS_PATTERN, "").split("-");
      // work-from-home-jobs-in-delhi
      if (slugParts?.length === 3) {
        cityName = slugParts[2];
        city = areaData[cityName];
        filter = `city_id=${city?.id}&wfh=1&fall_back_type=${fallBackType}`;
        breadCrumbData = otherBreadcrumb({
          city,
          baseDisplayText: "work from home",
          pattern: WFH_JOBS_PATTERN,
        });
      }
    } else if (slug.includes(PART_TIME_JOBS_PATTERN)) {
      breadCrumbData = otherBreadcrumb({
        baseDisplayText: "part time",
        pattern: PART_TIME_JOBS_PATTERN,
      });
      partTime = 1;
      filter = "part_time=1";
      const slugParts = slug.replace(PART_TIME_JOBS_PATTERN, "").split("-");
      if (slugParts?.length === 3) {
        cityName = slugParts[2];
        city = areaData[cityName];
        filter = `city_id=${city?.id}&part_time=1&fall_back_type=${fallBackType}`;
        breadCrumbData = otherBreadcrumb({
          city,
          baseDisplayText: "part time",
          pattern: PART_TIME_JOBS_PATTERN,
        });
      }
    } else if (slug.includes(TENTH_PASS_JOBS_PATTERN)) {
      breadCrumbData = otherBreadcrumb({
        baseDisplayText: "10th pass",
        pattern: TWELFTH_PASS_JOBS_PATTERN,
      });
      filter = "education_level=1";
      educationLevel = 1;
      const slugParts = slug.replace(TENTH_PASS_JOBS_PATTERN, "").split("-");
      if (slugParts?.length === 3) {
        cityName = slugParts[2];
        city = areaData[cityName];
        filter = `city_id=${city?.id}&education_level=1&fall_back_type=${fallBackType}`;
        breadCrumbData = otherBreadcrumb({
          city,
          baseDisplayText: "10th pass",
          pattern: TWELFTH_PASS_JOBS_PATTERN,
        });
      }
    } else if (slug.includes(TWELFTH_PASS_JOBS_PATTERN)) {
      breadCrumbData = otherBreadcrumb({
        baseDisplayText: "12th pass",
        pattern: TWELFTH_PASS_JOBS_PATTERN,
      });
      filter = "education_level=2";
      educationLevel = 2;
      const slugParts = slug.replace(TWELFTH_PASS_JOBS_PATTERN, "").split("-");
      if (slugParts?.length === 3) {
        cityName = slugParts[2];
        city = areaData[cityName];
        filter = `city_id=${city?.id}&education_level=2&fall_back_type=${fallBackType}`;
        breadCrumbData = otherBreadcrumb({
          city,
          baseDisplayText: "12th pass",
          pattern: TWELFTH_PASS_JOBS_PATTERN,
        });
      }
    } else if (slug.includes(WOMEN_JOBS_PATTERN)) {
      breadCrumbData = womenJobBreadcrumb({});
      womenJobs = 1;
      filter = "gender=f";
      const slugParts = slug.replace(WOMEN_JOBS_PATTERN, "").split("-");
      if (slugParts?.length === 3) {
        cityName = slugParts[2];
        city = areaData[cityName];
        filter = `city_id=${city?.id}&gender=f&fall_back_type=${fallBackType}`;
        redirectUrl = `female-jobs-in-${cityName}`;
      }
    } else if (slug.includes(WOMAN_JOBS_NEW_PATTERN)) {
      // for new slugs like gemale-jobs-in-surat
      const slugParts = slug.replace(WOMAN_JOBS_NEW_PATTERN, "").split("-");
      if (slugParts?.length === 3) {
        womenJobs = 1;
        filter = "gender=f";
        cityName = slugParts[2];
        city = areaData[cityName];
        filter = `city_id=${city?.id}&gender=f&fall_back_type=${fallBackType}`;
        breadCrumbData = womenJobBreadcrumb({ city });
      }
    } else if (slug.includes(FRESHER_JOBS_PATTERN)) {
      breadCrumbData = otherBreadcrumb({
        baseDisplayText: "freshers",
        pattern: FRESHER_JOBS_PATTERN,
      });
      freshersJobs = 1;
      filter = "experience=f";
      const slugParts = slug.replace(FRESHER_JOBS_PATTERN, "").split("-");
      if (slugParts?.length === 3) {
        cityName = slugParts[2];
        city = areaData[cityName];
        filter = `city_id=${city?.id}&experience=f&fall_back_type=${fallBackType}`;
        breadCrumbData = otherBreadcrumb({
          city,
          baseDisplayText: "freshers",
          pattern: FRESHER_JOBS_PATTERN,
        });
      }
    } else if (slug.includes(AREA_JOBS_PATTERN_LEGACY)) {
      // url pattern :  find-jobs-in-thane-mumbai-44
      const slugParts = slug.replace(AREA_JOBS_PATTERN_LEGACY, "").split("-");
      if (slugParts?.length > 0) {
        const onlyDigitsPattern = /^\d+$/;
        if (slugParts[slugParts.length - 1]?.match(onlyDigitsPattern)) {
          // url pattern :  find-jobs-in-thane-mumbai-44
          cityName = slugParts[slugParts.length - 2];
          cityName = slugify(cityName);
          city = areaData[cityName];
          areaId = slugParts[slugParts.length - 1];
          area = city?.area?.find(
            (areaitem) => areaitem.id === parseInt(areaId)
          );
          filter = `city_id=${city?.id}&area_id=${areaId}&fall_back_type=${fallBackType}`;
        } else {
          // find-jobs-in-airoli-mumbai
          cityName = slugParts[slugParts.length - 1];
          cityName = slugify(cityName);
          city = areaData[cityName];
          areaSlug = slugify(slugParts?.slice(1, -1)?.join("-"));
          area = city?.area?.find((areaitem) => areaitem.slug === areaSlug);
          filter = area?.id
            ? `city_id=${city?.id}&area_id=${area.id}&fall_back_type=${fallBackType}`
            : `city_id=${city?.id}&fall_back_type=${fallBackType}`;
        }

        if (area?.id !== -1)
          breadCrumbData = jobCityAreaBreadcrumb({ city, area });
        else breadCrumbData = jobCityAreaBreadcrumb({ city });
      }
    } else if (slug.includes(LOCATION_JOBS_PATTERN)) {
      const slugParts = slug.replace(LOCATION_JOBS_PATTERN, "").split("-");
      if (slugParts?.length === 2) {
        cityName = slugParts[1];
        city = areaData[cityName];
        filter = `city_id=${city?.id}`;
      } else if (slugParts?.length === 3) {
        cityName = slugParts[2];
        city = areaData[cityName];
        areaName = slugParts[1];
        area = city?.area?.find((areaitem) => areaitem.slug === areaName);
        filter = `area_id=${area?.id}&fall_back_type=${fallBackType}`;
      }

      if (area?.id !== -1)
        breadCrumbData = jobCityAreaBreadcrumb({ city, area });
      else breadCrumbData = jobCityAreaBreadcrumb({ city });
    } else if (slug.includes(CATEGORY_JOBS_PATTERN)) {
      fallBackType = "category";
      const slugParts = slug.replace(CATEGORY_JOBS_PATTERN, "").split("-");
      if (slugParts?.length === 2) {
        categoryName = slugParts[1];
        category = categoryData.find(
          (categoryItem) => categoryItem.slug === categoryName
        );
        filter = `category_id=${category.id}`;
        breadCrumbData = jobCategoryBreadcrumb({ category });
      }
      if (slugParts?.length === 4) {
        categoryName = slugParts[1];
        cityName = slugParts[3];
        city = areaData[cityName];
        category = categoryData.find(
          (categoryItem) => categoryItem.slug === categoryName
        );
        filter = `category_id=${category.id}&city_id=${city.id}&fall_back_type=${fallBackType}`;
        breadCrumbData = jobCategoryBreadcrumb({ category, city });
      } else if (slugParts?.length === 5) {
        categoryName = slugParts[1];
        cityName = slugParts[4];
        areaName = slugParts[3];

        city = areaData[cityName];

        area = city?.area?.find((areaitem) => areaitem.slug === areaName);

        category = categoryData.find(
          (categoryItem) => categoryItem.slug === categoryName
        );
        filter = `category_id=${category.id}&area_id=${area.id}&fall_back_type=${fallBackType}`;
        breadCrumbData = jobCategoryBreadcrumb({ category, city, area });
      }
    }
  }

  return {
    filter,
    city,
    category,
    area,
    workFromHome,
    partTime,
    womenJobs,
    freshersJobs,
    typeId,
    educationLevel,
    breadCrumbData,
    redirectUrl,
  };
};

export const getJobFilters = (type) => {
  const filters = {
    all: "",
    jobsForWomen: "&gender=f",
    partTime: "&part_time=1",
    nightShift: "&shift=night",
    wfh: "&wfh=1",
    jobsForFreshers: "&experience=f",
    "10thPassJobs": "&education_level=1",
    "12thPassJobs": "&education_level=2",
    diplomaJobs: "&education_level=3",
    itiJobs: "&education_level=4",
    graduateJobs: "&education_level=5",
    postGraduateJobs: "&education_level=6",
  };

  return filters[type];
};

export const getMetadata = (
  city,
  category,
  area,
  workFromHome,
  partTime,
  womenJobs,
  freshersJobs,
  totalJobCount,
  totalOpenings,
  typeId,
  typeName,
  educationLevel,
  jobType = null
) => {
  let metaTitle = "India’s No.1 Job Portal | Search for Jobs Online in India";
  let metaDescription =
    "Apna is India’s No.1 Online Job Portal. Register for Free and Apply for Jobs in India. ✓ Free Job Alerts ✓ Communities ✓ Connect with 1 Lakh+ Employers";
  let pageName = "Job Listing Page";
  let pageTitle = `All Jobs`;
  const date = getCurrentDateString();
  const numberFormater = new Intl.NumberFormat("en-In");

  const formattedJobCount = numberFormater.format(parseInt(totalJobCount));

  if (jobType && category) {
    metaTitle = `Find ${formattedJobCount} ${jobType.name} ${category.name} Job Openings & Vacancies | apna.co`;
    metaDescription = `{date} - Apply for {jobsCount} ${jobType.name} ${category} Job Openings on apna. Register for Free & find more {gender} Job Openings in {city} ✓ Online ✓ {jobType} ✓ Women`;
    pageName = `${jobType.name} - Category {pageName}`;
    pageTitle = `{jobsCount} {jobType} ${category.name} Jobs`;
  }

  if (workFromHome === 1 && city?.id > -1) {
    // meta data for slugs that include work from home and city - https://apna.co/jobs/work-from-home-jobs-in-mumbai
    metaTitle = `Find ${formattedJobCount} Work from Home Job Openings in ${city?.name} City`;
    metaDescription = `${date} - Apply for ${formattedJobCount} Work from Home Jobs in ${city?.name} on Apna. Register for Free & Find WFH Job Openings in ${city?.name} City ✓ Freshers ✓ Online ✓ Women`;
    pageName = `WFH - City ${pageName}`;
    pageTitle = `${formattedJobCount} Work From Home Jobs in ${city?.name}`;
  } else if (workFromHome === 1) {
    // meta data for slugs that include only work from home - https://apna.co/jobs/work-from-home-jobs
    metaTitle = `Work from Home Jobs – Find ${formattedJobCount} WFH Job Vacancies`;
    metaDescription = `${date} – Apply for ${formattedJobCount} Work from Home Jobs on Apna. Register for Free & Find ✓ Online ✓ Part-time ✓ Freshers ✓ Women Job Vacancies with WFH provision across India`;
    pageName = `WFH ${pageName}`;
    pageTitle = `${formattedJobCount} Work From Home Jobs`;
  } else if (educationLevel === 1 && city?.id > -1) {
    // meta data for slugs that include 10th pass and city - https://apna.co/jobs/10th-pass-jobs-in-mumbai
    metaTitle = `Find ${formattedJobCount} 10th Pass Job Openings in ${city?.name} City`;
    metaDescription = `${date} - Apply for ${formattedJobCount} 10th Pass Jobs in ${city?.name} on Apna. Register for Free & Find 10th Pass Job Openings in ${city?.name} City ✓ Freshers ✓ Online ✓ Work from Home`;
    pageName = `10th Pass - City ${pageName}`;
    pageTitle = `${formattedJobCount} 10th Pass Jobs in ${city?.name}`;
  } else if (educationLevel === 1) {
    // meta data for slugs that include only 10th pass - https://apna.co/jobs/10th-pass-jobs
    metaTitle = `10th Pass Jobs – Find ${formattedJobCount} 10th Pass Job Openings`;
    metaDescription = `${date} – Apply for ${formattedJobCount} 10th Pass Jobs on Apna. Register for Free & Find ✓ Online ✓ Part-time ✓ Freshers ✓ Women Vacancies for 10th Pass people across India`;
    pageName = `10th Pass ${pageName}`;
    pageTitle = `${formattedJobCount} 10th Pass Jobs`;
  } else if (educationLevel === 2 && city?.id > -1) {
    // meta data for slugs that include 12th pass and city - https://apna.co/jobs/12th-pass-jobs
    metaTitle = `Find ${formattedJobCount} 12th Pass Job Openings in ${city?.name} City`;
    metaDescription = `${date} - Apply for ${formattedJobCount} 12th Pass Jobs in ${city?.name} on Apna. Register for Free & Find 12th Pass Job Openings in ${city?.name} City ✓ Freshers ✓ Online ✓ Work from Home`;
    pageName = `12th Pass - City ${pageName}`;
    pageTitle = `${formattedJobCount} 12th Pass Jobs in ${city?.name}`;
  } else if (educationLevel === 2) {
    // meta data for slugs that include only 12th pass - https://apna.co/jobs/12th-pass-jobs
    metaTitle = `12th Pass Jobs – Find ${formattedJobCount} 12th Pass Job Openings`;
    metaDescription = `${date} –   Apply for ${formattedJobCount} 12th Pass Jobs on Apna. Register for Free & Find ✓ Online ✓ Part-time ✓ Freshers ✓ Women Vacancies for 12th Pass people across India`;
    pageName = `12th Pass ${pageName}`;
    pageTitle = `${formattedJobCount} 12th Pass Jobs`;
  } else if (partTime === 1 && city?.id > -1) {
    // meta data for slugs that include part time and city - https://apna.co/jobs/part-time-jobs-in-mumbai
    metaTitle = `Find ${formattedJobCount} Part Time Job Openings in ${city?.name} City`;
    metaDescription = `${date} - Apply for ${formattedJobCount} Part Time Jobs in ${city?.name} on Apna. Register for Free & Find Part Time Job Openings in ${city?.name} City ✓ Freshers ✓ Online ✓ Women`;
    pageName = `Part time - City ${pageName}`;
    pageTitle = `${formattedJobCount} Part Time Jobs in ${city?.name}`;
  } else if (partTime === 1) {
    // meta data for slugs that include only part time - https://apna.co/jobs/part-time-jobs
    metaTitle = `Part Time Jobs – Find ${formattedJobCount} Part Time Job Vacancies`;
    metaDescription = `${date} – Apply for ${formattedJobCount} Part Time Jobs on Apna. Register for Free & Find ✓ Online ✓ Work from Home ✓ Freshers ✓ Women Job Vacancies that are Part Time`;
    pageName = `Part time ${pageName}`;
    pageTitle = `${formattedJobCount} Part Time Jobs`;
  } else if (womenJobs === 1 && city?.id > -1) {
    // TODO: handle after avinash's update
    metaTitle = `Find ${formattedJobCount} Female Job Openings in ${city?.name} City`;
    metaDescription = `${date} - Apply for ${formattedJobCount} Female Jobs in ${city?.name} on Apna. Register for Free & Find Female Job Openings in ${city?.name} City ✓ Freshers ✓ Online ✓ Work from Home`;
    pageName = `Jobs for women - City ${pageName}`;
    pageTitle = `${formattedJobCount} Jobs for Women in ${city?.name}`;
  } else if (womenJobs === 1) {
    // meta data for slugs that include only women - https://apna.co/jobs/jobs-for-women
    metaTitle = `Jobs for Women – Find ${formattedJobCount} Women Job Openings`;
    metaDescription = `${date} – Apply for ${formattedJobCount} Women Jobs for Free on Apna. Register for Free & Find ✓ Work from Home ✓ Online ✓ Part-time ✓ Fresher Job Vacancies for Women across India`;
    pageName = `Jobs for women - ${pageName}`;
    pageTitle = `${formattedJobCount} Jobs for Women`;
  } else if (freshersJobs === 1 && city?.id > -1) {
    // meta data for slugs that include freshers and city - https://apna.co/jobs/jobs-for-freshers-in-mumbai
    metaTitle = `Fresher Jobs in ${city?.name} – Find ${formattedJobCount} Fresher Openings in ${city?.name}`;
    metaDescription = `${date} - Apply for ${formattedJobCount} Fresher Jobs in ${city?.name} on Apna. Register for Free & Find Fresher Job Openings in ${city?.name} City ✓ Work from Home ✓ Online ✓ Women`;
    pageName = `Jobs for freshers - City ${pageName}`;
    pageTitle = `${formattedJobCount} Jobs for Freshers in ${city?.name}`;
  } else if (freshersJobs === 1) {
    // meta data for slugs that include only freshers - https://apna.co/jobs/jobs-for-freshers
    metaTitle = `Jobs for Freshers – Find ${formattedJobCount} Fresher Job Vacancies`;
    metaDescription = `${date} – Apply for ${formattedJobCount} Fresher Jobs on Apna. Register for Free & Find ✓ Work from Home ✓ Online ✓ Part-time ✓ Women Job Vacancies for Freshers across India`;
    pageName = `Jobs for freshers - ${pageName}`;
    pageTitle = `${formattedJobCount} Jobs for Freshers`;
  } else if (category?.id > -1 && area?.id > -1) {
    // meta data for slugs that includes Category, area and city - https://apna.co/jobs/jobs-for-accounts_finance-in-paldi-ahmedabad
    metaTitle = `Find ${formattedJobCount} ${category?.name} Job Openings in ${area?.name}, ${city?.name}`;
    metaDescription = `${date} - Apply for ${formattedJobCount} ${category?.name} Jobs in ${area?.name}, ${city?.name} on Apna. Register for Free & find ${category?.name} Job Openings in ${area?.name} ✓ Work from Home ✓ Online`;
    pageName = `Area-Category ${pageName}`;
    pageTitle = `${formattedJobCount} ${category?.name} Jobs in ${area?.name}, ${city?.name}`;
  } else if (category?.id > -1 && city?.id > -1) {
    // meta data for slugs that includes Category and city - https://apna.co/jobs/jobs-for-accounts_finance-in-ahmedabad
    metaTitle = `Find ${formattedJobCount} ${category?.name} Job Openings in ${city?.name} City`;
    metaDescription = `${date} - Apply for ${formattedJobCount} ${category?.name} Jobs in ${city?.name} on Apna. Register for Free & find ${category?.name} Job Openings in ${city?.name} ✓ Work from Home ✓ Online`;
    pageName = `City-Category ${pageName}`;
    pageTitle = `${formattedJobCount} ${category?.name} Jobs in ${city?.name}`;
  } else if (category?.id !== -1) {
    // meta data for slugs that includes only category - https://apna.co/jobs/jobs-for-delivery_person
    metaTitle = `${category?.name} Jobs – Find ${formattedJobCount} ${category?.name} Job Vacancies`;
    metaDescription = `${date} – Apply for ${formattedJobCount} ${category?.name} Jobs on Apna. Register for Free & get ${category?.name} Job Alerts. ✓ Work from Home ✓ Online ✓ Freshers ✓ Women`;
    pageName = `Category ${pageName}`;
    pageTitle = `${formattedJobCount} ${category?.name} Jobs`;
  } else if (typeId && area?.id > -1) {
    metaTitle = `${typeName} Jobs in ${area?.name}, ${city?.name} - ${formattedJobCount} ${typeName} Job Vacancy in ${area.name}, ${city?.name}`;
    metaDescription = `${date} - Apply to ${formattedJobCount} ${typeName} Jobs in ${area?.name}, ${city?.name} on Apna. ${typeName} jobs are available for 10th pass, 12th pass, graduates, & ladies.`;
    pageName = `Role - Area ${pageName}`;
    pageTitle = `${formattedJobCount} ${typeName} Jobs in ${area?.name}, ${city?.name}`;
  } else if (area?.id > -1) {
    // meta data for slugs that includes area and city name https://apna.co/jobs/jobs-in-hsr_layout-bengaluru_
    metaTitle = `Jobs in ${area?.name}, ${city?.name} - Find ${formattedJobCount} Job Vacancies in ${area?.name}`;
    metaDescription = `${date} – Apply for ${formattedJobCount} Jobs available in ${area?.name}, ${city?.name} on Apna. Register for Free & Find ✓ Work from Home ✓ Online ✓ Freshers ✓ Women Jobs at ${area?.name}`;
    pageName = `Area ${pageName}`;
    pageTitle = `${formattedJobCount} Jobs in ${area?.name}, ${city?.name}`;
  } else if (city?.id > -1) {
    // meta data for slugs that includes only city name https://apna.co/jobs/jobs-in-bengaluru
    metaTitle = `Jobs in ${city?.name} – Find ${formattedJobCount} Job Vacancies in ${city?.name}`;
    metaDescription = `${date} – Apply for ${formattedJobCount} Jobs available in ${city?.name}. Register for Free on Apna.co & Find ✓ Work from Home ✓ Online ✓ Freshers ✓ Women Jobs in ${city?.name}`;
    pageName = `City ${pageName}`;
    pageTitle = `${formattedJobCount} Jobs in ${city?.name}`;
  }
  return { metaTitle, metaDescription, pageName, pageTitle };
};

export const createUrlFromSlugs = (
  city_slug,
  category_slug,
  area_slug,
  workFromHome,
  partTime,
  womenJobs,
  freshersJobs,
  educationLevel,
  /**
   * We have multiple job list urls like /jobs and
   * /microsite/[vendor]/jobs to make this function reusable
   * we pass url prefix
   */
  // eslint-disable-next-line @typescript-eslint/default-param-last
  urlPrefix = "/jobs/",
  state_slug,
  company_slug
) => {
  const jobParamsSlugs = [];

  const locationParamsSlug = [];

  if (workFromHome) {
    jobParamsSlugs.push("work_from_home");
  }
  if (partTime) {
    jobParamsSlugs.push("part_time");
  }
  if (freshersJobs) {
    jobParamsSlugs.push("freshers");
  }
  // TODO: Add Night Shift and full_time @Shyam Lohar
  if (company_slug && company_slug !== "all") {
    jobParamsSlugs.push(company_slug);
  }
  if (category_slug && category_slug !== "all") {
    jobParamsSlugs.push(category_slug);
  }
  if (womenJobs) {
    jobParamsSlugs.push("female");
  }
  if (educationLevel) {
    jobParamsSlugs.push(educationLevel === 1 ? "10th_pass" : "12th_pass");
  }
  if (area_slug && area_slug !== "all") {
    locationParamsSlug.push(area_slug);
  }
  if (city_slug && city_slug !== "all") {
    locationParamsSlug.push(city_slug);
  }
  if (state_slug && state_slug !== "all") {
    locationParamsSlug.push(state_slug);
  }

  const slugPrefix =
    jobParamsSlugs?.length > 0 ? `${jobParamsSlugs.join("-")}-jobs` : "jobs";

  const slugPostfix =
    locationParamsSlug?.length > 0 ? `-in-${locationParamsSlug.join("-")}` : "";

  const finalSlug = slugPrefix + slugPostfix;

  return `${urlPrefix}${finalSlug}`;
};

export const detectDeviceOs = () => {
  if (typeof window !== "undefined") {
    const UA = navigator.userAgent;
    if (UA.match(/Android/i)) {
      return "Android";
    }
    if (UA.match(/iPhone|iPad|iPod/i)) {
      return "iOS";
    }
    return "Other";
  }
  return null;
};

export const detectDeviceType = () => {
  if (typeof window !== "undefined") {
    const UA = navigator.userAgent;
    if (
      UA.match(
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/
      )
    ) {
      return "Tablet";
    }
    if (
      UA.match(
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
      )
    ) {
      return "Mobile";
    }
    return "Desktop";
  }
  return null;
};

export const isUserLoggedIn = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) || false;
  }
  return false;
};

export const isOnboardingComplete = () => {
  if (typeof window !== "undefined") {
    return (
      localStorage.getItem(LOCAL_STORAGE_KEYS.IS_ONBOARDING_COMPLETE) ||
      undefined
    );
  }
  return undefined;
};

export const getJobListingRoute = (slug) => {
  if (isUserLoggedIn()) {
    if (!slug) {
      return `/candidate/jobs?c_id=${isUserLoggedIn()}${
        isHostLaunchedMicrosite() ? "&source=vi" : ""
      }`;
    }
    return `/candidate/jobs/${slug}?c_id=${isUserLoggedIn()}${
      isHostLaunchedMicrosite() ? "&source=vi" : ""
    }`;
  }
  return slug ? `/jobs/${slug}` : "/jobs";
};

export const isHostLaunchedMicrosite = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-undef
    return sessionStorage.getItem(SESSION_STORAGE_KEYS.VENDOR_APP) || false;
  }
  return false;
};

export const logoutUser = (
  options = { reload: true, isCandidateRoute: false }
) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)) {
      logout()
        .then(() => {})
        .finally(() => {
          localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
          localStorage.removeItem(LOCAL_STORAGE_KEYS.IS_ONBOARDING_COMPLETE);
          if (options.reload) {
            window.location.reload();
          }
          if (options.isCandidateRoute) {
            Router.push("/jobs");
          }
        });
    }
  }
};

export const getUserId = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(LOCAL_STORAGE_KEYS.USER_ID) || "";
  }
  return "";
};
