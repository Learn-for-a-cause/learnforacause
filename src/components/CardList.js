import React from 'react'
import styled from 'styled-components'

const List = styled.div`
  margin-top: 64px 18px 18px 24px;
  display: grid;
  grid-template-columns: 1;
  justify-items: center;
  &:target {
	  animation: highlight 1s ease-out;
  }
  &:focus {
	  outline: none;
  }
  @keyframes highlight {
    50% {
      background-color: #3e30e080;
    }
  }
`

const CardWrapper = styled.div`
  width: 1000px;
  border-radius: 12px;
  background-color: #FAFAFA;
  padding: 18px 32px;
  margin: 24px 0;
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  display: grid;
  position: relative;
  grid-template-rows: 1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 640px) {
    width: 300px;
  }
`
const CardTitle = styled.h1`
  line-height: 1.4;
  margin-top: 8px;
`

const CardText = styled.li`
  margin-top: 8px;
`

const Register = styled.button`
  font-weight: 600;
  color: #FFF;
  text-transform: uppercase;
  background: #3E30E0;
  padding: 18px 32px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  transition: transform 0.05s linear;
  outline: none;
  border: none;
  position: absolute;
  bottom: 10%;
  right: 5%;
  &::-moz-focus-inner {
    border: 0;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  }
  &:focus {
		outline: 2px dotted #3E30E0;
	}
`


const url = 'https://forms.gle/eoLML1HjpHEF2o1D8';


const Card = ({data}) => (
    <List>
        <CardWrapper>
            <CardTitle>Machine Learning Intro - Hands-on Workshop</CardTitle>
            
            <CardText>ML Tools & Environment</CardText>
            <CardText>Data Preparation</CardText>
            <CardText>ML Models - (Logistic regression & Linear regression)</CardText>
            <CardText>Model Training</CardText>
            <CardText>ML resources </CardText>
            
            <Register onClick={() => window.open(url, '_blank')} >Register</Register>
        </CardWrapper>
    </List>
)

export default Card