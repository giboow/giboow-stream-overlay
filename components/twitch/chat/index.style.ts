import styled from 'styled-components';

interface MessageQueueProps {}

const MessageQueue = styled.div<MessageQueueProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
 
  overflow: hidden;
  bottom: 500px;
  width: 400px;
  z-index: 2;
 
`;

export { MessageQueue };
