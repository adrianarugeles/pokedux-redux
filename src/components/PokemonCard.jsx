import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={""}
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="fire, Magic"></Meta>
    </Card>
  );
};

export default PokemonCard;
