//Author : Abel Okoh
//Seneca College
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { Link,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Editbook = () => {
    
    const {id} = useParams();

      //Setting attributes using usestate for validating the books UPDATES
      const [name, setName] = useState("");
      const [author, setAuthor] = useState("");
      const [number, setNumber] = useState("");
  

    //  Create const for books
    const books = useSelector(state=>state);
     // creating constant function for dispatch for data action
     const dispatch = useDispatch();
     //importing history/navigate now to push back
     const navigate = useNavigate();
    const currentBook = books.find(book=> book.id === parseInt(id));

  //Implementing useEffect hooks
    useEffect(()=>{
        if(currentBook){
            setName(currentBook.name);
            setName(currentBook.author);
            setName(currentBook.number);
        }
    }, [currentBook])

    const handleSubmit = (e) => {
        // this handle submit click event when we try to add a book
        e.preventDefault();

        //Checking each fields if they contain right data
        const checkName = books.find(
            (book) => book.id !== parseInt(id) && book.name === name
        );
        const checkAuthor = books.find(
            (book) => book.id !== parseInt(id) && book.author === name
        );
        const checkNumber = books.find(
            (book) => book.id !== parseInt(id) && book.number === parseInt(number)
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
            id: parseInt(id),
            name,
            author,
            number,
        };

        //Create Dispatch
        dispatch({ type: "UPDATE_BOOK", payload: data })
        toast.success("Book is updated successfully");
        //Adding history to push us back to home page
        navigate('/');

    };



    

  return (
    <div className="container p-5">
        {/* check if present book is present */}
        {currentBook? (
                // <> Fragment
                <>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                    <h1 className="text-center display-3">Edit Book {id}</h1>
                        <div className="form-group p-2">
                            <input type="text" placeholder="Book Name" className="form-control" value={name} onChange={e=> setName(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input type="text" placeholder="Author" className="form-control" value={author} onChange={e=> setAuthor(e.target.value)}/>
                        </div>
                        <div className="form-group p-2">
                            <input type="number" placeholder="ISBN" className="form-control" value={number} onChange={e=> setNumber(e.target.value)}/>
                        </div>
                        <div className="col-auto text-center p-2">
                            <input type="submit" value="Update Book" className="btn btn-dark mx-3" />
                            <Link to="/" className="btn btn-danger mx-3">Cancel</Link> 
                        </div>
                        

                    </form>
                </div>
                <img className='p-4'
      src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="new"
      />
            </div>
            </>
            ) : (
                <h1 className="text-center display-3">Book ID {id} not present</h1>
            )}
        </div>
  )
}

export default Editbook