import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorIngredient from "../burger-constructor-ingredient/BurgerConstructorIngredient";
import burgerConstructorStyle from "./burger-constructor.module.css"
import {useState} from "react";
import Modal from "../modal/Modal";
import OrderDetails from "../order-details/OrderDetails";
const ingredients = [
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    },
    {
        name: "Говяжий метеорит (отбивная)",
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png"
    }
]
export default function BurgerConstructor() {
    const [openedModal, setOpenedModal] = useState(false);
    return (
        <section className={burgerConstructorStyle.constructor}>
            <section className={burgerConstructorStyle.constructor__ingredients}>
                <ConstructorElement extraClass={burgerConstructorStyle.margin_right}
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                />
                <div className={burgerConstructorStyle.constructor__container}>
                    {ingredients.map((ingredient, index) => (
                        <BurgerConstructorIngredient key={index} ingredient={ingredient}/>
                    ))}
                </div>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                    extraClass={burgerConstructorStyle.margin_right}
                />
            </section>
            <div className={burgerConstructorStyle.constructor__price}>
                <p className="text text_type_main-large">610 <CurrencyIcon type="primary" />
                </p>
                <Button htmlType="button" type="primary" size="large" onClick={() => setOpenedModal(true)}>
                    Оформить заказ
                </Button>
            </div>
            {openedModal && <Modal closePopup={() => {setOpenedModal(false)}}>
                <OrderDetails/>
            </Modal>}
        </section>
    )
}
