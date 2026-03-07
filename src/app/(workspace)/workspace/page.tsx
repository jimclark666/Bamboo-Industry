import { DashboardSection } from '@/components/workspace/DashboardSection';
import { MetricCard } from '@/components/workspace/MetricCard';
import { WorkspacePageHeader } from '@/components/workspace/WorkspacePageHeader';
import { WORKSPACE_ALERTS, WORKSPACE_PROGRESS, WORKSPACE_STAT_CARDS, WORKSPACE_TODOS } from '@/constants/workspace';
import { workspaceStyles } from '@/components/workspace/styles';

const PAGE_ACTIONS = [
  { label: '进入资源协同', tone: 'primary' },
  { label: '查看规则中心', tone: 'secondary' },
  { label: '导出工作摘要', tone: 'secondary' }
] as const;

export default function WorkspaceHomePage() {
  return (
    <div className="grid gap-4">
      <WorkspacePageHeader
        actions={PAGE_ACTIONS}
        description="欢迎进入 BambooLink 协作系统工作台，以下信息用于辅助日常协作安排。"
        title="工作概览"
      />

      <section className={workspaceStyles.metricGrid}>
        {WORKSPACE_STAT_CARDS.map((item) => (
          <MetricCard key={item.title} note={item.note} title={item.title} value={item.value} />
        ))}
      </section>

      <div className={workspaceStyles.gridTwo}>
        <DashboardSection description="优先处理影响协作效率与状态同步的事项。" title="待处理事项">
          <ul className={workspaceStyles.list}>
            {WORKSPACE_TODOS.map((todo) => (
              <li className={workspaceStyles.listItem} key={todo}>
                {todo}
              </li>
            ))}
          </ul>
        </DashboardSection>

        <DashboardSection description="按照协作链路查看当前推进状态。" title="协作进度概览">
          <ul className={workspaceStyles.list}>
            {WORKSPACE_PROGRESS.map((item) => (
              <li className={workspaceStyles.listItem} key={item.phase}>
                <p className="text-sm font-semibold text-neutral-900">{item.phase}</p>
                <p className="mt-1 text-sm text-neutral-700">{item.status}</p>
              </li>
            ))}
          </ul>
        </DashboardSection>
      </div>

      <DashboardSection description="规则更新与异常提示将影响后续协作处理节奏。" title="规则与异常提醒">
        <ul className={workspaceStyles.list}>
          {WORKSPACE_ALERTS.map((item) => (
            <li className={workspaceStyles.listItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </DashboardSection>
    </div>
  );
}
