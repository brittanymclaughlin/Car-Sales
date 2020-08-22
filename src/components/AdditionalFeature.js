import React from 'react';
import { useDispatch } from 'react-redux';
import { addFeatureItem } from '../actions/carAction';

const AdditionalFeature = props => {
  console.log("this is props from additionalfeature.js", props)
  const addIt = useDispatch();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => addIt(addFeatureItem(props.feature))}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
