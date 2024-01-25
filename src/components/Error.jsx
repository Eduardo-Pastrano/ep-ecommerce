import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error-view">
            <h1>404 not found</h1>
            <Link to="/">
                <Button className="item-link">Go to home</Button>
            </Link>
        </div>
    )
}

export default Error;