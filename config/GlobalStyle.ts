import { createStyles, makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useTheme } from '@mui/styles';
// import { Theme } from '@mui/core';
const useStyles = makeStyles((props: any) => {
  console.log(props);

  return createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        // height: '100%',
        // width: '100%',
        fontFamily: (props: any) => props.font,
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
    },
  });
});

const GlobalStyles = () => {
  const font = useAppSelector((state) => state.themeReducer.font);
  const theme = useTheme();
  useStyles({ theme, font });

  return null;
};

export default GlobalStyles;
