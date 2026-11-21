'use client';

import { useState } from 'react';

type Task = {
  id: number;
  title: string;
  deadline: string;
  pic: string;
  done: boolean;
};

type FilterMode = 'all' | 'active';

const tasks: Task[] =[
  {id: 1, title: 'サンプルタスク1', deadline: '2026-11-30', pic: '担当者A', done: false}, 
  {id: 2, title: 'サンプルタスク2', deadline: '2026-11-29', pic: '担当者B', done: true}
];



// 1件のタスクを受け取って表示する子コンポーネント
function TaskCard({ task }: { task: Task }) {
  return (
    <div className="rounded-xl bg-[#ffeecf] p-4 shadow">
      {/* ここに task のプロパティを表示する要素を追加 */}
      <p className="font-bold text-slate-900">{task.title}</p>
      <p className="text-sm text-slate-600">{task.deadline}</p>
      <p className="text-sm text-slate-600">{task.pic}</p>
      <p className={`text-sm font-bold ${task.done ? 'text-green-600':'text-red-600'}`}>{task.done ? '完了':'未完了'}</p>
    </div>
  );
}


export default function HomePage() {
  const [filter, setFilter] = useState<FilterMode>('all');

  const visibleTasks =
    filter === 'active'
      ? tasks.filter((task) => task.done === false)
      : tasks;

  return (
    // 外枠：画面中央に余白をとって配置
    <main className="min-h-screen bg-slate-100 p-8">
      {/* カード本体：白背景・角丸・影・内側余白 */}
      <div className="max-w-md rounded-xl bg-white p-6 shadow">
        {/* ここを書き換え演習：見出しテキストと文字色のクラスを変更 */}
        <h1 className="text-xl font-bold text-blue-600">
          タスクリスト
        </h1>
        <div className="p-1 space-x-1">
          <button type="button" onClick={() => setFilter('all')} className = "bg-[#bb1f25] text-white rounded p-2">すべて表示</button>
          <button type="button" onClick={() => setFilter('active')} className = "bg-[#bb1f25] text-white rounded p-2">未完了のみ</button>
        </div>
        <div className="mt-2 text-sm text-slate-600 space-y-2">
          {visibleTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
}