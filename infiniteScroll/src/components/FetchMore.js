import React, { useRef, useEffect } from "react";

const FetchMore = ({ loading, setPage }) => {
  const fetchMoreTrigger = useRef(null);
  const fetchMoreObserver = new IntersectionObserver((entries) => {
    // console.log(entries);
    // console.log(entries[0]);
    // if (entries[0].isIntersecting) setPage((page) => page + 1);
    if (entries[0].intersectionRatio <= 0) return;
    setPage((page) => page + 1);
  });

  useEffect(() => {
    console.log(fetchMoreObserver, '요소검사')
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current);
    };
  }, []);

  return (
    <div
      id="fetchMore"
      className={loading ? "loading" : ""}
      ref={fetchMoreTrigger}
    />
  );
};

export default FetchMore;
