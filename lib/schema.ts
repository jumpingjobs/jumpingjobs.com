import { GITHUB_REPO, NPM_PACKAGE, SKILLS } from "@/lib/content";
import { OG_PATH } from "@/lib/og";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

/**
 * Schema.org JSON-LD for the single page this site is.
 *
 * Deliberately small. Google renders the SoftwareApplication rich result only when
 * `aggregateRating` and `offers` are both present, and we have no ratings to report —
 * inventing them is both untrue and a manual-action risk — so this markup exists for
 * entity resolution and non-Google consumers, not for stars in the SERP. Every field
 * below is either a verified fact (MIT, Node 18+, the npm homepage) or read from
 * lib/content.ts, so it cannot drift from the page the way a hand-copied list would.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;

function abs(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: abs("/icon.svg"),
        sameAs: [GITHUB_REPO, NPM_PACKAGE],
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": SITE_ID },
        about: { "@id": APP_ID },
        primaryImageOfPage: abs(OG_PATH),
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": APP_ID,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: `${SITE_URL}/`,
        applicationCategory: "DeveloperApplication",
        // The CLI is Node-only, so the host OS list is whatever Node 18 runs on.
        operatingSystem: "macOS, Windows, Linux",
        softwareRequirements: "Node.js 18 or newer",
        downloadUrl: NPM_PACKAGE,
        codeRepository: GITHUB_REPO,
        license: "https://opensource.org/licenses/MIT",
        // Version is intentionally absent: it ships from npm and would go stale here.
        featureList: SKILLS.map((skill) => skill.title),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/**
 * Serialises the graph for a <script> tag. `<` is escaped so a future copy string
 * containing `</script>` cannot close the tag early.
 */
export function siteSchemaJson() {
  return JSON.stringify(siteSchema()).replace(/</g, "\\u003c");
}
