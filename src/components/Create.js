
import axios from "axios";
import { useState } from "react"
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export function Create() {
    // const [bookTitle, setBookTitle] = useState('');
    // const [author, setAuthor] = useState('');
    // const [price, setPrice] = useState('');
    // const [categories, setCategoies] = useState('');
    const [data, formData] = useState({})
    const history = useNavigate()

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleChange = (e) => {
        formData(
            { ...data, [e.target.name]: e.target.value }
        )
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked");
        console.log(data);
        await axios.post("http://localhost:9000/student")
            .then(() => {
                history("/read");
            });
        }
        
        return (
            <>
                {/* <h2 className="mx-5">Create</h2> */}
                <div className="d-flex justify-content-between m-2">
                    <h2>Create</h2>
                    <Link to="/read">
                    <button className="btn btn-primary">Show Data</button>
                </Link>
                </div>
                <Container className="mt-4">
                    <Form>
                        <Row>
                            <Col lg={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>BookTitle</Form.Label>
                                    <Form.Control type="text" placeholder="Enter book title" name='title' onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control type="text" placeholder="Enter book author" name="author" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="Enter book price" name="price" onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={12}>
                                <Form.Select className="mt-3" name="categories" onChange={handleChange}>
                                    <option>Categories</option>
                                    <option value="fiction">Fiction</option>
                                    <option value="humor">Humor</option>
                                    <option value="romance">Romance</option>
                                    <option value="novel">Novel</option>
                                    <option value="classiv">Clasic</option>
                                    <option value="horror">Horror</option>
                                </Form.Select >
                            </Col>
                        </Row>

                        <button type="submit" className="btn btn-primary m-2" onClick={handleSubmit}>Submit</button>

                        <button type="submit" className="btn btn-danger m-2" >&#x274C;Cancel</button>
                    </Form>
                </Container>
            </>
        )
    }
    export default Create