
import Button from './Button'
import styled from 'styled-components';




function LandingPage(){

    


    const Container = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');
        font-family: 'Delius', cursive;;
        height: 100vh;
        width: 100%;
        background-image: url(https://orig04.deviantart.net/c064/f/2016/115/2/a/purple_eared_pikachu_animation_by_moxie2d-da0a8i5.gif);
        background-repeat: no-repeat;
        background-size: cover;
    `;

    const H1 = styled.h1`
        font-size: 55px;
        letter-spacing: 4px;
        color: #5F4B99;
        margin-top: 0;
    `;

    const Block = styled.div`
        margin-left: 60px;
        position: relative;
        top: 170px;
    `;

    return (
        
        <Container>
            <Block>
                <H1>Ready for the <br/>pokexperience?</H1>
                <Button/>
            </Block>
        </Container>
    )
}

export default LandingPage;