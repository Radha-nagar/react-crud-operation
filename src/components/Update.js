// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Form, Link, useNavigate } from "react-router-dom";

// export function Update() {
//     const [id, setId] = useState(0);
//     const [bookTitle, setBookTitle] = useState("");
//     const [author, setAuthor] = useState("");
//     const [price, setPrice] = useState("");
//     const [categories, setCategoies] = useState("");

//     const navigate= useNavigate();

//     useEffect(()=>{
//         setId(localStorage.getItem("id"));
//         setBookTitle(localStorage.getItem("bookTitle"));
//         setAuthor(localStorage.getItem("author"));
//         setPrice(localStorage.getItem("price"));
//         setCategoies(localStorage.getItem("categoies"));
//     },[]);

//    const handleUpdate=(e)=>{
//        e.preventDefault();
//         console.log("id...",id);
//         axios.put(`http://127.0.0.1:9000/Author/${id}`,{
            
//             bookTitle:bookTitle,
//             author:author,
//             price:price,
//             categories:categories,
//         }).then(()=>{
//             navigate("/read")
//         })

//     }


//     return (
//         <>
//             <h2 className="mx-5">Update</h2>
//             <Container className="mt-4">
//                 <Form>
//                     <Row>
//                         <Col lg={12}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>BookTitle</Form.Label>
//                                 <Form.Control type="text" placeholder="Enter book title" name='title' onChange={(e) => setBookTitle(e.target.value)} />
//                             </Form.Group>
//                         </Col>
//                         <Col lg={12}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Author</Form.Label>
//                                 <Form.Control type="text" placeholder="Enter book author" name="author" onChange={(e) => setAuthor(e.target.value)} />
//                             </Form.Group>
//                         </Col>
//                         <Col lg={12}>
//                             <Form.Group className="mb-3">
//                                 <Form.Label>Price</Form.Label>
//                                 <Form.Control type="text" placeholder="Enter book price" name="price" onChange={(e) => setPrice(e.target.value)} />
//                             </Form.Group>
//                         </Col>
//                         <Col lg={12}>
//                             <Form.Select className="mt-3" name="categories" onChange={(e) => setCategoies(e.target.value)}>
//                                 <option>Categories</option>
//                                 <option value="fiction">Fiction</option>
//                                 <option value="humor">Humor</option>
//                                 <option value="romance">Romance</option>
//                                 <option value="novel">Novel</option>
//                                 <option value="classiv">Clasic</option>
//                                 <option value="horror">Horror</option>
//                             </Form.Select >
//                         </Col>
//                     </Row>

//                     <button type="submit" className="btn btn-primary m-2" onClick={handleUpdate}>Update</button>
                 
//                         <Link to="/read">
//                             <button className="btn btn-secondary mx-3">Back</button>
//                         </Link>
                    
//                 </Form>
//             </Container>
//         </>
//     )
// }
//  export default Update

 