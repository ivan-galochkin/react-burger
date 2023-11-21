import appStyle from "./app.module.css"
import AppHeader from "../app-header/AppHeader";
import Main from "../main/Main";
import {BurgerIngredients} from "../burger-indredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
export default function App() {
    return (
        <div className={appStyle.app}>
            <AppHeader/>
            <Main>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </Main>
        </div>
    )
}
