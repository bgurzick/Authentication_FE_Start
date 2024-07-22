import { useAuth } from '../../contexts/auth/auth_context';

const Dashboard = () => {
  const { logout } = useauth();

  const handleClick = () => {
    logout();
  }
  return (
    <div>
      <h1>Only Users Should See This Page</h1>
    </div>
  );
};

export default Dashboard;
