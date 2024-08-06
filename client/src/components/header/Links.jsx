/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

function Links({ content }) {
    return (
        <ul>
            <li><Link to={content?.link} className="hover:underline"> {content?.page} </Link></li>
        </ul>
    )
}

export default Links