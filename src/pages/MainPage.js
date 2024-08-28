import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className={'text-3xl'}>

      <div>
        <Link to={'/about'}>About</Link>
      </div>

      <h1>Main Page</h1>
    </div>
  );
}

export default MainPage;