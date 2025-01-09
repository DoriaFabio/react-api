import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import Card from "../components/Card.jsx";
// import blog from "../data/posts.js"

// const apiUrl = "https://rickandmortyapi.com/api/character";
const apiUrl = import.meta.env.VITE_API_URL;
function MainComponent() {
  const [post, setPost] = useState([]);
  // const [character, setCharacters] = useState([]);
  useEffect(() => {
    console.log("è stato eseguito use effect");
    getData();
  }, []);

  function getData() {
    axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setPost(res.data.data);
      //     setCharacters(res.data.results);
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finito");
      });
  }
  function deleteItem(e, id) {
    e.preventDefault();
    axios.delete(`${apiUrl}/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);
      getData();
    });
  }
  return (
    <main className="container mb-5 mt-2">
      <div className="row gy-4">
        <div className="col-12 py-4">
          <Link to="/posts/create">Aggiungi nuovo post</Link>
        </div>
        {post.length > 0
          ? post.map((p) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.id}>
              <Card
                data={p}
                // image={p.immagine}
                // title={p.titolo}
                // content={p.contenuto}
                // tags={p.tags.join(", ")}
                onDeletePost={(e) => {
                  deleteItem(e, p.id)
                }}
              />
            </div>
          ))
          : "Non ci sono post"}
      </div>
      {/* <ul>
        {character.map((char) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul> */}
    </main>
  );
}
export default MainComponent;