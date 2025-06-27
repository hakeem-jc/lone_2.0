type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="w-[350px] p-6 bg-secondary rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-400">{description}</p>
    </div>
  );
};

export default Card;