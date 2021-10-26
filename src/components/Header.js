import './Header.css';
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return(
    <div className="Header">
      <h1>
        Hypergeometric Calculator
        <Tooltip title="View Code on Github">
          <Button 
            variant="link"
            color="default"
            className="header-button"
            startIcon={<GitHubIcon />}
            href="https://github.com/blakescode/hypergeometric-react-app"
            target="_blank"
          >
          </Button>
        </Tooltip>
      </h1>
    </div>
  )
}

export default Header