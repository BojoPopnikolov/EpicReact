import React, { useEffect, useState } from 'react'
import { FaSearch, FaSpinner } from 'react-icons/fa'
import { api } from './api';

export enum BookStatus {
    Idle = 'idle',
    Loading = 'loading',
    Success = 'success',
}


// function client(endpoint: any, customConfig = {}) {
    //     const config = {
        //       method: 'GET',
        //       ...customConfig,
        //     }
        
        //     return window
        //       .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
        //       .then(response => response.json())
        //   }  
        
const SearchBar: React.FC = () => {
            
    let books: any;
    const [status, setStatus] = useState(BookStatus.Idle);
    const [data, setData] = useState({books})
    const [query, setQuery] = useState(String);
    const [queried, setQueried] = useState(false);

    const isLoading = status === BookStatus.Loading;
    const isSuccess = status === BookStatus.Success;

    // useEffect(() => {
    //     if(!queried){
    //         return
    //     }
    //     console.log("log")
    //     setStatus(BookStatus.Loading);
    //     console.log(process.env.REACT_APP_API_URL)
        
    //     window
    //         .fetch(`${process.env.REACT_APP_API_URL}/books?query=zack}`, {method: 'GET'})
    //         .then(response => 
    //             console.log("log2")    
    //         )
    //         .catch(err =>
    //             console.log("err")
    //         )
    // }, [queried, query])
    console.log(queried)

    useEffect(() => {
        if (!queried) {
          return
        }
        console.log(query)
        setStatus(BookStatus.Loading)
        api(`http://localhost:8989/api/books?query=zack`).then(responseData => {
          console.log(responseData)
        //   setStatus('success')
        })
    }, [query, queried])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')      
    //     .then(response => response.json())      
    //     .then(json => console.log(json))
    // }, [])

    function handleSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
        setQueried(true);

        const target = event.target as typeof event.target & {
            search: { value: string }
        }
        setQuery(target.search.value)
    }

    return(
        <div className="max-w-[800px] m-auto w-[90vw] py-[40px]">
            <form className="flex relative bg-gray-100 rounded-sm" onSubmit={handleSubmit}>
                <div className="realtive w-full">
                    <label hidden={true} htmlFor="search" >Search</label>
                    <input 
                        placeholder="Search books..."
                        id="search"
                        type="search"
                        className="
                            search w-[100%]
                            bg-transparent
                            text-black pl-3 py-2
                            placeholder:text-gray-600
                        "
                    />
                </div>
                <div className="absolute right-1 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <label>
                        <button className="bg-transparent">
                            {isLoading ? <FaSpinner className="spinner" /> : <FaSearch aria-label='search' />}
                        </button>
                    </label>
                </div>
            </form>
            {/* {isSuccess ? (
                data?.books?.length ? (
                    <ul>
                        {data.books.map((book:any) => (
                            <li key={book.id} aria-label={book.title}>
                                <div key={book.id}>{book}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No books found sowy :(</p>
                )
            ) : null} */}
        </div>
    )
}

export default SearchBar