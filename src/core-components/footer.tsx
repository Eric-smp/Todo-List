import { Text } from "../components/text";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer>
      <nav className="flex items-center justify-center gap-4">
        <NavLink to="/">
          <Text variant={"body-md-bold"} className="text-gray-400">
            Home
          </Text>
        </NavLink>
        <NavLink to="/components">
          <Text variant={"body-md-bold"} className="text-gray-400">
            Componentes
          </Text>
        </NavLink>
      </nav>
    </footer>
  );
}
