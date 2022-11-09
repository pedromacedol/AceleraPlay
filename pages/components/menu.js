import styled from "styled-components";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 90px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "blue"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <img className="logo" src="https://d335luupugsy2.cloudfront.net/cms/files/239561/1650489512/$icb9jmu9fhi" />
  )
}