import Image from "next/image";

import { IMG_CACHE_URL } from "@/components/constants";

import styles from "./work-home-hero.module.css";

const BUYLINE =
  "I build systems that connect content, components, and AI into something teams love to use.";

type WorkHomeHeroProps = {
  className?: string;
};

export function WorkHomeHero({ className }: WorkHomeHeroProps): React.JSX.Element {
  const rootClass = className ? `${styles.root} ${className}` : styles.root;

  return (
    <section className={rootClass} aria-label="Introduction">
      <h1 className={styles.title}>
        <span>Hi. I&apos;m Scott.</span>
      </h1>
      <p className={styles.buyline}>{BUYLINE}</p>
      <span className={styles.avatarWrap}>
        <Image
          src={`/profile/srouse-profile.png?v=${IMG_CACHE_URL}`}
          alt=""
          width={64}
          height={64}
          sizes="64px"
          className={styles.avatar}
          priority
        />
        <Image
          src={`/profile/profile_pic.jpg?v=${IMG_CACHE_URL}`}
          alt=""
          width={64}
          height={64}
          sizes="64px"
          className={styles.avatar}
          priority
        />
        <Image
          src={`/profile/srouse-purple.png?v=${IMG_CACHE_URL}`}
          alt=""
          width={64}
          height={64}
          sizes="64px"
          className={styles.avatar}
          priority
        />
      </span>
    </section>
  );
}
