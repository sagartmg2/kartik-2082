import Banner from "./Banner";
import Header from "./Header";

export const Theme = ({ theme,changeTheme }) => {
  return (
    <>
      <Header theme={theme} changeTheme={changeTheme} />
      <Banner />
    </>
  );
};
