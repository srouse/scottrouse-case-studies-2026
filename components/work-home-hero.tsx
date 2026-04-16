import Image from "next/image";
import { IMG_CACHE_URL } from "./constants";

const BUYLINE =
  "I design and build systems that connect content, components, and AI into something teams can actually use.";

export function WorkHomeHero(): React.JSX.Element {
  return (
    <section className="work-home-hero" aria-label="Introduction">
      <h1 className="work-home-hero__title">
        <span>I&apos;m Scott.</span>
      </h1>
      <p className="work-home-hero__buyline">{BUYLINE}</p><span className="work-home-hero__avatar-wrap">
          <Image
            src={`/srouse-profile.png?v=${IMG_CACHE_URL}`}
            alt=""
            width={64}
            height={64}
            sizes="64px"
            className="work-home-hero__avatar"
            priority
          />
        </span>
    </section>
  );
}
