function Pagination({onchange,page,total}) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={page===1}
      onClick={()=>onchange(-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={page===total}
      onClick={()=>onchange(1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
