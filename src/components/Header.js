import React, { Component } from 'react'
import Typist from 'react-typist'
import styled from 'styled-components'

const HeaderGroup = styled.div`
  display: grid;
  grid-template-columns: center;
  justify-items: center;
  margin-top: 64px;
`

const HeaderTitle = styled.h1`
  font-weight: 900;
  font-size: 72px;
  text-align: center;
  margin: 24px 0;

  @media (max-width: 640px) {
    font-size: 56px;
  }
`

// const HeaderSubTitle = styled.p`
//   font-size: 24px;
//   text-align: center;
//   margin-top: 0;
//   padding: 0 18px;
// `

const AgricultureSpan = styled.span`
  color: green;
`

const HealthcareSpan = styled.span`
  color: red;
`

const EducationSpan = styled.span`
  color: blue;
`

const EnvironmentSpan = styled.span`
  color: orange;
`

class Header extends Component{
    state = {
        typing : true
    }

    done = () => {
        this.setState({ typing: false }, () => {
          this.setState({ typing: true })
        });
      }
      render() {
        return <HeaderGroup>
            <HeaderTitle>
              Learn for
              {this.state.typing
                ? <Typist cursor={{blink : true}} onTypingDone={this.done}>
                    <AgricultureSpan>Agriculture</AgricultureSpan>
                    <Typist.Backspace count={13} delay={800} />
                    <HealthcareSpan> Healthcare </HealthcareSpan>
                    <Typist.Backspace count={12} delay={800} />
                    <EducationSpan> Education </EducationSpan>
                    <Typist.Backspace count={11} delay={800} />
                    <EnvironmentSpan> Environment </EnvironmentSpan>
                    <Typist.Backspace count={13} delay={800} />
                    <span> a Cause </span>
                    <Typist.Backspace count={9} delay={1000} />
                </Typist>
                : ''
              }
            </HeaderTitle>
        </HeaderGroup>  
      }

}

export default Header;
