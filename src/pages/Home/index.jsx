import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom"
import colors from '../../utils/style/colors'
import home_illustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
  position: absolute;
  width: 1313px;
  height: 824px;
  left: 95px;
  top: 200px;
  background: #F9F9FC;
`
const HomeIllustration = styled.img`
    position: absolute;
    height: 506px;
    width: 541px;
    left: 680px;
    top: 100px;
`
const HomeText = styled.h1`
    position: absolute;
    height: 249px;
    width: 552px;
    left: 110px;
    top: 100px;
    font-size: 50px;
    line-height: 80.25px;   
`
const HomeLink = styled(Link)`
    position: absolute;
    left: 110px;
    top: 520px;
    background-color: ${colors.primary};
    border-radius: 29px;
    ${(props) => 
    props.$link ? 
    `text-decoration: none;
    color: white;
    padding: 15px;
    font-size: 20px;` : null}  
`
// const Ballon = styled.div`
//   width: 100px;
//   height: 100px;
//   border-radius: 50px;
//   background-color: red;
//   transform: scale(${ ({ size }) => size });
// `
function Home() {
    const [size, setSize] = useState(1)
    return (
      <HomeContainer>
        <HomeText onClick={() => setSize(size + 0.1)}>Repérez vos besoins,on s’occupe du reste, avec les meilleurs talents</HomeText>
        {/* <Ballon size={size}/> */} 

        <HomeIllustration  src={home_illustration} alt="" />
        <nav>
          <HomeLink to="/survey/1" $link>Faire le test</HomeLink>
        </nav>
      </HomeContainer>
    );
}
  
export default Home;
  