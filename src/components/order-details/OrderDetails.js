import orderDetailsStyle from "./order-details.module.css"
import image from "./../../images/image.png"
export default function OrderDetails() {
    return(
        <section className={orderDetailsStyle.order_container}>
            <div className={orderDetailsStyle.order_container__title}>
                <p className="text text_type_digits-large">
                    {666666}
                </p>
                <p className="text text_type_main-medium">
                    идентификатор заказа
                </p>
            </div>
            <img className={orderDetailsStyle.order_container__image} src={image} alt={"Галочка"}/>
            <div className={orderDetailsStyle.order_container__subtitle}>
                <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </div>
        </section>
    )
}
