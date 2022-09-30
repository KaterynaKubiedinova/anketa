import useTheme from '../../hooks/useTheme';
import './style.css';

export default function ChangeThemeBtn() {
  const { theme, setTheme, THEMES } = useTheme();

  const changeTheme = () => {
    if (theme === THEMES.LIGHT) {
      setTheme(THEMES.DARK);
    } else setTheme(THEMES.LIGHT);
  };

  return (
    <div className='main-buttons'>
      <button onClick={changeTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
}
