import React from "react";
import recipes from "../recipes";

const Menu = () => {

    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>

            <div className="cards">
                {recipes.map((recipes) => (
            <div key={recipes.id} className="menu-items">
                <img src={recipes.image} alt="" />
                <div className="menu-content">
                <div className="heading">
                    <h5>{recipes.title}</h5>
                    <p>${recipes.price}</p>
                </div>
                <p>{recipes.description}</p>
                <button className="orderbtn" /*onClick={() => handleOrder(recipes.id)}*/>Order Now</button>
                </div>
            </div>

            ))}
            </div>
        </div>
    );
};

export default Menu;