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
  background-color: #f5f5f5d0;
  padding: 8px 16px;
  margin-bottom: 8px;
`;

interface ChatMessageUserProps {
    color: string;
}

const ChatUser = styled.div<ChatMessageUserProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1rem;
  margin: 0 1.5rem 0 0;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 3px;
  background-color: #FFFFFF;
  color: ${props => props.color};
  
 `;

const ChatMessageContent = styled.div`
  display: flex;
  flex-direction: row`;


export {ChatMessage, ChatUser, ChatMessageContent};


