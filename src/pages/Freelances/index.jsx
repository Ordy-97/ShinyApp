/* eslint-disable no-console */
import styled from 'styled-components'
// import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         picture: DefaultPicture,
//     },
// ]

const CardsContainer = styled.div`
    position: absolute;
    left: 342px;
    top: 447px;
    display: grid;
    gap: 65px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`
const DivContainer = styled.h1`
    position: absolute;
    text-align: center;
    line-height: 132.5%;
    ${(props) =>
        props.$h1 && 
        `font-size: 30px;
        color: black;
        width: 448px;
        height: 45px;
        left: 500px;
        top: 226px;`};
    ${(props) =>
        props.$h3 && 
        `font-size: 20px;
        color: ${colors.secondary};
        width: 1002px;
        height: 27px;
        left: 202px;
        top: 323px;`};        
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 400px;
  left: 655px
`

function Freelances() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])

//   useEffect(() => {
//     async function fetchFreelances() {
//       setDataLoading(true)
//       try {
//         const response = await fetch(`http://localhost:8000/freelances`)
//         const { freelancersList } = await response.json()
//         setFreelancesList(freelancersList)
//       } catch (err) {
//         console.log('===== error =====', err)
//         setError(true)
//       } finally {
//         setDataLoading(false)
//       }
//     }
//     fetchFreelances()
//   }, [])
  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/freelances`)
    .then((response) => response.json()
        .then(({ freelancersList }) => {
            setFreelancesList(freelancersList)
            setDataLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setError(true)
        })
    )
  },[])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <div>
    <DivContainer $h1>Trouvez votre prestataire</DivContainer>
    <DivContainer $h3>Chez Shiny nous réunissons les meilleurs profils pour vous.</DivContainer>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}
export default Freelances

