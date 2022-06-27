import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

const Paragraph = () => {
    const theme = useContext(ThemeContext)
    return (
        <p className={theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        </p>
    )
}
export default Paragraph;