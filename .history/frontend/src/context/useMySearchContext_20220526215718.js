import { useContext } from "react";
import { SearchContext } from "./SearchContext";

const useMySearchContext = () => {
  return ({ city, dates, options, dispatch } = useContext(SearchContext));
};
export default useMySearchContext;
