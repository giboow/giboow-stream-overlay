import styled, {keyframes, css} from "styled-components";

interface ChatMessageProps {
    isSubscriber: boolean;
}


const slideInLeft = keyframes`
  0% {
    transform: translate3d(100%,0,0);
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
    transform: translate3d(150%,0,0);
  }
`;

const ChatMessage = styled.div<ChatMessageProps>`
  animation: ${slideInLeft} 0.3s ease forwards, ${slideOutLeft} 0.5s ease 30000ms forwards;
  display: flex;
  flex-direction: row;
`;

interface ChatMessageUserProps {
    color: string;
}

const ChatUser = styled.div<ChatMessageUserProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #f5f5f5;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props => props.color};
  
 `;

export {ChatMessage, ChatUser};
