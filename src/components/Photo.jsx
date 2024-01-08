import { useInView } from "react-intersection-observer";

export default function Photo({ imgUrl }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="card--photo">
      {inView ? (
        <img src={imgUrl} alt="Example" />
      ) : (
        <div className="card--blank"></div>
      )}
    </div>
  );
}
