/* eslint-disable react/jsx-no-target-blank */
import projectImg from '../../images/2.jpg';

import PropTypes from 'prop-types';
import Card from '../Card';

const CardPreview = ({ data }) => {
  const backImage = data.photo || projectImg;
  return (
    <section className="preview">
      <img className="image_leaves" src={backImage} alt={backImage} />
      <Card data={data} />
    </section>
  );
};
CardPreview.propTypes = {
  data: PropTypes.object,
};
export default CardPreview;
