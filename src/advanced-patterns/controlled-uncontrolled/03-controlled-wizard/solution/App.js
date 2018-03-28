import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Background} from '../shared/Background'
import {Box} from '../shared/Box'
import {Buttons} from '../shared/Buttons'
import {Content} from '../shared/Content'
import {StepBar} from '../shared/StepBar'
import {Wizard} from './Wizard'

export const App = () => (
  <BrowserRouter>
    <Background>
      <Route
        path="/:step?"
        render={({match, history}) => (
          <Box>
            <Wizard
              step={parseInt(match.params.step, 10) || 0}
              onChangeStep={index => history.push(`/${index}`)}
              header={StepBar}
              footer={Buttons}
            >
              <Wizard.Step>
                {() => <Content>This is the first step</Content>}
              </Wizard.Step>

              <Wizard.Step>{() => <Content>Another step</Content>}</Wizard.Step>

              <Wizard.Step>
                {({id}) => <Content>This is step number {id}</Content>}
              </Wizard.Step>

              <Wizard.Step>
                {({previousStep}) => (
                  <Content>
                    Want to go back?{' '}
                    <button onClick={previousStep}>Here!</button>
                  </Content>
                )}
              </Wizard.Step>

              <Wizard.Step>
                {({numberOfSteps}) => (
                  <Content>There are {numberOfSteps} steps in total</Content>
                )}
              </Wizard.Step>
            </Wizard>
          </Box>
        )}
      />
    </Background>
  </BrowserRouter>
)
