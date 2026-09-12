import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  // The conversational site. These route modules are deliberately thin: they
  // exist for URL matching, <head> metadata and status codes, while the
  // conversation layout renders the page contents (see app/conversation).
  layout("layouts/conversation.tsx", [
    index("routes/home.tsx"),
    route("contact", "routes/contact.tsx"),
    route("resume/skills", "routes/resume/skills.tsx"),
    route("resume/recent", "routes/resume/recent.tsx"),
    route("resume/freelance", "routes/resume/freelance.tsx"),
    route("resume/past", "routes/resume/past.tsx"),
    route("*", "routes/not-found.tsx")
  ]),

  // The "normcore" site: the same content as plain pages.
  route("normcore", "layouts/normcore.tsx", [
    index("routes/normcore/home.tsx"),
    route("resume", "routes/normcore/resume.tsx"),
    route("contact", "routes/normcore/contact.tsx")
  ])
] satisfies RouteConfig;
