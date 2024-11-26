import css from "./Examples.module.css";

export const Examples = () => {
  return (
    <div>
      <div className={css.ExampFlex}>
        <h1>Human-made or Ai Generated?</h1>
        <p>
          Perplexity is a metric used to evaluate the performance of language
          models in predicting the next word in a sequence of words.
          <br /> <br />
          A lower perplexity score indicates better predictability and
          understanding of the language, while a higher perplexity score
          suggests a higher degree of uncertainty and less accurate predictions.
          <br /> <br />
          The human mind is so complex compared to current AI models that
          human-written text has high perplexity compared to AI-generated text.
        </p>
      </div>
      <div className={css.perpeFlex}>
        <div>
          <h1>High Perplexity:</h1>
          <p>
            "Every second on the clock erupted into a cascade of paradoxical
            moments, each a universe unto itself. The teapot sang an opera of
            hot, swirling tea, every steamy note a symphony of flavor."
          </p>
        </div>
        <div>
          <h1>Low Perplexity:</h1>
          <p>
            "The clock ticked steadily, marking the seconds. I poured hot water
            into the teapot, and a soothing aroma filled the room."
          </p>
        </div>
      </div>
      <p className={css.Bustiness}>
        Burstiness refers to the variation in the length and structure of
        sentences within a piece of content. <br /> <br />
        Human writing often exhibits bursts and lulls, with a mix of long and
        short sentences, while AI-generated content tends to have a more uniform
        and regular pattern. <br /> <br />
        Higher burstiness indicates greater creativity, spontaneity, and
        engagement in writing, whereas lower burstiness reflects a more robotic
        and monotonous style. <br /> <br />
        Just like the perplexity score, human written content usually has a high
        burstiness score
      </p>
      <div className={css.burstiFlex}>
        <div>
          <h1>High Burstiness:</h1>
          <p>
            "The alarm blared. Feet hit the floor. The tea kettle whistled.
            Steam billowed. Heart pounded. The world, awake."
          </p>
        </div>
        <div>
          <h1>Low Burstiness:</h1>
          <p>
            "In the peaceful morning, the alarm clock's soft hum ushered in a
            new day. I padded to the kitchen, my steps light and unhurried. The
            tea kettle whistled its gentle song, a comforting melody that
            harmonized with the steam's soft whisper."
          </p>
        </div>
      </div>
    </div>
  );
};
