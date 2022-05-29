import React from "react"; //created using "rscp"
import PropTypes from "prop-types";

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  id: number;
  name: string;
}; /* use `interface` if exporting so that consumers can extend */

const ComponentTemplate = ({ id , name }: AppProps) => {
  return <div>{id}, {name}</div>;
};

ComponentTemplate.propTypes = {
  id: PropTypes.number.isRequired, //"ptnr"
  name: PropTypes.string, //"pts"
};

export default ComponentTemplate;