import React, {useContext} from 'react'
import { SurveyContext } from '../../utils/context'


function Results() {
const {answers} = useContext(SurveyContext)
// eslint-disable-next-line no-console
console.log(answers)
  return (
    <div>
      <h1>RESULTS !</h1>
    </div>
  )
}

export default Results
