import styled from 'styled-components';

const Main = (props) => {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src="images/user.svg" alt="user-image" />
                    <button>Start a post</button>
                </div>

                <div>
                    <button>
                        <img src="images/gallery.svg" alt="gallery-svg" width={24} height={24}/>
                        <span>Media</span>
                    </button>
                    <button>
                        <img src="images/events.svg" alt="gallery-svg" width={24} height={24}/>
                        <span>Event</span>
                    </button>
                    <button>
                        <img src="images/article.svg" alt="gallery-svg" width={24} height={24}/>
                        <span>Article</span>
                    </button>
                </div>
                
            </ShareBox>
        </Container>
    );
}

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff; 
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;
  div {
    button {
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 1rem;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child {
        display: flex;
        align-items: center;
        padding: 8px 16px 0px;
        img {
            width: 48px;
            border-radius: 50%;
            margin-right: 8px
        }
        button {
            margin: 4px 0;
            flex-grow: 1;
            border-radius: 35px;
            border: 1px solid rgba(0, 0, 0, 0.6);
            padding-left: 1em;
            background: white;
            text-align: left;
        }
    }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
            padding-top: 8px;
        }
  }
`;

export default Main;