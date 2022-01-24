import styled from 'styled-components';

interface MessageQueueProps {}

const MessageQueue = styled.div<MessageQueueProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  bottom: 300px;
  width: 400px;
  z-index: 2;
  background-color: #ffffffc0;
  margin: 0 20px;
  padding: 20px;
 
`;

export { MessageQueue };
