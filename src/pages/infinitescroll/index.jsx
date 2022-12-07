import { useInfiniteQuery } from "@tanstack/react-query";
import { getTodosInfinite } from "../../hooks/useTodo";
import { Fragment } from 'react'
// import axios from 'axios'

let maxPage = 10;

// const fetchColors = ({ pageParam = 1 }) => {
//   return axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${limit}`)  
// }


export default function Infinitescroll() {
  
  const {
    status,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery(['todos'], getTodosInfinite, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < maxPage) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })  

  if (status === "loading") {
    return <h2>Loading...</h2>;
  }

  if (status === "error") {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}> Infinite Scroll </h1>

        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map(post => (
                <div className="card">
                    <div className="card-body">
                      <center>{post.id} - {post.title}</center>
                    </div>
                </div>
              ))}
            </Fragment>
          )
        })}
      </div>
      <div>

        <br/>

        {hasNextPage ? (
          <center>
            <button className="btn btn-primary" onClick={() => fetchNextPage()} >
              Load More
            </button>
          </center>
        ) : null}
        
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}
