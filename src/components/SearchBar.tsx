import React, { useEffect, useState } from 'react'
import { FaSearch, FaSpinner } from 'react-icons/fa'

export enum BookStatus {
    Idle = 'idle',
    Loading = 'loading',
    Success = 'success',
}

const SearchBar: React.FC = () => {

    const [resultStatus, setResultStatus] = useState(BookStatus.Idle);
    const [query, setQuery] = useState(String);
    const [queried, setQueried] = useState(false);

    console.log(query)

    useEffect(() => {
        if(!queried){
            return
        }
    }, [queried])

    function handleSubmit(event: React.SyntheticEvent): void {
        event.preventDefault();
        setQueried(true);

        setResultStatus(BookStatus.Loading);

        setResultStatus(BookStatus.Success);
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
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </div>
                <div className="absolute right-1 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <label>
                        <button className="bg-transparent">
                            {resultStatus === BookStatus.Loading ? <FaSpinner className="spinner" /> : <FaSearch aria-label='search' />}
                        </button>
                    </label>
                </div>
            </form>
            {resultStatus === BookStatus.Success ? (
                <p>Some books were found congrats</p>
            ) : (
                <p>No books found sowy</p>
            )}
        </div>
    )
}

export default SearchBar