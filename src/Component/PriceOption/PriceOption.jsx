import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name,features,price} = option
    return (
        <div className="bg-slate-200 rounded-md p-4 text-center flex flex-col">
            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-xl">/mon</span>
            </h2>
            <h3 className="text-4xl mb-5">{name}</h3>
            <div className="p-4 flex-grow">
            {
                features.map((feature, indx)=> <Feature key={indx} feature={feature}></Feature>)
            }
            </div>
            <button className="bg-green-500 py-3 px-4 rounded">Byu Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option : PropTypes.object.isRequired
}
export default PriceOption;