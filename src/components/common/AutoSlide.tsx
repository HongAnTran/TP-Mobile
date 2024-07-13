import React, { ReactNode, useEffect, useState } from 'react';
const AutoSlider = ({ items }: { items: ReactNode[] }) => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    if (items.length <= 1) return

    const interval = setInterval(() => {
      setPage((pre) => {
        if (pre === items.length - 1) {
          return 0
        }
        return pre + 1
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length, page]);

  return (
    <>
      {items[page]}
    </>
  );
};

export default AutoSlider;
