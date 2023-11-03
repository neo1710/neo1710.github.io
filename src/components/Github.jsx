import { Element } from "react-scroll"
import { Title } from "./globalStyledComponents"
import GitHubCalendar from 'react-github-calendar';
import styled from "styled-components"


export const Github=()=>{

    return (
        <Element name="GitHub" id="github">
            <DIV>
            <Title className="git">
              <h2>GitHub</h2>
              <div className="underline"></div>
            </Title>
<div>
<GitHubCalendar username="neo1710"/>
</div>

<a style={{marginTop:"10px"}} href="https://git.io/streak-stats">
        <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=neo1710" alt="GitHub Streak" />
        </a><br />

        <picture>
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=neo1710&show_icons=true&theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://github-readme-stats.vercel.app/api?username=neo1710&show_icons=true"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=neo1710&show_icons=true" alt="none"/>
</picture><br/>
<picture >

  <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=neo1710&layout=donut" alt="none"/>
</picture><br/>

        </DIV>
        </Element>
    )
}



const DIV=styled.div`
div{
    width: 60%;
    margin: auto;
}
 .git{
    display: block;
    text-align: center;
 }   
img{
    display: block;
    margin: auto;
  margin-top:15px;
}
`