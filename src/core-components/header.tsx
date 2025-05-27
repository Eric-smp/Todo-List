import Container from "../components/conteiner";
import Logo from "../assets/images/logo.svg?react";
export default function Header() {
  return (
    <Container as={"header"} className="pt-[5rem]">
      <Logo className="h-9 md:h-12" />
    </Container>
  );
}
