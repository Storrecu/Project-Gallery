import PropTypes from 'prop-types';

const Button = ({ text, className, selectedFiles }) => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    selectedFiles(files);
  };

  return (
    <div>
      <input
        className={className}
        type="file"
        onChange={handleFileChange}
        multiple
      />
      <button className={className}>{text}</button>
    </div>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Button;
