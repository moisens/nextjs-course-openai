import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-7xl">Tasks Page</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
