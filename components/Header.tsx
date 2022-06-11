
import Menu from "./Menu";

type Props = {
  menu: { label: string, href: string }[]
}

const Header = ({ menu } : Props) => {
  return (
    <div className="bg-slate-800">
      <Menu menu={menu} />
     </div>
  );
};

export default Header;
