export interface Offerte {
  page:           number;
  page_count:     number;
  items_per_page: number;
  took:           number;
  timed_out:      boolean;
  total:          number;
  results:        Result[];
  aggregations:   Aggregations;
}

export interface Aggregations {
}

export interface Result {
  contents:         string;
  name:             string;
  type:             Type;
  publication_date: Date;
  short_name:       string;
  model_type:       ModelType;
  id:               number;
  locations:        Category[];
  categories:       Category[];
  levels:           Level[];
  tags:             any[];
  refs:             Refs;
  company:          Company;
}

export interface Category {
  name: string;
}

export interface Company {
  id:         number;
  short_name: CompanyShortName;
  name:       CompanyName;
}

export enum CompanyName {
  Sprinklr = "Sprinklr",
}

export enum CompanyShortName {
  Sprinklr = "sprinklr",
}

export interface Level {
  name:       LevelName;
  short_name: LevelShortName;
}

export enum LevelName {
  Management = "management",
  MidLevel = "Mid Level",
  SeniorLevel = "Senior Level",
}

export enum LevelShortName {
  Management = "management",
  Mid = "mid",
  Senior = "senior",
}

export enum ModelType {
  Jobs = "jobs",
}

export interface Refs {
  landing_page: string;
}

export enum Type {
  External = "external",
}

export interface Company {
  description:      string;
  locations:        Industry[];
  industries:       Industry[];
  tags:             Size[];
  publication_date: Date;
  model_type:       string;
  twitter:          string;
  id:               number;
  size:             Size;
  refs:             Refs;
}

export interface Industry {
  name: string;
}

export interface Refs {
  landing_page:  string;
  jobs_page:     string;
  mini_f1_image: string;
  f2_image:      string;
  logo_image:    string;
  f1_image:      string;
  f3_image:      string;
}

export interface Size {
  name:       string;
  short_name: string;
}
