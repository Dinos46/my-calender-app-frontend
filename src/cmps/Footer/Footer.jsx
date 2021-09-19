//GET STATE
import { useSelector } from 'react-redux';
//UI COMPONENTS
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

export const Footer = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <footer className={`full flex ${isDark ? 'dark' : ''}`}>
      <h3>{`<devDin>`}</h3>
      <div className='links flex'>
        <Link href='https://www.linkedin.com/in/din-ben-elisha-5b476a211/'>
          <LinkedInIcon />
        </Link>
        <Link href='https://github.com/Dinos46' align='center'>
          <GitHubIcon />
        </Link>
      </div>
    </footer>
  );
};
