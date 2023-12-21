import prisma from "../utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "do something",
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  //console.log("TASKS: ", tasks);
  return (
    <div>
      <h1 className="text-7xl">Prisma Example Page</h1>
      {tasks.map((task) => {
        const { id, content } = task;
        return (
          <h2 key={id} className="text-xl py-2">
            {content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;
