import React from 'react';
import { useDispatch } from 'react-redux';
import {  delFeatureItem } from '../actions/carAction';

const AddedFeature = props => {
  console.log(props);
  const deleteIt = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => deleteIt(delFeatureItem(props.feature))}>X</button>
      {props.feature.name}
    </li>
  );
};


export default AddedFeature;
