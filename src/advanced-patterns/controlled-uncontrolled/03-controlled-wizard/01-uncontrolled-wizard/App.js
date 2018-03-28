import React from 'react'
import {Background} from '../shared/Background'
import {Box} from '../shared/Box'
import {Content} from '../shared/Content'
import {Wizard} from './Wizard'

export const App = () => (
  <Background>
    <Box>
      <Wizard>
        <Wizard.Step>
          {({nextStep}) => (
            <Content>
              This is the first step <button onClick={nextStep}>Next</button>
            </Content>
          )}
        </Wizard.Step>

        <Wizard.Step>
          {({id, previousStep, numberOfSteps}) => (
            <Content>
              This is step {id}/{numberOfSteps}.{' '}
              <button onClick={previousStep}>Back</button>
            </Content>
          )}
        </Wizard.Step>
      </Wizard>
    </Box>
  </Background>
)
