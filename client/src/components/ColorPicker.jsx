import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
         '#4169E1', '#98FB98', '#FF4500', '#008080', '#00FFFF', '#FFD700', '#00FF00', '#FF6F61', '#E6E6FA', '#C8A2C8', '#DA70D6', '#50C878', '#00FFFF', '#708090'
        ]}  
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
