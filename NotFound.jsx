import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Tempore perferendis velit alias debitis, aliquid, minus ex deserunt at, pariatur veniam fugit asperiores 
        dolorum beatae non hic voluptatum ipsa ratione unde?</p>

        <p>Go to The 
            <Link to="/"> HomePage</Link>. </p>
    </div>
  )
}

export default NotFound
