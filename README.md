# Tolu Stevens

Personal portfolio built with Next.js, React, TypeScript and Tailwind CSS.

```sh
npm install
npm run dev
```

Theme colours live in `src/lib/theme.ts`; `tailwind.config.ts` exposes them as
Tailwind utilities. Shared page, typography and legal-page styles live in
`src/components`. The CSS entry file only loads Tailwind and its configuration.
Manrope Regular and Semibold are hosted locally in
`src/assets/fonts`, with their font licence.

```sh
npm run lint
npm run build
```

Insightful's privacy policy and account-deletion pages remain available at
`/insightful/privacy-policy` and `/insightful/account-deletion`.

The footer CV link serves `public/tolu-stevens-cv.pdf`. Replace that file to
update the CV without changing the link.
