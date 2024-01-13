import { useNavigate } from "react-router-dom";
import Button from "./Button";
const BackButton = () => {
    const navigate = useNavigate()

    return (
        <Button type ="back" onClick={(e) => {
            // prevents automatic resubmission of the from while navigating one step behind
            e.preventDefault()
            navigate(-1)}
            }>&larr; Back</Button>
    );
}

export default BackButton;
