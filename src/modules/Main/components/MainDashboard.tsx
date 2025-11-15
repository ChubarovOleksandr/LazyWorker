import { useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { getAuth, signOut } from 'firebase/auth';

import { RoutesEnum } from '@enums/routes';

export const MainDashboard = () => {
  const navigate = useNavigate();

  const onBtnClick = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);

      navigate(`${RoutesEnum.Auth}/${RoutesEnum.SignIn}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Main Pages</div>
      <Button onClick={onBtnClick}>Logout</Button>
    </>
  );
};
