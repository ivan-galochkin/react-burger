import ingredientDetailsStyle from "./ingredient-details.module.css"
import PropTypes from 'prop-types'
export default function IngredientDetails({ingredient}) {
    return(
        <section className={ingredientDetailsStyle.details}>
            <p className={"text text_type_main-large " + ingredientDetailsStyle.details__title}>Детали ингредиента</p>
            <img className={ingredientDetailsStyle.details__image} src={ingredient.image} alt={ingredient.name}/>
            <p className="text text_type_main-medium">{ingredient.name}</p>
            <div className={ingredientDetailsStyle.details__container}>
                <div className={ingredientDetailsStyle.details__subtitle}>
                    <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
                </div>
                <div className={ingredientDetailsStyle.details__subtitle}>
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
                </div>
                <div className={ingredientDetailsStyle.details__subtitle}>
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
                </div>
                <div className={ingredientDetailsStyle.details__subtitle}>
                    <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
                </div>
            </div>
        </section>
    )
}


IngredientDetails.propTypes = {
    ingredient: {
        name: PropTypes.string,
        image: PropTypes.string,
        calories: PropTypes.number,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number
    }
}
