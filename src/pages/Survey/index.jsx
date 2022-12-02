/* eslint-disable no-console */
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useContext } from 'react'
import colors from '../../utils/style/colors'
// import { useEffect, useState } from 'react'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`


function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  const { surveyData } = data

  // const [surveyData, setSurveyData] = useState({})
  // const [isDataLoading, setDataLoading] = useState(false)

  // recuperation de notre contexte
  const { answers, saveAnswers } = useContext(SurveyContext) 

  //fonction qui permet d'ajouter un objet "answer" dans notre surveyContext
  function saveReply(answer) { 
    saveAnswers({ [questionNumber]: answer })
  }

  // useEffect(() => {
  //   setDataLoading(true)
  //   fetch(`http://localhost:8000/survey`)
  //        .then((response) => response.json()
  //        .then(({ surveyData }) => {
  //           setSurveyData(surveyData)
  //           setDataLoading(false)
  //         })
  //        .catch((error) => console.log(error))
  //     )
  // }, [])

  if (error) {

    return <span>Il y a un problème</span>
    
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {/* recupération et affichage du contenu du tableau SurveyData*/}
      {isLoading ? (
        <Loader />
      ) : ( 
        //on vérifie d'abord si surveyData existe avant d'afficher son contenu
        <QuestionContent>
          {surveyData && surveyData[questionNumber]} 
        </QuestionContent>
      )}

      <ReplyWrapper>
        <ReplyBox //bouton
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true} //isSelected va prendre la valeur de true ou false
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>

      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {/** on verifie si surveyData existe et si surveyData[questionNumberInt + 1] existe aussi*/}
        {surveyData && surveyData[questionNumberInt + 1] ? (
            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
            <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
   </SurveyContainer>
  )
}
export default Survey