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
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="images/user.svg" alt="user-image" width={48} height={48}/> 
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>
                        <button>
                            <img src="images/ellipsis.svg" alt="ellipsis-svg" width={30} height={30} />
                        </button>
                    </SharedActor>
                    <Description>Description</Description>
                    <SharedImg>
                        <a>
                            <img src="images/kratos.jpg" alt="kratos" />
                        </a>
                    </SharedImg>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="like=icon" />
                                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="like=icon" />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>
                                2 comments 
                            </a>
                        </li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <img src="images/like-iconsvg.svg" alt="like-icon" width={24} height={24}/>
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="images/comments.svg" alt="comment-icon" width={24} height={24}/>
                            <span>Comment</span>
                        </button>
                        <button>
                            <img src="images/share-icon.svg" alt="share-icon" width={24} height={24}/>
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="images/send-icon.svg" alt="send-icon" width={24} height={24}/>
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
            </div>
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

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        & > div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        margin-left: 8px;
        overflow: hidden;
        span {
            text-align: left;
            &:first-child {
                font-size: 1rem;
                font-weight: 700;
                color: rgba(0, 0, 0, 1);
            }

            &:nth-child(n + 1) {
                font-size: 1rem;
                color: rgba(0, 0, 0, 0.6);
            }
        }
      }
    }
    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    text-align: left;
    font-size: 1rem;
`;

const SharedImg =  styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9f9f9;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCounts = styled.div`
list-style: none;
    display: flex;
    align-items: flex-start;
    padding: 8px 0;
    margin: 0 16px;
    overflow: auto;
    border-bottom: 1px solid #e9e5df; 
    line-height: 1.3;
    li {
        font-size: 0.8rem;
        margin-right: 5px;
        button {
            display: flex;
            align-items: center;
        }
    }
`;

const SocialActions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;
        
        @media (min-width: 768px) {
            span {
                margin-left: 8px;
            }
        }
    }
`;

export default Main;