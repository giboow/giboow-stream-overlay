import styled, {keyframes, css} from "styled-components";

interface ChatMessageProps {
    isSubscriber: boolean;
}


const slideInLeft = keyframes`
  0% {
    transform: translate3d(-100%,0,0);
  }
  100% {
    transform: none;
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: none;
  }
  100% {
    transform: translate3d(-150%,0,0);
  }
`;

const ChatMessage = styled.div<ChatMessageProps>`
  animation: ${slideInLeft} 0.3s ease forwards;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-top: 6px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(90deg, var(--yellow) 0%, var(--yellow) 100%);
  box-shadow: 0rem 0.6rem 1rem -0.4rem var(--black);
  border-bottom-right-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  
  &:after {
    ${(props) => (props.isSubscriber ? renderSubscriberAfter : "")}
  }
`;

const renderSubscriberAfter = css`
  content: "";
  position: absolute;
  right: -4px;
  bottom: -13px;
  transform: rotate(45deg);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid var(--yellow);
`;

export {ChatMessage};
