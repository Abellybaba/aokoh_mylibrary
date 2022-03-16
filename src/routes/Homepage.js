import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


const Homepage = () => {

    const navigate = useNavigate();//importing navigate now to refresh page
    const books = useSelector(state => state);
    const dispatch = useDispatch();
    const deleteBook = (id) => {
        dispatch({type:"DELETE_BOOK", payload: id});
        toast.success("Book deleted Successfully");
        //Adding history to push us back to home page
        navigate('/');

    };


    return (
        <div className="container p-5">
            <div className="row">
                <h1 className="text-center display-3">Welcome to Abel Okoh Library</h1>
                <div className="col-md-6 shadow mx-auto p-5">

                    <div className="col-auto text-center p-2">

                        <Link to="/addbook" className="btn btn-dark mx-3">Add Books</Link>
                        <Link to="/" className="btn btn-danger mx-3">Cancel</Link>
                    </div>

                </div>
                <div className="col-md-10 shadow mx-auto p-5">
                    <table className="table table-hover">
                    <thead className="table-header bg-dark text-white">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">ISBN</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length > 0 ? (
                            books.map((book, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.number}</td>
                                    <td>
                                        <Link
                                            to={`/editbook/${book.id}`}
                                            className="btn btn-sm btn-primary mx-3"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => deleteBook(book.id)}
                                            className="btn btn-sm btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <th>No contacts found</th>
                            </tr>
                        )}
                    </tbody>
                     </table>
                     </div>
                <img className='p-4'
                    src="https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?cs=srgb&dl=pexels-stanislav-kondratiev-2908984.jpg&fm=jpg"
                    alt="new"
                />
                
            </div>
        </div>
    )
}

export default Homepage