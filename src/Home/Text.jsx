import css from "./Home.module.css";

export const Text = () => {
  return (
    <div className={css.TextContainer}>
      <p className={css.text}>
        We’ve built NettSearch, the ultimate tool to detect AI-generated content
        and ensure authenticity. From text to media, NettSearch helps you
        identify AI influences and safeguard originality in an increasingly
        AI-driven world.
      </p>
      <p className={css.text}>
        Our mission is to provide transparency and trust in digital content by
        empowering users with cutting-edge detection technology.
      </p>
      <p className={css.text}>
        We’re thrilled to introduce NettSearch and hear your feedback to improve
        its features. During our beta phase, NettSearch is completely free to
        use. Try it today and take control of content verification!
      </p>
    </div>
  );
};
