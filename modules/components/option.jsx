import React, {PropTypes} from 'react';


/*
 * Option
 */
class Option extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value={this.props.value}>{this.props.display}</option>
    );
  }
}

Option.propTypes = {
  display: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

Option.defaultProps = {
  display: '',
  value: ''
};


export default Option;
