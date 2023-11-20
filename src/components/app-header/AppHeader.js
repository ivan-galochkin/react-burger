import appHeaderStyle from "./app-header.module.css"
import {BurgerIcon, ListIcon, ProfileIcon, Logo, Tab} from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
    return (
        <header className={appHeaderStyle.header}>
            <nav className={appHeaderStyle.header__nav}>
                <div className={appHeaderStyle.two_tabs_holder}>
                    <Tab active={false} value={""} onClick={null}>
                        <div className={appHeaderStyle.tab__content}>
                            <BurgerIcon type={"secondary"}/>
                            <p className={appHeaderStyle.tab__text + " text text_type_main-smal"}>
                                Конструктор
                            </p>
                        </div>
                    </Tab>
                    <Tab active={false} value={""} onClick={null}>
                        <div className={appHeaderStyle.tab__content}>
                            <ListIcon type={"secondary"}/>
                            <p className={appHeaderStyle.tab__text + " text text_type_main-small"}>
                                Лента заказов
                            </p>
                        </div>
                    </Tab>
                </div>
                <div className={appHeaderStyle.logo_wrapper}>
                    <Logo/>
                </div>
                <div className={appHeaderStyle.right_tab_holder}>
                    <Tab active={false} value={""} onClick={null}>
                        <div className={appHeaderStyle.tab__content}>
                            <ProfileIcon type={"secondary"}/>
                            <p className={appHeaderStyle.tab__text + " text text_type_main-small"}>
                                Личный кабинет
                            </p>
                        </div>
                    </Tab>
                </div>

            </nav>
        </header>
    )
}
