import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorIngredientStyle from "./burger-constructor-ingredient.module.css"
import {ingredientPropTypes} from "../utils/types";
export default function BurgerConstructorIngredient({ingredient}) {
    return (
        <div className={burgerConstructorIngredientStyle.container}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
            />
        </div>
    )
}

BurgerConstructorIngredient.propTypes = {
    ingredient: ingredientPropTypes
}
