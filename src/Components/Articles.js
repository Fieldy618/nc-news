import { useEffect, useState } from "react";

const Articles = (props) => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const { topic } = props;

  useEffect(() => {
    let url = `https://kvwn-news.herokuapp.com/api/articles?limit=10&p=${page}`;
    if (topic) url += `&topics=${topic}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [page, topic]);

  useEffect(() => {
    setPage(1);
  }, [topic]);

  function previousPage() {
    setPage((currPage) => {
      if (currPage === 1) return 1;
      return currPage - 1;
    });
  }

  return (
    <main>
      {data && (
        <div className="articles-grid">
          {data.articles.map((article) => {
            return (
              <div key={article.article_id} className="article-container">
                <h2>{article.title}</h2>
                <h2>{article.author}</h2>
                <h2>{article.votes}</h2>
              </div>
            );
          })}
          <div className="next-button">
            <button onClick={previousPage}>{"<"}</button>
            <div>page: {page}</div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Articles;
