import styled from 'styled-components';
import errorLogo from '../../assets/404.svg';

const DivContainer = styled.div`
    position: absolute;
    width: 1313px;
    height: 1256px;
    left: 63px;
    top: 189px;
`
const H1Style = styled.h1`
    position: absolute;
    width: 450px;
    height: 77px;
    left: 540px;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
`
const H2Style = styled.h2`
    position: absolute;
    width: 700px;
    height: 77px;
    top: 500px;
    left: 425px;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
`
const ImgStyle = styled.img`
    position: absolute;
    width: 700px;
    height: 600px;
    top: 10px;
    left: 400px;
`

function Error() {
    return (
        <DivContainer>
            <H1Style>Oups 🙈 ...</H1Style>
            <ImgStyle src={errorLogo} alt="Oups !!!" />
            <H2Style>Il semblerait qu'il y ait un problème</H2Style>
        </DivContainer>
    )
}
 
export default Error