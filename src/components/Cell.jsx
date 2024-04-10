import PropTypes from 'prop-types';

export default function Cell({ state, onClick }) {
  return (
    <i
      className={`${state === null ? "empty" : state} cell`}
      onClick={onClick}
    ></i>
  );
}

Cell.propTypes = {
	state: PropTypes.string,
	onClick: PropTypes.func
}