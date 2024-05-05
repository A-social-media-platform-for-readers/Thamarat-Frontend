const BookDetails = (props) => {
  return (
    <div className={`text-secondary text-center lh-sm ${props.style}`}>
      <div>Publisher: {props.publisher}</div>
      <div>Date Published: {props.date}</div>
      <div>ISBN13: {props.iSBN13}</div>
    </div>
  );
};

export default BookDetails;
