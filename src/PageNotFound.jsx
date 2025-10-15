import { Link } from "react-router-dom";


function PageFound(){
    return (
        <>
            <h1 className="mt-5 text-center text-5xl">Page Not Found</h1>
            <h1 className="mt-5 text-center text-5xl">404 error</h1>
            <h1 className="mt-5 text-center text-5xl">
                <Link to={"/"}>Go Back to Page</Link>
            </h1>
        </>
    )
}

export default PageFound;