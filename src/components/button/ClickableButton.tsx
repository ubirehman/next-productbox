"use client";

interface ButtonProps {
  styling?: string;
  title: string | React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  styling = "text-white bg-blue-600 rounded-3xl h-12 w-28 hover:text-gray-200 hover:bg-blue-700",
  title,
  onClick,
}) => {
  return (
    <button className={styling} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
