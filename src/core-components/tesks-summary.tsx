import Badge from "../components/badge";
import { Text } from "../components/text";

export default function TesksSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant={"secondary"}> 5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant={"body-sm-bold"} className="!text-gray-300">
          Concluidas
        </Text>
        <Badge variant={"primary"}> 5</Badge>
      </div>
    </>
  );
}
