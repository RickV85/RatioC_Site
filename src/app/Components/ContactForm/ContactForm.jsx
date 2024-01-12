import styles from "./contactform.module.css";

export const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <h2>Let’s get in touch!</h2>
      <div>
        <h3>Email</h3>
        <p>Brian@ratioc.dev</p>
      </div>
      <div>
        <h3>Phone</h3>
        <p>908.603.9697</p>
      </div>
    </section>
  )
}