import Cta from "@/components/shared/Cta";
import ContactNigiri from "@/components/motifs/ContactNigiri";
import { socialLinks } from "@/constants/socials";
import styles from "./Contact.module.css";

const email = "aliasgar.laut@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.decorCircle} />
      <div className={styles.inner}>
        <div data-rv data-d="0" className={styles.nigiriRow}>
          <div className={styles.nigiriInner}>
            <div className={styles.steam} />
            <ContactNigiri />
          </div>
        </div>
        <h2 data-rv data-d=".08" className={styles.title}>
          The counter&apos;s always open
        </h2>
        <p data-rv data-d=".16" className={styles.body}>
          Got something you want built, or just want to talk shop about Rust, Go, or where to eat
          in Makati? Pull up a stool — I answer every message.
        </p>
        <div data-rv data-d=".24" className={styles.ctaRow}>
          <Cta href={`mailto:${email}`} variant="primary">
            {email}
          </Cta>
          {socialLinks.map((social) => (
            <Cta key={social.name} href={social.url} variant="secondary">
              {social.name}
            </Cta>
          ))}
        </div>
      </div>
    </section>
  );
}
