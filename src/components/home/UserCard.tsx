import React from "react";
import { Card } from "semantic-ui-react";
import Image from "../../images/matthew.png";

const UserCard: React.FC = () => {
  return (
    <Card
      image={Image}
      header="Elliot Baker"
      meta="Friend"
      description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    />
  );
};

export default UserCard;
