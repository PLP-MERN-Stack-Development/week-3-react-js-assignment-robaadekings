import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";

const TaskItem = ({ task, deleteTask, toggleComplete}) => {
    return (
        <Card className="p-4 flex justify-between items-start">
            <div className="flex items-center gap-3">
                <Checkbox
                checked={task.completed}
                onCheckChange={ () => toggleComplete(task.id)}
                />
                <span 
                className={`text-base ${
                    task.completed ? "line-through text-gray-400" : ""
                } ${task.important ? "font-semibold text-red-600"  :
                     ""}`}
                >
                    {task.title}

                </span>
                 </div>
                <Button variant="destructive" size="sm" onClick={ () => deleteTask(task.id)}>
                    Delete

                </Button>


           

        </Card>
    );
};

export default TaskItem;