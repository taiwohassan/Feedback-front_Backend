import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const status = 200;
  const navigate = useNavigate();  

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const handleClick = () => {
    console.log('Hello');
    navigate('/about');
  };

  return (
    <div>
      <h1>Post</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Post;
