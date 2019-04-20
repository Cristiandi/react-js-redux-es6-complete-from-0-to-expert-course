import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WheaterExtraInfo = ({ humidity, wind }) => (
  <div className={'wheaterExtraInfoCont'}>
    <span className={'extraInfoText'} >{`Humedad: ${humidity}%`}</span>
    <span className={'extraInfoText'} >{`Vientos: ${wind}`}</span>
  </div>
);

WheaterExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WheaterExtraInfo;
