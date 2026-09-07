import type { Metadata } from "next";
import { ButtonLink } from "@/components/ds/Button";
import { BASE_PATH } from "@/lib/site";

// Next already emits `noindex` for the not-found route, so robots is left alone here
// rather than adding a second, duplicate meta tag.
export const metadata: Metadata = {
  title: "Page not found — Jumping Jobs",
};

const HOME = `${BASE_PATH}/`;

/**
 * Sends any unknown path back to the root.
 *
 * GitHub Pages cannot issue a 3xx, so the bounce happens client-side. `replace` rather
 * than `assign` keeps the bad URL out of history — otherwise Back would land here again
 * and re-redirect, trapping the reader. The <noscript> meta refresh covers JS-off, and
 * the rendered link covers the moment before either fires.
 *
 * Pages still returns a real 404 status with this body, so crawlers see the 404 and
 * only humans get moved; that is what keeps this from being a soft-404.
 */
const REDIRECT = `(function(){var h=${JSON.stringify(HOME)};if(location.pathname!==h){location.replace(h+location.hash)}})()`;

export default function NotFound() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: REDIRECT }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${HOME}`} />
      </noscript>
      <main className="shell flex min-h-screen flex-col items-center justify-center gap-5 py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="type-h2 text-heading">That page moved on.</h1>
        <p className="text-muted">Taking you back to the start.</p>
        <ButtonLink href={HOME}>Go home</ButtonLink>
      </main>
    </>
  );
}
