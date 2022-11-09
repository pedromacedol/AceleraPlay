
import Header from './components/header';
import Timeline from './components/timeline';
import data from './components/data.json';
import styled from 'styled-components';
import { CSSReset } from './components/CSSReset';
import Menu from './components/menu';


const HomeStyled = styled.div`
    background-color: #fff;

  `;


export default function Home() {
  return (
    <>
      <CSSReset/>
      <HomeStyled> 
        <Menu/>
        <Header/>
        <Timeline playlists={data.playlists}>
          Contéudo
        </Timeline>
      </HomeStyled>

    </>
    
  )
}
