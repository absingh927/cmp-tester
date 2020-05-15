import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.25rem 0.5rem;
  border-top: 2px solid rgba(186, 186, 186, 0.2);
  border-bottom: 2px solid rgba(186, 186, 186, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ContainerLeft = styled.div`
  img {
    border-radius: 50%;
    max-width: 40px;
  }
`;

const ContainerRight = styled.div`
  margin-left: 1rem;
`;

const Title = styled.div`
  color: #000;
  font-weight: 800;
  display: flex;
  align-items: center;
`;

const Pill = styled.div`
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  padding: 0.2rem 0.625rem;
  border-radius: 10rem;
  margin: 0 0.5rem;
  font-size: 0.625rem;
  font-weight: 600;
`;

const Duration = styled.div`
  color: #bababa;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
`;

const ActionBtn = styled.button`
  background-color: transparent;
  margin: 0 0.25rem;
  border: none;
  font-size: 0.75rem;
  cursor: pointer;
  color: ${(props) => (props.isHovering ? "#5c5c5c" : "#bababa")};

  &:focus {
    outline: none;
  }

  span {
    color: ${(props) => (props.isHovering ? "#5c5c5c" : "#919191")};
  }
`;

const Body = styled.div`
  margin: 0.5rem 0;
  line-height: 1.5rem;
`;

const UserComment = (props) => {
  const [isHovering, setHovering] = React.useState(false);

  return (
    <Container
      onMouseEnter={() => setHovering(!isHovering)}
      onMouseLeave={() => setHovering(!isHovering)}
    >
      <ContainerLeft>
        <img src="http://placekitten.com/100/100" alt="user" />
      </ContainerLeft>
      <ContainerRight>
        <Title>
          {props.data.name}
          <Pill>{props.data.role}</Pill>
          <Duration>&#183; {props.data.duration} minutes ago</Duration>
        </Title>
        <Body>{props.data.comment}</Body>
        <Actions>
          <ActionBtn
            isHovering={isHovering}
            style={{ paddingLeft: 0, marginLeft: 0 }}
          >
            REPLY
          </ActionBtn>
          <ActionBtn isHovering={isHovering}>
            <span>{props.data.replies}</span>&nbsp;REPLIES
          </ActionBtn>
          <ActionBtn isHovering={isHovering}>
            <i className="fas fa-chevron-up"></i>&nbsp;{props.data.upVote}
          </ActionBtn>
          <ActionBtn isHovering={isHovering}>
            <i className="fas fa-chevron-down"></i>
            &nbsp;{props.data.downVote}
          </ActionBtn>
        </Actions>
      </ContainerRight>
    </Container>
  );
};

export default UserComment;
