import styles from "./contactform.module.css";

export const ContactForm = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.contact}>
        <h2 className={styles.header}>Let’s get in touch!</h2>
        <div className={styles.div}>
          <h3 className={styles.subheader}>Email</h3>
          <p className={styles.info}>Brian@ratioc.dev</p>
        </div>
        <div className={styles.div}>
          <h3 className={styles.subheader}>Phone</h3>
          <p className={styles.info}>908.603.9697</p>
        </div>
        <h2>CONTACT FORM HERE?</h2>
      </section>
    </div>
  );
};
