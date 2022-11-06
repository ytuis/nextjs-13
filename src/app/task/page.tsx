import Link from "next/link"

const TaskList = () => {
  return (
    <div>
      task list
      <ul>
        <li>
          <Link href="/task/1">1</Link>
        </li>
        <li>
          <Link href="/task/2">2</Link>
        </li>
        <li>
          <Link href="/task/3">3</Link>
        </li>
      </ul>
    </div>
  );
}
export default TaskList
