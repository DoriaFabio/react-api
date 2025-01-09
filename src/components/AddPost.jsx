// import { useState, useEffect } from "react";
// import axios from "axios";
// //import { ingredients } from "../data/pizzas";
// const newPost = {
//   title: "",
//   image: "",
//   content: "",
//   tags: [],
// };
// const apiUrl = "http://localhost:5500";
// function AddPost ({ handleSubmit }) {
//   const [formData, setFormData] = useState(newPost);
//   const [tagsList, setTagsList] = useState([]);

//   useEffect(() => {
//     //console.log("E' stato eseguito use effect");
//     getTags();

//     //return () => console.log("cleanup");
//   }, []);

//   function getTags() {
//     axios
//       .get(apiUrl + "/posts")
//       .then((res) => {
//         console.log(res.data);
//         setTagsList(res.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         // always executed
//       });
//   }
//   //mostrare funzione per ripassare oggetto verso il padre e tenere nel parent
//   // solo l'array e la funzione submit
//   function handleInput(e) {
//     const value =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setFormData({ ...formData, [e.target.name]: value });
//   }
//   function handleTags(e) {
//     setFormData((formData) => {
//       let { tags, ...others } = formData;
//       if (tags.includes(e.target.value)) {
//         tags = tags.filter((val) => val !== e.target.value);
//       } else {
//         tags = [...tags, e.target.value];
//       }
//       return {
//         tags,
//         ...others,
//       };
//     });
//   }
//   function addPosts(e) {
//     e.preventDefault();
//     //no id ce lo rstituisce il backend
//     //handleSubmit({ ...formData, id: self.crypto.randomUUID() });
//     handleSubmit({ ...formData });
//     setFormData(newPost);
//   }
//   //
//   return (
//     <section className="my-4">
//       <h2>Aggiungi nuovo post</h2>
//       <form onSubmit={addPosts}>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">
//             Titolo
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="title"
//             aria-describedby="namelHelp"
//             value={formData.title}
//             onChange={handleInput}
//             name="title"
//           />
//           <div id="namelHelp" className="form-text">
//             Scrivi il titolo del post
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">
//             Immagine del post
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="image"
//             value={formData.image}
//             onChange={handleInput}
//             name="image"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="price" className="form-label">
//             contenuto
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="content"
//             value={formData.content}
//             onChange={handleInput}
//             name="content"
//           />
//         </div>
//         <div className="card p-4">
//           {tagsList.map((tag) => (
//             <div className="mb-3 form-check" key={tag.id}>
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="tags"
//                 name="tags"
//                 onChange={handleTags}
//                 value={tag.title}
//                 checked={formData.tags.includes(tag.title)}
//               />
//               <label className="form-check-label" htmlFor="avaiable">
//                 {tag.title}
//               </label>
//             </div>
//           ))}
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="avaiable"
//             name="avaiable"
//             onChange={handleInput}
//             value={formData.avaiable}
//             checked={formData.avaiable}
//           />
//           <label className="form-check-label" htmlFor="avaiable">
//             Disponibile
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </section>
//   );
// }

// export default AddPost;