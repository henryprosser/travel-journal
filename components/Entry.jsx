import { motion } from "motion/react";

export default function Entry(props) {
  return (
    <>
      <motion.article
        className="entry__container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image Container */}
        <motion.div
          className="image__container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src={props.entry.img.src}
            className="entry__image"
            alt={props.entry.img.alt}
            // whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Text Container */}
        <motion.div
          className="text__container"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="location__container">
            <img
              src="/images/marker.png"
              className="location__marker"
              alt="location marker"
            />
            <span className="location__country">{props.entry.country}</span>
          </div>

          <motion.h2
            className="entry__title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {props.entry.title}
          </motion.h2>

          <motion.p
            className="entry__date"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {props.entry.dates}
          </motion.p>

          <motion.p
            className="entry__description"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {props.entry.text}
          </motion.p>
          <motion.a
            href={props.entry.googleMapsLink}
            className="location__link"
            target="_blank"
            style={{ "--clr": "#2b283a" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <span className="arrow__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow__icon-svg arrow__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Explore on Google Maps
          </motion.a>
        </motion.div>
      </motion.article>

      <hr className="entry__divider" />
    </>
  );
}
