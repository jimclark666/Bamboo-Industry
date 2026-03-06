import Link from 'next/link';
import { WORKSPACE_EMPTY_TEXT } from '@/constants/workspace';
import type { FulfillmentRecord } from '@/constants/workspace';
import { workspaceStyles } from './styles';
import { FulfillmentStatusTag } from './FulfillmentStatusTag';

type FulfillmentTableProps = {
  items: readonly FulfillmentRecord[];
};

export function FulfillmentTable({ items }: FulfillmentTableProps) {
  return (
    <section className={workspaceStyles.tableCard}>
      <div className={workspaceStyles.tableWrap}>
        <table className={workspaceStyles.table}>
          <thead>
            <tr>
              <th>关联资源</th>
              <th>关联询价记录</th>
              <th>协作双方</th>
              <th>地区</th>
              <th>当前履约阶段</th>
              <th>风险状态</th>
              <th>最近更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <p className="font-medium text-neutral-900">{item.resourceName}</p>
                  <p className="mt-1 text-xs text-neutral-500">编号：{item.id}</p>
                </td>
                <td>{item.inquiryId}</td>
                <td>{item.partners}</td>
                <td>{item.region}</td>
                <td>
                  <FulfillmentStatusTag stage={item.stage} />
                </td>
                <td>{item.risk}</td>
                <td>{item.updatedAt}</td>
                <td>
                  <div className={workspaceStyles.rowActions}>
                    <Link className={workspaceStyles.inlineAction} href={`/inquiry-quotes?keyword=${item.inquiryId}`}>
                      回看询价
                    </Link>
                    {item.risk !== '正常' && (
                      <Link className={workspaceStyles.inlineAction} href={`/rules-disputes?relatedRef=${item.id}`}>
                        查看规则/争议
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {items.length === 0 && (
        <p className={workspaceStyles.tableEmpty}>{WORKSPACE_EMPTY_TEXT.filtered}</p>
      )}
    </section>
  );
}
