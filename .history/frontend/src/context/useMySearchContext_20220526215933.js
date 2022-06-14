import { useContext } from "react";
import { SearchContext } from "./SearchContext";

const useMySearchContext = () => {
  const { city, dates, options, dispatch } = useContext(SearchContext)
  return ()
};
export default useMySearchContext;
