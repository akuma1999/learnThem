import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButton() {
  return (
    <FormControl>
      <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
      <RadioGroup
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue='female'
        name='radio-buttons-group'
      >
        <FormControlLabel value='roboto' control={<Radio />} label='Roboto' />
        <FormControlLabel
          value='dancing'
          control={<Radio />}
          label='Dancing Script'
        />
        <FormControlLabel
          value='beau'
          control={<Radio />}
          label='Beau Rivage'
        />
      </RadioGroup>
    </FormControl>
  );
}
