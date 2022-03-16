//Author : Abel Okoh
//Seneca College
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
//import { Link } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'

const Addbook = () => {
    //Setting attributes using usestate
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [number, setNumber] = useState("");

    // Setting the useSelector hook for the state
    const books = useSelector((state) => state);
    // creating constant function for dispatch for data action
    const dispatch = useDispatch();
    //importing history/navigate now to push back
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // this handle submit click event when we try to add a book
        e.preventDefault();

        //Checking each fields if they contain right data
        const checkName = books.find(
            (book) => book.name === name && name
        );
        const checkAuthor = books.find(
            (book) => book.author === author && author
        );
        const checkNumber = books.find(
            (book) => book.number === parseInt(number)
        );

        // Checking data for errors, toast display error if similar data is found
        if (!author || !number || !name) { // This checks if all fields are empty 
            return toast.warning("Please fill in all fields")
        }
        if (checkName) { // This checks if all fields exist
            return toast.warning("This name already exist")
        }
        if (checkAuthor) { // This checks if all fields exist
            return toast.warning("This Authors book already exist")
        }
        if (checkNumber) { // This checks if all fields exist
            return toast.warning("This ISBN numbers book already exist")
        }

        //We are grabbing data from the array also implementing id.length so it can be numbered
        const data = {
            id: books[books.length - 1].id + 1,
            name,
            author,
            number,
        };

        //Create Dispatch
        dispatch({ type: "ADD_BOOK", payload: data })
        toast.success("Book is added to the library successfully");
        //Adding history to push us back to home page
        navigate('/');

    };

    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                    <h1 className="text-center display-3">Add Book</h1>
                        <div className="form-group p-2">
                            <input type="text" placeholder="Book Name" className="form-control" value={name} onChange={e=> setName(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input type="text" placeholder="Author" className="form-control" value={author} onChange={e=> setAuthor(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input type="number" placeholder="ISBN" className="form-control" value={number} onChange={e=> setNumber(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input type="submit" value="Add Book" className="btn btn-block btn-dark" />
                            <Link to="/" className="btn btn-danger mx-3">Cancel</Link>
                        </div>
                </form>
                    
                </div>
                <img className='p-4'
      src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="new"
      />
            </div>
        </div>
    )
}

export default Addbook;