import type { FC } from 'react';

interface Props {
  params: {
    taskId: string
  },
  searchParams: {}
}

const Task: FC<Props> = ({ params }) => {
  const { taskId } = params;
  return (
    <div>
      task {taskId}
    </div>
  );
}
export default Task
