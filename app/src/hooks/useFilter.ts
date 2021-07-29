import { useState } from "react";
import { Moment } from "moment";

interface FilterState {
  title: string;
  rating: string;
  ratingFilter: string;
  startDate?: Moment;
  endDate?: Moment;
  sortField: string;
  sortComparison: string;
}

const useFilter = () => {
  const [filter, setFilter] = useState<FilterState>({
    title: "",
    rating: "",
    ratingFilter: "",
    sortField: "",
    sortComparison: "",
  });

  const setFilterField = (field: string, input: string | Moment) => {
      setFilter({...filter, [field]: input})
  }

  return { ...filter, setFilterField };
};

export default useFilter
