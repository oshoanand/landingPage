export type SiteConfig = typeof siteConfig;

const thirtyDaysFromNow = new Date();
thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

export const siteConfig = {
  name: "Eventomir",
  description:
    "Our innovative platform is launching soon! Get ready for something amazing.",
  launchDate: thirtyDaysFromNow, // Set your target launch date here
  contact: {
    email: "hello@example.com",
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/company/example",
  },
  websiteTeaser:
    "Мы создаем нечто необычное. Подпишитесь на обновления и будьте первыми, кто узнает о запуске!",
};
