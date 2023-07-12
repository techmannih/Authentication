// // import jwt from 'jsonwebtoken'
// import React from 'react'

// // import { useNavigate } from 'react-router-dom'
// // import 



// export default function Home() {

// //   const history=useNavigate()
// //   async  function popularqoute(){
// //    const req= await fetch('',{
// //     headers :{
// //       'x-access-token':localStorage.getItem('token')

// //     }
// //    })

// //    const data=req.json()
// //    console.log(data)

// //   }
  
// //     useEffect (()=>{
// //     const token =localStorage.getItem('token')
// //     if(token){
// // const user=jwt.decode(token)
// //     if(!user){
// //       localStorage.removeItem('token')
// //       history.replace('/login')
// //     }else{
// //       popularqoute()
// //     }}
// //   })
//   return (
//     <div>
//       hello
//       <button>Logout</button>

//     </div>
//   )
// }


// import React, { useState } from 'react';
// import './Home.css';

// function TodoList({ title }) {
//   const [cardArray, setCardArray] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addToDo = () => {
//     if (inputValue !== '') {
//       setCardArray([...cardArray, inputValue]);
//       setInputValue('');
//     }
//   };

//   const deleteCard = (index) => {
//     const updatedCardArray = [...cardArray];
//     updatedCardArray.splice(index, 1);
//     setCardArray(updatedCardArray);
//   };

//   return (
//     <div className="todoList">
//       <button className="btn-save" onClick={() => deleteCard()}>
//         X
//       </button>
//       <h2>{title}</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button className="btn-save" id="to-do-list-button" onClick={addToDo}>
//         Add
//       </button>
//       <div>
//         {cardArray.map((text, index) => (
//           <Card
//             key={index}
//             text={text}
//             deleteCard={() => deleteCard(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Card({ text, deleteCard }) {
//   return (
//     <div className="card">
//       <p>{text}</p>
//       <button onClick={deleteCard}>X</button>
//     </div>
//   );
// }

// function App() {
//   const [todoLists, setTodoLists] = useState([]);
//   const [addTodoListInputValue, setAddTodoListInputValue] = useState('');

//   const addTodoList = () => {
//     if (addTodoListInputValue.trim() !== '') {
//       setTodoLists([...todoLists, addTodoListInputValue]);
//       setAddTodoListInputValue('');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="addTodoListInput"
//         value={addTodoListInputValue}
//         onChange={(e) => setAddTodoListInputValue(e.target.value)}
//       />
//       <button id="addTodoListButton" onClick={addTodoList}>
//         Add Todo List
//       </button>
//       <div id="root">
//         {todoLists.map((title, index) => (
//           <TodoList key={index} title={title} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';

// const TodoList = ({ title, deleteTodoList }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [cardArray, setCardArray] = useState([]);

//   const addToDo = () => {
//     if (inputValue.trim() !== "") {
//       setCardArray(prevCards => [...prevCards, inputValue]);
//       setInputValue("");
//     }
//   };

//   const deleteCard = (index) => {
//     setCardArray(prevCards => prevCards.filter((_, i) => i !== index));
//   };

//   const handleDeleteTodoList = () => {
//     deleteTodoList();
//   };

//   return (
//     <div className="container">
//       <div className="todoList">
//         <h2>{title}</h2>
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Add a to-do..."
//             value={inputValue}
//             onChange={e => setInputValue(e.target.value)}
//           />
//           <button className="btn btn-primary" onClick={addToDo}>Add</button>
//         </div>
//         <div>
//           {cardArray.map((card, index) => (
//             <Card
//               key={index}
//               text={card}
//               onDelete={() => deleteCard(index)}
//             />
//           ))}
//         </div>
//         <button className="btn btn-danger" onClick={handleDeleteTodoList}>Delete List</button>
//       </div>
//     </div>
//   );
// };

// const Card = ({ text, onDelete }) => {
//   const [description, setDescription] = useState("Click to write a description...");
//   const [comments, setComments] = useState([]);
//   const [commentInput, setCommentInput] = useState("");

//   const deleteCard = () => {
//     onDelete();
//   };

//   const addComment = () => {
//     if (commentInput.trim() !== "") {
//       setComments(prevComments => [...prevComments, commentInput]);
//       setCommentInput("");
//     }
//   };

//   return (
//     <div className="card" onClick={() => setDescription("Show menu")}>
//       <div className="card-body">
//         <h5 className="card-title">{text}</h5>
//         <button className="btn btn-danger" onClick={deleteCard}>X</button>
//       </div>

//       {description !== "Click to write a description..." && (
//         <div className="menu">
//           <div className="menuContainer">
//             <div className="menuTitle">
//               <EditableText text={text} setText={setDescription} />
//             </div>
//             <div className="menuDescription">
//               <EditableText text={description} setText={setDescription} isTextArea={true} />
//             </div>
//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 className="form-control commentsInput"
//                 placeholder="Write a comment..."
//                 value={commentInput}
//                 onChange={e => setCommentInput(e.target.value)}
//               />
//               <button className="btn btn-primary commentsButton" onClick={addComment}>Add</button>
//             </div>
//             <div className="menuComments">
//               {comments.map((comment, index) => (
//                 <Comment key={index} text={comment} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const EditableText = ({ text, setText, isTextArea = false }) => {
//   const [editing, setEditing] = useState(false);
//   const [inputValue, setInputValue] = useState(text);

//   const saveText = () => {
//     setText(inputValue);
//     setEditing(false);
//   };

//   return (
//     <div>
//       {editing ? (
//         isTextArea ? (
//           <>
//             <textarea className="form-control" value={inputValue} onChange={e => setInputValue(e.target.value)}></textarea>
//             <button className="btn btn-primary" onClick={saveText}>Save</button>
//           </>
//         ) : (
//           <>
//             <input className="form-control" value={inputValue} onChange={e => setInputValue(e.target.value)} />
//             <button className="btn btn-primary" onClick={saveText}>Save</button>
//           </>
//         )
//       ) : (
//         <p onClick={() => setEditing(true)}>{text}</p>
//       )}
//     </div>
//   );
// };

// const Comment = ({ text }) => {
//   return (
//     <div className="comment">
//       {text}
//     </div>
//   );
// };

// const App = () => {
//   const [todoLists, setTodoLists] = useState([]);

//   const addTodoList = (title) => {
//     if (title.trim() !== "") {
//       setTodoLists(prevLists => [...prevLists, title]);
//     }
//   };

//   const deleteTodoList = (index) => {
//     const updatedTodoLists = [...todoLists];
//     updatedTodoLists.splice(index, 1);
//     setTodoLists(updatedTodoLists);
//   };

//   return (
//     <div className="container">
//       <div className="mb-3">
//         <input id="addTodoListInput" className="form-control" />
//         <button id="addTodoListButton" className="btn btn-primary" onClick={() => addTodoList(document.getElementById("addTodoListInput").value)}>
//           Add
//         </button>
//       </div>
//       {todoLists.map((title, index) => (
//         <TodoList
//           key={index}
//           title={title}
//           deleteTodoList={() => deleteTodoList(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
