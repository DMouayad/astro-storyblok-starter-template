import {StoryblokStory} from 'storyblok-generate-ts'

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  _uid?: string;
  id: number;
  alt?: string;
  name: string;
  focus?: string;
  source?: string;
  title?: string;
  filename: string;
  copyright?: string;
  fieldtype?: string;
  meta_data?: null | {
    [k: string]: any;
  };
  is_external_url?: boolean;
  [k: string]: any;
}

export interface AboutPageSectionStoryblok {
  title: string;
  content: RichtextStoryblok;
  image: AssetStoryblok;
  with_dark_background?: boolean;
  with_image_on_left?: boolean;
  _uid: string;
  component: "about_page_section";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      target?: "_self" | "_blank";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      target?: "_self" | "_blank";
      [k: string]: any;
    };

export interface AboutSectionStoryblok {
  header?: any;
  section_title?: string;
  subtitle?: string;
  header_image?: AssetStoryblok;
  content?: any;
  content_title: string;
  content_image?: AssetStoryblok;
  content_body: RichtextStoryblok;
  cta_title: string;
  cta_link?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "about_section";
  [k: string]: any;
}

export interface CompanyPartnerStoryblok {
  name: string;
  image: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  has_large_image?: boolean;
  _uid: string;
  component: "company_partner";
  [k: string]: any;
}

export interface CompanyStatementStoryblok {
  title: string;
  content: RichtextStoryblok;
  _uid: string;
  component: "company_statement";
  [k: string]: any;
}

export interface CompanyStatementsStoryblok {
  section_title: string;
  items: CompanyStatementStoryblok[];
  _uid: string;
  component: "company_statements";
  [k: string]: any;
}

export interface ConfigStoryblok {
  header_nav_menu?: HeaderNavLinkStoryblok[];
  footer?: any;
  contacts?: FooterContactSectionStoryblok[];
  company_about?: string;
  show_social_links?: boolean;
  social_links?: (StoryblokStory<SocialStoryblok> | string)[];
  _uid: string;
  component: "Config";
  [k: string]: any;
}

export interface ContactFormStoryblok {
  title: string;
  subtitle: string;
  image: AssetStoryblok;
  is_enabled?: boolean;
  _uid: string;
  component: "contact_form";
  [k: string]: any;
}

export interface ContractingServicesSectionStoryblok {
  upper_title: string;
  title: string;
  services: (StoryblokStory<ServiceStoryblok> | string)[];
  _uid: string;
  component: "contracting_services_section";
  [k: string]: any;
}

export interface FooterContactSectionStoryblok {
  title: string;
  office: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "footer_contact_section";
  [k: string]: any;
}

export interface HeaderNavLinkStoryblok {
  title: string;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  children?: HeaderNavLinkStoryblok[];
  _uid: string;
  component: "header_nav_link";
  [k: string]: any;
}

export interface HeroProjectSlideStoryblok {
  title: string;
  project: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  image: AssetStoryblok;
  work_details?: LinkStoryblok[];
  _uid: string;
  component: "hero_project_slide";
  [k: string]: any;
}

export interface HeroServiceSlideStoryblok {
  title: string;
  subtitle?: string;
  service?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  home_section_ref?: string;
  image: AssetStoryblok;
  _uid: string;
  component: "hero_service_slide";
  [k: string]: any;
}

export interface HeroSliderStoryblok {
  slides?: (HeroProjectSlideStoryblok | HeroServiceSlideStoryblok)[];
  _uid: string;
  component: "hero_slider";
  [k: string]: any;
}

export interface LinkStoryblok {
  value: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "Link";
  [k: string]: any;
}

export interface NewsStoryblok {
  title: string;
  content: RichtextStoryblok;
  image: AssetStoryblok;
  _uid: string;
  component: "News";
  [k: string]: any;
}

export interface NewsSectionStoryblok {
  title: string;
  subtitle?: string;
  news_items: (StoryblokStory<NewsStoryblok> | string)[];
  _uid: string;
  component: "news_section";
  [k: string]: any;
}

export interface OfficeStoryblok {
  name: string;
  address: string;
  phone_number: string;
  PO_box?: string;
  country: string;
  map_link?: string;
  phone_icon: AssetStoryblok;
  address_icon: AssetStoryblok;
  po_box_icon: AssetStoryblok;
  _uid: string;
  component: "Office";
  [k: string]: any;
}

export interface OfficesSectionStoryblok {
  title: string;
  offices: (StoryblokStory<OfficeStoryblok> | string)[];
  _uid: string;
  component: "offices_section";
  [k: string]: any;
}

export interface PageStoryblok {
  title: string;
  has_plain_background?: boolean;
  banner_image?: AssetStoryblok;
  body?: (
    | AboutPageSectionStoryblok
    | AboutSectionStoryblok
    | CompanyPartnerStoryblok
    | CompanyStatementStoryblok
    | CompanyStatementsStoryblok
    | ConfigStoryblok
    | ContactFormStoryblok
    | ContractingServicesSectionStoryblok
    | FooterContactSectionStoryblok
    | HeaderNavLinkStoryblok
    | HeroProjectSlideStoryblok
    | HeroServiceSlideStoryblok
    | HeroSliderStoryblok
    | LinkStoryblok
    | NewsStoryblok
    | NewsSectionStoryblok
    | OfficeStoryblok
    | OfficesSectionStoryblok
    | PageStoryblok
    | PartnersSectionStoryblok
    | ProjectStoryblok
    | ServiceStoryblok
    | SocialStoryblok
    | SupplyTradeServicesSectionStoryblok
    | TeaserStoryblok
  )[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PartnersSectionStoryblok {
  title: string;
  partners: CompanyPartnerStoryblok[];
  _uid: string;
  component: "partners_section";
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface ProjectStoryblok {
  title: string;
  location: string;
  services: (StoryblokStory<ServiceStoryblok> | string)[];
  work_detail?: string;
  images?: MultiassetStoryblok;
  _uid: string;
  component: "Project";
  [k: string]: any;
}

export interface ServiceStoryblok {
  category: "" | "contracting" | "supply_and_trade";
  name: string;
  description?: RichtextStoryblok;
  banner_image?: AssetStoryblok;
  icon?: AssetStoryblok;
  sub_services?: ServiceStoryblok[];
  _uid: string;
  component: "Service";
  [k: string]: any;
}

export interface SocialStoryblok {
  name: string;
  icon: AssetStoryblok;
  link: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "Social";
  [k: string]: any;
}

export interface SupplyTradeServicesSectionStoryblok {
  title: string;
  upper_title: string;
  subtitle: string;
  services: (StoryblokStory<ServiceStoryblok> | string)[];
  _uid: string;
  component: "supply_trade_services_section";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}
