function Card({ title, value }) {
  return (
    <article className="summary-card page-enter">
      <h4>{title}</h4>
      <p>{value}</p>
    </article>
  );
}

export default Card;