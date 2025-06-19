import { useState} from "react";
import { Input} from "@/components/ui/Input";
import { Button} from "@/components/ui/Button";

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!title.trim()) return;
        addTask(title.trim());
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <Input
               type="text"
               placeholder="Enter a new task"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="flex-1"
               />
               <Button type="submit">Add</Button>
        </form>
    );

};

export default TaskForm;