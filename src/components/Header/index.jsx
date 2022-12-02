import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const StyledNav = styled.div`
    position: absolute;
    width: 80px;
    height: 22px;
    left: 1090px;
    top: 49px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
`
const HeadLogo = styled.img`
    position: absolute;
    height: 70px;
    left: 83px;
    top: 30px;
`
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary}`};
    
`

function Header() {
    return (
        <nav>
            <Link to='/'>
                <HeadLogo src={logo} alt="shini-agency" />
            </Link>
            <StyledNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Questionnaire</StyledLink>
            </StyledNav>
        </nav>
    )
}

export default Header