import css from "./Nett.module.css";

export const Nett = () => {
  return (
    <div>
      <h1 className={css.MaskOff}>
        Unmask AI, Uncover Truth. <br /> Welcome to{" "}
        <span style={{ color: "rgb(39, 118, 93)" }}>NettSearch!</span>{" "}
      </h1>
      <form className={css.FlexTape}>
        <h1 className={css.instruction}>Paste text to check if it's AI or human-made</h1>
        <textarea type="text" placeholder="Paste your text here" className={css.InpText} />
        <button type="submit" className={css.Scan}>
          Scan for AI &nbsp;&nbsp; &gt;
        </button>
      </form>
    </div>
  );
};
