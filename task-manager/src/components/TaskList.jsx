import TaskItem from "@/components/TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
    if (!Array.isArray(tasks) || tasks.length === 0) {
        return <p className="text-center text-gray-500">No tasks yet</p>;
    }

    return (
        <div className="space-y-2">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </div>
    );
};

export default TaskList;
