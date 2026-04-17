import Image from "next/image";
import { IMG_CACHE_URL } from "./constants";

const BUYLINE =
  "I design and build systems that connect content, components, and AI into something teams love to use.";

export function WorkHomeHero(): React.JSX.Element {
  return (
    <section className="work-home-hero" aria-label="Introduction">
      <h1 className="work-home-hero__title">
        <span>Hi. I&apos;m Scott.</span>
      </h1>
      <p className="work-home-hero__buyline">{BUYLINE}</p>
      <span className="work-home-hero__avatar-wrap">
        <Image
          src={`/profile/srouse-profile.png?v=${IMG_CACHE_URL}`}
          alt=""
          width={64}
          height={64}
          sizes="64px"
          className="work-home-hero__avatar"
          priority
        />
        <Image
          src={`/profile/profile_pic.jpg?v=${IMG_CACHE_URL}`}
          alt=""
          width={64}
          height={64}
          sizes="64px"
          className="work-home-hero__avatar"
          priority
        />
        <Image
          src={`/profile/srouse-purple.png?v=${IMG_CACHE_URL}`}
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
