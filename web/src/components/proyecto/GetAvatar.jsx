import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../../images/user.jpeg';
import ls from '../../services/localStorage';
import '../../styles/layout/GetAvatar.scss';
function GetAvatar({ avatar = defaultAvatar, updateAvatar, text }) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', () => {
        updateAvatar(fr.result);
        ls.set('userImage', fr.result);
      });
      fr.readAsDataURL(myFile);
    }
  };

  return (
    <div className="get-avatar">
      <label className="get-avatar__label" htmlFor="fileInput">
        <input
          className="input-btn"
          type="file"
          ref={myFileField}
          onChange={uploadImage}
        />
        <p className="input-btn-text">{text}</p>
      </label>
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default GetAvatar;
