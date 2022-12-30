import React from "react";

const PageContext = React.createContext({
  page: 1,
  setPage1: () => {},
  setPage2: () => {},
  setPage4: () => {},

});

export default PageContext;
