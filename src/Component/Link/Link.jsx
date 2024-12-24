import PropTypes from "prop-types";
const Link = ({route}) => {
    const {path, name} = route
    return (
        
           
                <li className="mr-5 hover:bg-green-500 px-4 py-3"><a href={path}>{name}</a></li>
            
       
    );
};
Link.propTypes = {
    route: PropTypes.object.isRequired
}
export default Link;