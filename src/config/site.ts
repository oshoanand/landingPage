export type SiteConfig = typeof siteConfig

const thirtyDaysFromNow = new Date();
thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);

export const siteConfig = {
  name: "Launchpad",
  description:
    "Our innovative platform is launching soon! Get ready for something amazing.",
  launchDate: thirtyDaysFromNow, // Set your target launch date here
  contact: {
    email: "hello@example.com",
    twitter: "https://twitter.com/example",
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/company/example",
  },
  websiteTeaser: "We're building something extraordinary. Discover a new way to [your website's core value proposition]. Sign up for updates and be the first to know when we launch!"
}
