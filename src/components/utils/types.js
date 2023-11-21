import PropTypes from "prop-types";

export const ingredientPropTypes = PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number
})
