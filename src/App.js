import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { data, loading } = useFetch();
  const [allData, setAllData] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageData, setPageData] = useState(null);
  const [isChange, setIsChange] = useState(false);

  const handleNext = () => {
    setPageIndex((prev) => {
      if (prev >= data.length - 1) {
        return 0
      }
      return prev + 1
    })
    setIsChange(!isChange)
  }

  const handlePrev = () => {
    setPageIndex((prev) => {
      if(prev <= 0) {
        return data.length - 1
      }
      return prev - 1
    })
    setIsChange(!isChange)
  }

  useEffect(() => {
    if (data) {
      setAllData(data);
      setPageData(data[pageIndex]);
    }
  }, [data, loading]);

  useEffect(() => {
    setPageData(data[pageIndex])
  }, [isChange])

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading" : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        {allData ? <Follower pageData={pageData} /> : null}

        {allData && (
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrev}>prev</button>
            {allData.map((page, index) => {
              return (
                <button
                  className={
                    index === pageIndex ? `page-btn active-btn` : `page-btn`
                  }
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={handleNext}>next</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
// WHOO HOO this was a very interesting project yet challengeing
// I had challenges on how to implement the pagination functionality 
// i learnt about the Array.from() - which turn array-like/ish into array string, i manipulated thsi 
// functionality to create a nested array.
// I also learn more on how thr useEffect really work you never stop learning
