
import Button from './Button'
import styled from 'styled-components';




function LandingPage(){

    


    const ContainerLand = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');
        font-family: 'Delius', cursive;;
        height: 100vh;
        width: 100%;
        background-image: url(https://orig04.deviantart.net/c064/f/2016/115/2/a/purple_eared_pikachu_animation_by_moxie2d-da0a8i5.gif);
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const H1Land = styled.h1`
        font-size: 55px;
        letter-spacing: 4px;
        color: #5F4B99;
        margin-top: 0;
        margin-bottom:20px;
    `;

    const BlockLand = styled.div`
        margin-left: 60px;
        position: relative;
        top: 170px;
    `;

    return (
        
        <ContainerLand>
            <BlockLand>
                <H1Land>Ready for the <br/>pokexperience?</H1Land>
                <Button/>
            </BlockLand>
        </ContainerLand>
    )
}

export default LandingPage;