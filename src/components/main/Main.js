import mainStyle from "./main.module.css"
import PropTypes from 'prop-types'
export default function Main(props) {
    return (
        <main className={mainStyle.main}>
            {props.children}
        </main>
    )
}

Main.propTypes = {
    children: PropTypes.array
}
