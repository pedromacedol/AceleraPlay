import data from "./data.json";
import styled from 'styled-components';

const StyledHeader = styled.div`
    .profile_picture{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
    
    .user-info{
        margin-top: 100px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    `;

function Header() {
    return (
        <StyledHeader>
            
            <section className="user-info">
                <img className="profile_picture" src={`http://github.com/${data.github}.png`} />
                <div>
                    <h2> 
                        {data.name}
                    </h2>
                    <p>
                        {data.job}  
                    </p>
                </div>

            </section>
        </StyledHeader>
    )
}

export default Header;