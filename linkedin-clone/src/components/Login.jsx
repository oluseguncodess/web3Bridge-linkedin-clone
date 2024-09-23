import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src="../images/login-logo.svg" alt="login-logo" />
                </a>
                <div>
                    <Join>Join now</Join>
                    <SignIn>Sign in</SignIn>
                </div>
                
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                </Hero>
            </Section>
        </Container>
        
    );
};

const Container = styled.div `
padding: 0px;
`;

const Nav = styled.nav `
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-wrap: nowrap;

    & > a {
        width: 135px;
        height: 34px;
    }

    @media (max-width: 768px) {
        padding: 0 5px;
    }
`;

const Join = styled.a`
    padding: 10px 12px;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    text-decoration: none;
    text-align: center;
    border-radius: 4px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
    }
`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    font-size: 1.2rem;
    color: #0a66c2;
    font-weight: 600;
    border-radius: 24px;
    transition-duration: 167ms;
    line-height: 40px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    padding: 10px 24px;
`;

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0px;

    }
`;

const Hero = styled.div`
    width: 100%;
    h1  {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9
    }
`;

export default Login;