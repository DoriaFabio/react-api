import { useState, useEffect } from "react";
import axios from "axios";
const newPost = {
    titolo: "",
    immagine: "",
    contenuto: "",
    tags: [],
  };
  const apiUrl = "http://localhost:3000";
  function AddPostPage() {
    const [formData, setFormData] = useState(newPost);
    const [tagsList, setTagsList] = useState([]);
  
    useEffect(() => {
      //console.log("E' stato eseguito use effect");
      getTags();
  
      //return () => console.log("cleanup");
    }, []);
  
    function getTags() {
      axios
        .get(apiUrl + "/tags")
        .then((res) => {
          console.log(res.data);
          setTagsList(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
    }
    //mostrare funzione per ripassare oggetto verso il padre e tenere nel parent
    // solo l'array e la funzione submit
    function handleInput(e) {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setFormData({ ...formData, [e.target.name]: value });
    }
    function handleTags(e) {
      setFormData((formData) => {
        let { tags, ...others } = formData;
        if (tags.includes(e.target.value)) {
          tags = tags.filter((val) => val !== e.target.value);
        } else {
          tags = [...tags, e.target.value];
        }
        return {
          tags,
          ...others,
        };
      });
    }
  
    function AddPost(e) {
      e.preventDefault();
      //no id ce lo rstituisce il backend
      //handleSubmit({ ...formData, id: self.crypto.randomUUID() });
      axios.post(apiUrl + "/posts", formData).then((res) => {
        console.log(res.data);
      });
      setFormData(newPost);
    }
    //
    return (
      <section className="my-4 container">
        <h2>Aggiungi nuovo post</h2>
        <form onSubmit={AddPost}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Titolo
            </label>
            <input
              type="text"
              className="form-control"
              id="titolo"
              aria-describedby="namelHelp"
              value={formData.titolo}
              onChange={handleInput}
              name="titolo"
            />
            <div id="namelHelp" className="form-text">
              Scrivi il titolo del post
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="immagine" className="form-label">
              Immagine del post
            </label>
            <input
              type="text"
              className="form-control"
              id="immagine"
              value={formData.immagine}
              onChange={handleInput}
              name="immagine"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contenuto" className="form-label">
              Descrizione
            </label>
            <input
              type="text"
              className="form-control"
              id="contenuto"
              value={formData.contenuto}
              onChange={handleInput}
              name="contenuto"
            />
          </div>
          <div className="card p-4">
            {tagsList.map((t) => (
              <div className="mb-3 form-check" key={t.id}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="ingredients"
                  name="ingredients"
                  onChange={handleTags}
                  value={t.titolo}
                  checked={formData.tags.includes(t.title)}
                />
                <label className="form-check-label" htmlFor="avaiable">
                  {t.title}
                </label>
              </div>
            ))}
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="avaiable"
              name="avaiable"
              onChange={handleInput}
              value={formData.avaiable}
              checked={formData.avaiable}
            />
            <label className="form-check-label" htmlFor="avaiable">
              Disponibile
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  }
  
  export default AddPostPage;