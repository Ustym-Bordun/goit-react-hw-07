import { BeatLoader, GridLoader } from 'react-spinners';
import css from './Loaders.module.css';

export const MainLoader = () => {
  return (
    <BeatLoader
      color="rgba(88, 169, 255, 0.9)"
      cssOverride={{
        display: 'flex',
        justifyContent: 'center',
        padding: '4px',
      }}
      margin={3}
      size={28}
      speedMultiplier={0.8}
    />
  );
};

export const PageLoader = () => {
  return (
    <div className={css.pageLoaderwrapper}>
      <GridLoader
        color="rgba(88, 169, 255, 0.9)"
        margin={3}
        size={28}
        speedMultiplier={0.8}
      />
    </div>
  );
};
