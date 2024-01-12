import { databases } from "@/appwrite";
import Board from "@/components/Board";

export const getTodosGroupByColum = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  );

  const todos = data.documents;

  const columns = todos.reduce((acc, todo) => {
    if (!acc.get(todo.Statuse)) {
      acc.set(todo.Statuse, {
        id: todo.Statuse,
        todos: [],
      });
    }
    acc.get(todo.Statuse)!.todos.push({
      $id: todo.$id,
      $cretaeAt: todo.$createdAt,
      title: todo.Title,
      status: todo.Statuse,
      ...(todo.Image && { Image: JSON.stringify(todo.Image) }),
    });
    return acc;
  }, new Map<TypedColumn, Column>());

  ////For sen Empty Column:
  const columnTypes: TypedColumn[] = ["todo", "done", "inprogress"];

  for (const columnType of columnTypes) {
    if (!columns.get(columnType)) {
      columns.set(columnType, {
        id: columnType,
        todos: [],
      });
    }
  }

  //Sort Columns

  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );
  const board: Board = {
    columns: sortedColumns,
  };

  return board;
};
