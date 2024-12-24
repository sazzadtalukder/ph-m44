import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <>
            <div className="flex items-center ">
            <FaCheckCircle className="text-green-500"></FaCheckCircle>
                <p className="ml-3">{feature}</p>
            </div>
        </>
    );
};
Feature.propTypes = {
    feature : PropTypes.string.isRequired
}
export default Feature;