import styled from 'styled-components';
import { useState } from 'react';

const PostModal = (props) => {
    const [editorText, setEditorText] = useState("")

    const reset = (e) => {
        setEditorText("");
        props.handleClick(e)
    }
    return (
        <>
            {   props.showModal === "open" && 
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(e) => reset(e)}>
                                <img src="/images/close-icon.svg" alt="close-icon"/>
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                <img src="images/user.svg" alt="user" />
                                <span>Name </span>
                            </UserInfo>
                            <Editor>
                                <textarea value={editorText} onChange={(e) => setEditorText(e.target.value)} placeholder='What is on your mind?' autoFocus={true}></textarea>
                            </Editor>
                        </SharedContent>
                        <ShareCreation>
                            <AttachAssets>
                                <AssetButton>
                                    <img src="images/share-image.svg" alt="share-image" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="images/share-video.svg" alt="share-video" />
                                </AssetButton>
                            </AttachAssets>

                            <ShareComments>
                                <AssetButton>
                                    <img src="images/share-comments.svg" alt="share-comments" />
                                </AssetButton>
                            </ShareComments>

                            <PostButton disabled={!editorText ? true : false}>Post</PostButton>
                        </ShareCreation>
                    </Content>
                </Container>
            }          
        </>        
)};
const Container = styled.div `
    position: fixed;
    inset: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div `
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;

`;

const Header = styled.div `
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 0.85rem;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.15);
        svg, img {
            pointer-events: none;
        }
    }
`;

const SharedContent = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding:  8px 12px; 
`;

const UserInfo = styled.div `
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        margin-left: 5px;

    }
`;

const ShareCreation = styled.div `
    display: flex;
    justify-content: space-between;
    padding-block: 12px;
    padding-inline: 24px 16px;

`;

const AttachAssets = styled.div `
    display: flex;
    align-items: center;
    padding-right: 8px;
`;

const AssetButton = styled.div ` 
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.5);
    img {
        width: 30px;
        height: 30px; 
    }
`;

const ShareComments = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-inline: 16px;
    color: ${(props) => (props.disabled ? "white" : "rgba(1, 1, 1, 0.2")};
    background-color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.8)" : "#0a66c2")};
    &:hover {
        background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.8)" : "#004182")};
    }
`;

const Editor = styled.div`
    padding-block: 12px;
    padding-inline: 24px;
    textarea {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.8);
        min-height: 100px;
        resize: none;
    }

    input {
        width: 100%;
        height: 5px;
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;

export default PostModal;