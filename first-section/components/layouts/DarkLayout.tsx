const DarkLayout = ({ children }: { children: JSX.Element }) => {
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
