import './Style.css';
import {Link} from 'react-router-dom';

const Home = () => {
return (
<div className='App'>
<h1>React CRUD Operation</h1>

              {/* <p>
                <Link to="/">Home</Link>
              </p> */}
              <p>
                <Link to="/Create">Create</Link>
              </p>
              <p>
                <Link to="/Read">Read</Link>
              </p>
              <p>
                <Link to='/Update'>Update</Link>
              </p>
       
</div>
)
};

export default Home;