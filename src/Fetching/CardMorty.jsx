import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const CardMorty = (props) => {
  const { name, gender, image } = props.character;
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{gender}</CardSubtitle>
          <CardText>Example Text</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardMorty;
