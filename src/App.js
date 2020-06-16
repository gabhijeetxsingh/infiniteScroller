import React, {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
// import { defer} from 'rxjs';
import {User} from "./user";
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={50} width={50} />
);

function App() {

  const [users, setUsers] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const getData  = async () => {
    let result = await fetch("https://randomuser.me/api/?results=15");
    result = await result.json();
    if(result.results.length === 0) {
      sethasMore(false)
    }
    else {
      
      setUsers([...users,...result.results]);
    }
    return result.results;
  }
  


  return (
    <InfiniteScroll
    loadMore={getData}
    hasMore={hasMore}
    loader={ <div className="loader-center"><Loader type={"cubes"} color={"red"}/></div>}>
      {users.map((user, idx) => <User key={idx} image={user.picture.medium} name={user.name.first+" "+user.name.last} email={user.email}/>)}
    </InfiniteScroll>
    
  );
}

export default App;
