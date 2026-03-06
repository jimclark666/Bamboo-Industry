import Link from 'next/link';
import { WORKSPACE_EMPTY_TEXT } from '@/constants/workspace';
import type { DisputeRecord } from '@/constants/workspace';
import { DisputeStatusTag } from './DisputeStatusTag';
import { workspaceStyles } from './styles';

type DisputeTableProps = {
  items: readonly DisputeRecord[];
};

export function DisputeTable({ items }: DisputeTableProps) {
  return (
    <section className={workspaceStyles.tableCard}>
      <div className={workspaceStyles.tableWrap}>
        <table className={workspaceStyles.table}>
          <thead>
            <tr>
              <th>关联资源/记录</th>
              <th>争议/异常类型</th>
              <th>发起方</th>
              <th>地区</th>
              <th>当前处理状态</th>
              <th>更新时间</th>
              <th>说明</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <p className="font-medium text-neutral-900">{item.relatedName}</p>
                  <p className="mt-1 text-sm text-neutral-500">关联编号：{item.relatedRef}</p>
                  <p className="mt-1 text-sm text-neutral-500">关联编号：{item.relatedRef}</p>
main
                </td>
                <td>{item.disputeType}</td>
                <td>{item.initiator}</td>
                <td>{item.region}</td>
                <td>
                  <DisputeStatusTag status={item.status} />
                </td>
                <td>{item.updatedAt}</td>
                <td>{item.summary}</td>
                <td>
                  <div className={workspaceStyles.rowActions}>
                    <Link className={workspaceStyles.inlineAction} href={`/governance?subject=${item.initiator}`}>
                      查看治理上下文
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
