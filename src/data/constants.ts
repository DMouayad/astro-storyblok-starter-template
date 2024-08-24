
export const SITE = {
    title: "YOUR_SITE",
    tagline: "",
    description: "YOUR_SITE_DESCRIPTION",
    url: "",
    author: "",
} as const;

export const OG = {
    locale: "en_US",
    type: "website",
    url: SITE.url,
    title: `${SITE.title}: `,
    description: "",
    // image: ogImageSrc,
} as const;

export const ENGLISH_FONT_LINK =
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap';
export const ARABIC_FONT_LINK =
    'https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap';
export const LOGO_IMG_FILE = "logo.ong";

export const HOME_PAGE_STORYBLOK_RELATIONS = []