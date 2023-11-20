import cardStyle from "./ingredient-card.module.css"
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types'
export default function IngredientCard({onClick, name, image, price}) {
    return (
        <div className={cardStyle.card} onClick={onClick}>
            <div className={cardStyle.card__imageHolder}>
                <img alt={name} src={image} className={cardStyle.card__image}/>
            </div>
            <div className={cardStyle.card__priceHolder}>
                <p className={"text text_type_digits-default"}>{price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <div className={cardStyle.card__textHolder}>
                <p className={"text text_type_main-default"}>{name}</p>
            </div>
        </div>
    )
}


IngredientCard.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number
}
