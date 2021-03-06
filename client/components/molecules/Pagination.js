import { Heroicons } from "../../components/atoms/Heroicons";
import { chevronIcon } from "../../assets/svg";
export const Pagination = ({ currentPage, setCurrentPage, totalPage }) => {
  return (
    <div className={`flex justify-between items-center w-11/12 lg:w-1/2 mx-auto`}>
      {/* prev */}
      <button
        disabled={currentPage <= 1}
        onClick={() => currentPage > 1 && setCurrentPage((c) => c - 1)}
        className="flex items-center space-x-px focus:outline-none"
      >
        <Heroicons d={chevronIcon} />
        <span>Prev</span>
      </button>
      {/* num */}
      {/*down to mobile */}
      <p className="sm:hidden">1 / 5</p>
      {/* up to mobile */}
      <div className="hidden sm:flex space-x-2">
        {pages(currentPage, totalPage).map((el) => (
          <button
            key={el}
            onClick={() => setCurrentPage(el)}
            className={`${
              el === currentPage
                ? "bg-red-400 text-gray-50"
                : "hover:bg-gray-200 text-gray-600"
            } py-1 px-3  shadow-md rounded-md focus:outline-none`}
          >
            {el}
          </button>
        ))}
      </div>
      {/* next */}
      <button
        disabled={currentPage === totalPage}
        onClick={() => currentPage < totalPage && setCurrentPage((c) => c + 1)}
        className="flex items-center space-x-px focus:outline-none"
      >
        <span>Next</span>
        <Heroicons d={chevronIcon} additional="transform -rotate-180" />
      </button>
    </div>
  );
};

const pages = (currentPage, totalPages, limit = 5) => {
  let arr = [];
  const mid = Math.ceil(limit / 2);
  const left = mid - 1;
  const right = limit - mid;

  if (totalPages >= limit) {
    if (currentPage > mid && currentPage + mid <= totalPages) {
      for (let i = currentPage - left; i <= currentPage + right; i++) {
        arr.push(i);
      }
    } else if (currentPage <= mid) {
      for (let i = 1; i <= limit; i++) {
        arr.push(i);
      }
    } else if (currentPage + mid > totalPages) {
      for (let i = totalPages - limit + 1; i <= totalPages; i++) {
        arr.push(i);
      }
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
  }
  return arr;
};
