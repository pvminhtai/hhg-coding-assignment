import { ArrowLeftIcon, Button, ButtonProps } from 'evergreen-ui';
import { useHistory } from 'react-router-dom';

function GoBackButton({ children, ...props }: ButtonProps): JSX.Element {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <Button
      className="go-back-btn"
      onClick={handleClick}
      iconBefore={ArrowLeftIcon}
      {...props}
    >
      Go back
    </Button>
  );
}

export default GoBackButton;
