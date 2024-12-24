import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "features": [
            "Access to gym floor",
            "Locker facility",
            "Open 9 AM - 9 PM"
          ],
          "price": 20
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "features": [
            "Access to gym floor",
            "Locker facility",
            "Group classes",
            "Personal trainer support (2 sessions per month)",
            "Open 7 AM - 11 PM"
          ],
          "price": 40
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "features": [
            "24/7 gym access",
            "Locker facility with private locker",
            "Unlimited group classes",
            "Personal trainer support",
            "Diet consultation",
            "Access to spa and sauna"
          ],
          "price": 70
        }
      ]
    
    
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;
