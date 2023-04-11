import axios from "axios";
import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

 function Read() {
    const [data, setData] = useState([]);

    function getData() {
        axios.get("http://localhost:9000/Author")
            .then((res) => {
                setData(res.data);
            })
        }
        
        async function handleDelete(id) {
            await axios.delete(`http://localhost:9000/Author/${id}`)
            .then(() => {
            //   console.log(res.data);
            getData();
          });
      }

      const setToLocalStorage=(id,bookTitle,author,price,categories)=>{
             localStorage.setItem("id",id);
             localStorage.setItem("bookTitle",bookTitle);
             localStorage.setItem("author",author);
             localStorage.setItem("price",price);
             localStorage.setItem("categories",categories);
      }
     
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
               <h2>Read Operation</h2>
            <Container className="mt-4">
                <Link to="/">
                  <button className="btn btn-secondary">Create</button>
                </Link>
                <Table bordered>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                        <th scope="col">Categories</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((eachData) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{eachData.id}</th>
                                    <td>{eachData.bookTitle}</td>
                                    <td>{eachData.author}</td>
                                    <td>{eachData.price}</td>
                                    <td>{eachData.categories}</td>
                                    <td>
                                        <Link to="/update">
                                            <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                    setToLocalStorage(
                                                        eachData.id,
                                                        eachData.bookTitle,
                                                        eachData.author,
                                                        eachData.price,
                                                        eachData.categories
                                                    )
                                                }
                                            >
                                                &#10000;Edit{" "}
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(eachData.id)} >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    );
                })}
            </Table>
        </Container>
        </>
    )
}
export default Read;

