import Button from './Button';
import GlobalStyles from './GlobalStyles';
import Heading from './Heading'
import Paragraph from './Paragraph'

function CssModule() {
    return (
        <GlobalStyles>
            <div style={{padding: '0 32px'}}>
                <h2>CSS Module</h2>
                <Heading />
                <Paragraph />
            </div>
            <div className="d-flex">
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
            <Button />
            <Button primary/>
            <Button primary disabled/>
        </GlobalStyles>
        
    )
}
export default CssModule;