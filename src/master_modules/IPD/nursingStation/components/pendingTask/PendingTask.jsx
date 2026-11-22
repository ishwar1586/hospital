import pendingTasks from "@/master_modules/IPD/nursingStation/mock/pendingTask.mock";

import "@/master_modules/IPD/nursingStation/styles/pendingtask.css";

const PendingTasks = () => {

  return (

    <div className="pending-tasks-card">

      <div className="pending-header">

        <h3>
          Pending Tasks
        </h3>

        <button>
          View All
        </button>

      </div>

      <div className="pending-task-list">

        {pendingTasks.map((task) => (

          <div
            key={task.id}
            className="task-item"
          >

            <div className="task-info">

              <h4>
                {task.taskName}
              </h4>

              <p>
                {task.patientName}
                {" - "}
                {task.room}
              </p>

            </div>

            <div className="task-right">

              <span className="task-time">

                {task.time}

              </span>

              <span
                className={`priority-badge ${task.priority.toLowerCase()}`}
              >

                {task.priority}

              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default PendingTasks;