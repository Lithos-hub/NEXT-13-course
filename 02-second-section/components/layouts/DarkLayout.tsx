import { FC } from "react";

const DarkLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#202020",
        padding: "20px",
        color: "#49b9ed",
        fontWeight: "light",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default DarkLayout;
