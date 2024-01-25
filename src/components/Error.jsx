import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Error = ({ message }) => {
    return (
        <div className="error-view">
            <h1>{message}</h1>
            <Link to="/">
                <Button className="item-link">Go to home</Button>
            </Link>
        </div>
    )
}

export default Error;