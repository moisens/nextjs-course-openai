import prisma from "../utils/db";
import DeleteForm from "../components/DeleteForm";
import Link from "next/link";

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
  if (tasks.length === 0)
    return <h2 className="mt-8 font-medium text-lg">No Tasks to show!🤷🏽</h2>;

  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        const { id, content, completed } = task;
        return (
          <li
            key={id}
            className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
          >
            <h2
              className={`text-lg capitalize ${
                completed ? "line-through" : null
              }`}
            >
              {content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link href={`/tasks/${id}`} className="btn btn-accent btn-xs">
                Edit
              </Link>
              <DeleteForm id={id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
