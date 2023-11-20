import ingredientsStyle from "./burger-ingredients.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {useEffect, useState} from "react";
import IngredientCard from "../ingredient-card/IngredientCard";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";

async function getIngredients() {
    const response = await (await fetch("https://norma.nomoreparties.space/api/ingredients")).json()
    return response.data
}

export function BurgerIngredients() {
    const [ingredients, setIngredients] = useState([])
    useEffect(() => {
        getIngredients().then((ingredients) => setIngredients(ingredients))
    }, [])
    const [openedModal, setOpenedModal] = useState(false);
    const [burger, setBurger] = useState({});
    function filterIngredients(type) {
        return ingredients.length > 0 && ingredients.filter((x) => x.type === type).map((props) => (
            <IngredientCard key={props._id} {...props} onClick={() => {
                console.log(props);
                setBurger(props);
                setOpenedModal(true);
            }
            }/>))
    }
    return (
        <section className={ingredientsStyle.ingredients}>
            <h2 className={ingredientsStyle.ingredients__title + " text text_type_main-large"}>
                Соберите бургер
            </h2>
            <nav className={ingredientsStyle.ingredients__tabs}>
                <Tab active={false} value={""} onClick={null}>
                    <p className={"text text_type_main-small"}>
                        Булки
                    </p>
                </Tab>
                <Tab active={false} value={""} onClick={null}>
                    <p className={"text text_type_main-small"}>
                        Соусы
                    </p>
                </Tab>
                <Tab active={false} value={""} onClick={null}>
                    <p className={"text text_type_main-small"}>
                        Начинки
                    </p>
                </Tab>
            </nav>
            <div className={ingredientsStyle.ingredients__content}>
                <div className={ingredientsStyle.ingredients__container}>
                    <h3 className={"text text_type_main-medium"}>Булки</h3>
                    <div className={ingredientsStyle.ingredients__cards}>
                        {filterIngredients("bun")}
                    </div>
                </div>
                <div className={ingredientsStyle.ingredients__container}>
                    <h3 className={"text text_type_main-medium"}>Соусы</h3>
                    <div className={ingredientsStyle.ingredients__cards}>
                        {filterIngredients("sauce")}
                    </div>
                </div>
                <div className={ingredientsStyle.ingredients__container}>
                    <h3 className={"text text_type_main-medium"}>Начинки</h3>
                    <div className={ingredientsStyle.ingredients__cards}>
                        {filterIngredients("main")}
                    </div>
                </div>
            </div>
            {openedModal && <Modal closePopup={() => {setOpenedModal(false)}}>
                <IngredientDetails ingredient={burger}/>
            </Modal>}
        </section>
    )
}
