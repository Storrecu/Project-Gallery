/* eslint-disable react/jsx-no-target-blank */
import projectImg from '../../images/2.jpg';

import PropTypes from 'prop-types';
import Card from '../Card';

const CardPreview = ({ data }) => {
  console.log('data >> ', data);
  const backImage = data.photo === '' ? projectImg : data.photo;
  return (
    <section className="preview">
      <img className="image_leaves" src={backImage} alt="" />
      <Card data={data} />
    </section>
  );
};
CardPreview.propTypes = {
  data: PropTypes.object,
};
export default CardPreview;
