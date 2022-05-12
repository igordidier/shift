import styled from "styled-components";

const CARD = styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  background-color: #35353f;
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
`;

const Image = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 50%;
  bottom: 85%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const TEXT = styled.h4`
  color: var(--white);
  padding: 0 calc(1rem + 1vw);

  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  color: #fe006b;
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;
const ULR = styled.a`
background-color: white;
padding: 0.5rem 1rem;
border-radius: 20px;
color: var(--white);
font-weight: 600;
cursor: pointer;
transition: all 0.2s;
&:hover {
  transform: scale(1.1);
}
&:focus {
  transform: scale(0.9);
}
@media only Screen and (max-width: 40em) {
  font-size: 1.2rem;
  &:hover {
    transform: none;
  }
  &:focus {
    transform: none;
  }
}
`;

const Card = ({ name, ulr, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <CARD>
      <Image img={Avatar} width="400" height="400" />
      <br/>
      <NAME>{name}</NAME>
      <br/>
      <TEXT>{text}</TEXT>
      <br/>
      <ULR><a href={ulr} target="_blank">Voir</a></ULR>

    </CARD>
  );
};

export default Card;
