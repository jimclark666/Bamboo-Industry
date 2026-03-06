import Link from 'next/link';
import { WORKSPACE_EMPTY_TEXT } from '@/constants/workspace';
import type { GovernanceRecord } from '@/constants/workspace';
import { GovernanceRiskTag } from './GovernanceRiskTag';
import { GovernanceStatusTag } from './GovernanceStatusTag';
import { workspaceStyles } from './styles';

type GovernanceTableProps = {
  items: readonly GovernanceRecord[];
};

export function GovernanceTable({ items }: GovernanceTableProps) {
  return (
    <section className={workspaceStyles.tableCard}>
      <div className={workspaceStyles.tableWrap}>
        <table className={workspaceStyles.table}>
          <thead>
            <tr>
              <th>主体名称</th>
              <th>主体类型</th>
              <th>关联链路概览</th>
              <th>当前风险等级</th>
              <th>当前治理状态</th>
              <th>最近更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <p className="font-medium text-neutral-900">{item.subjectName}</p>
                  <p className="mt-1 text-sm text-neutral-500">主体编号：{item.id}</p>
                  <p className="mt-1 text-sm text-neutral-500">主体编号：{item.id}</p>
main
                </td>
                <td>{item.subjectType}</td>
                <td>
                  <p className="text-sm text-neutral-700">
                    资源 {item.resourceCount} / 询价 {item.inquiryCount} / 履约 {item.fulfillmentCount} / 争议 {item.disputeCount}
                  </p>
                </td>
                <td>
                  <GovernanceRiskTag level={item.riskLevel} />
                </td>
                <td>
                  <GovernanceStatusTag status={item.status} />
                </td>
                <td>{item.updatedAt}</td>
                <td>
                  <div className={workspaceStyles.rowActions}>
                    <Link className={workspaceStyles.inlineAction} href={`/rules-disputes?keyword=${item.subjectName}`}>
                      查看争议上下文
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length === 0 ? <p className={workspaceStyles.tableEmpty}>{WORKSPACE_EMPTY_TEXT.filtered}</p> : null}
    </section>
  );
}
