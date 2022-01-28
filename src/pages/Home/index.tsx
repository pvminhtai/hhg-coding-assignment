import { Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <div id="home" className="home-page">
      <div className="home-page__container">
        <h1 className="home-page__heading">HHG Coding Assignment</h1>
        <Button appearance="primary" size="large">
          <Link to="/employees">Employee management page</Link>
        </Button>
      </div>
    </div>
  );
}
