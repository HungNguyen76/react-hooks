import styles from './Button.module.scss'
import clsx from 'clsx'
//classnames
//clsx
function Button({primary, disabled}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled
    })
    return (
            <button className={classes}>
                Click me!
            </button>        
    )
}
export default Button;