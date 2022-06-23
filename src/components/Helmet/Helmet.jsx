import React from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  const { structure } = props;
  console.log(structure);
  const result = structure.map((item) => {
    const detail = item.label;
    return detail;
  });

  document.title = result + "ISD System ";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{result.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
