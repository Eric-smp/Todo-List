import Container from "../components/conteiner";
import TasksList from "../core-components/tasks-list";
import TesksSummary from "../core-components/tesks-summary";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TesksSummary />
      </header>
      <TasksList />
    </Container>
  );
}
